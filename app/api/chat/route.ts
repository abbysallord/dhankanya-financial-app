const FINANCIAL_RESPONSES: Record<string, Record<string, string>> = {
  en: {
    budgeting:
      "To start budgeting, track your income and expenses for a month. Divide your money into categories like food, transport, and savings. A popular method is the 50/30/20 rule: 50% for needs, 30% for wants, and 20% for savings. Start small and adjust based on your situation.",
    saving:
      "Savings help you prepare for emergencies and future goals. Try to save at least 10-20% of your income. Start with a dedicated savings account separate from your daily spending account. Even small amounts add up over time due to compound interest.",
    investing:
      "Investing means putting your money into assets like stocks, bonds, or mutual funds to grow your wealth. Start with understanding what you're investing in. For beginners, mutual funds are a good option as professionals manage them.",
    debt: "If you have debt, make a plan to pay it off. List all debts with their interest rates. Pay minimum on all debts, then focus extra money on the highest interest rate debt first. This is called the avalanche method.",
    credit:
      "A credit score shows how reliable you are with borrowing money. Pay bills on time, keep credit card balances low, and avoid taking too much debt. In India, check your CIBIL score for free.",
    tax: "Taxes are mandatory contributions to the government. In India, you must file taxes if your income exceeds the threshold. Claim deductions for investments, insurance, and other eligible expenses to reduce your tax burden.",
    insurance:
      "Insurance protects you from financial emergencies. Health insurance covers medical costs, life insurance provides for your family if something happens to you. Start with basic term insurance and health coverage.",
    default:
      "That's a great financial question! To give you better guidance, could you be more specific? Ask about budgeting, saving, investing, debt management, credit scores, taxes, or insurance.",
  },
  hi: {
    budgeting:
      "बजट बनाने के लिए, एक महीने में अपनी आय और खर्च को ट्रैक करें। अपने पैसे को भोजन, परिवहन और बचत जैसी श्रेणियों में विभाजित करें। 50/30/20 नियम लोकप्रिय है: 50% जरूरतों के लिए, 30% चाहतों के लिए, 20% बचत के लिए।",
    saving:
      "बचत आपातकाल और भविष्य के लक्ष्यों के लिए तैयार रहने में मदद करती है। कम से कम 10-20% आय बचाने की कोशिश करें। एक अलग बचत खाता खोलें। समय के साथ छोटी राशि भी चक्रवृद्धि ब्याज के कारण बढ़ती है।",
    investing:
      "निवेश का मतलब है अपना पैसा शेयरों, बॉन्ड या म्यूचुअल फंड में लगाना। शुरुआत में म्यूचुअल फंड अच्छा विकल्प हैं क्योंकि पेशेवर उन्हें प्रबंधित करते हैं।",
    debt: "कर्ज होने पर एक योजना बनाएं। सभी कर्जों को उनकी ब्याज दरों के साथ सूचीबद्ध करें। उच्चतम ब्याज दर वाले कर्ज को पहले चुकाने पर ध्यान दें।",
    credit: "क्रेडिट स्कोर दिखाता है कि आप कितने जिम्मेदार हैं। बिलों का समय पर भुगतान करें। भारत में अपना CIBIL स्कोर मुफ्त में जांचें।",
    tax: "कर सरकार को अनिवार्य योगदान हैं। भारत में, यदि आपकी आय सीमा से अधिक है तो कर दाखिल करना चाहिए। निवेश, बीमा पर छूट का दावा करें।",
    insurance:
      "बीमा वित्तीय आपातकाल से बचाता है। स्वास्थ्य बीमा चिकित्सा लागत को कवर करता है। जीवन बीमा आपके परिवार के लिए सुरक्षा प्रदान करता है।",
    default: "यह एक अच्छा वित्तीय सवाल है! बेहतर मार्गदर्शन के लिए, बजट, बचत, निवेश, कर्ज, क्रेडिट स्कोर, कर या बीमा के बारे में पूछें।",
  },
  mr: {
    budgeting:
      "बजेट बनवण्यासाठी, एक महिन्यातील आय आणि खर्च ट्रॅक करा. आपले पैसे अन्न, वाहतूक आणि बचत यांसारख्या श्रेणींमध्ये विभाजित करा.",
    saving: "बचत आपातकालीन परिस्थितीचा सामना करण्यास मदत करते. किमान 10-20% उत्पन्न वाचवा. वेगळे बचत खाते उघडा.",
    investing: "गुंतवणूक म्हणजे शेयर, बाँड किंवा म्यूच्युअल फंडमध्ये पैसा लागवणे. सुरुवातीला म्यूच्युअल फंड चांगला पर्याय आहे.",
    debt: "कर्ज असल्यास एक योजना बनवा. सर्व कर्ज त्यांच्या व्याज दरांसह सूचीबद्ध करा.",
    credit: "क्रेडिट स्कोर दर्शवितो की आप किती जबाबदार आहात. बिल वेळेवर भरा. CIBIL स्कोर तपासा.",
    tax: "कर सरकारला अनिवार्य योगदान आहे. गुंतवणूक, विमा वर वजावट घ्या.",
    insurance: "विमा आर्थिक आपातकाल पासून संरक्षण देते. स्वास्थ्य विमा वैद्यकीय खर्च कव्हर करते.",
    default: "हा एक चांगला आर्थिक प्रश्न आहे! अधिक मार्गदर्शनासाठी बजेट, बचत, गुंतवणूक याविषयी विचारा.",
  },
  ta: {
    budgeting:
      "பட்ജெட் செய்ய, ஒரு மாதத்தில் உங்கள் வருமானம் மற்றும் செலவுகளை கண்காணிக்கவும். உணவு, போக்குவரத்து மற்றும் சேமிப்பு போன்ற வகைகளாக பிரிக்கவும்.",
    saving: "சேமிப்பு அவசரகாலங்களுக்கு தயாரிக்க உதவுகிறது. குறைந்தபட்சம் 10-20% வருமானத்தை சேமிக்க முயற்சிக்கவும்.",
    investing: "முதலீடு என்பது பங்குகள், பத்திரங்கள் அல்லது பரஸ்பர நிதிகளில் பணத்தை வளர்ப்பது. தொடக்கத்தில் பரஸ்பர நிதிகள் நல்ல விருப்பம்.",
    debt: "கடனுள்ளபோது, ஒரு திட்டத்தை உருவாக்குங்கள். அனைத்து கடனை வட்டி விகிதங்களுடன் பட்டியல் செய்யவும்.",
    credit: "கடன் மதிப்பெண் உங்கள் பொறுப்பைக் காட்டுகிறது. மாத கணக்குகளை சரியாக செலுத்தவும்.",
    tax: "வரி அரசாங்கத்திற்கு கட்டாய பங்களிப்பு. முதலீடு, காப்பீட்டில் தகவல் பெறவும்.",
    insurance: "காப்பீடு நிதி அவசரங்களிலிருந்து பாதுகாக்கிறது. சுகாதார காப்பீடு மருத்துவ செலவுகளை உள்ளடக்குகிறது.",
    default: "இது ஒரு நல்ல நிதி கேள்வி! நிதி, சேமிப்பு, முதலீடு பற்றி கேளுங்கள்.",
  },
  te: {
    budgeting: "బడ్జెట్ చేయడానికి, ఒక నెలలో మీ ఆదాయం మరియు ఖర్చులను ట్రాక్ చేయండి. ఆహారం, రవాణా మరియు సేవింగ్‌ల వంటి విభాగాలుగా విభజించండి.",
    saving: "సేవింగ్ అత్యవసర పరిస్థితులకు సిద్ధం చేయడానికి సహాయపడుతుంది. కనీసం 10-20% ఆదాయాన్ని సేవ్ చేయండి.",
    investing: "పెట్టుబడి అంటే స్టాక్‌లు, బాండ్‌లు లేదా మ్యూచువల్ ఫండ్‌లలో డేటాను ఉంచడం. ప్రారంభానికి మ్యూచువల్ ఫండ్‌లు చేసిన ఎంపిక.",
    debt: "రుణ ఉన్నపుడు, ఒక ప్రణాళిక చేసుకోండి. అన్ని రుణలను వాటి వడ్డీ రేట్‌ల ద్వారా జాబితా చేయండి.",
    credit: "క్రెడిట్ స్కోర్ మీ బాధ్యత చూపుతుంది. ఖాతాలను సమయానికి చెల్లించండి.",
    tax: "పన్ను ప్రభుత్వానికి తప్పనిసరి సహకారం. పెట్టుబడి, బీమా నుండి తగ్గింపులు పొందండి.",
    insurance: "విమా ఆర్థిక ఆపత్కరమైన సంఘటనల నుండి రక్షణ ఇస్తుంది. ఆరోగ్య విమా వైద్య ఖర్చులను కవర్ చేస్తుంది.",
    default: "ఇది ఒక మంచి ఆర్థిక ప్రశ్న! నిధులు, సేవింగ్, పెట్టుబడి గురించి అడగండి.",
  },
  kn: {
    budgeting: "ಬಜೆಟ್ ಮಾಡಲು, ಒಂದು ತಿಂಗಳಲ್ಲಿ ನಿಮ್ಮ ಆದಾಯ ಮತ್ತು ಖರ್ಚುವನ್ನು ಟ್ರ್ಯಾಕ್ ಮಾಡಿ. ಆಹಾರ, ಸಾರಿಗೆ ಮತ್ತು ಸಂಚಯದಂತಹ ವರ್ಗಗಳಾಗಿ ವಿಭಜಿಸಿ.",
    saving: "ಸಂಚಯ ತುರ್ತು ಪರಿಸ್ಥಿತಿಗೆ ತಯಾರಿ ಮಾಡಲು ಸಹಾಯ ಮಾಡುತ್ತದೆ. ಕನಿಷ್ಠ 10-20% ಆದಾಯವನ್ನು ಉಳಿತಾಯ ಮಾಡಿ.",
    investing: "ಹೂಡಿಕೆ ಎಂದರೆ ಸ್ಟಾಕ್‌ಗಳು, ಬಾಂಡ್‌ಗಳು ಅಥವಾ ಮ್ಯೂಚುವಲ್ ಫಂಡ್‌ಗಳಲ್ಲಿ ಹಣವನ್ನು ಹೂಡುವುದು. ಶುರುವಾತಿಗೆ ಮ್ಯೂಚುವಲ್ ಫಂಡ್‌ಗಳು ಉತ್ತಮ ಆಯ್ಕೆ.",
    debt: "ಸಾಲ ಇರುವಾಗ, ಯೋಜನೆ ಮಾಡಿ. ಎಲ್ಲ ಸಾಲುಗಳನ್ನು ಅವುಗಳ ಬಡ್ಡಿ ದರಗಳೊಂದಿಗೆ ಪಟ್ಟಿಮಾಡಿ.",
    credit: "ಕ್ರೆಡಿಟ್ ಸ್ಕೋರ್ ನಿಮ್ಮ ಜವಾಬ್ದಾರಿ ತೋರುತ್ತದೆ. ಖಾತೆಗಳನ್ನು ಸಮಯಕ್ಕೆ ಪಾವತಿ ಮಾಡಿ.",
    tax: "ತೆರಿಗೆ ಸರ್ಕಾರಕ್ಕೆ ಕಟ್ಟಾಯ ಅವದಾನ. ಹೂಡಿಕೆ, ವಿಮೆಯಿಂದ ಕಡಿತ ಪಡೆಯಿರಿ.",
    insurance: "ವಿಮೆ ಆರ್ಥಿಕ ಅಪಾಯಗಳಿಂದ ರಕ್ಷಣೆ ನೀಡುತ್ತದೆ. ಆರೋಗ್ಯ ವಿಮೆ ವೈದ್ಯಕೀಯ ವೆಚ್ಚವನ್ನು ಆವರಿಸುತ್ತದೆ.",
    default: "ಇದು ಒಂದು ಚೆನ್ನಾದ ಆರ್ಥಿಕ ಪ್ರಶ್ನೆ! ಅರ್ಥವ್ಯವಸ್ಥೆ, ಸಂಚಯ, ಹೂಡಿಕೆ ಬಗ್ಗೆ ಕೇಳಿ.",
  },
  ml: {
    budgeting:
      "ബജറ്റ് ഉണ്ടാക്കാൻ, ഒരു മാസത്തിൽ നിങ്ങളുടെ വരുമാനവും ചിലവും ട്രാക്ക് ചെയ്യുക. ഭക്ഷണം, ഗതാഗതം, സേവിംഗ്സ് പോലുള്ള വിഭാഗങ്ങളാക്കി തിരിക്കുക.",
    saving: "സേവിംഗ്സ് അത്യാഗത്ഘ സാഹചര്യങ്ങൾക്കായി തയ്യാറെടുക്കാൻ സഹായിക്കുന്നു. കുറഞ്ഞത് 10-20% വരുമാനം സേവ് ചെയ്യുക.",
    investing: "നിക്ഷേപം എന്നത് സ്റ്റോക്കുകൾ, ബോണ്ടുകൾ അല്ലെങ്കിൽ മ്യൂചുവൽ ഫണ്ടുകളിൽ പണം നിക്ഷേപിക്കുന്നതാണ്. തുടക്കത്തിൽ മ്യൂചുവൽ ഫണ്ടുകൾ നല്ലത്.",
    debt: "കടം ഉണ്ടായാൽ ഒരു പ്ലാൻ ഉണ്ടാക്കുക. എല്ലാ കടങ്ങൾ അവയുടെ പലിശ നിരക്കുകൾ ചേർത്ത് പട്ടികപ്പെടുത്തുക.",
    credit: "ക്രെഡിറ്റ് സ്കോർ നിങ്ങളുടെ ജവാബ്ദാരിത കാണിക്കുന്നു. അക്കൗണ്ടുകൾ സമയത്തിന് കൈമാറുക.",
    tax: "നികുതി സർക്കാരിനോടുള്ള നിർബന്ധ സംഭാവനയാണ്. നിക്ഷേപം, ഇൻഷുറൻസ് നിന്നും കിഴിവ് ലഭിക്കുക.",
    insurance: "ഇൻഷുറൻസ് സാമ്പത്തിക വിപത്തിനെതിരെ സംരക്ഷണ നൽകുന്നു. ആരോഗ്യ ഇൻഷുറൻസ് വൈദ്യ ചിലവുകൾ കവർ ചെയ്യുന്നു.",
    default: "ഇത് മികച്ച സാമ്പത്തിക ചോദ്യമാണ്! സാമ്പത്തികത, സേവിംഗ്സ്, നിക്ഷേപം പറ്റി ചോദിക്കുക.",
  },
  gu: {
    budgeting: "બજેટ બનાવવા માટે, એક મહિનામાં તમારી આવક અને ખર્ચને ટ્રેક કરો. ખોરાક, પરિવહન અને બચતના જેવા વર્ગોમાં વિભાજિત કરો.",
    saving: "બચત તમને આપતકાલીન સાહચર્ય માટે તૈયાર કરવામાં મદદ કરે છે. ઓછામાં ઓછું 10-20% આવક બચાવો.",
    investing: "રોકાણ એટલે શેર, બોન્ડ્સ અથવા મ્યુચ્યુઅલ ફંડમાં પૈસા મૂકવું. શરૂઆતમાં મ્યુચ્યુઅલ ફંડ સારો વિકલ્પ છે.",
    debt: "જ્યારે કર્જ હોય, તો એક યોજના બનાવો. તમામ દેણીઓ તેમના વ્યાજ દરો સાથે સૂચિબદ્ધ કરો.",
    credit: "ક્રેડિટ સ્કોર તમારી જવાબદારી દર્શાય છે. ખાતાઓને સમયપર ચૂકવો.",
    tax: "કર એ સરકારને ફરજિયાત યોગદાન છે. રોકાણ, વીમોથી કપાત મેળવો.",
    insurance: "વીમો નાણાકીય આપતકાલીન સમયથી રક્ષણ આપે છે. આરોગ્ય વીમો તબીબી ખર્ચને આવરી લે છે.",
    default: "આ એક સારો આર્થિક પ્રશ્ન છે! નાણા, બચત, રોકાણ વિશે પૂછો.",
  },
}

