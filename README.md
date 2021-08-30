# test-login
🍛💨のテストログイン実装

## 参考ソース

[Vue.js](https://qiita.com/kumagaias/items/f3486da415d3024c7ed4)

[RailsのAPI開発](https://qiita.com/kumagaias/items/250e7d6cf46966e4c8c2)

[デザイン重視の高いログインページ](https://inokawablog.org/code/vuetify-auth-template/)

src/
├── App.vue
├── assets
│   └── logo.png
├── components
│   ├── error.vue
│   ├── login.vue
│   ├── logout.vue
│   ├── menu.vue
│   └── top.vue
├── lang
│   ├── index.js
│   └── messages.json # エラーメッセージ等、文言をここに
├── main.js
├── router
│   └── index.js # ルーティング定義
└── store
    ├── index.js
    └── modules
        ├── auth.js # token を管理
        ├── http.js # API と通信する際はコレを使う
        └── message.js # エラーメッセージの管理