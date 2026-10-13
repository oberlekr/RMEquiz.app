const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || process.argv[2] || 8744;
const DATA_FILE = path.join(__dirname, 'data.json');
const DEFAULT_QUESTIONS = require('./default-questions.js');

function loadData() {
    if (fs.existsSync(DATA_FILE)) {
        try { return JSON.parse(fs.readFileSync(DATA_FILE, 'utf8')); } catch (e) { console.warn('Nie można wczytać data.json, startuję od zera:', e.message); }
    }
    return { questions: DEFAULT_QUESTIONS, settings: { mode: 'always', start: '', end: '' }, results: [] };
}

let state = loadData();

function persist() {
    fs.writeFileSync(DATA_FILE, JSON.stringify(state, null, 2));
}

function sendJSON(res, code, obj) {
    const body = JSON.stringify(obj);
    res.writeHead(code, { 'Content-Type': 'application/json; charset=utf-8', 'Access-Control-Allow-Origin': '*' });
    res.end(body);
}

const MIME = { '.html': 'text/html; charset=utf-8', '.js': 'application/javascript', '.css': 'text/css', '.json': 'application/json', '.png': 'image/png', '.ico': 'image/x-icon' };

function serveStatic(req, res) {
    let urlPath = decodeURIComponent(req.url.split('?')[0]);
    if (urlPath === '/') urlPath = '/index.html';
    const full = path.normalize(path.join(__dirname, urlPath));
    if (!full.startsWith(__dirname)) { res.writeHead(403); res.end('Forbidden'); return; }
    fs.readFile(full, (err, data) => {
        if (err) { res.writeHead(404); res.end('Not found'); return; }
        res.writeHead(200, { 'Content-Type': MIME[path.extname(full)] || 'application/octet-stream' });
        res.end(data);
    });
}

const server = http.createServer((req, res) => {
    if (req.url.startsWith('/api/')) {
        let body = '';
        req.on('data', chunk => body += chunk);
        req.on('end', () => {
            let payload = {};
            try { payload = body ? JSON.parse(body) : {}; } catch (e) {}

            try {
                if (req.url === '/api/state' && req.method === 'GET') {
                    return sendJSON(res, 200, { questions: state.questions, settings: state.settings });
                }
                if (req.url === '/api/results' && req.method === 'GET') {
                    return sendJSON(res, 200, state.results);
                }
                if (req.url === '/api/results/add' && req.method === 'POST') {
                    if (!state.results.some(r => r.id === payload.id)) {
                        state.results.push(payload);
                        persist();
                    }
                    return sendJSON(res, 200, { ok: true });
                }
                if (req.url === '/api/settings/save' && req.method === 'POST') {
                    state.settings = payload;
                    persist();
                    return sendJSON(res, 200, { ok: true });
                }
                if (req.url === '/api/questions/save' && req.method === 'POST') {
                    const idx = state.questions.findIndex(q => q.id === payload.id);
                    if (idx > -1) state.questions[idx] = payload; else state.questions.push(payload);
                    persist();
                    return sendJSON(res, 200, { ok: true });
                }
                if (req.url === '/api/questions/delete' && req.method === 'POST') {
                    state.questions = state.questions.filter(q => q.id !== payload.id);
                    persist();
                    return sendJSON(res, 200, { ok: true });
                }
            } catch (e) {
                return sendJSON(res, 500, { error: String(e) });
            }
            return sendJSON(res, 404, { error: 'not found' });
        });
        return;
    }
    serveStatic(req, res);
});

server.listen(PORT, () => console.log('QuizLive server running on port ' + PORT + ' (results persisted to data.json)'));
