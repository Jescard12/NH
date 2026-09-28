/* =========================================================
   Bilingual content data for the medical center site
   ========================================================= */

const PHONE_PRIMARY = "81 897 091";
const PHONE_PRIMARY_LINK = "+96181897091";
const PHONE_2 = "70 761 769";
const PHONE_2_LINK = "+96170761769";
const PHONE_3 = "03 610 710";
const PHONE_3_LINK = "+9613610710";
const WA_NUMBER = "96181897091";
const INSTAGRAM_URL = "https://www.instagram.com/dnhmedicalcenter/";
const FACEBOOK_URL = "https://www.facebook.com/drnasserabouhamdan";
const ADDRESS_AR = "الطريق العام، السمقانية، بجانب المخازن الكبرى، الشوف، لبنان";
const ADDRESS_EN = "Main Road, Samqaniyeh, next to Al Makhazen Al Koubra, Chouf, Lebanon";
const MAP_QUERY = encodeURIComponent("Dr Nasser Abou Hamdan Medical Center Samqaniyeh Chouf Lebanon");

const HOURS = [
  { day: {ar:"الاثنين", en:"Monday"}, time: {ar:"09:00 – 17:00", en:"9 AM – 5 PM"}, today: 1 },
  { day: {ar:"الثلاثاء", en:"Tuesday"}, time: {ar:"09:00 – 17:00", en:"9 AM – 5 PM"}, today: 2 },
  { day: {ar:"الأربعاء", en:"Wednesday"}, time: {ar:"09:00 – 17:00", en:"9 AM – 5 PM"}, today: 3 },
  { day: {ar:"الخميس", en:"Thursday"}, time: {ar:"09:00 – 17:00", en:"9 AM – 5 PM"}, today: 4 },
  { day: {ar:"الجمعة", en:"Friday"}, time: {ar:"09:00 – 17:00", en:"9 AM – 5 PM"}, today: 5 },
  { day: {ar:"السبت", en:"Saturday"}, time: {ar:"09:00 – 15:00", en:"9 AM – 3 PM"}, today: 6 },
  { day: {ar:"الأحد", en:"Sunday"}, time: {ar:"مغلق", en:"Closed"}, today: 0 },
];

function todayHoursLabel(lang){
  const nowDay = new Date().getDay();
  const h = HOURS.find(x=>x.today===nowDay);
  return h ? `${h.day[lang]} ${h.time[lang]}` : "";
}

