// Internationalization
const translations = {
    en: {
        title: "Think Before You Click – Spot Fake Links Instantly",
        headerTitle: "Think Before You Click – Spot Fake Links Instantly",
        inputLabel: "Enter URL to check:",
        checkBtn: "Check",
        resultsTitle: "Results",
        safeMessage: "This link appears to be safe.",
        unsafeMessage: "Warning! This link appears suspicious.",
        loadingMessage: "Analyzing link...",
        invalidUrl: "Please enter a valid URL (e.g., https://example.com)",
        noUrl: "Please enter a URL to check",
        reportBtn: "Report Suspicious Link",
        footerText: "Fake Link Detector - Stay safe online by checking suspicious links before clicking.",
        checks: {
            https: "Uses secure HTTPS connection",
            notHttps: "Does not use HTTPS (not secure)",
            suspiciousTld: "Suspicious top-level domain ({tld})",
            commonTld: "Common top-level domain ({tld})",
            suspiciousChars: "Contains suspicious characters",
            commonPhishing: "Matches common phishing patterns",
            shortUrl: "Uses URL shortening service",
            ipAddress: "Uses IP address instead of domain name",
            longUrl: "Unusually long URL",
            manySubdomains: "Many subdomains ({count})",
            manySpecialChars: "Many special characters ({count})",
            brandImpersonation: "Possible brand impersonation ({brand})"
        }
    },
    hi: {
        title: "नकली लिंक डिटेक्टर",
        headerTitle: "क्लिक करने से पहले सोचें - फेक लिंक को तुरंत पहचानें",
        inputLabel: "जांच के लिए URL दर्ज करें:",
        checkBtn: "जांचें",
        resultsTitle: "परिणाम",
        safeMessage: "यह लिंक सुरक्षित प्रतीत होता है।",
        unsafeMessage: "चेतावनी! यह लिंक संदिग्ध प्रतीत होता है।",
        loadingMessage: "लिंक का विश्लेषण किया जा रहा है...",
        invalidUrl: "कृपया एक वैध URL दर्ज करें (उदाहरण: https://example.com)",
        noUrl: "जांच के लिए एक URL दर्ज करें",
        reportBtn: "संदिग्ध लिंक की रिपोर्ट करें",
        footerText: "नकली लिंक डिटेक्टर - क्लिक करने से पहले संदिग्ध लिंक की जांच करके ऑनलाइन सुरक्षित रहें।",
        checks: {
            https: "सुरक्षित HTTPS कनेक्शन का उपयोग करता है",
            notHttps: "HTTPS का उपयोग नहीं करता (सुरक्षित नहीं)",
            suspiciousTld: "संदिग्ध टॉप-लेवल डोमेन ({tld})",
            commonTld: "सामान्य टॉप-लेवल डोमेन ({tld})",
            suspiciousChars: "संदिग्ध वर्ण शामिल हैं",
            commonPhishing: "सामान्य फिशिंग पैटर्न से मेल खाता है",
            shortUrl: "URL शॉर्टनिंग सेवा का उपयोग करता है",
            ipAddress: "डोमेन नाम के बजाय IP पता का उपयोग करता है",
            longUrl: "असामान्य रूप से लंबा URL",
            manySubdomains: "कई सबडोमेन ({count})",
            manySpecialChars: "कई विशेष वर्ण ({count})",
            brandImpersonation: "संभावित ब्रांड प्रतिरूपण ({brand})"
        }
    },
    te: {
        title: "నకిలీ లింక్ డిటెక్టర్",
        headerTitle: "నొక్కండి ముందు ఆలోచించండి - నకిలీ లింకులను తక్షణమే గుర్తించండి",
        inputLabel: "తనిఖీ చేయడానికి URL ను నమోదు చేయండి:",
        checkBtn: "తనిఖీ చేయండి",
        resultsTitle: "ఫలితాలు",
        safeMessage: "ఈ లింక్ సురక్షితంగా కనిపిస్తుంది.",
        unsafeMessage: "హెచ్చరిక! ఈ లింక్ సందేహాస్పదంగా కనిపిస్తుంది.",
        loadingMessage: "లింక్‌ను విశ్లేషిస్తున్నారు...",
        invalidUrl: "దయచేసి సరైన URL ను నమోదు చేయండి (ఉదా: https://example.com)",
        noUrl: "తనిఖీ చేయడానికి URL ను నమోదు చేయండి",
        reportBtn: "సందేహాస్పద లింక్‌ను రిపోర్ట్ చేయండి",
        footerText: "నకిలీ లింక్ డిటెక్టర్ - క్లిక్ చేయకముందు సందేహాస్పద లింక్‌లను తనిఖీ చేసి ఆన్‌లైన్‌లో సురక్షితంగా ఉండండి.",
        checks: {
            https: "సురక్షిత HTTPS కనెక్షన్‌ను ఉపయోగిస్తుంది",
            notHttps: "HTTPS ఉపయోగించదు (సురక్షితం కాదు)",
            suspiciousTld: "సందేహాస్పద టాప్-లెవల్ డొమైన్ ({tld})",
            commonTld: "సాధారణ టాప్-లెవల్ డొమైన్ ({tld})",
            suspiciousChars: "సందేహాస్పద అక్షరాలను కలిగి ఉంది",
            commonPhishing: "సాధారణ ఫిషింగ్ నమూనాలతో సరిపోతుంది",
            shortUrl: "URL షార్టెనింగ్ సేవను ఉపయోగిస్తుంది",
            ipAddress: "డొమైన్ పేరు కాకుండా IP చిరునామాను ఉపయోగిస్తుంది",
            longUrl: "అసాధారణంగా పొడవైన URL",
            manySubdomains: "అనేక సబ్‌డొమైన్‌లు ({count})",
            manySpecialChars: "అనేక ప్రత్యేక అక్షరాలు ({count})",
            brandImpersonation: "సాధ్యమైన బ్రాండ్ అనుకరణ ({brand})"
        }
    },
    ta: {
        title: "போலி இணைப்பு கண்டுபிடிப்பான்",
        headerTitle: "நோக்கி செயல்படுத்த முன்பு சிந்திக்கவும் - நேரடியாக புனையான இணைப்புகளை கண்டறியவும்",
        inputLabel: "சரிபார்க்க URL ஐ உள்ளிடவும்:",
        checkBtn: "சரிபார்க்க",
        resultsTitle: "முடிவுகள்",
        safeMessage: "இந்த இணைப்பு பாதுகாப்பானதாக தெரிகிறது.",
        unsafeMessage: "எச்சரிக்கை! இந்த இணைப்பு சந்தேகத்திற்குரியதாக தெரிகிறது.",
        loadingMessage: "இணைப்பை பகுப்பாய்வு செய்கிறது...",
        invalidUrl: "சரியான URL ஐ உள்ளிடவும் (எ.கா: https://example.com)",
        noUrl: "சரிபார்க்க URL ஐ உள்ளிடவும்",
        reportBtn: "சந்தேகத்திற்குரிய இணைப்பை புகாரளிக்கவும்",
        footerText: "போலி இணைப்பு கண்டுபிடிப்பான் - சந்தேகத்திற்குரிய இணைப்புகளை சொடுக்குவதற்கு முன் சரிபார்ப்பதன் மூலம் ஆன்லைனில் பாதுகாப்பாக இருங்கள்.",
        checks: {
            https: "பாதுகாப்பான HTTPS இணைப்பை பயன்படுத்துகிறது",
            notHttps: "HTTPS ஐ பயன்படுத்தவில்லை (பாதுகாப்பானது அல்ல)",
            suspiciousTld: "சந்தேகத்திற்குரிய மேல் நிலை களம் ({tld})",
            commonTld: "பொதுவான மேல் நிலை களம் ({tld})",
            suspiciousChars: "சந்தேகத்திற்குரிய எழுத்துக்களை கொண்டுள்ளது",
            commonPhishing: "பொதுவான ஃபிஷிங் வடிவங்களுடன் பொருந்துகிறது",
            shortUrl: "URL சுருக்க சேவையை பயன்படுத்துகிறது",
            ipAddress: "டொமைன் பெயருக்கு பதிலாக IP முகவரியை பயன்படுத்துகிறது",
            longUrl: "அசாதாரணமாக நீண்ட URL",
            manySubdomains: "பல துணை களங்கள் ({count})",
            manySpecialChars: "பல சிறப்பு எழுத்துக்கள் ({count})",
            brandImpersonation: "சாத்தியமான பிராண்ட் போலியாக்கம் ({brand})"
        }
    },
    kn: {
        title: "ನಕಲಿ ಲಿಂಕ್ ಡಿಟೆಕ್ಟರ್",
        headerTitle: "ಒತ್ತಲು ಮಾಡುತ್ತಿದ್ದಾಗಲೆಲ್ಲಾ ಚಿಂತಿಸಿ - ತಕ್ಷಣ ಕಳಪೆ ಲಿಂಕ್ ಗಳನ್ನು ಗುರುತಿಸಿ",
        inputLabel: "ಪರಿಶೀಲಿಸಲು URL ಅನ್ನು ನಮೂದಿಸಿ:",
        checkBtn: "ಪರಿಶೀಲಿಸಿ",
        resultsTitle: "ಫಲಿತಾಂಶಗಳು",
        safeMessage: "ಈ ಲಿಂಕ್ ಸುರಕ್ಷಿತವಾಗಿ ಕಾಣುತ್ತದೆ.",
        unsafeMessage: "ಎಚ್ಚರಿಕೆ! ಈ ಲಿಂಕ್ ಅನುಮಾನಾಸ್ಪದವಾಗಿ ಕಾಣುತ್ತದೆ.",
        loadingMessage: "ಲಿಂಕ್ ಅನ್ನು ವಿಶ್ಲೇಷಿಸಲಾಗುತ್ತಿದೆ...",
        invalidUrl: "ದಯವಿಟ್ಟು ಮಾನ್ಯವಾದ URL ಅನ್ನು ನಮೂದಿಸಿ (ಉದಾ: https://example.com)",
        noUrl: "ಪರಿಶೀಲಿಸಲು URL ಅನ್ನು ನಮೂದಿಸಿ",
        reportBtn: "ಅನುಮಾನಾಸ್ಪದ ಲಿಂಕ್ ಅನ್ನು ವರದಿ ಮಾಡಿ",
        footerText: "ನಕಲಿ ಲಿಂಕ್ ಡಿಟೆಕ್ಟರ್ - ಕ್ಲಿಕ್ ಮಾಡುವ ಮೊದಲು ಅನುಮಾನಾಸ್ಪದ ಲಿಂಕ್‌ಗಳನ್ನು ಪರಿಶೀಲಿಸುವ ಮೂಲಕ ಆನ್‌ಲೈನ್‌ನಲ್ಲಿ ಸುರಕ್ಷಿತವಾಗಿರಿ.",
        checks: {
            https: "ಸುರಕ್ಷಿತ HTTPS ಸಂಪರ್ಕವನ್ನು ಬಳಸುತ್ತದೆ",
            notHttps: "HTTPS ಅನ್ನು ಬಳಸುವುದಿಲ್ಲ (ಸುರಕ್ಷಿತವಲ್ಲ)",
            suspiciousTld: "ಅನುಮಾನಾಸ್ಪದ ಟಾಪ್-ಲೆವೆಲ್ ಡೊಮೇನ್ ({tld})",
            commonTld: "ಸಾಮಾನ್ಯ ಟಾಪ್-ಲೆವೆಲ್ ಡೊಮೇನ್ ({tld})",
            suspiciousChars: "ಅನುಮಾನಾಸ್ಪದ ಅಕ್ಷರಗಳನ್ನು ಹೊಂದಿದೆ",
            commonPhishing: "ಸಾಮಾನ್ಯ ಫಿಷಿಂಗ್ ಮಾದರಿಗಳೊಂದಿಗೆ ಹೊಂದಿಕೆಯಾಗುತ್ತದೆ",
            shortUrl: "URL ಶಾರ್ಟನಿಂಗ್ ಸೇವೆಯನ್ನು ಬಳಸುತ್ತದೆ",
            ipAddress: "ಡೊಮೇನ್ ಹೆಸರಿನ ಬದಲು IP ವಿಳಾಸವನ್ನು ಬಳಸುತ್ತದೆ",
            longUrl: "ಅಸಾಧಾರಣವಾಗಿ ಉದ್ದವಾದ URL",
            manySubdomains: "ಅನೇಕ ಉಪ ಡೊಮೇನ್‌ಗಳು ({count})",
            manySpecialChars: "ಅನೇಕ ವಿಶೇಷ ಅಕ್ಷರಗಳು ({count})",
            brandImpersonation: "ಸಂಭಾವ್ಯ ಬ್ರಾಂಡ್ ಅನುಕರಣೆ ({brand})"
        }
    },
    ml: {
        title: "വ്യാജ ലിങ്ക് ഡിറ്റക്ടർ",
        headerTitle: "നോക്കുമ്പോള്‍ ചിന്തിക്കുക – നകല്‍ ലിങ്കുകള്‍ ഉടനടി കണ്ടെത്തുക",
        inputLabel: "പരിശോധിക്കാൻ URL നൽകുക:",
        checkBtn: "പരിശോധിക്കുക",
        resultsTitle: "ഫലങ്ങൾ",
        safeMessage: "ഈ ലിങ്ക് സുരക്ഷിതമാണെന്ന് തോന്നുന്നു.",
        unsafeMessage: "എച്ച്റ്റെരിക്! ഈ ലിങ്ക് സംശയാസ്പദമാണെന്ന് തോന്നുന്നു.",
        loadingMessage: "ലിങ്ക് വിശകലനം ചെയ്യുന്നു...",
        invalidUrl: "ദയവായി ഒരു സാധുവായ URL നൽകുക (ഉദാ: https://example.com)",
        noUrl: "പരിശോധിക്കാൻ ഒരു URL നൽകുക",
        reportBtn: "സംശയാസ്പദമായ ലിങ്ക് റിപ്പോർട്ട് ചെയ്യുക",
        footerText: "വ്യാജ ലിങ്ക് ഡിറ്റക്ടർ - ക്ലിക്ക് ചെയ്യുന്നതിന് മുമ്പ് സംശയാസ്പദമായ ലിങ്കുകൾ പരിശോധിച്ച് ഓൺലൈനിൽ സുരക്ഷിതമായിരിക്കുക.",
        checks: {
            https: "സുരക്ഷിതമായ HTTPS കണക്ഷൻ ഉപയോഗിക്കുന്നു",
            notHttps: "HTTPS ഉപയോഗിക്കുന്നില്ല (സുരക്ഷിതമല്ല)",
            suspiciousTld: "സംശയാസ്പദമായ ടോപ്പ്-ലെവൽ ഡൊമെയ്ൻ ({tld})",
            commonTld: "സാധാരണ ടോപ്പ്-ലെവൽ ഡൊമെയ്ൻ ({tld})",
            suspiciousChars: "സംശയാസ്പദമായ അക്ഷരങ്ങൾ അടങ്ങിയിരിക്കുന്നു",
            commonPhishing: "സാധാരണ ഫിഷിംഗ് പാറ്റേണുകളുമായി പൊരുത്തപ്പെടുന്നു",
            shortUrl: "URL ഷോർട്ടനിംഗ് സേവനം ഉപയോഗിക്കുന്നു",
            ipAddress: "ഡൊമെയ്ൻ നാമത്തിന് പകരം IP വിലാസം ഉപയോഗിക്കുന്നു",
            longUrl: "അസാധാരണമായി നീളമുള്ള URL",
            manySubdomains: "പല സബ്‌ഡൊമെയ്‌നുകൾ ({count})",
            manySpecialChars: "പല സ്പെഷ്യൽ കാരക്ടറുകൾ ({count})",
            brandImpersonation: "സാധ്യതയുള്ള ബ്രാൻഡ് അനുകരണം ({brand})"
        }
    },
    bn: {
        title: "জাল লিংক ডিটেক্টর",
        headerTitle: "ক্লিক করার আগে চিন্তা করুন - তাত্ক্ষণিকভাবে জাল লিঙ্ক চিহ্নিত করুন",
        inputLabel: "পরীক্ষা করার জন্য URL লিখুন:",
        checkBtn: "পরীক্ষা করুন",
        resultsTitle: "ফলাফল",
        safeMessage: "এই লিঙ্কটি নিরাপদ বলে মনে হচ্ছে।",
        unsafeMessage: "সতর্কতা! এই লিঙ্কটি সন্দেহজনক বলে মনে হচ্ছে।",
        loadingMessage: "লিঙ্ক বিশ্লেষণ করা হচ্ছে...",
        invalidUrl: "একটি বৈধ URL লিখুন (যেমন: https://example.com)",
        noUrl: "পরীক্ষা করার জন্য একটি URL লিখুন",
        reportBtn: "সন্দেহজনক লিঙ্ক রিপোর্ট করুন",
        footerText: "জাল লিংক ডিটেক্টর - ক্লিক করার আগে সন্দেহজনক লিঙ্কগুলি পরীক্ষা করে অনলাইনে নিরাপদ থাকুন।",
        checks: {
            https: "নিরাপদ HTTPS সংযোগ ব্যবহার করে",
            notHttps: "HTTPS ব্যবহার করে না (নিরাপদ নয়)",
            suspiciousTld: "সন্দেহজনক টপ-লেভেল ডোমেইন ({tld})",
            commonTld: "সাধারণ টপ-লেভেল ডোমেইন ({tld})",
            suspiciousChars: "সন্দেহজনক অক্ষর রয়েছে",
            commonPhishing: "সাধারণ ফিশিং প্যাটার্নের সাথে মেলে",
            shortUrl: "URL শর্টেনিং পরিষেবা ব্যবহার করে",
            ipAddress: "ডোমেইন নামের পরিবর্তে IP ঠিকানা ব্যবহার করে",
            longUrl: "অস্বাভাবিকভাবে দীর্ঘ URL",
            manySubdomains: "অনেক সাবডোমেইন ({count})",
            manySpecialChars: "অনেক বিশেষ অক্ষর ({count})",
            brandImpersonation: "সম্ভাব্য ব্র্যান্ড ইমপারসনেশন ({brand})"
        }
    },
    mr: {
        title: "बनावटी दुवा शोधक",
        headerTitle: "क्लिक करण्यापूर्वी विचार करा - लगेच फेक लिंक शोधा",
        inputLabel: "तपासण्यासाठी URL प्रविष्ट करा:",
        checkBtn: "तपासा",
        resultsTitle: "निकाल",
        safeMessage: "हा दुवा सुरक्षित आहे असे दिसते.",
        unsafeMessage: "सावधान! हा दुवा संशयास्पद आहे असे दिसते.",
        loadingMessage: "दुवा विश्लेषण करत आहे...",
        invalidUrl: "कृपया एक वैध URL प्रविष्ट करा (उदा: https://example.com)",
        noUrl: "तपासण्यासाठी एक URL प्रविष्ट करा",
        reportBtn: "संशयास्पद दुवा रिपोर्ट करा",
        footerText: "बनावटी दुवा शोधक - क्लिक करण्यापूर्वी संशयास्पद दुवे तपासून ऑनलाइन सुरक्षित रहा.",
        checks: {
            https: "सुरक्षित HTTPS कनेक्शन वापरते",
            notHttps: "HTTPS वापरत नाही (सुरक्षित नाही)",
            suspiciousTld: "संशयास्पद टॉप-लेव्हल डोमेन ({tld})",
            commonTld: "सामान्य टॉप-लेव्हल डोमेन ({tld})",
            suspiciousChars: "संशयास्पद वर्ण आहेत",
            commonPhishing: "सामान्य फिशिंग पॅटर्नशी जुळते",
            shortUrl: "URL शॉर्टनिंग सेवा वापरते",
            ipAddress: "डोमेन नावाऐवजी IP पत्ता वापरते",
            longUrl: "असामान्यपणे लांब URL",
            manySubdomains: "अनेक सबडोमेन ({count})",
            manySpecialChars: "अनेक विशेष वर्ण ({count})",
            brandImpersonation: "संभाव्य ब्रँड इम्पर्सनेशन ({brand})"
        }
    },
    gu: {
        title: "નકલી લિંક ડિટેક્ટર",
        headerTitle: "ક્લિક કરવાની પહેલાં વિચાર કરો - તરત જ ખોટા લિંક્સ શોધો",
        inputLabel: "ચેક કરવા માટે URL દાખલ કરો:",
        checkBtn: "ચેક કરો",
        resultsTitle: "પરિણામો",
        safeMessage: "આ લિંક સુરક્ષિત લાગે છે.",
        unsafeMessage: "ચેતવણી! આ લિંક સંશયાસ્પદ લાગે છે.",
        loadingMessage: "લિંકનું વિશ્લેષણ કરી રહ્યું છે...",
        invalidUrl: "કૃપા કરીને માન્ય URL દાખલ કરો (દા.ત. https://example.com)",
        noUrl: "ચેક કરવા માટે URL દાખલ કરો",
        reportBtn: "સંશયાસ્પદ લિંકની જાણ કરો",
        footerText: "નકલી લિંક ડિટેક્ટર - ક્લિક કરતા પહેલાં સંશયાસ્પદ લિંક્સ તપાસીને ઑનલાઇન સુરક્ષિત રહો.",
        checks: {
            https: "સુરક્ષિત HTTPS કનેક્શન વાપરે છે",
            notHttps: "HTTPS નો ઉપયોગ કરતું નથી (સુરક્ષિત નથી)",
            suspiciousTld: "સંશયાસ્પદ ટોપ-લેવલ ડોમેન ({tld})",
            commonTld: "સામાન્ય ટોપ-લેવલ ડોમેન ({tld})",
            suspiciousChars: "સંશયાસ્પદ અક્ષરો ધરાવે છે",
            commonPhishing: "સામાન્ય ફિશિંગ પેટર્ન સાથે મેળ ખાય છે",
            shortUrl: "URL ટૂંકાણ સેવાનો ઉપયોગ કરે છે",
            ipAddress: "ડોમેન નામને બદલે IP સરનામું વાપરે છે",
            longUrl: "અસામાન્ય રીતે લાંબી URL",
            manySubdomains: "ઘણા સબડોમેન્સ ({count})",
            manySpecialChars: "ઘણા ખાસ અક્ષરો ({count})",
            brandImpersonation: "સંભવિત બ્રાન્ડ ઇમ્પર્સનેશન ({brand})"
        }
    },
    pa: {
        title: "ਨਕਲੀ ਲਿੰਕ ਡਿਟੈਕਟਰ",
        headerTitle: "ਕਲਿੱਕ ਕਰਨ ਤੋਂ ਪਹਿਲਾਂ ਸੋਚੋ - ਤੁਰੰਤ ਝੂਠੀਆਂ ਲਿੰਕਾਂ ਪਛਾਣੋ",
        inputLabel: "ਚੈੱਕ ਕਰਨ ਲਈ URL ਦਰਜ ਕਰੋ:",
        checkBtn: "ਚੈੱਕ ਕਰੋ",
        resultsTitle: "ਨਤੀਜੇ",
        safeMessage: "ਇਹ ਲਿੰਕ ਸੁਰੱਖਿਅਤ ਲੱਗਦਾ ਹੈ।",
        unsafeMessage: "ਚੇਤਾਵਨੀ! ਇਹ ਲਿੰਕ ਸ਼ੱਕੀ ਲੱਗਦਾ ਹੈ।",
        loadingMessage: "ਲਿੰਕ ਦਾ ਵਿਸ਼ਲੇਸ਼ਣ ਕੀਤਾ ਜਾ ਰਿਹਾ ਹੈ...",
        invalidUrl: "ਕਿਰਪਾ ਕਰਕੇ ਇੱਕ ਵੈਧ URL ਦਰਜ ਕਰੋ (ਜਿਵੇਂ: https://example.com)",
        noUrl: "ਚੈੱਕ ਕਰਨ ਲਈ URL ਦਰਜ ਕਰੋ",
        reportBtn: "ਸ਼ੱਕੀ ਲਿੰਕ ਦੀ ਰਿਪੋਰਟ ਕਰੋ",
        footerText: "ਨਕਲੀ ਲਿੰਕ ਡਿਟੈਕਟਰ - ਕਲਿੱਕ ਕਰਨ ਤੋਂ ਪਹਿਲਾਂ ਸ਼ੱਕੀ ਲਿੰਕਾਂ ਦੀ ਜਾਂਚ ਕਰਕੇ ਆਨਲਾਈਨ ਸੁਰੱਖਿਅਤ ਰਹੋ।",
        checks: {
            https: "ਸੁਰੱਖਿਅਤ HTTPS ਕਨੈਕਸ਼ਨ ਦੀ ਵਰਤੋਂ ਕਰਦਾ ਹੈ",
            notHttps: "HTTPS ਦੀ ਵਰਤੋਂ ਨਹੀਂ ਕਰਦਾ (ਸੁਰੱਖਿਅਤ ਨਹੀਂ)",
            suspiciousTld: "ਸ਼ੱਕੀ ਟਾਪ-ਲੈਵਲ ਡੋਮੇਨ ({tld})",
            commonTld: "ਆਮ ਟਾਪ-ਲੈਵਲ ਡੋਮੇਨ ({tld})",
            suspiciousChars: "ਸ਼ੱਕੀ ਅੱਖਰ ਸ਼ਾਮਲ ਹਨ",
            commonPhishing: "ਆਮ ਫਿਸ਼ਿੰਗ ਪੈਟਰਨ ਨਾਲ ਮੇਲ ਖਾਂਦਾ ਹੈ",
            shortUrl: "URL ਛੋਟਾ ਕਰਨ ਵਾਲੀ ਸੇਵਾ ਦੀ ਵਰਤੋਂ ਕਰਦਾ ਹੈ",
            ipAddress: "ਡੋਮੇਨ ਨਾਮ ਦੀ ਬਜਾਏ IP ਪਤਾ ਵਰਤਦਾ ਹੈ",
            longUrl: "ਅਸਧਾਰਨ ਰੂਪ ਵਿੱਚ ਲੰਬਾ URL",
            manySubdomains: "ਕਈ ਸਬਡੋਮੇਨ ({count})",
            manySpecialChars: "ਕਈ ਵਿਸ਼ੇਸ਼ ਅੱਖਰ ({count})",
            brandImpersonation: "ਸੰਭਾਵੀ ਬ੍ਰਾਂਡ ਇਮਪਰਸਨੇਸ਼ਨ ({brand})"
        }
    }
};


