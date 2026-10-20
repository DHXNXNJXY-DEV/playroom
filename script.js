(() => {
  "use strict";

  const STORAGE_KEY = "playroom.local.v1";
  const ACCOUNTS_KEY = "playroom.accounts.v1";
  const SESSION_KEY = "playroom.session.v1";
  const WALLPAPER_DB = "playroom.wallpapers.v1";
  const batteryLabels = {
    en: { checking: "Checking battery", ac: "AC power", unavailable: "Battery unavailable", charging: "Charging", notCharging: "Not charging" },
    es: { checking: "Comprobando batería", ac: "Conectado a la corriente", unavailable: "Batería no disponible", charging: "Cargando", notCharging: "Sin cargar" },
    fr: { checking: "Vérification de la batterie", ac: "Sur secteur", unavailable: "Batterie indisponible", charging: "En charge", notCharging: "Pas en charge" },
    ja: { checking: "バッテリーを確認中", ac: "AC電源", unavailable: "バッテリー情報なし", charging: "充電中", notCharging: "充電していません" },
    hi: { checking: "बैटरी जाँच रहे हैं", ac: "AC पावर", unavailable: "बैटरी उपलब्ध नहीं", charging: "चार्ज हो रही है", notCharging: "चार्ज नहीं हो रही" }
  };
  const languageMessages = {
    es: {
      "Your games": "Tus juegos", "Select a game to start playing.": "Elige un juego para empezar.", "All games": "Todos los juegos",
      "YOUR STREAMING APPS": "TUS APLICACIONES DE STREAMING", "Entertainment": "Entretenimiento",
      "Watch videos, stream shows, and listen to music.": "Mira vídeos, series y escucha música.", "Open app ↗": "Abrir app ↗",
      "Add a game": "Añadir juego", "Add your first game": "Añade tu primer juego", "Add a web game to get started.": "Añade un juego web para empezar.",
      "Settings": "Ajustes", "MAKE IT YOURS": "A TU GUSTO", "Appearance": "Apariencia", "Set the mood for your play space.": "Personaliza tu espacio de juego.",
      "Color theme": "Tema de color", "Choose how Playroom looks.": "Elige el aspecto de Playroom.", "Background": "Fondo",
      "Choose a backdrop for your play space.": "Elige un fondo para tu espacio.", "Interface language": "Idioma de la interfaz",
      "Choose the language used in Playroom.": "Elige el idioma de Playroom.", "Accent color": "Color de énfasis",
      "Pick a color for buttons and highlights.": "Elige el color de botones y resaltados.", "Interface brightness": "Brillo de la interfaz",
      "Adjust the launcher, not the game window.": "Ajusta el launcher, no la ventana del juego.", "Playback": "Reproducción",
      "Small touches for your time in Playroom.": "Preferencias para Playroom.", "Interface sounds": "Sonidos de la interfaz",
      "Play a soft sound when you interact.": "Reproduce un sonido al interactuar.", "Sound level": "Nivel de sonido",
      "Controls Playroom interface sounds only.": "Solo controla los sonidos de Playroom.", "Reduce motion": "Reducir movimiento",
      "Limit animated transitions in the launcher.": "Limita las animaciones del launcher.", "Preferences": "Preferencias",
      "Choose the details you want to see.": "Elige qué información quieres ver.", "24-hour clock": "Reloj de 24 horas",
      "Use 13:00 instead of 1:00 PM.": "Usa las 13:00 en lugar de la 1:00 p. m.", "Show date": "Mostrar fecha",
      "Display today’s date in the top bar.": "Muestra la fecha en la barra superior.", "Library card size": "Tamaño de las tarjetas",
      "Choose how large game cards appear.": "Elige el tamaño de las tarjetas de juego.", "Library data": "Datos de la biblioteca",
      "Your games and messages are saved in this browser only.": "Tus juegos y mensajes solo se guardan en este navegador.",
      "Clear local data": "Borrar datos locales", "Remove all saved games, messages, and preferences.": "Elimina juegos, mensajes y preferencias guardados.",
      "Clear data": "Borrar datos", "Messages": "Mensajes", "YOUR INBOX": "TU BANDEJA", "Inbox": "Bandeja de entrada",
      "Notes and updates for this launcher, kept on this device.": "Notas y novedades guardadas en este dispositivo.", "Mark all read": "Marcar todo como leído",
      "Write a message": "Escribe un mensaje", "Send": "Enviar", "Game library": "Biblioteca de juegos", "Game controls": "Controles del juego",
      "System settings": "Ajustes del sistema", "News and messages": "Novedades y mensajes", "Back": "Volver", "Select": "Seleccionar",
      "Add to library": "Añadir a la biblioteca", "Cancel": "Cancelar", "Game URL": "URL del juego", "Game name": "Nombre del juego",
      "Cover image URL": "URL de la portada", "Open in new tab": "Abrir en una pestaña nueva", "Exit game": "Salir del juego",
      "Open your profile": "Abrir tu perfil", "Display name": "Nombre para mostrar", "Save": "Guardar", "Sign out / switch account": "Cerrar sesión / cambiar usuario",
      "Who’s playing?": "¿Quién juega?", "Choose a user or add a new one.": "Elige un usuario o añade uno nuevo.",
      "Create a user": "Crear usuario", "Choose a name and icon for this player.": "Elige un nombre y un icono para este jugador.",
      "Choose a user.": "Elige un usuario.", "Add user": "Añadir usuario", "User name": "Nombre de usuario", "Enter a user name": "Escribe un nombre",
      "Choose an icon": "Elige un icono", "Create user": "Crear usuario", "Press": "Pulsa", "to start": "para empezar",
      "Aurora": "Aurora", "Ocean": "Océano", "Sunset": "Atardecer", "Forest": "Bosque", "Midnight": "Medianoche",
      "Space": "Espacio", "No games bundled. Your library belongs to you.": "Sin juegos incluidos. Tu biblioteca es tuya.",
      "Web games, one home": "Juegos web, en un solo lugar", "Some sites may block being opened inside a launcher.": "Algunos sitios pueden impedir abrirse dentro del launcher.",
      "Light": "Claro", "Dark": "Oscuro", "Use device setting": "Usar ajuste del dispositivo", "Comfortable": "Cómodo", "Compact": "Compacto",
      "Blue accent": "Acento azul", "Coral accent": "Acento coral", "Mint accent": "Acento menta", "Violet accent": "Acento violeta",
      "24-hour clock": "Reloj de 24 horas", "Interface sound level": "Nivel de sonido de la interfaz", "Controls": "Controles",
      "SELECTED GAME": "JUEGO SELECCIONADO", "PLAYER ONE": "JUGADOR UNO", "Made for your games": "Hecho para tus juegos",
      "A little space for the games you love.": "Un espacio para los juegos que te gustan.", "Grow your library": "Amplía tu biblioteca",
      "GROW YOUR LIBRARY": "AMPLÍA TU BIBLIOTECA", "Game URL": "URL del juego", "Game name": "Nombre del juego",
      "Cover image URL": "URL de la portada", "Paste a web address for a game you can play in your browser.": "Pega la dirección de un juego para jugar en el navegador.",
      "Name it something memorable": "Ponle un nombre fácil de recordar", "Leave a note for yourself…": "Escríbete una nota…",
      "Your inbox is quiet. Leave a note above or add a game to see updates here.": "Tu bandeja está vacía. Escribe una nota o añade un juego para ver novedades.",
      "Your note": "Tu nota", "Delete message": "Eliminar mensaje", "Got it": "Entendido", "Sleep": "Suspender",
      "Connected": "Conectado", "Device ready": "Dispositivo listo", "System menu": "Menú del sistema",
      "Choose a user": "Elige un usuario", "Create user": "Crear usuario", "Users and game data are saved only in this browser.": "Los usuarios y los datos se guardan solo en este navegador.",
      "Custom wallpaper": "Fondo personalizado", "Upload an image or a muted looping video (up to 20 MB).": "Sube una imagen o un vídeo en bucle sin sonido (hasta 20 MB).",
      "Choose image": "Elegir imagen", "Choose video": "Elegir vídeo", "Remove": "Quitar",
      "Photosensitivity warning": "Advertencia sobre fotosensibilidad",
      "Some games and video wallpapers may contain flashing lights or patterns that can trigger seizures in people with photosensitivity, even if they have never had a seizure before.": "Algunos juegos y fondos de vídeo pueden contener luces intermitentes o patrones que provoquen convulsiones en personas fotosensibles, aunque nunca hayan tenido una.",
      "Stop playing and consult a doctor if you experience dizziness, altered vision, eye or muscle twitching, loss of awareness, disorientation, or convulsions. Take regular breaks, and remove any wallpaper that makes you uncomfortable.": "Deja de jugar y consulta a un médico si sientes mareos, cambios en la visión, espasmos en los ojos o músculos, pérdida del conocimiento, desorientación o convulsiones. Descansa con regularidad y quita cualquier fondo que te incomode.",
      "I understand — continue": "Lo entiendo — continuar"
    },
    fr: {
      "Your games": "Vos jeux", "Select a game to start playing.": "Choisissez un jeu pour commencer.", "All games": "Tous les jeux",
      "YOUR STREAMING APPS": "VOS APPLICATIONS DE STREAMING", "Entertainment": "Divertissement",
      "Watch videos, stream shows, and listen to music.": "Regardez des vidéos, des séries et écoutez de la musique.", "Open app ↗": "Ouvrir l’application ↗",
      "Add a game": "Ajouter un jeu", "Add your first game": "Ajoutez votre premier jeu", "Add a web game to get started.": "Ajoutez un jeu web pour commencer.",
      "Settings": "Paramètres", "MAKE IT YOURS": "PERSONNALISEZ", "Appearance": "Apparence", "Set the mood for your play space.": "Personnalisez votre espace de jeu.",
      "Color theme": "Thème de couleur", "Choose how Playroom looks.": "Choisissez l’apparence de Playroom.", "Background": "Arrière-plan",
      "Choose a backdrop for your play space.": "Choisissez un fond pour votre espace.", "Interface language": "Langue de l’interface",
      "Choose the language used in Playroom.": "Choisissez la langue de Playroom.", "Accent color": "Couleur d’accent",
      "Pick a color for buttons and highlights.": "Choisissez la couleur des boutons et des accents.", "Interface brightness": "Luminosité de l’interface",
      "Adjust the launcher, not the game window.": "Réglez le launcher, pas la fenêtre du jeu.", "Playback": "Lecture",
      "Small touches for your time in Playroom.": "Quelques préférences pour Playroom.", "Interface sounds": "Sons de l’interface",
      "Play a soft sound when you interact.": "Émet un son discret lors des interactions.", "Sound level": "Volume sonore",
      "Controls Playroom interface sounds only.": "Règle uniquement les sons de Playroom.", "Reduce motion": "Réduire les animations",
      "Limit animated transitions in the launcher.": "Limite les transitions animées.", "Preferences": "Préférences",
      "Choose the details you want to see.": "Choisissez les informations à afficher.", "24-hour clock": "Format 24 heures",
      "Use 13:00 instead of 1:00 PM.": "Utilisez 13:00 au lieu de 1:00 PM.", "Show date": "Afficher la date",
      "Display today’s date in the top bar.": "Affiche la date dans la barre supérieure.", "Library card size": "Taille des vignettes",
      "Choose how large game cards appear.": "Choisissez la taille des vignettes de jeu.", "Library data": "Données de la bibliothèque",
      "Your games and messages are saved in this browser only.": "Vos jeux et messages sont enregistrés dans ce navigateur.",
      "Clear local data": "Effacer les données locales", "Remove all saved games, messages, and preferences.": "Supprime les jeux, messages et préférences enregistrés.",
      "Clear data": "Effacer les données", "Messages": "Messages", "YOUR INBOX": "VOTRE BOÎTE DE RÉCEPTION", "Inbox": "Boîte de réception",
      "Notes and updates for this launcher, kept on this device.": "Notes et actualités conservées sur cet appareil.", "Mark all read": "Tout marquer comme lu",
      "Write a message": "Écrire un message", "Send": "Envoyer", "Game library": "Bibliothèque de jeux", "Game controls": "Commandes du jeu",
      "System settings": "Paramètres système", "News and messages": "Actualités et messages", "Back": "Retour", "Select": "Choisir",
      "Add to library": "Ajouter à la bibliothèque", "Cancel": "Annuler", "Game URL": "URL du jeu", "Game name": "Nom du jeu",
      "Cover image URL": "URL de l’image de couverture", "Open in new tab": "Ouvrir dans un nouvel onglet", "Exit game": "Quitter le jeu",
      "Open your profile": "Ouvrir votre profil", "Display name": "Nom affiché", "Save": "Enregistrer", "Sign out / switch account": "Déconnexion / changer d’utilisateur",
      "Who’s playing?": "Qui joue ?", "Choose a user or add a new one.": "Choisissez un utilisateur ou ajoutez-en un.",
      "Create a user": "Créer un utilisateur", "Choose a name and icon for this player.": "Choisissez un nom et une icône pour ce joueur.",
      "Choose a user.": "Choisissez un utilisateur.", "Add user": "Ajouter un utilisateur", "User name": "Nom d’utilisateur", "Enter a user name": "Saisissez un nom",
      "Choose an icon": "Choisir une icône", "Create user": "Créer l’utilisateur", "Press": "Appuyez sur", "to start": "pour commencer",
      "Aurora": "Aurore", "Ocean": "Océan", "Sunset": "Coucher de soleil", "Forest": "Forêt", "Midnight": "Minuit",
      "Space": "Espace", "No games bundled. Your library belongs to you.": "Aucun jeu inclus. Votre bibliothèque vous appartient.",
      "Web games, one home": "Les jeux web, au même endroit", "Some sites may block being opened inside a launcher.": "Certains sites peuvent bloquer l’ouverture dans un launcher.",
      "Light": "Clair", "Dark": "Sombre", "Use device setting": "Utiliser le réglage de l’appareil", "Comfortable": "Confortable", "Compact": "Compact",
      "Blue accent": "Accent bleu", "Coral accent": "Accent corail", "Mint accent": "Accent menthe", "Violet accent": "Accent violet",
      "24-hour clock": "Format 24 heures", "Interface sound level": "Volume des sons de l’interface", "Controls": "Commandes",
      "SELECTED GAME": "JEU SÉLECTIONNÉ", "PLAYER ONE": "JOUEUR 1", "Made for your games": "Conçu pour vos jeux",
      "A little space for the games you love.": "Un espace pour les jeux que vous aimez.", "GROW YOUR LIBRARY": "AGRANDISSEZ VOTRE BIBLIOTHÈQUE",
      "Paste a web address for a game you can play in your browser.": "Collez l’adresse d’un jeu jouable dans votre navigateur.",
      "Name it something memorable": "Donnez-lui un nom mémorable", "Leave a note for yourself…": "Laissez-vous un message…",
      "Your inbox is quiet. Leave a note above or add a game to see updates here.": "Votre boîte est vide. Laissez une note ou ajoutez un jeu pour voir les actualités.",
      "Your note": "Votre note", "Delete message": "Supprimer le message", "Got it": "Compris", "Sleep": "Veille",
      "Connected": "Connecté", "Device ready": "Appareil prêt", "System menu": "Menu système",
      "Choose a user": "Choisir un utilisateur", "Users and game data are saved only in this browser.": "Les utilisateurs et les jeux sont enregistrés uniquement dans ce navigateur.",
      "Custom wallpaper": "Fond d’écran personnalisé", "Upload an image or a muted looping video (up to 20 MB).": "Importez une image ou une vidéo muette en boucle (jusqu’à 20 Mo).",
      "Choose image": "Choisir une image", "Choose video": "Choisir une vidéo", "Remove": "Supprimer",
      "Photosensitivity warning": "Avertissement sur la photosensibilité",
      "Some games and video wallpapers may contain flashing lights or patterns that can trigger seizures in people with photosensitivity, even if they have never had a seizure before.": "Certains jeux et fonds vidéo peuvent contenir des lumières clignotantes ou des motifs susceptibles de déclencher des crises chez les personnes photosensibles, même sans antécédent.",
      "Stop playing and consult a doctor if you experience dizziness, altered vision, eye or muscle twitching, loss of awareness, disorientation, or convulsions. Take regular breaks, and remove any wallpaper that makes you uncomfortable.": "Arrêtez de jouer et consultez un médecin en cas de vertiges, de troubles visuels, de contractions des yeux ou des muscles, de perte de conscience, de désorientation ou de convulsions. Faites des pauses régulières et retirez tout fond qui vous met mal à l’aise.",
      "I understand — continue": "J’ai compris — continuer"
    },
    ja: {
      "Your games": "ゲーム", "Select a game to start playing.": "ゲームを選んでプレイを始めましょう。", "All games": "すべてのゲーム",
      "YOUR STREAMING APPS": "ストリーミングアプリ", "Entertainment": "エンターテインメント",
      "Watch videos, stream shows, and listen to music.": "動画や番組を見たり、音楽を聴いたりできます。", "Open app ↗": "アプリを開く ↗",
      "Add a game": "ゲームを追加", "Add your first game": "最初のゲームを追加", "Add a web game to get started.": "ウェブゲームを追加して始めましょう。",
      "Settings": "設定", "MAKE IT YOURS": "カスタマイズ", "Appearance": "外観", "Set the mood for your play space.": "プレイ空間をカスタマイズします。",
      "Color theme": "カラーテーマ", "Choose how Playroom looks.": "Playroomの外観を選びます。", "Background": "背景",
      "Choose a backdrop for your play space.": "プレイ空間の背景を選びます。", "Interface language": "表示言語",
      "Choose the language used in Playroom.": "Playroomで使用する言語を選びます。", "Accent color": "アクセントカラー",
      "Pick a color for buttons and highlights.": "ボタンや強調表示の色を選びます。", "Interface brightness": "画面の明るさ",
      "Adjust the launcher, not the game window.": "ゲーム画面ではなくランチャーを調整します。", "Playback": "再生",
      "Small touches for your time in Playroom.": "Playroomの各種設定です。", "Interface sounds": "操作音",
      "Play a soft sound when you interact.": "操作時に音を再生します。", "Sound level": "音量",
      "Controls Playroom interface sounds only.": "Playroomの操作音のみ調整します。", "Reduce motion": "動きを減らす",
      "Limit animated transitions in the launcher.": "ランチャーのアニメーションを減らします。", "Preferences": "環境設定",
      "Choose the details you want to see.": "表示する項目を選びます。", "24-hour clock": "24時間表示",
      "Use 13:00 instead of 1:00 PM.": "午後1時の代わりに13:00と表示します。", "Show date": "日付を表示",
      "Display today’s date in the top bar.": "トップバーに今日の日付を表示します。", "Library card size": "ライブラリーカードのサイズ",
      "Choose how large game cards appear.": "ゲームカードの大きさを選びます。", "Library data": "ライブラリーデータ",
      "Your games and messages are saved in this browser only.": "ゲームとメッセージはこのブラウザーにのみ保存されます。",
      "Clear local data": "ローカルデータを消去", "Remove all saved games, messages, and preferences.": "保存したゲーム、メッセージ、設定をすべて削除します。",
      "Clear data": "データを消去", "Messages": "メッセージ", "YOUR INBOX": "受信トレイ", "Inbox": "受信トレイ",
      "Notes and updates for this launcher, kept on this device.": "この端末に保存されたメモとお知らせです。", "Mark all read": "すべて既読にする",
      "Write a message": "メッセージを書く", "Send": "送信", "Game library": "ゲームライブラリー", "Game controls": "ゲームコントロール",
      "System settings": "システム設定", "News and messages": "ニュースとメッセージ", "Back": "戻る", "Select": "決定",
      "Add to library": "ライブラリーに追加", "Cancel": "キャンセル", "Game URL": "ゲームURL", "Game name": "ゲーム名",
      "Cover image URL": "カバー画像URL", "Open in new tab": "新しいタブで開く", "Exit game": "ゲームを終了",
      "Open your profile": "プロフィールを開く", "Display name": "表示名", "Save": "保存", "Sign out / switch account": "サインアウト / ユーザー切替",
      "Who’s playing?": "だれが遊びますか？", "Choose a user or add a new one.": "ユーザーを選ぶか、新しく追加してください。",
      "Create a user": "ユーザーを作成", "Choose a name and icon for this player.": "ユーザー名とアイコンを選んでください。",
      "Choose a user.": "ユーザーを選択", "Add user": "ユーザーを追加", "User name": "ユーザー名", "Enter a user name": "ユーザー名を入力",
      "Choose an icon": "アイコンを選択", "Create user": "ユーザーを作成", "Press": "押す", "to start": "開始",
      "Aurora": "オーロラ", "Ocean": "海", "Sunset": "夕焼け", "Forest": "森", "Midnight": "ミッドナイト",
      "Press": "開始するには", "Space": "スペースキー", "to start": "を押してください",
      "No games bundled. Your library belongs to you.": "ゲームは付属していません。自分だけのライブラリーを作りましょう。",
      "Web games, one home": "ウェブゲームをひとつの場所に", "Some sites may block being opened inside a launcher.": "ランチャー内で開けないサイトもあります。",
      "Light": "ライト", "Dark": "ダーク", "Use device setting": "デバイスの設定を使用", "Comfortable": "標準", "Compact": "コンパクト",
      "Blue accent": "青のアクセント", "Coral accent": "コーラルのアクセント", "Mint accent": "ミントのアクセント", "Violet accent": "紫のアクセント",
      "24-hour clock": "24時間表示", "Interface sound level": "操作音の音量", "Controls": "コントロール",
      "SELECTED GAME": "選択中のゲーム", "PLAYER ONE": "プレイヤー1", "Made for your games": "ゲームのための場所",
      "A little space for the games you love.": "好きなゲームのための場所です。", "GROW YOUR LIBRARY": "ライブラリーを充実",
      "Paste a web address for a game you can play in your browser.": "ブラウザーで遊べるゲームのURLを貼り付けてください。",
      "Name it something memorable": "わかりやすい名前を付けてください", "Leave a note for yourself…": "自分へのメモを書く…",
      "Your inbox is quiet. Leave a note above or add a game to see updates here.": "受信トレイは空です。メモを書くかゲームを追加するとここに表示されます。",
      "Your note": "メモ", "Delete message": "メッセージを削除", "Got it": "OK", "Sleep": "スリープ",
      "Connected": "接続済み", "Device ready": "準備完了", "System menu": "システムメニュー",
      "Choose a user": "ユーザーを選択", "Users and game data are saved only in this browser.": "ユーザーとゲームデータはこのブラウザーにのみ保存されます。",
      "Custom wallpaper": "カスタム壁紙", "Upload an image or a muted looping video (up to 20 MB).": "画像または音声なしのループ動画をアップロード（最大20 MB）。",
      "Choose image": "画像を選択", "Choose video": "動画を選択", "Remove": "削除",
      "Photosensitivity warning": "光過敏に関する警告",
      "Some games and video wallpapers may contain flashing lights or patterns that can trigger seizures in people with photosensitivity, even if they have never had a seizure before.": "ゲームや動画壁紙には、光過敏のある方に発作を引き起こす可能性のある点滅や模様が含まれる場合があります。これまで発作を経験したことがない方にも起こることがあります。",
      "Stop playing and consult a doctor if you experience dizziness, altered vision, eye or muscle twitching, loss of awareness, disorientation, or convulsions. Take regular breaks, and remove any wallpaper that makes you uncomfortable.": "めまい、視覚の変化、目や筋肉のけいれん、意識の喪失、混乱、発作を感じた場合は、プレイを中止して医師に相談してください。定期的に休憩し、不快に感じる壁紙は削除してください。",
      "I understand — continue": "確認して続行"
    },
    hi: {
      "Your games": "आपके गेम", "Select a game to start playing.": "खेलना शुरू करने के लिए गेम चुनें।", "All games": "सभी गेम",
      "YOUR STREAMING APPS": "आपके स्ट्रीमिंग ऐप", "Entertainment": "मनोरंजन",
      "Watch videos, stream shows, and listen to music.": "वीडियो देखें, शो स्ट्रीम करें और संगीत सुनें।", "Open app ↗": "ऐप खोलें ↗",
      "Add a game": "गेम जोड़ें", "Add your first game": "अपना पहला गेम जोड़ें", "Add a web game to get started.": "शुरू करने के लिए वेब गेम जोड़ें।",
      "Settings": "सेटिंग", "MAKE IT YOURS": "अपनी पसंद से सजाएँ", "Appearance": "दिखावट", "Set the mood for your play space.": "अपने गेम स्पेस का रूप चुनें।",
      "Color theme": "रंग थीम", "Choose how Playroom looks.": "Playroom की दिखावट चुनें।", "Background": "पृष्ठभूमि",
      "Choose a backdrop for your play space.": "अपने गेम स्पेस की पृष्ठभूमि चुनें।", "Interface language": "इंटरफ़ेस भाषा",
      "Choose the language used in Playroom.": "Playroom की भाषा चुनें।", "Accent color": "मुख्य रंग",
      "Pick a color for buttons and highlights.": "बटन और हाइलाइट का रंग चुनें।", "Interface brightness": "इंटरफ़ेस चमक",
      "Adjust the launcher, not the game window.": "लॉन्चर की चमक बदलें, गेम विंडो की नहीं।", "Playback": "प्लेबैक",
      "Small touches for your time in Playroom.": "Playroom के लिए छोटी सेटिंग।", "Interface sounds": "इंटरफ़ेस ध्वनि",
      "Play a soft sound when you interact.": "इंटरैक्शन पर हल्की ध्वनि चलाएँ।", "Sound level": "ध्वनि स्तर",
      "Controls Playroom interface sounds only.": "केवल Playroom की ध्वनि नियंत्रित करता है।", "Reduce motion": "गतिशीलता कम करें",
      "Limit animated transitions in the launcher.": "लॉन्चर के एनिमेशन सीमित करें।", "Preferences": "पसंद",
      "Choose the details you want to see.": "दिखाई जाने वाली जानकारी चुनें।", "24-hour clock": "24 घंटे की घड़ी",
      "Use 13:00 instead of 1:00 PM.": "1:00 PM के बजाय 13:00 दिखाएँ।", "Show date": "तारीख दिखाएँ",
      "Display today’s date in the top bar.": "ऊपरी बार में आज की तारीख दिखाएँ।", "Library card size": "लाइब्रेरी कार्ड आकार",
      "Choose how large game cards appear.": "गेम कार्ड का आकार चुनें।", "Library data": "लाइब्रेरी डेटा",
      "Your games and messages are saved in this browser only.": "आपके गेम और संदेश केवल इसी ब्राउज़र में सहेजे जाते हैं।",
      "Clear local data": "स्थानीय डेटा मिटाएँ", "Remove all saved games, messages, and preferences.": "सहेजे गए गेम, संदेश और पसंद हटाएँ।",
      "Clear data": "डेटा मिटाएँ", "Messages": "संदेश", "YOUR INBOX": "आपका इनबॉक्स", "Inbox": "इनबॉक्स",
      "Notes and updates for this launcher, kept on this device.": "इस डिवाइस पर रखे लॉन्चर नोट्स और अपडेट।", "Mark all read": "सभी पढ़े हुए चिह्नित करें",
      "Write a message": "संदेश लिखें", "Send": "भेजें", "Game library": "गेम लाइब्रेरी", "Game controls": "गेम नियंत्रण",
      "System settings": "सिस्टम सेटिंग", "News and messages": "समाचार और संदेश", "Back": "वापस", "Select": "चुनें",
      "Add to library": "लाइब्रेरी में जोड़ें", "Cancel": "रद्द करें", "Game URL": "गेम URL", "Game name": "गेम का नाम",
      "Cover image URL": "कवर इमेज URL", "Open in new tab": "नए टैब में खोलें", "Exit game": "गेम से बाहर निकलें",
      "Open your profile": "अपनी प्रोफ़ाइल खोलें", "Display name": "दिखाने वाला नाम", "Save": "सहेजें", "Sign out / switch account": "साइन आउट / उपयोगकर्ता बदलें",
      "Who’s playing?": "कौन खेल रहा है?", "Choose a user or add a new one.": "उपयोगकर्ता चुनें या नया जोड़ें।",
      "Create a user": "उपयोगकर्ता बनाएँ", "Choose a name and icon for this player.": "इस खिलाड़ी के लिए नाम और आइकन चुनें।",
      "Choose a user.": "उपयोगकर्ता चुनें।", "Add user": "उपयोगकर्ता जोड़ें", "User name": "उपयोगकर्ता नाम", "Enter a user name": "उपयोगकर्ता नाम लिखें",
      "Choose an icon": "आइकन चुनें", "Create user": "उपयोगकर्ता बनाएँ", "Press": "दबाएँ", "to start": "शुरू करने के लिए",
      "Aurora": "ऑरोरा", "Ocean": "समुद्र", "Sunset": "सूर्यास्त", "Forest": "जंगल", "Midnight": "मध्यरात्रि",
      "Space": "स्पेस", "No games bundled. Your library belongs to you.": "कोई गेम शामिल नहीं। आपकी लाइब्रेरी आपकी है।",
      "Web games, one home": "सभी वेब गेम एक जगह", "Some sites may block being opened inside a launcher.": "कुछ साइट लॉन्चर में खुलने से रोक सकती हैं।",
      "Light": "हल्का", "Dark": "गहरा", "Use device setting": "डिवाइस सेटिंग इस्तेमाल करें", "Comfortable": "सामान्य", "Compact": "छोटा",
      "Blue accent": "नीला रंग", "Coral accent": "कोरल रंग", "Mint accent": "मिंट रंग", "Violet accent": "बैंगनी रंग",
      "Interface sound level": "इंटरफ़ेस ध्वनि स्तर", "Controls": "नियंत्रण", "SELECTED GAME": "चुना गया गेम",
      "PLAYER ONE": "खिलाड़ी एक", "Made for your games": "आपके गेम के लिए", "A little space for the games you love.": "आपके पसंदीदा गेम के लिए एक जगह।",
      "GROW YOUR LIBRARY": "अपनी लाइब्रेरी बढ़ाएँ", "Paste a web address for a game you can play in your browser.": "ब्राउज़र में खेलने योग्य गेम का वेब पता डालें।",
      "Name it something memorable": "याद रहने वाला नाम दें", "Leave a note for yourself…": "अपने लिए नोट लिखें…",
      "Your inbox is quiet. Leave a note above or add a game to see updates here.": "इनबॉक्स खाली है। नोट लिखें या गेम जोड़ें ताकि अपडेट यहाँ दिखें।",
      "Your note": "आपका नोट", "Delete message": "संदेश हटाएँ", "Got it": "ठीक है", "Sleep": "स्लीप",
      "Connected": "कनेक्टेड", "Device ready": "डिवाइस तैयार", "System menu": "सिस्टम मेनू",
      "Choose a user": "उपयोगकर्ता चुनें", "Users and game data are saved only in this browser.": "उपयोगकर्ता और गेम डेटा केवल इसी ब्राउज़र में सहेजे जाते हैं।",
      "Custom wallpaper": "कस्टम वॉलपेपर", "Upload an image or a muted looping video (up to 20 MB).": "इमेज या बिना आवाज़ वाला लूपिंग वीडियो अपलोड करें (20 MB तक)।",
      "Choose image": "इमेज चुनें", "Choose video": "वीडियो चुनें", "Remove": "हटाएँ",
      "Photosensitivity warning": "प्रकाश-संवेदनशीलता चेतावनी",
      "Some games and video wallpapers may contain flashing lights or patterns that can trigger seizures in people with photosensitivity, even if they have never had a seizure before.": "कुछ गेम और वीडियो वॉलपेपर में चमकती रोशनी या पैटर्न हो सकते हैं, जो प्रकाश-संवेदनशील लोगों में दौरे शुरू कर सकते हैं—भले ही पहले कभी दौरा न पड़ा हो।",
      "Stop playing and consult a doctor if you experience dizziness, altered vision, eye or muscle twitching, loss of awareness, disorientation, or convulsions. Take regular breaks, and remove any wallpaper that makes you uncomfortable.": "चक्कर, दृष्टि में बदलाव, आँख या मांसपेशियों में ऐंठन, होश खोना, भ्रम या दौरा महसूस होने पर खेलना बंद करें और डॉक्टर से सलाह लें। नियमित विराम लें और असहज करने वाला वॉलपेपर हटा दें।",
      "I understand — continue": "मैं समझता/समझती हूँ — जारी रखें"
    }
  };
  const defaultText = new WeakMap();
  const lastTranslatedText = new WeakMap();
  const defaultAttributes = new WeakMap();
  const lastTranslatedAttributes = new WeakMap();
  const defaultSettings = {
    theme: "dark",
    customWallpaper: "",
    liveWallpaper: false,
    language: "en",
    accent: "blue",
    brightness: 100,
    sounds: true,
    volume: 35,
    reduceMotion: false,
    clock24: false,
    showDate: true,
    density: "comfortable"
  };
  const coverPalettes = [
    ["#7889e7", "#b9c7f2", "#9ad2d2"],
    ["#e58a79", "#f2c290", "#d9a0aa"],
    ["#3b9c8d", "#9ed2ba", "#bddb9a"],
    ["#8d6bc0", "#d1a7d9", "#f0bdac"],
    ["#4377a9", "#a4c9db", "#9cdbc5"],
    ["#c27a48", "#e8c27f", "#8fbab0"]
  ];
  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => Array.from(root.querySelectorAll(selector));
  const ui = $("#app-ui");
  const modal = $("#add-modal");
  const gamePlayer = $("#game-player");
  const gameFrame = $("#game-frame");
  const messageList = $("#message-list");
  const toastRegion = $("#toast-region");
  let toastSequence = 0;
  let activeGame = null;
  let playerHudTimeout = 0;
  let selectedGameId = null;
  let requestedFullscreen = false;
  let activeSettingsCategory = "appearance";
  let previousFocus = null;
  let audioContext = null;
  let soundUnavailableNotified = false;
  let bootStarted = false;
  let safetyAcknowledged = false;
  let deviceBattery = null;
  let batteryFallback = "checking";
  let wallpaperDatabasePromise = null;
  let wallpaperVideoUrl = "";
  let wallpaperVideoUserId = "";
  let wallpaperLoadingUserId = "";
  let wallpaperLoadGeneration = 0;
  let accounts = readAccounts();
  let currentUser = getSavedUser();

  function emptyState() {
    return { games: [], messages: [], settings: { ...defaultSettings } };
  }

  function parseStoredState(raw) {
    if (!raw) return emptyState();
    const parsed = JSON.parse(raw);
    const games = Array.isArray(parsed.games) ? parsed.games : [];
    const messages = Array.isArray(parsed.messages) ? parsed.messages : [];
    return {
      games: games.filter(game => game && typeof game.id === "string" && typeof game.name === "string" && typeof game.url === "string"),
      messages: messages.filter(message => message && typeof message.id === "string" && typeof message.text === "string"),
      settings: normalizeSettings(parsed.settings)
    };
  }

  function readAccounts() {
    try {
      const parsed = JSON.parse(localStorage.getItem(ACCOUNTS_KEY) || "[]");
      return Array.isArray(parsed)
        ? parsed.filter(user => user && typeof user.id === "string" && typeof user.name === "string")
        : [];
    } catch (error) {
      console.error("Could not read Playroom profiles from this browser.", error);
      showToast("Saved profiles could not be read. Check this browser’s storage.", "error");
      return [];
    }
  }

  function getSavedUser() {
    try {
      const id = localStorage.getItem(SESSION_KEY);
      return accounts.find(user => user.id === id) || null;
    } catch (error) {
      console.error("Could not restore the Playroom session.", error);
      return null;
    }
  }

  function userStorageKey(userId) {
    return `playroom.user.${userId}.v1`;
  }

  function openWallpaperDatabase() {
    if (wallpaperDatabasePromise) return wallpaperDatabasePromise;
    wallpaperDatabasePromise = new Promise((resolve, reject) => {
      if (!("indexedDB" in window)) {
        reject(new Error("This browser does not support local video wallpaper storage."));
        return;
      }
      const request = indexedDB.open(WALLPAPER_DB, 1);
      request.addEventListener("upgradeneeded", () => {
        const database = request.result;
        if (!database.objectStoreNames.contains("wallpapers")) {
          database.createObjectStore("wallpapers", { keyPath: "userId" });
        }
      });
      request.addEventListener("success", () => resolve(request.result), { once: true });
      request.addEventListener("error", () => reject(request.error || new Error("Could not open video wallpaper storage.")), { once: true });
      request.addEventListener("blocked", () => reject(new Error("Video wallpaper storage is blocked by another tab.")), { once: true });
    }).catch(error => {
      wallpaperDatabasePromise = null;
      throw error;
    });
    return wallpaperDatabasePromise;
  }

  async function getWallpaperBlob(userId) {
    const database = await openWallpaperDatabase();
    return new Promise((resolve, reject) => {
      const transaction = database.transaction("wallpapers", "readonly");
      const request = transaction.objectStore("wallpapers").get(userId);
      request.addEventListener("success", () => resolve(request.result?.blob), { once: true });
      request.addEventListener("error", () => reject(request.error || new Error("Could not read the saved video wallpaper.")), { once: true });
      transaction.addEventListener("abort", () => reject(transaction.error || new Error("Reading the video wallpaper was interrupted.")), { once: true });
    });
  }

  async function putWallpaperBlob(userId, blob) {
    const database = await openWallpaperDatabase();
    return new Promise((resolve, reject) => {
      const transaction = database.transaction("wallpapers", "readwrite");
      transaction.objectStore("wallpapers").put({ userId, blob });
      transaction.addEventListener("complete", () => resolve(), { once: true });
      transaction.addEventListener("error", () => reject(transaction.error || new Error("Could not save the video wallpaper.")), { once: true });
      transaction.addEventListener("abort", () => reject(transaction.error || new Error("Saving the video wallpaper was interrupted.")), { once: true });
    });
  }

  async function deleteWallpaperBlob(userId) {
    const database = await openWallpaperDatabase();
    return new Promise((resolve, reject) => {
      const transaction = database.transaction("wallpapers", "readwrite");
      transaction.objectStore("wallpapers").delete(userId);
      transaction.addEventListener("complete", () => resolve(), { once: true });
      transaction.addEventListener("error", () => reject(transaction.error || new Error("Could not remove the saved video wallpaper.")), { once: true });
      transaction.addEventListener("abort", () => reject(transaction.error || new Error("Removing the video wallpaper was interrupted.")), { once: true });
    });
  }

  function readUserState(userId) {
    try {
      return parseStoredState(localStorage.getItem(userStorageKey(userId)));
    } catch (error) {
      console.error("Could not read this player’s Playroom data.", error);
      showToast("This profile’s saved data could not be read.", "error");
      return emptyState();
    }
  }

  function createId() {
    return typeof crypto !== "undefined" && typeof crypto.randomUUID === "function"
      ? crypto.randomUUID()
      : `${Date.now()}-${Math.random().toString(36).slice(2)}`;
  }

  function safeUrl(value, { required = true } = {}) {
    const text = String(value || "").trim();
    if (!text && !required) return "";
    if (!text) throw new Error("Enter a game URL to continue.");
    let url;
    try {
      url = new URL(text);
    } catch {
      throw new Error("Enter a complete web address, including https://.");
    }
    if (url.protocol !== "https:" && url.protocol !== "http:") {
      throw new Error("Only http:// and https:// web addresses are supported.");
    }
    return url.href;
  }

  function normalizeSettings(candidate) {
    const value = candidate && typeof candidate === "object" ? candidate : {};
    return {
      theme: ["light", "dark", "system"].includes(value.theme) ? value.theme : defaultSettings.theme,
      customWallpaper: typeof value.customWallpaper === "string" &&
        value.customWallpaper.length <= 2800000 &&
        /^data:image\/(?:jpeg|png|webp);base64,[A-Za-z0-9+/]+=*$/.test(value.customWallpaper)
        ? value.customWallpaper
        : "",
      liveWallpaper: typeof value.liveWallpaper === "boolean" ? value.liveWallpaper : defaultSettings.liveWallpaper,
      language: ["en", "es", "fr", "ja", "hi"].includes(value.language) ? value.language : defaultSettings.language,
      accent: ["blue", "coral", "mint", "violet"].includes(value.accent) ? value.accent : defaultSettings.accent,
      brightness: Number.isFinite(Number(value.brightness)) ? Math.min(110, Math.max(70, Number(value.brightness))) : defaultSettings.brightness,
      sounds: typeof value.sounds === "boolean" ? value.sounds : defaultSettings.sounds,
      volume: Number.isFinite(Number(value.volume)) ? Math.min(100, Math.max(0, Number(value.volume))) : defaultSettings.volume,
      reduceMotion: typeof value.reduceMotion === "boolean" ? value.reduceMotion : defaultSettings.reduceMotion,
      clock24: typeof value.clock24 === "boolean" ? value.clock24 : defaultSettings.clock24,
      showDate: typeof value.showDate === "boolean" ? value.showDate : defaultSettings.showDate,
      density: ["comfortable", "compact"].includes(value.density) ? value.density : defaultSettings.density
    };
  }

  let state = currentUser ? readUserState(currentUser.id) : emptyState();

  function showToast(message, kind = "success") {
    const toast = document.createElement("div");
    const id = ++toastSequence;
    toast.className = `toast${kind === "error" ? " toast-error" : ""}`;
    toast.dataset.toastId = String(id);
    toast.textContent = message;
    toastRegion.append(toast);
    window.setTimeout(() => toast.remove(), 4300);
  }

  function saveState(message = "") {
    if (!currentUser) {
      showToast("Sign in to save changes to your profile.", "error");
      return false;
    }
    try {
      localStorage.setItem(userStorageKey(currentUser.id), JSON.stringify(state));
      if (message) showToast(message);
      return true;
    } catch (error) {
      console.error("Could not save Playroom data in this browser.", error);
      showToast("Could not save changes. Check this browser’s storage permissions or available space.", "error");
      return false;
    }
  }

  function setAuthMode(mode) {
    const chooser = mode === "chooser" && accounts.length > 0;
    const signup = mode === "signup" || !chooser;
    $("#auth-profile-picker").hidden = !chooser;
    $("#signup-form").hidden = !signup;
    $("#auth-back-users").hidden = !accounts.length;
    $$("[data-auth-mode]").forEach(button => {
      const active = button.dataset.authMode === mode;
      button.classList.toggle("active", active);
    });
    $("#auth-card-kicker").textContent = chooser ? "PLAYER SELECT" : "NEW USER";
    $("#auth-card-title").textContent = chooser ? "Who’s playing?" : "Create a user";
    $("#auth-card-copy").textContent = chooser
      ? "Choose a user or add a new one."
      : "Choose a name and icon for this player.";
    $("#signup-error").textContent = "";
    if (chooser) {
      renderAuthProfiles();
      $("#auth-profile-list button")?.focus();
    } else {
      $("#signup-name").focus();
    }
    translateInterface();
  }

  function renderAuthProfiles() {
    const list = $("#auth-profile-list");
    list.replaceChildren();
    accounts.forEach(user => {
      const option = document.createElement("button");
      option.type = "button";
      option.className = "auth-profile-option";
      option.setAttribute("aria-label", `Choose user ${user.name}`);
      const avatar = document.createElement("span");
      avatar.className = "auth-profile-avatar";
      renderAvatarContent(avatar, user.avatar, String(user.name || "P").trim().charAt(0).toUpperCase() || "P");
      const details = document.createElement("span");
      details.className = "auth-profile-details";
      const name = document.createElement("strong");
      name.textContent = user.name || "Player";
      const label = document.createElement("span");
      label.textContent = "Select user";
      const arrow = document.createElement("span");
      arrow.className = "auth-profile-arrow";
      arrow.setAttribute("aria-hidden", "true");
      arrow.textContent = "→";
      details.append(name, label);
      option.append(avatar, details, arrow);
      option.addEventListener("click", () => authenticateUser(user));
      list.append(option);
    });
  }

  function updateAvatarSelection() {
    const selectedAvatar = $("#signup-avatar").value;
    $$(".auth-avatar-option").forEach(button => {
      const selected = button.dataset.avatarChoice === selectedAvatar ||
        (button.id === "signup-avatar-upload-option" && isCustomAvatar(selectedAvatar));
      button.classList.toggle("selected", selected);
      button.setAttribute("aria-pressed", String(selected));
    });
    renderAvatarContent($("#signup-avatar-preview"), selectedAvatar, "＋");
  }

  function isCustomAvatar(avatar) {
    return typeof avatar === "string" && /^data:image\/jpeg;base64,[A-Za-z0-9+/]+=*$/.test(avatar);
  }

  function renderAvatarContent(element, avatar, fallback) {
    element.replaceChildren();
    if (isCustomAvatar(avatar)) {
      const image = document.createElement("img");
      image.className = "avatar-image";
      image.src = avatar;
      image.alt = "";
      image.setAttribute("aria-hidden", "true");
      element.append(image);
      return;
    }
    element.textContent = avatar || fallback;
  }

  function createAvatarDataUrl(file) {
    if (!["image/jpeg", "image/png", "image/webp"].includes(file.type)) {
      return Promise.reject(new Error("Choose a JPG, PNG, or WebP image."));
    }
    if (file.size > 5 * 1024 * 1024) {
      return Promise.reject(new Error("Avatar images must be 5 MB or smaller."));
    }
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.addEventListener("error", () => reject(new Error("Could not read that avatar image.")), { once: true });
      reader.addEventListener("load", () => {
        if (typeof reader.result !== "string" || !/^data:image\/(?:jpeg|png|webp);base64,/.test(reader.result)) {
          reject(new Error("Could not read that avatar image."));
          return;
        }
        const image = new Image();
        image.addEventListener("error", () => reject(new Error("That avatar image could not be opened.")), { once: true });
        image.addEventListener("load", () => {
          const scale = Math.min(1, 256 / Math.max(image.naturalWidth, image.naturalHeight));
          const canvas = document.createElement("canvas");
          canvas.width = Math.max(1, Math.round(image.naturalWidth * scale));
          canvas.height = Math.max(1, Math.round(image.naturalHeight * scale));
          const context = canvas.getContext("2d");
          if (!context) {
            reject(new Error("Could not process that avatar image."));
            return;
          }
          try {
            context.drawImage(image, 0, 0, canvas.width, canvas.height);
            resolve(canvas.toDataURL("image/jpeg", 0.82));
          } catch (error) {
            console.error("Could not encode the avatar image.", error);
            reject(new Error("Could not process that avatar image."));
          }
        }, { once: true });
        image.src = reader.result;
      }, { once: true });
      reader.readAsDataURL(file);
    });
  }

  function setAuthenticationView(signedIn) {
    document.body.classList.toggle("auth-required", !signedIn);
    $("#auth-screen").hidden = signedIn;
    $("#app-ui").inert = !signedIn;
    if (signedIn) {
      $("#profile-menu").hidden = true;
      $("#profile-button").setAttribute("aria-expanded", "false");
    } else {
      $("#auth-screen").classList.remove("auth-enter");
      requestAnimationFrame(() => $("#auth-screen").classList.add("auth-enter"));
    }
  }

  function createUser(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const error = $("#signup-error");
    const name = String(data.get("name") || "").trim();
    const avatar = String(data.get("avatar") || "🎮");
    error.textContent = "";

    if (name.length < 2) {
      error.textContent = "User name must contain at least 2 characters.";
      return;
    }

    const user = { id: createId(), name: name.slice(0, 32), avatar, createdAt: Date.now() };
    const isFirstUser = accounts.length === 0;
    let legacyState = null;
    const existingAccounts = [...accounts];
    try {
      if (isFirstUser) legacyState = localStorage.getItem(STORAGE_KEY);
      const initialState = isFirstUser
        ? parseStoredState(legacyState)
        : emptyState();

      accounts.push(user);
      localStorage.setItem(userStorageKey(user.id), JSON.stringify(initialState));
      localStorage.setItem(ACCOUNTS_KEY, JSON.stringify(accounts));
      localStorage.setItem(SESSION_KEY, user.id);
      if (isFirstUser) localStorage.removeItem(STORAGE_KEY);
      state = initialState;
      currentUser = user;
      selectedGameId = null;
      form.reset();
      $("#signup-avatar").value = "🎮";
      updateAvatarSelection();
      completeAuthentication();
      showToast(`Welcome, ${user.name}.`);
    } catch (exception) {
      accounts = existingAccounts;
      currentUser = null;
      state = emptyState();
      try {
        localStorage.setItem(ACCOUNTS_KEY, JSON.stringify(accounts));
        localStorage.removeItem(userStorageKey(user.id));
        if (localStorage.getItem(SESSION_KEY) === user.id) localStorage.removeItem(SESSION_KEY);
        if (legacyState !== null) localStorage.setItem(STORAGE_KEY, legacyState);
      } catch (storageError) {
        console.error("Could not roll back an incomplete profile creation.", storageError);
      }
      console.error("Could not create a Playroom user.", exception);
      error.textContent = "Could not create this user. Check this browser’s storage and try again.";
    }
  }

  function authenticateUser(user) {
    try {
      localStorage.setItem(SESSION_KEY, user.id);
      currentUser = user;
      state = readUserState(user.id);
      selectedGameId = null;
      completeAuthentication();
    } catch (error) {
      console.error("Could not select this Playroom user.", error);
      showToast("Could not select this user. Check this browser’s storage and try again.", "error");
    }
  }

  function completeAuthentication() {
    setAuthenticationView(true);
    applySettings();
    renderMessages();
    navigate("home");
  }

  function signOut() {
    if (activeGame) exitGame();
    try {
      localStorage.removeItem(SESSION_KEY);
    } catch (error) {
      console.error("Could not clear the saved Playroom session.", error);
      showToast("Could not sign out. Check this browser’s storage permissions.", "error");
      return;
    }
    currentUser = null;
    state = emptyState();
    selectedGameId = null;
    accounts = readAccounts();
    $("#signup-form").reset();
    $("#signup-avatar").value = "🎮";
    updateAvatarSelection();
    $("#profile-menu").hidden = true;
    setAuthenticationView(false);
    setAuthMode(accounts.length ? "chooser" : "signup");
  }

  function openLegalDocument(kind) {
    const title = $("#legal-title");
    const copy = $("#legal-copy");
    copy.replaceChildren();
    if (kind === "terms") {
      title.textContent = "Terms and Conditions";
      [
        ["Using Playroom", "Playroom is a personal web-game launcher. You are responsible for the URLs and content you add, and must have permission to access and use them."],
        ["Your account", "A profile is stored in this browser only. Keep your device account private. Clearing browser data can permanently remove your profile and saved library."],
        ["Third-party games", "Games open from websites you choose. Those sites have their own rules, privacy practices, and availability. Playroom does not host or verify third-party games."],
        ["As-is service", "This lightweight launcher is provided as-is. There is no hosted account recovery, cloud backup, or cross-device synchronization."]
      ].forEach(([heading, text]) => {
        const section = document.createElement("section");
        const h3 = document.createElement("h3");
        const p = document.createElement("p");
        h3.textContent = heading;
        p.textContent = text;
        section.append(h3, p);
        copy.append(section);
      });
    } else {
      title.textContent = "Privacy Notice";
      [
        ["Stored on this device", "Your user name, selected icon, games, settings, and messages are saved in this browser’s local storage. They are not sent to a Playroom server."],
        ["Local profiles", "User selection is a convenience for separating profiles on this device, not password-based account security. Someone with access to this browser can select or change a profile."],
        ["Game websites", "When you open a game, your browser connects directly to the URL you added. That website may receive normal connection data such as your IP address."],
        ["Your choice", "Sign out to end this browser session. Use Clear data in Settings to remove a profile’s game data, or clear this site’s browser storage to remove profiles too."]
      ].forEach(([heading, text]) => {
        const section = document.createElement("section");
        const h3 = document.createElement("h3");
        const p = document.createElement("p");
        h3.textContent = heading;
        p.textContent = text;
        section.append(h3, p);
        copy.append(section);
      });
    }
    $("#legal-backdrop").hidden = false;
    $("#legal-done").focus();
  }

  function effectiveTheme() {
    if (state.settings.theme !== "system") return state.settings.theme;
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }

  function translateInterface() {
    const language = state.settings.language;
    const messages = languageMessages[language] || {};
    document.documentElement.lang = language;
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
    let node = walker.nextNode();
    while (node) {
      const parentTag = node.parentElement?.tagName;
      if (parentTag !== "SCRIPT" && parentTag !== "STYLE") {
        const current = node.nodeValue || "";
        const baseline = defaultText.get(node);
        if (baseline === undefined || current !== lastTranslatedText.get(node)) defaultText.set(node, current);
        const original = defaultText.get(node);
        const trimmed = original.trim();
        const translated = messages[trimmed];
        if (translated) {
          const leading = original.slice(0, original.indexOf(trimmed));
          const trailing = original.slice(original.indexOf(trimmed) + trimmed.length);
          node.nodeValue = `${leading}${translated}${trailing}`;
        } else {
          node.nodeValue = original;
        }
        lastTranslatedText.set(node, node.nodeValue);
      }
      node = walker.nextNode();
    }
    const attributes = ["aria-label", "title", "placeholder"];
    document.querySelectorAll("*").forEach(element => {
      attributes.forEach(attribute => {
        if (!element.hasAttribute(attribute)) return;
        let saved = defaultAttributes.get(element);
        if (!saved) {
          saved = {};
          defaultAttributes.set(element, saved);
        }
        const current = element.getAttribute(attribute) || "";
        let last = lastTranslatedAttributes.get(element);
        if (!last) {
          last = {};
          lastTranslatedAttributes.set(element, last);
        }
        if (!(attribute in saved) || current !== last[attribute]) saved[attribute] = current;
        const translated = messages[saved[attribute]];
        if (translated) element.setAttribute(attribute, translated);
        else element.setAttribute(attribute, saved[attribute]);
        last[attribute] = element.getAttribute(attribute) || "";
      });
    });
  }

  function stopLiveWallpaper() {
    wallpaperLoadGeneration += 1;
    wallpaperLoadingUserId = "";
    const video = $("#wallpaper-video");
    video.pause();
    video.removeAttribute("src");
    video.load();
    if (wallpaperVideoUrl) URL.revokeObjectURL(wallpaperVideoUrl);
    wallpaperVideoUrl = "";
    wallpaperVideoUserId = "";
  }

  async function refreshLiveWallpaper() {
    const video = $("#wallpaper-video");
    const enabled = Boolean(safetyAcknowledged && currentUser && state.settings.liveWallpaper);
    if (!enabled) {
      if (wallpaperVideoUrl || wallpaperLoadingUserId) stopLiveWallpaper();
      video.hidden = true;
      return;
    }
    const userId = currentUser.id;
    if (wallpaperVideoUserId === userId && wallpaperVideoUrl) {
      video.hidden = false;
      return;
    }
    if (wallpaperLoadingUserId === userId) return;
    stopLiveWallpaper();
    const generation = ++wallpaperLoadGeneration;
    wallpaperLoadingUserId = userId;
    try {
      const blob = await getWallpaperBlob(userId);
      if (generation !== wallpaperLoadGeneration || currentUser?.id !== userId) return;
      if (!(blob instanceof Blob) || !["video/mp4", "video/webm"].includes(blob.type)) {
        wallpaperLoadingUserId = "";
        state.settings.liveWallpaper = false;
        $("#wallpaper-layer").hidden = !state.settings.customWallpaper;
        $("#wallpaper-video").hidden = true;
        document.body.classList.toggle("has-custom-wallpaper", Boolean(state.settings.customWallpaper));
        saveState();
        showToast("The saved live wallpaper is missing or unsupported. Choose the video again.", "error");
        return;
      }
      wallpaperLoadingUserId = "";
      wallpaperVideoUrl = URL.createObjectURL(blob);
      wallpaperVideoUserId = userId;
      video.src = wallpaperVideoUrl;
      video.hidden = false;
      try {
        await video.play();
      } catch (error) {
        console.info("The browser could not start the live wallpaper video.", error);
        if (generation === wallpaperLoadGeneration && currentUser?.id === userId && state.settings.liveWallpaper) {
          showToast("The browser could not play this video wallpaper. Check its format and browser autoplay settings.", "error");
        }
      }
    } catch (error) {
      if (generation !== wallpaperLoadGeneration) return;
      console.error("Could not load the saved live wallpaper.", error);
      wallpaperLoadingUserId = "";
      state.settings.liveWallpaper = false;
      $("#wallpaper-layer").hidden = !state.settings.customWallpaper;
      video.hidden = true;
      document.body.classList.toggle("has-custom-wallpaper", Boolean(state.settings.customWallpaper));
      saveState();
      showToast("Could not load the saved video wallpaper. Check browser storage permissions.", "error");
    }
  }

  function applySettings() {
    document.body.classList.toggle("theme-dark", effectiveTheme() === "dark");
    const hasWallpaper = Boolean(state.settings.customWallpaper || state.settings.liveWallpaper);
    document.body.classList.toggle("has-custom-wallpaper", hasWallpaper);
    const wallpaperLayer = $("#wallpaper-layer");
    wallpaperLayer.hidden = !hasWallpaper;
    wallpaperLayer.style.backgroundImage = state.settings.customWallpaper
      ? `url("${state.settings.customWallpaper}")`
      : "";
    $("#wallpaper-video").hidden = !state.settings.liveWallpaper;
    $("#wallpaper-remove").disabled = !hasWallpaper;
    void refreshLiveWallpaper();
    document.body.classList.toggle("accent-coral", state.settings.accent === "coral");
    document.body.classList.toggle("accent-mint", state.settings.accent === "mint");
    document.body.classList.toggle("accent-violet", state.settings.accent === "violet");
    document.body.classList.toggle("reduce-motion", state.settings.reduceMotion);
    document.body.classList.toggle("density-compact", state.settings.density === "compact");
    ui.style.setProperty("--ui-brightness", String(state.settings.brightness / 100));
    $("#theme-setting").value = state.settings.theme;
    $("#language-setting").value = state.settings.language;
    $("#density-setting").value = state.settings.density;
    $("#brightness-setting").value = String(state.settings.brightness);
    $("#brightness-output").value = `${state.settings.brightness}%`;
    $("#volume-setting").value = String(state.settings.volume);
    $("#volume-output").value = `${state.settings.volume}%`;
    $$("[data-setting]").forEach(button => {
      button.setAttribute("aria-checked", String(Boolean(state.settings[button.dataset.setting])));
    });
    $$(".accent-swatch").forEach(button => {
      button.setAttribute("aria-pressed", String(button.dataset.accent === state.settings.accent));
    });
    $("#status-date").hidden = !state.settings.showDate;
    updateProfileDisplay();
    updateClock();
    renderBatteryStatus();
    renderGames();
    translateInterface();
  }

  function updateProfileDisplay() {
    if (!currentUser) return;
    const name = currentUser.name || "Player";
    const initial = Array.from(name.trim())[0]?.toUpperCase() || "P";
    renderAvatarContent($("#profile-button"), currentUser.avatar, initial);
    $("#profile-button").setAttribute("aria-label", `Open ${name}'s profile`);
    renderAvatarContent($("#profile-avatar"), currentUser.avatar, initial);
    $("#profile-name").textContent = name;
    $("#profile-email").textContent = currentUser.email || "Local user";
    $("#profile-name-input").value = name;
  }

  function updateClock() {
    const now = new Date();
    $("#status-time").textContent = new Intl.DateTimeFormat(undefined, {
      hour: "numeric",
      minute: "2-digit",
      hour12: !state.settings.clock24
    }).format(now);
    $("#status-date").textContent = new Intl.DateTimeFormat(undefined, {
      weekday: "short",
      month: "short",
      day: "numeric"
    }).format(now);
  }

  function currentBatteryLabels() {
    return batteryLabels[state.settings.language] || batteryLabels.en;
  }

  function isPortableDevice() {
    if (typeof navigator.userAgentData?.mobile === "boolean") return navigator.userAgentData.mobile;
    const userAgent = navigator.userAgent || "";
    return /Android|iPhone|iPad|iPod|Mobile|Tablet/i.test(userAgent) ||
      (/Macintosh/i.test(userAgent) && navigator.maxTouchPoints > 1);
  }

  function renderBatteryStatus() {
    const icon = $("#battery-icon");
    const status = $("#battery-status");
    const labels = currentBatteryLabels();
    if (!deviceBattery) {
      const text = batteryFallback === "checking"
        ? labels.checking
        : batteryFallback === "ac"
          ? labels.ac
          : labels.unavailable;
      icon.hidden = batteryFallback === "ac";
      icon.classList.remove("battery-low");
      icon.querySelector(".battery-level").style.width = "0%";
      status.textContent = text;
      status.title = text;
      status.setAttribute("aria-label", text);
      return;
    }
    const percentage = Math.round(deviceBattery.level * 100);
    const chargingLabel = deviceBattery.charging ? labels.charging : labels.notCharging;
    const accessibleStatus = `${percentage}% — ${chargingLabel}`;
    icon.hidden = false;
    icon.classList.toggle("battery-low", percentage <= 20 && !deviceBattery.charging);
    icon.querySelector(".battery-level").style.width = `${percentage}%`;
    status.textContent = `${percentage}%`;
    status.title = accessibleStatus;
    status.setAttribute("aria-label", accessibleStatus);
  }

  async function monitorBattery() {
    if (typeof navigator.getBattery !== "function") {
      batteryFallback = isPortableDevice() ? "unavailable" : "ac";
      renderBatteryStatus();
      return;
    }
    try {
      deviceBattery = await navigator.getBattery();
      batteryFallback = "";
      const refresh = () => renderBatteryStatus();
      deviceBattery.addEventListener("levelchange", refresh);
      deviceBattery.addEventListener("chargingchange", refresh);
      renderBatteryStatus();
    } catch (error) {
      console.info("The browser does not provide device battery status.", error);
      batteryFallback = isPortableDevice() ? "unavailable" : "ac";
      renderBatteryStatus();
    }
  }

  function hashText(text) {
    let hash = 0;
    for (let index = 0; index < text.length; index += 1) {
      hash = ((hash << 5) - hash + text.charCodeAt(index)) | 0;
    }
    return Math.abs(hash);
  }

  function renderGames() {
    const grid = $("#game-grid");
    grid.replaceChildren();
    $("#game-count").textContent = String(state.games.length);
    $("#empty-state").hidden = state.games.length > 0;
    grid.hidden = state.games.length === 0;
    $("#selected-game").hidden = state.games.length === 0;

    if (!state.games.some(game => game.id === selectedGameId)) {
      selectedGameId = state.games[0]?.id || null;
    }

    state.games.forEach(game => {
      const card = document.createElement("article");
      card.className = `game-card${game.id === selectedGameId ? " selected" : ""}`;
      const cover = document.createElement("div");
      cover.className = "game-cover";
      const palette = coverPalettes[hashText(game.id) % coverPalettes.length];
      cover.style.background = `linear-gradient(135deg, ${palette[0]}, ${palette[1]} 58%, ${palette[2]})`;
      const monogram = document.createElement("span");
      monogram.className = "game-cover-monogram";
      monogram.setAttribute("aria-hidden", "true");
      monogram.textContent = game.name.trim().slice(0, 1).toUpperCase() || "G";
      cover.append(monogram);
      if (game.cover) {
        const image = document.createElement("img");
        image.className = "game-cover-image";
        image.src = game.cover;
        image.alt = "";
        image.referrerPolicy = "no-referrer";
        image.addEventListener("error", () => {
          image.remove();
          showToast(`The cover image for “${game.name}” could not be loaded.`, "error");
        }, { once: true });
        cover.append(image);
      }
      card.append(cover);

      const body = document.createElement("div");
      body.className = "game-card-body";
      const info = document.createElement("div");
      info.style.minWidth = "0";
      const name = document.createElement("p");
      name.className = "game-name";
      name.textContent = game.name;
      const host = document.createElement("p");
      host.className = "game-host";
      try {
        host.textContent = new URL(game.url).hostname.replace(/^www\./, "");
      } catch {
        host.textContent = "Web game";
      }
      info.append(name, host);
      const menuWrap = document.createElement("div");
      menuWrap.className = "card-menu-wrap";
      const menuButton = document.createElement("button");
      menuButton.type = "button";
      menuButton.className = "card-menu-button";
      menuButton.setAttribute("aria-label", `Options for ${game.name}`);
      menuButton.setAttribute("aria-expanded", "false");
      menuButton.textContent = "···";
      const menu = document.createElement("div");
      menu.className = "card-menu";
      menu.hidden = true;
      menu.innerHTML = '<button type="button" data-action="open">Open in new tab ↗</button><button type="button" data-action="remove" class="danger-option">Remove from library</button>';
      menuButton.addEventListener("click", event => {
        event.stopPropagation();
        const willOpen = menu.hidden;
        $$(".card-menu").forEach(other => { other.hidden = true; });
        $$(".card-menu-button").forEach(other => other.setAttribute("aria-expanded", "false"));
        menu.hidden = !willOpen;
        menuButton.setAttribute("aria-expanded", String(willOpen));
      });
      menu.addEventListener("click", event => {
        const action = event.target.closest("button")?.dataset.action;
        if (!action) return;
        menu.hidden = true;
        menuButton.setAttribute("aria-expanded", "false");
        if (action === "open") openExternal(game.url);
        if (action === "remove") removeGame(game.id);
        event.stopPropagation();
      });
      menuWrap.append(menuButton, menu);
      body.append(info, menuWrap);
      card.append(body);
      card.addEventListener("click", event => {
        if (!event.target.closest(".card-menu-wrap")) {
          selectGame(game, card);
          launchGame(game);
        }
      });
      card.addEventListener("focus", () => selectGame(game, card));
      card.addEventListener("mouseenter", () => selectGame(game, card));
      card.setAttribute("role", "button");
      card.setAttribute("tabindex", "0");
      card.setAttribute("aria-label", `Play ${game.name}`);
      card.addEventListener("keydown", event => {
        if ((event.key === "Enter" || event.key === " " || event.key.toLowerCase() === "a") && event.target === card) {
          event.preventDefault();
          event.stopPropagation();
          launchGame(game);
        } else if (event.key === "ArrowRight" || event.key === "ArrowLeft") {
          event.preventDefault();
          const cards = $$(".game-card", grid);
          const index = cards.indexOf(card);
          cards[(index + (event.key === "ArrowRight" ? 1 : cards.length - 1)) % cards.length]?.focus();
        }
      });
      grid.append(card);
    });
    updateSelectedGame();
    translateInterface();
  }

  function selectGame(game, card) {
    selectedGameId = game.id;
    $$(".game-card").forEach(item => item.classList.toggle("selected", item === card));
    updateSelectedGame();
  }

  function updateSelectedGame() {
    const game = state.games.find(item => item.id === selectedGameId);
    $("#selected-game").hidden = !game;
    if (!game) return;
    $("#selected-game-name").textContent = game.name;
    try {
      $("#selected-game-host").textContent = new URL(game.url).hostname.replace(/^www\./, "");
    } catch {
      $("#selected-game-host").textContent = "Web game";
    }
  }

  function renderMessages() {
    messageList.replaceChildren();
    const unread = state.messages.filter(message => message.read !== true).length;
    $("#unread-count").textContent = unread ? `· ${unread} unread` : "";
    $("#dock-message-count").hidden = unread === 0;
    $("#mark-read").disabled = unread === 0;
    $("#mark-read").style.opacity = unread === 0 ? ".55" : "1";
    if (!state.messages.length) {
      const empty = document.createElement("div");
      empty.className = "messages-empty";
      empty.textContent = "Your inbox is quiet. Leave a note above or add a game to see updates here.";
      messageList.append(empty);
      translateInterface();
      return;
    }
    [...state.messages].sort((a, b) => (b.createdAt || 0) - (a.createdAt || 0)).forEach(message => {
      const item = document.createElement("article");
      item.className = `message-item${message.read === true ? "" : " unread"}`;
      const avatar = document.createElement("span");
      avatar.className = "message-avatar";
      avatar.setAttribute("aria-hidden", "true");
      avatar.textContent = message.kind === "system" ? "✦" : "✎";
      const content = document.createElement("div");
      content.className = "message-content";
      const title = document.createElement("h3");
      title.textContent = message.title || "Your note";
      const text = document.createElement("p");
      text.textContent = message.text;
      const time = document.createElement("div");
      time.className = "message-time";
      time.textContent = formatMessageDate(message.createdAt);
      content.append(title, text, time);
      const del = document.createElement("button");
      del.type = "button";
      del.className = "message-delete";
      del.setAttribute("aria-label", "Delete message");
      del.textContent = "×";
      del.addEventListener("click", () => {
        state.messages = state.messages.filter(candidate => candidate.id !== message.id);
        saveState();
        renderMessages();
      });
      item.append(avatar, content, del);
      messageList.append(item);
    });
    translateInterface();
  }

  function formatMessageDate(timestamp) {
    const date = new Date(Number(timestamp) || Date.now());
    return new Intl.DateTimeFormat(undefined, { dateStyle: "medium", timeStyle: "short" }).format(date);
  }

  function addMessage(title, text, kind = "system") {
    state.messages.push({ id: createId(), title, text, kind, createdAt: Date.now(), read: false });
    renderMessages();
  }

  function navigate(screenName, category = "") {
    const screen = $(`#screen-${screenName}`);
    if (!screen) return;
    $$(".screen").forEach(item => {
      const active = item === screen;
      item.classList.toggle("active", active);
      item.hidden = !active;
    });
    $$("[data-screen]").forEach(button => {
      const active = button.dataset.screen === screenName;
      button.classList.toggle("active", active && button.classList.contains("dock-item"));
      if (button.classList.contains("dock-item")) {
        if (active) button.setAttribute("aria-current", "page");
        else button.removeAttribute("aria-current");
      }
    });
    if (screenName === "settings") showSettingsCategory(category || activeSettingsCategory);
    if (screenName === "messages") {
      const changed = state.messages.some(message => message.read !== true);
      state.messages.forEach(message => { message.read = true; });
      if (changed) saveState();
      renderMessages();
    }
    window.scrollTo({ top: 0, behavior: state.settings.reduceMotion ? "auto" : "smooth" });
  }

  function showSettingsCategory(category) {
    const selected = document.getElementById(category);
    if (!selected || !selected.classList.contains("settings-group")) return;
    activeSettingsCategory = category;
    $$(".settings-group").forEach(group => { group.hidden = group !== selected; });
    $$(".settings-nav-link").forEach(link => {
      link.classList.toggle("active", link.hash.slice(1) === category);
    });
  }

  function openModal() {
    previousFocus = document.activeElement;
    modal.hidden = false;
    $("#form-error").classList.remove("visible");
    window.setTimeout(() => $("#game-url").focus(), 0);
  }

  function closeModal() {
    modal.hidden = true;
    $("#add-game-form").reset();
    $("#form-error").classList.remove("visible");
    if (previousFocus && typeof previousFocus.focus === "function") previousFocus.focus();
  }

  function addGame(urlValue, nameValue, coverValue) {
    const url = safeUrl(urlValue);
    const cover = safeUrl(coverValue, { required: false });
    if (state.games.some(game => game.url === url)) throw new Error("That game is already in your library.");
    const parsed = new URL(url);
    const fallbackName = parsed.hostname.replace(/^www\./, "").split(".")[0].replace(/[-_]/g, " ");
    const name = String(nameValue || "").trim().slice(0, 70) || fallbackName || "Web game";
    const game = { id: createId(), name, url, cover, createdAt: Date.now() };
    state.games.unshift(game);
    addMessage("Game added", `${name} is now in your library. Select its card to play.`, "system");
    saveState(`“${name}” was added to your library.`);
    renderGames();
  }

  function removeGame(id) {
    const game = state.games.find(candidate => candidate.id === id);
    if (!game) return;
    if (!window.confirm(`Remove “${game.name}” from your library?`)) return;
    state.games = state.games.filter(candidate => candidate.id !== id);
    saveState(`“${game.name}” was removed.`);
    renderGames();
  }

  function openExternal(url) {
    const opened = window.open(url, "_blank");
    if (!opened) {
      showToast("Your browser blocked the new tab. Allow pop-ups to open this game.", "error");
      return;
    }
    opened.opener = null;
  }

  function revealPlayerHud() {
    if (gamePlayer.hidden) return;
    gamePlayer.classList.add("hud-visible");
    window.clearTimeout(playerHudTimeout);
    playerHudTimeout = window.setTimeout(() => {
      gamePlayer.classList.remove("hud-visible");
    }, 2500);
  }

  function launchGame(game) {
    activeGame = game;
    gamePlayer.hidden = false;
    revealPlayerHud();
    $("#player-title").textContent = game.name;
    $("#player-loading").classList.remove("done");
    $("#player-loading").querySelector("span:last-child").textContent = "Opening your game…";
    gameFrame.title = game.name;
    gameFrame.src = game.url;
    gameFrame.onload = () => {
      $("#player-loading").classList.add("done");
    };
    window.setTimeout(() => {
      if (activeGame?.id === game.id && !$("#player-loading").classList.contains("done")) {
        $("#player-loading").querySelector("span:last-child").textContent = "Still loading? This site may block embedding. Use “Open in new tab”.";
      }
    }, 9000);
    requestedFullscreen = false;
    if (gamePlayer.requestFullscreen) {
      gamePlayer.requestFullscreen().then(() => {
        requestedFullscreen = true;
      }).catch(error => {
        console.info("Fullscreen was not available; the game remains open in the player.", error);
      });
    }
  }

  function exitGame() {
    if (gamePlayer.hidden) return;
    window.clearTimeout(playerHudTimeout);
    gamePlayer.classList.remove("hud-visible");
    activeGame = null;
    gameFrame.onload = null;
    gameFrame.src = "about:blank";
    gamePlayer.hidden = true;
    if (requestedFullscreen && document.fullscreenElement && document.exitFullscreen) {
      document.exitFullscreen().catch(error => console.info("Could not leave fullscreen mode.", error));
    }
    requestedFullscreen = false;
  }

  function playInterfaceSound() {
    if (!state.settings.sounds || state.settings.volume <= 0) return;
    const AudioContextType = window.AudioContext || window.webkitAudioContext;
    if (!AudioContextType) {
      if (!soundUnavailableNotified) {
        showToast("Interface sounds are not supported by this browser.", "error");
        soundUnavailableNotified = true;
      }
      return;
    }
    audioContext = audioContext || new AudioContextType();
    if (audioContext.state === "suspended") audioContext.resume();
    const oscillator = audioContext.createOscillator();
    const gain = audioContext.createGain();
    const now = audioContext.currentTime;
    oscillator.type = "sine";
    oscillator.frequency.setValueAtTime(520, now);
    oscillator.frequency.exponentialRampToValueAtTime(680, now + .035);
    gain.gain.setValueAtTime((state.settings.volume / 100) * .035, now);
    gain.gain.exponentialRampToValueAtTime(.001, now + .055);
    oscillator.connect(gain);
    gain.connect(audioContext.destination);
    oscillator.start(now);
    oscillator.stop(now + .06);
  }

  $$("[data-screen]").forEach(button => button.addEventListener("click", () => navigate(button.dataset.screen, button.dataset.settingsCategory || "")));
  $$("[data-open-add]").forEach(button => button.addEventListener("click", openModal));
  $$("[data-close-modal]").forEach(button => button.addEventListener("click", closeModal));
  modal.addEventListener("click", event => {
    if (event.target === modal) closeModal();
  });
  $("#add-game-form").addEventListener("submit", event => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const error = $("#form-error");
    try {
      addGame(data.get("url"), data.get("name"), data.get("cover"));
      closeModal();
      $("#game-grid .game-card")?.focus();
    } catch (exception) {
      error.textContent = exception instanceof Error ? exception.message : "Could not add this game.";
      error.classList.add("visible");
    }
  });
  $("#theme-setting").addEventListener("change", event => {
    state.settings.theme = event.target.value;
    applySettings();
    saveState();
  });
  $("#wallpaper-upload").addEventListener("change", event => {
    const file = event.target.files?.[0];
    if (!file) return;
    const userId = currentUser?.id ?? null;
    if (!["image/jpeg", "image/png", "image/webp"].includes(file.type)) {
      showToast("Choose a JPG, PNG, or WebP image.", "error");
      event.target.value = "";
      return;
    }
    if (file.size > 2 * 1024 * 1024) {
      showToast("Wallpaper images must be 2 MB or smaller.", "error");
      event.target.value = "";
      return;
    }
    const reader = new FileReader();
    reader.addEventListener("load", () => {
      if ((currentUser?.id ?? null) !== userId) {
        showToast("The active user changed before the image could be applied. Choose the image again.", "error");
        return;
      }
      if (typeof reader.result !== "string" || !/^data:image\/(?:jpeg|png|webp);base64,/.test(reader.result)) {
        showToast("Could not read that wallpaper image.", "error");
        return;
      }
      const previousWallpaper = state.settings.customWallpaper;
      const previousLiveWallpaper = state.settings.liveWallpaper;
      state.settings.customWallpaper = reader.result;
      state.settings.liveWallpaper = false;
      applySettings();
      if (saveState("Wallpaper applied.")) {
        if (previousLiveWallpaper && currentUser) {
          void deleteWallpaperBlob(currentUser.id).catch(error => {
            console.error("Could not delete the replaced video wallpaper.", error);
            showToast("The image was applied, but the old video could not be deleted from browser storage.", "error");
          });
        }
        return;
      }
      state.settings.customWallpaper = previousWallpaper;
      state.settings.liveWallpaper = previousLiveWallpaper;
      applySettings();
    }, { once: true });
    reader.addEventListener("error", () => {
      showToast("Could not read that wallpaper image.", "error");
    }, { once: true });
    reader.readAsDataURL(file);
    event.target.value = "";
  });
  $("#wallpaper-video-upload").addEventListener("change", async event => {
    const file = event.target.files?.[0];
    event.target.value = "";
    if (!file) return;
    if (!["video/mp4", "video/webm"].includes(file.type)) {
      showToast("Choose an MP4 or WebM video.", "error");
      return;
    }
    if (file.size > 20 * 1024 * 1024) {
      showToast("Video wallpapers must be 20 MB or smaller.", "error");
      return;
    }
    if (!currentUser) {
      showToast("Choose a user before adding a video wallpaper.", "error");
      return;
    }
    const userId = currentUser.id;
    const previousWallpaper = state.settings.customWallpaper;
    const previousLiveWallpaper = state.settings.liveWallpaper;
    let previousBlob;
    let wroteNewBlob = false;
    try {
      previousBlob = await getWallpaperBlob(userId);
      if (currentUser?.id !== userId) return;
      await putWallpaperBlob(userId, file);
      wroteNewBlob = true;
      if (currentUser?.id !== userId) {
        if (previousBlob) await putWallpaperBlob(userId, previousBlob);
        else await deleteWallpaperBlob(userId);
        return;
      }
      state.settings.customWallpaper = "";
      state.settings.liveWallpaper = true;
      applySettings();
      if (saveState("Live wallpaper applied.")) return;
      state.settings.customWallpaper = previousWallpaper;
      state.settings.liveWallpaper = previousLiveWallpaper;
      applySettings();
      if (previousBlob) await putWallpaperBlob(userId, previousBlob);
      else await deleteWallpaperBlob(userId);
    } catch (error) {
      console.error("Could not save the video wallpaper.", error);
      if (wroteNewBlob && previousBlob) {
        try {
          await putWallpaperBlob(userId, previousBlob);
        } catch (restoreError) {
          console.error("Could not restore the previous video wallpaper.", restoreError);
        }
      } else if (wroteNewBlob) {
        try {
          await deleteWallpaperBlob(userId);
        } catch (restoreError) {
          console.error("Could not remove the uncommitted video wallpaper.", restoreError);
        }
      }
      if (currentUser?.id === userId) {
        state.settings.customWallpaper = previousWallpaper;
        state.settings.liveWallpaper = previousLiveWallpaper;
        applySettings();
        showToast("Could not save this video wallpaper. Check browser storage permissions and available space.", "error");
      }
    }
  });
  $("#wallpaper-remove").addEventListener("click", async () => {
    const previousWallpaper = state.settings.customWallpaper;
    const previousLiveWallpaper = state.settings.liveWallpaper;
    state.settings.customWallpaper = "";
    state.settings.liveWallpaper = false;
    applySettings();
    if (saveState("Custom wallpaper removed.")) {
      if (previousLiveWallpaper && currentUser) {
        try {
          await deleteWallpaperBlob(currentUser.id);
        } catch (error) {
          console.error("Could not remove the saved video wallpaper.", error);
          showToast("The wallpaper was removed from this profile, but its video could not be deleted from browser storage.", "error");
        }
      }
      return;
    }
    state.settings.customWallpaper = previousWallpaper;
    state.settings.liveWallpaper = previousLiveWallpaper;
    applySettings();
  });
  $("#language-setting").addEventListener("change", event => {
    state.settings.language = event.target.value;
    applySettings();
    saveState();
  });
  $("#density-setting").addEventListener("change", event => {
    state.settings.density = event.target.value;
    applySettings();
    saveState();
  });
  $("#brightness-setting").addEventListener("input", event => {
    state.settings.brightness = Number(event.target.value);
    applySettings();
    saveState();
  });
  $("#volume-setting").addEventListener("input", event => {
    state.settings.volume = Number(event.target.value);
    $("#volume-output").value = `${state.settings.volume}%`;
    saveState();
  });
  $$("[data-setting]").forEach(button => button.addEventListener("click", () => {
    const setting = button.dataset.setting;
    if (setting === "sounds" && !state.settings.sounds) {
      const supported = window.AudioContext || window.webkitAudioContext;
      if (!supported) {
        showToast("Interface sounds are not supported by this browser.", "error");
        return;
      }
    }
    state.settings[setting] = !state.settings[setting];
    applySettings();
    saveState();
  }));
  $$(".accent-swatch").forEach(button => button.addEventListener("click", () => {
    state.settings.accent = button.dataset.accent;
    applySettings();
    saveState();
  }));
  $("#message-form").addEventListener("submit", event => {
    event.preventDefault();
    const input = $("#message-input");
    const text = input.value.trim();
    if (!text) {
      input.focus();
      return;
    }
    addMessage("Your note", text, "note");
    input.value = "";
    saveState("Your note was saved in this browser.");
    renderMessages();
  });
  $("#mark-read").addEventListener("click", () => {
    state.messages.forEach(message => { message.read = true; });
    saveState("All messages marked as read.");
    renderMessages();
  });
  $("#clear-data").addEventListener("click", async () => {
    if (!window.confirm("Clear all Playroom data in this browser? This removes every saved game, message, preference, and wallpaper.")) return;
    const userId = currentUser?.id;
    const hadLiveWallpaper = state.settings.liveWallpaper;
    state = { games: [], messages: [], settings: { ...defaultSettings } };
    applySettings();
    renderMessages();
    if (!saveState("Local data was cleared.")) return;
    if (hadLiveWallpaper && userId) {
      try {
        await deleteWallpaperBlob(userId);
      } catch (error) {
        console.error("Could not remove the video wallpaper while clearing profile data.", error);
        showToast("Profile data was cleared, but the video wallpaper could not be deleted from browser storage.", "error");
      }
    }
  });
  $("#player-exit").addEventListener("click", exitGame);
  $("#player-external").addEventListener("click", () => {
    if (activeGame) openExternal(activeGame.url);
  });
  $$("[data-auth-mode]").forEach(button => button.addEventListener("click", () => {
    setAuthMode(button.dataset.authMode);
  }));
  $("#signup-form").addEventListener("submit", createUser);
  $("#auth-back-users").addEventListener("click", () => setAuthMode("chooser"));
  $$(".auth-avatar-option").forEach(button => button.addEventListener("click", () => {
    if (!button.dataset.avatarChoice) return;
    $("#signup-avatar").value = button.dataset.avatarChoice;
    updateAvatarSelection();
  }));
  $("#signup-avatar-upload-option").addEventListener("click", () => $("#signup-avatar-upload").click());
  $("#signup-avatar-upload").addEventListener("change", async event => {
    const input = event.currentTarget;
    const file = input.files?.[0];
    if (!file) return;
    try {
      $("#signup-avatar").value = await createAvatarDataUrl(file);
      $("#signup-error").textContent = "";
      updateAvatarSelection();
    } catch (error) {
      $("#signup-error").textContent = error instanceof Error ? error.message : "Could not process that avatar image.";
    } finally {
      input.value = "";
    }
  });
  $("#profile-button").addEventListener("click", () => {
    const menu = $("#profile-menu");
    menu.hidden = !menu.hidden;
    $("#profile-button").setAttribute("aria-expanded", String(!menu.hidden));
    if (!menu.hidden) $("#profile-name-input").focus();
  });
  $("#profile-form").addEventListener("submit", event => {
    event.preventDefault();
    if (!currentUser) return;
    const name = $("#profile-name-input").value.trim();
    if (name.length < 2) {
      showToast("Player name must contain at least 2 characters.", "error");
      return;
    }
    const oldName = currentUser.name;
    currentUser.name = name.slice(0, 32);
    try {
      localStorage.setItem(ACCOUNTS_KEY, JSON.stringify(accounts));
      updateProfileDisplay();
      showToast("Your player profile was updated.");
    } catch (error) {
      currentUser.name = oldName;
      console.error("Could not save the player profile.", error);
      updateProfileDisplay();
      showToast("Could not update your profile. Check this browser’s storage.", "error");
    }
  });
  $("#profile-avatar-upload").addEventListener("change", async event => {
    const input = event.currentTarget;
    const file = input.files?.[0];
    const user = currentUser;
    if (!file) return;
    if (!user) {
      input.value = "";
      showToast("Choose a user before changing the avatar.", "error");
      return;
    }
    try {
      const avatar = await createAvatarDataUrl(file);
      if (currentUser !== user) {
        showToast("The active user changed before the avatar could be applied. Choose the image again.", "error");
        return;
      }
      const previousAvatar = user.avatar;
      user.avatar = avatar;
      try {
        localStorage.setItem(ACCOUNTS_KEY, JSON.stringify(accounts));
        updateProfileDisplay();
        showToast("Your avatar was updated.");
      } catch (error) {
        user.avatar = previousAvatar;
        console.error("Could not save the player avatar.", error);
        updateProfileDisplay();
        showToast("Could not update your avatar. Check this browser’s storage.", "error");
      }
    } catch (error) {
      console.error("Could not process the player avatar.", error);
      showToast(error instanceof Error ? error.message : "Could not process that avatar image.", "error");
    } finally {
      input.value = "";
    }
  });
  $("#signout-button").addEventListener("click", signOut);
  document.addEventListener("click", event => {
    if (!event.target.closest(".profile-wrap")) {
      $("#profile-menu").hidden = true;
      $("#profile-button").setAttribute("aria-expanded", "false");
    }
  });
  $$("[data-legal]").forEach(button => button.addEventListener("click", () => openLegalDocument(button.dataset.legal)));
  $("#legal-close").addEventListener("click", () => { $("#legal-backdrop").hidden = true; });
  $("#legal-done").addEventListener("click", () => { $("#legal-backdrop").hidden = true; });
  $("#legal-backdrop").addEventListener("click", event => {
    if (event.target === event.currentTarget) event.currentTarget.hidden = true;
  });
  $("#sleep-button").addEventListener("click", () => {
    $("#sleep-screen").hidden = false;
    $("#wake-button").focus();
  });
  $("#wake-button").addEventListener("click", () => {
    $("#sleep-screen").hidden = true;
    $("#sleep-button").focus();
  });
  gamePlayer.addEventListener("pointermove", revealPlayerHud);
  gamePlayer.addEventListener("pointerdown", revealPlayerHud);
  gamePlayer.addEventListener("focusin", revealPlayerHud);
  document.addEventListener("keydown", event => {
    if (!$("#boot-screen").hidden || !$("#safety-screen").hidden) return;
    const key = event.key.toLowerCase();
    const typing = event.target.closest("input, textarea, select, [contenteditable='true']");
    const isBack = event.key === "Escape" || (key === "b" && !typing);
    const isSelect = event.key === "Enter" || (key === "a" && !typing);
    if (isBack) {
      if (!modal.hidden) {
        closeModal();
        event.stopPropagation();
      } else if (!gamePlayer.hidden) {
        if (event.key === "Escape") {
          event.preventDefault();
          event.stopPropagation();
        } else {
          exitGame();
        }
      } else if (!$("#screen-home").classList.contains("active")) {
        navigate("home");
      }
      return;
    }
    if (key === "a" && !typing) {
      const focusedControl = event.target.closest("button, a, [role='button']");
      if (focusedControl && !focusedControl.closest(".game-card")) {
        event.preventDefault();
        focusedControl.click();
        return;
      }
    }
    if (!$("#sleep-screen").hidden && event.key !== "Tab") {
      $("#sleep-screen").hidden = true;
      $("#sleep-button").focus();
      event.preventDefault();
      return;
    }
    if (isSelect && $("#screen-home").classList.contains("active") &&
      modal.hidden && gamePlayer.hidden &&
      !event.target.closest("button, input, select, textarea, a, [role='button']")) {
      const game = state.games.find(item => item.id === selectedGameId);
      if (game) {
        event.preventDefault();
        launchGame(game);
      }
    }
  });
  document.addEventListener("click", event => {
    if (!event.target.closest(".card-menu-wrap")) {
      $$(".card-menu").forEach(menu => { menu.hidden = true; });
      $$(".card-menu-button").forEach(button => button.setAttribute("aria-expanded", "false"));
    }
    if (event.target.closest("button") && !gamePlayer.hidden) return;
    if (event.target.closest("button") && !event.target.closest(".toggle")) playInterfaceSound();
  });
  $$(".settings-nav-link").forEach(link => link.addEventListener("click", event => {
    event.preventDefault();
    showSettingsCategory(link.hash.slice(1));
  }));
  window.matchMedia("(prefers-color-scheme: dark)").addEventListener?.("change", () => {
    if (state.settings.theme === "system") applySettings();
  });

  function startConsole() {
    if (bootStarted) return;
    bootStarted = true;
    const bootScreen = $("#boot-screen");
    const safetyScreen = $("#safety-screen");
    safetyScreen.hidden = false;
    safetyScreen.inert = false;
    safetyScreen.focus();
    bootScreen.classList.add("boot-exit");
    window.setTimeout(() => {
      bootScreen.hidden = true;
      bootScreen.inert = true;
    }, 480);
    window.setTimeout(dismissSafetyWarning, 10_000);
  }

  function dismissSafetyWarning() {
    const safetyScreen = $("#safety-screen");
    if (safetyScreen.hidden || safetyAcknowledged) return;
    safetyAcknowledged = true;
    safetyScreen.classList.add("safety-exit");
    window.setTimeout(() => {
      safetyScreen.hidden = true;
      safetyScreen.inert = true;
      applySettings();
      ui.inert = false;
      if (currentUser) $("#profile-button").focus();
      else if (accounts.length) $("#auth-profile-list button")?.focus();
      else $("#signup-name").focus();
    }, 550);
  }

  const bootScreen = $("#boot-screen");
  const reducedBootMotion = () => document.body.classList.contains("reduce-motion") ||
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  bootScreen.addEventListener("pointermove", event => {
    if (reducedBootMotion()) return;
    const bounds = bootScreen.getBoundingClientRect();
    const x = ((event.clientX - bounds.left) / bounds.width - .5) * -18;
    const y = ((event.clientY - bounds.top) / bounds.height - .5) * -18;
    bootScreen.style.setProperty("--boot-shift-x", `${x.toFixed(1)}px`);
    bootScreen.style.setProperty("--boot-shift-y", `${y.toFixed(1)}px`);
  });
  bootScreen.addEventListener("pointerleave", () => {
    bootScreen.style.setProperty("--boot-shift-x", "0px");
    bootScreen.style.setProperty("--boot-shift-y", "0px");
  });
  ui.inert = true;
  $("#boot-screen").inert = false;
  $("#safety-screen").inert = true;
  showSettingsCategory(activeSettingsCategory);
  setAuthenticationView(Boolean(currentUser));
  ui.inert = true;
  applySettings();
  void monitorBattery();
  renderMessages();
  if (!currentUser) setAuthMode(accounts.length ? "chooser" : "signup");
  window.setTimeout(startConsole, 3200);
  window.setInterval(updateClock, 30_000);
})();