/* ---- real team members ---- */
const TEAM = [
  { photo:"assets/team/nasser_pediatrician.jpg", dept:"medical",
    name:{ar:"د. ناصر أبو حمدان", en:"Dr. Nasser Abou Hamdan"},
    role:{ar:"طب الأطفال وحديثي الولادة", en:"Pediatrician & Neonatology"} },
  { photo:"assets/team/ghotmi_obgyn.jpg", dept:"medical",
    name:{ar:"د. محمد جميل غطمي", en:"Dr. Mohammad Jamil Ghotmi"},
    role:{ar:"أمراض نسائية وتوليد وزراعة أطفال الأنابيب", en:"Obstetrics, Gynecology & IVF"} },
  { photo:"assets/team/milhim_ortho.jpg", dept:"medical",
    name:{ar:"د. روني ملحم", en:"Dr. Roni Milhim"},
    role:{ar:"جراحة العظام", en:"Orthopedic Surgery"} },
  { photo:"assets/team/halim_headshot.jpg", dept:"medical",
    name:{ar:"د. حليم عموري", en:"Dr. Halim Ammouri"},
    role:{ar:"جراحة الفم والوجه والفكين والتجميل", en:"Maxillofacial & Plastic Surgery"} },
  { photo:"assets/team/chebbo_plastic.jpg", dept:"medical",
    name:{ar:"د. منير شبو", en:"Dr. Mounir Chebbo"},
    role:{ar:"الجراحة التجميلية", en:"Plastic Surgery"} },
  { photo:"assets/team/attalah_ophthalmology.jpg", dept:"medical",
    name:{ar:"د. مروان عطاالله", en:"Dr. Marwan Attalah"},
    role:{ar:"طب وجراحة العيون", en:"Ophthalmology"} },
  { photo:"assets/team/heba_nutrition.jpg", dept:"medical",
    name:{ar:"هبا أبي فرج", en:"Heba Abi Faraj, RD"},
    role:{ar:"أخصائية تغذية علاجية", en:"Clinical Nutritionist"} },
  { photo:"assets/team/dana_pediatric_dentistry.jpg", dept:"dental",
    name:{ar:"دانا جعفر", en:"Dana Jaafar"},
    role:{ar:"طب أسنان الأطفال", en:"Pediatric Dentistry"} },
  { photo:"assets/team/nader_dentist.jpg", dept:"dental",
    name:{ar:"نادر أبو ضاهر", en:"Nader Abou Daher"},
    role:{ar:"طب الأسنان العام", en:"General Dentistry"} },
  { photo:"assets/team/cesar_orthodontist.jpg", dept:"dental",
    name:{ar:"د. سيزار حلاواني", en:"Dr. Cesar Halawani"},
    role:{ar:"تقويم الأسنان", en:"Orthodontist"} },
  { photo:"assets/team/beddou_psychiatrist.jpg", dept:"psychologist",
    name:{ar:"د. وسيلة بدّو", en:"Dr. Wasila Beddou"},
    role:{ar:"الطب النفسي (إدمان، وسواس قهري، اضطرابات نوم، اكتئاب)", en:"Psychiatry (addiction, OCD, sleep, depression)"} },
  { photo:"assets/team/nesrin_psych.jpg", dept:"psychologist",
    name:{ar:"نسرين عبد الصمد", en:"Nesrin Abdelsamad"},
    role:{ar:"أخصائية نفسية إكلينيكية", en:"Clinical Psychologist"} },
  { photo:"assets/team/safia_psych.jpg", dept:"psychologist",
    name:{ar:"صافيا أبو حمدان", en:"Safia Bou Hamdan"},
    role:{ar:"أخصائية نفسية", en:"Psychologist"} },
  { photo:"assets/team/nagham_physio.jpg", dept:"physio",
    name:{ar:"نغم زيدان", en:"Nagham Zaidan"},
    role:{ar:"أخصائية علاج فيزيائي", en:"Physiotherapist"} },
  { photo:"assets/team/lodi_speech.jpg", dept:"speech",
    name:{ar:"لودي ذبيان", en:"Lodi Thebian"},
    role:{ar:"أخصائية نطق ولغة", en:"Speech & Language Therapist"} },
  { photo:"assets/team/tamara_ot.jpg", dept:"occupational",
    name:{ar:"تمارا بو كروم", en:"Tamara Bou Karroum"},
    role:{ar:"أخصائية علاج وظيفي", en:"Occupational Therapist"} },
  { photo:"assets/team/caroline_ot.jpg", dept:"occupational",
    name:{ar:"كارولين بو حيدر", en:"Caroline Bou Hadir"},
    role:{ar:"أخصائية علاج وظيفي", en:"Occupational Therapist"} },
  { photo:"assets/team/hazar_ecd.jpg", dept:"occupational",
    name:{ar:"هزار الخطار", en:"Hazar Khattar"},
    role:{ar:"تطور الطفولة المبكرة وتعديل السلوك", en:"Early Childhood Development & ABA Specialist"} },
];

function waLink(textAr, textEn){
  const lang = getLang();
  const msg = lang === "ar"
    ? `مرحبًا، أرغب بحجز موعد لخدمة: ${textAr} في مركز الدكتور ناصر أبو حمدان الطبي.`
    : `Hello, I'd like to book an appointment for: ${textEn} at Dr. Nasser Abou Hamdan Medical Center.`;
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`;
}
function waGeneral(){
  const lang = getLang();
  const msg = lang === "ar"
    ? "مرحبًا، أرغب بحجز موعد في مركز الدكتور ناصر أبو حمدان الطبي."
    : "Hello, I'd like to book an appointment at Dr. Nasser Abou Hamdan Medical Center.";
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`;
}