// Common phishing patterns and brand impersonations
const phishingPatterns = [
    { pattern: /g00gle|go0gle|g0ogle/gi, brand: "Google" },
    { pattern: /faceb00k|faceb0ok|facebo0k/gi, brand: "Facebook" },
    { pattern: /amaz0n|amazon/gi, brand: "Amazon" },
    { pattern: /paypa1|paypa1/gi, brand: "PayPal" },
    { pattern: /micr0soft|micros0ft/gi, brand: "Microsoft" },
    { pattern: /app1e|appie/gi, brand: "Apple" },
    { pattern: /netf1ix|netfl1x/gi, brand: "Netflix" },
    { pattern: /bankofamerica/gi, brand: "Bank of America" },
    { pattern: /wellsfargo/gi, brand: "Wells Fargo" },
    { pattern: /chasebank/gi, brand: "Chase Bank" }
];

// Suspicious TLDs
const suspiciousTlds = ['.ru', '.tk', '.xyz', '.top', '.gq', '.ml', '.cf', '.ga', '.pw', '.club', '.click', '.link', '.bid', '.win'];

// Common TLDs
const commonTlds = ['.com', '.org', '.net', '.edu', '.gov', '.io', '.co', '.in'];

// URL shorteners
const urlShorteners = ['bit.ly', 'goo.gl', 'tinyurl.com', 'ow.ly', 't.co', 'is.gd', 'buff.ly', 'adf.ly', 'shorte.st'];

