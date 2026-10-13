module.exports = [
    {
        id: 'q1',
        category: 'LOTO / Maszyny',
        text: 'Przechodzisz obok strefy, gdzie technik RME zdjęł właśnie kłódkę i zawieszkę LOTO i odszedł po narzędzie, nie uruchamiając jeszcze maszyny. Które stwierdzenia są prawidłowe?',
        options: [
            'A) Skoro LOTO zdjęto, maszyna jest już bezpieczna i mogę wejść do strefy',
            'B) Zdjęcie LOTO nie oznacza, że strefa jest zwolniona dla pieszych — nie wchodzę bez wyraźnej zgody osoby odpowiedzialnej',
            'C) Mogę samodzielnie uruchomić maszynę, skoro zabezpieczenie usunięto',
            'D) Traktuję maszynę jak mogącą ruszyć w każdej chwili i trzymam się wyznaczonej trasy'
        ],
        correct: [1, 3]
    },
    {
        id: 'q2',
        category: 'Bezpieczeństwo Maszyn',
        text: 'Który opis NAJLEPIEJ oddaje, dlaczego ponowne uruchomienie maszyny (re-energizacja) jest etapem o podwyższonym ryzyku?',
        options: [
            'A) Bo zużywa najwięcej energii elektrycznej w cyklu',
            'B) Bo maszyna zaczyna się poruszać — osoby lub narzędzia w strefie mogą zostać pochwycone, dlatego strefa musi być pusta i sprawdzona',
            'C) Bo to moment, w którym najczęściej przepala się bezpiecznik',
            'D) Bo dopiero wtedy zakłada się osłony'
        ],
        correct: [1]
    },
    {
        id: 'q3',
        category: 'Energia Resztkowa',
        text: 'Które z poniższych mogą uwolnić energię i zranić, mimo że główny wyłącznik jest w pozycji „OFF”?',
        options: [
            'A) Napięty pas lub ściśnięta sprężyna',
            'B) Resztkowe ciśnienie w układzie pneumatycznym lub hydraulicznym',
            'C) Uniesiony element, który może opaść pod własnym ciężarem (grawitacja)',
            'D) Wirujący element kontynuujący ruch bezwładny po odcięciu zasilania'
        ],
        correct: [0, 1, 2, 3]
    },
    {
        id: 'q4',
        category: 'Zagrania Awaryjne',
        text: 'Czujesz zapach spalenizny i widzisz dym spod szafy sterowniczej przenośnika w szczycie wysyłki. Która reakcja jest NAJbezpieczniejsza?',
        options: [
            'A) Otworzyć szafę, by sprawdzić źródło i odłączyć pojedynczy przewód',
            'B) Spryskać szafę wodą z najbliższego źródła',
            'C) Nie otwierać szafy, oddalić siebie i innych, powiadomić przełożonego/służby i w razie potrzeby użyć gaśnicy właściwej do urządzeń elektrycznych',
            'D) Dokończyć bieżącą paletę i zgłosić po zmianie, jeśli dym nie zniknie'
        ],
        correct: [2]
    },
    {
        id: 'q5',
        category: 'Osłony i Usterki',
        text: 'Osłona napędu jest zamontowana, ale słyszysz nietypowy stukot, a obok leży poluzowana śruba. Które działania są właściwe?',
        options: [
            'A) Dokręcić znalezioną śrubę, by osłona lepiej trzymała',
            'B) Zignorować stukot, skoro osłona jest na miejscu',
            'C) Wstrzymać korzystanie z tego miejsca i zgłosić objawy (stukot + luźny element) do RME',
            'D) Zabezpieczyć/oznaczyć miejsce, aby inni nie korzystali, do czasu oceny technika'
        ],
        correct: [2, 3]
    },
    {
        id: 'q6',
        category: 'Praca na Wysokości',
        text: 'Dotyczy drabin platformowych (Network Action, wrzesień 2026). Która interpretacja żółtego łańcucha ok. metr nad podłożem i taśmy w żółto-czarne pasy jest prawidłowa?',
        options: [
            'A) To element wyłącznie dekoracyjny',
            'B) To znak, że drabina przeszła przegląd i jest dopuszczona',
            'C) To celowy odstraszacz/ograniczenie dostępu wynikające z ryzyka — nie wchodzić i nie zdejmować łańcucha',
            'D) To oznaczenie rezerwacji drabiny dla konkretnej zmiany'
        ],
        correct: [2]
    },
    {
        id: 'q7',
        category: 'Praca na Wysokości',
        text: 'Kolega proponuje sposoby „na szybko” sięgnięcia po przedmiot z wysokości. Które są niedopuszczalne?',
        options: [
            'A) Wejście na drabinę oznaczoną łańcuchem/taśmą „tylko na chwilę”',
            'B) Wspinaczka po poprzeczkach regału lub stanięcie na palecie uniesionej wózkiem',
            'C) Użycie sprawnej, zatwierdzonej drabiny zgodnie z instrukcją i zasadą trzech punktów podparcia',
            'D) Stanięcie na krześle biurowym przytrzymywanym przez kolegę'
        ],
        correct: [0, 1, 3]
    },
    {
        id: 'q8',
        category: 'Ruch PIT i Pieszych',
        text: 'Idziesz przez strefę ruchu wózków/pojazdów PIT przy dużym hałasie i ograniczonej widoczności za regałem. Które zachowania są prawidłowe?',
        options: [
            'A) Zakładam, że operator mnie widzi, bo mam kamizelkę, i idę dalej',
            'B) Zatrzymuję się przed narożnikiem, nawiązuję kontakt wzrokowy z operatorem i ustępuję pierwszeństwa pojazdowi',
            'C) Korzystam wyłącznie z wyznaczonych przejść dla pieszych',
            'D) Przebiegam przed pojazdem, gdy wydaje mi się, że zdążę'
        ],
        correct: [1, 2]
    },
    {
        id: 'q9',
        category: 'Kultura Bezpieczeństwa',
        text: 'Zgłaszasz near miss, w którym nikt nie ucierpiał i nic się nie uszkodziło. Który pogląd jest prawidłowy?',
        options: [
            'A) Nie ma czego zgłaszać, bo nie było urazu ani szkody',
            'B) Zgłoszenie near miss to obowiązek wyłącznie przełożonego',
            'C) Near miss zgłaszam, bo ujawnia ukryte zagrożenie i pozwala je usunąć zanim dojdzie do urazu',
            'D) Near miss zgłasza się dopiero przy trzecim powtórzeniu'
        ],
        correct: [2]
    },
    {
        id: 'q10',
        category: 'Prawa i Rola Pracownika',
        text: 'Które stwierdzenia o roli i prawach pracownika niebędącego technikiem w systemie bezpieczeństwa RME są prawidłowe?',
        options: [
            'A) Mam prawo odmówić pracy w warunkach, które racjonalnie uważam za niebezpieczne, i zgłosić to',
            'B) W nagłej sytuacji mogę samodzielnie naruszyć LOTO lub wejść za osłonę, jeśli przyspieszy to pracę',
            'C) Powinienem znać lokalizację wyjść ewakuacyjnych, punktów zbiórki i najbliższego sprzętu ppoż. w swojej strefie',
            'D) Zgłaszanie zagrożeń i near miss dotyczy każdego, nie tylko techników i kierowników'
        ],
        correct: [0, 2, 3]
    },
    {
        id: 'q11',
        category: 'Uprawnienia i RME',
        text: 'Technik prosi Cię o „przytrzymanie na chwilę” panelu, podczas gdy wykonuje prace serwisowe wewnątrz maszyny objętej LOTO. Jak reagujesz?',
        options: [
            'A) Pomagam, skoro technik prosi — on wie, co robi',
            'B) Odmawiam udziału w pracach, do których nie mam uprawnień ani przeszkolenia, i proponuję, by znalazł upoważnioną osobę',
            'C) Wchodzę do maszyny razem z nim, by szybciej skończyć',
            'D) Zgłaszam przełożonemu, jeśli czuję presję do wykonywania zadań poza moją rolą'
        ],
        correct: [1, 3]
    },
    {
        id: 'q12',
        category: 'ŚOI',
        text: 'Które z poniższych są prawidłowymi zasadami dotyczącymi środków ochrony indywidualnej (ŚOI) na magazynie?',
        options: [
            'A) Obuwie ochronne i kamizelka odblaskowa tam, gdzie są wymagane',
            'B) ŚOI zakładam dopiero, gdy zauważę przełożonego',
            'C) Uszkodzone ŚOI (np. pęknięte okulary) wymieniam, zanim zacznę pracę',
            'D) ŚOI dobieram do zadania/strefy, a nie „jedne na wszystko”'
        ],
        correct: [0, 2, 3]
    },
    {
        id: 'q13',
        category: 'Zabezpieczenia Maszyn',
        text: 'Zauważasz, że czujnik/fotokomórka bezpieczeństwa przy przenośniku jest zaklejona taśmą, przez co osłona świetlna nie zatrzymuje linii. Co robisz?',
        options: [
            'A) Zostawiam — ktoś pewnie zrobił to celowo dla wydajności',
            'B) Natychmiast zgłaszam to jako obejście zabezpieczenia (bypass) i nie korzystam z linii do czasu usunięcia',
            'C) Sam zrywam taśmę i uruchamiam linię dalej',
            'D) Traktuję to jako poważne zagrożenie — obejście urządzenia ochronnego eliminuje warstwę bezpieczeństwa'
        ],
        correct: [1, 3]
    },
    {
        id: 'q14',
        category: 'Usuwanie Zatorów',
        text: 'Podczas pracy paczka na przenośniku zablokowała się i linia stoi. Jak bezpiecznie usunąć zator?',
        options: [
            'A) Sięgam ręką pod osłonę, by szybko wyjąć paczkę, bo linia stoi',
            'B) Nie wkładam rąk w strefę ruchomych elementów; postępuję zgodnie z procedurą (zatrzymanie/zgłoszenie), bo linia może ruszyć bez ostrzeżenia',
            'C) Uderzam w paczkę, by przepchnąć ją dalej',
            'D) Wzywam osobę upoważnioną/technika, jeśli usunięcie wymaga wejścia w strefę zabezpieczoną'
        ],
        correct: [1, 3]
    },
    {
        id: 'q15',
        category: 'Zgłaszanie Zagrożeń',
        text: 'Które sytuacje powinieneś zgłosić, nawet jeśli nie spowodowały urazu?',
        options: [
            'A) Rozlany płyn na posadzce w ciągu komunikacyjnym',
            'B) Luźny lub brakujący element osłony maszyny',
            'C) Zablokowane lub zastawione wyjście ewakuacyjne',
            'D) Drabina z uszkodzonym stopniem pozostawiona w użyciu'
        ],
        correct: [0, 1, 2, 3]
    },
    {
        id: 'q16',
        category: 'Ewakuacja i PPOŻ',
        text: 'Alarm ewakuacyjny włącza się podczas szczytu wysyłki. Które zachowania są prawidłowe?',
        options: [
            'A) Dokończyć bieżącą paletę, a potem wyjść — kilka minut nie robi różnicy',
            'B) Przerwać pracę, bezpiecznie opuścić stanowisko i udać się najkrótszą wyznaczoną drogą do punktu zbiórki',
            'C) Nie korzystać z wind; stosować się do poleceń osób kierujących ewakuacją',
            'D) Zabrać ze sobą współpracownika, który mógł nie usłyszeć alarmu, jeśli jest to bezpieczne'
        ],
        correct: [1, 2, 3]
    },
    {
        id: 'q17',
        category: 'Praca na Wysokości',
        text: 'Co oznacza zasada „trzech punktów podparcia” i kiedy ma zastosowanie?',
        options: [
            'A) Dotyczy wyłącznie techników pracujących na wysokości',
            'B) To utrzymywanie kontaktu z drabiną/konstrukcją w trzech punktach (np. dwie stopy + jedna ręka) podczas wchodzenia i schodzenia',
            'C) Zmniejsza ryzyko upadku i obowiązuje także pracowników niebędących technikami przy korzystaniu z drabin',
            'D) Oznacza, że na drabinie mogą stać maksymalnie trzy osoby'
        ],
        correct: [1, 2]
    },
    {
        id: 'q18',
        category: 'Gaszynie Pożarów',
        text: 'Którą gaśnicę/metodę zastosować w pierwszej kolejności przy pożarze urządzenia elektrycznego pod napięciem?',
        options: [
            'A) Wodę z węża hydrantowego',
            'B) Gaśnicę przeznaczoną do urządzeń elektrycznych (np. CO₂/proszkową), zgodnie z oznaczeniem i przeszkoleniem',
            'C) Koc gaśniczy narzucony bezpośrednio na szafę pod napięciem jako metodę podstawową',
            'D) Jeśli pożar wykracza poza zarzewie — ewakuować się i wezwać pomoc zamiast gasić samodzielnie'
        ],
        correct: [1, 3]
    },
    {
        id: 'q19',
        category: 'Kultura Bezpieczeństwa',
        text: 'Które zachowania budują właściwą kulturę bezpieczeństwa podczas RME Safety Week?',
        options: [
            'A) Zgłaszanie near miss i drobnych usterek, zanim urosną do wypadku',
            'B) Zwracanie uwagi koledze, który omija zabezpieczenie, nawet jeśli to niewygodne',
            'C) „Niewidzenie” drobnych naruszeń, by nie psuć atmosfery w zespole',
            'D) Udział w odprawach bezpieczeństwa i zadawanie pytań, gdy coś jest niejasne'
        ],
        correct: [0, 1, 3]
    },
    {
        id: 'q20',
        category: 'Procedury BHP',
        text: 'Nowy pracownik pyta Cię, gdzie znaleźć zasady bezpieczeństwa i do kogo zgłaszać zagrożenia. Które odpowiedzi są prawidłowe?',
        options: [
            'A) Na tablicach BHP, w oznaczeniach w strefie i podczas szkolenia stanowiskowego',
            'B) U przełożonego oraz w zespole RME/WHS',
            'C) Nie trzeba tego wiedzieć — wystarczy robić swoje zadania',
            'D) Zagrożenie może zgłosić każdy pracownik, nie tylko przełożony'
        ],
        correct: [0, 1, 3]
    }
];
