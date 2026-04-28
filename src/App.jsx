import React, { useState, useEffect } from 'react';
import { Calendar, CheckCircle2, MessageCircle, Phone, Users, Volleyball, Globe } from 'lucide-react';
import './App.css';

const App = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [language, setLanguage] = useState('fr');

  // Mesures de sécurité
  useEffect(() => {
    // Désactiver le clic droit
    const handleContextMenu = (e) => {
      e.preventDefault();
      return false;
    };

    // Désactiver les raccourcis clavier (F12, Ctrl+Shift+I, etc.)
    const handleKeyDown = (e) => {
      if (
        e.key === 'F12' || 
        (e.ctrlKey && e.shiftKey && e.key === 'I') ||
        (e.ctrlKey && e.shiftKey && e.key === 'J') ||
        (e.ctrlKey && e.shiftKey && e.key === 'C')
      ) {
        e.preventDefault();
        return false;
      }
    };

    // Désactiver la sélection de texte
    const handleSelectStart = (e) => {
      e.preventDefault();
      return false;
    };

    // Désactiver le drag and drop
    const handleDragStart = (e) => {
      e.preventDefault();
      return false;
    };

    // Effacer les logs de la console
    const clearConsole = () => {
      console.clear();
      console.log('%c🔒 Accès à la console désactivé', 'color: red; font-size: 16px; font-weight: bold;');
    };

    // Appliquer les écouteurs d'événements
    document.addEventListener('contextmenu', handleContextMenu);
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('selectstart', handleSelectStart);
    document.addEventListener('dragstart', handleDragStart);
    
    // Effacer la console immédiatement et périodiquement
    clearConsole();
    const consoleInterval = setInterval(clearConsole, 1000);

    // Détecter les outils de développement
    const devtools = {
      open: () => {
        document.body.innerHTML = '<div style="position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.9); color: white; display: flex; align-items: center; justify-content: center; font-size: 24px; z-index: 999999;"><div>🔒 Outils de développement détectés</div></div>';
      }
    };

    // Surveiller l'ouverture des devtools
    const devtoolsChecker = setInterval(() => {
      if (window.outerHeight - window.innerHeight > 200 || window.outerWidth - window.innerWidth > 200) {
        devtools.open();
      }
    }, 500);

    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('selectstart', handleSelectStart);
      document.removeEventListener('dragstart', handleDragStart);
      clearInterval(consoleInterval);
      clearInterval(devtoolsChecker);
    };
  }, []);

  const translations = {
    fr: {
      header: {
        title: "Aide-nous à améliorer le foot amateur",
        badge: "2 min chrono",
        description: "Que tu joues en 5v5, 7v7 ou en impro avec des potes, ton expérience compte. On veut comprendre <strong>comment vous trouvez un terrain</strong>, <strong>comment vous organisez vos matchs</strong> et <strong>ce qui vous freine</strong>. Ces infos nous aideront à construire un outil vraiment utile pour les joueurs. Merci pour ton aide"
      },
      sections: {
        1: "Habitudes de jeu",
        2: "Recherche de terrain",
        3: "Réservation",
        4: "Organisation des matchs",
        5: "Expérience sur place",
        6: "Frustrations",
        7: "Habitudes",
        8: "Contact (optionnel)"
      },
      questions: {
        1: "Dans quel quartier ou ville jouez-vous le plus souvent ?",
        2: "À quelle fréquence jouez-vous au foot ?",
        3: "Avec qui jouez-vous généralement ?",
        4: "Comment trouvez-vous un terrain aujourd'hui ?",
        5: "Est-ce facile de trouver un terrain disponible quand vous voulez jouer ?",
        6: "Avez-vous déjà abandonné l'idée de jouer faute de terrain disponible ?",
        7: "Comment réservez-vous généralement le terrain ?",
        8: "La réservation vous prend combien de temps en moyenne ?",
        9: "Avez-vous déjà eu ces problèmes de réservation ?",
        10: "Devez-vous souvent appeler plusieurs terrains avant d'en trouver un de libre ?",
        11: "Qui organise généralement les matchs dans votre groupe ?",
        12: "Est-ce difficile de réunir assez de joueurs pour un match ?",
        13: "Combien de temps vous prend l'organisation complète (joueurs + terrain) ?",
        14: "Avez-vous déjà annulé un match faute de joueurs ?",
        15: "Est-ce que des joueurs annulent au dernier moment ?",
        16: "Est-ce compliqué de trouver un remplaçant rapidement quand quelqu'un annule ?",
        17: "Utilisez-vous des groupes WhatsApp ou Messenger pour organiser ?",
        18: "Arrive-t-il que tout le monde ne soit pas d'accord sur l'horaire ou le terrain ?",
        19: "Perdez-vous du temps à coordonner tout le monde (messages, relances, etc.) ?",
        20: "Les horaires du terrain sont-ils respectés ?",
        21: "Avez-vous déjà eu un match annulé ou déplacé au dernier moment par le terrain ?",
        22: "Globalement, l'organisation sur place est-elle claire ?",
        23: "Qu'est-ce qui vous énerve le plus quand vous voulez jouer ?",
        24: "Quelle est la pire expérience que vous ayez vécue ?",
        25: "Qu'est-ce qui est le plus compliqué selon vous ?",
        26: "Qu'est-ce qui vous empêche de jouer plus souvent ?",
        27: "Y a-t-il des quartiers où c'est plus difficile de jouer selon vous ?",
        28: "Selon vous, pourquoi certains terrains sont toujours pleins ?",
        29: "Changez-vous souvent de terrain ou restez-vous fidèle ?",
        30: "Votre numéro de téléphone",
        31: "Un dernier truc à partager ?"
      },
      hints: {
        3: "Plusieurs choix possibles",
        4: "Plusieurs choix possibles",
        7: "Plusieurs choix possibles",
        9: "Plusieurs choix possibles",
        23: "Plusieurs choix possibles",
        26: "Plusieurs choix possibles",
        28: "Plusieurs choix possibles",
        30: "Facultatif – pour être informé des améliorations ou tester une future solution. Sans spam, promis.",
        31: "Une frustration, une idée, un besoin... (optionnel)"
      },
      placeholders: {
        quartier: "Ex: Paris 18e, Lyon Croix-Rousse...",
        telephone: "06 12 34 56 78 (facultatif)",
        commentaire: "Partage ton expérience..."
      },
      options: {
        frequence: [
          { value: "1-2/mois", label: "1 à 2 fois par mois" },
          { value: "1/sem", label: "1 fois par semaine" },
          { value: "2-3/sem", label: "2 à 3 fois par semaine" },
          { value: "+3/sem", label: "Plus de 3 fois par semaine" }
        ],
        avec_qui: [
          { value: "amis", label: "Amis" },
          { value: "collegues", label: "Collègues" },
          { value: "club", label: "Équipe régulière / club" },
          { value: "whatsapp", label: "Groupes WhatsApp / communautés" },
          { value: "solo", label: "En solo (je cherche des joueurs)" }
        ],
        trouver_terrain: [
          { value: "bao", label: "Bouche à oreille" },
          { value: "wa", label: "WhatsApp ou SMS" },
          { value: "gmaps", label: "Google Maps" },
          { value: "app", label: "Application mobile" },
          { value: "passage", label: "Je passe devant / je connais" },
          { value: "site", label: "Site internet" }
        ],
        facilite_terrain: [
          { value: "tres_facile", label: "Très facile" },
          { value: "moyen", label: "Moyennement facile" },
          { value: "difficile", label: "Difficile" },
          { value: "tres_difficile", label: "Très difficile" }
        ],
        abandon: [
          { value: "plusieurs", label: "Oui, plusieurs fois" },
          { value: "parfois", label: "Oui, parfois" },
          { value: "jamais", label: "Non, jamais" }
        ],
        moyen_reservation: [
          { value: "tel", label: "Téléphone" },
          { value: "wa", label: "WhatsApp" },
          { value: "sur_place", label: "Sur place direct" },
          { value: "site", label: "Site web" },
          { value: "app", label: "Application" }
        ],
        temps_reservation: [
          { value: "<5", label: "Moins de 5 min" },
          { value: "5-15", label: "5 à 15 min" },
          { value: "15-30", label: "15 à 30 min" },
          { value: "+30", label: "Plus de 30 min" }
        ],
        problemes_reservation: [
          { value: "double", label: "Double réservation" },
          { value: "indispo", label: "Terrain finalement indisponible" },
          { value: "no_reply", label: "Pas de réponse du propriétaire" },
          { value: "horaires", label: "Horaires non respectés" },
          { value: "aucun", label: "Aucun problème" }
        ],
        appels_multiples: [
          { value: "toujours", label: "Oui, presque toujours" },
          { value: "parfois", label: "Parfois" },
          { value: "rarement", label: "Rarement" },
          { value: "jamais", label: "Jamais" }
        ],
        organisateur: [
          { value: "moi", label: "Moi-même" },
          { value: "capitaine", label: "Un capitaine ou référent" },
          { value: "tournant", label: "Ça tourne entre plusieurs joueurs" },
          { value: "impro", label: "Personne, on improvise" }
        ],
        reunion_joueurs: [
          { value: "tres_difficile", label: "Très difficile" },
          { value: "assez", label: "Assez difficile" },
          { value: "facile", label: "Facile" },
          { value: "tres_facile", label: "Très facile" }
        ],
        temps_organisation: [
          { value: "<15", label: "Moins de 15 min" },
          { value: "15-30", label: "15 à 30 min" },
          { value: "30-60", label: "30 min à 1 heure" },
          { value: "+60", label: "Plus d'1 heure" }
        ],
        annulation_match: [
          { value: "tres_souvent", label: "Oui, très souvent" },
          { value: "parfois", label: "Oui, parfois" },
          { value: "rarement", label: "Rarement" },
          { value: "jamais", label: "Jamais" }
        ],
        annulations_joueurs: [
          { value: "tres_souvent", label: "Très souvent" },
          { value: "parfois", label: "Parfois" },
          { value: "rarement", label: "Rarement" }
        ],
        remplacant: [
          { value: "tres", label: "Très compliqué" },
          { value: "un_peu", label: "Un peu compliqué" },
          { value: "facile", label: "Plutôt facile" }
        ],
        whatsapp_orga: [
          { value: "efficace", label: "Oui, et c'est efficace" },
          { value: "chaos", label: "Oui, mais c'est le chaos" },
          { value: "non", label: "Non" }
        ],
        desaccord: [
          { value: "tres_souvent", label: "Très souvent" },
          { value: "parfois", label: "Parfois" },
          { value: "rarement", label: "Rarement" }
        ],
        coordination: [
          { value: "beaucoup", label: "Beaucoup de temps" },
          { value: "un_peu", label: "Un peu de temps" },
          { value: "non", label: "Pas du tout" }
        ],
        horaires_respectes: [
          { value: "toujours", label: "Toujours" },
          { value: "souvent", label: "Souvent" },
          { value: "parfois", label: "Parfois" },
          { value: "rarement", label: "Rarement" }
        ],
        annulation_terrain: [
          { value: "plusieurs", label: "Oui, plusieurs fois" },
          { value: "1-2", label: "Oui, une ou deux fois" },
          { value: "non", label: "Non" }
        ],
        orga_sur_place: [
          { value: "tres", label: "Très claire" },
          { value: "moyen", label: "Moyennement claire" },
          { value: "non", label: "Pas claire du tout" }
        ],
        frustrations: [
          { value: "indispo", label: "Terrain pas disponible" },
          { value: "annul_dm", label: "Annulations de dernière minute" },
          { value: "temps_orga", label: "Perdre du temps à organiser" },
          { value: "no_show", label: "Joueurs qui ne viennent pas sans prévenir" },
          { value: "double", label: "Doubles réservations" }
        ],
        pire_experience: [
          { value: "occupe", label: "Arriver et le terrain est déjà occupé" },
          { value: "annul_10", label: "Match annulé 10 minutes avant" },
          { value: "dispute", label: "Se disputer sur l'horaire dans le groupe" },
          { value: "40msg", label: "Gérer 40 messages WhatsApp" }
        ],
        plus_complique: [
          { value: "terrain", label: "Trouver un terrain libre" },
          { value: "joueurs", label: "Organiser les joueurs" },
          { value: "deux", label: "Les deux sont compliqués" }
        ],
        freins: [
          { value: "terrains", label: "Manque de terrains disponibles" },
          { value: "joueurs", label: "Difficulté à réunir assez de joueurs" },
          { value: "temps", label: "Manque de temps" },
          { value: "orga", label: "Organisation trop lourde" }
        ],
        quartiers_difficiles: [
          { value: "oui", label: "Oui (vous pourrez préciser après)" },
          { value: "non", label: "Non" }
        ],
        terrains_pleins: [
          { value: "emplacement", label: "Bon emplacement" },
          { value: "prix", label: "Prix attractif" },
          { value: "qualite", label: "Bonne qualité du terrain" },
          { value: "reservation", label: "Facilité de réservation" }
        ],
        fidelite_terrain: [
          { value: "meme", label: "Toujours le même terrain" },
          { value: "2-3", label: "2-3 terrains habituels" },
          { value: "souvent", label: "Je change souvent" }
        ]
      },
      submit: "Envoyer – Merci pour ton aide",
      submitNote: "Tes réponses sont anonymes et utilisées uniquement pour améliorer le foot amateur.",
      success: {
        title: "Merci !",
        message: "Tes réponses nous aident à améliorer le foot amateur."
      }
    },
    ar: {
      header: {
        title: "عاوننا نحسّوو الكورة ديال لخام",
        badge: "دقيقتين وينجز",
        description: "كي تلعب ف 5v5، 7v7 ولا مع الزميلات بلا ما تدير بال، تجربتك كتهمن. بغينا نفهمو <strong>كيفاش كتلقى Terrain</strong>، <strong>كيفاش كتديرن ليك الماتشات</strong> و <strong>اش كايوقفك</strong>. هاد المعلومات كتعاوننا تصاوبو شي outil بزاف مفيد لل_players. شكرا بلاصتك"
      },
      sections: {
        1: "عادات اللعب",
        2: "البحث على Terrain",
        3: "الحجز",
        4: "تنظيم الماتشات",
        5: "التجربة فالملعب",
        6: "لي كايغضبك",
        7: "عادات",
        8: "التواصل (اختياري)"
      },
      questions: {
        1: "فاش حي ولا مدينة كتلعب بزاف دالوقت؟",
        2: "بشاش ترداد كتلعب فالكورة؟",
        3: "مع من كتلعب غالبا؟",
        4: "كيفاش كتلقى Terrain دابا؟",
        5: "سهل تلقى Terrain فارغ بغيتي تلعب؟",
        6: "كتر ليك مرة لعباتش ماكانش Terrain؟",
        7: "كيفاش كتحجز Terrain غالبا؟",
        8: "الحجز كياخدك شحال دالوقت؟",
        9: "كتر ليك مرة علاك مشاكل دالحجز؟",
        10: "كتر ليك مرة كتصل بزاف دال Terrains قبل ما تلقى واحد فارغ؟",
        11: "من كيدير الماتشات فالجروب ديالك؟",
        12: "صعب تجمع بزاف ديال ل_players باش تلعب ماتش؟",
        13: "التنظيم كامل (players + terrain) كياخدك شحال؟",
        14: "كتر ليك مرة ألغيتي ماتش ماكانشش بزاف ديال ل_players؟",
        15: "كتر ليك مرة ل_players كانو كانسلو فاللحظة الأخيرة؟",
        16: "صعب تلقى واحد بدل ما كانسلو؟",
        17: "كيخدمو WhatsApp ولا Messenger باش تديروا التنظيم؟",
        18: "كتر ما الناس متفقاش على الوقت ولا Terrain؟",
        19: "كضيع وقت باش تدير coordination ديال كل الناس؟",
        20: "الوقت ديال Terrain كيحترمو؟",
        21: "كتر ليك مرة كانو ألغو ولا بدلو الماتش ديالك فاللحظة الأخيرة؟",
        22: "التنظيم فالملعب واضح؟",
        23: "اش كايغضبك بزاف بغيتي تلعب؟",
        24: "أسوأ تجربة عاقبك فيها؟",
        25: "اش أصعب حاجة عندك؟",
        26: "اش كايمنعك تلعب بزاف دالمرات؟",
        27: "كاين شي حي ولا مدينة كتلقى فيها صعب تلعب؟",
        28: "عندك ليكاش بعض Terrains كيبقى دايما plein؟",
        29: "كتغير Terrain بزاف ولا كتبقى نفس واحد؟",
        30: "رقم تيليفون ديالك",
        31: "شي حاجة أخيرة بغيتي تقول؟"
      },
      hints: {
        3: "تقدر تختار بزاف دالخيارات",
        4: "تقدر تختار بزاف دالخيارات",
        7: "تقدر تختار بزاف دالخيارات",
        9: "تقدر تختار بزاف دالخيارات",
        23: "تقدر تختار بزاف دالخيارات",
        26: "تقدر تختار بزاف دالخيارات",
        28: "تقدر تختار بزاف دالخيارات",
        30: "اختياري – باش تعرف بالتحسينات ولا تجربة solution جدي. ماكيناش spam، وعد",
        31: "شي frustration، فكرة، حاجة... (اختياري)"
      },
      placeholders: {
        quartier: "مثال: الدار البيضاء، سلا، الرباط...",
        telephone: "06 12 34 56 78 (اختياري)",
        commentaire: "شارك تجربتك..."
      },
      options: {
        frequence: [
          { value: "1-2/mois", label: "1 ولا 2 مرة فالشهرة" },
          { value: "1/sem", label: "مرة كل أسبوع" },
          { value: "2-3/sem", label: "2 ولا 3 مرة كل أسبوع" },
          { value: "+3/sem", label: "كاين زيد من 3 مرة كل أسبوع" }
        ],
        avec_qui: [
          { value: "amis", label: "الصحاب" },
          { value: "collegues", label: "الزملاء" },
          { value: "club", label: "فريق / club" },
          { value: "whatsapp", label: "جروبات WhatsApp" },
          { value: "solo", label: "وحدي (كنقلب ل_players)" }
        ],
        trouver_terrain: [
          { value: "bao", label: "من كلام الناس" },
          { value: "wa", label: "WhatsApp ولا SMS" },
          { value: "gmaps", label: "Google Maps" },
          { value: "app", label: "Application" },
          { value: "passage", label: "كتمرا و كتعرف" },
          { value: "site", label: "Site internet" }
        ],
        facilite_terrain: [
          { value: "tres_facile", label: "بزاف سهل" },
          { value: "moyen", label: "متوسط سهل" },
          { value: "difficile", label: "صعب" },
          { value: "tres_difficile", label: "بزاف صعب" }
        ],
        abandon: [
          { value: "plusieurs", label: "اه، بزاف دالمرات" },
          { value: "parfois", label: "اه، أحيانا" },
          { value: "jamais", label: "لا، أبدا" }
        ],
        moyen_reservation: [
          { value: "tel", label: "التيليفون" },
          { value: "wa", label: "WhatsApp" },
          { value: "sur_place", label: "باش نروح مباشرة" },
          { value: "site", label: "Site web" },
          { value: "app", label: "Application" }
        ],
        temps_reservation: [
          { value: "<5", label: "أقل من 5 دقايق" },
          { value: "5-15", label: "5 ل 15 دقيقة" },
          { value: "15-30", label: "15 ل 30 دقيقة" },
          { value: "+30", label: "كاين زيد من 30 دقيقة" }
        ],
        problemes_reservation: [
          { value: "double", label: "حجز مضاعف" },
          { value: "indispo", label: "الTerrain ماشي متوفر" },
          { value: "no_reply", label: "ماكيناش جواب من المالك" },
          { value: "horaires", label: "الوقت ماكيتحترموش" },
          { value: "aucun", label: "ماكيناش مشاكل" }
        ],
        appels_multiples: [
          { value: "toujours", label: "اه، كدابا" },
          { value: "parfois", label: "أحيانا" },
          { value: "rarement", label: "قليل" },
          { value: "jamais", label: "أبدا" }
        ],
        organisateur: [
          { value: "moi", label: "أنا" },
          { value: "capitaine", label: "كابيتان ولا مسؤول" },
          { value: "tournant", label: "كيدور بين ل_players" },
          { value: "impro", label: "ححد، كديرو improv" }
        ],
        reunion_joueurs: [
          { value: "tres_difficile", label: "بزاف صعب" },
          { value: "assez", label: "صعب نسبيا" },
          { value: "facile", label: "سهل" },
          { value: "tres_facile", label: "بزاف سهل" }
        ],
        temps_organisation: [
          { value: "<15", label: "أقل من 15 دقيقة" },
          { value: "15-30", label: "15 ل 30 دقيقة" },
          { value: "30-60", label: "30 دقيقة ل 1 ساعة" },
          { value: "+60", label: "كاين زيد من 1 ساعة" }
        ],
        annulation_match: [
          { value: "tres_souvent", label: "اه، بزاف دالمرات" },
          { value: "parfois", label: "اه، أحيانا" },
          { value: "rarement", label: "قليل" },
          { value: "jamais", label: "أبدا" }
        ],
        annulations_joueurs: [
          { value: "tres_souvent", label: "بزاف دالمرات" },
          { value: "parfois", label: "أحيانا" },
          { value: "rarement", label: "قليل" }
        ],
        remplacant: [
          { value: "tres", label: "بزاف صعب" },
          { value: "un_peu", label: "صعب شوية" },
          { value: "facile", label: "سهل نسبيا" }
        ],
        whatsapp_orga: [
          { value: "efficace", label: "اه، و كاين نتيجة" },
          { value: "chaos", label: "اه، ولكن كاين فوضى" },
          { value: "non", label: "لا" }
        ],
        desaccord: [
          { value: "tres_souvent", label: "بزاف دالمرات" },
          { value: "parfois", label: "أحيانا" },
          { value: "rarement", label: "قليل" }
        ],
        coordination: [
          { value: "beaucoup", label: "بزاف دالوقت" },
          { value: "un_peu", label: "شوية دالوقت" },
          { value: "non", label: "والو" }
        ],
        horaires_respectes: [
          { value: "toujours", label: "كدابا" },
          { value: "souvent", label: "كثر" },
          { value: "parfois", label: "أحيانا" },
          { value: "rarement", label: "قليل" }
        ],
        annulation_terrain: [
          { value: "plusieurs", label: "اه، بزاف دالمرات" },
          { value: "1-2", label: "اه، مرة ولا جوج" },
          { value: "non", label: "لا" }
        ],
        orga_sur_place: [
          { value: "tres", label: "بزاف واضح" },
          { value: "moyen", label: "متوسط واضح" },
          { value: "non", label: "ماكيناش واضح" }
        ],
        frustrations: [
          { value: "indispo", label: "الTerrain ماشي متوفر" },
          { value: "annul_dm", label: "إلغاءات فاللحظة الأخيرة" },
          { value: "temps_orga", label: "نضيع وقت فالتنظيم" },
          { value: "no_show", label: "ال_players ماكيجيش بدون ما يخبر" },
          { value: "double", label: "حجوز مضاعفة" }
        ],
        pire_experience: [
          { value: "occupe", label: "نوصل والTerrain كيكون محجوز" },
          { value: "annul_10", label: "الماتش كيتلغا 10 دقايق قبل" },
          { value: "dispute", label: "نخصم على الوقت فالجروب" },
          { value: "40msg", label: "ندير 40 رسالة WhatsApp" }
        ],
        plus_complique: [
          { value: "terrain", label: "تلقى Terrain فارغ" },
          { value: "joueurs", label: "تنظم ل_players" },
          { value: "deux", label: "الطرفين صعبين" }
        ],
        freins: [
          { value: "terrains", label: "ماكيناش بزاف ديال Terrains" },
          { value: "joueurs", label: "صعب تجمع بزاف ديال ل_players" },
          { value: "temps", label: "ماكيناش الوقت" },
          { value: "orga", label: "التنظيم كايخد وقت بزاف" }
        ],
        quartiers_difficiles: [
          { value: "oui", label: "اه (غادي تقدر توضح من بعد)" },
          { value: "non", label: "لا" }
        ],
        terrains_pleins: [
          { value: "emplacement", label: "المكان مزيان" },
          { value: "prix", label: "السعر مغري" },
          { value: "qualite", label: "الTerrain مزيان" },
          { value: "reservation", label: "الحجز سهل" }
        ],
        fidelite_terrain: [
          { value: "meme", label: "كدابا نفس Terrain" },
          { value: "2-3", label: "2-3 Terrains معروفين" },
          { value: "souvent", label: "كتغير بزاف" }
        ]
      },
      submit: "بعط – شكرا بلاصتك",
      submitNote: "الجوابات ديالك كاتكون anonymes كتخدمو فقط باش نحسّنو الكورة ديال لخام.",
      success: {
        title: "شكرا !",
        message: "الجوابات ديالك كتعاوننا نحسّنو الكورة ديال لخام."
      }
    },
    en: {
      header: {
        title: "Help us improve amateur football",
        badge: "2 min chrono",
        description: "Whether you play 5v5, 7v7 or pickup games with friends, your experience matters. We want to understand <strong>how you find a pitch</strong>, <strong>how you organize matches</strong> and <strong>what holds you back</strong>. This info will help us build a truly useful tool for players. Thanks for your help"
      },
      sections: {
        1: "Playing habits",
        2: "Pitch search",
        3: "Booking",
        4: "Match organization",
        5: "On-site experience",
        6: "Frustrations",
        7: "Habits",
        8: "Contact (optional)"
      },
      questions: {
        1: "In which neighborhood or city do you play most often?",
        2: "How often do you play football?",
        3: "Who do you usually play with?",
        4: "How do you find a pitch today?",
        5: "Is it easy to find an available pitch when you want to play?",
        6: "Have you ever given up on playing because no pitch was available?",
        7: "How do you usually book pitch?",
        8: "How much time does booking take you on average?",
        9: "Have you had these booking problems before?",
        10: "Do you often have to call multiple pitches before finding one available?",
        11: "Who usually organizes matches in your group?",
        12: "Is it difficult to gather enough players for a match?",
        13: "How much time does complete organization take you (players + pitch)?",
        14: "Have you ever cancelled a match due to lack of players?",
        15: "Do players cancel at last minute?",
        16: "Is it complicated to find a replacement quickly when someone cancels?",
        17: "Do you use WhatsApp or Messenger groups to organize?",
        18: "Does it happen that everyone disagrees on time or pitch?",
        19: "Do you waste time coordinating everyone (messages, follow-ups, etc.)?",
        20: "Are pitch schedules respected?",
        21: "Have you ever had a match cancelled or moved at the last minute by pitch?",
        22: "Overall, is on-site organization clear?",
        23: "What frustrates you most when you want to play?",
        24: "What's worst experience you've had?",
        25: "What's most complicated thing for you?",
        26: "What prevents you from playing more often?",
        27: "Are there neighborhoods where it's harder to play according to you?",
        28: "Why do you think some pitches are always full?",
        29: "Do you often change pitches or stay loyal to one?",
        30: "Your phone number",
        31: "One last thing to share?"
      },
      hints: {
        3: "Multiple choices possible",
        4: "Multiple choices possible",
        7: "Multiple choices possible",
        9: "Multiple choices possible",
        23: "Multiple choices possible",
        26: "Multiple choices possible",
        28: "Multiple choices possible",
        30: "Optional – to be informed of improvements or test a future solution. No spam, promise.",
        31: "A frustration, an idea, a need... (optional)"
      },
      placeholders: {
        quartier: "Ex: Paris 18e, Lyon Croix-Rousse...",
        telephone: "06 12 34 56 78 (optional)",
        commentaire: "Share your experience..."
      },
      options: {
        frequence: [
          { value: "1-2/mois", label: "1 to 2 times per month" },
          { value: "1/sem", label: "1 time per week" },
          { value: "2-3/sem", label: "2 to 3 times per week" },
          { value: "+3/sem", label: "More than 3 times per week" }
        ],
        avec_qui: [
          { value: "amis", label: "Friends" },
          { value: "collegues", label: "Colleagues" },
          { value: "club", label: "Regular team / club" },
          { value: "whatsapp", label: "WhatsApp groups / communities" },
          { value: "solo", label: "Solo (I look for players)" }
        ],
        trouver_terrain: [
          { value: "bao", label: "Word of mouth" },
          { value: "wa", label: "WhatsApp or SMS" },
          { value: "gmaps", label: "Google Maps" },
          { value: "app", label: "Mobile app" },
          { value: "passage", label: "I pass by / I know it" },
          { value: "site", label: "Website" }
        ],
        facilite_terrain: [
          { value: "tres_facile", label: "Very easy" },
          { value: "moyen", label: "Moderately easy" },
          { value: "difficile", label: "Difficult" },
          { value: "tres_difficile", label: "Very difficult" }
        ],
        abandon: [
          { value: "plusieurs", label: "Yes, several times" },
          { value: "parfois", label: "Yes, sometimes" },
          { value: "jamais", label: "No, never" }
        ],
        moyen_reservation: [
          { value: "tel", label: "Phone" },
          { value: "wa", label: "WhatsApp" },
          { value: "sur_place", label: "Direct on site" },
          { value: "site", label: "Website" },
          { value: "app", label: "App" }
        ],
        temps_reservation: [
          { value: "<5", label: "Less than 5 min" },
          { value: "5-15", label: "5 to 15 min" },
          { value: "15-30", label: "15 to 30 min" },
          { value: "+30", label: "More than 30 min" }
        ],
        problemes_reservation: [
          { value: "double", label: "Double booking" },
          { value: "indispo", label: "Pitch finally unavailable" },
          { value: "no_reply", label: "No response from owner" },
          { value: "horaires", label: "Schedules not respected" },
          { value: "aucun", label: "No problem" }
        ],
        appels_multiples: [
          { value: "toujours", label: "Yes, almost always" },
          { value: "parfois", label: "Sometimes" },
          { value: "rarement", label: "Rarely" },
          { value: "jamais", label: "Never" }
        ],
        organisateur: [
          { value: "moi", label: "Myself" },
          { value: "capitaine", label: "A captain or referent" },
          { value: "tournant", label: "It rotates between several players" },
          { value: "impro", label: "Nobody, we improvise" }
        ],
        reunion_joueurs: [
          { value: "tres_difficile", label: "Very difficult" },
          { value: "assez", label: "Quite difficult" },
          { value: "facile", label: "Easy" },
          { value: "tres_facile", label: "Very easy" }
        ],
        temps_organisation: [
          { value: "<15", label: "Less than 15 min" },
          { value: "15-30", label: "15 to 30 min" },
          { value: "30-60", label: "30 min to 1 hour" },
          { value: "+60", label: "More than 1 hour" }
        ],
        annulation_match: [
          { value: "tres_souvent", label: "Yes, very often" },
          { value: "parfois", label: "Yes, sometimes" },
          { value: "rarement", label: "Rarely" },
          { value: "jamais", label: "Never" }
        ],
        annulations_joueurs: [
          { value: "tres_souvent", label: "Very often" },
          { value: "parfois", label: "Sometimes" },
          { value: "rarement", label: "Rarely" }
        ],
        remplacant: [
          { value: "tres", label: "Very complicated" },
          { value: "un_peu", label: "A bit complicated" },
          { value: "facile", label: "Rather easy" }
        ],
        whatsapp_orga: [
          { value: "efficace", label: "Yes, and it's efficient" },
          { value: "chaos", label: "Yes, but it's chaos" },
          { value: "non", label: "No" }
        ],
        desaccord: [
          { value: "tres_souvent", label: "Very often" },
          { value: "parfois", label: "Sometimes" },
          { value: "rarement", label: "Rarely" }
        ],
        coordination: [
          { value: "beaucoup", label: "A lot of time" },
          { value: "un_peu", label: "A bit of time" },
          { value: "non", label: "Not at all" }
        ],
        horaires_respectes: [
          { value: "toujours", label: "Always" },
          { value: "souvent", label: "Often" },
          { value: "parfois", label: "Sometimes" },
          { value: "rarement", label: "Rarely" }
        ],
        annulation_terrain: [
          { value: "plusieurs", label: "Yes, several times" },
          { value: "1-2", label: "Yes, once or twice" },
          { value: "non", label: "No" }
        ],
        orga_sur_place: [
          { value: "tres", label: "Very clear" },
          { value: "moyen", label: "Moderately clear" },
          { value: "non", label: "Not clear at all" }
        ],
        frustrations: [
          { value: "indispo", label: "Pitch not available" },
          { value: "annul_dm", label: "Last-minute cancellations" },
          { value: "temps_orga", label: "Wasting time organizing" },
          { value: "no_show", label: "Players who don't show up without warning" },
          { value: "double", label: "Double bookings" }
        ],
        pire_experience: [
          { value: "occupe", label: "Arriving and pitch is already occupied" },
          { value: "annul_10", label: "Match cancelled 10 minutes before" },
          { value: "dispute", label: "Arguing about time in group" },
          { value: "40msg", label: "Managing 40 WhatsApp messages" }
        ],
        plus_complique: [
          { value: "terrain", label: "Finding an available pitch" },
          { value: "joueurs", label: "Organizing players" },
          { value: "deux", label: "Both are complicated" }
        ],
        freins: [
          { value: "terrains", label: "Lack of available pitches" },
          { value: "joueurs", label: "Difficulty gathering enough players" },
          { value: "temps", label: "Lack of time" },
          { value: "orga", label: "Organization too heavy" }
        ],
        quartiers_difficiles: [
          { value: "oui", label: "Yes (you can specify later)" },
          { value: "non", label: "No" }
        ],
        terrains_pleins: [
          { value: "emplacement", label: "Good location" },
          { value: "prix", label: "Attractive price" },
          { value: "qualite", label: "Good pitch quality" },
          { value: "reservation", label: "Easy booking" }
        ],
        fidelite_terrain: [
          { value: "meme", label: "Always same pitch" },
          { value: "2-3", label: "2-3 usual pitches" },
          { value: "souvent", label: "I change often" }
        ]
      },
      submit: "Send – Thanks for your help",
      submitNote: "Your answers are anonymous and used only to improve amateur football.",
      success: {
        title: "Thanks !",
        message: "Your answers help us improve amateur football."
      }
    }
  };

  const t = translations[language];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    
    // Utilisation de FormData pour garantir la collecte correcte de toutes les données
    const formData = new FormData(e.currentTarget);
    
    // Construction de l'objet data pour l'API avec la méthode fiable
    const data = {};
    
    // Récupération correcte de toutes les valeurs
    for (const key of new Set(Array.from(formData.keys()))) {
      const all = formData.getAll(key);
      data[key] = all.length > 1 ? all : all[0];
    }
    
    // S'assurer que les tableaux sont bien des tableaux même avec un seul élément
    const arrayFields = [
      'avec_qui', 'trouver_terrain', 'moyen_reservation', 
      'problemes_reservation', 'frustrations', 'freins', 'terrains_pleins'
    ];
    
    arrayFields.forEach(field => {
      if (data[field] && !Array.isArray(data[field])) {
        data[field] = [data[field]];
      }
    });
    
    // Forcer la langue française dans la base de données
    data.language = 'fr';
    
    // Timeout de 10 secondes pour éviter les attentes infinies
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 10000);
    
    try {
      // Requête optimisée mais fiable
      const response = await fetch('https://backend-foot-omega.vercel.app/api/joueur/submissions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Connection': 'keep-alive',
        },
        body: JSON.stringify(data),
        signal: controller.signal,
      });
      
      clearTimeout(timeoutId);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const result = await response.json();
      
      setSubmitted(true);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch (err) {
      clearTimeout(timeoutId);
      
      if (err.name === 'AbortError') {
        setError('Le serveur met trop de temps à répondre. Veuillez réessayer.');
      } else if (err.message.includes('Failed to fetch')) {
        setError('Erreur de connexion. Vérifiez votre internet.');
      } else {
        setError('Une erreur est survenue lors de l\'envoi.');
      }
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="success-container">
        <div className="success-card">
          <div className="success-icon">
            <CheckCircle2 size={48} strokeWidth={2.5} />
          </div>
          <h1 className="success-title">{t.success.title}</h1>
          <p className="success-message">
            {t.success.message}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="form-wrapper">
        <div className="form-card">
          {/* Header */}
          <div className="header">
            {/* Language Selector */}
            <div className="language-selector">
              <div className="language-title">
                <h3>Choisissez votre langue / اختر لغتك / Choose your language</h3>
                <p>Sélectionnez la langue qui vous convient le mieux pour répondre au questionnaire</p>
              </div>
              <div className="language-controls">
                <Globe size={16} className="language-icon" />
                <div className="language-buttons">
                <button
                  type="button"
                  className={`language-btn ${language === 'fr' ? 'active' : ''}`}
                  onClick={() => setLanguage('fr')}
                >
                  Français
                </button>
                <button
                  type="button"
                  className={`language-btn ${language === 'ar' ? 'active' : ''}`}
                  onClick={() => setLanguage('ar')}
                >
                  الدارجة
                </button>
                <button
                  type="button"
                  className={`language-btn ${language === 'en' ? 'active' : ''}`}
                  onClick={() => setLanguage('en')}
                >
                  English
                </button>
              </div>
            </div>
            </div>
            
            <div className="header-icon">
              <Volleyball size={36} strokeWidth={2} />
            </div>
            <h1 className="header-title">
              {t.header.title}
              <span className="header-badge">{t.header.badge}</span>
            </h1>
            <p className="header-description" dangerouslySetInnerHTML={{ __html: t.header.description }}>
            </p>
          </div>

          {/* Affichage des erreurs */}
          {error && (
            <div className="error-message">
              ⚠️ {error}
            </div>
          )}

          <form onSubmit={handleSubmit}>
            {/* Section 1 */}
            <Section icon={<Volleyball size={20} />} number={1} title={t.sections[1]}>
              <Question number={1} label={t.questions[1]}>
                <input
                  type="text"
                  name="quartier"
                  placeholder={t.placeholders.quartier}
                  className="text-input"
                />
              </Question>
              <Question number={2} label={t.questions[2]}>
                <Choice
                  name="frequence"
                  options={t.options.frequence}
                />
              </Question>
              <Question number={3} label={t.questions[3]} hint={t.hints[3]}>
                <Choice
                  name="avec_qui"
                  type="checkbox"
                  options={t.options.avec_qui}
                />
              </Question>
            </Section>

            {/* Section 2 */}
            <Section icon={<Calendar size={20} />} number={2} title={t.sections[2]}>
              <Question number={4} label={t.questions[4]} hint={t.hints[4]}>
                <Choice
                  name="trouver_terrain"
                  type="checkbox"
                  options={t.options.trouver_terrain}
                />
              </Question>
              <Question number={5} label={t.questions[5]}>
                <Choice
                  name="facilite_terrain"
                  options={t.options.facilite_terrain}
                />
              </Question>
              <Question number={6} label={t.questions[6]}>
                <Choice
                  name="abandon"
                  options={t.options.abandon}
                />
              </Question>
            </Section>

            {/* Section 3 */}
            <Section icon={<Phone size={20} />} number={3} title={t.sections[3]}>
              <Question number={7} label={t.questions[7]} hint={t.hints[7]}>
                <Choice
                  name="moyen_reservation"
                  type="checkbox"
                  options={t.options.moyen_reservation}
                />
              </Question>
              <Question number={8} label={t.questions[8]}>
                <Choice
                  name="temps_reservation"
                  options={t.options.temps_reservation}
                />
              </Question>
              <Question number={9} label={t.questions[9]} hint={t.hints[9]}>
                <Choice
                  name="problemes_reservation"
                  type="checkbox"
                  options={t.options.problemes_reservation}
                />
              </Question>
              <Question number={10} label={t.questions[10]}>
                <Choice
                  name="appels_multiples"
                  options={t.options.appels_multiples}
                />
              </Question>
            </Section>

            {/* Section 4 */}
            <Section icon={<Users size={20} />} number={4} title={t.sections[4]}>
              <Question number={11} label={t.questions[11]}>
                <Choice
                  name="organisateur"
                  options={t.options.organisateur}
                />
              </Question>
              <Question number={12} label={t.questions[12]}>
                <Choice
                  name="reunion_joueurs"
                  options={t.options.reunion_joueurs}
                />
              </Question>
              <Question number={13} label={t.questions[13]}>
                <Choice
                  name="temps_organisation"
                  options={t.options.temps_organisation}
                />
              </Question>
              <Question number={14} label={t.questions[14]}>
                <Choice
                  name="annulation_match"
                  options={t.options.annulation_match}
                />
              </Question>
              <Question number={15} label={t.questions[15]}>
                <Choice
                  name="annulations_joueurs"
                  options={t.options.annulations_joueurs}
                />
              </Question>
              <Question number={16} label={t.questions[16]}>
                <Choice
                  name="remplacant"
                  options={t.options.remplacant}
                />
              </Question>
              <Question number={17} label={t.questions[17]}>
                <Choice
                  name="whatsapp_orga"
                  options={t.options.whatsapp_orga}
                />
              </Question>
              <Question number={18} label={t.questions[18]}>
                <Choice
                  name="desaccord"
                  options={t.options.desaccord}
                />
              </Question>
              <Question number={19} label={t.questions[19]}>
                <Choice
                  name="coordination"
                  options={t.options.coordination}
                />
              </Question>
            </Section>

            {/* Section 5 */}
            <Section icon={<Calendar size={20} />} number={5} title={t.sections[5]}>
              <Question number={20} label={t.questions[20]}>
                <Choice
                  name="horaires_respectes"
                  options={t.options.horaires_respectes}
                />
              </Question>
              <Question number={21} label={t.questions[21]}>
                <Choice
                  name="annulation_terrain"
                  options={t.options.annulation_terrain}
                />
              </Question>
              <Question number={22} label={t.questions[22]}>
                <Choice
                  name="orga_sur_place"
                  options={t.options.orga_sur_place}
                />
              </Question>
            </Section>

            {/* Section 6 */}
            <Section icon={<MessageCircle size={20} />} number={6} title={t.sections[6]}>
              <Question number={23} label={t.questions[23]} hint={t.hints[23]}>
                <Choice
                  name="frustrations"
                  type="checkbox"
                  options={t.options.frustrations}
                />
              </Question>
              <Question number={24} label={t.questions[24]}>
                <Choice
                  name="pire_experience"
                  options={t.options.pire_experience}
                />
              </Question>
              <Question number={25} label={t.questions[25]}>
                <Choice
                  name="plus_complique"
                  options={t.options.plus_complique}
                />
              </Question>
              <Question number={26} label={t.questions[26]} hint={t.hints[26]}>
                <Choice
                  name="freins"
                  type="checkbox"
                  options={t.options.freins}
                />
              </Question>
            </Section>

            {/* Section 7 */}
            <Section icon={<Volleyball size={20} />} number={7} title={t.sections[7]}>
              <Question number={27} label={t.questions[27]}>
                <Choice
                  name="quartiers_difficiles"
                  options={t.options.quartiers_difficiles}
                />
              </Question>
              <Question number={28} label={t.questions[28]} hint={t.hints[28]}>
                <Choice
                  name="terrains_pleins"
                  type="checkbox"
                  options={t.options.terrains_pleins}
                />
              </Question>
              <Question number={29} label={t.questions[29]}>
                <Choice
                  name="fidelite_terrain"
                  options={t.options.fidelite_terrain}
                />
              </Question>
            </Section>

            {/* Section 8 */}
            <Section icon={<Phone size={20} />} number={8} title={t.sections[8]}>
              <Question
                number={30}
                label={t.questions[30]}
                hint={t.hints[30]}
              >
                <input
                  type="tel"
                  name="telephone"
                  placeholder={t.placeholders.telephone}
                  className="text-input"
                />
              </Question>
              <Question number={31} label={t.questions[31]} hint={t.hints[31]}>
                <textarea
                  name="commentaire"
                  rows={4}
                  placeholder={t.placeholders.commentaire}
                  className="textarea-input"
                />
              </Question>
            </Section>

            {/* Submit */}
            <div className="submit-section">
              <button type="submit" className={`submit-button ${loading ? 'loading' : ''}`} disabled={loading}>
                {loading ? (
                  <>
                    <span className="loading-spinner"></span>
                    Envoi en cours...
                  </>
                ) : (
                  <>
                    {t.submit} ⚽
                  </>
                )}
              </button>
              <p className="submit-note">
                {t.submitNote}
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

const Section = ({ icon, number, title, children }) => (
  <div className="section">
    <div className="section-header">
      <div className="section-icon">{icon}</div>
      <div>
        <div className="section-badge">Section {number}</div>
        <h2 className="section-title">{title}</h2>
      </div>
    </div>
    <div className="section-content">{children}</div>
  </div>
);

const Question = ({ number, label, hint, children }) => (
  <div className="question">
    <label className="question-label">
      <span className="question-number">{number}.</span>
      {label}
    </label>
    {hint && <p className="question-hint">{hint}</p>}
    {children}
  </div>
);

const Choice = ({ name, options, type = "radio" }) => (
  <div className="choice-group">
    {options.map((o) => (
      <label key={o.value} className="choice-label">
        <input type={type} name={name} value={o.value} className="choice-input" />
        <span className="choice-text">{o.label}</span>
      </label>
    ))}
  </div>
);

export default App;