// DOM Elements
const urlInput = document.getElementById('url-input');
const checkBtn = document.getElementById('check-btn');
const resultsContainer = document.getElementById('results-container');
const resultMessage = document.getElementById('result-message');
const resultIcon = document.getElementById('result-icon');
const detailsContainer = document.getElementById('details-container');
const reportBtn = document.getElementById('report-btn');
const languageSelector = document.getElementById('language-selector');
const darkModeToggle = document.getElementById('dark-mode-toggle');
const voiceInputBtn = document.getElementById('voice-input-btn');
const voiceStatus = document.getElementById('voice-status');
const checkBtnText = document.getElementById('check-btn-text');
const inputLabel = document.getElementById('input-label');
const resultsTitle = document.getElementById('results-title');
const reportBtnText = document.getElementById('report-btn-text');
const footerText = document.getElementById('footer-text');

// Current language
let currentLanguage = 'en';

// Initialize the app
function init() {
    // Load language preference from localStorage
    const savedLanguage = localStorage.getItem('fakeLinkDetectorLanguage');
    if (savedLanguage && translations[savedLanguage]) {
        currentLanguage = savedLanguage;
        languageSelector.value = currentLanguage;
    }
    
    // Load dark mode preference
    if (localStorage.getItem('darkMode') === 'enabled' || 
        (!localStorage.getItem('darkMode') && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark');
        darkModeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    }
    
    // Update UI with current language
    updateUI();
    
    // Event listeners
    checkBtn.addEventListener('click', checkUrl);
    urlInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') checkUrl();
    });
    languageSelector.addEventListener('change', changeLanguage);
    darkModeToggle.addEventListener('click', toggleDarkMode);
    voiceInputBtn.addEventListener('click', startVoiceInput);
    reportBtn.addEventListener('click', reportSuspiciousLink);
}