/* ---- department icon paths (feather-style, stroke only) ---- */
const ICONS = {
  medical: `<path d="M12 2v6M9 5h6M12 22c-4-3-8-6.5-8-11a5 5 0 0 1 9-3 5 5 0 0 1 9 3c0 4.5-4 8-8 11z"/>`,
  psych: `<circle cx="12" cy="12" r="9"/><path d="M9 10c0-1.5 1-2.5 2.5-2.5S14 8.5 14 10c0 1.5-1.2 2-2.5 3-.7.6-1 1.2-1 2"/><circle cx="10.5" cy="17" r=".6" fill="currentColor" stroke="none"/>`,
  dental: `<path d="M12 3c-2 0-3.2 1-4.3 1-1.3 0-2.7-1-2.7 2 0 3 1 6 1.6 9 .4 2 1 4 2.4 4 1.6 0 1.6-3.2 1.6-5s.5-2 1.4-2 1.4.2 1.4 2 0 5 1.6 5c1.4 0 2-2 2.4-4 .6-3 1.6-6 1.6-9 0-3-1.4-2-2.7-2-1.1 0-2.3-1-4.3-1z"/>`,
  speech: `<path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>`,
  pt: `<path d="M6 9l3 3-3 3M2 12h4M22 12h-4M18 9l-3 3 3 3M9 6l3-3 3 3M9 18l3 3 3-3"/>`,
  ot: `<circle cx="12" cy="7" r="2.5"/><path d="M12 9.5v5M9 12h6M8 20l4-5.5L16 20M8 14l-3 2M16 14l3 2"/>`,
};

