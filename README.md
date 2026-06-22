<div align="center">

```text
████████╗██╗  ██╗██╗███╗   ██╗██╗  ██╗██████╗  ██████╗  █████╗ ██████╗ ██████╗
╚══██╔══╝██║  ██║██║████╗  ██║██║ ██╔╝██╔══██╗██╔═══██╗██╔══██╗██╔══██╗██╔══██╗
   ██║   ███████║██║██╔██╗ ██║█████╔╝ ██████╔╝██║   ██║███████║██████╔╝██║  ██║
   ██║   ██╔══██║██║██║╚██╗██║██╔═██╗ ██╔══██╗██║   ██║██╔══██║██╔══██╗██║  ██║
   ██║   ██║  ██║██║██║ ╚████║██║  ██╗██████╔╝╚██████╔╝██║  ██║██║  ██║██████╔╝
   ╚═╝   ╚═╝  ╚═╝╚═╝╚═╝  ╚═══╝╚═╝  ╚═╝╚═════╝  ╚═════╝ ╚═╝  ╚═╝╚═╝  ╚═╝╚═════╝
```

# 📋 ThinkBoard — Une application Todo en MERN Stack

**Mon premier projet full-stack développé avec la stack MERN.**  
Simple. Épuré. Efficace.

![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)
![Express](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![DaisyUI](https://img.shields.io/badge/DaisyUI-5A0EF8?style=for-the-badge&logo=daisyui&logoColor=white)

</div>

---

## 🌟 À propos du projet

**ThinkBoard** est une application collaborative de gestion de tâches (Todo List), représentant mon premier projet développé de bout en bout avec la **stack MERN**.

N'importe quel utilisateur peut accéder à l'application et ajouter des tâches à un tableau partagé, ce qui en fait un excellent projet d'apprentissage du développement full-stack.

Ce projet m'a permis de découvrir et de mettre en pratique :
- la connexion d'une interface React à une API Node/Express ;
- la persistance des données avec MongoDB ;
- l'utilisation de TypeScript sur l'ensemble du projet.

---

## ✨ Fonctionnalités

- ✅ Ajouter de nouvelles tâches à un tableau partagé
- 🗑️ Supprimer des tâches
- 📦 Sauvegarde des données dans MongoDB
- 🎨 Interface moderne avec DaisyUI et Tailwind CSS
- 🔒 **À venir :** authentification des utilisateurs afin que chacun dispose de son propre espace de travail privé

---

## 🛠️ Technologies utilisées

| Couche | Technologie |
|---|---|
| **Frontend** | React.js + TypeScript |
| **Style** | Tailwind CSS + DaisyUI |
| **Backend** | Node.js + Express.js |
| **Base de données** | MongoDB (Mongoose) |
| **Tests d'API** | Postman |

**🔗 Démo en ligne :** https://merntodo-beta.vercel.app/

---

## 🚀 Prise en main

### Prérequis

Assurez-vous d'avoir installé :

- [Node.js](https://nodejs.org/) (v18 ou supérieur)
- [MongoDB](https://www.mongodb.com/) (installation locale ou MongoDB Atlas)
- npm ou yarn

### Installation

**1. Cloner le dépôt**

```bash
git clone https://github.com/your-username/thinkboard.git
cd thinkboard
```

**2. Installer les dépendances du backend**

```bash
cd backend
npm install
```

**3. Configurer les variables d'environnement**

Créez un fichier `.env` dans le dossier `backend/` :

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
```

**4. Installer les dépendances du frontend**

```bash
cd ../frontend
npm install
```

**5. Lancer l'application**

Ouvrez deux terminaux :

```bash
# Terminal 1 — Backend
cd backend
npm run dev

# Terminal 2 — Frontend
cd frontend
npm run dev
```

L'application sera accessible à l'adresse :

```text
http://localhost:5173
```

---

## 🔮 Feuille de route

Ce projet n'est que le début. Voici les prochaines fonctionnalités prévues :

- [ ] 🔐 **Authentification des utilisateurs** — connexion/inscription avec JWT
- [ ] 🏠 **Espaces de travail privés** — chaque utilisateur gère ses propres tâches
- [ ] ✏️ **Modification des tâches** — édition directe du contenu
- [ ] 📌 **Priorité des tâches** — faible / moyenne / élevée
- [ ] 🌙 **Mode sombre / clair** — bascule entre les thèmes

---

<div align="center">
  <sub>⭐ Si ce projet vous plaît, n'hésitez pas à laisser une étoile sur GitHub, cela me ferait très plaisir !</sub>
</div>