// Update all UI elements with current language
// Update all UI elements with current language
function updateUI() {
    const t = translations[currentLanguage];
    document.title = t.title;
    document.getElementById('header-title').textContent = t.headerTitle; // Add this line
    inputLabel.textContent = t.inputLabel;
    checkBtnText.textContent = t.checkBtn;
    resultsTitle.textContent = t.resultsTitle;
    reportBtnText.textContent = t.reportBtn;
    footerText.textContent = t.footerText;
}

// Change language
function changeLanguage() {
    currentLanguage = languageSelector.value;
    localStorage.setItem('fakeLinkDetectorLanguage', currentLanguage);
    updateUI();
    
    // If there are results, update them with new language
    if (!resultsContainer.classList.contains('hidden')) {
        const url = urlInput.value;
        if (url) checkUrl(url, true);
    }
}

// Toggle dark mode
function toggleDarkMode() {
    document.documentElement.classList.toggle('dark');
    const isDark = document.documentElement.classList.contains('dark');
    localStorage.setItem('darkMode', isDark ? 'enabled' : 'disabled');
    darkModeToggle.innerHTML = isDark ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
}

// Check URL
async function checkUrl(url, languageChange = false) {
    if (!languageChange) {
        url = urlInput.value.trim();
        if (!url) {
            showError(translations[currentLanguage].noUrl);
            return;
        }
        
        // Validate URL format
        try {
            new URL(url);
        } catch (e) {
            showError(translations[currentLanguage].invalidUrl);
            return;
        }
    }
    
    // Show loading state
    checkBtn.disabled = true;
    checkBtnText.textContent = translations[currentLanguage].loadingMessage;
    checkBtn.classList.add('cursor-not-allowed', 'opacity-75');
    
    // Hide previous results
    resultsContainer.classList.add('hidden');
    
    // Analyze the URL
    const analysis = await analyzeUrl(url);
    
    // Show results
    displayResults(analysis);
    
    // Reset button
    checkBtn.disabled = false;
    checkBtnText.textContent = translations[currentLanguage].checkBtn;
    checkBtn.classList.remove('cursor-not-allowed', 'opacity-75');
}