export const maxDuration = 30

export async function POST(req: Request) {
  try {
    const { message, language = "en", history = [] } = await req.json()

    const apiKey = process.env.GEMINI_API_KEY
    if (!apiKey) {
      console.error("[v0] GEMINI_API_KEY not found in environment variables")
      // Fall back to knowledge base responses
      const topic = identifyTopic(message.toLowerCase())
      const response =
        FINANCIAL_RESPONSES[language as keyof typeof FINANCIAL_RESPONSES]?.[topic] ||
        FINANCIAL_RESPONSES[language as keyof typeof FINANCIAL_RESPONSES]?.default ||
        FINANCIAL_RESPONSES.en[topic] ||
        FINANCIAL_RESPONSES.en.default

      return Response.json({
        success: true,
        response,
        isKnowledgeBase: true,
      })
    }

    // Try Gemini API with available model
    try {
      const { GoogleGenerativeAI } = await import("@google/generative-ai")
      const client = new GoogleGenerativeAI(apiKey)

      // Try gemini-2.0-flash first, fallback to others
      let model
      try {
        model = client.getGenerativeModel({ model: "gemini-2.0-flash" })
      } catch {
        try {
          model = client.getGenerativeModel({ model: "gemini-1.5-pro" })
        } catch {
          model = client.getGenerativeModel({ model: "gemini-pro" })
        }
      }

      // Only include actual user-assistant exchanges
      const conversationHistory = history
        .filter((msg: { role: string; content: string }) => msg.role !== "system")
        .slice(-10) // Keep last 10 messages for context
        .map((msg: { role: string; content: string }) => ({
          role: msg.role === "user" ? "user" : "model",
          parts: [{ text: msg.content }],
        }))

      const systemContext = `You are Dhankanya, a financial education assistant for rural India. Keep responses simple, practical, and in context of Indian finance. Focus on: budgeting, saving, investing, debt management, credit scores, taxes, and insurance. Use rural India examples. Respond in ${language === "en" ? "English" : language}.`

      const chat = model.startChat({
        history: conversationHistory,
        generationConfig: {
          maxOutputTokens: 500,
          temperature: 0.7,
        },
      })

      const result = await chat.sendMessage(systemContext + "\n\nUser: " + message)
      const response = result.response.text()

      return Response.json({
        success: true,
        response,
        isKnowledgeBase: false,
      })
    } catch (geminiError) {
      console.error("[v0] Gemini API error:", geminiError)
      // Fall back to knowledge base
      const topic = identifyTopic(message.toLowerCase())
      const response =
        FINANCIAL_RESPONSES[language as keyof typeof FINANCIAL_RESPONSES]?.[topic] ||
        FINANCIAL_RESPONSES[language as keyof typeof FINANCIAL_RESPONSES]?.default ||
        FINANCIAL_RESPONSES.en[topic] ||
        FINANCIAL_RESPONSES.en.default

      return Response.json({
        success: true,
        response,
        isKnowledgeBase: true,
      })
    }
  } catch (error) {
    console.error("[v0] Chat API error:", error)
    return Response.json(
      {
        success: false,
        error: "Failed to generate response. Please try again.",
      },
      { status: 500 },
    )
  }
}

// Helper function to identify topic from user message
function identifyTopic(message: string): string {
  const topics = [
    { keywords: ["budget", "बजट", "budgeting", "बजेट"], topic: "budgeting" },
    { keywords: ["save", "savings", "बचत", "वाचव"], topic: "saving" },
    { keywords: ["invest", "निवेश", "गुंतवणूक", "म्यूचुअल"], topic: "investing" },
    { keywords: ["debt", "कर्ज", "कर्ज़", "कर्जा", "दीन"], topic: "debt" },
    { keywords: ["credit", "क्रेडिट", "cibil", "सिबिल"], topic: "credit" },
    { keywords: ["tax", "कर", "आयकर"], topic: "tax" },
    { keywords: ["insurance", "बीमा", "विमा", "health"], topic: "insurance" },
  ]

  for (const { keywords, topic } of topics) {
    if (keywords.some((keyword) => message.includes(keyword))) {
      return topic
    }
  }

  return "default"
}