/* ---- 6 department groups with services ---- */
const DEPARTMENTS = [
  {
    key: "medical",
    icon: ICONS.medical,
    name: { ar: "طب بشري / داخلي", en: "General & Internal Medicine" },
    desc: {
      ar: "تشكيلة واسعة من العيادات التخصصية تحت سقف واحد لرعاية جميع أفراد الأسرة.",
      en: "A wide range of specialty clinics under one roof, caring for every member of the family."
    },
    services: [
      { ar: "طب الأطفال وحديثي الولادة", en: "Pediatrics & Newborn Care" },
      { ar: "الحساسية والمناعة", en: "Allergy & Immunology" },
      { ar: "أمراض الغدد الصماء والسكري", en: "Endocrinology & Diabetes" },
      { ar: "الأنف والأذن والحنجرة", en: "Ear, Nose & Throat (ENT)" },
      { ar: "أمراض النساء والتوليد", en: "Obstetrics & Gynecology" },
      { ar: "جراحة العظام", en: "Orthopedic Surgery" },
      { ar: "طب وجراحة العيون", en: "Ophthalmology" },
      { ar: "الجراحة التجميلية والترميمية", en: "Plastic & Reconstructive Surgery" },
      { ar: "الطب النفسي", en: "Psychiatry" },
      { ar: "الفحوصات المخبرية والخدمات التشخيصية", en: "Lab Tests & Diagnostic Services" },
    ]
  },
  {
    key: "psychologist",
    icon: ICONS.psych,
    name: { ar: "علاج نفسي وصعوبات تعليمية", en: "Psychological Therapy & Learning Support" },
    desc: {
      ar: "دعم نفسي شامل للأطفال والبالغين في بيئة آمنة ومتفهمة.",
      en: "Comprehensive psychological support for children and adults in a safe, understanding environment."
    },
    services: [
      { ar: "تقييم وإرشاد نفسي", en: "Psychological Assessment & Counseling" },
      { ar: "العلاج النفسي للأطفال والبالغين", en: "Psychotherapy for Children & Adults" },
      { ar: "علاج سلوكي", en: "Behavioral Therapy" },
      { ar: "الدعم النفسي", en: "Psychological Support" },
    ]
  },
  {
    key: "dental",
    icon: ICONS.dental,
    name: { ar: "طب وجراحة الأسنان", en: "Dental Clinic" },
    desc: {
      ar: "عناية متكاملة بصحة الفم والأسنان لجميع الأعمار بأحدث التقنيات.",
      en: "Complete oral and dental care for all ages, using the latest technology."
    },
    services: [
      { ar: "طب الأسنان العام", en: "General Dentistry" },
      { ar: "ترميم وتجميل الأسنان", en: "Restorative & Cosmetic Dentistry" },
      { ar: "علاج جذور الأسنان (سحب العصب)", en: "Root Canal Treatment" },
      { ar: "طب أسنان الأطفال", en: "Pediatric Dentistry" },
      { ar: "تقويم الأسنان", en: "Orthodontics" },
      { ar: "زراعة الأسنان", en: "Dental Implants" },
      { ar: "جراحة الفم والوجه والفكين", en: "Oral & Maxillofacial Surgery" },
      { ar: "الأشعة البانورامية الرقمية للأسنان", en: "Digital Panoramic Dental X-Ray" },
    ]
  },
  {
    key: "speech",
    icon: ICONS.speech,
    name: { ar: "علاج النطق واللغة", en: "Speech Therapy" },
    desc: {
      ar: "تقييم وعلاج اضطرابات النطق والتواصل لدى الأطفال والبالغين.",
      en: "Assessment and therapy for speech, language and communication disorders in children and adults."
    },
    services: [
      { ar: "تقييم اضطرابات النطق واللغة", en: "Speech & Language Assessment" },
      { ar: "علاج تأخر الكلام", en: "Speech Delay Therapy" },
      { ar: "علاج اضطرابات التواصل", en: "Communication Disorder Therapy" },
      { ar: "علاج التأتأة", en: "Stuttering Therapy" },
      { ar: "علاج اضطرابات الصوت", en: "Voice Disorder Therapy" },
      { ar: "علاج صعوبات البلع", en: "Swallowing Difficulty Therapy" },
      { ar: "تنمية مهارات التواصل", en: "Communication Skills Development" },
    ]
  },
  {
    key: "physio",
    icon: ICONS.pt,
    name: { ar: "العلاج الفيزيائي", en: "Physical Therapy" },
    desc: {
      ar: "برامج إعادة تأهيل وتمارين علاجية مصممة خصيصًا لكل حالة.",
      en: "Rehabilitation programs and therapeutic exercise plans tailored to every case."
    },
    services: [
      { ar: "إعادة التأهيل الحركي", en: "Movement Rehabilitation" },
      { ar: "تمارين علاجية", en: "Therapeutic Exercise" },
      { ar: "إعادة التأهيل بعد الإصابات", en: "Post-Injury Rehabilitation" },
      { ar: "علاج آلام العضلات والمفاصل", en: "Muscle & Joint Pain Treatment" },
      { ar: "العلاج اليدوي", en: "Manual Therapy" },
      { ar: "التأهيل العصبي", en: "Neurological Rehabilitation" },
      { ar: "العلاج الفيزيائي للأطفال", en: "Pediatric Physiotherapy" },
    ]
  },
  {
    key: "occupational",
    icon: ICONS.ot,
    name: { ar: "العلاج الوظيفي", en: "Occupational Therapy" },
    desc: {
      ar: "تنمية المهارات الحركية والحسية والاستقلالية لدى الأطفال وذوي الاحتياجات الخاصة.",
      en: "Building motor, sensory and independence skills for children and individuals with special needs."
    },
    services: [
      { ar: "دعم صعوبات التعلم", en: "Learning Difficulties Support" },
      { ar: "العلاج النفسي الحركي", en: "Psychomotor Therapy" },
      { ar: "تنمية المهارات الحركية الدقيقة", en: "Fine Motor Skills Development" },
      { ar: "تنمية المهارات الحركية الكبرى", en: "Gross Motor Skills Development" },
      { ar: "تنمية مهارات الاستقلالية", en: "Independence Skills Development" },
      { ar: "التكامل الحسي", en: "Sensory Integration" },
      { ar: "تقييم العلاج الوظيفي", en: "Occupational Therapy Assessment" },
    ]
  },
];