// Analyze URL
async function analyzeUrl(url) {
    const t = translations[currentLanguage].checks;
    const details = [];
    let isSafe = true;
    
    // Parse URL
    let parsedUrl;
    try {
        parsedUrl = new URL(url);
    } catch (e) {
        return { isSafe: false, message: translations[currentLanguage].invalidUrl, details };
    }
    
    const hostname = parsedUrl.hostname;
    const path = parsedUrl.pathname + parsedUrl.search;
    
    // Check HTTPS
    if (parsedUrl.protocol !== 'https:') {
        details.push({ message: t.notHttps, safe: false });
        isSafe = false;
    } else {
        details.push({ message: t.https, safe: true });
    }
    
    // Check TLD
    const tld = hostname.substring(hostname.lastIndexOf('.'));
    if (suspiciousTlds.includes(tld.toLowerCase())) {
        details.push({ message: t.suspiciousTld.replace('{tld}', tld), safe: false });
        isSafe = false;
    } else if (commonTlds.includes(tld.toLowerCase())) {
        details.push({ message: t.commonTld.replace('{tld}', tld), safe: true });
    }
    
    // Check for URL shorteners
    if (urlShorteners.some(shortener => hostname.includes(shortener))) {
        details.push({ message: t.shortUrl, safe: false });
        isSafe = false;
    }
    
    // Check for IP address
    if (/^(\d{1,3}\.){3}\d{1,3}$/.test(hostname)) {
        details.push({ message: t.ipAddress, safe: false });
        isSafe = false;
    }
    
    // Check for phishing patterns
    let brandImpersonation = null;
    for (const { pattern, brand } of phishingPatterns) {
        if (hostname.match(pattern)) {
            brandImpersonation = brand;
            break;
        }
    }
    
    if (brandImpersonation) {
        details.push({ 
            message: t.brandImpersonation.replace('{brand}', brandImpersonation), 
            safe: false 
        });
        isSafe = false;
    }
    
    // Check for unusual characters
    const unusualChars = hostname.match(/[^a-zA-Z0-9.-]/g);
    if (unusualChars) {
        details.push({ 
            message: t.suspiciousChars, 
            safe: false 
        });
        isSafe = false;
    }
    
    // Check for many subdomains
    const subdomains = hostname.split('.').length - 1;
    if (subdomains > 3) {
        details.push({ 
            message: t.manySubdomains.replace('{count}', subdomains), 
            safe: false 
        });
        isSafe = false;
    }
    
    // Check for long URL
    if (url.length > 100) {
        details.push({ 
            message: t.longUrl, 
            safe: false 
        });
        isSafe = false;
    }
    
    // Check for many special characters in path
    const specialChars = path.match(/[^a-zA-Z0-9/-]/g);
    if (specialChars && specialChars.length > 5) {
        details.push({ 
            message: t.manySpecialChars.replace('{count}', specialChars.length), 
            safe: false 
        });
        isSafe = false;
    }
    
    // Optional: API check (mock for this example)
    // In a real app, you would call an actual API here
    const apiResult = await mockApiCheck(url);
    if (apiResult && !apiResult.isSafe) {
        details.push({ 
            message: apiResult.message, 
            safe: false 
        });
        isSafe = false;
    }
    
    return {
        isSafe,
        message: isSafe ? translations[currentLanguage].safeMessage : translations[currentLanguage].unsafeMessage,
        details
    };
}

// Mock API check (replace with real API call)
function mockApiCheck(url) {
    return new Promise(resolve => {
        setTimeout(() => {
            // Randomly flag some URLs to simulate API behavior
            if (Math.random() < 0.2) {
                resolve({
                    isSafe: false,
                    message: "Flagged by our security database"
                });
            } else {
                resolve(null);
            }
        }, 1000);
    });
}

// Display results
function displayResults(analysis) {
    const { isSafe, message, details } = analysis;
    
    // Set result message and icon
    resultMessage.innerHTML = message;
    resultIcon.innerHTML = isSafe ? 
        '<i class="fas fa-check-circle text-green-500"></i>' : 
        '<i class="fas fa-times-circle text-red-500"></i>';
    
    // Set message box style
    resultMessage.className = 'p-4 rounded-lg mb-4 ' + 
        (isSafe ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' : 
                 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200');
    
    // Add details
    detailsContainer.innerHTML = '';
    details.forEach(detail => {
        const detailEl = document.createElement('div');
        detailEl.className = 'flex items-center';
        detailEl.innerHTML = `
            <span class="mr-2 ${detail.safe ? 'text-green-500' : 'text-red-500'}">
                <i class="fas ${detail.safe ? 'fa-check-circle' : 'fa-times-circle'}"></i>
            </span>
            <span>${detail.message}</span>
        `;
        detailsContainer.appendChild(detailEl);
    });
    
    // Show/hide report button
    if (!isSafe) {
        reportBtn.classList.remove('hidden');
    } else {
        reportBtn.classList.add('hidden');
    }
    
    // Show results container
    resultsContainer.classList.remove('hidden');
    
    // Scroll to results
    resultsContainer.scrollIntoView({ behavior: 'smooth' });
}

// Show error message
function showError(message) {
    resultMessage.innerHTML = message;
    resultIcon.innerHTML = '<i class="fas fa-exclamation-circle text-yellow-500"></i>';
    resultMessage.className = 'p-4 rounded-lg mb-4 bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200';
    detailsContainer.innerHTML = '';
    reportBtn.classList.add('hidden');
    resultsContainer.classList.remove('hidden');
}


// // Report suspicious link
// function reportSuspiciousLink() {
//     const url = urlInput.value.trim();
//     if (!url) return;
    
//     // In a real app, you would send this to your backend
//     alert(`${translations[currentLanguage].reportBtn}: ${url}\n\nThis would be sent to the administrator in a real application.`);
    
//     // Disable the button to prevent multiple reports
//     reportBtn.disabled = true;
//     reportBtn.classList.add('opacity-50');
//     reportBtn.textContent = translations[currentLanguage].reportBtn + ' (Reported)';
// }

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', init);