# 🚀 Contexte de Projet: ugate-admin-frontend

> **Généré automatiquement le:** samedi 31 janvier 2026 à 11:51
> 
> **Type de projet:** Next.js + TypeScript
> 
> **But:** Fournir un contexte complet pour les assistants IA

---

## 📊 Vue d'ensemble du projet

Ce document contient l'intégralité du code source et de la structure de votre projet.
Il est optimisé pour être utilisé comme contexte par des assistants IA (ChatGPT, Claude, etc.).

### 🎯 Comment utiliser ce document

1. **Copier-coller** l'intégralité dans votre conversation avec l'IA
2. **Préciser** votre demande après avoir fourni le contexte
3. L'IA aura une **vision complète** de votre projet

---

## 📈 Statistiques du Projet

| Métrique | Valeur |
|----------|--------|
| **Total de fichiers analysés** | 0 |
| **Total de lignes de code** | 0 |

### 📂 Répartition par type de fichier

| Extension | Nombre |
|-----------|--------|
| .tsx | 24 |
| .ts | 18 |
| .json | 3 |
| .md | 2 |
| .css | 1 |
| .js | 1 |

---

## 📚 Table des Matières

- [📦 Configuration](#📦-configuration)
  - [next.config.ts](#nextconfigts)
  - [package-lock.json](#package-lockjson)
  - [package.json](#packagejson)
  - [README.md](#READMEmd)
  - [tsconfig.json](#tsconfigjson)
- [🎨 Styles](#🎨-styles)
  - [app\globals.css](#app-globalscss)
- [📝 Documentation](#📝-documentation)
  - [PROJECT_CONTEXT.md](#PROJECT_CONTEXTmd)
- [📄 Autres](#📄-autres)
  - [app\admissions\page.tsx](#app-admissions-pagetsx)
  - [app\events\page.tsx](#app-events-pagetsx)
  - [app\page.tsx](#app-pagetsx)
  - [app\products\page.tsx](#app-products-pagetsx)
  - [app\services\page.tsx](#app-services-pagetsx)
  - [app\settings\page.tsx](#app-settings-pagetsx)
  - [components\Admissions.tsx](#components-Admissionstsx)
  - [components\Branches.tsx](#components-Branchestsx)
  - [components\BranchSelector.tsx](#components-BranchSelectortsx)
  - [components\Dashboard.tsx](#components-Dashboardtsx)
  - [components\Events.tsx](#components-Eventstsx)
  - [components\Login.tsx](#components-Logintsx)
  - [components\Members.tsx](#components-Memberstsx)
  - [components\onboarding\CreateSyndicate.tsx](#components-onboarding-CreateSyndicatetsx)
  - [components\onboarding\PendingSyndicate.tsx](#components-onboarding-PendingSyndicatetsx)
  - [components\Products.tsx](#components-Productstsx)
  - [components\Register.tsx](#components-Registertsx)
  - [components\Services.tsx](#components-Servicestsx)
  - [components\Settings.tsx](#components-Settingstsx)
  - [components\ui\Badge.tsx](#components-ui-Badgetsx)
  - [components\ui\Button.tsx](#components-ui-Buttontsx)
  - [components\ui\Card.tsx](#components-ui-Cardtsx)
  - [components\ui\Input.tsx](#components-ui-Inputtsx)
  - [generate.js](#generatejs)
  - [lib\constants\branches.ts](#lib-constants-branchests)
  - [lib\constants\mockEvents.ts](#lib-constants-mockEventsts)
  - [lib\constants.ts](#lib-constantsts)
  - [lib\contexts\AuthContext.tsx](#lib-contexts-AuthContexttsx)
  - [lib\services\admin.service.ts](#lib-services-adminservicets)
  - [lib\services\api.client.ts](#lib-services-apiclientts)
  - [lib\services\auth.service.ts](#lib-services-authservicets)
  - [lib\services\branches.service.ts](#lib-services-branchesservicets)
  - [lib\services\events.service.ts](#lib-services-eventsservicets)
  - [lib\services\products.service.ts](#lib-services-productsservicets)
  - [lib\services\services.service.ts](#lib-services-servicesservicets)
  - [lib\services\syndicates.service.ts](#lib-services-syndicatesservicets)
  - [lib\types\auth.ts](#lib-types-authts)
  - [lib\types\events.ts](#lib-types-eventsts)
  - [lib\types\superadmin.ts](#lib-types-superadmints)
  - [lib\types.ts](#lib-typests)
  - [lib\utils.ts](#lib-utilsts)
  - [next-env.d.ts](#next-envdts)

---

## 📦 Configuration

> 5 fichier(s)

### `next.config.ts`

<a id="nextconfigts"></a>

> 📊 **Stats:** 29 lignes | 590 B

```typescript
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/**',
      },
      // AJOUTE CE BLOC ICI :
      {
        protocol: 'https',
        hostname: 'media-service.pynfi.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
```

---

### `package-lock.json`

<a id="package-lockjson"></a>

> 📊 **Stats:** 6532 lignes | 233.88 KB

```json
{
  "name": "ugate-admin-frontend",
  "version": "0.1.0",
  "lockfileVersion": 3,
  "requires": true,
  "packages": {
    "": {
      "name": "ugate-admin-frontend",
      "version": "0.1.0",
      "dependencies": {
        "clsx": "^2.1.1",
        "framer-motion": "^12.29.2",
        "lucide-react": "^0.561.0",
        "next": "16.0.10",
        "react": "19.2.1",
        "react-dom": "19.2.1",
        "recharts": "^3.6.0",
        "tailwind-merge": "^3.4.0"
      },
      "devDependencies": {
        "@tailwindcss/postcss": "^4",
        "@types/node": "^20",
        "@types/react": "^19",
        "@types/react-dom": "^19",
        "eslint": "^9",
        "eslint-config-next": "16.0.10",
        "tailwindcss": "^4",
        "typescript": "^5"
      }
    },
    "node_modules/@alloc/quick-lru": {
      "version": "5.2.0",
      "resolved": "https://registry.npmjs.org/@alloc/quick-lru/-/quick-lru-5.2.0.tgz",
      "integrity": "sha512-UrcABB+4bUrFABwbluTIBErXwvbsU/V7TZWfmbgJfbkwiBuziS9gxdODUyuiecfdGQ85jglMW6juS3+z5TsKLw==",
      "dev": true,
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/@babel/code-frame": {
      "version": "7.27.1",
      "resolved": "https://registry.npmjs.org/@babel/code-frame/-/code-frame-7.27.1.tgz",
      "integrity": "sha512-cjQ7ZlQ0Mv3b47hABuTevyTuYN4i+loJKGeV9flcCgIK37cCXRh+L1bd3iBHlynerhQ7BhCkn2BPbQUL+rGqFg==",
      "dev": true,
      "dependencies": {
        "@babel/helper-validator-identifier": "^7.27.1",
        "js-tokens": "^4.0.0",
        "picocolors": "^1.1.1"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/compat-data": {
      "version": "7.28.5",
      "resolved": "https://registry.npmjs.org/@babel/compat-data/-/compat-data-7.28.5.tgz",
      "integrity": "sha512-6uFXyCayocRbqhZOB+6XcuZbkMNimwfVGFji8CTZnCzOHVGvDqzvitu1re2AU5LROliz7eQPhB8CpAMvnx9EjA==",
      "dev": true,
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/core": {
      "version": "7.28.5",
      "resolved": "https://registry.npmjs.org/@babel/core/-/core-7.28.5.tgz",
      "integrity": "sha512-e7jT4DxYvIDLk1ZHmU/m/mB19rex9sv0c2ftBtjSBv+kVM/902eh0fINUzD7UwLLNR+jU585GxUJ8/EBfAM5fw==",
      "dev": true,
      "dependencies": {
        "@babel/code-frame": "^7.27.1",
        "@babel/generator": "^7.28.5",
        "@babel/helper-compilation-targets": "^7.27.2",
        "@babel/helper-module-transforms": "^7.28.3",
        "@babel/helpers": "^7.28.4",
        "@babel/parser": "^7.28.5",
        "@babel/template": "^7.27.2",
        "@babel/traverse": "^7.28.5",
        "@babel/types": "^7.28.5",
        "@jridgewell/remapping": "^2.3.5",
        "convert-source-map": "^2.0.0",
        "debug": "^4.1.0",
        "gensync": "^1.0.0-beta.2",
        "json5": "^2.2.3",
        "semver": "^6.3.1"
      },
      "engines": {
        "node": ">=6.9.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/babel"
      }
    },
    "node_modules/@babel/generator": {
      "version": "7.28.5",
      "resolved": "https://registry.npmjs.org/@babel/generator/-/generator-7.28.5.tgz",
      "integrity": "sha512-3EwLFhZ38J4VyIP6WNtt2kUdW9dokXA9Cr4IVIFHuCpZ3H8/YFOl5JjZHisrn1fATPBmKKqXzDFvh9fUwHz6CQ==",
      "dev": true,
      "dependencies": {
        "@babel/parser": "^7.28.5",
        "@babel/types": "^7.28.5",
        "@jridgewell/gen-mapping": "^0.3.12",
        "@jridgewell/trace-mapping": "^0.3.28",
        "jsesc": "^3.0.2"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/helper-compilation-targets": {
      "version": "7.27.2",
      "resolved": "https://registry.npmjs.org/@babel/helper-compilation-targets/-/helper-compilation-targets-7.27.2.tgz",
      "integrity": "sha512-2+1thGUUWWjLTYTHZWK1n8Yga0ijBz1XAhUXcKy81rd5g6yh7hGqMp45v7cadSbEHc9G3OTv45SyneRN3ps4DQ==",
      "dev": true,
      "dependencies": {
        "@babel/compat-data": "^7.27.2",
        "@babel/helper-validator-option": "^7.27.1",
        "browserslist": "^4.24.0",
        "lru-cache": "^5.1.1",
        "semver": "^6.3.1"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/helper-globals": {
      "version": "7.28.0",
      "resolved": "https://registry.npmjs.org/@babel/helper-globals/-/helper-globals-7.28.0.tgz",
      "integrity": "sha512-+W6cISkXFa1jXsDEdYA8HeevQT/FULhxzR99pxphltZcVaugps53THCeiWA8SguxxpSp3gKPiuYfSWopkLQ4hw==",
      "dev": true,
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/helper-module-imports": {
      "version": "7.27.1",
      "resolved": "https://registry.npmjs.org/@babel/helper-module-imports/-/helper-module-imports-7.27.1.tgz",
      "integrity": "sha512-0gSFWUPNXNopqtIPQvlD5WgXYI5GY2kP2cCvoT8kczjbfcfuIljTbcWrulD1CIPIX2gt1wghbDy08yE1p+/r3w==",
      "dev": true,
      "dependencies": {
        "@babel/traverse": "^7.27.1",
        "@babel/types": "^7.27.1"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/helper-module-transforms": {
      "version": "7.28.3",
      "resolved": "https://registry.npmjs.org/@babel/helper-module-transforms/-/helper-module-transforms-7.28.3.tgz",
      "integrity": "sha512-gytXUbs8k2sXS9PnQptz5o0QnpLL51SwASIORY6XaBKF88nsOT0Zw9szLqlSGQDP/4TljBAD5y98p2U1fqkdsw==",
      "dev": true,
      "dependencies": {
        "@babel/helper-module-imports": "^7.27.1",
        "@babel/helper-validator-identifier": "^7.27.1",
        "@babel/traverse": "^7.28.3"
      },
      "engines": {
        "node": ">=6.9.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0"
      }
    },
    "node_modules/@babel/helper-string-parser": {
      "version": "7.27.1",
      "resolved": "https://registry.npmjs.org/@babel/helper-string-parser/-/helper-string-parser-7.27.1.tgz",
      "integrity": "sha512-qMlSxKbpRlAridDExk92nSobyDdpPijUq2DW6oDnUqd0iOGxmQjyqhMIihI9+zv4LPyZdRje2cavWPbCbWm3eA==",
      "dev": true,
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/helper-validator-identifier": {
      "version": "7.28.5",
      "resolved": "https://registry.npmjs.org/@babel/helper-validator-identifier/-/helper-validator-identifier-7.28.5.tgz",
      "integrity": "sha512-qSs4ifwzKJSV39ucNjsvc6WVHs6b7S03sOh2OcHF9UHfVPqWWALUsNUVzhSBiItjRZoLHx7nIarVjqKVusUZ1Q==",
      "dev": true,
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/helper-validator-option": {
      "version": "7.27.1",
      "resolved": "https://registry.npmjs.org/@babel/helper-validator-option/-/helper-validator-option-7.27.1.tgz",
      "integrity": "sha512-YvjJow9FxbhFFKDSuFnVCe2WxXk1zWc22fFePVNEaWJEu8IrZVlda6N0uHwzZrUM1il7NC9Mlp4MaJYbYd9JSg==",
      "dev": true,
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/helpers": {
      "version": "7.28.4",
      "resolved": "https://registry.npmjs.org/@babel/helpers/-/helpers-7.28.4.tgz",
      "integrity": "sha512-HFN59MmQXGHVyYadKLVumYsA9dBFun/ldYxipEjzA4196jpLZd8UjEEBLkbEkvfYreDqJhZxYAWFPtrfhNpj4w==",
      "dev": true,
      "dependencies": {
        "@babel/template": "^7.27.2",
        "@babel/types": "^7.28.4"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/parser": {
      "version": "7.28.5",
      "resolved": "https://registry.npmjs.org/@babel/parser/-/parser-7.28.5.tgz",
      "integrity": "sha512-KKBU1VGYR7ORr3At5HAtUQ+TV3SzRCXmA/8OdDZiLDBIZxVyzXuztPjfLd3BV1PRAQGCMWWSHYhL0F8d5uHBDQ==",
      "dev": true,
      "dependencies": {
        "@babel/types": "^7.28.5"
      },
      "bin": {
        "parser": "bin/babel-parser.js"
      },
      "engines": {
        "node": ">=6.0.0"
      }
    },
    "node_modules/@babel/template": {
      "version": "7.27.2",
      "resolved": "https://registry.npmjs.org/@babel/template/-/template-7.27.2.tgz",
      "integrity": "sha512-LPDZ85aEJyYSd18/DkjNh4/y1ntkE5KwUHWTiqgRxruuZL2F1yuHligVHLvcHY2vMHXttKFpJn6LwfI7cw7ODw==",
      "dev": true,
      "dependencies": {
        "@babel/code-frame": "^7.27.1",
        "@babel/parser": "^7.27.2",
        "@babel/types": "^7.27.1"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/traverse": {
      "version": "7.28.5",
      "resolved": "https://registry.npmjs.org/@babel/traverse/-/traverse-7.28.5.tgz",
      "integrity": "sha512-TCCj4t55U90khlYkVV/0TfkJkAkUg3jZFA3Neb7unZT8CPok7iiRfaX0F+WnqWqt7OxhOn0uBKXCw4lbL8W0aQ==",
      "dev": true,
      "dependencies": {
        "@babel/code-frame": "^7.27.1",
        "@babel/generator": "^7.28.5",
        "@babel/helper-globals": "^7.28.0",
        "@babel/parser": "^7.28.5",
        "@babel/template": "^7.27.2",
        "@babel/types": "^7.28.5",
        "debug": "^4.3.1"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/types": {
      "version": "7.28.5",
      "resolved": "https://registry.npmjs.org/@babel/types/-/types-7.28.5.tgz",
      "integrity": "sha512-qQ5m48eI/MFLQ5PxQj4PFaprjyCTLI37ElWMmNs0K8Lk3dVeOdNpB3ks8jc7yM5CDmVC73eMVk/trk3fgmrUpA==",
      "dev": true,
      "dependencies": {
        "@babel/helper-string-parser": "^7.27.1",
        "@babel/helper-validator-identifier": "^7.28.5"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@emnapi/core": {
      "version": "1.7.1",
      "resolved": "https://registry.npmjs.org/@emnapi/core/-/core-1.7.1.tgz",
      "integrity": "sha512-o1uhUASyo921r2XtHYOHy7gdkGLge8ghBEQHMWmyJFoXlpU58kIrhhN3w26lpQb6dspetweapMn2CSNwQ8I4wg==",
      "dev": true,
      "optional": true,
      "dependencies": {
        "@emnapi/wasi-threads": "1.1.0",
        "tslib": "^2.4.0"
      }
    },
    "node_modules/@emnapi/runtime": {
      "version": "1.7.1",
      "resolved": "https://registry.npmjs.org/@emnapi/runtime/-/runtime-1.7.1.tgz",
      "integrity": "sha512-PVtJr5CmLwYAU9PZDMITZoR5iAOShYREoR45EyyLrbntV50mdePTgUn4AmOw90Ifcj+x2kRjdzr1HP3RrNiHGA==",
      "optional": true,
      "dependencies": {
        "tslib": "^2.4.0"
      }
    },
    "node_modules/@emnapi/wasi-threads": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/@emnapi/wasi-threads/-/wasi-threads-1.1.0.tgz",
      "integrity": "sha512-WI0DdZ8xFSbgMjR1sFsKABJ/C5OnRrjT06JXbZKexJGrDuPTzZdDYfFlsgcCXCyf+suG5QU2e/y1Wo2V/OapLQ==",
      "dev": true,
      "optional": true,
      "dependencies": {
        "tslib": "^2.4.0"
      }
    },
    "node_modules/@eslint-community/eslint-utils": {
      "version": "4.9.0",
      "resolved": "https://registry.npmjs.org/@eslint-community/eslint-utils/-/eslint-utils-4.9.0.tgz",
      "integrity": "sha512-ayVFHdtZ+hsq1t2Dy24wCmGXGe4q9Gu3smhLYALJrr473ZH27MsnSL+LKUlimp4BWJqMDMLmPpx/Q9R3OAlL4g==",
      "dev": true,
      "dependencies": {
        "eslint-visitor-keys": "^3.4.3"
      },
      "engines": {
        "node": "^12.22.0 || ^14.17.0 || >=16.0.0"
      },
      "funding": {
        "url": "https://opencollective.com/eslint"
      },
      "peerDependencies": {
        "eslint": "^6.0.0 || ^7.0.0 || >=8.0.0"
      }
    },
    "node_modules/@eslint-community/eslint-utils/node_modules/eslint-visitor-keys": {
      "version": "3.4.3",
      "resolved": "https://registry.npmjs.org/eslint-visitor-keys/-/eslint-visitor-keys-3.4.3.tgz",
      "integrity": "sha512-wpc+LXeiyiisxPlEkUzU6svyS1frIO3Mgxj1fdy7Pm8Ygzguax2N3Fa/D/ag1WqbOprdI+uY6wMUl8/a2G+iag==",
      "dev": true,
      "engines": {
        "node": "^12.22.0 || ^14.17.0 || >=16.0.0"
      },
      "funding": {
        "url": "https://opencollective.com/eslint"
      }
    },
    "node_modules/@eslint-community/regexpp": {
      "version": "4.12.2",
      "resolved": "https://registry.npmjs.org/@eslint-community/regexpp/-/regexpp-4.12.2.tgz",
      "integrity": "sha512-EriSTlt5OC9/7SXkRSCAhfSxxoSUgBm33OH+IkwbdpgoqsSsUg7y3uh+IICI/Qg4BBWr3U2i39RpmycbxMq4ew==",
      "dev": true,
      "engines": {
        "node": "^12.0.0 || ^14.0.0 || >=16.0.0"
      }
    },
    "node_modules/@eslint/config-array": {
      "version": "0.21.1",
      "resolved": "https://registry.npmjs.org/@eslint/config-array/-/config-array-0.21.1.tgz",
      "integrity": "sha512-aw1gNayWpdI/jSYVgzN5pL0cfzU02GT3NBpeT/DXbx1/1x7ZKxFPd9bwrzygx/qiwIQiJ1sw/zD8qY/kRvlGHA==",
      "dev": true,
      "dependencies": {
        "@eslint/object-schema": "^2.1.7",
        "debug": "^4.3.1",
        "minimatch": "^3.1.2"
      },
      "engines": {
        "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
      }
    },
    "node_modules/@eslint/config-helpers": {
      "version": "0.4.2",
      "resolved": "https://registry.npmjs.org/@eslint/config-helpers/-/config-helpers-0.4.2.tgz",
      "integrity": "sha512-gBrxN88gOIf3R7ja5K9slwNayVcZgK6SOUORm2uBzTeIEfeVaIhOpCtTox3P6R7o2jLFwLFTLnC7kU/RGcYEgw==",
      "dev": true,
      "dependencies": {
        "@eslint/core": "^0.17.0"
      },
      "engines": {
        "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
      }
    },
    "node_modules/@eslint/core": {
      "version": "0.17.0",
      "resolved": "https://registry.npmjs.org/@eslint/core/-/core-0.17.0.tgz",
      "integrity": "sha512-yL/sLrpmtDaFEiUj1osRP4TI2MDz1AddJL+jZ7KSqvBuliN4xqYY54IfdN8qD8Toa6g1iloph1fxQNkjOxrrpQ==",
      "dev": true,
      "dependencies": {
        "@types/json-schema": "^7.0.15"
      },
      "engines": {
        "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
      }
    },
    "node_modules/@eslint/eslintrc": {
      "version": "3.3.3",
      "resolved": "https://registry.npmjs.org/@eslint/eslintrc/-/eslintrc-3.3.3.tgz",
      "integrity": "sha512-Kr+LPIUVKz2qkx1HAMH8q1q6azbqBAsXJUxBl/ODDuVPX45Z9DfwB8tPjTi6nNZ8BuM3nbJxC5zCAg5elnBUTQ==",
      "dev": true,
      "dependencies": {
        "ajv": "^6.12.4",
        "debug": "^4.3.2",
        "espree": "^10.0.1",
        "globals": "^14.0.0",
        "ignore": "^5.2.0",
        "import-fresh": "^3.2.1",
        "js-yaml": "^4.1.1",
        "minimatch": "^3.1.2",
        "strip-json-comments": "^3.1.1"
      },
      "engines": {
        "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
      },
      "funding": {
        "url": "https://opencollective.com/eslint"
      }
    },
    "node_modules/@eslint/js": {
      "version": "9.39.2",
      "resolved": "https://registry.npmjs.org/@eslint/js/-/js-9.39.2.tgz",
      "integrity": "sha512-q1mjIoW1VX4IvSocvM/vbTiveKC4k9eLrajNEuSsmjymSDEbpGddtpfOoN7YGAqBK3NG+uqo8ia4PDTt8buCYA==",
      "dev": true,
      "engines": {
        "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
      },
      "funding": {
        "url": "https://eslint.org/donate"
      }
    },
    "node_modules/@eslint/object-schema": {
      "version": "2.1.7",
      "resolved": "https://registry.npmjs.org/@eslint/object-schema/-/object-schema-2.1.7.tgz",
      "integrity": "sha512-VtAOaymWVfZcmZbp6E2mympDIHvyjXs/12LqWYjVw6qjrfF+VK+fyG33kChz3nnK+SU5/NeHOqrTEHS8sXO3OA==",
      "dev": true,
      "engines": {
        "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
      }
    },
    "node_modules/@eslint/plugin-kit": {
      "version": "0.4.1",
      "resolved": "https://registry.npmjs.org/@eslint/plugin-kit/-/plugin-kit-0.4.1.tgz",
      "integrity": "sha512-43/qtrDUokr7LJqoF2c3+RInu/t4zfrpYdoSDfYyhg52rwLV6TnOvdG4fXm7IkSB3wErkcmJS9iEhjVtOSEjjA==",
      "dev": true,
      "dependencies": {
        "@eslint/core": "^0.17.0",
        "levn": "^0.4.1"
      },
      "engines": {
        "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
      }
    },
    "node_modules/@humanfs/core": {
      "version": "0.19.1",
      "resolved": "https://registry.npmjs.org/@humanfs/core/-/core-0.19.1.tgz",
      "integrity": "sha512-5DyQ4+1JEUzejeK1JGICcideyfUbGixgS9jNgex5nqkW+cY7WZhxBigmieN5Qnw9ZosSNVC9KQKyb+GUaGyKUA==",
      "dev": true,
      "engines": {
        "node": ">=18.18.0"
      }
    },
    "node_modules/@humanfs/node": {
      "version": "0.16.7",
      "resolved": "https://registry.npmjs.org/@humanfs/node/-/node-0.16.7.tgz",
      "integrity": "sha512-/zUx+yOsIrG4Y43Eh2peDeKCxlRt/gET6aHfaKpuq267qXdYDFViVHfMaLyygZOnl0kGWxFIgsBy8QFuTLUXEQ==",
      "dev": true,
      "dependencies": {
        "@humanfs/core": "^0.19.1",
        "@humanwhocodes/retry": "^0.4.0"
      },
      "engines": {
        "node": ">=18.18.0"
      }
    },
    "node_modules/@humanwhocodes/module-importer": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/@humanwhocodes/module-importer/-/module-importer-1.0.1.tgz",
      "integrity": "sha512-bxveV4V8v5Yb4ncFTT3rPSgZBOpCkjfK0y4oVVVJwIuDVBRMDXrPyXRL988i5ap9m9bnyEEjWfm5WkBmtffLfA==",
      "dev": true,
      "engines": {
        "node": ">=12.22"
      },
      "funding": {
        "type": "github",
        "url": "https://github.com/sponsors/nzakas"
      }
    },
    "node_modules/@humanwhocodes/retry": {
      "version": "0.4.3",
      "resolved": "https://registry.npmjs.org/@humanwhocodes/retry/-/retry-0.4.3.tgz",
      "integrity": "sha512-bV0Tgo9K4hfPCek+aMAn81RppFKv2ySDQeMoSZuvTASywNTnVJCArCZE2FWqpvIatKu7VMRLWlR1EazvVhDyhQ==",
      "dev": true,
      "engines": {
        "node": ">=18.18"
      },
      "funding": {
        "type": "github",
        "url": "https://github.com/sponsors/nzakas"
      }
    },
    "node_modules/@img/colour": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/@img/colour/-/colour-1.0.0.tgz",
      "integrity": "sha512-A5P/LfWGFSl6nsckYtjw9da+19jB8hkJ6ACTGcDfEJ0aE+l2n2El7dsVM7UVHZQ9s2lmYMWlrS21YLy2IR1LUw==",
      "optional": true,
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@img/sharp-darwin-arm64": {
      "version": "0.34.5",
      "resolved": "https://registry.npmjs.org/@img/sharp-darwin-arm64/-/sharp-darwin-arm64-0.34.5.tgz",
      "integrity": "sha512-imtQ3WMJXbMY4fxb/Ndp6HBTNVtWCUI0WdobyheGf5+ad6xX8VIDO8u2xE4qc/fr08CKG/7dDseFtn6M6g/r3w==",
      "cpu": [
        "arm64"
      ],
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": "^18.17.0 || ^20.3.0 || >=21.0.0"
      },
      "funding": {
        "url": "https://opencollective.com/libvips"
      },
      "optionalDependencies": {
        "@img/sharp-libvips-darwin-arm64": "1.2.4"
      }
    },
    "node_modules/@img/sharp-darwin-x64": {
      "version": "0.34.5",
      "resolved": "https://registry.npmjs.org/@img/sharp-darwin-x64/-/sharp-darwin-x64-0.34.5.tgz",
      "integrity": "sha512-YNEFAF/4KQ/PeW0N+r+aVVsoIY0/qxxikF2SWdp+NRkmMB7y9LBZAVqQ4yhGCm/H3H270OSykqmQMKLBhBJDEw==",
      "cpu": [
        "x64"
      ],
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": "^18.17.0 || ^20.3.0 || >=21.0.0"
      },
      "funding": {
        "url": "https://opencollective.com/libvips"
      },
      "optionalDependencies": {
        "@img/sharp-libvips-darwin-x64": "1.2.4"
      }
    },
    "node_modules/@img/sharp-libvips-darwin-arm64": {
      "version": "1.2.4",
      "resolved": "https://registry.npmjs.org/@img/sharp-libvips-darwin-arm64/-/sharp-libvips-darwin-arm64-1.2.4.tgz",
      "integrity": "sha512-zqjjo7RatFfFoP0MkQ51jfuFZBnVE2pRiaydKJ1G/rHZvnsrHAOcQALIi9sA5co5xenQdTugCvtb1cuf78Vf4g==",
      "cpu": [
        "arm64"
      ],
      "optional": true,
      "os": [
        "darwin"
      ],
      "funding": {
        "url": "https://opencollective.com/libvips"
      }
    },
    "node_modules/@img/sharp-libvips-darwin-x64": {
      "version": "1.2.4",
      "resolved": "https://registry.npmjs.org/@img/sharp-libvips-darwin-x64/-/sharp-libvips-darwin-x64-1.2.4.tgz",
      "integrity": "sha512-1IOd5xfVhlGwX+zXv2N93k0yMONvUlANylbJw1eTah8K/Jtpi15KC+WSiaX/nBmbm2HxRM1gZ0nSdjSsrZbGKg==",
      "cpu": [
        "x64"
      ],
      "optional": true,
      "os": [
        "darwin"
      ],
      "funding": {
        "url": "https://opencollective.com/libvips"
      }
    },
    "node_modules/@img/sharp-libvips-linux-arm": {
      "version": "1.2.4",
      "resolved": "https://registry.npmjs.org/@img/sharp-libvips-linux-arm/-/sharp-libvips-linux-arm-1.2.4.tgz",
      "integrity": "sha512-bFI7xcKFELdiNCVov8e44Ia4u2byA+l3XtsAj+Q8tfCwO6BQ8iDojYdvoPMqsKDkuoOo+X6HZA0s0q11ANMQ8A==",
      "cpu": [
        "arm"
      ],
      "optional": true,
      "os": [
        "linux"
      ],
      "funding": {
        "url": "https://opencollective.com/libvips"
      }
    },
    "node_modules/@img/sharp-libvips-linux-arm64": {
      "version": "1.2.4",
      "resolved": "https://registry.npmjs.org/@img/sharp-libvips-linux-arm64/-/sharp-libvips-linux-arm64-1.2.4.tgz",
      "integrity": "sha512-excjX8DfsIcJ10x1Kzr4RcWe1edC9PquDRRPx3YVCvQv+U5p7Yin2s32ftzikXojb1PIFc/9Mt28/y+iRklkrw==",
      "cpu": [
        "arm64"
      ],
      "optional": true,
      "os": [
        "linux"
      ],
      "funding": {
        "url": "https://opencollective.com/libvips"
      }
    },
    "node_modules/@img/sharp-libvips-linux-ppc64": {
      "version": "1.2.4",
      "resolved": "https://registry.npmjs.org/@img/sharp-libvips-linux-ppc64/-/sharp-libvips-linux-ppc64-1.2.4.tgz",
      "integrity": "sha512-FMuvGijLDYG6lW+b/UvyilUWu5Ayu+3r2d1S8notiGCIyYU/76eig1UfMmkZ7vwgOrzKzlQbFSuQfgm7GYUPpA==",
      "cpu": [
        "ppc64"
      ],
      "optional": true,
      "os": [
        "linux"
      ],
      "funding": {
        "url": "https://opencollective.com/libvips"
      }
    },
    "node_modules/@img/sharp-libvips-linux-riscv64": {
      "version": "1.2.4",
      "resolved": "https://registry.npmjs.org/@img/sharp-libvips-linux-riscv64/-/sharp-libvips-linux-riscv64-1.2.4.tgz",
      "integrity": "sha512-oVDbcR4zUC0ce82teubSm+x6ETixtKZBh/qbREIOcI3cULzDyb18Sr/Wcyx7NRQeQzOiHTNbZFF1UwPS2scyGA==",
      "cpu": [
        "riscv64"
      ],
      "optional": true,
      "os": [
        "linux"
      ],
      "funding": {
        "url": "https://opencollective.com/libvips"
      }
    },
    "node_modules/@img/sharp-libvips-linux-s390x": {
      "version": "1.2.4",
      "resolved": "https://registry.npmjs.org/@img/sharp-libvips-linux-s390x/-/sharp-libvips-linux-s390x-1.2.4.tgz",
      "integrity": "sha512-qmp9VrzgPgMoGZyPvrQHqk02uyjA0/QrTO26Tqk6l4ZV0MPWIW6LTkqOIov+J1yEu7MbFQaDpwdwJKhbJvuRxQ==",
      "cpu": [
        "s390x"
      ],
      "optional": true,
      "os": [
        "linux"
      ],
      "funding": {
        "url": "https://opencollective.com/libvips"
      }
    },
    "node_modules/@img/sharp-libvips-linux-x64": {
      "version": "1.2.4",
      "resolved": "https://registry.npmjs.org/@img/sharp-libvips-linux-x64/-/sharp-libvips-linux-x64-1.2.4.tgz",
      "integrity": "sha512-tJxiiLsmHc9Ax1bz3oaOYBURTXGIRDODBqhveVHonrHJ9/+k89qbLl0bcJns+e4t4rvaNBxaEZsFtSfAdquPrw==",
      "cpu": [
        "x64"
      ],
      "optional": true,
      "os": [
        "linux"
      ],
      "funding": {
        "url": "https://opencollective.com/libvips"
      }
    },
    "node_modules/@img/sharp-libvips-linuxmusl-arm64": {
      "version": "1.2.4",
      "resolved": "https://registry.npmjs.org/@img/sharp-libvips-linuxmusl-arm64/-/sharp-libvips-linuxmusl-arm64-1.2.4.tgz",
      "integrity": "sha512-FVQHuwx1IIuNow9QAbYUzJ+En8KcVm9Lk5+uGUQJHaZmMECZmOlix9HnH7n1TRkXMS0pGxIJokIVB9SuqZGGXw==",
      "cpu": [
        "arm64"
      ],
      "optional": true,
      "os": [
        "linux"
      ],
      "funding": {
        "url": "https://opencollective.com/libvips"
      }
    },
    "node_modules/@img/sharp-libvips-linuxmusl-x64": {
      "version": "1.2.4",
      "resolved": "https://registry.npmjs.org/@img/sharp-libvips-linuxmusl-x64/-/sharp-libvips-linuxmusl-x64-1.2.4.tgz",
      "integrity": "sha512-+LpyBk7L44ZIXwz/VYfglaX/okxezESc6UxDSoyo2Ks6Jxc4Y7sGjpgU9s4PMgqgjj1gZCylTieNamqA1MF7Dg==",
      "cpu": [
        "x64"
      ],
      "optional": true,
      "os": [
        "linux"
      ],
      "funding": {
        "url": "https://opencollective.com/libvips"
      }
    },
    "node_modules/@img/sharp-linux-arm": {
      "version": "0.34.5",
      "resolved": "https://registry.npmjs.org/@img/sharp-linux-arm/-/sharp-linux-arm-0.34.5.tgz",
      "integrity": "sha512-9dLqsvwtg1uuXBGZKsxem9595+ujv0sJ6Vi8wcTANSFpwV/GONat5eCkzQo/1O6zRIkh0m/8+5BjrRr7jDUSZw==",
      "cpu": [
        "arm"
      ],
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": "^18.17.0 || ^20.3.0 || >=21.0.0"
      },
      "funding": {
        "url": "https://opencollective.com/libvips"
      },
      "optionalDependencies": {
        "@img/sharp-libvips-linux-arm": "1.2.4"
      }
    },
    "node_modules/@img/sharp-linux-arm64": {
      "version": "0.34.5",
      "resolved": "https://registry.npmjs.org/@img/sharp-linux-arm64/-/sharp-linux-arm64-0.34.5.tgz",
      "integrity": "sha512-bKQzaJRY/bkPOXyKx5EVup7qkaojECG6NLYswgktOZjaXecSAeCWiZwwiFf3/Y+O1HrauiE3FVsGxFg8c24rZg==",
      "cpu": [
        "arm64"
      ],
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": "^18.17.0 || ^20.3.0 || >=21.0.0"
      },
      "funding": {
        "url": "https://opencollective.com/libvips"
      },
      "optionalDependencies": {
        "@img/sharp-libvips-linux-arm64": "1.2.4"
      }
    },
    "node_modules/@img/sharp-linux-ppc64": {
      "version": "0.34.5",
      "resolved": "https://registry.npmjs.org/@img/sharp-linux-ppc64/-/sharp-linux-ppc64-0.34.5.tgz",
      "integrity": "sha512-7zznwNaqW6YtsfrGGDA6BRkISKAAE1Jo0QdpNYXNMHu2+0dTrPflTLNkpc8l7MUP5M16ZJcUvysVWWrMefZquA==",
      "cpu": [
        "ppc64"
      ],
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": "^18.17.0 || ^20.3.0 || >=21.0.0"
      },
      "funding": {
        "url": "https://opencollective.com/libvips"
      },
      "optionalDependencies": {
        "@img/sharp-libvips-linux-ppc64": "1.2.4"
      }
    },
    "node_modules/@img/sharp-linux-riscv64": {
      "version": "0.34.5",
      "resolved": "https://registry.npmjs.org/@img/sharp-linux-riscv64/-/sharp-linux-riscv64-0.34.5.tgz",
      "integrity": "sha512-51gJuLPTKa7piYPaVs8GmByo7/U7/7TZOq+cnXJIHZKavIRHAP77e3N2HEl3dgiqdD/w0yUfiJnII77PuDDFdw==",
      "cpu": [
        "riscv64"
      ],
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": "^18.17.0 || ^20.3.0 || >=21.0.0"
      },
      "funding": {
        "url": "https://opencollective.com/libvips"
      },
      "optionalDependencies": {
        "@img/sharp-libvips-linux-riscv64": "1.2.4"
      }
    },
    "node_modules/@img/sharp-linux-s390x": {
      "version": "0.34.5",
      "resolved": "https://registry.npmjs.org/@img/sharp-linux-s390x/-/sharp-linux-s390x-0.34.5.tgz",
      "integrity": "sha512-nQtCk0PdKfho3eC5MrbQoigJ2gd1CgddUMkabUj+rBevs8tZ2cULOx46E7oyX+04WGfABgIwmMC0VqieTiR4jg==",
      "cpu": [
        "s390x"
      ],
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": "^18.17.0 || ^20.3.0 || >=21.0.0"
      },
      "funding": {
        "url": "https://opencollective.com/libvips"
      },
      "optionalDependencies": {
        "@img/sharp-libvips-linux-s390x": "1.2.4"
      }
    },
    "node_modules/@img/sharp-linux-x64": {
      "version": "0.34.5",
      "resolved": "https://registry.npmjs.org/@img/sharp-linux-x64/-/sharp-linux-x64-0.34.5.tgz",
      "integrity": "sha512-MEzd8HPKxVxVenwAa+JRPwEC7QFjoPWuS5NZnBt6B3pu7EG2Ge0id1oLHZpPJdn3OQK+BQDiw9zStiHBTJQQQQ==",
      "cpu": [
        "x64"
      ],
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": "^18.17.0 || ^20.3.0 || >=21.0.0"
      },
      "funding": {
        "url": "https://opencollective.com/libvips"
      },
      "optionalDependencies": {
        "@img/sharp-libvips-linux-x64": "1.2.4"
      }
    },
    "node_modules/@img/sharp-linuxmusl-arm64": {
      "version": "0.34.5",
      "resolved": "https://registry.npmjs.org/@img/sharp-linuxmusl-arm64/-/sharp-linuxmusl-arm64-0.34.5.tgz",
      "integrity": "sha512-fprJR6GtRsMt6Kyfq44IsChVZeGN97gTD331weR1ex1c1rypDEABN6Tm2xa1wE6lYb5DdEnk03NZPqA7Id21yg==",
      "cpu": [
        "arm64"
      ],
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": "^18.17.0 || ^20.3.0 || >=21.0.0"
      },
      "funding": {
        "url": "https://opencollective.com/libvips"
      },
      "optionalDependencies": {
        "@img/sharp-libvips-linuxmusl-arm64": "1.2.4"
      }
    },
    "node_modules/@img/sharp-linuxmusl-x64": {
      "version": "0.34.5",
      "resolved": "https://registry.npmjs.org/@img/sharp-linuxmusl-x64/-/sharp-linuxmusl-x64-0.34.5.tgz",
      "integrity": "sha512-Jg8wNT1MUzIvhBFxViqrEhWDGzqymo3sV7z7ZsaWbZNDLXRJZoRGrjulp60YYtV4wfY8VIKcWidjojlLcWrd8Q==",
      "cpu": [
        "x64"
      ],
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": "^18.17.0 || ^20.3.0 || >=21.0.0"
      },
      "funding": {
        "url": "https://opencollective.com/libvips"
      },
      "optionalDependencies": {
        "@img/sharp-libvips-linuxmusl-x64": "1.2.4"
      }
    },
    "node_modules/@img/sharp-wasm32": {
      "version": "0.34.5",
      "resolved": "https://registry.npmjs.org/@img/sharp-wasm32/-/sharp-wasm32-0.34.5.tgz",
      "integrity": "sha512-OdWTEiVkY2PHwqkbBI8frFxQQFekHaSSkUIJkwzclWZe64O1X4UlUjqqqLaPbUpMOQk6FBu/HtlGXNblIs0huw==",
      "cpu": [
        "wasm32"
      ],
      "optional": true,
      "dependencies": {
        "@emnapi/runtime": "^1.7.0"
      },
      "engines": {
        "node": "^18.17.0 || ^20.3.0 || >=21.0.0"
      },
      "funding": {
        "url": "https://opencollective.com/libvips"
      }
    },
    "node_modules/@img/sharp-win32-arm64": {
      "version": "0.34.5",
      "resolved": "https://registry.npmjs.org/@img/sharp-win32-arm64/-/sharp-win32-arm64-0.34.5.tgz",
      "integrity": "sha512-WQ3AgWCWYSb2yt+IG8mnC6Jdk9Whs7O0gxphblsLvdhSpSTtmu69ZG1Gkb6NuvxsNACwiPV6cNSZNzt0KPsw7g==",
      "cpu": [
        "arm64"
      ],
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": "^18.17.0 || ^20.3.0 || >=21.0.0"
      },
      "funding": {
        "url": "https://opencollective.com/libvips"
      }
    },
    "node_modules/@img/sharp-win32-ia32": {
      "version": "0.34.5",
      "resolved": "https://registry.npmjs.org/@img/sharp-win32-ia32/-/sharp-win32-ia32-0.34.5.tgz",
      "integrity": "sha512-FV9m/7NmeCmSHDD5j4+4pNI8Cp3aW+JvLoXcTUo0IqyjSfAZJ8dIUmijx1qaJsIiU+Hosw6xM5KijAWRJCSgNg==",
      "cpu": [
        "ia32"
      ],
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": "^18.17.0 || ^20.3.0 || >=21.0.0"
      },
      "funding": {
        "url": "https://opencollective.com/libvips"
      }
    },
    "node_modules/@img/sharp-win32-x64": {
      "version": "0.34.5",
      "resolved": "https://registry.npmjs.org/@img/sharp-win32-x64/-/sharp-win32-x64-0.34.5.tgz",
      "integrity": "sha512-+29YMsqY2/9eFEiW93eqWnuLcWcufowXewwSNIT6UwZdUUCrM3oFjMWH/Z6/TMmb4hlFenmfAVbpWeup2jryCw==",
      "cpu": [
        "x64"
      ],
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": "^18.17.0 || ^20.3.0 || >=21.0.0"
      },
      "funding": {
        "url": "https://opencollective.com/libvips"
      }
    },
    "node_modules/@jridgewell/gen-mapping": {
      "version": "0.3.13",
      "resolved": "https://registry.npmjs.org/@jridgewell/gen-mapping/-/gen-mapping-0.3.13.tgz",
      "integrity": "sha512-2kkt/7niJ6MgEPxF0bYdQ6etZaA+fQvDcLKckhy1yIQOzaoKjBBjSj63/aLVjYE3qhRt5dvM+uUyfCg6UKCBbA==",
      "dev": true,
      "dependencies": {
        "@jridgewell/sourcemap-codec": "^1.5.0",
        "@jridgewell/trace-mapping": "^0.3.24"
      }
    },
    "node_modules/@jridgewell/remapping": {
      "version": "2.3.5",
      "resolved": "https://registry.npmjs.org/@jridgewell/remapping/-/remapping-2.3.5.tgz",
      "integrity": "sha512-LI9u/+laYG4Ds1TDKSJW2YPrIlcVYOwi2fUC6xB43lueCjgxV4lffOCZCtYFiH6TNOX+tQKXx97T4IKHbhyHEQ==",
      "dev": true,
      "dependencies": {
        "@jridgewell/gen-mapping": "^0.3.5",
        "@jridgewell/trace-mapping": "^0.3.24"
      }
    },
    "node_modules/@jridgewell/resolve-uri": {
      "version": "3.1.2",
      "resolved": "https://registry.npmjs.org/@jridgewell/resolve-uri/-/resolve-uri-3.1.2.tgz",
      "integrity": "sha512-bRISgCIjP20/tbWSPWMEi54QVPRZExkuD9lJL+UIxUKtwVJA8wW1Trb1jMs1RFXo1CBTNZ/5hpC9QvmKWdopKw==",
      "dev": true,
      "engines": {
        "node": ">=6.0.0"
      }
    },
    "node_modules/@jridgewell/sourcemap-codec": {
      "version": "1.5.5",
      "resolved": "https://registry.npmjs.org/@jridgewell/sourcemap-codec/-/sourcemap-codec-1.5.5.tgz",
      "integrity": "sha512-cYQ9310grqxueWbl+WuIUIaiUaDcj7WOq5fVhEljNVgRfOUhY9fy2zTvfoqWsnebh8Sl70VScFbICvJnLKB0Og==",
      "dev": true
    },
    "node_modules/@jridgewell/trace-mapping": {
      "version": "0.3.31",
      "resolved": "https://registry.npmjs.org/@jridgewell/trace-mapping/-/trace-mapping-0.3.31.tgz",
      "integrity": "sha512-zzNR+SdQSDJzc8joaeP8QQoCQr8NuYx2dIIytl1QeBEZHJ9uW6hebsrYgbz8hJwUQao3TWCMtmfV8Nu1twOLAw==",
      "dev": true,
      "dependencies": {
        "@jridgewell/resolve-uri": "^3.1.0",
        "@jridgewell/sourcemap-codec": "^1.4.14"
      }
    },
    "node_modules/@napi-rs/wasm-runtime": {
      "version": "0.2.12",
      "resolved": "https://registry.npmjs.org/@napi-rs/wasm-runtime/-/wasm-runtime-0.2.12.tgz",
      "integrity": "sha512-ZVWUcfwY4E/yPitQJl481FjFo3K22D6qF0DuFH6Y/nbnE11GY5uguDxZMGXPQ8WQ0128MXQD7TnfHyK4oWoIJQ==",
      "dev": true,
      "optional": true,
      "dependencies": {
        "@emnapi/core": "^1.4.3",
        "@emnapi/runtime": "^1.4.3",
        "@tybys/wasm-util": "^0.10.0"
      }
    },
    "node_modules/@next/env": {
      "version": "16.0.10",
      "resolved": "https://registry.npmjs.org/@next/env/-/env-16.0.10.tgz",
      "integrity": "sha512-8tuaQkyDVgeONQ1MeT9Mkk8pQmZapMKFh5B+OrFUlG3rVmYTXcXlBetBgTurKXGaIZvkoqRT9JL5K3phXcgang=="
    },
    "node_modules/@next/eslint-plugin-next": {
      "version": "16.0.10",
      "resolved": "https://registry.npmjs.org/@next/eslint-plugin-next/-/eslint-plugin-next-16.0.10.tgz",
      "integrity": "sha512-b2NlWN70bbPLmfyoLvvidPKWENBYYIe017ZGUpElvQjDytCWgxPJx7L9juxHt0xHvNVA08ZHJdOyhGzon/KJuw==",
      "dev": true,
      "dependencies": {
        "fast-glob": "3.3.1"
      }
    },
    "node_modules/@next/swc-darwin-arm64": {
      "version": "16.0.10",
      "resolved": "https://registry.npmjs.org/@next/swc-darwin-arm64/-/swc-darwin-arm64-16.0.10.tgz",
      "integrity": "sha512-4XgdKtdVsaflErz+B5XeG0T5PeXKDdruDf3CRpnhN+8UebNa5N2H58+3GDgpn/9GBurrQ1uWW768FfscwYkJRg==",
      "cpu": [
        "arm64"
      ],
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": ">= 10"
      }
    },
    "node_modules/@next/swc-darwin-x64": {
      "version": "16.0.10",
      "resolved": "https://registry.npmjs.org/@next/swc-darwin-x64/-/swc-darwin-x64-16.0.10.tgz",
      "integrity": "sha512-spbEObMvRKkQ3CkYVOME+ocPDFo5UqHb8EMTS78/0mQ+O1nqE8toHJVioZo4TvebATxgA8XMTHHrScPrn68OGw==",
      "cpu": [
        "x64"
      ],
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": ">= 10"
      }
    },
    "node_modules/@next/swc-linux-arm64-gnu": {
      "version": "16.0.10",
      "resolved": "https://registry.npmjs.org/@next/swc-linux-arm64-gnu/-/swc-linux-arm64-gnu-16.0.10.tgz",
      "integrity": "sha512-uQtWE3X0iGB8apTIskOMi2w/MKONrPOUCi5yLO+v3O8Mb5c7K4Q5KD1jvTpTF5gJKa3VH/ijKjKUq9O9UhwOYw==",
      "cpu": [
        "arm64"
      ],
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 10"
      }
    },
    "node_modules/@next/swc-linux-arm64-musl": {
      "version": "16.0.10",
      "resolved": "https://registry.npmjs.org/@next/swc-linux-arm64-musl/-/swc-linux-arm64-musl-16.0.10.tgz",
      "integrity": "sha512-llA+hiDTrYvyWI21Z0L1GiXwjQaanPVQQwru5peOgtooeJ8qx3tlqRV2P7uH2pKQaUfHxI/WVarvI5oYgGxaTw==",
      "cpu": [
        "arm64"
      ],
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 10"
      }
    },
    "node_modules/@next/swc-linux-x64-gnu": {
      "version": "16.0.10",
      "resolved": "https://registry.npmjs.org/@next/swc-linux-x64-gnu/-/swc-linux-x64-gnu-16.0.10.tgz",
      "integrity": "sha512-AK2q5H0+a9nsXbeZ3FZdMtbtu9jxW4R/NgzZ6+lrTm3d6Zb7jYrWcgjcpM1k8uuqlSy4xIyPR2YiuUr+wXsavA==",
      "cpu": [
        "x64"
      ],
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 10"
      }
    },
    "node_modules/@next/swc-linux-x64-musl": {
      "version": "16.0.10",
      "resolved": "https://registry.npmjs.org/@next/swc-linux-x64-musl/-/swc-linux-x64-musl-16.0.10.tgz",
      "integrity": "sha512-1TDG9PDKivNw5550S111gsO4RGennLVl9cipPhtkXIFVwo31YZ73nEbLjNC8qG3SgTz/QZyYyaFYMeY4BKZR/g==",
      "cpu": [
        "x64"
      ],
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 10"
      }
    },
    "node_modules/@next/swc-win32-arm64-msvc": {
      "version": "16.0.10",
      "resolved": "https://registry.npmjs.org/@next/swc-win32-arm64-msvc/-/swc-win32-arm64-msvc-16.0.10.tgz",
      "integrity": "sha512-aEZIS4Hh32xdJQbHz121pyuVZniSNoqDVx1yIr2hy+ZwJGipeqnMZBJHyMxv2tiuAXGx6/xpTcQJ6btIiBjgmg==",
      "cpu": [
        "arm64"
      ],
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": ">= 10"
      }
    },
    "node_modules/@next/swc-win32-x64-msvc": {
      "version": "16.0.10",
      "resolved": "https://registry.npmjs.org/@next/swc-win32-x64-msvc/-/swc-win32-x64-msvc-16.0.10.tgz",
      "integrity": "sha512-E+njfCoFLb01RAFEnGZn6ERoOqhK1Gl3Lfz1Kjnj0Ulfu7oJbuMyvBKNj/bw8XZnenHDASlygTjZICQW+rYW1Q==",
      "cpu": [
        "x64"
      ],
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": ">= 10"
      }
    },
    "node_modules/@nodelib/fs.scandir": {
      "version": "2.1.5",
      "resolved": "https://registry.npmjs.org/@nodelib/fs.scandir/-/fs.scandir-2.1.5.tgz",
      "integrity": "sha512-vq24Bq3ym5HEQm2NKCr3yXDwjc7vTsEThRDnkp2DK9p1uqLR+DHurm/NOTo0KG7HYHU7eppKZj3MyqYuMBf62g==",
      "dev": true,
      "dependencies": {
        "@nodelib/fs.stat": "2.0.5",
        "run-parallel": "^1.1.9"
      },
      "engines": {
        "node": ">= 8"
      }
    },
    "node_modules/@nodelib/fs.stat": {
      "version": "2.0.5",
      "resolved": "https://registry.npmjs.org/@nodelib/fs.stat/-/fs.stat-2.0.5.tgz",
      "integrity": "sha512-RkhPPp2zrqDAQA/2jNhnztcPAlv64XdhIp7a7454A5ovI7Bukxgt7MX7udwAu3zg1DcpPU0rz3VV1SeaqvY4+A==",
      "dev": true,
      "engines": {
        "node": ">= 8"
      }
    },
    "node_modules/@nodelib/fs.walk": {
      "version": "1.2.8",
      "resolved": "https://registry.npmjs.org/@nodelib/fs.walk/-/fs.walk-1.2.8.tgz",
      "integrity": "sha512-oGB+UxlgWcgQkgwo8GcEGwemoTFt3FIO9ababBmaGwXIoBKZ+GTy0pP185beGg7Llih/NSHSV2XAs1lnznocSg==",
      "dev": true,
      "dependencies": {
        "@nodelib/fs.scandir": "2.1.5",
        "fastq": "^1.6.0"
      },
      "engines": {
        "node": ">= 8"
      }
    },
    "node_modules/@nolyfill/is-core-module": {
      "version": "1.0.39",
      "resolved": "https://registry.npmjs.org/@nolyfill/is-core-module/-/is-core-module-1.0.39.tgz",
      "integrity": "sha512-nn5ozdjYQpUCZlWGuxcJY/KpxkWQs4DcbMCmKojjyrYDEAGy4Ce19NN4v5MduafTwJlbKc99UA8YhSVqq9yPZA==",
      "dev": true,
      "engines": {
        "node": ">=12.4.0"
      }
    },
    "node_modules/@reduxjs/toolkit": {
      "version": "2.11.2",
      "resolved": "https://registry.npmjs.org/@reduxjs/toolkit/-/toolkit-2.11.2.tgz",
      "integrity": "sha512-Kd6kAHTA6/nUpp8mySPqj3en3dm0tdMIgbttnQ1xFMVpufoj+ADi8pXLBsd4xzTRHQa7t/Jv8W5UnCuW4kuWMQ==",
      "dependencies": {
        "@standard-schema/spec": "^1.0.0",
        "@standard-schema/utils": "^0.3.0",
        "immer": "^11.0.0",
        "redux": "^5.0.1",
        "redux-thunk": "^3.1.0",
        "reselect": "^5.1.0"
      },
      "peerDependencies": {
        "react": "^16.9.0 || ^17.0.0 || ^18 || ^19",
        "react-redux": "^7.2.1 || ^8.1.3 || ^9.0.0"
      },
      "peerDependenciesMeta": {
        "react": {
          "optional": true
        },
        "react-redux": {
          "optional": true
        }
      }
    },
    "node_modules/@reduxjs/toolkit/node_modules/immer": {
      "version": "11.0.1",
      "resolved": "https://registry.npmjs.org/immer/-/immer-11.0.1.tgz",
      "integrity": "sha512-naDCyggtcBWANtIrjQEajhhBEuL9b0Zg4zmlWK2CzS6xCWSE39/vvf4LqnMjUAWHBhot4m9MHCM/Z+mfWhUkiA==",
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/immer"
      }
    },
    "node_modules/@rtsao/scc": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/@rtsao/scc/-/scc-1.1.0.tgz",
      "integrity": "sha512-zt6OdqaDoOnJ1ZYsCYGt9YmWzDXl4vQdKTyJev62gFhRGKdx7mcT54V9KIjg+d2wi9EXsPvAPKe7i7WjfVWB8g==",
      "dev": true
    },
    "node_modules/@standard-schema/spec": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/@standard-schema/spec/-/spec-1.0.0.tgz",
      "integrity": "sha512-m2bOd0f2RT9k8QJx1JN85cZYyH1RqFBdlwtkSlf4tBDYLCiiZnv1fIIwacK6cqwXavOydf0NPToMQgpKq+dVlA=="
    },
    "node_modules/@standard-schema/utils": {
      "version": "0.3.0",
      "resolved": "https://registry.npmjs.org/@standard-schema/utils/-/utils-0.3.0.tgz",
      "integrity": "sha512-e7Mew686owMaPJVNNLs55PUvgz371nKgwsc4vxE49zsODpJEnxgxRo2y/OKrqueavXgZNMDVj3DdHFlaSAeU8g=="
    },
    "node_modules/@swc/helpers": {
      "version": "0.5.15",
      "resolved": "https://registry.npmjs.org/@swc/helpers/-/helpers-0.5.15.tgz",
      "integrity": "sha512-JQ5TuMi45Owi4/BIMAJBoSQoOJu12oOk/gADqlcUL9JEdHB8vyjUSsxqeNXnmXHjYKMi2WcYtezGEEhqUI/E2g==",
      "dependencies": {
        "tslib": "^2.8.0"
      }
    },
    "node_modules/@tailwindcss/node": {
      "version": "4.1.18",
      "resolved": "https://registry.npmjs.org/@tailwindcss/node/-/node-4.1.18.tgz",
      "integrity": "sha512-DoR7U1P7iYhw16qJ49fgXUlry1t4CpXeErJHnQ44JgTSKMaZUdf17cfn5mHchfJ4KRBZRFA/Coo+MUF5+gOaCQ==",
      "dev": true,
      "dependencies": {
        "@jridgewell/remapping": "^2.3.4",
        "enhanced-resolve": "^5.18.3",
        "jiti": "^2.6.1",
        "lightningcss": "1.30.2",
        "magic-string": "^0.30.21",
        "source-map-js": "^1.2.1",
        "tailwindcss": "4.1.18"
      }
    },
    "node_modules/@tailwindcss/oxide": {
      "version": "4.1.18",
      "resolved": "https://registry.npmjs.org/@tailwindcss/oxide/-/oxide-4.1.18.tgz",
      "integrity": "sha512-EgCR5tTS5bUSKQgzeMClT6iCY3ToqE1y+ZB0AKldj809QXk1Y+3jB0upOYZrn9aGIzPtUsP7sX4QQ4XtjBB95A==",
      "dev": true,
      "engines": {
        "node": ">= 10"
      },
      "optionalDependencies": {
        "@tailwindcss/oxide-android-arm64": "4.1.18",
        "@tailwindcss/oxide-darwin-arm64": "4.1.18",
        "@tailwindcss/oxide-darwin-x64": "4.1.18",
        "@tailwindcss/oxide-freebsd-x64": "4.1.18",
        "@tailwindcss/oxide-linux-arm-gnueabihf": "4.1.18",
        "@tailwindcss/oxide-linux-arm64-gnu": "4.1.18",
        "@tailwindcss/oxide-linux-arm64-musl": "4.1.18",
        "@tailwindcss/oxide-linux-x64-gnu": "4.1.18",
        "@tailwindcss/oxide-linux-x64-musl": "4.1.18",
        "@tailwindcss/oxide-wasm32-wasi": "4.1.18",
        "@tailwindcss/oxide-win32-arm64-msvc": "4.1.18",
        "@tailwindcss/oxide-win32-x64-msvc": "4.1.18"
      }
    },
    "node_modules/@tailwindcss/oxide-android-arm64": {
      "version": "4.1.18",
      "resolved": "https://registry.npmjs.org/@tailwindcss/oxide-android-arm64/-/oxide-android-arm64-4.1.18.tgz",
      "integrity": "sha512-dJHz7+Ugr9U/diKJA0W6N/6/cjI+ZTAoxPf9Iz9BFRF2GzEX8IvXxFIi/dZBloVJX/MZGvRuFA9rqwdiIEZQ0Q==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "optional": true,
      "os": [
        "android"
      ],
      "engines": {
        "node": ">= 10"
      }
    },
    "node_modules/@tailwindcss/oxide-darwin-arm64": {
      "version": "4.1.18",
      "resolved": "https://registry.npmjs.org/@tailwindcss/oxide-darwin-arm64/-/oxide-darwin-arm64-4.1.18.tgz",
      "integrity": "sha512-Gc2q4Qhs660bhjyBSKgq6BYvwDz4G+BuyJ5H1xfhmDR3D8HnHCmT/BSkvSL0vQLy/nkMLY20PQ2OoYMO15Jd0A==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": ">= 10"
      }
    },
    "node_modules/@tailwindcss/oxide-darwin-x64": {
      "version": "4.1.18",
      "resolved": "https://registry.npmjs.org/@tailwindcss/oxide-darwin-x64/-/oxide-darwin-x64-4.1.18.tgz",
      "integrity": "sha512-FL5oxr2xQsFrc3X9o1fjHKBYBMD1QZNyc1Xzw/h5Qu4XnEBi3dZn96HcHm41c/euGV+GRiXFfh2hUCyKi/e+yw==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": ">= 10"
      }
    },
    "node_modules/@tailwindcss/oxide-freebsd-x64": {
      "version": "4.1.18",
      "resolved": "https://registry.npmjs.org/@tailwindcss/oxide-freebsd-x64/-/oxide-freebsd-x64-4.1.18.tgz",
      "integrity": "sha512-Fj+RHgu5bDodmV1dM9yAxlfJwkkWvLiRjbhuO2LEtwtlYlBgiAT4x/j5wQr1tC3SANAgD+0YcmWVrj8R9trVMA==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "optional": true,
      "os": [
        "freebsd"
      ],
      "engines": {
        "node": ">= 10"
      }
    },
    "node_modules/@tailwindcss/oxide-linux-arm-gnueabihf": {
      "version": "4.1.18",
      "resolved": "https://registry.npmjs.org/@tailwindcss/oxide-linux-arm-gnueabihf/-/oxide-linux-arm-gnueabihf-4.1.18.tgz",
      "integrity": "sha512-Fp+Wzk/Ws4dZn+LV2Nqx3IilnhH51YZoRaYHQsVq3RQvEl+71VGKFpkfHrLM/Li+kt5c0DJe/bHXK1eHgDmdiA==",
      "cpu": [
        "arm"
      ],
      "dev": true,
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 10"
      }
    },
    "node_modules/@tailwindcss/oxide-linux-arm64-gnu": {
      "version": "4.1.18",
      "resolved": "https://registry.npmjs.org/@tailwindcss/oxide-linux-arm64-gnu/-/oxide-linux-arm64-gnu-4.1.18.tgz",
      "integrity": "sha512-S0n3jboLysNbh55Vrt7pk9wgpyTTPD0fdQeh7wQfMqLPM/Hrxi+dVsLsPrycQjGKEQk85Kgbx+6+QnYNiHalnw==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 10"
      }
    },
    "node_modules/@tailwindcss/oxide-linux-arm64-musl": {
      "version": "4.1.18",
      "resolved": "https://registry.npmjs.org/@tailwindcss/oxide-linux-arm64-musl/-/oxide-linux-arm64-musl-4.1.18.tgz",
      "integrity": "sha512-1px92582HkPQlaaCkdRcio71p8bc8i/ap5807tPRDK/uw953cauQBT8c5tVGkOwrHMfc2Yh6UuxaH4vtTjGvHg==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 10"
      }
    },
    "node_modules/@tailwindcss/oxide-linux-x64-gnu": {
      "version": "4.1.18",
      "resolved": "https://registry.npmjs.org/@tailwindcss/oxide-linux-x64-gnu/-/oxide-linux-x64-gnu-4.1.18.tgz",
      "integrity": "sha512-v3gyT0ivkfBLoZGF9LyHmts0Isc8jHZyVcbzio6Wpzifg/+5ZJpDiRiUhDLkcr7f/r38SWNe7ucxmGW3j3Kb/g==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 10"
      }
    },
    "node_modules/@tailwindcss/oxide-linux-x64-musl": {
      "version": "4.1.18",
      "resolved": "https://registry.npmjs.org/@tailwindcss/oxide-linux-x64-musl/-/oxide-linux-x64-musl-4.1.18.tgz",
      "integrity": "sha512-bhJ2y2OQNlcRwwgOAGMY0xTFStt4/wyU6pvI6LSuZpRgKQwxTec0/3Scu91O8ir7qCR3AuepQKLU/kX99FouqQ==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 10"
      }
    },
    "node_modules/@tailwindcss/oxide-wasm32-wasi": {
      "version": "4.1.18",
      "resolved": "https://registry.npmjs.org/@tailwindcss/oxide-wasm32-wasi/-/oxide-wasm32-wasi-4.1.18.tgz",
      "integrity": "sha512-LffYTvPjODiP6PT16oNeUQJzNVyJl1cjIebq/rWWBF+3eDst5JGEFSc5cWxyRCJ0Mxl+KyIkqRxk1XPEs9x8TA==",
      "bundleDependencies": [
        "@napi-rs/wasm-runtime",
        "@emnapi/core",
        "@emnapi/runtime",
        "@tybys/wasm-util",
        "@emnapi/wasi-threads",
        "tslib"
      ],
      "cpu": [
        "wasm32"
      ],
      "dev": true,
      "optional": true,
      "dependencies": {
        "@emnapi/core": "^1.7.1",
        "@emnapi/runtime": "^1.7.1",
        "@emnapi/wasi-threads": "^1.1.0",
        "@napi-rs/wasm-runtime": "^1.1.0",
        "@tybys/wasm-util": "^0.10.1",
        "tslib": "^2.4.0"
      },
      "engines": {
        "node": ">=14.0.0"
      }
    },
    "node_modules/@tailwindcss/oxide-win32-arm64-msvc": {
      "version": "4.1.18",
      "resolved": "https://registry.npmjs.org/@tailwindcss/oxide-win32-arm64-msvc/-/oxide-win32-arm64-msvc-4.1.18.tgz",
      "integrity": "sha512-HjSA7mr9HmC8fu6bdsZvZ+dhjyGCLdotjVOgLA2vEqxEBZaQo9YTX4kwgEvPCpRh8o4uWc4J/wEoFzhEmjvPbA==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": ">= 10"
      }
    },
    "node_modules/@tailwindcss/oxide-win32-x64-msvc": {
      "version": "4.1.18",
      "resolved": "https://registry.npmjs.org/@tailwindcss/oxide-win32-x64-msvc/-/oxide-win32-x64-msvc-4.1.18.tgz",
      "integrity": "sha512-bJWbyYpUlqamC8dpR7pfjA0I7vdF6t5VpUGMWRkXVE3AXgIZjYUYAK7II1GNaxR8J1SSrSrppRar8G++JekE3Q==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": ">= 10"
      }
    },
    "node_modules/@tailwindcss/postcss": {
      "version": "4.1.18",
      "resolved": "https://registry.npmjs.org/@tailwindcss/postcss/-/postcss-4.1.18.tgz",
      "integrity": "sha512-Ce0GFnzAOuPyfV5SxjXGn0CubwGcuDB0zcdaPuCSzAa/2vII24JTkH+I6jcbXLb1ctjZMZZI6OjDaLPJQL1S0g==",
      "dev": true,
      "dependencies": {
        "@alloc/quick-lru": "^5.2.0",
        "@tailwindcss/node": "4.1.18",
        "@tailwindcss/oxide": "4.1.18",
        "postcss": "^8.4.41",
        "tailwindcss": "4.1.18"
      }
    },
    "node_modules/@tybys/wasm-util": {
      "version": "0.10.1",
      "resolved": "https://registry.npmjs.org/@tybys/wasm-util/-/wasm-util-0.10.1.tgz",
      "integrity": "sha512-9tTaPJLSiejZKx+Bmog4uSubteqTvFrVrURwkmHixBo0G4seD0zUxp98E1DzUBJxLQ3NPwXrGKDiVjwx/DpPsg==",
      "dev": true,
      "optional": true,
      "dependencies": {
        "tslib": "^2.4.0"
      }
    },
    "node_modules/@types/d3-array": {
      "version": "3.2.2",
      "resolved": "https://registry.npmjs.org/@types/d3-array/-/d3-array-3.2.2.tgz",
      "integrity": "sha512-hOLWVbm7uRza0BYXpIIW5pxfrKe0W+D5lrFiAEYR+pb6w3N2SwSMaJbXdUfSEv+dT4MfHBLtn5js0LAWaO6otw=="
    },
    "node_modules/@types/d3-color": {
      "version": "3.1.3",
      "resolved": "https://registry.npmjs.org/@types/d3-color/-/d3-color-3.1.3.tgz",
      "integrity": "sha512-iO90scth9WAbmgv7ogoq57O9YpKmFBbmoEoCHDB2xMBY0+/KVrqAaCDyCE16dUspeOvIxFFRI+0sEtqDqy2b4A=="
    },
    "node_modules/@types/d3-ease": {
      "version": "3.0.2",
      "resolved": "https://registry.npmjs.org/@types/d3-ease/-/d3-ease-3.0.2.tgz",
      "integrity": "sha512-NcV1JjO5oDzoK26oMzbILE6HW7uVXOHLQvHshBUW4UMdZGfiY6v5BeQwh9a9tCzv+CeefZQHJt5SRgK154RtiA=="
    },
    "node_modules/@types/d3-interpolate": {
      "version": "3.0.4",
      "resolved": "https://registry.npmjs.org/@types/d3-interpolate/-/d3-interpolate-3.0.4.tgz",
      "integrity": "sha512-mgLPETlrpVV1YRJIglr4Ez47g7Yxjl1lj7YKsiMCb27VJH9W8NVM6Bb9d8kkpG/uAQS5AmbA48q2IAolKKo1MA==",
      "dependencies": {
        "@types/d3-color": "*"
      }
    },
    "node_modules/@types/d3-path": {
      "version": "3.1.1",
      "resolved": "https://registry.npmjs.org/@types/d3-path/-/d3-path-3.1.1.tgz",
      "integrity": "sha512-VMZBYyQvbGmWyWVea0EHs/BwLgxc+MKi1zLDCONksozI4YJMcTt8ZEuIR4Sb1MMTE8MMW49v0IwI5+b7RmfWlg=="
    },
    "node_modules/@types/d3-scale": {
      "version": "4.0.9",
      "resolved": "https://registry.npmjs.org/@types/d3-scale/-/d3-scale-4.0.9.tgz",
      "integrity": "sha512-dLmtwB8zkAeO/juAMfnV+sItKjlsw2lKdZVVy6LRr0cBmegxSABiLEpGVmSJJ8O08i4+sGR6qQtb6WtuwJdvVw==",
      "dependencies": {
        "@types/d3-time": "*"
      }
    },
    "node_modules/@types/d3-shape": {
      "version": "3.1.7",
      "resolved": "https://registry.npmjs.org/@types/d3-shape/-/d3-shape-3.1.7.tgz",
      "integrity": "sha512-VLvUQ33C+3J+8p+Daf+nYSOsjB4GXp19/S/aGo60m9h1v6XaxjiT82lKVWJCfzhtuZ3yD7i/TPeC/fuKLLOSmg==",
      "dependencies": {
        "@types/d3-path": "*"
      }
    },
    "node_modules/@types/d3-time": {
      "version": "3.0.4",
      "resolved": "https://registry.npmjs.org/@types/d3-time/-/d3-time-3.0.4.tgz",
      "integrity": "sha512-yuzZug1nkAAaBlBBikKZTgzCeA+k1uy4ZFwWANOfKw5z5LRhV0gNA7gNkKm7HoK+HRN0wX3EkxGk0fpbWhmB7g=="
    },
    "node_modules/@types/d3-timer": {
      "version": "3.0.2",
      "resolved": "https://registry.npmjs.org/@types/d3-timer/-/d3-timer-3.0.2.tgz",
      "integrity": "sha512-Ps3T8E8dZDam6fUyNiMkekK3XUsaUEik+idO9/YjPtfj2qruF8tFBXS7XhtE4iIXBLxhmLjP3SXpLhVf21I9Lw=="
    },
    "node_modules/@types/estree": {
      "version": "1.0.8",
      "resolved": "https://registry.npmjs.org/@types/estree/-/estree-1.0.8.tgz",
      "integrity": "sha512-dWHzHa2WqEXI/O1E9OjrocMTKJl2mSrEolh1Iomrv6U+JuNwaHXsXx9bLu5gG7BUWFIN0skIQJQ/L1rIex4X6w==",
      "dev": true
    },
    "node_modules/@types/json-schema": {
      "version": "7.0.15",
      "resolved": "https://registry.npmjs.org/@types/json-schema/-/json-schema-7.0.15.tgz",
      "integrity": "sha512-5+fP8P8MFNC+AyZCDxrB2pkZFPGzqQWUzpSeuuVLvm8VMcorNYavBqoFcxK8bQz4Qsbn4oUEEem4wDLfcysGHA==",
      "dev": true
    },
    "node_modules/@types/json5": {
      "version": "0.0.29",
      "resolved": "https://registry.npmjs.org/@types/json5/-/json5-0.0.29.tgz",
      "integrity": "sha512-dRLjCWHYg4oaA77cxO64oO+7JwCwnIzkZPdrrC71jQmQtlhM556pwKo5bUzqvZndkVbeFLIIi+9TC40JNF5hNQ==",
      "dev": true
    },
    "node_modules/@types/node": {
      "version": "20.19.27",
      "resolved": "https://registry.npmjs.org/@types/node/-/node-20.19.27.tgz",
      "integrity": "sha512-N2clP5pJhB2YnZJ3PIHFk5RkygRX5WO/5f0WC08tp0wd+sv0rsJk3MqWn3CbNmT2J505a5336jaQj4ph1AdMug==",
      "dev": true,
      "dependencies": {
        "undici-types": "~6.21.0"
      }
    },
    "node_modules/@types/react": {
      "version": "19.2.7",
      "resolved": "https://registry.npmjs.org/@types/react/-/react-19.2.7.tgz",
      "integrity": "sha512-MWtvHrGZLFttgeEj28VXHxpmwYbor/ATPYbBfSFZEIRK0ecCFLl2Qo55z52Hss+UV9CRN7trSeq1zbgx7YDWWg==",
      "devOptional": true,
      "dependencies": {
        "csstype": "^3.2.2"
      }
    },
    "node_modules/@types/react-dom": {
      "version": "19.2.3",
      "resolved": "https://registry.npmjs.org/@types/react-dom/-/react-dom-19.2.3.tgz",
      "integrity": "sha512-jp2L/eY6fn+KgVVQAOqYItbF0VY/YApe5Mz2F0aykSO8gx31bYCZyvSeYxCHKvzHG5eZjc+zyaS5BrBWya2+kQ==",
      "dev": true,
      "peerDependencies": {
        "@types/react": "^19.2.0"
      }
    },
    "node_modules/@types/use-sync-external-store": {
      "version": "0.0.6",
      "resolved": "https://registry.npmjs.org/@types/use-sync-external-store/-/use-sync-external-store-0.0.6.tgz",
      "integrity": "sha512-zFDAD+tlpf2r4asuHEj0XH6pY6i0g5NeAHPn+15wk3BV6JA69eERFXC1gyGThDkVa1zCyKr5jox1+2LbV/AMLg=="
    },
    "node_modules/@typescript-eslint/eslint-plugin": {
      "version": "8.50.0",
      "resolved": "https://registry.npmjs.org/@typescript-eslint/eslint-plugin/-/eslint-plugin-8.50.0.tgz",
      "integrity": "sha512-O7QnmOXYKVtPrfYzMolrCTfkezCJS9+ljLdKW/+DCvRsc3UAz+sbH6Xcsv7p30+0OwUbeWfUDAQE0vpabZ3QLg==",
      "dev": true,
      "dependencies": {
        "@eslint-community/regexpp": "^4.10.0",
        "@typescript-eslint/scope-manager": "8.50.0",
        "@typescript-eslint/type-utils": "8.50.0",
        "@typescript-eslint/utils": "8.50.0",
        "@typescript-eslint/visitor-keys": "8.50.0",
        "ignore": "^7.0.0",
        "natural-compare": "^1.4.0",
        "ts-api-utils": "^2.1.0"
      },
      "engines": {
        "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/typescript-eslint"
      },
      "peerDependencies": {
        "@typescript-eslint/parser": "^8.50.0",
        "eslint": "^8.57.0 || ^9.0.0",
        "typescript": ">=4.8.4 <6.0.0"
      }
    },
    "node_modules/@typescript-eslint/eslint-plugin/node_modules/ignore": {
      "version": "7.0.5",
      "resolved": "https://registry.npmjs.org/ignore/-/ignore-7.0.5.tgz",
      "integrity": "sha512-Hs59xBNfUIunMFgWAbGX5cq6893IbWg4KnrjbYwX3tx0ztorVgTDA6B2sxf8ejHJ4wz8BqGUMYlnzNBer5NvGg==",
      "dev": true,
      "engines": {
        "node": ">= 4"
      }
    },
    "node_modules/@typescript-eslint/parser": {
      "version": "8.50.0",
      "resolved": "https://registry.npmjs.org/@typescript-eslint/parser/-/parser-8.50.0.tgz",
      "integrity": "sha512-6/cmF2piao+f6wSxUsJLZjck7OQsYyRtcOZS02k7XINSNlz93v6emM8WutDQSXnroG2xwYlEVHJI+cPA7CPM3Q==",
      "dev": true,
      "dependencies": {
        "@typescript-eslint/scope-manager": "8.50.0",
        "@typescript-eslint/types": "8.50.0",
        "@typescript-eslint/typescript-estree": "8.50.0",
        "@typescript-eslint/visitor-keys": "8.50.0",
        "debug": "^4.3.4"
      },
      "engines": {
        "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/typescript-eslint"
      },
      "peerDependencies": {
        "eslint": "^8.57.0 || ^9.0.0",
        "typescript": ">=4.8.4 <6.0.0"
      }
    },
    "node_modules/@typescript-eslint/project-service": {
      "version": "8.50.0",
      "resolved": "https://registry.npmjs.org/@typescript-eslint/project-service/-/project-service-8.50.0.tgz",
      "integrity": "sha512-Cg/nQcL1BcoTijEWyx4mkVC56r8dj44bFDvBdygifuS20f3OZCHmFbjF34DPSi07kwlFvqfv/xOLnJ5DquxSGQ==",
      "dev": true,
      "dependencies": {
        "@typescript-eslint/tsconfig-utils": "^8.50.0",
        "@typescript-eslint/types": "^8.50.0",
        "debug": "^4.3.4"
      },
      "engines": {
        "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/typescript-eslint"
      },
      "peerDependencies": {
        "typescript": ">=4.8.4 <6.0.0"
      }
    },
    "node_modules/@typescript-eslint/scope-manager": {
      "version": "8.50.0",
      "resolved": "https://registry.npmjs.org/@typescript-eslint/scope-manager/-/scope-manager-8.50.0.tgz",
      "integrity": "sha512-xCwfuCZjhIqy7+HKxBLrDVT5q/iq7XBVBXLn57RTIIpelLtEIZHXAF/Upa3+gaCpeV1NNS5Z9A+ID6jn50VD4A==",
      "dev": true,
      "dependencies": {
        "@typescript-eslint/types": "8.50.0",
        "@typescript-eslint/visitor-keys": "8.50.0"
      },
      "engines": {
        "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/typescript-eslint"
      }
    },
    "node_modules/@typescript-eslint/tsconfig-utils": {
      "version": "8.50.0",
      "resolved": "https://registry.npmjs.org/@typescript-eslint/tsconfig-utils/-/tsconfig-utils-8.50.0.tgz",
      "integrity": "sha512-vxd3G/ybKTSlm31MOA96gqvrRGv9RJ7LGtZCn2Vrc5htA0zCDvcMqUkifcjrWNNKXHUU3WCkYOzzVSFBd0wa2w==",
      "dev": true,
      "engines": {
        "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/typescript-eslint"
      },
      "peerDependencies": {
        "typescript": ">=4.8.4 <6.0.0"
      }
    },
    "node_modules/@typescript-eslint/type-utils": {
      "version": "8.50.0",
      "resolved": "https://registry.npmjs.org/@typescript-eslint/type-utils/-/type-utils-8.50.0.tgz",
      "integrity": "sha512-7OciHT2lKCewR0mFoBrvZJ4AXTMe/sYOe87289WAViOocEmDjjv8MvIOT2XESuKj9jp8u3SZYUSh89QA4S1kQw==",
      "dev": true,
      "dependencies": {
        "@typescript-eslint/types": "8.50.0",
        "@typescript-eslint/typescript-estree": "8.50.0",
        "@typescript-eslint/utils": "8.50.0",
        "debug": "^4.3.4",
        "ts-api-utils": "^2.1.0"
      },
      "engines": {
        "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/typescript-eslint"
      },
      "peerDependencies": {
        "eslint": "^8.57.0 || ^9.0.0",
        "typescript": ">=4.8.4 <6.0.0"
      }
    },
    "node_modules/@typescript-eslint/types": {
      "version": "8.50.0",
      "resolved": "https://registry.npmjs.org/@typescript-eslint/types/-/types-8.50.0.tgz",
      "integrity": "sha512-iX1mgmGrXdANhhITbpp2QQM2fGehBse9LbTf0sidWK6yg/NE+uhV5dfU1g6EYPlcReYmkE9QLPq/2irKAmtS9w==",
      "dev": true,
      "engines": {
        "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/typescript-eslint"
      }
    },
    "node_modules/@typescript-eslint/typescript-estree": {
      "version": "8.50.0",
      "resolved": "https://registry.npmjs.org/@typescript-eslint/typescript-estree/-/typescript-estree-8.50.0.tgz",
      "integrity": "sha512-W7SVAGBR/IX7zm1t70Yujpbk+zdPq/u4soeFSknWFdXIFuWsBGBOUu/Tn/I6KHSKvSh91OiMuaSnYp3mtPt5IQ==",
      "dev": true,
      "dependencies": {
        "@typescript-eslint/project-service": "8.50.0",
        "@typescript-eslint/tsconfig-utils": "8.50.0",
        "@typescript-eslint/types": "8.50.0",
        "@typescript-eslint/visitor-keys": "8.50.0",
        "debug": "^4.3.4",
        "minimatch": "^9.0.4",
        "semver": "^7.6.0",
        "tinyglobby": "^0.2.15",
        "ts-api-utils": "^2.1.0"
      },
      "engines": {
        "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/typescript-eslint"
      },
      "peerDependencies": {
        "typescript": ">=4.8.4 <6.0.0"
      }
    },
    "node_modules/@typescript-eslint/typescript-estree/node_modules/brace-expansion": {
      "version": "2.0.2",
      "resolved": "https://registry.npmjs.org/brace-expansion/-/brace-expansion-2.0.2.tgz",
      "integrity": "sha512-Jt0vHyM+jmUBqojB7E1NIYadt0vI0Qxjxd2TErW94wDz+E2LAm5vKMXXwg6ZZBTHPuUlDgQHKXvjGBdfcF1ZDQ==",
      "dev": true,
      "dependencies": {
        "balanced-match": "^1.0.0"
      }
    },
    "node_modules/@typescript-eslint/typescript-estree/node_modules/minimatch": {
      "version": "9.0.5",
      "resolved": "https://registry.npmjs.org/minimatch/-/minimatch-9.0.5.tgz",
      "integrity": "sha512-G6T0ZX48xgozx7587koeX9Ys2NYy6Gmv//P89sEte9V9whIapMNF4idKxnW2QtCcLiTWlb/wfCabAtAFWhhBow==",
      "dev": true,
      "dependencies": {
        "brace-expansion": "^2.0.1"
      },
      "engines": {
        "node": ">=16 || 14 >=14.17"
      },
      "funding": {
        "url": "https://github.com/sponsors/isaacs"
      }
    },
    "node_modules/@typescript-eslint/typescript-estree/node_modules/semver": {
      "version": "7.7.3",
      "resolved": "https://registry.npmjs.org/semver/-/semver-7.7.3.tgz",
      "integrity": "sha512-SdsKMrI9TdgjdweUSR9MweHA4EJ8YxHn8DFaDisvhVlUOe4BF1tLD7GAj0lIqWVl+dPb/rExr0Btby5loQm20Q==",
      "dev": true,
      "bin": {
        "semver": "bin/semver.js"
      },
      "engines": {
        "node": ">=10"
      }
    },
    "node_modules/@typescript-eslint/utils": {
      "version": "8.50.0",
      "resolved": "https://registry.npmjs.org/@typescript-eslint/utils/-/utils-8.50.0.tgz",
      "integrity": "sha512-87KgUXET09CRjGCi2Ejxy3PULXna63/bMYv72tCAlDJC3Yqwln0HiFJ3VJMst2+mEtNtZu5oFvX4qJGjKsnAgg==",
      "dev": true,
      "dependencies": {
        "@eslint-community/eslint-utils": "^4.7.0",
        "@typescript-eslint/scope-manager": "8.50.0",
        "@typescript-eslint/types": "8.50.0",
        "@typescript-eslint/typescript-estree": "8.50.0"
      },
      "engines": {
        "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/typescript-eslint"
      },
      "peerDependencies": {
        "eslint": "^8.57.0 || ^9.0.0",
        "typescript": ">=4.8.4 <6.0.0"
      }
    },
    "node_modules/@typescript-eslint/visitor-keys": {
      "version": "8.50.0",
      "resolved": "https://registry.npmjs.org/@typescript-eslint/visitor-keys/-/visitor-keys-8.50.0.tgz",
      "integrity": "sha512-Xzmnb58+Db78gT/CCj/PVCvK+zxbnsw6F+O1oheYszJbBSdEjVhQi3C/Xttzxgi/GLmpvOggRs1RFpiJ8+c34Q==",
      "dev": true,
      "dependencies": {
        "@typescript-eslint/types": "8.50.0",
        "eslint-visitor-keys": "^4.2.1"
      },
      "engines": {
        "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/typescript-eslint"
      }
    },
    "node_modules/@unrs/resolver-binding-android-arm-eabi": {
      "version": "1.11.1",
      "resolved": "https://registry.npmjs.org/@unrs/resolver-binding-android-arm-eabi/-/resolver-binding-android-arm-eabi-1.11.1.tgz",
      "integrity": "sha512-ppLRUgHVaGRWUx0R0Ut06Mjo9gBaBkg3v/8AxusGLhsIotbBLuRk51rAzqLC8gq6NyyAojEXglNjzf6R948DNw==",
      "cpu": [
        "arm"
      ],
      "dev": true,
      "optional": true,
      "os": [
        "android"
      ]
    },
    "node_modules/@unrs/resolver-binding-android-arm64": {
      "version": "1.11.1",
      "resolved": "https://registry.npmjs.org/@unrs/resolver-binding-android-arm64/-/resolver-binding-android-arm64-1.11.1.tgz",
      "integrity": "sha512-lCxkVtb4wp1v+EoN+HjIG9cIIzPkX5OtM03pQYkG+U5O/wL53LC4QbIeazgiKqluGeVEeBlZahHalCaBvU1a2g==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "optional": true,
      "os": [
        "android"
      ]
    },
    "node_modules/@unrs/resolver-binding-darwin-arm64": {
      "version": "1.11.1",
      "resolved": "https://registry.npmjs.org/@unrs/resolver-binding-darwin-arm64/-/resolver-binding-darwin-arm64-1.11.1.tgz",
      "integrity": "sha512-gPVA1UjRu1Y/IsB/dQEsp2V1pm44Of6+LWvbLc9SDk1c2KhhDRDBUkQCYVWe6f26uJb3fOK8saWMgtX8IrMk3g==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "optional": true,
      "os": [
        "darwin"
      ]
    },
    "node_modules/@unrs/resolver-binding-darwin-x64": {
      "version": "1.11.1",
      "resolved": "https://registry.npmjs.org/@unrs/resolver-binding-darwin-x64/-/resolver-binding-darwin-x64-1.11.1.tgz",
      "integrity": "sha512-cFzP7rWKd3lZaCsDze07QX1SC24lO8mPty9vdP+YVa3MGdVgPmFc59317b2ioXtgCMKGiCLxJ4HQs62oz6GfRQ==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "optional": true,
      "os": [
        "darwin"
      ]
    },
    "node_modules/@unrs/resolver-binding-freebsd-x64": {
      "version": "1.11.1",
      "resolved": "https://registry.npmjs.org/@unrs/resolver-binding-freebsd-x64/-/resolver-binding-freebsd-x64-1.11.1.tgz",
      "integrity": "sha512-fqtGgak3zX4DCB6PFpsH5+Kmt/8CIi4Bry4rb1ho6Av2QHTREM+47y282Uqiu3ZRF5IQioJQ5qWRV6jduA+iGw==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "optional": true,
      "os": [
        "freebsd"
      ]
    },
    "node_modules/@unrs/resolver-binding-linux-arm-gnueabihf": {
      "version": "1.11.1",
      "resolved": "https://registry.npmjs.org/@unrs/resolver-binding-linux-arm-gnueabihf/-/resolver-binding-linux-arm-gnueabihf-1.11.1.tgz",
      "integrity": "sha512-u92mvlcYtp9MRKmP+ZvMmtPN34+/3lMHlyMj7wXJDeXxuM0Vgzz0+PPJNsro1m3IZPYChIkn944wW8TYgGKFHw==",
      "cpu": [
        "arm"
      ],
      "dev": true,
      "optional": true,
      "os": [
        "linux"
      ]
    },
    "node_modules/@unrs/resolver-binding-linux-arm-musleabihf": {
      "version": "1.11.1",
      "resolved": "https://registry.npmjs.org/@unrs/resolver-binding-linux-arm-musleabihf/-/resolver-binding-linux-arm-musleabihf-1.11.1.tgz",
      "integrity": "sha512-cINaoY2z7LVCrfHkIcmvj7osTOtm6VVT16b5oQdS4beibX2SYBwgYLmqhBjA1t51CarSaBuX5YNsWLjsqfW5Cw==",
      "cpu": [
        "arm"
      ],
      "dev": true,
      "optional": true,
      "os": [
        "linux"
      ]
    },
    "node_modules/@unrs/resolver-binding-linux-arm64-gnu": {
      "version": "1.11.1",
      "resolved": "https://registry.npmjs.org/@unrs/resolver-binding-linux-arm64-gnu/-/resolver-binding-linux-arm64-gnu-1.11.1.tgz",
      "integrity": "sha512-34gw7PjDGB9JgePJEmhEqBhWvCiiWCuXsL9hYphDF7crW7UgI05gyBAi6MF58uGcMOiOqSJ2ybEeCvHcq0BCmQ==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "optional": true,
      "os": [
        "linux"
      ]
    },
    "node_modules/@unrs/resolver-binding-linux-arm64-musl": {
      "version": "1.11.1",
      "resolved": "https://registry.npmjs.org/@unrs/resolver-binding-linux-arm64-musl/-/resolver-binding-linux-arm64-musl-1.11.1.tgz",
      "integrity": "sha512-RyMIx6Uf53hhOtJDIamSbTskA99sPHS96wxVE/bJtePJJtpdKGXO1wY90oRdXuYOGOTuqjT8ACccMc4K6QmT3w==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "optional": true,
      "os": [
        "linux"
      ]
    },
    "node_modules/@unrs/resolver-binding-linux-ppc64-gnu": {
      "version": "1.11.1",
      "resolved": "https://registry.npmjs.org/@unrs/resolver-binding-linux-ppc64-gnu/-/resolver-binding-linux-ppc64-gnu-1.11.1.tgz",
      "integrity": "sha512-D8Vae74A4/a+mZH0FbOkFJL9DSK2R6TFPC9M+jCWYia/q2einCubX10pecpDiTmkJVUH+y8K3BZClycD8nCShA==",
      "cpu": [
        "ppc64"
      ],
      "dev": true,
      "optional": true,
      "os": [
        "linux"
      ]
    },
    "node_modules/@unrs/resolver-binding-linux-riscv64-gnu": {
      "version": "1.11.1",
      "resolved": "https://registry.npmjs.org/@unrs/resolver-binding-linux-riscv64-gnu/-/resolver-binding-linux-riscv64-gnu-1.11.1.tgz",
      "integrity": "sha512-frxL4OrzOWVVsOc96+V3aqTIQl1O2TjgExV4EKgRY09AJ9leZpEg8Ak9phadbuX0BA4k8U5qtvMSQQGGmaJqcQ==",
      "cpu": [
        "riscv64"
      ],
      "dev": true,
      "optional": true,
      "os": [
        "linux"
      ]
    },
    "node_modules/@unrs/resolver-binding-linux-riscv64-musl": {
      "version": "1.11.1",
      "resolved": "https://registry.npmjs.org/@unrs/resolver-binding-linux-riscv64-musl/-/resolver-binding-linux-riscv64-musl-1.11.1.tgz",
      "integrity": "sha512-mJ5vuDaIZ+l/acv01sHoXfpnyrNKOk/3aDoEdLO/Xtn9HuZlDD6jKxHlkN8ZhWyLJsRBxfv9GYM2utQ1SChKew==",
      "cpu": [
        "riscv64"
      ],
      "dev": true,
      "optional": true,
      "os": [
        "linux"
      ]
    },
    "node_modules/@unrs/resolver-binding-linux-s390x-gnu": {
      "version": "1.11.1",
      "resolved": "https://registry.npmjs.org/@unrs/resolver-binding-linux-s390x-gnu/-/resolver-binding-linux-s390x-gnu-1.11.1.tgz",
      "integrity": "sha512-kELo8ebBVtb9sA7rMe1Cph4QHreByhaZ2QEADd9NzIQsYNQpt9UkM9iqr2lhGr5afh885d/cB5QeTXSbZHTYPg==",
      "cpu": [
        "s390x"
      ],
      "dev": true,
      "optional": true,
      "os": [
        "linux"
      ]
    },
    "node_modules/@unrs/resolver-binding-linux-x64-gnu": {
      "version": "1.11.1",
      "resolved": "https://registry.npmjs.org/@unrs/resolver-binding-linux-x64-gnu/-/resolver-binding-linux-x64-gnu-1.11.1.tgz",
      "integrity": "sha512-C3ZAHugKgovV5YvAMsxhq0gtXuwESUKc5MhEtjBpLoHPLYM+iuwSj3lflFwK3DPm68660rZ7G8BMcwSro7hD5w==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "optional": true,
      "os": [
        "linux"
      ]
    },
    "node_modules/@unrs/resolver-binding-linux-x64-musl": {
      "version": "1.11.1",
      "resolved": "https://registry.npmjs.org/@unrs/resolver-binding-linux-x64-musl/-/resolver-binding-linux-x64-musl-1.11.1.tgz",
      "integrity": "sha512-rV0YSoyhK2nZ4vEswT/QwqzqQXw5I6CjoaYMOX0TqBlWhojUf8P94mvI7nuJTeaCkkds3QE4+zS8Ko+GdXuZtA==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "optional": true,
      "os": [
        "linux"
      ]
    },
    "node_modules/@unrs/resolver-binding-wasm32-wasi": {
      "version": "1.11.1",
      "resolved": "https://registry.npmjs.org/@unrs/resolver-binding-wasm32-wasi/-/resolver-binding-wasm32-wasi-1.11.1.tgz",
      "integrity": "sha512-5u4RkfxJm+Ng7IWgkzi3qrFOvLvQYnPBmjmZQ8+szTK/b31fQCnleNl1GgEt7nIsZRIf5PLhPwT0WM+q45x/UQ==",
      "cpu": [
        "wasm32"
      ],
      "dev": true,
      "optional": true,
      "dependencies": {
        "@napi-rs/wasm-runtime": "^0.2.11"
      },
      "engines": {
        "node": ">=14.0.0"
      }
    },
    "node_modules/@unrs/resolver-binding-win32-arm64-msvc": {
      "version": "1.11.1",
      "resolved": "https://registry.npmjs.org/@unrs/resolver-binding-win32-arm64-msvc/-/resolver-binding-win32-arm64-msvc-1.11.1.tgz",
      "integrity": "sha512-nRcz5Il4ln0kMhfL8S3hLkxI85BXs3o8EYoattsJNdsX4YUU89iOkVn7g0VHSRxFuVMdM4Q1jEpIId1Ihim/Uw==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "optional": true,
      "os": [
        "win32"
      ]
    },
    "node_modules/@unrs/resolver-binding-win32-ia32-msvc": {
      "version": "1.11.1",
      "resolved": "https://registry.npmjs.org/@unrs/resolver-binding-win32-ia32-msvc/-/resolver-binding-win32-ia32-msvc-1.11.1.tgz",
      "integrity": "sha512-DCEI6t5i1NmAZp6pFonpD5m7i6aFrpofcp4LA2i8IIq60Jyo28hamKBxNrZcyOwVOZkgsRp9O2sXWBWP8MnvIQ==",
      "cpu": [
        "ia32"
      ],
      "dev": true,
      "optional": true,
      "os": [
        "win32"
      ]
    },
    "node_modules/@unrs/resolver-binding-win32-x64-msvc": {
      "version": "1.11.1",
      "resolved": "https://registry.npmjs.org/@unrs/resolver-binding-win32-x64-msvc/-/resolver-binding-win32-x64-msvc-1.11.1.tgz",
      "integrity": "sha512-lrW200hZdbfRtztbygyaq/6jP6AKE8qQN2KvPcJ+x7wiD038YtnYtZ82IMNJ69GJibV7bwL3y9FgK+5w/pYt6g==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "optional": true,
      "os": [
        "win32"
      ]
    },
    "node_modules/acorn": {
      "version": "8.15.0",
      "resolved": "https://registry.npmjs.org/acorn/-/acorn-8.15.0.tgz",
      "integrity": "sha512-NZyJarBfL7nWwIq+FDL6Zp/yHEhePMNnnJ0y3qfieCrmNvYct8uvtiV41UvlSe6apAfk0fY1FbWx+NwfmpvtTg==",
      "dev": true,
      "bin": {
        "acorn": "bin/acorn"
      },
      "engines": {
        "node": ">=0.4.0"
      }
    },
    "node_modules/acorn-jsx": {
      "version": "5.3.2",
      "resolved": "https://registry.npmjs.org/acorn-jsx/-/acorn-jsx-5.3.2.tgz",
      "integrity": "sha512-rq9s+JNhf0IChjtDXxllJ7g41oZk5SlXtp0LHwyA5cejwn7vKmKp4pPri6YEePv2PU65sAsegbXtIinmDFDXgQ==",
      "dev": true,
      "peerDependencies": {
        "acorn": "^6.0.0 || ^7.0.0 || ^8.0.0"
      }
    },
    "node_modules/ajv": {
      "version": "6.12.6",
      "resolved": "https://registry.npmjs.org/ajv/-/ajv-6.12.6.tgz",
      "integrity": "sha512-j3fVLgvTo527anyYyJOGTYJbG+vnnQYvE0m5mmkc1TK+nxAppkCLMIL0aZ4dblVCNoGShhm+kzE4ZUykBoMg4g==",
      "dev": true,
      "dependencies": {
        "fast-deep-equal": "^3.1.1",
        "fast-json-stable-stringify": "^2.0.0",
        "json-schema-traverse": "^0.4.1",
        "uri-js": "^4.2.2"
      },
      "funding": {
        "type": "github",
        "url": "https://github.com/sponsors/epoberezkin"
      }
    },
    "node_modules/ansi-styles": {
      "version": "4.3.0",
      "resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-4.3.0.tgz",
      "integrity": "sha512-zbB9rCJAT1rbjiVDb2hqKFHNYLxgtk8NURxZ3IZwD3F6NtxbXZQCnnSi1Lkx+IDohdPlFp222wVALIheZJQSEg==",
      "dev": true,
      "dependencies": {
        "color-convert": "^2.0.1"
      },
      "engines": {
        "node": ">=8"
      },
      "funding": {
        "url": "https://github.com/chalk/ansi-styles?sponsor=1"
      }
    },
    "node_modules/argparse": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/argparse/-/argparse-2.0.1.tgz",
      "integrity": "sha512-8+9WqebbFzpX9OR+Wa6O29asIogeRMzcGtAINdpMHHyAg10f05aSFVBbcEqGf/PXw1EjAZ+q2/bEBg3DvurK3Q==",
      "dev": true
    },
    "node_modules/aria-query": {
      "version": "5.3.2",
      "resolved": "https://registry.npmjs.org/aria-query/-/aria-query-5.3.2.tgz",
      "integrity": "sha512-COROpnaoap1E2F000S62r6A60uHZnmlvomhfyT2DlTcrY1OrBKn2UhH7qn5wTC9zMvD0AY7csdPSNwKP+7WiQw==",
      "dev": true,
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/array-buffer-byte-length": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/array-buffer-byte-length/-/array-buffer-byte-length-1.0.2.tgz",
      "integrity": "sha512-LHE+8BuR7RYGDKvnrmcuSq3tDcKv9OFEXQt/HpbZhY7V6h0zlUXutnAD82GiFx9rdieCMjkvtcsPqBwgUl1Iiw==",
      "dev": true,
      "dependencies": {
        "call-bound": "^1.0.3",
        "is-array-buffer": "^3.0.5"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/array-includes": {
      "version": "3.1.9",
      "resolved": "https://registry.npmjs.org/array-includes/-/array-includes-3.1.9.tgz",
      "integrity": "sha512-FmeCCAenzH0KH381SPT5FZmiA/TmpndpcaShhfgEN9eCVjnFBqq3l1xrI42y8+PPLI6hypzou4GXw00WHmPBLQ==",
      "dev": true,
      "dependencies": {
        "call-bind": "^1.0.8",
        "call-bound": "^1.0.4",
        "define-properties": "^1.2.1",
        "es-abstract": "^1.24.0",
        "es-object-atoms": "^1.1.1",
        "get-intrinsic": "^1.3.0",
        "is-string": "^1.1.1",
        "math-intrinsics": "^1.1.0"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/array.prototype.findlast": {
      "version": "1.2.5",
      "resolved": "https://registry.npmjs.org/array.prototype.findlast/-/array.prototype.findlast-1.2.5.tgz",
      "integrity": "sha512-CVvd6FHg1Z3POpBLxO6E6zr+rSKEQ9L6rZHAaY7lLfhKsWYUBBOuMs0e9o24oopj6H+geRCX0YJ+TJLBK2eHyQ==",
      "dev": true,
      "dependencies": {
        "call-bind": "^1.0.7",
        "define-properties": "^1.2.1",
        "es-abstract": "^1.23.2",
        "es-errors": "^1.3.0",
        "es-object-atoms": "^1.0.0",
        "es-shim-unscopables": "^1.0.2"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/array.prototype.findlastindex": {
      "version": "1.2.6",
      "resolved": "https://registry.npmjs.org/array.prototype.findlastindex/-/array.prototype.findlastindex-1.2.6.tgz",
      "integrity": "sha512-F/TKATkzseUExPlfvmwQKGITM3DGTK+vkAsCZoDc5daVygbJBnjEUCbgkAvVFsgfXfX4YIqZ/27G3k3tdXrTxQ==",
      "dev": true,
      "dependencies": {
        "call-bind": "^1.0.8",
        "call-bound": "^1.0.4",
        "define-properties": "^1.2.1",
        "es-abstract": "^1.23.9",
        "es-errors": "^1.3.0",
        "es-object-atoms": "^1.1.1",
        "es-shim-unscopables": "^1.1.0"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/array.prototype.flat": {
      "version": "1.3.3",
      "resolved": "https://registry.npmjs.org/array.prototype.flat/-/array.prototype.flat-1.3.3.tgz",
      "integrity": "sha512-rwG/ja1neyLqCuGZ5YYrznA62D4mZXg0i1cIskIUKSiqF3Cje9/wXAls9B9s1Wa2fomMsIv8czB8jZcPmxCXFg==",
      "dev": true,
      "dependencies": {
        "call-bind": "^1.0.8",
        "define-properties": "^1.2.1",
        "es-abstract": "^1.23.5",
        "es-shim-unscopables": "^1.0.2"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/array.prototype.flatmap": {
      "version": "1.3.3",
      "resolved": "https://registry.npmjs.org/array.prototype.flatmap/-/array.prototype.flatmap-1.3.3.tgz",
      "integrity": "sha512-Y7Wt51eKJSyi80hFrJCePGGNo5ktJCslFuboqJsbf57CCPcm5zztluPlc4/aD8sWsKvlwatezpV4U1efk8kpjg==",
      "dev": true,
      "dependencies": {
        "call-bind": "^1.0.8",
        "define-properties": "^1.2.1",
        "es-abstract": "^1.23.5",
        "es-shim-unscopables": "^1.0.2"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/array.prototype.tosorted": {
      "version": "1.1.4",
      "resolved": "https://registry.npmjs.org/array.prototype.tosorted/-/array.prototype.tosorted-1.1.4.tgz",
      "integrity": "sha512-p6Fx8B7b7ZhL/gmUsAy0D15WhvDccw3mnGNbZpi3pmeJdxtWsj2jEaI4Y6oo3XiHfzuSgPwKc04MYt6KgvC/wA==",
      "dev": true,
      "dependencies": {
        "call-bind": "^1.0.7",
        "define-properties": "^1.2.1",
        "es-abstract": "^1.23.3",
        "es-errors": "^1.3.0",
        "es-shim-unscopables": "^1.0.2"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/arraybuffer.prototype.slice": {
      "version": "1.0.4",
      "resolved": "https://registry.npmjs.org/arraybuffer.prototype.slice/-/arraybuffer.prototype.slice-1.0.4.tgz",
      "integrity": "sha512-BNoCY6SXXPQ7gF2opIP4GBE+Xw7U+pHMYKuzjgCN3GwiaIR09UUeKfheyIry77QtrCBlC0KK0q5/TER/tYh3PQ==",
      "dev": true,
      "dependencies": {
        "array-buffer-byte-length": "^1.0.1",
        "call-bind": "^1.0.8",
        "define-properties": "^1.2.1",
        "es-abstract": "^1.23.5",
        "es-errors": "^1.3.0",
        "get-intrinsic": "^1.2.6",
        "is-array-buffer": "^3.0.4"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/ast-types-flow": {
      "version": "0.0.8",
      "resolved": "https://registry.npmjs.org/ast-types-flow/-/ast-types-flow-0.0.8.tgz",
      "integrity": "sha512-OH/2E5Fg20h2aPrbe+QL8JZQFko0YZaF+j4mnQ7BGhfavO7OpSLa8a0y9sBwomHdSbkhTS8TQNayBfnW5DwbvQ==",
      "dev": true
    },
    "node_modules/async-function": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/async-function/-/async-function-1.0.0.tgz",
      "integrity": "sha512-hsU18Ae8CDTR6Kgu9DYf0EbCr/a5iGL0rytQDobUcdpYOKokk8LEjVphnXkDkgpi0wYVsqrXuP0bZxJaTqdgoA==",
      "dev": true,
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/available-typed-arrays": {
      "version": "1.0.7",
      "resolved": "https://registry.npmjs.org/available-typed-arrays/-/available-typed-arrays-1.0.7.tgz",
      "integrity": "sha512-wvUjBtSGN7+7SjNpq/9M2Tg350UZD3q62IFZLbRAR1bSMlCo1ZaeW+BJ+D090e4hIIZLBcTDWe4Mh4jvUDajzQ==",
      "dev": true,
      "dependencies": {
        "possible-typed-array-names": "^1.0.0"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/axe-core": {
      "version": "4.11.0",
      "resolved": "https://registry.npmjs.org/axe-core/-/axe-core-4.11.0.tgz",
      "integrity": "sha512-ilYanEU8vxxBexpJd8cWM4ElSQq4QctCLKih0TSfjIfCQTeyH/6zVrmIJfLPrKTKJRbiG+cfnZbQIjAlJmF1jQ==",
      "dev": true,
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/axobject-query": {
      "version": "4.1.0",
      "resolved": "https://registry.npmjs.org/axobject-query/-/axobject-query-4.1.0.tgz",
      "integrity": "sha512-qIj0G9wZbMGNLjLmg1PT6v2mE9AH2zlnADJD/2tC6E00hgmhUOfEB6greHPAfLRSufHqROIUTkw6E+M3lH0PTQ==",
      "dev": true,
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/balanced-match": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/balanced-match/-/balanced-match-1.0.2.tgz",
      "integrity": "sha512-3oSeUO0TMV67hN1AmbXsK4yaqU7tjiHlbxRDZOpH0KW9+CeX4bRAaX0Anxt0tx2MrpRpWwQaPwIlISEJhYU5Pw==",
      "dev": true
    },
    "node_modules/baseline-browser-mapping": {
      "version": "2.9.7",
      "resolved": "https://registry.npmjs.org/baseline-browser-mapping/-/baseline-browser-mapping-2.9.7.tgz",
      "integrity": "sha512-k9xFKplee6KIio3IDbwj+uaCLpqzOwakOgmqzPezM0sFJlFKcg30vk2wOiAJtkTSfx0SSQDSe8q+mWA/fSH5Zg==",
      "dev": true,
      "bin": {
        "baseline-browser-mapping": "dist/cli.js"
      }
    },
    "node_modules/brace-expansion": {
      "version": "1.1.12",
      "resolved": "https://registry.npmjs.org/brace-expansion/-/brace-expansion-1.1.12.tgz",
      "integrity": "sha512-9T9UjW3r0UW5c1Q7GTwllptXwhvYmEzFhzMfZ9H7FQWt+uZePjZPjBP/W1ZEyZ1twGWom5/56TF4lPcqjnDHcg==",
      "dev": true,
      "dependencies": {
        "balanced-match": "^1.0.0",
        "concat-map": "0.0.1"
      }
    },
    "node_modules/braces": {
      "version": "3.0.3",
      "resolved": "https://registry.npmjs.org/braces/-/braces-3.0.3.tgz",
      "integrity": "sha512-yQbXgO/OSZVD2IsiLlro+7Hf6Q18EJrKSEsdoMzKePKXct3gvD8oLcOQdIzGupr5Fj+EDe8gO/lxc1BzfMpxvA==",
      "dev": true,
      "dependencies": {
        "fill-range": "^7.1.1"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/browserslist": {
      "version": "4.28.1",
      "resolved": "https://registry.npmjs.org/browserslist/-/browserslist-4.28.1.tgz",
      "integrity": "sha512-ZC5Bd0LgJXgwGqUknZY/vkUQ04r8NXnJZ3yYi4vDmSiZmC/pdSN0NbNRPxZpbtO4uAfDUAFffO8IZoM3Gj8IkA==",
      "dev": true,
      "funding": [
        {
          "type": "opencollective",
          "url": "https://opencollective.com/browserslist"
        },
        {
          "type": "tidelift",
          "url": "https://tidelift.com/funding/github/npm/browserslist"
        },
        {
          "type": "github",
          "url": "https://github.com/sponsors/ai"
        }
      ],
      "dependencies": {
        "baseline-browser-mapping": "^2.9.0",
        "caniuse-lite": "^1.0.30001759",
        "electron-to-chromium": "^1.5.263",
        "node-releases": "^2.0.27",
        "update-browserslist-db": "^1.2.0"
      },
      "bin": {
        "browserslist": "cli.js"
      },
      "engines": {
        "node": "^6 || ^7 || ^8 || ^9 || ^10 || ^11 || ^12 || >=13.7"
      }
    },
    "node_modules/call-bind": {
      "version": "1.0.8",
      "resolved": "https://registry.npmjs.org/call-bind/-/call-bind-1.0.8.tgz",
      "integrity": "sha512-oKlSFMcMwpUg2ednkhQ454wfWiU/ul3CkJe/PEHcTKuiX6RpbehUiFMXu13HalGZxfUwCQzZG747YXBn1im9ww==",
      "dev": true,
      "dependencies": {
        "call-bind-apply-helpers": "^1.0.0",
        "es-define-property": "^1.0.0",
        "get-intrinsic": "^1.2.4",
        "set-function-length": "^1.2.2"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/call-bind-apply-helpers": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/call-bind-apply-helpers/-/call-bind-apply-helpers-1.0.2.tgz",
      "integrity": "sha512-Sp1ablJ0ivDkSzjcaJdxEunN5/XvksFJ2sMBFfq6x0ryhQV/2b/KwFe21cMpmHtPOSij8K99/wSfoEuTObmuMQ==",
      "dev": true,
      "dependencies": {
        "es-errors": "^1.3.0",
        "function-bind": "^1.1.2"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/call-bound": {
      "version": "1.0.4",
      "resolved": "https://registry.npmjs.org/call-bound/-/call-bound-1.0.4.tgz",
      "integrity": "sha512-+ys997U96po4Kx/ABpBCqhA9EuxJaQWDQg7295H4hBphv3IZg0boBKuwYpt4YXp6MZ5AmZQnU/tyMTlRpaSejg==",
      "dev": true,
      "dependencies": {
        "call-bind-apply-helpers": "^1.0.2",
        "get-intrinsic": "^1.3.0"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/callsites": {
      "version": "3.1.0",
      "resolved": "https://registry.npmjs.org/callsites/-/callsites-3.1.0.tgz",
      "integrity": "sha512-P8BjAsXvZS+VIDUI11hHCQEv74YT67YUi5JJFNWIqL235sBmjX4+qx9Muvls5ivyNENctx46xQLQ3aTuE7ssaQ==",
      "dev": true,
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/caniuse-lite": {
      "version": "1.0.30001760",
      "resolved": "https://registry.npmjs.org/caniuse-lite/-/caniuse-lite-1.0.30001760.tgz",
      "integrity": "sha512-7AAMPcueWELt1p3mi13HR/LHH0TJLT11cnwDJEs3xA4+CK/PLKeO9Kl1oru24htkyUKtkGCvAx4ohB0Ttry8Dw==",
      "funding": [
        {
          "type": "opencollective",
          "url": "https://opencollective.com/browserslist"
        },
        {
          "type": "tidelift",
          "url": "https://tidelift.com/funding/github/npm/caniuse-lite"
        },
        {
          "type": "github",
          "url": "https://github.com/sponsors/ai"
        }
      ]
    },
    "node_modules/chalk": {
      "version": "4.1.2",
      "resolved": "https://registry.npmjs.org/chalk/-/chalk-4.1.2.tgz",
      "integrity": "sha512-oKnbhFyRIXpUuez8iBMmyEa4nbj4IOQyuhc/wy9kY7/WVPcwIO9VA668Pu8RkO7+0G76SLROeyw9CpQ061i4mA==",
      "dev": true,
      "dependencies": {
        "ansi-styles": "^4.1.0",
        "supports-color": "^7.1.0"
      },
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/chalk/chalk?sponsor=1"
      }
    },
    "node_modules/client-only": {
      "version": "0.0.1",
      "resolved": "https://registry.npmjs.org/client-only/-/client-only-0.0.1.tgz",
      "integrity": "sha512-IV3Ou0jSMzZrd3pZ48nLkT9DA7Ag1pnPzaiQhpW7c3RbcqqzvzzVu+L8gfqMp/8IM2MQtSiqaCxrrcfu8I8rMA=="
    },
    "node_modules/clsx": {
      "version": "2.1.1",
      "resolved": "https://registry.npmjs.org/clsx/-/clsx-2.1.1.tgz",
      "integrity": "sha512-eYm0QWBtUrBWZWG0d386OGAw16Z995PiOVo2B7bjWSbHedGl5e0ZWaq65kOGgUSNesEIDkB9ISbTg/JK9dhCZA==",
      "license": "MIT",
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/color-convert": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/color-convert/-/color-convert-2.0.1.tgz",
      "integrity": "sha512-RRECPsj7iu/xb5oKYcsFHSppFNnsj/52OVTRKb4zP5onXwVF3zVmmToNcOfGC+CRDpfK/U584fMg38ZHCaElKQ==",
      "dev": true,
      "dependencies": {
        "color-name": "~1.1.4"
      },
      "engines": {
        "node": ">=7.0.0"
      }
    },
    "node_modules/color-name": {
      "version": "1.1.4",
      "resolved": "https://registry.npmjs.org/color-name/-/color-name-1.1.4.tgz",
      "integrity": "sha512-dOy+3AuW3a2wNbZHIuMZpTcgjGuLU/uBL/ubcZF9OXbDo8ff4O8yVp5Bf0efS8uEoYo5q4Fx7dY9OgQGXgAsQA==",
      "dev": true
    },
    "node_modules/concat-map": {
      "version": "0.0.1",
      "resolved": "https://registry.npmjs.org/concat-map/-/concat-map-0.0.1.tgz",
      "integrity": "sha512-/Srv4dswyQNBfohGpz9o6Yb3Gz3SrUDqBH5rTuhGR7ahtlbYKnVxw2bCFMRljaA7EXHaXZ8wsHdodFvbkhKmqg==",
      "dev": true
    },
    "node_modules/convert-source-map": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/convert-source-map/-/convert-source-map-2.0.0.tgz",
      "integrity": "sha512-Kvp459HrV2FEJ1CAsi1Ku+MY3kasH19TFykTz2xWmMeq6bk2NU3XXvfJ+Q61m0xktWwt+1HSYf3JZsTms3aRJg==",
      "dev": true
    },
    "node_modules/cross-spawn": {
      "version": "7.0.6",
      "resolved": "https://registry.npmjs.org/cross-spawn/-/cross-spawn-7.0.6.tgz",
      "integrity": "sha512-uV2QOWP2nWzsy2aMp8aRibhi9dlzF5Hgh5SHaB9OiTGEyDTiJJyx0uy51QXdyWbtAHNua4XJzUKca3OzKUd3vA==",
      "dev": true,
      "dependencies": {
        "path-key": "^3.1.0",
        "shebang-command": "^2.0.0",
        "which": "^2.0.1"
      },
      "engines": {
        "node": ">= 8"
      }
    },
    "node_modules/csstype": {
      "version": "3.2.3",
      "resolved": "https://registry.npmjs.org/csstype/-/csstype-3.2.3.tgz",
      "integrity": "sha512-z1HGKcYy2xA8AGQfwrn0PAy+PB7X/GSj3UVJW9qKyn43xWa+gl5nXmU4qqLMRzWVLFC8KusUX8T/0kCiOYpAIQ==",
      "devOptional": true
    },
    "node_modules/d3-array": {
      "version": "3.2.4",
      "resolved": "https://registry.npmjs.org/d3-array/-/d3-array-3.2.4.tgz",
      "integrity": "sha512-tdQAmyA18i4J7wprpYq8ClcxZy3SC31QMeByyCFyRt7BVHdREQZ5lpzoe5mFEYZUWe+oq8HBvk9JjpibyEV4Jg==",
      "dependencies": {
        "internmap": "1 - 2"
      },
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/d3-color": {
      "version": "3.1.0",
      "resolved": "https://registry.npmjs.org/d3-color/-/d3-color-3.1.0.tgz",
      "integrity": "sha512-zg/chbXyeBtMQ1LbD/WSoW2DpC3I0mpmPdW+ynRTj/x2DAWYrIY7qeZIHidozwV24m4iavr15lNwIwLxRmOxhA==",
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/d3-ease": {
      "version": "3.0.1",
      "resolved": "https://registry.npmjs.org/d3-ease/-/d3-ease-3.0.1.tgz",
      "integrity": "sha512-wR/XK3D3XcLIZwpbvQwQ5fK+8Ykds1ip7A2Txe0yxncXSdq1L9skcG7blcedkOX+ZcgxGAmLX1FrRGbADwzi0w==",
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/d3-format": {
      "version": "3.1.0",
      "resolved": "https://registry.npmjs.org/d3-format/-/d3-format-3.1.0.tgz",
      "integrity": "sha512-YyUI6AEuY/Wpt8KWLgZHsIU86atmikuoOmCfommt0LYHiQSPjvX2AcFc38PX0CBpr2RCyZhjex+NS/LPOv6YqA==",
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/d3-interpolate": {
      "version": "3.0.1",
      "resolved": "https://registry.npmjs.org/d3-interpolate/-/d3-interpolate-3.0.1.tgz",
      "integrity": "sha512-3bYs1rOD33uo8aqJfKP3JWPAibgw8Zm2+L9vBKEHJ2Rg+viTR7o5Mmv5mZcieN+FRYaAOWX5SJATX6k1PWz72g==",
      "dependencies": {
        "d3-color": "1 - 3"
      },
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/d3-path": {
      "version": "3.1.0",
      "resolved": "https://registry.npmjs.org/d3-path/-/d3-path-3.1.0.tgz",
      "integrity": "sha512-p3KP5HCf/bvjBSSKuXid6Zqijx7wIfNW+J/maPs+iwR35at5JCbLUT0LzF1cnjbCHWhqzQTIN2Jpe8pRebIEFQ==",
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/d3-scale": {
      "version": "4.0.2",
      "resolved": "https://registry.npmjs.org/d3-scale/-/d3-scale-4.0.2.tgz",
      "integrity": "sha512-GZW464g1SH7ag3Y7hXjf8RoUuAFIqklOAq3MRl4OaWabTFJY9PN/E1YklhXLh+OQ3fM9yS2nOkCoS+WLZ6kvxQ==",
      "dependencies": {
        "d3-array": "2.10.0 - 3",
        "d3-format": "1 - 3",
        "d3-interpolate": "1.2.0 - 3",
        "d3-time": "2.1.1 - 3",
        "d3-time-format": "2 - 4"
      },
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/d3-shape": {
      "version": "3.2.0",
      "resolved": "https://registry.npmjs.org/d3-shape/-/d3-shape-3.2.0.tgz",
      "integrity": "sha512-SaLBuwGm3MOViRq2ABk3eLoxwZELpH6zhl3FbAoJ7Vm1gofKx6El1Ib5z23NUEhF9AsGl7y+dzLe5Cw2AArGTA==",
      "dependencies": {
        "d3-path": "^3.1.0"
      },
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/d3-time": {
      "version": "3.1.0",
      "resolved": "https://registry.npmjs.org/d3-time/-/d3-time-3.1.0.tgz",
      "integrity": "sha512-VqKjzBLejbSMT4IgbmVgDjpkYrNWUYJnbCGo874u7MMKIWsILRX+OpX/gTk8MqjpT1A/c6HY2dCA77ZN0lkQ2Q==",
      "dependencies": {
        "d3-array": "2 - 3"
      },
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/d3-time-format": {
      "version": "4.1.0",
      "resolved": "https://registry.npmjs.org/d3-time-format/-/d3-time-format-4.1.0.tgz",
      "integrity": "sha512-dJxPBlzC7NugB2PDLwo9Q8JiTR3M3e4/XANkreKSUxF8vvXKqm1Yfq4Q5dl8budlunRVlUUaDUgFt7eA8D6NLg==",
      "dependencies": {
        "d3-time": "1 - 3"
      },
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/d3-timer": {
      "version": "3.0.1",
      "resolved": "https://registry.npmjs.org/d3-timer/-/d3-timer-3.0.1.tgz",
      "integrity": "sha512-ndfJ/JxxMd3nw31uyKoY2naivF+r29V+Lc0svZxe1JvvIRmi8hUsrMvdOwgS1o6uBHmiz91geQ0ylPP0aj1VUA==",
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/damerau-levenshtein": {
      "version": "1.0.8",
      "resolved": "https://registry.npmjs.org/damerau-levenshtein/-/damerau-levenshtein-1.0.8.tgz",
      "integrity": "sha512-sdQSFB7+llfUcQHUQO3+B8ERRj0Oa4w9POWMI/puGtuf7gFywGmkaLCElnudfTiKZV+NvHqL0ifzdrI8Ro7ESA==",
      "dev": true
    },
    "node_modules/data-view-buffer": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/data-view-buffer/-/data-view-buffer-1.0.2.tgz",
      "integrity": "sha512-EmKO5V3OLXh1rtK2wgXRansaK1/mtVdTUEiEI0W8RkvgT05kfxaH29PliLnpLP73yYO6142Q72QNa8Wx/A5CqQ==",
      "dev": true,
      "dependencies": {
        "call-bound": "^1.0.3",
        "es-errors": "^1.3.0",
        "is-data-view": "^1.0.2"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/data-view-byte-length": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/data-view-byte-length/-/data-view-byte-length-1.0.2.tgz",
      "integrity": "sha512-tuhGbE6CfTM9+5ANGf+oQb72Ky/0+s3xKUpHvShfiz2RxMFgFPjsXuRLBVMtvMs15awe45SRb83D6wH4ew6wlQ==",
      "dev": true,
      "dependencies": {
        "call-bound": "^1.0.3",
        "es-errors": "^1.3.0",
        "is-data-view": "^1.0.2"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/inspect-js"
      }
    },
    "node_modules/data-view-byte-offset": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/data-view-byte-offset/-/data-view-byte-offset-1.0.1.tgz",
      "integrity": "sha512-BS8PfmtDGnrgYdOonGZQdLZslWIeCGFP9tpan0hi1Co2Zr2NKADsvGYA8XxuG/4UWgJ6Cjtv+YJnB6MM69QGlQ==",
      "dev": true,
      "dependencies": {
        "call-bound": "^1.0.2",
        "es-errors": "^1.3.0",
        "is-data-view": "^1.0.1"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/debug": {
      "version": "4.4.3",
      "resolved": "https://registry.npmjs.org/debug/-/debug-4.4.3.tgz",
      "integrity": "sha512-RGwwWnwQvkVfavKVt22FGLw+xYSdzARwm0ru6DhTVA3umU5hZc28V3kO4stgYryrTlLpuvgI9GiijltAjNbcqA==",
      "dev": true,
      "dependencies": {
        "ms": "^2.1.3"
      },
      "engines": {
        "node": ">=6.0"
      },
      "peerDependenciesMeta": {
        "supports-color": {
          "optional": true
        }
      }
    },
    "node_modules/decimal.js-light": {
      "version": "2.5.1",
      "resolved": "https://registry.npmjs.org/decimal.js-light/-/decimal.js-light-2.5.1.tgz",
      "integrity": "sha512-qIMFpTMZmny+MMIitAB6D7iVPEorVw6YQRWkvarTkT4tBeSLLiHzcwj6q0MmYSFCiVpiqPJTJEYIrpcPzVEIvg=="
    },
    "node_modules/deep-is": {
      "version": "0.1.4",
      "resolved": "https://registry.npmjs.org/deep-is/-/deep-is-0.1.4.tgz",
      "integrity": "sha512-oIPzksmTg4/MriiaYGO+okXDT7ztn/w3Eptv/+gSIdMdKsJo0u4CfYNFJPy+4SKMuCqGw2wxnA+URMg3t8a/bQ==",
      "dev": true
    },
    "node_modules/define-data-property": {
      "version": "1.1.4",
      "resolved": "https://registry.npmjs.org/define-data-property/-/define-data-property-1.1.4.tgz",
      "integrity": "sha512-rBMvIzlpA8v6E+SJZoo++HAYqsLrkg7MSfIinMPFhmkorw7X+dOXVJQs+QT69zGkzMyfDnIMN2Wid1+NbL3T+A==",
      "dev": true,
      "dependencies": {
        "es-define-property": "^1.0.0",
        "es-errors": "^1.3.0",
        "gopd": "^1.0.1"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/define-properties": {
      "version": "1.2.1",
      "resolved": "https://registry.npmjs.org/define-properties/-/define-properties-1.2.1.tgz",
      "integrity": "sha512-8QmQKqEASLd5nx0U1B1okLElbUuuttJ/AnYmRXbbbGDWh6uS208EjD4Xqq/I9wK7u0v6O08XhTWnt5XtEbR6Dg==",
      "dev": true,
      "dependencies": {
        "define-data-property": "^1.0.1",
        "has-property-descriptors": "^1.0.0",
        "object-keys": "^1.1.1"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/detect-libc": {
      "version": "2.1.2",
      "resolved": "https://registry.npmjs.org/detect-libc/-/detect-libc-2.1.2.tgz",
      "integrity": "sha512-Btj2BOOO83o3WyH59e8MgXsxEQVcarkUOpEYrubB0urwnN10yQ364rsiByU11nZlqWYZm05i/of7io4mzihBtQ==",
      "devOptional": true,
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/doctrine": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/doctrine/-/doctrine-2.1.0.tgz",
      "integrity": "sha512-35mSku4ZXK0vfCuHEDAwt55dg2jNajHZ1odvF+8SSr82EsZY4QmXfuWso8oEd8zRhVObSN18aM0CjSdoBX7zIw==",
      "dev": true,
      "dependencies": {
        "esutils": "^2.0.2"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/dunder-proto": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/dunder-proto/-/dunder-proto-1.0.1.tgz",
      "integrity": "sha512-KIN/nDJBQRcXw0MLVhZE9iQHmG68qAVIBg9CqmUYjmQIhgij9U5MFvrqkUL5FbtyyzZuOeOt0zdeRe4UY7ct+A==",
      "dev": true,
      "dependencies": {
        "call-bind-apply-helpers": "^1.0.1",
        "es-errors": "^1.3.0",
        "gopd": "^1.2.0"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/electron-to-chromium": {
      "version": "1.5.267",
      "resolved": "https://registry.npmjs.org/electron-to-chromium/-/electron-to-chromium-1.5.267.tgz",
      "integrity": "sha512-0Drusm6MVRXSOJpGbaSVgcQsuB4hEkMpHXaVstcPmhu5LIedxs1xNK/nIxmQIU/RPC0+1/o0AVZfBTkTNJOdUw==",
      "dev": true
    },
    "node_modules/emoji-regex": {
      "version": "9.2.2",
      "resolved": "https://registry.npmjs.org/emoji-regex/-/emoji-regex-9.2.2.tgz",
      "integrity": "sha512-L18DaJsXSUk2+42pv8mLs5jJT2hqFkFE4j21wOmgbUqsZ2hL72NsUU785g9RXgo3s0ZNgVl42TiHp3ZtOv/Vyg==",
      "dev": true
    },
    "node_modules/enhanced-resolve": {
      "version": "5.18.4",
      "resolved": "https://registry.npmjs.org/enhanced-resolve/-/enhanced-resolve-5.18.4.tgz",
      "integrity": "sha512-LgQMM4WXU3QI+SYgEc2liRgznaD5ojbmY3sb8LxyguVkIg5FxdpTkvk72te2R38/TGKxH634oLxXRGY6d7AP+Q==",
      "dev": true,
      "dependencies": {
        "graceful-fs": "^4.2.4",
        "tapable": "^2.2.0"
      },
      "engines": {
        "node": ">=10.13.0"
      }
    },
    "node_modules/es-abstract": {
      "version": "1.24.1",
      "resolved": "https://registry.npmjs.org/es-abstract/-/es-abstract-1.24.1.tgz",
      "integrity": "sha512-zHXBLhP+QehSSbsS9Pt23Gg964240DPd6QCf8WpkqEXxQ7fhdZzYsocOr5u7apWonsS5EjZDmTF+/slGMyasvw==",
      "dev": true,
      "dependencies": {
        "array-buffer-byte-length": "^1.0.2",
        "arraybuffer.prototype.slice": "^1.0.4",
        "available-typed-arrays": "^1.0.7",
        "call-bind": "^1.0.8",
        "call-bound": "^1.0.4",
        "data-view-buffer": "^1.0.2",
        "data-view-byte-length": "^1.0.2",
        "data-view-byte-offset": "^1.0.1",
        "es-define-property": "^1.0.1",
        "es-errors": "^1.3.0",
        "es-object-atoms": "^1.1.1",
        "es-set-tostringtag": "^2.1.0",
        "es-to-primitive": "^1.3.0",
        "function.prototype.name": "^1.1.8",
        "get-intrinsic": "^1.3.0",
        "get-proto": "^1.0.1",
        "get-symbol-description": "^1.1.0",
        "globalthis": "^1.0.4",
        "gopd": "^1.2.0",
        "has-property-descriptors": "^1.0.2",
        "has-proto": "^1.2.0",
        "has-symbols": "^1.1.0",
        "hasown": "^2.0.2",
        "internal-slot": "^1.1.0",
        "is-array-buffer": "^3.0.5",
        "is-callable": "^1.2.7",
        "is-data-view": "^1.0.2",
        "is-negative-zero": "^2.0.3",
        "is-regex": "^1.2.1",
        "is-set": "^2.0.3",
        "is-shared-array-buffer": "^1.0.4",
        "is-string": "^1.1.1",
        "is-typed-array": "^1.1.15",
        "is-weakref": "^1.1.1",
        "math-intrinsics": "^1.1.0",
        "object-inspect": "^1.13.4",
        "object-keys": "^1.1.1",
        "object.assign": "^4.1.7",
        "own-keys": "^1.0.1",
        "regexp.prototype.flags": "^1.5.4",
        "safe-array-concat": "^1.1.3",
        "safe-push-apply": "^1.0.0",
        "safe-regex-test": "^1.1.0",
        "set-proto": "^1.0.0",
        "stop-iteration-iterator": "^1.1.0",
        "string.prototype.trim": "^1.2.10",
        "string.prototype.trimend": "^1.0.9",
        "string.prototype.trimstart": "^1.0.8",
        "typed-array-buffer": "^1.0.3",
        "typed-array-byte-length": "^1.0.3",
        "typed-array-byte-offset": "^1.0.4",
        "typed-array-length": "^1.0.7",
        "unbox-primitive": "^1.1.0",
        "which-typed-array": "^1.1.19"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/es-define-property": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/es-define-property/-/es-define-property-1.0.1.tgz",
      "integrity": "sha512-e3nRfgfUZ4rNGL232gUgX06QNyyez04KdjFrF+LTRoOXmrOgFKDg4BCdsjW8EnT69eqdYGmRpJwiPVYNrCaW3g==",
      "dev": true,
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/es-errors": {
      "version": "1.3.0",
      "resolved": "https://registry.npmjs.org/es-errors/-/es-errors-1.3.0.tgz",
      "integrity": "sha512-Zf5H2Kxt2xjTvbJvP2ZWLEICxA6j+hAmMzIlypy4xcBg1vKVnx89Wy0GbS+kf5cwCVFFzdCFh2XSCFNULS6csw==",
      "dev": true,
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/es-iterator-helpers": {
      "version": "1.2.2",
      "resolved": "https://registry.npmjs.org/es-iterator-helpers/-/es-iterator-helpers-1.2.2.tgz",
      "integrity": "sha512-BrUQ0cPTB/IwXj23HtwHjS9n7O4h9FX94b4xc5zlTHxeLgTAdzYUDyy6KdExAl9lbN5rtfe44xpjpmj9grxs5w==",
      "dev": true,
      "dependencies": {
        "call-bind": "^1.0.8",
        "call-bound": "^1.0.4",
        "define-properties": "^1.2.1",
        "es-abstract": "^1.24.1",
        "es-errors": "^1.3.0",
        "es-set-tostringtag": "^2.1.0",
        "function-bind": "^1.1.2",
        "get-intrinsic": "^1.3.0",
        "globalthis": "^1.0.4",
        "gopd": "^1.2.0",
        "has-property-descriptors": "^1.0.2",
        "has-proto": "^1.2.0",
        "has-symbols": "^1.1.0",
        "internal-slot": "^1.1.0",
        "iterator.prototype": "^1.1.5",
        "safe-array-concat": "^1.1.3"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/es-object-atoms": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/es-object-atoms/-/es-object-atoms-1.1.1.tgz",
      "integrity": "sha512-FGgH2h8zKNim9ljj7dankFPcICIK9Cp5bm+c2gQSYePhpaG5+esrLODihIorn+Pe6FGJzWhXQotPv73jTaldXA==",
      "dev": true,
      "dependencies": {
        "es-errors": "^1.3.0"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/es-set-tostringtag": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/es-set-tostringtag/-/es-set-tostringtag-2.1.0.tgz",
      "integrity": "sha512-j6vWzfrGVfyXxge+O0x5sh6cvxAog0a/4Rdd2K36zCMV5eJ+/+tOAngRO8cODMNWbVRdVlmGZQL2YS3yR8bIUA==",
      "dev": true,
      "dependencies": {
        "es-errors": "^1.3.0",
        "get-intrinsic": "^1.2.6",
        "has-tostringtag": "^1.0.2",
        "hasown": "^2.0.2"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/es-shim-unscopables": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/es-shim-unscopables/-/es-shim-unscopables-1.1.0.tgz",
      "integrity": "sha512-d9T8ucsEhh8Bi1woXCf+TIKDIROLG5WCkxg8geBCbvk22kzwC5G2OnXVMO6FUsvQlgUUXQ2itephWDLqDzbeCw==",
      "dev": true,
      "dependencies": {
        "hasown": "^2.0.2"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/es-to-primitive": {
      "version": "1.3.0",
      "resolved": "https://registry.npmjs.org/es-to-primitive/-/es-to-primitive-1.3.0.tgz",
      "integrity": "sha512-w+5mJ3GuFL+NjVtJlvydShqE1eN3h3PbI7/5LAsYJP/2qtuMXjfL2LpHSRqo4b4eSF5K/DH1JXKUAHSB2UW50g==",
      "dev": true,
      "dependencies": {
        "is-callable": "^1.2.7",
        "is-date-object": "^1.0.5",
        "is-symbol": "^1.0.4"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/es-toolkit": {
      "version": "1.43.0",
      "resolved": "https://registry.npmjs.org/es-toolkit/-/es-toolkit-1.43.0.tgz",
      "integrity": "sha512-SKCT8AsWvYzBBuUqMk4NPwFlSdqLpJwmy6AP322ERn8W2YLIB6JBXnwMI2Qsh2gfphT3q7EKAxKb23cvFHFwKA=="
    },
    "node_modules/escalade": {
      "version": "3.2.0",
      "resolved": "https://registry.npmjs.org/escalade/-/escalade-3.2.0.tgz",
      "integrity": "sha512-WUj2qlxaQtO4g6Pq5c29GTcWGDyd8itL8zTlipgECz3JesAiiOKotd8JU6otB3PACgG6xkJUyVhboMS+bje/jA==",
      "dev": true,
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/escape-string-regexp": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/escape-string-regexp/-/escape-string-regexp-4.0.0.tgz",
      "integrity": "sha512-TtpcNJ3XAzx3Gq8sWRzJaVajRs0uVxA2YAkdb1jm2YkPz4G6egUFAyA3n5vtEIZefPk5Wa4UXbKuS5fKkJWdgA==",
      "dev": true,
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/eslint": {
      "version": "9.39.2",
      "resolved": "https://registry.npmjs.org/eslint/-/eslint-9.39.2.tgz",
      "integrity": "sha512-LEyamqS7W5HB3ujJyvi0HQK/dtVINZvd5mAAp9eT5S/ujByGjiZLCzPcHVzuXbpJDJF/cxwHlfceVUDZ2lnSTw==",
      "dev": true,
      "dependencies": {
        "@eslint-community/eslint-utils": "^4.8.0",
        "@eslint-community/regexpp": "^4.12.1",
        "@eslint/config-array": "^0.21.1",
        "@eslint/config-helpers": "^0.4.2",
        "@eslint/core": "^0.17.0",
        "@eslint/eslintrc": "^3.3.1",
        "@eslint/js": "9.39.2",
        "@eslint/plugin-kit": "^0.4.1",
        "@humanfs/node": "^0.16.6",
        "@humanwhocodes/module-importer": "^1.0.1",
        "@humanwhocodes/retry": "^0.4.2",
        "@types/estree": "^1.0.6",
        "ajv": "^6.12.4",
        "chalk": "^4.0.0",
        "cross-spawn": "^7.0.6",
        "debug": "^4.3.2",
        "escape-string-regexp": "^4.0.0",
        "eslint-scope": "^8.4.0",
        "eslint-visitor-keys": "^4.2.1",
        "espree": "^10.4.0",
        "esquery": "^1.5.0",
        "esutils": "^2.0.2",
        "fast-deep-equal": "^3.1.3",
        "file-entry-cache": "^8.0.0",
        "find-up": "^5.0.0",
        "glob-parent": "^6.0.2",
        "ignore": "^5.2.0",
        "imurmurhash": "^0.1.4",
        "is-glob": "^4.0.0",
        "json-stable-stringify-without-jsonify": "^1.0.1",
        "lodash.merge": "^4.6.2",
        "minimatch": "^3.1.2",
        "natural-compare": "^1.4.0",
        "optionator": "^0.9.3"
      },
      "bin": {
        "eslint": "bin/eslint.js"
      },
      "engines": {
        "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
      },
      "funding": {
        "url": "https://eslint.org/donate"
      },
      "peerDependencies": {
        "jiti": "*"
      },
      "peerDependenciesMeta": {
        "jiti": {
          "optional": true
        }
      }
    },
    "node_modules/eslint-config-next": {
      "version": "16.0.10",
      "resolved": "https://registry.npmjs.org/eslint-config-next/-/eslint-config-next-16.0.10.tgz",
      "integrity": "sha512-BxouZUm0I45K4yjOOIzj24nTi0H2cGo0y7xUmk+Po/PYtJXFBYVDS1BguE7t28efXjKdcN0tmiLivxQy//SsZg==",
      "dev": true,
      "dependencies": {
        "@next/eslint-plugin-next": "16.0.10",
        "eslint-import-resolver-node": "^0.3.6",
        "eslint-import-resolver-typescript": "^3.5.2",
        "eslint-plugin-import": "^2.32.0",
        "eslint-plugin-jsx-a11y": "^6.10.0",
        "eslint-plugin-react": "^7.37.0",
        "eslint-plugin-react-hooks": "^7.0.0",
        "globals": "16.4.0",
        "typescript-eslint": "^8.46.0"
      },
      "peerDependencies": {
        "eslint": ">=9.0.0",
        "typescript": ">=3.3.1"
      },
      "peerDependenciesMeta": {
        "typescript": {
          "optional": true
        }
      }
    },
    "node_modules/eslint-config-next/node_modules/globals": {
      "version": "16.4.0",
      "resolved": "https://registry.npmjs.org/globals/-/globals-16.4.0.tgz",
      "integrity": "sha512-ob/2LcVVaVGCYN+r14cnwnoDPUufjiYgSqRhiFD0Q1iI4Odora5RE8Iv1D24hAz5oMophRGkGz+yuvQmmUMnMw==",
      "dev": true,
      "engines": {
        "node": ">=18"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/eslint-import-resolver-node": {
      "version": "0.3.9",
      "resolved": "https://registry.npmjs.org/eslint-import-resolver-node/-/eslint-import-resolver-node-0.3.9.tgz",
      "integrity": "sha512-WFj2isz22JahUv+B788TlO3N6zL3nNJGU8CcZbPZvVEkBPaJdCV4vy5wyghty5ROFbCRnm132v8BScu5/1BQ8g==",
      "dev": true,
      "dependencies": {
        "debug": "^3.2.7",
        "is-core-module": "^2.13.0",
        "resolve": "^1.22.4"
      }
    },
    "node_modules/eslint-import-resolver-node/node_modules/debug": {
      "version": "3.2.7",
      "resolved": "https://registry.npmjs.org/debug/-/debug-3.2.7.tgz",
      "integrity": "sha512-CFjzYYAi4ThfiQvizrFQevTTXHtnCqWfe7x1AhgEscTz6ZbLbfoLRLPugTQyBth6f8ZERVUSyWHFD/7Wu4t1XQ==",
      "dev": true,
      "dependencies": {
        "ms": "^2.1.1"
      }
    },
    "node_modules/eslint-import-resolver-typescript": {
      "version": "3.10.1",
      "resolved": "https://registry.npmjs.org/eslint-import-resolver-typescript/-/eslint-import-resolver-typescript-3.10.1.tgz",
      "integrity": "sha512-A1rHYb06zjMGAxdLSkN2fXPBwuSaQ0iO5M/hdyS0Ajj1VBaRp0sPD3dn1FhME3c/JluGFbwSxyCfqdSbtQLAHQ==",
      "dev": true,
      "dependencies": {
        "@nolyfill/is-core-module": "1.0.39",
        "debug": "^4.4.0",
        "get-tsconfig": "^4.10.0",
        "is-bun-module": "^2.0.0",
        "stable-hash": "^0.0.5",
        "tinyglobby": "^0.2.13",
        "unrs-resolver": "^1.6.2"
      },
      "engines": {
        "node": "^14.18.0 || >=16.0.0"
      },
      "funding": {
        "url": "https://opencollective.com/eslint-import-resolver-typescript"
      },
      "peerDependencies": {
        "eslint": "*",
        "eslint-plugin-import": "*",
        "eslint-plugin-import-x": "*"
      },
      "peerDependenciesMeta": {
        "eslint-plugin-import": {
          "optional": true
        },
        "eslint-plugin-import-x": {
          "optional": true
        }
      }
    },
    "node_modules/eslint-module-utils": {
      "version": "2.12.1",
      "resolved": "https://registry.npmjs.org/eslint-module-utils/-/eslint-module-utils-2.12.1.tgz",
      "integrity": "sha512-L8jSWTze7K2mTg0vos/RuLRS5soomksDPoJLXIslC7c8Wmut3bx7CPpJijDcBZtxQ5lrbUdM+s0OlNbz0DCDNw==",
      "dev": true,
      "dependencies": {
        "debug": "^3.2.7"
      },
      "engines": {
        "node": ">=4"
      },
      "peerDependenciesMeta": {
        "eslint": {
          "optional": true
        }
      }
    },
    "node_modules/eslint-module-utils/node_modules/debug": {
      "version": "3.2.7",
      "resolved": "https://registry.npmjs.org/debug/-/debug-3.2.7.tgz",
      "integrity": "sha512-CFjzYYAi4ThfiQvizrFQevTTXHtnCqWfe7x1AhgEscTz6ZbLbfoLRLPugTQyBth6f8ZERVUSyWHFD/7Wu4t1XQ==",
      "dev": true,
      "dependencies": {
        "ms": "^2.1.1"
      }
    },
    "node_modules/eslint-plugin-import": {
      "version": "2.32.0",
      "resolved": "https://registry.npmjs.org/eslint-plugin-import/-/eslint-plugin-import-2.32.0.tgz",
      "integrity": "sha512-whOE1HFo/qJDyX4SnXzP4N6zOWn79WhnCUY/iDR0mPfQZO8wcYE4JClzI2oZrhBnnMUCBCHZhO6VQyoBU95mZA==",
      "dev": true,
      "dependencies": {
        "@rtsao/scc": "^1.1.0",
        "array-includes": "^3.1.9",
        "array.prototype.findlastindex": "^1.2.6",
        "array.prototype.flat": "^1.3.3",
        "array.prototype.flatmap": "^1.3.3",
        "debug": "^3.2.7",
        "doctrine": "^2.1.0",
        "eslint-import-resolver-node": "^0.3.9",
        "eslint-module-utils": "^2.12.1",
        "hasown": "^2.0.2",
        "is-core-module": "^2.16.1",
        "is-glob": "^4.0.3",
        "minimatch": "^3.1.2",
        "object.fromentries": "^2.0.8",
        "object.groupby": "^1.0.3",
        "object.values": "^1.2.1",
        "semver": "^6.3.1",
        "string.prototype.trimend": "^1.0.9",
        "tsconfig-paths": "^3.15.0"
      },
      "engines": {
        "node": ">=4"
      },
      "peerDependencies": {
        "eslint": "^2 || ^3 || ^4 || ^5 || ^6 || ^7.2.0 || ^8 || ^9"
      }
    },
    "node_modules/eslint-plugin-import/node_modules/debug": {
      "version": "3.2.7",
      "resolved": "https://registry.npmjs.org/debug/-/debug-3.2.7.tgz",
      "integrity": "sha512-CFjzYYAi4ThfiQvizrFQevTTXHtnCqWfe7x1AhgEscTz6ZbLbfoLRLPugTQyBth6f8ZERVUSyWHFD/7Wu4t1XQ==",
      "dev": true,
      "dependencies": {
        "ms": "^2.1.1"
      }
    },
    "node_modules/eslint-plugin-jsx-a11y": {
      "version": "6.10.2",
      "resolved": "https://registry.npmjs.org/eslint-plugin-jsx-a11y/-/eslint-plugin-jsx-a11y-6.10.2.tgz",
      "integrity": "sha512-scB3nz4WmG75pV8+3eRUQOHZlNSUhFNq37xnpgRkCCELU3XMvXAxLk1eqWWyE22Ki4Q01Fnsw9BA3cJHDPgn2Q==",
      "dev": true,
      "dependencies": {
        "aria-query": "^5.3.2",
        "array-includes": "^3.1.8",
        "array.prototype.flatmap": "^1.3.2",
        "ast-types-flow": "^0.0.8",
        "axe-core": "^4.10.0",
        "axobject-query": "^4.1.0",
        "damerau-levenshtein": "^1.0.8",
        "emoji-regex": "^9.2.2",
        "hasown": "^2.0.2",
        "jsx-ast-utils": "^3.3.5",
        "language-tags": "^1.0.9",
        "minimatch": "^3.1.2",
        "object.fromentries": "^2.0.8",
        "safe-regex-test": "^1.0.3",
        "string.prototype.includes": "^2.0.1"
      },
      "engines": {
        "node": ">=4.0"
      },
      "peerDependencies": {
        "eslint": "^3 || ^4 || ^5 || ^6 || ^7 || ^8 || ^9"
      }
    },
    "node_modules/eslint-plugin-react": {
      "version": "7.37.5",
      "resolved": "https://registry.npmjs.org/eslint-plugin-react/-/eslint-plugin-react-7.37.5.tgz",
      "integrity": "sha512-Qteup0SqU15kdocexFNAJMvCJEfa2xUKNV4CC1xsVMrIIqEy3SQ/rqyxCWNzfrd3/ldy6HMlD2e0JDVpDg2qIA==",
      "dev": true,
      "dependencies": {
        "array-includes": "^3.1.8",
        "array.prototype.findlast": "^1.2.5",
        "array.prototype.flatmap": "^1.3.3",
        "array.prototype.tosorted": "^1.1.4",
        "doctrine": "^2.1.0",
        "es-iterator-helpers": "^1.2.1",
        "estraverse": "^5.3.0",
        "hasown": "^2.0.2",
        "jsx-ast-utils": "^2.4.1 || ^3.0.0",
        "minimatch": "^3.1.2",
        "object.entries": "^1.1.9",
        "object.fromentries": "^2.0.8",
        "object.values": "^1.2.1",
        "prop-types": "^15.8.1",
        "resolve": "^2.0.0-next.5",
        "semver": "^6.3.1",
        "string.prototype.matchall": "^4.0.12",
        "string.prototype.repeat": "^1.0.0"
      },
      "engines": {
        "node": ">=4"
      },
      "peerDependencies": {
        "eslint": "^3 || ^4 || ^5 || ^6 || ^7 || ^8 || ^9.7"
      }
    },
    "node_modules/eslint-plugin-react-hooks": {
      "version": "7.0.1",
      "resolved": "https://registry.npmjs.org/eslint-plugin-react-hooks/-/eslint-plugin-react-hooks-7.0.1.tgz",
      "integrity": "sha512-O0d0m04evaNzEPoSW+59Mezf8Qt0InfgGIBJnpC0h3NH/WjUAR7BIKUfysC6todmtiZ/A0oUVS8Gce0WhBrHsA==",
      "dev": true,
      "dependencies": {
        "@babel/core": "^7.24.4",
        "@babel/parser": "^7.24.4",
        "hermes-parser": "^0.25.1",
        "zod": "^3.25.0 || ^4.0.0",
        "zod-validation-error": "^3.5.0 || ^4.0.0"
      },
      "engines": {
        "node": ">=18"
      },
      "peerDependencies": {
        "eslint": "^3.0.0 || ^4.0.0 || ^5.0.0 || ^6.0.0 || ^7.0.0 || ^8.0.0-0 || ^9.0.0"
      }
    },
    "node_modules/eslint-plugin-react/node_modules/resolve": {
      "version": "2.0.0-next.5",
      "resolved": "https://registry.npmjs.org/resolve/-/resolve-2.0.0-next.5.tgz",
      "integrity": "sha512-U7WjGVG9sH8tvjW5SmGbQuui75FiyjAX72HX15DwBBwF9dNiQZRQAg9nnPhYy+TUnE0+VcrttuvNI8oSxZcocA==",
      "dev": true,
      "dependencies": {
        "is-core-module": "^2.13.0",
        "path-parse": "^1.0.7",
        "supports-preserve-symlinks-flag": "^1.0.0"
      },
      "bin": {
        "resolve": "bin/resolve"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/eslint-scope": {
      "version": "8.4.0",
      "resolved": "https://registry.npmjs.org/eslint-scope/-/eslint-scope-8.4.0.tgz",
      "integrity": "sha512-sNXOfKCn74rt8RICKMvJS7XKV/Xk9kA7DyJr8mJik3S7Cwgy3qlkkmyS2uQB3jiJg6VNdZd/pDBJu0nvG2NlTg==",
      "dev": true,
      "dependencies": {
        "esrecurse": "^4.3.0",
        "estraverse": "^5.2.0"
      },
      "engines": {
        "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
      },
      "funding": {
        "url": "https://opencollective.com/eslint"
      }
    },
    "node_modules/eslint-visitor-keys": {
      "version": "4.2.1",
      "resolved": "https://registry.npmjs.org/eslint-visitor-keys/-/eslint-visitor-keys-4.2.1.tgz",
      "integrity": "sha512-Uhdk5sfqcee/9H/rCOJikYz67o0a2Tw2hGRPOG2Y1R2dg7brRe1uG0yaNQDHu+TO/uQPF/5eCapvYSmHUjt7JQ==",
      "dev": true,
      "engines": {
        "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
      },
      "funding": {
        "url": "https://opencollective.com/eslint"
      }
    },
    "node_modules/espree": {
      "version": "10.4.0",
      "resolved": "https://registry.npmjs.org/espree/-/espree-10.4.0.tgz",
      "integrity": "sha512-j6PAQ2uUr79PZhBjP5C5fhl8e39FmRnOjsD5lGnWrFU8i2G776tBK7+nP8KuQUTTyAZUwfQqXAgrVH5MbH9CYQ==",
      "dev": true,
      "dependencies": {
        "acorn": "^8.15.0",
        "acorn-jsx": "^5.3.2",
        "eslint-visitor-keys": "^4.2.1"
      },
      "engines": {
        "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
      },
      "funding": {
        "url": "https://opencollective.com/eslint"
      }
    },
    "node_modules/esquery": {
      "version": "1.6.0",
      "resolved": "https://registry.npmjs.org/esquery/-/esquery-1.6.0.tgz",
      "integrity": "sha512-ca9pw9fomFcKPvFLXhBKUK90ZvGibiGOvRJNbjljY7s7uq/5YO4BOzcYtJqExdx99rF6aAcnRxHmcUHcz6sQsg==",
      "dev": true,
      "dependencies": {
        "estraverse": "^5.1.0"
      },
      "engines": {
        "node": ">=0.10"
      }
    },
    "node_modules/esrecurse": {
      "version": "4.3.0",
      "resolved": "https://registry.npmjs.org/esrecurse/-/esrecurse-4.3.0.tgz",
      "integrity": "sha512-KmfKL3b6G+RXvP8N1vr3Tq1kL/oCFgn2NYXEtqP8/L3pKapUA4G8cFVaoF3SU323CD4XypR/ffioHmkti6/Tag==",
      "dev": true,
      "dependencies": {
        "estraverse": "^5.2.0"
      },
      "engines": {
        "node": ">=4.0"
      }
    },
    "node_modules/estraverse": {
      "version": "5.3.0",
      "resolved": "https://registry.npmjs.org/estraverse/-/estraverse-5.3.0.tgz",
      "integrity": "sha512-MMdARuVEQziNTeJD8DgMqmhwR11BRQ/cBP+pLtYdSTnf3MIO8fFeiINEbX36ZdNlfU/7A9f3gUw49B3oQsvwBA==",
      "dev": true,
      "engines": {
        "node": ">=4.0"
      }
    },
    "node_modules/esutils": {
      "version": "2.0.3",
      "resolved": "https://registry.npmjs.org/esutils/-/esutils-2.0.3.tgz",
      "integrity": "sha512-kVscqXk4OCp68SZ0dkgEKVi6/8ij300KBWTJq32P/dYeWTSwK41WyTxalN1eRmA5Z9UU/LX9D7FWSmV9SAYx6g==",
      "dev": true,
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/eventemitter3": {
      "version": "5.0.1",
      "resolved": "https://registry.npmjs.org/eventemitter3/-/eventemitter3-5.0.1.tgz",
      "integrity": "sha512-GWkBvjiSZK87ELrYOSESUYeVIc9mvLLf/nXalMOS5dYrgZq9o5OVkbZAVM06CVxYsCwH9BDZFPlQTlPA1j4ahA=="
    },
    "node_modules/fast-deep-equal": {
      "version": "3.1.3",
      "resolved": "https://registry.npmjs.org/fast-deep-equal/-/fast-deep-equal-3.1.3.tgz",
      "integrity": "sha512-f3qQ9oQy9j2AhBe/H9VC91wLmKBCCU/gDOnKNAYG5hswO7BLKj09Hc5HYNz9cGI++xlpDCIgDaitVs03ATR84Q==",
      "dev": true
    },
    "node_modules/fast-glob": {
      "version": "3.3.1",
      "resolved": "https://registry.npmjs.org/fast-glob/-/fast-glob-3.3.1.tgz",
      "integrity": "sha512-kNFPyjhh5cKjrUltxs+wFx+ZkbRaxxmZ+X0ZU31SOsxCEtP9VPgtq2teZw1DebupL5GmDaNQ6yKMMVcM41iqDg==",
      "dev": true,
      "dependencies": {
        "@nodelib/fs.stat": "^2.0.2",
        "@nodelib/fs.walk": "^1.2.3",
        "glob-parent": "^5.1.2",
        "merge2": "^1.3.0",
        "micromatch": "^4.0.4"
      },
      "engines": {
        "node": ">=8.6.0"
      }
    },
    "node_modules/fast-glob/node_modules/glob-parent": {
      "version": "5.1.2",
      "resolved": "https://registry.npmjs.org/glob-parent/-/glob-parent-5.1.2.tgz",
      "integrity": "sha512-AOIgSQCepiJYwP3ARnGx+5VnTu2HBYdzbGP45eLw1vr3zB3vZLeyed1sC9hnbcOc9/SrMyM5RPQrkGz4aS9Zow==",
      "dev": true,
      "dependencies": {
        "is-glob": "^4.0.1"
      },
      "engines": {
        "node": ">= 6"
      }
    },
    "node_modules/fast-json-stable-stringify": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/fast-json-stable-stringify/-/fast-json-stable-stringify-2.1.0.tgz",
      "integrity": "sha512-lhd/wF+Lk98HZoTCtlVraHtfh5XYijIjalXck7saUtuanSDyLMxnHhSXEDJqHxD7msR8D0uCmqlkwjCV8xvwHw==",
      "dev": true
    },
    "node_modules/fast-levenshtein": {
      "version": "2.0.6",
      "resolved": "https://registry.npmjs.org/fast-levenshtein/-/fast-levenshtein-2.0.6.tgz",
      "integrity": "sha512-DCXu6Ifhqcks7TZKY3Hxp3y6qphY5SJZmrWMDrKcERSOXWQdMhU9Ig/PYrzyw/ul9jOIyh0N4M0tbC5hodg8dw==",
      "dev": true
    },
    "node_modules/fastq": {
      "version": "1.19.1",
      "resolved": "https://registry.npmjs.org/fastq/-/fastq-1.19.1.tgz",
      "integrity": "sha512-GwLTyxkCXjXbxqIhTsMI2Nui8huMPtnxg7krajPJAjnEG/iiOS7i+zCtWGZR9G0NBKbXKh6X9m9UIsYX/N6vvQ==",
      "dev": true,
      "dependencies": {
        "reusify": "^1.0.4"
      }
    },
    "node_modules/file-entry-cache": {
      "version": "8.0.0",
      "resolved": "https://registry.npmjs.org/file-entry-cache/-/file-entry-cache-8.0.0.tgz",
      "integrity": "sha512-XXTUwCvisa5oacNGRP9SfNtYBNAMi+RPwBFmblZEF7N7swHYQS6/Zfk7SRwx4D5j3CH211YNRco1DEMNVfZCnQ==",
      "dev": true,
      "dependencies": {
        "flat-cache": "^4.0.0"
      },
      "engines": {
        "node": ">=16.0.0"
      }
    },
    "node_modules/fill-range": {
      "version": "7.1.1",
      "resolved": "https://registry.npmjs.org/fill-range/-/fill-range-7.1.1.tgz",
      "integrity": "sha512-YsGpe3WHLK8ZYi4tWDg2Jy3ebRz2rXowDxnld4bkQB00cc/1Zw9AWnC0i9ztDJitivtQvaI9KaLyKrc+hBW0yg==",
      "dev": true,
      "dependencies": {
        "to-regex-range": "^5.0.1"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/find-up": {
      "version": "5.0.0",
      "resolved": "https://registry.npmjs.org/find-up/-/find-up-5.0.0.tgz",
      "integrity": "sha512-78/PXT1wlLLDgTzDs7sjq9hzz0vXD+zn+7wypEe4fXQxCmdmqfGsEPQxmiCSQI3ajFV91bVSsvNtrJRiW6nGng==",
      "dev": true,
      "dependencies": {
        "locate-path": "^6.0.0",
        "path-exists": "^4.0.0"
      },
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/flat-cache": {
      "version": "4.0.1",
      "resolved": "https://registry.npmjs.org/flat-cache/-/flat-cache-4.0.1.tgz",
      "integrity": "sha512-f7ccFPK3SXFHpx15UIGyRJ/FJQctuKZ0zVuN3frBo4HnK3cay9VEW0R6yPYFHC0AgqhukPzKjq22t5DmAyqGyw==",
      "dev": true,
      "dependencies": {
        "flatted": "^3.2.9",
        "keyv": "^4.5.4"
      },
      "engines": {
        "node": ">=16"
      }
    },
    "node_modules/flatted": {
      "version": "3.3.3",
      "resolved": "https://registry.npmjs.org/flatted/-/flatted-3.3.3.tgz",
      "integrity": "sha512-GX+ysw4PBCz0PzosHDepZGANEuFCMLrnRTiEy9McGjmkCQYwRq4A/X786G/fjM/+OjsWSU1ZrY5qyARZmO/uwg==",
      "dev": true
    },
    "node_modules/for-each": {
      "version": "0.3.5",
      "resolved": "https://registry.npmjs.org/for-each/-/for-each-0.3.5.tgz",
      "integrity": "sha512-dKx12eRCVIzqCxFGplyFKJMPvLEWgmNtUrpTiJIR5u97zEhRG8ySrtboPHZXx7daLxQVrl643cTzbab2tkQjxg==",
      "dev": true,
      "dependencies": {
        "is-callable": "^1.2.7"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/framer-motion": {
      "version": "12.29.2",
      "resolved": "https://registry.npmjs.org/framer-motion/-/framer-motion-12.29.2.tgz",
      "integrity": "sha512-lSNRzBJk4wuIy0emYQ/nfZ7eWhqud2umPKw2QAQki6uKhZPKm2hRQHeQoHTG9MIvfobb+A/LbEWPJU794ZUKrg==",
      "license": "MIT",
      "dependencies": {
        "motion-dom": "^12.29.2",
        "motion-utils": "^12.29.2",
        "tslib": "^2.4.0"
      },
      "peerDependencies": {
        "@emotion/is-prop-valid": "*",
        "react": "^18.0.0 || ^19.0.0",
        "react-dom": "^18.0.0 || ^19.0.0"
      },
      "peerDependenciesMeta": {
        "@emotion/is-prop-valid": {
          "optional": true
        },
        "react": {
          "optional": true
        },
        "react-dom": {
          "optional": true
        }
      }
    },
    "node_modules/function-bind": {
      "version": "1.1.2",
      "resolved": "https://registry.npmjs.org/function-bind/-/function-bind-1.1.2.tgz",
      "integrity": "sha512-7XHNxH7qX9xG5mIwxkhumTox/MIRNcOgDrxWsMt2pAr23WHp6MrRlN7FBSFpCpr+oVO0F744iUgR82nJMfG2SA==",
      "dev": true,
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/function.prototype.name": {
      "version": "1.1.8",
      "resolved": "https://registry.npmjs.org/function.prototype.name/-/function.prototype.name-1.1.8.tgz",
      "integrity": "sha512-e5iwyodOHhbMr/yNrc7fDYG4qlbIvI5gajyzPnb5TCwyhjApznQh1BMFou9b30SevY43gCJKXycoCBjMbsuW0Q==",
      "dev": true,
      "dependencies": {
        "call-bind": "^1.0.8",
        "call-bound": "^1.0.3",
        "define-properties": "^1.2.1",
        "functions-have-names": "^1.2.3",
        "hasown": "^2.0.2",
        "is-callable": "^1.2.7"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/functions-have-names": {
      "version": "1.2.3",
      "resolved": "https://registry.npmjs.org/functions-have-names/-/functions-have-names-1.2.3.tgz",
      "integrity": "sha512-xckBUXyTIqT97tq2x2AMb+g163b5JFysYk0x4qxNFwbfQkmNZoiRHb6sPzI9/QV33WeuvVYBUIiD4NzNIyqaRQ==",
      "dev": true,
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/generator-function": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/generator-function/-/generator-function-2.0.1.tgz",
      "integrity": "sha512-SFdFmIJi+ybC0vjlHN0ZGVGHc3lgE0DxPAT0djjVg+kjOnSqclqmj0KQ7ykTOLP6YxoqOvuAODGdcHJn+43q3g==",
      "dev": true,
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/gensync": {
      "version": "1.0.0-beta.2",
      "resolved": "https://registry.npmjs.org/gensync/-/gensync-1.0.0-beta.2.tgz",
      "integrity": "sha512-3hN7NaskYvMDLQY55gnW3NQ+mesEAepTqlg+VEbj7zzqEMBVNhzcGYYeqFo/TlYz6eQiFcp1HcsCZO+nGgS8zg==",
      "dev": true,
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/get-intrinsic": {
      "version": "1.3.0",
      "resolved": "https://registry.npmjs.org/get-intrinsic/-/get-intrinsic-1.3.0.tgz",
      "integrity": "sha512-9fSjSaos/fRIVIp+xSJlE6lfwhES7LNtKaCBIamHsjr2na1BiABJPo0mOjjz8GJDURarmCPGqaiVg5mfjb98CQ==",
      "dev": true,
      "dependencies": {
        "call-bind-apply-helpers": "^1.0.2",
        "es-define-property": "^1.0.1",
        "es-errors": "^1.3.0",
        "es-object-atoms": "^1.1.1",
        "function-bind": "^1.1.2",
        "get-proto": "^1.0.1",
        "gopd": "^1.2.0",
        "has-symbols": "^1.1.0",
        "hasown": "^2.0.2",
        "math-intrinsics": "^1.1.0"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/get-proto": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/get-proto/-/get-proto-1.0.1.tgz",
      "integrity": "sha512-sTSfBjoXBp89JvIKIefqw7U2CCebsc74kiY6awiGogKtoSGbgjYE/G/+l9sF3MWFPNc9IcoOC4ODfKHfxFmp0g==",
      "dev": true,
      "dependencies": {
        "dunder-proto": "^1.0.1",
        "es-object-atoms": "^1.0.0"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/get-symbol-description": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/get-symbol-description/-/get-symbol-description-1.1.0.tgz",
      "integrity": "sha512-w9UMqWwJxHNOvoNzSJ2oPF5wvYcvP7jUvYzhp67yEhTi17ZDBBC1z9pTdGuzjD+EFIqLSYRweZjqfiPzQ06Ebg==",
      "dev": true,
      "dependencies": {
        "call-bound": "^1.0.3",
        "es-errors": "^1.3.0",
        "get-intrinsic": "^1.2.6"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/get-tsconfig": {
      "version": "4.13.0",
      "resolved": "https://registry.npmjs.org/get-tsconfig/-/get-tsconfig-4.13.0.tgz",
      "integrity": "sha512-1VKTZJCwBrvbd+Wn3AOgQP/2Av+TfTCOlE4AcRJE72W1ksZXbAx8PPBR9RzgTeSPzlPMHrbANMH3LbltH73wxQ==",
      "dev": true,
      "dependencies": {
        "resolve-pkg-maps": "^1.0.0"
      },
      "funding": {
        "url": "https://github.com/privatenumber/get-tsconfig?sponsor=1"
      }
    },
    "node_modules/glob-parent": {
      "version": "6.0.2",
      "resolved": "https://registry.npmjs.org/glob-parent/-/glob-parent-6.0.2.tgz",
      "integrity": "sha512-XxwI8EOhVQgWp6iDL+3b0r86f4d6AX6zSU55HfB4ydCEuXLXc5FcYeOu+nnGftS4TEju/11rt4KJPTMgbfmv4A==",
      "dev": true,
      "dependencies": {
        "is-glob": "^4.0.3"
      },
      "engines": {
        "node": ">=10.13.0"
      }
    },
    "node_modules/globals": {
      "version": "14.0.0",
      "resolved": "https://registry.npmjs.org/globals/-/globals-14.0.0.tgz",
      "integrity": "sha512-oahGvuMGQlPw/ivIYBjVSrWAfWLBeku5tpPE2fOPLi+WHffIWbuh2tCjhyQhTBPMf5E9jDEH4FOmTYgYwbKwtQ==",
      "dev": true,
      "engines": {
        "node": ">=18"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/globalthis": {
      "version": "1.0.4",
      "resolved": "https://registry.npmjs.org/globalthis/-/globalthis-1.0.4.tgz",
      "integrity": "sha512-DpLKbNU4WylpxJykQujfCcwYWiV/Jhm50Goo0wrVILAv5jOr9d+H+UR3PhSCD2rCCEIg0uc+G+muBTwD54JhDQ==",
      "dev": true,
      "dependencies": {
        "define-properties": "^1.2.1",
        "gopd": "^1.0.1"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/gopd": {
      "version": "1.2.0",
      "resolved": "https://registry.npmjs.org/gopd/-/gopd-1.2.0.tgz",
      "integrity": "sha512-ZUKRh6/kUFoAiTAtTYPZJ3hw9wNxx+BIBOijnlG9PnrJsCcSjs1wyyD6vJpaYtgnzDrKYRSqf3OO6Rfa93xsRg==",
      "dev": true,
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/graceful-fs": {
      "version": "4.2.11",
      "resolved": "https://registry.npmjs.org/graceful-fs/-/graceful-fs-4.2.11.tgz",
      "integrity": "sha512-RbJ5/jmFcNNCcDV5o9eTnBLJ/HszWV0P73bc+Ff4nS/rJj+YaS6IGyiOL0VoBYX+l1Wrl3k63h/KrH+nhJ0XvQ==",
      "dev": true
    },
    "node_modules/has-bigints": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/has-bigints/-/has-bigints-1.1.0.tgz",
      "integrity": "sha512-R3pbpkcIqv2Pm3dUwgjclDRVmWpTJW2DcMzcIhEXEx1oh/CEMObMm3KLmRJOdvhM7o4uQBnwr8pzRK2sJWIqfg==",
      "dev": true,
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/has-flag": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/has-flag/-/has-flag-4.0.0.tgz",
      "integrity": "sha512-EykJT/Q1KjTWctppgIAgfSO0tKVuZUjhgMr17kqTumMl6Afv3EISleU7qZUzoXDFTAHTDC4NOoG/ZxU3EvlMPQ==",
      "dev": true,
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/has-property-descriptors": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/has-property-descriptors/-/has-property-descriptors-1.0.2.tgz",
      "integrity": "sha512-55JNKuIW+vq4Ke1BjOTjM2YctQIvCT7GFzHwmfZPGo5wnrgkid0YQtnAleFSqumZm4az3n2BS+erby5ipJdgrg==",
      "dev": true,
      "dependencies": {
        "es-define-property": "^1.0.0"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/has-proto": {
      "version": "1.2.0",
      "resolved": "https://registry.npmjs.org/has-proto/-/has-proto-1.2.0.tgz",
      "integrity": "sha512-KIL7eQPfHQRC8+XluaIw7BHUwwqL19bQn4hzNgdr+1wXoU0KKj6rufu47lhY7KbJR2C6T6+PfyN0Ea7wkSS+qQ==",
      "dev": true,
      "dependencies": {
        "dunder-proto": "^1.0.0"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/has-symbols": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/has-symbols/-/has-symbols-1.1.0.tgz",
      "integrity": "sha512-1cDNdwJ2Jaohmb3sg4OmKaMBwuC48sYni5HUw2DvsC8LjGTLK9h+eb1X6RyuOHe4hT0ULCW68iomhjUoKUqlPQ==",
      "dev": true,
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/has-tostringtag": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/has-tostringtag/-/has-tostringtag-1.0.2.tgz",
      "integrity": "sha512-NqADB8VjPFLM2V0VvHUewwwsw0ZWBaIdgo+ieHtK3hasLz4qeCRjYcqfB6AQrBggRKppKF8L52/VqdVsO47Dlw==",
      "dev": true,
      "dependencies": {
        "has-symbols": "^1.0.3"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/hasown": {
      "version": "2.0.2",
      "resolved": "https://registry.npmjs.org/hasown/-/hasown-2.0.2.tgz",
      "integrity": "sha512-0hJU9SCPvmMzIBdZFqNPXWa6dqh7WdH0cII9y+CyS8rG3nL48Bclra9HmKhVVUHyPWNH5Y7xDwAB7bfgSjkUMQ==",
      "dev": true,
      "dependencies": {
        "function-bind": "^1.1.2"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/hermes-estree": {
      "version": "0.25.1",
      "resolved": "https://registry.npmjs.org/hermes-estree/-/hermes-estree-0.25.1.tgz",
      "integrity": "sha512-0wUoCcLp+5Ev5pDW2OriHC2MJCbwLwuRx+gAqMTOkGKJJiBCLjtrvy4PWUGn6MIVefecRpzoOZ/UV6iGdOr+Cw==",
      "dev": true
    },
    "node_modules/hermes-parser": {
      "version": "0.25.1",
      "resolved": "https://registry.npmjs.org/hermes-parser/-/hermes-parser-0.25.1.tgz",
      "integrity": "sha512-6pEjquH3rqaI6cYAXYPcz9MS4rY6R4ngRgrgfDshRptUZIc3lw0MCIJIGDj9++mfySOuPTHB4nrSW99BCvOPIA==",
      "dev": true,
      "dependencies": {
        "hermes-estree": "0.25.1"
      }
    },
    "node_modules/ignore": {
      "version": "5.3.2",
      "resolved": "https://registry.npmjs.org/ignore/-/ignore-5.3.2.tgz",
      "integrity": "sha512-hsBTNUqQTDwkWtcdYI2i06Y/nUBEsNEDJKjWdigLvegy8kDuJAS8uRlpkkcQpyEXL0Z/pjDy5HBmMjRCJ2gq+g==",
      "dev": true,
      "engines": {
        "node": ">= 4"
      }
    },
    "node_modules/immer": {
      "version": "10.2.0",
      "resolved": "https://registry.npmjs.org/immer/-/immer-10.2.0.tgz",
      "integrity": "sha512-d/+XTN3zfODyjr89gM3mPq1WNX2B8pYsu7eORitdwyA2sBubnTl3laYlBk4sXY5FUa5qTZGBDPJICVbvqzjlbw==",
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/immer"
      }
    },
    "node_modules/import-fresh": {
      "version": "3.3.1",
      "resolved": "https://registry.npmjs.org/import-fresh/-/import-fresh-3.3.1.tgz",
      "integrity": "sha512-TR3KfrTZTYLPB6jUjfx6MF9WcWrHL9su5TObK4ZkYgBdWKPOFoSoQIdEuTuR82pmtxH2spWG9h6etwfr1pLBqQ==",
      "dev": true,
      "dependencies": {
        "parent-module": "^1.0.0",
        "resolve-from": "^4.0.0"
      },
      "engines": {
        "node": ">=6"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/imurmurhash": {
      "version": "0.1.4",
      "resolved": "https://registry.npmjs.org/imurmurhash/-/imurmurhash-0.1.4.tgz",
      "integrity": "sha512-JmXMZ6wuvDmLiHEml9ykzqO6lwFbof0GG4IkcGaENdCRDDmMVnny7s5HsIgHCbaq0w2MyPhDqkhTUgS2LU2PHA==",
      "dev": true,
      "engines": {
        "node": ">=0.8.19"
      }
    },
    "node_modules/internal-slot": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/internal-slot/-/internal-slot-1.1.0.tgz",
      "integrity": "sha512-4gd7VpWNQNB4UKKCFFVcp1AVv+FMOgs9NKzjHKusc8jTMhd5eL1NqQqOpE0KzMds804/yHlglp3uxgluOqAPLw==",
      "dev": true,
      "dependencies": {
        "es-errors": "^1.3.0",
        "hasown": "^2.0.2",
        "side-channel": "^1.1.0"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/internmap": {
      "version": "2.0.3",
      "resolved": "https://registry.npmjs.org/internmap/-/internmap-2.0.3.tgz",
      "integrity": "sha512-5Hh7Y1wQbvY5ooGgPbDaL5iYLAPzMTUrjMulskHLH6wnv/A+1q5rgEaiuqEjB+oxGXIVZs1FF+R/KPN3ZSQYYg==",
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/is-array-buffer": {
      "version": "3.0.5",
      "resolved": "https://registry.npmjs.org/is-array-buffer/-/is-array-buffer-3.0.5.tgz",
      "integrity": "sha512-DDfANUiiG2wC1qawP66qlTugJeL5HyzMpfr8lLK+jMQirGzNod0B12cFB/9q838Ru27sBwfw78/rdoU7RERz6A==",
      "dev": true,
      "dependencies": {
        "call-bind": "^1.0.8",
        "call-bound": "^1.0.3",
        "get-intrinsic": "^1.2.6"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/is-async-function": {
      "version": "2.1.1",
      "resolved": "https://registry.npmjs.org/is-async-function/-/is-async-function-2.1.1.tgz",
      "integrity": "sha512-9dgM/cZBnNvjzaMYHVoxxfPj2QXt22Ev7SuuPrs+xav0ukGB0S6d4ydZdEiM48kLx5kDV+QBPrpVnFyefL8kkQ==",
      "dev": true,
      "dependencies": {
        "async-function": "^1.0.0",
        "call-bound": "^1.0.3",
        "get-proto": "^1.0.1",
        "has-tostringtag": "^1.0.2",
        "safe-regex-test": "^1.1.0"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/is-bigint": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/is-bigint/-/is-bigint-1.1.0.tgz",
      "integrity": "sha512-n4ZT37wG78iz03xPRKJrHTdZbe3IicyucEtdRsV5yglwc3GyUfbAfpSeD0FJ41NbUNSt5wbhqfp1fS+BgnvDFQ==",
      "dev": true,
      "dependencies": {
        "has-bigints": "^1.0.2"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/is-boolean-object": {
      "version": "1.2.2",
      "resolved": "https://registry.npmjs.org/is-boolean-object/-/is-boolean-object-1.2.2.tgz",
      "integrity": "sha512-wa56o2/ElJMYqjCjGkXri7it5FbebW5usLw/nPmCMs5DeZ7eziSYZhSmPRn0txqeW4LnAmQQU7FgqLpsEFKM4A==",
      "dev": true,
      "dependencies": {
        "call-bound": "^1.0.3",
        "has-tostringtag": "^1.0.2"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/is-bun-module": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/is-bun-module/-/is-bun-module-2.0.0.tgz",
      "integrity": "sha512-gNCGbnnnnFAUGKeZ9PdbyeGYJqewpmc2aKHUEMO5nQPWU9lOmv7jcmQIv+qHD8fXW6W7qfuCwX4rY9LNRjXrkQ==",
      "dev": true,
      "dependencies": {
        "semver": "^7.7.1"
      }
    },
    "node_modules/is-bun-module/node_modules/semver": {
      "version": "7.7.3",
      "resolved": "https://registry.npmjs.org/semver/-/semver-7.7.3.tgz",
      "integrity": "sha512-SdsKMrI9TdgjdweUSR9MweHA4EJ8YxHn8DFaDisvhVlUOe4BF1tLD7GAj0lIqWVl+dPb/rExr0Btby5loQm20Q==",
      "dev": true,
      "bin": {
        "semver": "bin/semver.js"
      },
      "engines": {
        "node": ">=10"
      }
    },
    "node_modules/is-callable": {
      "version": "1.2.7",
      "resolved": "https://registry.npmjs.org/is-callable/-/is-callable-1.2.7.tgz",
      "integrity": "sha512-1BC0BVFhS/p0qtw6enp8e+8OD0UrK0oFLztSjNzhcKA3WDuJxxAPXzPuPtKkjEY9UUoEWlX/8fgKeu2S8i9JTA==",
      "dev": true,
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/is-core-module": {
      "version": "2.16.1",
      "resolved": "https://registry.npmjs.org/is-core-module/-/is-core-module-2.16.1.tgz",
      "integrity": "sha512-UfoeMA6fIJ8wTYFEUjelnaGI67v6+N7qXJEvQuIGa99l4xsCruSYOVSQ0uPANn4dAzm8lkYPaKLrrijLq7x23w==",
      "dev": true,
      "dependencies": {
        "hasown": "^2.0.2"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/is-data-view": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/is-data-view/-/is-data-view-1.0.2.tgz",
      "integrity": "sha512-RKtWF8pGmS87i2D6gqQu/l7EYRlVdfzemCJN/P3UOs//x1QE7mfhvzHIApBTRf7axvT6DMGwSwBXYCT0nfB9xw==",
      "dev": true,
      "dependencies": {
        "call-bound": "^1.0.2",
        "get-intrinsic": "^1.2.6",
        "is-typed-array": "^1.1.13"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/is-date-object": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/is-date-object/-/is-date-object-1.1.0.tgz",
      "integrity": "sha512-PwwhEakHVKTdRNVOw+/Gyh0+MzlCl4R6qKvkhuvLtPMggI1WAHt9sOwZxQLSGpUaDnrdyDsomoRgNnCfKNSXXg==",
      "dev": true,
      "dependencies": {
        "call-bound": "^1.0.2",
        "has-tostringtag": "^1.0.2"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/is-extglob": {
      "version": "2.1.1",
      "resolved": "https://registry.npmjs.org/is-extglob/-/is-extglob-2.1.1.tgz",
      "integrity": "sha512-SbKbANkN603Vi4jEZv49LeVJMn4yGwsbzZworEoyEiutsN3nJYdbO36zfhGJ6QEDpOZIFkDtnq5JRxmvl3jsoQ==",
      "dev": true,
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/is-finalizationregistry": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/is-finalizationregistry/-/is-finalizationregistry-1.1.1.tgz",
      "integrity": "sha512-1pC6N8qWJbWoPtEjgcL2xyhQOP491EQjeUo3qTKcmV8YSDDJrOepfG8pcC7h/QgnQHYSv0mJ3Z/ZWxmatVrysg==",
      "dev": true,
      "dependencies": {
        "call-bound": "^1.0.3"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/is-generator-function": {
      "version": "1.1.2",
      "resolved": "https://registry.npmjs.org/is-generator-function/-/is-generator-function-1.1.2.tgz",
      "integrity": "sha512-upqt1SkGkODW9tsGNG5mtXTXtECizwtS2kA161M+gJPc1xdb/Ax629af6YrTwcOeQHbewrPNlE5Dx7kzvXTizA==",
      "dev": true,
      "dependencies": {
        "call-bound": "^1.0.4",
        "generator-function": "^2.0.0",
        "get-proto": "^1.0.1",
        "has-tostringtag": "^1.0.2",
        "safe-regex-test": "^1.1.0"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/is-glob": {
      "version": "4.0.3",
      "resolved": "https://registry.npmjs.org/is-glob/-/is-glob-4.0.3.tgz",
      "integrity": "sha512-xelSayHH36ZgE7ZWhli7pW34hNbNl8Ojv5KVmkJD4hBdD3th8Tfk9vYasLM+mXWOZhFkgZfxhLSnrwRr4elSSg==",
      "dev": true,
      "dependencies": {
        "is-extglob": "^2.1.1"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/is-map": {
      "version": "2.0.3",
      "resolved": "https://registry.npmjs.org/is-map/-/is-map-2.0.3.tgz",
      "integrity": "sha512-1Qed0/Hr2m+YqxnM09CjA2d/i6YZNfF6R2oRAOj36eUdS6qIV/huPJNSEpKbupewFs+ZsJlxsjjPbc0/afW6Lw==",
      "dev": true,
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/is-negative-zero": {
      "version": "2.0.3",
      "resolved": "https://registry.npmjs.org/is-negative-zero/-/is-negative-zero-2.0.3.tgz",
      "integrity": "sha512-5KoIu2Ngpyek75jXodFvnafB6DJgr3u8uuK0LEZJjrU19DrMD3EVERaR8sjz8CCGgpZvxPl9SuE1GMVPFHx1mw==",
      "dev": true,
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/is-number": {
      "version": "7.0.0",
      "resolved": "https://registry.npmjs.org/is-number/-/is-number-7.0.0.tgz",
      "integrity": "sha512-41Cifkg6e8TylSpdtTpeLVMqvSBEVzTttHvERD741+pnZ8ANv0004MRL43QKPDlK9cGvNp6NZWZUBlbGXYxxng==",
      "dev": true,
      "engines": {
        "node": ">=0.12.0"
      }
    },
    "node_modules/is-number-object": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/is-number-object/-/is-number-object-1.1.1.tgz",
      "integrity": "sha512-lZhclumE1G6VYD8VHe35wFaIif+CTy5SJIi5+3y4psDgWu4wPDoBhF8NxUOinEc7pHgiTsT6MaBb92rKhhD+Xw==",
      "dev": true,
      "dependencies": {
        "call-bound": "^1.0.3",
        "has-tostringtag": "^1.0.2"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/is-regex": {
      "version": "1.2.1",
      "resolved": "https://registry.npmjs.org/is-regex/-/is-regex-1.2.1.tgz",
      "integrity": "sha512-MjYsKHO5O7mCsmRGxWcLWheFqN9DJ/2TmngvjKXihe6efViPqc274+Fx/4fYj/r03+ESvBdTXK0V6tA3rgez1g==",
      "dev": true,
      "dependencies": {
        "call-bound": "^1.0.2",
        "gopd": "^1.2.0",
        "has-tostringtag": "^1.0.2",
        "hasown": "^2.0.2"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/is-set": {
      "version": "2.0.3",
      "resolved": "https://registry.npmjs.org/is-set/-/is-set-2.0.3.tgz",
      "integrity": "sha512-iPAjerrse27/ygGLxw+EBR9agv9Y6uLeYVJMu+QNCoouJ1/1ri0mGrcWpfCqFZuzzx3WjtwxG098X+n4OuRkPg==",
      "dev": true,
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/is-shared-array-buffer": {
      "version": "1.0.4",
      "resolved": "https://registry.npmjs.org/is-shared-array-buffer/-/is-shared-array-buffer-1.0.4.tgz",
      "integrity": "sha512-ISWac8drv4ZGfwKl5slpHG9OwPNty4jOWPRIhBpxOoD+hqITiwuipOQ2bNthAzwA3B4fIjO4Nln74N0S9byq8A==",
      "dev": true,
      "dependencies": {
        "call-bound": "^1.0.3"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/is-string": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/is-string/-/is-string-1.1.1.tgz",
      "integrity": "sha512-BtEeSsoaQjlSPBemMQIrY1MY0uM6vnS1g5fmufYOtnxLGUZM2178PKbhsk7Ffv58IX+ZtcvoGwccYsh0PglkAA==",
      "dev": true,
      "dependencies": {
        "call-bound": "^1.0.3",
        "has-tostringtag": "^1.0.2"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/is-symbol": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/is-symbol/-/is-symbol-1.1.1.tgz",
      "integrity": "sha512-9gGx6GTtCQM73BgmHQXfDmLtfjjTUDSyoxTCbp5WtoixAhfgsDirWIcVQ/IHpvI5Vgd5i/J5F7B9cN/WlVbC/w==",
      "dev": true,
      "dependencies": {
        "call-bound": "^1.0.2",
        "has-symbols": "^1.1.0",
        "safe-regex-test": "^1.1.0"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/is-typed-array": {
      "version": "1.1.15",
      "resolved": "https://registry.npmjs.org/is-typed-array/-/is-typed-array-1.1.15.tgz",
      "integrity": "sha512-p3EcsicXjit7SaskXHs1hA91QxgTw46Fv6EFKKGS5DRFLD8yKnohjF3hxoju94b/OcMZoQukzpPpBE9uLVKzgQ==",
      "dev": true,
      "dependencies": {
        "which-typed-array": "^1.1.16"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/is-weakmap": {
      "version": "2.0.2",
      "resolved": "https://registry.npmjs.org/is-weakmap/-/is-weakmap-2.0.2.tgz",
      "integrity": "sha512-K5pXYOm9wqY1RgjpL3YTkF39tni1XajUIkawTLUo9EZEVUFga5gSQJF8nNS7ZwJQ02y+1YCNYcMh+HIf1ZqE+w==",
      "dev": true,
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/is-weakref": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/is-weakref/-/is-weakref-1.1.1.tgz",
      "integrity": "sha512-6i9mGWSlqzNMEqpCp93KwRS1uUOodk2OJ6b+sq7ZPDSy2WuI5NFIxp/254TytR8ftefexkWn5xNiHUNpPOfSew==",
      "dev": true,
      "dependencies": {
        "call-bound": "^1.0.3"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/is-weakset": {
      "version": "2.0.4",
      "resolved": "https://registry.npmjs.org/is-weakset/-/is-weakset-2.0.4.tgz",
      "integrity": "sha512-mfcwb6IzQyOKTs84CQMrOwW4gQcaTOAWJ0zzJCl2WSPDrWk/OzDaImWFH3djXhb24g4eudZfLRozAvPGw4d9hQ==",
      "dev": true,
      "dependencies": {
        "call-bound": "^1.0.3",
        "get-intrinsic": "^1.2.6"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/isarray": {
      "version": "2.0.5",
      "resolved": "https://registry.npmjs.org/isarray/-/isarray-2.0.5.tgz",
      "integrity": "sha512-xHjhDr3cNBK0BzdUJSPXZntQUx/mwMS5Rw4A7lPJ90XGAO6ISP/ePDNuo0vhqOZU+UD5JoodwCAAoZQd3FeAKw==",
      "dev": true
    },
    "node_modules/isexe": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/isexe/-/isexe-2.0.0.tgz",
      "integrity": "sha512-RHxMLp9lnKHGHRng9QFhRCMbYAcVpn69smSGcq3f36xjgVVWThj4qqLbTLlq7Ssj8B+fIQ1EuCEGI2lKsyQeIw==",
      "dev": true
    },
    "node_modules/iterator.prototype": {
      "version": "1.1.5",
      "resolved": "https://registry.npmjs.org/iterator.prototype/-/iterator.prototype-1.1.5.tgz",
      "integrity": "sha512-H0dkQoCa3b2VEeKQBOxFph+JAbcrQdE7KC0UkqwpLmv2EC4P41QXP+rqo9wYodACiG5/WM5s9oDApTU8utwj9g==",
      "dev": true,
      "dependencies": {
        "define-data-property": "^1.1.4",
        "es-object-atoms": "^1.0.0",
        "get-intrinsic": "^1.2.6",
        "get-proto": "^1.0.0",
        "has-symbols": "^1.1.0",
        "set-function-name": "^2.0.2"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/jiti": {
      "version": "2.6.1",
      "resolved": "https://registry.npmjs.org/jiti/-/jiti-2.6.1.tgz",
      "integrity": "sha512-ekilCSN1jwRvIbgeg/57YFh8qQDNbwDb9xT/qu2DAHbFFZUicIl4ygVaAvzveMhMVr3LnpSKTNnwt8PoOfmKhQ==",
      "dev": true,
      "bin": {
        "jiti": "lib/jiti-cli.mjs"
      }
    },
    "node_modules/js-tokens": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/js-tokens/-/js-tokens-4.0.0.tgz",
      "integrity": "sha512-RdJUflcE3cUzKiMqQgsCu06FPu9UdIJO0beYbPhHN4k6apgJtifcoCtT9bcxOpYBtpD2kCM6Sbzg4CausW/PKQ==",
      "dev": true
    },
    "node_modules/js-yaml": {
      "version": "4.1.1",
      "resolved": "https://registry.npmjs.org/js-yaml/-/js-yaml-4.1.1.tgz",
      "integrity": "sha512-qQKT4zQxXl8lLwBtHMWwaTcGfFOZviOJet3Oy/xmGk2gZH677CJM9EvtfdSkgWcATZhj/55JZ0rmy3myCT5lsA==",
      "dev": true,
      "dependencies": {
        "argparse": "^2.0.1"
      },
      "bin": {
        "js-yaml": "bin/js-yaml.js"
      }
    },
    "node_modules/jsesc": {
      "version": "3.1.0",
      "resolved": "https://registry.npmjs.org/jsesc/-/jsesc-3.1.0.tgz",
      "integrity": "sha512-/sM3dO2FOzXjKQhJuo0Q173wf2KOo8t4I8vHy6lF9poUp7bKT0/NHE8fPX23PwfhnykfqnC2xRxOnVw5XuGIaA==",
      "dev": true,
      "bin": {
        "jsesc": "bin/jsesc"
      },
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/json-buffer": {
      "version": "3.0.1",
      "resolved": "https://registry.npmjs.org/json-buffer/-/json-buffer-3.0.1.tgz",
      "integrity": "sha512-4bV5BfR2mqfQTJm+V5tPPdf+ZpuhiIvTuAB5g8kcrXOZpTT/QwwVRWBywX1ozr6lEuPdbHxwaJlm9G6mI2sfSQ==",
      "dev": true
    },
    "node_modules/json-schema-traverse": {
      "version": "0.4.1",
      "resolved": "https://registry.npmjs.org/json-schema-traverse/-/json-schema-traverse-0.4.1.tgz",
      "integrity": "sha512-xbbCH5dCYU5T8LcEhhuh7HJ88HXuW3qsI3Y0zOZFKfZEHcpWiHU/Jxzk629Brsab/mMiHQti9wMP+845RPe3Vg==",
      "dev": true
    },
    "node_modules/json-stable-stringify-without-jsonify": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/json-stable-stringify-without-jsonify/-/json-stable-stringify-without-jsonify-1.0.1.tgz",
      "integrity": "sha512-Bdboy+l7tA3OGW6FjyFHWkP5LuByj1Tk33Ljyq0axyzdk9//JSi2u3fP1QSmd1KNwq6VOKYGlAu87CisVir6Pw==",
      "dev": true
    },
    "node_modules/json5": {
      "version": "2.2.3",
      "resolved": "https://registry.npmjs.org/json5/-/json5-2.2.3.tgz",
      "integrity": "sha512-XmOWe7eyHYH14cLdVPoyg+GOH3rYX++KpzrylJwSW98t3Nk+U8XOl8FWKOgwtzdb8lXGf6zYwDUzeHMWfxasyg==",
      "dev": true,
      "bin": {
        "json5": "lib/cli.js"
      },
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/jsx-ast-utils": {
      "version": "3.3.5",
      "resolved": "https://registry.npmjs.org/jsx-ast-utils/-/jsx-ast-utils-3.3.5.tgz",
      "integrity": "sha512-ZZow9HBI5O6EPgSJLUb8n2NKgmVWTwCvHGwFuJlMjvLFqlGG6pjirPhtdsseaLZjSibD8eegzmYpUZwoIlj2cQ==",
      "dev": true,
      "dependencies": {
        "array-includes": "^3.1.6",
        "array.prototype.flat": "^1.3.1",
        "object.assign": "^4.1.4",
        "object.values": "^1.1.6"
      },
      "engines": {
        "node": ">=4.0"
      }
    },
    "node_modules/keyv": {
      "version": "4.5.4",
      "resolved": "https://registry.npmjs.org/keyv/-/keyv-4.5.4.tgz",
      "integrity": "sha512-oxVHkHR/EJf2CNXnWxRLW6mg7JyCCUcG0DtEGmL2ctUo1PNTin1PUil+r/+4r5MpVgC/fn1kjsx7mjSujKqIpw==",
      "dev": true,
      "dependencies": {
        "json-buffer": "3.0.1"
      }
    },
    "node_modules/language-subtag-registry": {
      "version": "0.3.23",
      "resolved": "https://registry.npmjs.org/language-subtag-registry/-/language-subtag-registry-0.3.23.tgz",
      "integrity": "sha512-0K65Lea881pHotoGEa5gDlMxt3pctLi2RplBb7Ezh4rRdLEOtgi7n4EwK9lamnUCkKBqaeKRVebTq6BAxSkpXQ==",
      "dev": true
    },
    "node_modules/language-tags": {
      "version": "1.0.9",
      "resolved": "https://registry.npmjs.org/language-tags/-/language-tags-1.0.9.tgz",
      "integrity": "sha512-MbjN408fEndfiQXbFQ1vnd+1NoLDsnQW41410oQBXiyXDMYH5z505juWa4KUE1LqxRC7DgOgZDbKLxHIwm27hA==",
      "dev": true,
      "dependencies": {
        "language-subtag-registry": "^0.3.20"
      },
      "engines": {
        "node": ">=0.10"
      }
    },
    "node_modules/levn": {
      "version": "0.4.1",
      "resolved": "https://registry.npmjs.org/levn/-/levn-0.4.1.tgz",
      "integrity": "sha512-+bT2uH4E5LGE7h/n3evcS/sQlJXCpIp6ym8OWJ5eV6+67Dsql/LaaT7qJBAt2rzfoa/5QBGBhxDix1dMt2kQKQ==",
      "dev": true,
      "dependencies": {
        "prelude-ls": "^1.2.1",
        "type-check": "~0.4.0"
      },
      "engines": {
        "node": ">= 0.8.0"
      }
    },
    "node_modules/lightningcss": {
      "version": "1.30.2",
      "resolved": "https://registry.npmjs.org/lightningcss/-/lightningcss-1.30.2.tgz",
      "integrity": "sha512-utfs7Pr5uJyyvDETitgsaqSyjCb2qNRAtuqUeWIAKztsOYdcACf2KtARYXg2pSvhkt+9NfoaNY7fxjl6nuMjIQ==",
      "dev": true,
      "dependencies": {
        "detect-libc": "^2.0.3"
      },
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      },
      "optionalDependencies": {
        "lightningcss-android-arm64": "1.30.2",
        "lightningcss-darwin-arm64": "1.30.2",
        "lightningcss-darwin-x64": "1.30.2",
        "lightningcss-freebsd-x64": "1.30.2",
        "lightningcss-linux-arm-gnueabihf": "1.30.2",
        "lightningcss-linux-arm64-gnu": "1.30.2",
        "lightningcss-linux-arm64-musl": "1.30.2",
        "lightningcss-linux-x64-gnu": "1.30.2",
        "lightningcss-linux-x64-musl": "1.30.2",
        "lightningcss-win32-arm64-msvc": "1.30.2",
        "lightningcss-win32-x64-msvc": "1.30.2"
      }
    },
    "node_modules/lightningcss-android-arm64": {
      "version": "1.30.2",
      "resolved": "https://registry.npmjs.org/lightningcss-android-arm64/-/lightningcss-android-arm64-1.30.2.tgz",
      "integrity": "sha512-BH9sEdOCahSgmkVhBLeU7Hc9DWeZ1Eb6wNS6Da8igvUwAe0sqROHddIlvU06q3WyXVEOYDZ6ykBZQnjTbmo4+A==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "optional": true,
      "os": [
        "android"
      ],
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/lightningcss-darwin-arm64": {
      "version": "1.30.2",
      "resolved": "https://registry.npmjs.org/lightningcss-darwin-arm64/-/lightningcss-darwin-arm64-1.30.2.tgz",
      "integrity": "sha512-ylTcDJBN3Hp21TdhRT5zBOIi73P6/W0qwvlFEk22fkdXchtNTOU4Qc37SkzV+EKYxLouZ6M4LG9NfZ1qkhhBWA==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/lightningcss-darwin-x64": {
      "version": "1.30.2",
      "resolved": "https://registry.npmjs.org/lightningcss-darwin-x64/-/lightningcss-darwin-x64-1.30.2.tgz",
      "integrity": "sha512-oBZgKchomuDYxr7ilwLcyms6BCyLn0z8J0+ZZmfpjwg9fRVZIR5/GMXd7r9RH94iDhld3UmSjBM6nXWM2TfZTQ==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/lightningcss-freebsd-x64": {
      "version": "1.30.2",
      "resolved": "https://registry.npmjs.org/lightningcss-freebsd-x64/-/lightningcss-freebsd-x64-1.30.2.tgz",
      "integrity": "sha512-c2bH6xTrf4BDpK8MoGG4Bd6zAMZDAXS569UxCAGcA7IKbHNMlhGQ89eRmvpIUGfKWNVdbhSbkQaWhEoMGmGslA==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "optional": true,
      "os": [
        "freebsd"
      ],
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/lightningcss-linux-arm-gnueabihf": {
      "version": "1.30.2",
      "resolved": "https://registry.npmjs.org/lightningcss-linux-arm-gnueabihf/-/lightningcss-linux-arm-gnueabihf-1.30.2.tgz",
      "integrity": "sha512-eVdpxh4wYcm0PofJIZVuYuLiqBIakQ9uFZmipf6LF/HRj5Bgm0eb3qL/mr1smyXIS1twwOxNWndd8z0E374hiA==",
      "cpu": [
        "arm"
      ],
      "dev": true,
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/lightningcss-linux-arm64-gnu": {
      "version": "1.30.2",
      "resolved": "https://registry.npmjs.org/lightningcss-linux-arm64-gnu/-/lightningcss-linux-arm64-gnu-1.30.2.tgz",
      "integrity": "sha512-UK65WJAbwIJbiBFXpxrbTNArtfuznvxAJw4Q2ZGlU8kPeDIWEX1dg3rn2veBVUylA2Ezg89ktszWbaQnxD/e3A==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/lightningcss-linux-arm64-musl": {
      "version": "1.30.2",
      "resolved": "https://registry.npmjs.org/lightningcss-linux-arm64-musl/-/lightningcss-linux-arm64-musl-1.30.2.tgz",
      "integrity": "sha512-5Vh9dGeblpTxWHpOx8iauV02popZDsCYMPIgiuw97OJ5uaDsL86cnqSFs5LZkG3ghHoX5isLgWzMs+eD1YzrnA==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/lightningcss-linux-x64-gnu": {
      "version": "1.30.2",
      "resolved": "https://registry.npmjs.org/lightningcss-linux-x64-gnu/-/lightningcss-linux-x64-gnu-1.30.2.tgz",
      "integrity": "sha512-Cfd46gdmj1vQ+lR6VRTTadNHu6ALuw2pKR9lYq4FnhvgBc4zWY1EtZcAc6EffShbb1MFrIPfLDXD6Xprbnni4w==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/lightningcss-linux-x64-musl": {
      "version": "1.30.2",
      "resolved": "https://registry.npmjs.org/lightningcss-linux-x64-musl/-/lightningcss-linux-x64-musl-1.30.2.tgz",
      "integrity": "sha512-XJaLUUFXb6/QG2lGIW6aIk6jKdtjtcffUT0NKvIqhSBY3hh9Ch+1LCeH80dR9q9LBjG3ewbDjnumefsLsP6aiA==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/lightningcss-win32-arm64-msvc": {
      "version": "1.30.2",
      "resolved": "https://registry.npmjs.org/lightningcss-win32-arm64-msvc/-/lightningcss-win32-arm64-msvc-1.30.2.tgz",
      "integrity": "sha512-FZn+vaj7zLv//D/192WFFVA0RgHawIcHqLX9xuWiQt7P0PtdFEVaxgF9rjM/IRYHQXNnk61/H/gb2Ei+kUQ4xQ==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/lightningcss-win32-x64-msvc": {
      "version": "1.30.2",
      "resolved": "https://registry.npmjs.org/lightningcss-win32-x64-msvc/-/lightningcss-win32-x64-msvc-1.30.2.tgz",
      "integrity": "sha512-5g1yc73p+iAkid5phb4oVFMB45417DkRevRbt/El/gKXJk4jid+vPFF/AXbxn05Aky8PapwzZrdJShv5C0avjw==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/locate-path": {
      "version": "6.0.0",
      "resolved": "https://registry.npmjs.org/locate-path/-/locate-path-6.0.0.tgz",
      "integrity": "sha512-iPZK6eYjbxRu3uB4/WZ3EsEIMJFMqAoopl3R+zuq0UjcAm/MO6KCweDgPfP3elTztoKP3KtnVHxTn2NHBSDVUw==",
      "dev": true,
      "dependencies": {
        "p-locate": "^5.0.0"
      },
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/lodash.merge": {
      "version": "4.6.2",
      "resolved": "https://registry.npmjs.org/lodash.merge/-/lodash.merge-4.6.2.tgz",
      "integrity": "sha512-0KpjqXRVvrYyCsX1swR/XTK0va6VQkQM6MNo7PqW77ByjAhoARA8EfrP1N4+KlKj8YS0ZUCtRT/YUuhyYDujIQ==",
      "dev": true
    },
    "node_modules/loose-envify": {
      "version": "1.4.0",
      "resolved": "https://registry.npmjs.org/loose-envify/-/loose-envify-1.4.0.tgz",
      "integrity": "sha512-lyuxPGr/Wfhrlem2CL/UcnUc1zcqKAImBDzukY7Y5F/yQiNdko6+fRLevlw1HgMySw7f611UIY408EtxRSoK3Q==",
      "dev": true,
      "dependencies": {
        "js-tokens": "^3.0.0 || ^4.0.0"
      },
      "bin": {
        "loose-envify": "cli.js"
      }
    },
    "node_modules/lru-cache": {
      "version": "5.1.1",
      "resolved": "https://registry.npmjs.org/lru-cache/-/lru-cache-5.1.1.tgz",
      "integrity": "sha512-KpNARQA3Iwv+jTA0utUVVbrh+Jlrr1Fv0e56GGzAFOXN7dk/FviaDW8LHmK52DlcH4WP2n6gI8vN1aesBFgo9w==",
      "dev": true,
      "dependencies": {
        "yallist": "^3.0.2"
      }
    },
    "node_modules/lucide-react": {
      "version": "0.561.0",
      "resolved": "https://registry.npmjs.org/lucide-react/-/lucide-react-0.561.0.tgz",
      "integrity": "sha512-Y59gMY38tl4/i0qewcqohPdEbieBy7SovpBL9IFebhc2mDd8x4PZSOsiFRkpPcOq6bj1r/mjH/Rk73gSlIJP2A==",
      "peerDependencies": {
        "react": "^16.5.1 || ^17.0.0 || ^18.0.0 || ^19.0.0"
      }
    },
    "node_modules/magic-string": {
      "version": "0.30.21",
      "resolved": "https://registry.npmjs.org/magic-string/-/magic-string-0.30.21.tgz",
      "integrity": "sha512-vd2F4YUyEXKGcLHoq+TEyCjxueSeHnFxyyjNp80yg0XV4vUhnDer/lvvlqM/arB5bXQN5K2/3oinyCRyx8T2CQ==",
      "dev": true,
      "dependencies": {
        "@jridgewell/sourcemap-codec": "^1.5.5"
      }
    },
    "node_modules/math-intrinsics": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/math-intrinsics/-/math-intrinsics-1.1.0.tgz",
      "integrity": "sha512-/IXtbwEk5HTPyEwyKX6hGkYXxM9nbj64B+ilVJnC/R6B0pH5G4V3b0pVbL7DBj4tkhBAppbQUlf6F6Xl9LHu1g==",
      "dev": true,
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/merge2": {
      "version": "1.4.1",
      "resolved": "https://registry.npmjs.org/merge2/-/merge2-1.4.1.tgz",
      "integrity": "sha512-8q7VEgMJW4J8tcfVPy8g09NcQwZdbwFEqhe/WZkoIzjn/3TGDwtOCYtXGxA3O8tPzpczCCDgv+P2P5y00ZJOOg==",
      "dev": true,
      "engines": {
        "node": ">= 8"
      }
    },
    "node_modules/micromatch": {
      "version": "4.0.8",
      "resolved": "https://registry.npmjs.org/micromatch/-/micromatch-4.0.8.tgz",
      "integrity": "sha512-PXwfBhYu0hBCPw8Dn0E+WDYb7af3dSLVWKi3HGv84IdF4TyFoC0ysxFd0Goxw7nSv4T/PzEJQxsYsEiFCKo2BA==",
      "dev": true,
      "dependencies": {
        "braces": "^3.0.3",
        "picomatch": "^2.3.1"
      },
      "engines": {
        "node": ">=8.6"
      }
    },
    "node_modules/minimatch": {
      "version": "3.1.2",
      "resolved": "https://registry.npmjs.org/minimatch/-/minimatch-3.1.2.tgz",
      "integrity": "sha512-J7p63hRiAjw1NDEww1W7i37+ByIrOWO5XQQAzZ3VOcL0PNybwpfmV/N05zFAzwQ9USyEcX6t3UO+K5aqBQOIHw==",
      "dev": true,
      "dependencies": {
        "brace-expansion": "^1.1.7"
      },
      "engines": {
        "node": "*"
      }
    },
    "node_modules/minimist": {
      "version": "1.2.8",
      "resolved": "https://registry.npmjs.org/minimist/-/minimist-1.2.8.tgz",
      "integrity": "sha512-2yyAR8qBkN3YuheJanUpWC5U3bb5osDywNB8RzDVlDwDHbocAJveqqj1u8+SVD7jkWT4yvsHCpWqqWqAxb0zCA==",
      "dev": true,
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/motion-dom": {
      "version": "12.29.2",
      "resolved": "https://registry.npmjs.org/motion-dom/-/motion-dom-12.29.2.tgz",
      "integrity": "sha512-/k+NuycVV8pykxyiTCoFzIVLA95Nb1BFIVvfSu9L50/6K6qNeAYtkxXILy/LRutt7AzaYDc2myj0wkCVVYAPPA==",
      "license": "MIT",
      "dependencies": {
        "motion-utils": "^12.29.2"
      }
    },
    "node_modules/motion-utils": {
      "version": "12.29.2",
      "resolved": "https://registry.npmjs.org/motion-utils/-/motion-utils-12.29.2.tgz",
      "integrity": "sha512-G3kc34H2cX2gI63RqU+cZq+zWRRPSsNIOjpdl9TN4AQwC4sgwYPl/Q/Obf/d53nOm569T0fYK+tcoSV50BWx8A==",
      "license": "MIT"
    },
    "node_modules/ms": {
      "version": "2.1.3",
      "resolved": "https://registry.npmjs.org/ms/-/ms-2.1.3.tgz",
      "integrity": "sha512-6FlzubTLZG3J2a/NVCAleEhjzq5oxgHyaCU9yYXvcLsvoVaHJq/s5xXI6/XXP6tz7R9xAOtHnSO/tXtF3WRTlA==",
      "dev": true
    },
    "node_modules/nanoid": {
      "version": "3.3.11",
      "resolved": "https://registry.npmjs.org/nanoid/-/nanoid-3.3.11.tgz",
      "integrity": "sha512-N8SpfPUnUp1bK+PMYW8qSWdl9U+wwNWI4QKxOYDy9JAro3WMX7p2OeVRF9v+347pnakNevPmiHhNmZ2HbFA76w==",
      "funding": [
        {
          "type": "github",
          "url": "https://github.com/sponsors/ai"
        }
      ],
      "bin": {
        "nanoid": "bin/nanoid.cjs"
      },
      "engines": {
        "node": "^10 || ^12 || ^13.7 || ^14 || >=15.0.1"
      }
    },
    "node_modules/napi-postinstall": {
      "version": "0.3.4",
      "resolved": "https://registry.npmjs.org/napi-postinstall/-/napi-postinstall-0.3.4.tgz",
      "integrity": "sha512-PHI5f1O0EP5xJ9gQmFGMS6IZcrVvTjpXjz7Na41gTE7eE2hK11lg04CECCYEEjdc17EV4DO+fkGEtt7TpTaTiQ==",
      "dev": true,
      "bin": {
        "napi-postinstall": "lib/cli.js"
      },
      "engines": {
        "node": "^12.20.0 || ^14.18.0 || >=16.0.0"
      },
      "funding": {
        "url": "https://opencollective.com/napi-postinstall"
      }
    },
    "node_modules/natural-compare": {
      "version": "1.4.0",
      "resolved": "https://registry.npmjs.org/natural-compare/-/natural-compare-1.4.0.tgz",
      "integrity": "sha512-OWND8ei3VtNC9h7V60qff3SVobHr996CTwgxubgyQYEpg290h9J0buyECNNJexkFm5sOajh5G116RYA1c8ZMSw==",
      "dev": true
    },
    "node_modules/next": {
      "version": "16.0.10",
      "resolved": "https://registry.npmjs.org/next/-/next-16.0.10.tgz",
      "integrity": "sha512-RtWh5PUgI+vxlV3HdR+IfWA1UUHu0+Ram/JBO4vWB54cVPentCD0e+lxyAYEsDTqGGMg7qpjhKh6dc6aW7W/sA==",
      "dependencies": {
        "@next/env": "16.0.10",
        "@swc/helpers": "0.5.15",
        "caniuse-lite": "^1.0.30001579",
        "postcss": "8.4.31",
        "styled-jsx": "5.1.6"
      },
      "bin": {
        "next": "dist/bin/next"
      },
      "engines": {
        "node": ">=20.9.0"
      },
      "optionalDependencies": {
        "@next/swc-darwin-arm64": "16.0.10",
        "@next/swc-darwin-x64": "16.0.10",
        "@next/swc-linux-arm64-gnu": "16.0.10",
        "@next/swc-linux-arm64-musl": "16.0.10",
        "@next/swc-linux-x64-gnu": "16.0.10",
        "@next/swc-linux-x64-musl": "16.0.10",
        "@next/swc-win32-arm64-msvc": "16.0.10",
        "@next/swc-win32-x64-msvc": "16.0.10",
        "sharp": "^0.34.4"
      },
      "peerDependencies": {
        "@opentelemetry/api": "^1.1.0",
        "@playwright/test": "^1.51.1",
        "babel-plugin-react-compiler": "*",
        "react": "^18.2.0 || 19.0.0-rc-de68d2f4-20241204 || ^19.0.0",
        "react-dom": "^18.2.0 || 19.0.0-rc-de68d2f4-20241204 || ^19.0.0",
        "sass": "^1.3.0"
      },
      "peerDependenciesMeta": {
        "@opentelemetry/api": {
          "optional": true
        },
        "@playwright/test": {
          "optional": true
        },
        "babel-plugin-react-compiler": {
          "optional": true
        },
        "sass": {
          "optional": true
        }
      }
    },
    "node_modules/next/node_modules/postcss": {
      "version": "8.4.31",
      "resolved": "https://registry.npmjs.org/postcss/-/postcss-8.4.31.tgz",
      "integrity": "sha512-PS08Iboia9mts/2ygV3eLpY5ghnUcfLV/EXTOW1E2qYxJKGGBUtNjN76FYHnMs36RmARn41bC0AZmn+rR0OVpQ==",
      "funding": [
        {
          "type": "opencollective",
          "url": "https://opencollective.com/postcss/"
        },
        {
          "type": "tidelift",
          "url": "https://tidelift.com/funding/github/npm/postcss"
        },
        {
          "type": "github",
          "url": "https://github.com/sponsors/ai"
        }
      ],
      "dependencies": {
        "nanoid": "^3.3.6",
        "picocolors": "^1.0.0",
        "source-map-js": "^1.0.2"
      },
      "engines": {
        "node": "^10 || ^12 || >=14"
      }
    },
    "node_modules/node-releases": {
      "version": "2.0.27",
      "resolved": "https://registry.npmjs.org/node-releases/-/node-releases-2.0.27.tgz",
      "integrity": "sha512-nmh3lCkYZ3grZvqcCH+fjmQ7X+H0OeZgP40OierEaAptX4XofMh5kwNbWh7lBduUzCcV/8kZ+NDLCwm2iorIlA==",
      "dev": true
    },
    "node_modules/object-assign": {
      "version": "4.1.1",
      "resolved": "https://registry.npmjs.org/object-assign/-/object-assign-4.1.1.tgz",
      "integrity": "sha512-rJgTQnkUnH1sFw8yT6VSU3zD3sWmu6sZhIseY8VX+GRu3P6F7Fu+JNDoXfklElbLJSnc3FUQHVe4cU5hj+BcUg==",
      "dev": true,
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/object-inspect": {
      "version": "1.13.4",
      "resolved": "https://registry.npmjs.org/object-inspect/-/object-inspect-1.13.4.tgz",
      "integrity": "sha512-W67iLl4J2EXEGTbfeHCffrjDfitvLANg0UlX3wFUUSTx92KXRFegMHUVgSqE+wvhAbi4WqjGg9czysTV2Epbew==",
      "dev": true,
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/object-keys": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/object-keys/-/object-keys-1.1.1.tgz",
      "integrity": "sha512-NuAESUOUMrlIXOfHKzD6bpPu3tYt3xvjNdRIQ+FeT0lNb4K8WR70CaDxhuNguS2XG+GjkyMwOzsN5ZktImfhLA==",
      "dev": true,
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/object.assign": {
      "version": "4.1.7",
      "resolved": "https://registry.npmjs.org/object.assign/-/object.assign-4.1.7.tgz",
      "integrity": "sha512-nK28WOo+QIjBkDduTINE4JkF/UJJKyf2EJxvJKfblDpyg0Q+pkOHNTL0Qwy6NP6FhE/EnzV73BxxqcJaXY9anw==",
      "dev": true,
      "dependencies": {
        "call-bind": "^1.0.8",
        "call-bound": "^1.0.3",
        "define-properties": "^1.2.1",
        "es-object-atoms": "^1.0.0",
        "has-symbols": "^1.1.0",
        "object-keys": "^1.1.1"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/object.entries": {
      "version": "1.1.9",
      "resolved": "https://registry.npmjs.org/object.entries/-/object.entries-1.1.9.tgz",
      "integrity": "sha512-8u/hfXFRBD1O0hPUjioLhoWFHRmt6tKA4/vZPyckBr18l1KE9uHrFaFaUi8MDRTpi4uak2goyPTSNJLXX2k2Hw==",
      "dev": true,
      "dependencies": {
        "call-bind": "^1.0.8",
        "call-bound": "^1.0.4",
        "define-properties": "^1.2.1",
        "es-object-atoms": "^1.1.1"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/object.fromentries": {
      "version": "2.0.8",
      "resolved": "https://registry.npmjs.org/object.fromentries/-/object.fromentries-2.0.8.tgz",
      "integrity": "sha512-k6E21FzySsSK5a21KRADBd/NGneRegFO5pLHfdQLpRDETUNJueLXs3WCzyQ3tFRDYgbq3KHGXfTbi2bs8WQ6rQ==",
      "dev": true,
      "dependencies": {
        "call-bind": "^1.0.7",
        "define-properties": "^1.2.1",
        "es-abstract": "^1.23.2",
        "es-object-atoms": "^1.0.0"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/object.groupby": {
      "version": "1.0.3",
      "resolved": "https://registry.npmjs.org/object.groupby/-/object.groupby-1.0.3.tgz",
      "integrity": "sha512-+Lhy3TQTuzXI5hevh8sBGqbmurHbbIjAi0Z4S63nthVLmLxfbj4T54a4CfZrXIrt9iP4mVAPYMo/v99taj3wjQ==",
      "dev": true,
      "dependencies": {
        "call-bind": "^1.0.7",
        "define-properties": "^1.2.1",
        "es-abstract": "^1.23.2"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/object.values": {
      "version": "1.2.1",
      "resolved": "https://registry.npmjs.org/object.values/-/object.values-1.2.1.tgz",
      "integrity": "sha512-gXah6aZrcUxjWg2zR2MwouP2eHlCBzdV4pygudehaKXSGW4v2AsRQUK+lwwXhii6KFZcunEnmSUoYp5CXibxtA==",
      "dev": true,
      "dependencies": {
        "call-bind": "^1.0.8",
        "call-bound": "^1.0.3",
        "define-properties": "^1.2.1",
        "es-object-atoms": "^1.0.0"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/optionator": {
      "version": "0.9.4",
      "resolved": "https://registry.npmjs.org/optionator/-/optionator-0.9.4.tgz",
      "integrity": "sha512-6IpQ7mKUxRcZNLIObR0hz7lxsapSSIYNZJwXPGeF0mTVqGKFIXj1DQcMoT22S3ROcLyY/rz0PWaWZ9ayWmad9g==",
      "dev": true,
      "dependencies": {
        "deep-is": "^0.1.3",
        "fast-levenshtein": "^2.0.6",
        "levn": "^0.4.1",
        "prelude-ls": "^1.2.1",
        "type-check": "^0.4.0",
        "word-wrap": "^1.2.5"
      },
      "engines": {
        "node": ">= 0.8.0"
      }
    },
    "node_modules/own-keys": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/own-keys/-/own-keys-1.0.1.tgz",
      "integrity": "sha512-qFOyK5PjiWZd+QQIh+1jhdb9LpxTF0qs7Pm8o5QHYZ0M3vKqSqzsZaEB6oWlxZ+q2sJBMI/Ktgd2N5ZwQoRHfg==",
      "dev": true,
      "dependencies": {
        "get-intrinsic": "^1.2.6",
        "object-keys": "^1.1.1",
        "safe-push-apply": "^1.0.0"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/p-limit": {
      "version": "3.1.0",
      "resolved": "https://registry.npmjs.org/p-limit/-/p-limit-3.1.0.tgz",
      "integrity": "sha512-TYOanM3wGwNGsZN2cVTYPArw454xnXj5qmWF1bEoAc4+cU/ol7GVh7odevjp1FNHduHc3KZMcFduxU5Xc6uJRQ==",
      "dev": true,
      "dependencies": {
        "yocto-queue": "^0.1.0"
      },
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/p-locate": {
      "version": "5.0.0",
      "resolved": "https://registry.npmjs.org/p-locate/-/p-locate-5.0.0.tgz",
      "integrity": "sha512-LaNjtRWUBY++zB5nE/NwcaoMylSPk+S+ZHNB1TzdbMJMny6dynpAGt7X/tl/QYq3TIeE6nxHppbo2LGymrG5Pw==",
      "dev": true,
      "dependencies": {
        "p-limit": "^3.0.2"
      },
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/parent-module": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/parent-module/-/parent-module-1.0.1.tgz",
      "integrity": "sha512-GQ2EWRpQV8/o+Aw8YqtfZZPfNRWZYkbidE9k5rpl/hC3vtHHBfGm2Ifi6qWV+coDGkrUKZAxE3Lot5kcsRlh+g==",
      "dev": true,
      "dependencies": {
        "callsites": "^3.0.0"
      },
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/path-exists": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/path-exists/-/path-exists-4.0.0.tgz",
      "integrity": "sha512-ak9Qy5Q7jYb2Wwcey5Fpvg2KoAc/ZIhLSLOSBmRmygPsGwkVVt0fZa0qrtMz+m6tJTAHfZQ8FnmB4MG4LWy7/w==",
      "dev": true,
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/path-key": {
      "version": "3.1.1",
      "resolved": "https://registry.npmjs.org/path-key/-/path-key-3.1.1.tgz",
      "integrity": "sha512-ojmeN0qd+y0jszEtoY48r0Peq5dwMEkIlCOu6Q5f41lfkswXuKtYrhgoTpLnyIcHm24Uhqx+5Tqm2InSwLhE6Q==",
      "dev": true,
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/path-parse": {
      "version": "1.0.7",
      "resolved": "https://registry.npmjs.org/path-parse/-/path-parse-1.0.7.tgz",
      "integrity": "sha512-LDJzPVEEEPR+y48z93A0Ed0yXb8pAByGWo/k5YYdYgpY2/2EsOsksJrq7lOHxryrVOn1ejG6oAp8ahvOIQD8sw==",
      "dev": true
    },
    "node_modules/picocolors": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/picocolors/-/picocolors-1.1.1.tgz",
      "integrity": "sha512-xceH2snhtb5M9liqDsmEw56le376mTZkEX/jEb/RxNFyegNul7eNslCXP9FDj/Lcu0X8KEyMceP2ntpaHrDEVA=="
    },
    "node_modules/picomatch": {
      "version": "2.3.1",
      "resolved": "https://registry.npmjs.org/picomatch/-/picomatch-2.3.1.tgz",
      "integrity": "sha512-JU3teHTNjmE2VCGFzuY8EXzCDVwEqB2a8fsIvwaStHhAWJEeVd1o1QD80CU6+ZdEXXSLbSsuLwJjkCBWqRQUVA==",
      "dev": true,
      "engines": {
        "node": ">=8.6"
      },
      "funding": {
        "url": "https://github.com/sponsors/jonschlinkert"
      }
    },
    "node_modules/possible-typed-array-names": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/possible-typed-array-names/-/possible-typed-array-names-1.1.0.tgz",
      "integrity": "sha512-/+5VFTchJDoVj3bhoqi6UeymcD00DAwb1nJwamzPvHEszJ4FpF6SNNbUbOS8yI56qHzdV8eK0qEfOSiodkTdxg==",
      "dev": true,
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/postcss": {
      "version": "8.5.6",
      "resolved": "https://registry.npmjs.org/postcss/-/postcss-8.5.6.tgz",
      "integrity": "sha512-3Ybi1tAuwAP9s0r1UQ2J4n5Y0G05bJkpUIO0/bI9MhwmD70S5aTWbXGBwxHrelT+XM1k6dM0pk+SwNkpTRN7Pg==",
      "dev": true,
      "funding": [
        {
          "type": "opencollective",
          "url": "https://opencollective.com/postcss/"
        },
        {
          "type": "tidelift",
          "url": "https://tidelift.com/funding/github/npm/postcss"
        },
        {
          "type": "github",
          "url": "https://github.com/sponsors/ai"
        }
      ],
      "dependencies": {
        "nanoid": "^3.3.11",
        "picocolors": "^1.1.1",
        "source-map-js": "^1.2.1"
      },
      "engines": {
        "node": "^10 || ^12 || >=14"
      }
    },
    "node_modules/prelude-ls": {
      "version": "1.2.1",
      "resolved": "https://registry.npmjs.org/prelude-ls/-/prelude-ls-1.2.1.tgz",
      "integrity": "sha512-vkcDPrRZo1QZLbn5RLGPpg/WmIQ65qoWWhcGKf/b5eplkkarX0m9z8ppCat4mlOqUsWpyNuYgO3VRyrYHSzX5g==",
      "dev": true,
      "engines": {
        "node": ">= 0.8.0"
      }
    },
    "node_modules/prop-types": {
      "version": "15.8.1",
      "resolved": "https://registry.npmjs.org/prop-types/-/prop-types-15.8.1.tgz",
      "integrity": "sha512-oj87CgZICdulUohogVAR7AjlC0327U4el4L6eAvOqCeudMDVU0NThNaV+b9Df4dXgSP1gXMTnPdhfe/2qDH5cg==",
      "dev": true,
      "dependencies": {
        "loose-envify": "^1.4.0",
        "object-assign": "^4.1.1",
        "react-is": "^16.13.1"
      }
    },
    "node_modules/punycode": {
      "version": "2.3.1",
      "resolved": "https://registry.npmjs.org/punycode/-/punycode-2.3.1.tgz",
      "integrity": "sha512-vYt7UD1U9Wg6138shLtLOvdAu+8DsC/ilFtEVHcH+wydcSpNE20AfSOduf6MkRFahL5FY7X1oU7nKVZFtfq8Fg==",
      "dev": true,
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/queue-microtask": {
      "version": "1.2.3",
      "resolved": "https://registry.npmjs.org/queue-microtask/-/queue-microtask-1.2.3.tgz",
      "integrity": "sha512-NuaNSa6flKT5JaSYQzJok04JzTL1CA6aGhv5rfLW3PgqA+M2ChpZQnAC8h8i4ZFkBS8X5RqkDBHA7r4hej3K9A==",
      "dev": true,
      "funding": [
        {
          "type": "github",
          "url": "https://github.com/sponsors/feross"
        },
        {
          "type": "patreon",
          "url": "https://www.patreon.com/feross"
        },
        {
          "type": "consulting",
          "url": "https://feross.org/support"
        }
      ]
    },
    "node_modules/react": {
      "version": "19.2.1",
      "resolved": "https://registry.npmjs.org/react/-/react-19.2.1.tgz",
      "integrity": "sha512-DGrYcCWK7tvYMnWh79yrPHt+vdx9tY+1gPZa7nJQtO/p8bLTDaHp4dzwEhQB7pZ4Xe3ok4XKuEPrVuc+wlpkmw==",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/react-dom": {
      "version": "19.2.1",
      "resolved": "https://registry.npmjs.org/react-dom/-/react-dom-19.2.1.tgz",
      "integrity": "sha512-ibrK8llX2a4eOskq1mXKu/TGZj9qzomO+sNfO98M6d9zIPOEhlBkMkBUBLd1vgS0gQsLDBzA+8jJBVXDnfHmJg==",
      "dependencies": {
        "scheduler": "^0.27.0"
      },
      "peerDependencies": {
        "react": "^19.2.1"
      }
    },
    "node_modules/react-is": {
      "version": "16.13.1",
      "resolved": "https://registry.npmjs.org/react-is/-/react-is-16.13.1.tgz",
      "integrity": "sha512-24e6ynE2H+OKt4kqsOvNd8kBpV65zoxbA4BVsEOB3ARVWQki/DHzaUoC5KuON/BiccDaCCTZBuOcfZs70kR8bQ=="
    },
    "node_modules/react-redux": {
      "version": "9.2.0",
      "resolved": "https://registry.npmjs.org/react-redux/-/react-redux-9.2.0.tgz",
      "integrity": "sha512-ROY9fvHhwOD9ySfrF0wmvu//bKCQ6AeZZq1nJNtbDC+kk5DuSuNX/n6YWYF/SYy7bSba4D4FSz8DJeKY/S/r+g==",
      "dependencies": {
        "@types/use-sync-external-store": "^0.0.6",
        "use-sync-external-store": "^1.4.0"
      },
      "peerDependencies": {
        "@types/react": "^18.2.25 || ^19",
        "react": "^18.0 || ^19",
        "redux": "^5.0.0"
      },
      "peerDependenciesMeta": {
        "@types/react": {
          "optional": true
        },
        "redux": {
          "optional": true
        }
      }
    },
    "node_modules/recharts": {
      "version": "3.6.0",
      "resolved": "https://registry.npmjs.org/recharts/-/recharts-3.6.0.tgz",
      "integrity": "sha512-L5bjxvQRAe26RlToBAziKUB7whaGKEwD3znoM6fz3DrTowCIC/FnJYnuq1GEzB8Zv2kdTfaxQfi5GoH0tBinyg==",
      "dependencies": {
        "@reduxjs/toolkit": "1.x.x || 2.x.x",
        "clsx": "^2.1.1",
        "decimal.js-light": "^2.5.1",
        "es-toolkit": "^1.39.3",
        "eventemitter3": "^5.0.1",
        "immer": "^10.1.1",
        "react-redux": "8.x.x || 9.x.x",
        "reselect": "5.1.1",
        "tiny-invariant": "^1.3.3",
        "use-sync-external-store": "^1.2.2",
        "victory-vendor": "^37.0.2"
      },
      "engines": {
        "node": ">=18"
      },
      "peerDependencies": {
        "react": "^16.8.0 || ^17.0.0 || ^18.0.0 || ^19.0.0",
        "react-dom": "^16.0.0 || ^17.0.0 || ^18.0.0 || ^19.0.0",
        "react-is": "^16.8.0 || ^17.0.0 || ^18.0.0 || ^19.0.0"
      }
    },
    "node_modules/redux": {
      "version": "5.0.1",
      "resolved": "https://registry.npmjs.org/redux/-/redux-5.0.1.tgz",
      "integrity": "sha512-M9/ELqF6fy8FwmkpnF0S3YKOqMyoWJ4+CS5Efg2ct3oY9daQvd/Pc71FpGZsVsbl3Cpb+IIcjBDUnnyBdQbq4w=="
    },
    "node_modules/redux-thunk": {
      "version": "3.1.0",
      "resolved": "https://registry.npmjs.org/redux-thunk/-/redux-thunk-3.1.0.tgz",
      "integrity": "sha512-NW2r5T6ksUKXCabzhL9z+h206HQw/NJkcLm1GPImRQ8IzfXwRGqjVhKJGauHirT0DAuyy6hjdnMZaRoAcy0Klw==",
      "peerDependencies": {
        "redux": "^5.0.0"
      }
    },
    "node_modules/reflect.getprototypeof": {
      "version": "1.0.10",
      "resolved": "https://registry.npmjs.org/reflect.getprototypeof/-/reflect.getprototypeof-1.0.10.tgz",
      "integrity": "sha512-00o4I+DVrefhv+nX0ulyi3biSHCPDe+yLv5o/p6d/UVlirijB8E16FtfwSAi4g3tcqrQ4lRAqQSoFEZJehYEcw==",
      "dev": true,
      "dependencies": {
        "call-bind": "^1.0.8",
        "define-properties": "^1.2.1",
        "es-abstract": "^1.23.9",
        "es-errors": "^1.3.0",
        "es-object-atoms": "^1.0.0",
        "get-intrinsic": "^1.2.7",
        "get-proto": "^1.0.1",
        "which-builtin-type": "^1.2.1"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/regexp.prototype.flags": {
      "version": "1.5.4",
      "resolved": "https://registry.npmjs.org/regexp.prototype.flags/-/regexp.prototype.flags-1.5.4.tgz",
      "integrity": "sha512-dYqgNSZbDwkaJ2ceRd9ojCGjBq+mOm9LmtXnAnEGyHhN/5R7iDW2TRw3h+o/jCFxus3P2LfWIIiwowAjANm7IA==",
      "dev": true,
      "dependencies": {
        "call-bind": "^1.0.8",
        "define-properties": "^1.2.1",
        "es-errors": "^1.3.0",
        "get-proto": "^1.0.1",
        "gopd": "^1.2.0",
        "set-function-name": "^2.0.2"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/reselect": {
      "version": "5.1.1",
      "resolved": "https://registry.npmjs.org/reselect/-/reselect-5.1.1.tgz",
      "integrity": "sha512-K/BG6eIky/SBpzfHZv/dd+9JBFiS4SWV7FIujVyJRux6e45+73RaUHXLmIR1f7WOMaQ0U1km6qwklRQxpJJY0w=="
    },
    "node_modules/resolve": {
      "version": "1.22.11",
      "resolved": "https://registry.npmjs.org/resolve/-/resolve-1.22.11.tgz",
      "integrity": "sha512-RfqAvLnMl313r7c9oclB1HhUEAezcpLjz95wFH4LVuhk9JF/r22qmVP9AMmOU4vMX7Q8pN8jwNg/CSpdFnMjTQ==",
      "dev": true,
      "dependencies": {
        "is-core-module": "^2.16.1",
        "path-parse": "^1.0.7",
        "supports-preserve-symlinks-flag": "^1.0.0"
      },
      "bin": {
        "resolve": "bin/resolve"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/resolve-from": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/resolve-from/-/resolve-from-4.0.0.tgz",
      "integrity": "sha512-pb/MYmXstAkysRFx8piNI1tGFNQIFA3vkE3Gq4EuA1dF6gHp/+vgZqsCGJapvy8N3Q+4o7FwvquPJcnZ7RYy4g==",
      "dev": true,
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/resolve-pkg-maps": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/resolve-pkg-maps/-/resolve-pkg-maps-1.0.0.tgz",
      "integrity": "sha512-seS2Tj26TBVOC2NIc2rOe2y2ZO7efxITtLZcGSOnHHNOQ7CkiUBfw0Iw2ck6xkIhPwLhKNLS8BO+hEpngQlqzw==",
      "dev": true,
      "funding": {
        "url": "https://github.com/privatenumber/resolve-pkg-maps?sponsor=1"
      }
    },
    "node_modules/reusify": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/reusify/-/reusify-1.1.0.tgz",
      "integrity": "sha512-g6QUff04oZpHs0eG5p83rFLhHeV00ug/Yf9nZM6fLeUrPguBTkTQOdpAWWspMh55TZfVQDPaN3NQJfbVRAxdIw==",
      "dev": true,
      "engines": {
        "iojs": ">=1.0.0",
        "node": ">=0.10.0"
      }
    },
    "node_modules/run-parallel": {
      "version": "1.2.0",
      "resolved": "https://registry.npmjs.org/run-parallel/-/run-parallel-1.2.0.tgz",
      "integrity": "sha512-5l4VyZR86LZ/lDxZTR6jqL8AFE2S0IFLMP26AbjsLVADxHdhB/c0GUsH+y39UfCi3dzz8OlQuPmnaJOMoDHQBA==",
      "dev": true,
      "funding": [
        {
          "type": "github",
          "url": "https://github.com/sponsors/feross"
        },
        {
          "type": "patreon",
          "url": "https://www.patreon.com/feross"
        },
        {
          "type": "consulting",
          "url": "https://feross.org/support"
        }
      ],
      "dependencies": {
        "queue-microtask": "^1.2.2"
      }
    },
    "node_modules/safe-array-concat": {
      "version": "1.1.3",
      "resolved": "https://registry.npmjs.org/safe-array-concat/-/safe-array-concat-1.1.3.tgz",
      "integrity": "sha512-AURm5f0jYEOydBj7VQlVvDrjeFgthDdEF5H1dP+6mNpoXOMo1quQqJ4wvJDyRZ9+pO3kGWoOdmV08cSv2aJV6Q==",
      "dev": true,
      "dependencies": {
        "call-bind": "^1.0.8",
        "call-bound": "^1.0.2",
        "get-intrinsic": "^1.2.6",
        "has-symbols": "^1.1.0",
        "isarray": "^2.0.5"
      },
      "engines": {
        "node": ">=0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/safe-push-apply": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/safe-push-apply/-/safe-push-apply-1.0.0.tgz",
      "integrity": "sha512-iKE9w/Z7xCzUMIZqdBsp6pEQvwuEebH4vdpjcDWnyzaI6yl6O9FHvVpmGelvEHNsoY6wGblkxR6Zty/h00WiSA==",
      "dev": true,
      "dependencies": {
        "es-errors": "^1.3.0",
        "isarray": "^2.0.5"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/safe-regex-test": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/safe-regex-test/-/safe-regex-test-1.1.0.tgz",
      "integrity": "sha512-x/+Cz4YrimQxQccJf5mKEbIa1NzeCRNI5Ecl/ekmlYaampdNLPalVyIcCZNNH3MvmqBugV5TMYZXv0ljslUlaw==",
      "dev": true,
      "dependencies": {
        "call-bound": "^1.0.2",
        "es-errors": "^1.3.0",
        "is-regex": "^1.2.1"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/scheduler": {
      "version": "0.27.0",
      "resolved": "https://registry.npmjs.org/scheduler/-/scheduler-0.27.0.tgz",
      "integrity": "sha512-eNv+WrVbKu1f3vbYJT/xtiF5syA5HPIMtf9IgY/nKg0sWqzAUEvqY/xm7OcZc/qafLx/iO9FgOmeSAp4v5ti/Q=="
    },
    "node_modules/semver": {
      "version": "6.3.1",
      "resolved": "https://registry.npmjs.org/semver/-/semver-6.3.1.tgz",
      "integrity": "sha512-BR7VvDCVHO+q2xBEWskxS6DJE1qRnb7DxzUrogb71CWoSficBxYsiAGd+Kl0mmq/MprG9yArRkyrQxTO6XjMzA==",
      "dev": true,
      "bin": {
        "semver": "bin/semver.js"
      }
    },
    "node_modules/set-function-length": {
      "version": "1.2.2",
      "resolved": "https://registry.npmjs.org/set-function-length/-/set-function-length-1.2.2.tgz",
      "integrity": "sha512-pgRc4hJ4/sNjWCSS9AmnS40x3bNMDTknHgL5UaMBTMyJnU90EgWh1Rz+MC9eFu4BuN/UwZjKQuY/1v3rM7HMfg==",
      "dev": true,
      "dependencies": {
        "define-data-property": "^1.1.4",
        "es-errors": "^1.3.0",
        "function-bind": "^1.1.2",
        "get-intrinsic": "^1.2.4",
        "gopd": "^1.0.1",
        "has-property-descriptors": "^1.0.2"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/set-function-name": {
      "version": "2.0.2",
      "resolved": "https://registry.npmjs.org/set-function-name/-/set-function-name-2.0.2.tgz",
      "integrity": "sha512-7PGFlmtwsEADb0WYyvCMa1t+yke6daIG4Wirafur5kcf+MhUnPms1UeR0CKQdTZD81yESwMHbtn+TR+dMviakQ==",
      "dev": true,
      "dependencies": {
        "define-data-property": "^1.1.4",
        "es-errors": "^1.3.0",
        "functions-have-names": "^1.2.3",
        "has-property-descriptors": "^1.0.2"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/set-proto": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/set-proto/-/set-proto-1.0.0.tgz",
      "integrity": "sha512-RJRdvCo6IAnPdsvP/7m6bsQqNnn1FCBX5ZNtFL98MmFF/4xAIJTIg1YbHW5DC2W5SKZanrC6i4HsJqlajw/dZw==",
      "dev": true,
      "dependencies": {
        "dunder-proto": "^1.0.1",
        "es-errors": "^1.3.0",
        "es-object-atoms": "^1.0.0"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/sharp": {
      "version": "0.34.5",
      "resolved": "https://registry.npmjs.org/sharp/-/sharp-0.34.5.tgz",
      "integrity": "sha512-Ou9I5Ft9WNcCbXrU9cMgPBcCK8LiwLqcbywW3t4oDV37n1pzpuNLsYiAV8eODnjbtQlSDwZ2cUEeQz4E54Hltg==",
      "hasInstallScript": true,
      "optional": true,
      "dependencies": {
        "@img/colour": "^1.0.0",
        "detect-libc": "^2.1.2",
        "semver": "^7.7.3"
      },
      "engines": {
        "node": "^18.17.0 || ^20.3.0 || >=21.0.0"
      },
      "funding": {
        "url": "https://opencollective.com/libvips"
      },
      "optionalDependencies": {
        "@img/sharp-darwin-arm64": "0.34.5",
        "@img/sharp-darwin-x64": "0.34.5",
        "@img/sharp-libvips-darwin-arm64": "1.2.4",
        "@img/sharp-libvips-darwin-x64": "1.2.4",
        "@img/sharp-libvips-linux-arm": "1.2.4",
        "@img/sharp-libvips-linux-arm64": "1.2.4",
        "@img/sharp-libvips-linux-ppc64": "1.2.4",
        "@img/sharp-libvips-linux-riscv64": "1.2.4",
        "@img/sharp-libvips-linux-s390x": "1.2.4",
        "@img/sharp-libvips-linux-x64": "1.2.4",
        "@img/sharp-libvips-linuxmusl-arm64": "1.2.4",
        "@img/sharp-libvips-linuxmusl-x64": "1.2.4",
        "@img/sharp-linux-arm": "0.34.5",
        "@img/sharp-linux-arm64": "0.34.5",
        "@img/sharp-linux-ppc64": "0.34.5",
        "@img/sharp-linux-riscv64": "0.34.5",
        "@img/sharp-linux-s390x": "0.34.5",
        "@img/sharp-linux-x64": "0.34.5",
        "@img/sharp-linuxmusl-arm64": "0.34.5",
        "@img/sharp-linuxmusl-x64": "0.34.5",
        "@img/sharp-wasm32": "0.34.5",
        "@img/sharp-win32-arm64": "0.34.5",
        "@img/sharp-win32-ia32": "0.34.5",
        "@img/sharp-win32-x64": "0.34.5"
      }
    },
    "node_modules/sharp/node_modules/semver": {
      "version": "7.7.3",
      "resolved": "https://registry.npmjs.org/semver/-/semver-7.7.3.tgz",
      "integrity": "sha512-SdsKMrI9TdgjdweUSR9MweHA4EJ8YxHn8DFaDisvhVlUOe4BF1tLD7GAj0lIqWVl+dPb/rExr0Btby5loQm20Q==",
      "optional": true,
      "bin": {
        "semver": "bin/semver.js"
      },
      "engines": {
        "node": ">=10"
      }
    },
    "node_modules/shebang-command": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/shebang-command/-/shebang-command-2.0.0.tgz",
      "integrity": "sha512-kHxr2zZpYtdmrN1qDjrrX/Z1rR1kG8Dx+gkpK1G4eXmvXswmcE1hTWBWYUzlraYw1/yZp6YuDY77YtvbN0dmDA==",
      "dev": true,
      "dependencies": {
        "shebang-regex": "^3.0.0"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/shebang-regex": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/shebang-regex/-/shebang-regex-3.0.0.tgz",
      "integrity": "sha512-7++dFhtcx3353uBaq8DDR4NuxBetBzC7ZQOhmTQInHEd6bSrXdiEyzCvG07Z44UYdLShWUyXt5M/yhz8ekcb1A==",
      "dev": true,
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/side-channel": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/side-channel/-/side-channel-1.1.0.tgz",
      "integrity": "sha512-ZX99e6tRweoUXqR+VBrslhda51Nh5MTQwou5tnUDgbtyM0dBgmhEDtWGP/xbKn6hqfPRHujUNwz5fy/wbbhnpw==",
      "dev": true,
      "dependencies": {
        "es-errors": "^1.3.0",
        "object-inspect": "^1.13.3",
        "side-channel-list": "^1.0.0",
        "side-channel-map": "^1.0.1",
        "side-channel-weakmap": "^1.0.2"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/side-channel-list": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/side-channel-list/-/side-channel-list-1.0.0.tgz",
      "integrity": "sha512-FCLHtRD/gnpCiCHEiJLOwdmFP+wzCmDEkc9y7NsYxeF4u7Btsn1ZuwgwJGxImImHicJArLP4R0yX4c2KCrMrTA==",
      "dev": true,
      "dependencies": {
        "es-errors": "^1.3.0",
        "object-inspect": "^1.13.3"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/side-channel-map": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/side-channel-map/-/side-channel-map-1.0.1.tgz",
      "integrity": "sha512-VCjCNfgMsby3tTdo02nbjtM/ewra6jPHmpThenkTYh8pG9ucZ/1P8So4u4FGBek/BjpOVsDCMoLA/iuBKIFXRA==",
      "dev": true,
      "dependencies": {
        "call-bound": "^1.0.2",
        "es-errors": "^1.3.0",
        "get-intrinsic": "^1.2.5",
        "object-inspect": "^1.13.3"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/side-channel-weakmap": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/side-channel-weakmap/-/side-channel-weakmap-1.0.2.tgz",
      "integrity": "sha512-WPS/HvHQTYnHisLo9McqBHOJk2FkHO/tlpvldyrnem4aeQp4hai3gythswg6p01oSoTl58rcpiFAjF2br2Ak2A==",
      "dev": true,
      "dependencies": {
        "call-bound": "^1.0.2",
        "es-errors": "^1.3.0",
        "get-intrinsic": "^1.2.5",
        "object-inspect": "^1.13.3",
        "side-channel-map": "^1.0.1"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/source-map-js": {
      "version": "1.2.1",
      "resolved": "https://registry.npmjs.org/source-map-js/-/source-map-js-1.2.1.tgz",
      "integrity": "sha512-UXWMKhLOwVKb728IUtQPXxfYU+usdybtUrK/8uGE8CQMvrhOpwvzDBwj0QhSL7MQc7vIsISBG8VQ8+IDQxpfQA==",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/stable-hash": {
      "version": "0.0.5",
      "resolved": "https://registry.npmjs.org/stable-hash/-/stable-hash-0.0.5.tgz",
      "integrity": "sha512-+L3ccpzibovGXFK+Ap/f8LOS0ahMrHTf3xu7mMLSpEGU0EO9ucaysSylKo9eRDFNhWve/y275iPmIZ4z39a9iA==",
      "dev": true
    },
    "node_modules/stop-iteration-iterator": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/stop-iteration-iterator/-/stop-iteration-iterator-1.1.0.tgz",
      "integrity": "sha512-eLoXW/DHyl62zxY4SCaIgnRhuMr6ri4juEYARS8E6sCEqzKpOiE521Ucofdx+KnDZl5xmvGYaaKCk5FEOxJCoQ==",
      "dev": true,
      "dependencies": {
        "es-errors": "^1.3.0",
        "internal-slot": "^1.1.0"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/string.prototype.includes": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/string.prototype.includes/-/string.prototype.includes-2.0.1.tgz",
      "integrity": "sha512-o7+c9bW6zpAdJHTtujeePODAhkuicdAryFsfVKwA+wGw89wJ4GTY484WTucM9hLtDEOpOvI+aHnzqnC5lHp4Rg==",
      "dev": true,
      "dependencies": {
        "call-bind": "^1.0.7",
        "define-properties": "^1.2.1",
        "es-abstract": "^1.23.3"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/string.prototype.matchall": {
      "version": "4.0.12",
      "resolved": "https://registry.npmjs.org/string.prototype.matchall/-/string.prototype.matchall-4.0.12.tgz",
      "integrity": "sha512-6CC9uyBL+/48dYizRf7H7VAYCMCNTBeM78x/VTUe9bFEaxBepPJDa1Ow99LqI/1yF7kuy7Q3cQsYMrcjGUcskA==",
      "dev": true,
      "dependencies": {
        "call-bind": "^1.0.8",
        "call-bound": "^1.0.3",
        "define-properties": "^1.2.1",
        "es-abstract": "^1.23.6",
        "es-errors": "^1.3.0",
        "es-object-atoms": "^1.0.0",
        "get-intrinsic": "^1.2.6",
        "gopd": "^1.2.0",
        "has-symbols": "^1.1.0",
        "internal-slot": "^1.1.0",
        "regexp.prototype.flags": "^1.5.3",
        "set-function-name": "^2.0.2",
        "side-channel": "^1.1.0"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/string.prototype.repeat": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/string.prototype.repeat/-/string.prototype.repeat-1.0.0.tgz",
      "integrity": "sha512-0u/TldDbKD8bFCQ/4f5+mNRrXwZ8hg2w7ZR8wa16e8z9XpePWl3eGEcUD0OXpEH/VJH/2G3gjUtR3ZOiBe2S/w==",
      "dev": true,
      "dependencies": {
        "define-properties": "^1.1.3",
        "es-abstract": "^1.17.5"
      }
    },
    "node_modules/string.prototype.trim": {
      "version": "1.2.10",
      "resolved": "https://registry.npmjs.org/string.prototype.trim/-/string.prototype.trim-1.2.10.tgz",
      "integrity": "sha512-Rs66F0P/1kedk5lyYyH9uBzuiI/kNRmwJAR9quK6VOtIpZ2G+hMZd+HQbbv25MgCA6gEffoMZYxlTod4WcdrKA==",
      "dev": true,
      "dependencies": {
        "call-bind": "^1.0.8",
        "call-bound": "^1.0.2",
        "define-data-property": "^1.1.4",
        "define-properties": "^1.2.1",
        "es-abstract": "^1.23.5",
        "es-object-atoms": "^1.0.0",
        "has-property-descriptors": "^1.0.2"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/string.prototype.trimend": {
      "version": "1.0.9",
      "resolved": "https://registry.npmjs.org/string.prototype.trimend/-/string.prototype.trimend-1.0.9.tgz",
      "integrity": "sha512-G7Ok5C6E/j4SGfyLCloXTrngQIQU3PWtXGst3yM7Bea9FRURf1S42ZHlZZtsNque2FN2PoUhfZXYLNWwEr4dLQ==",
      "dev": true,
      "dependencies": {
        "call-bind": "^1.0.8",
        "call-bound": "^1.0.2",
        "define-properties": "^1.2.1",
        "es-object-atoms": "^1.0.0"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/string.prototype.trimstart": {
      "version": "1.0.8",
      "resolved": "https://registry.npmjs.org/string.prototype.trimstart/-/string.prototype.trimstart-1.0.8.tgz",
      "integrity": "sha512-UXSH262CSZY1tfu3G3Secr6uGLCFVPMhIqHjlgCUtCCcgihYc/xKs9djMTMUOb2j1mVSeU8EU6NWc/iQKU6Gfg==",
      "dev": true,
      "dependencies": {
        "call-bind": "^1.0.7",
        "define-properties": "^1.2.1",
        "es-object-atoms": "^1.0.0"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/strip-bom": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/strip-bom/-/strip-bom-3.0.0.tgz",
      "integrity": "sha512-vavAMRXOgBVNF6nyEEmL3DBK19iRpDcoIwW+swQ+CbGiu7lju6t+JklA1MHweoWtadgt4ISVUsXLyDq34ddcwA==",
      "dev": true,
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/strip-json-comments": {
      "version": "3.1.1",
      "resolved": "https://registry.npmjs.org/strip-json-comments/-/strip-json-comments-3.1.1.tgz",
      "integrity": "sha512-6fPc+R4ihwqP6N/aIv2f1gMH8lOVtWQHoqC4yK6oSDVVocumAsfCqjkXnqiYMhmMwS/mEHLp7Vehlt3ql6lEig==",
      "dev": true,
      "engines": {
        "node": ">=8"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/styled-jsx": {
      "version": "5.1.6",
      "resolved": "https://registry.npmjs.org/styled-jsx/-/styled-jsx-5.1.6.tgz",
      "integrity": "sha512-qSVyDTeMotdvQYoHWLNGwRFJHC+i+ZvdBRYosOFgC+Wg1vx4frN2/RG/NA7SYqqvKNLf39P2LSRA2pu6n0XYZA==",
      "dependencies": {
        "client-only": "0.0.1"
      },
      "engines": {
        "node": ">= 12.0.0"
      },
      "peerDependencies": {
        "react": ">= 16.8.0 || 17.x.x || ^18.0.0-0 || ^19.0.0-0"
      },
      "peerDependenciesMeta": {
        "@babel/core": {
          "optional": true
        },
        "babel-plugin-macros": {
          "optional": true
        }
      }
    },
    "node_modules/supports-color": {
      "version": "7.2.0",
      "resolved": "https://registry.npmjs.org/supports-color/-/supports-color-7.2.0.tgz",
      "integrity": "sha512-qpCAvRl9stuOHveKsn7HncJRvv501qIacKzQlO/+Lwxc9+0q2wLyv4Dfvt80/DPn2pqOBsJdDiogXGR9+OvwRw==",
      "dev": true,
      "dependencies": {
        "has-flag": "^4.0.0"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/supports-preserve-symlinks-flag": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/supports-preserve-symlinks-flag/-/supports-preserve-symlinks-flag-1.0.0.tgz",
      "integrity": "sha512-ot0WnXS9fgdkgIcePe6RHNk1WA8+muPa6cSjeR3V8K27q9BB1rTE3R1p7Hv0z1ZyAc8s6Vvv8DIyWf681MAt0w==",
      "dev": true,
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/tailwind-merge": {
      "version": "3.4.0",
      "resolved": "https://registry.npmjs.org/tailwind-merge/-/tailwind-merge-3.4.0.tgz",
      "integrity": "sha512-uSaO4gnW+b3Y2aWoWfFpX62vn2sR3skfhbjsEnaBI81WD1wBLlHZe5sWf0AqjksNdYTbGBEd0UasQMT3SNV15g==",
      "license": "MIT",
      "funding": {
        "type": "github",
        "url": "https://github.com/sponsors/dcastil"
      }
    },
    "node_modules/tailwindcss": {
      "version": "4.1.18",
      "resolved": "https://registry.npmjs.org/tailwindcss/-/tailwindcss-4.1.18.tgz",
      "integrity": "sha512-4+Z+0yiYyEtUVCScyfHCxOYP06L5Ne+JiHhY2IjR2KWMIWhJOYZKLSGZaP5HkZ8+bY0cxfzwDE5uOmzFXyIwxw==",
      "dev": true
    },
    "node_modules/tapable": {
      "version": "2.3.0",
      "resolved": "https://registry.npmjs.org/tapable/-/tapable-2.3.0.tgz",
      "integrity": "sha512-g9ljZiwki/LfxmQADO3dEY1CbpmXT5Hm2fJ+QaGKwSXUylMybePR7/67YW7jOrrvjEgL1Fmz5kzyAjWVWLlucg==",
      "dev": true,
      "engines": {
        "node": ">=6"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/webpack"
      }
    },
    "node_modules/tiny-invariant": {
      "version": "1.3.3",
      "resolved": "https://registry.npmjs.org/tiny-invariant/-/tiny-invariant-1.3.3.tgz",
      "integrity": "sha512-+FbBPE1o9QAYvviau/qC5SE3caw21q3xkvWKBtja5vgqOWIHHJ3ioaq1VPfn/Szqctz2bU/oYeKd9/z5BL+PVg=="
    },
    "node_modules/tinyglobby": {
      "version": "0.2.15",
      "resolved": "https://registry.npmjs.org/tinyglobby/-/tinyglobby-0.2.15.tgz",
      "integrity": "sha512-j2Zq4NyQYG5XMST4cbs02Ak8iJUdxRM0XI5QyxXuZOzKOINmWurp3smXu3y5wDcJrptwpSjgXHzIQxR0omXljQ==",
      "dev": true,
      "dependencies": {
        "fdir": "^6.5.0",
        "picomatch": "^4.0.3"
      },
      "engines": {
        "node": ">=12.0.0"
      },
      "funding": {
        "url": "https://github.com/sponsors/SuperchupuDev"
      }
    },
    "node_modules/tinyglobby/node_modules/fdir": {
      "version": "6.5.0",
      "resolved": "https://registry.npmjs.org/fdir/-/fdir-6.5.0.tgz",
      "integrity": "sha512-tIbYtZbucOs0BRGqPJkshJUYdL+SDH7dVM8gjy+ERp3WAUjLEFJE+02kanyHtwjWOnwrKYBiwAmM0p4kLJAnXg==",
      "dev": true,
      "engines": {
        "node": ">=12.0.0"
      },
      "peerDependencies": {
        "picomatch": "^3 || ^4"
      },
      "peerDependenciesMeta": {
        "picomatch": {
          "optional": true
        }
      }
    },
    "node_modules/tinyglobby/node_modules/picomatch": {
      "version": "4.0.3",
      "resolved": "https://registry.npmjs.org/picomatch/-/picomatch-4.0.3.tgz",
      "integrity": "sha512-5gTmgEY/sqK6gFXLIsQNH19lWb4ebPDLA4SdLP7dsWkIXHWlG66oPuVvXSGFPppYZz8ZDZq0dYYrbHfBCVUb1Q==",
      "dev": true,
      "engines": {
        "node": ">=12"
      },
      "funding": {
        "url": "https://github.com/sponsors/jonschlinkert"
      }
    },
    "node_modules/to-regex-range": {
      "version": "5.0.1",
      "resolved": "https://registry.npmjs.org/to-regex-range/-/to-regex-range-5.0.1.tgz",
      "integrity": "sha512-65P7iz6X5yEr1cwcgvQxbbIw7Uk3gOy5dIdtZ4rDveLqhrdJP+Li/Hx6tyK0NEb+2GCyneCMJiGqrADCSNk8sQ==",
      "dev": true,
      "dependencies": {
        "is-number": "^7.0.0"
      },
      "engines": {
        "node": ">=8.0"
      }
    },
    "node_modules/ts-api-utils": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/ts-api-utils/-/ts-api-utils-2.1.0.tgz",
      "integrity": "sha512-CUgTZL1irw8u29bzrOD/nH85jqyc74D6SshFgujOIA7osm2Rz7dYH77agkx7H4FBNxDq7Cjf+IjaX/8zwFW+ZQ==",
      "dev": true,
      "engines": {
        "node": ">=18.12"
      },
      "peerDependencies": {
        "typescript": ">=4.8.4"
      }
    },
    "node_modules/tsconfig-paths": {
      "version": "3.15.0",
      "resolved": "https://registry.npmjs.org/tsconfig-paths/-/tsconfig-paths-3.15.0.tgz",
      "integrity": "sha512-2Ac2RgzDe/cn48GvOe3M+o82pEFewD3UPbyoUHHdKasHwJKjds4fLXWf/Ux5kATBKN20oaFGu+jbElp1pos0mg==",
      "dev": true,
      "dependencies": {
        "@types/json5": "^0.0.29",
        "json5": "^1.0.2",
        "minimist": "^1.2.6",
        "strip-bom": "^3.0.0"
      }
    },
    "node_modules/tsconfig-paths/node_modules/json5": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/json5/-/json5-1.0.2.tgz",
      "integrity": "sha512-g1MWMLBiz8FKi1e4w0UyVL3w+iJceWAFBAaBnnGKOpNa5f8TLktkbre1+s6oICydWAm+HRUGTmI+//xv2hvXYA==",
      "dev": true,
      "dependencies": {
        "minimist": "^1.2.0"
      },
      "bin": {
        "json5": "lib/cli.js"
      }
    },
    "node_modules/tslib": {
      "version": "2.8.1",
      "resolved": "https://registry.npmjs.org/tslib/-/tslib-2.8.1.tgz",
      "integrity": "sha512-oJFu94HQb+KVduSUQL7wnpmqnfmLsOA/nAh6b6EH0wCEoK0/mPeXU6c3wKDV83MkOuHPRHtSXKKU99IBazS/2w=="
    },
    "node_modules/type-check": {
      "version": "0.4.0",
      "resolved": "https://registry.npmjs.org/type-check/-/type-check-0.4.0.tgz",
      "integrity": "sha512-XleUoc9uwGXqjWwXaUTZAmzMcFZ5858QA2vvx1Ur5xIcixXIP+8LnFDgRplU30us6teqdlskFfu+ae4K79Ooew==",
      "dev": true,
      "dependencies": {
        "prelude-ls": "^1.2.1"
      },
      "engines": {
        "node": ">= 0.8.0"
      }
    },
    "node_modules/typed-array-buffer": {
      "version": "1.0.3",
      "resolved": "https://registry.npmjs.org/typed-array-buffer/-/typed-array-buffer-1.0.3.tgz",
      "integrity": "sha512-nAYYwfY3qnzX30IkA6AQZjVbtK6duGontcQm1WSG1MD94YLqK0515GNApXkoxKOWMusVssAHWLh9SeaoefYFGw==",
      "dev": true,
      "dependencies": {
        "call-bound": "^1.0.3",
        "es-errors": "^1.3.0",
        "is-typed-array": "^1.1.14"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/typed-array-byte-length": {
      "version": "1.0.3",
      "resolved": "https://registry.npmjs.org/typed-array-byte-length/-/typed-array-byte-length-1.0.3.tgz",
      "integrity": "sha512-BaXgOuIxz8n8pIq3e7Atg/7s+DpiYrxn4vdot3w9KbnBhcRQq6o3xemQdIfynqSeXeDrF32x+WvfzmOjPiY9lg==",
      "dev": true,
      "dependencies": {
        "call-bind": "^1.0.8",
        "for-each": "^0.3.3",
        "gopd": "^1.2.0",
        "has-proto": "^1.2.0",
        "is-typed-array": "^1.1.14"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/typed-array-byte-offset": {
      "version": "1.0.4",
      "resolved": "https://registry.npmjs.org/typed-array-byte-offset/-/typed-array-byte-offset-1.0.4.tgz",
      "integrity": "sha512-bTlAFB/FBYMcuX81gbL4OcpH5PmlFHqlCCpAl8AlEzMz5k53oNDvN8p1PNOWLEmI2x4orp3raOFB51tv9X+MFQ==",
      "dev": true,
      "dependencies": {
        "available-typed-arrays": "^1.0.7",
        "call-bind": "^1.0.8",
        "for-each": "^0.3.3",
        "gopd": "^1.2.0",
        "has-proto": "^1.2.0",
        "is-typed-array": "^1.1.15",
        "reflect.getprototypeof": "^1.0.9"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/typed-array-length": {
      "version": "1.0.7",
      "resolved": "https://registry.npmjs.org/typed-array-length/-/typed-array-length-1.0.7.tgz",
      "integrity": "sha512-3KS2b+kL7fsuk/eJZ7EQdnEmQoaho/r6KUef7hxvltNA5DR8NAUM+8wJMbJyZ4G9/7i3v5zPBIMN5aybAh2/Jg==",
      "dev": true,
      "dependencies": {
        "call-bind": "^1.0.7",
        "for-each": "^0.3.3",
        "gopd": "^1.0.1",
        "is-typed-array": "^1.1.13",
        "possible-typed-array-names": "^1.0.0",
        "reflect.getprototypeof": "^1.0.6"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/typescript": {
      "version": "5.9.3",
      "resolved": "https://registry.npmjs.org/typescript/-/typescript-5.9.3.tgz",
      "integrity": "sha512-jl1vZzPDinLr9eUt3J/t7V6FgNEw9QjvBPdysz9KfQDD41fQrC2Y4vKQdiaUpFT4bXlb1RHhLpp8wtm6M5TgSw==",
      "dev": true,
      "bin": {
        "tsc": "bin/tsc",
        "tsserver": "bin/tsserver"
      },
      "engines": {
        "node": ">=14.17"
      }
    },
    "node_modules/typescript-eslint": {
      "version": "8.50.0",
      "resolved": "https://registry.npmjs.org/typescript-eslint/-/typescript-eslint-8.50.0.tgz",
      "integrity": "sha512-Q1/6yNUmCpH94fbgMUMg2/BSAr/6U7GBk61kZTv1/asghQOWOjTlp9K8mixS5NcJmm2creY+UFfGeW/+OcA64A==",
      "dev": true,
      "dependencies": {
        "@typescript-eslint/eslint-plugin": "8.50.0",
        "@typescript-eslint/parser": "8.50.0",
        "@typescript-eslint/typescript-estree": "8.50.0",
        "@typescript-eslint/utils": "8.50.0"
      },
      "engines": {
        "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/typescript-eslint"
      },
      "peerDependencies": {
        "eslint": "^8.57.0 || ^9.0.0",
        "typescript": ">=4.8.4 <6.0.0"
      }
    },
    "node_modules/unbox-primitive": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/unbox-primitive/-/unbox-primitive-1.1.0.tgz",
      "integrity": "sha512-nWJ91DjeOkej/TA8pXQ3myruKpKEYgqvpw9lz4OPHj/NWFNluYrjbz9j01CJ8yKQd2g4jFoOkINCTW2I5LEEyw==",
      "dev": true,
      "dependencies": {
        "call-bound": "^1.0.3",
        "has-bigints": "^1.0.2",
        "has-symbols": "^1.1.0",
        "which-boxed-primitive": "^1.1.1"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/undici-types": {
      "version": "6.21.0",
      "resolved": "https://registry.npmjs.org/undici-types/-/undici-types-6.21.0.tgz",
      "integrity": "sha512-iwDZqg0QAGrg9Rav5H4n0M64c3mkR59cJ6wQp+7C4nI0gsmExaedaYLNO44eT4AtBBwjbTiGPMlt2Md0T9H9JQ==",
      "dev": true
    },
    "node_modules/unrs-resolver": {
      "version": "1.11.1",
      "resolved": "https://registry.npmjs.org/unrs-resolver/-/unrs-resolver-1.11.1.tgz",
      "integrity": "sha512-bSjt9pjaEBnNiGgc9rUiHGKv5l4/TGzDmYw3RhnkJGtLhbnnA/5qJj7x3dNDCRx/PJxu774LlH8lCOlB4hEfKg==",
      "dev": true,
      "hasInstallScript": true,
      "dependencies": {
        "napi-postinstall": "^0.3.0"
      },
      "funding": {
        "url": "https://opencollective.com/unrs-resolver"
      },
      "optionalDependencies": {
        "@unrs/resolver-binding-android-arm-eabi": "1.11.1",
        "@unrs/resolver-binding-android-arm64": "1.11.1",
        "@unrs/resolver-binding-darwin-arm64": "1.11.1",
        "@unrs/resolver-binding-darwin-x64": "1.11.1",
        "@unrs/resolver-binding-freebsd-x64": "1.11.1",
        "@unrs/resolver-binding-linux-arm-gnueabihf": "1.11.1",
        "@unrs/resolver-binding-linux-arm-musleabihf": "1.11.1",
        "@unrs/resolver-binding-linux-arm64-gnu": "1.11.1",
        "@unrs/resolver-binding-linux-arm64-musl": "1.11.1",
        "@unrs/resolver-binding-linux-ppc64-gnu": "1.11.1",
        "@unrs/resolver-binding-linux-riscv64-gnu": "1.11.1",
        "@unrs/resolver-binding-linux-riscv64-musl": "1.11.1",
        "@unrs/resolver-binding-linux-s390x-gnu": "1.11.1",
        "@unrs/resolver-binding-linux-x64-gnu": "1.11.1",
        "@unrs/resolver-binding-linux-x64-musl": "1.11.1",
        "@unrs/resolver-binding-wasm32-wasi": "1.11.1",
        "@unrs/resolver-binding-win32-arm64-msvc": "1.11.1",
        "@unrs/resolver-binding-win32-ia32-msvc": "1.11.1",
        "@unrs/resolver-binding-win32-x64-msvc": "1.11.1"
      }
    },
    "node_modules/update-browserslist-db": {
      "version": "1.2.2",
      "resolved": "https://registry.npmjs.org/update-browserslist-db/-/update-browserslist-db-1.2.2.tgz",
      "integrity": "sha512-E85pfNzMQ9jpKkA7+TJAi4TJN+tBCuWh5rUcS/sv6cFi+1q9LYDwDI5dpUL0u/73EElyQ8d3TEaeW4sPedBqYA==",
      "dev": true,
      "funding": [
        {
          "type": "opencollective",
          "url": "https://opencollective.com/browserslist"
        },
        {
          "type": "tidelift",
          "url": "https://tidelift.com/funding/github/npm/browserslist"
        },
        {
          "type": "github",
          "url": "https://github.com/sponsors/ai"
        }
      ],
      "dependencies": {
        "escalade": "^3.2.0",
        "picocolors": "^1.1.1"
      },
      "bin": {
        "update-browserslist-db": "cli.js"
      },
      "peerDependencies": {
        "browserslist": ">= 4.21.0"
      }
    },
    "node_modules/uri-js": {
      "version": "4.4.1",
      "resolved": "https://registry.npmjs.org/uri-js/-/uri-js-4.4.1.tgz",
      "integrity": "sha512-7rKUyy33Q1yc98pQ1DAmLtwX109F7TIfWlW1Ydo8Wl1ii1SeHieeh0HHfPeL2fMXK6z0s8ecKs9frCuLJvndBg==",
      "dev": true,
      "dependencies": {
        "punycode": "^2.1.0"
      }
    },
    "node_modules/use-sync-external-store": {
      "version": "1.6.0",
      "resolved": "https://registry.npmjs.org/use-sync-external-store/-/use-sync-external-store-1.6.0.tgz",
      "integrity": "sha512-Pp6GSwGP/NrPIrxVFAIkOQeyw8lFenOHijQWkUTrDvrF4ALqylP2C/KCkeS9dpUM3KvYRQhna5vt7IL95+ZQ9w==",
      "peerDependencies": {
        "react": "^16.8.0 || ^17.0.0 || ^18.0.0 || ^19.0.0"
      }
    },
    "node_modules/victory-vendor": {
      "version": "37.3.6",
      "resolved": "https://registry.npmjs.org/victory-vendor/-/victory-vendor-37.3.6.tgz",
      "integrity": "sha512-SbPDPdDBYp+5MJHhBCAyI7wKM3d5ivekigc2Dk2s7pgbZ9wIgIBYGVw4zGHBml/qTFbexrofXW6Gu4noGxrOwQ==",
      "dependencies": {
        "@types/d3-array": "^3.0.3",
        "@types/d3-ease": "^3.0.0",
        "@types/d3-interpolate": "^3.0.1",
        "@types/d3-scale": "^4.0.2",
        "@types/d3-shape": "^3.1.0",
        "@types/d3-time": "^3.0.0",
        "@types/d3-timer": "^3.0.0",
        "d3-array": "^3.1.6",
        "d3-ease": "^3.0.1",
        "d3-interpolate": "^3.0.1",
        "d3-scale": "^4.0.2",
        "d3-shape": "^3.1.0",
        "d3-time": "^3.0.0",
        "d3-timer": "^3.0.1"
      }
    },
    "node_modules/which": {
      "version": "2.0.2",
      "resolved": "https://registry.npmjs.org/which/-/which-2.0.2.tgz",
      "integrity": "sha512-BLI3Tl1TW3Pvl70l3yq3Y64i+awpwXqsGBYWkkqMtnbXgrMD+yj7rhW0kuEDxzJaYXGjEW5ogapKNMEKNMjibA==",
      "dev": true,
      "dependencies": {
        "isexe": "^2.0.0"
      },
      "bin": {
        "node-which": "bin/node-which"
      },
      "engines": {
        "node": ">= 8"
      }
    },
    "node_modules/which-boxed-primitive": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/which-boxed-primitive/-/which-boxed-primitive-1.1.1.tgz",
      "integrity": "sha512-TbX3mj8n0odCBFVlY8AxkqcHASw3L60jIuF8jFP78az3C2YhmGvqbHBpAjTRH2/xqYunrJ9g1jSyjCjpoWzIAA==",
      "dev": true,
      "dependencies": {
        "is-bigint": "^1.1.0",
        "is-boolean-object": "^1.2.1",
        "is-number-object": "^1.1.1",
        "is-string": "^1.1.1",
        "is-symbol": "^1.1.1"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/which-builtin-type": {
      "version": "1.2.1",
      "resolved": "https://registry.npmjs.org/which-builtin-type/-/which-builtin-type-1.2.1.tgz",
      "integrity": "sha512-6iBczoX+kDQ7a3+YJBnh3T+KZRxM/iYNPXicqk66/Qfm1b93iu+yOImkg0zHbj5LNOcNv1TEADiZ0xa34B4q6Q==",
      "dev": true,
      "dependencies": {
        "call-bound": "^1.0.2",
        "function.prototype.name": "^1.1.6",
        "has-tostringtag": "^1.0.2",
        "is-async-function": "^2.0.0",
        "is-date-object": "^1.1.0",
        "is-finalizationregistry": "^1.1.0",
        "is-generator-function": "^1.0.10",
        "is-regex": "^1.2.1",
        "is-weakref": "^1.0.2",
        "isarray": "^2.0.5",
        "which-boxed-primitive": "^1.1.0",
        "which-collection": "^1.0.2",
        "which-typed-array": "^1.1.16"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/which-collection": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/which-collection/-/which-collection-1.0.2.tgz",
      "integrity": "sha512-K4jVyjnBdgvc86Y6BkaLZEN933SwYOuBFkdmBu9ZfkcAbdVbpITnDmjvZ/aQjRXQrv5EPkTnD1s39GiiqbngCw==",
      "dev": true,
      "dependencies": {
        "is-map": "^2.0.3",
        "is-set": "^2.0.3",
        "is-weakmap": "^2.0.2",
        "is-weakset": "^2.0.3"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/which-typed-array": {
      "version": "1.1.19",
      "resolved": "https://registry.npmjs.org/which-typed-array/-/which-typed-array-1.1.19.tgz",
      "integrity": "sha512-rEvr90Bck4WZt9HHFC4DJMsjvu7x+r6bImz0/BrbWb7A2djJ8hnZMrWnHo9F8ssv0OMErasDhftrfROTyqSDrw==",
      "dev": true,
      "dependencies": {
        "available-typed-arrays": "^1.0.7",
        "call-bind": "^1.0.8",
        "call-bound": "^1.0.4",
        "for-each": "^0.3.5",
        "get-proto": "^1.0.1",
        "gopd": "^1.2.0",
        "has-tostringtag": "^1.0.2"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/word-wrap": {
      "version": "1.2.5",
      "resolved": "https://registry.npmjs.org/word-wrap/-/word-wrap-1.2.5.tgz",
      "integrity": "sha512-BN22B5eaMMI9UMtjrGd5g5eCYPpCPDUy0FJXbYsaT5zYxjFOckS53SQDE3pWkVoWpHXVb3BrYcEN4Twa55B5cA==",
      "dev": true,
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/yallist": {
      "version": "3.1.1",
      "resolved": "https://registry.npmjs.org/yallist/-/yallist-3.1.1.tgz",
      "integrity": "sha512-a4UGQaWPH59mOXUYnAG2ewncQS4i4F43Tv3JoAM+s2VDAmS9NsK8GpDMLrCHPksFT7h3K6TOoUNn2pb7RoXx4g==",
      "dev": true
    },
    "node_modules/yocto-queue": {
      "version": "0.1.0",
      "resolved": "https://registry.npmjs.org/yocto-queue/-/yocto-queue-0.1.0.tgz",
      "integrity": "sha512-rVksvsnNCdJ/ohGc6xgPwyN8eheCxsiLM8mxuE/t/mOVqJewPuO1miLpTHQiRgTKCLexL4MeAFVagts7HmNZ2Q==",
      "dev": true,
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/zod": {
      "version": "4.2.0",
      "resolved": "https://registry.npmjs.org/zod/-/zod-4.2.0.tgz",
      "integrity": "sha512-Bd5fw9wlIhtqCCxotZgdTOMwGm1a0u75wARVEY9HMs1X17trvA/lMi4+MGK5EUfYkXVTbX8UDiDKW4OgzHVUZw==",
      "dev": true,
      "funding": {
        "url": "https://github.com/sponsors/colinhacks"
      }
    },
    "node_modules/zod-validation-error": {
      "version": "4.0.2",
      "resolved": "https://registry.npmjs.org/zod-validation-error/-/zod-validation-error-4.0.2.tgz",
      "integrity": "sha512-Q6/nZLe6jxuU80qb/4uJ4t5v2VEZ44lzQjPDhYJNztRQ4wyWc6VF3D3Kb/fAuPetZQnhS3hnajCf9CsWesghLQ==",
      "dev": true,
      "engines": {
        "node": ">=18.0.0"
      },
      "peerDependencies": {
        "zod": "^3.25.0 || ^4.0.0"
      }
    }
  }
}

```

---

### `package.json`

<a id="packagejson"></a>

> 📊 **Stats:** 32 lignes | 720 B

```json
{
  "name": "ugate-admin-frontend",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "eslint"
  },
  "dependencies": {
    "clsx": "^2.1.1",
    "framer-motion": "^12.29.2",
    "lucide-react": "^0.561.0",
    "next": "16.0.10",
    "react": "19.2.1",
    "react-dom": "19.2.1",
    "recharts": "^3.6.0",
    "tailwind-merge": "^3.4.0"
  },
  "devDependencies": {
    "@tailwindcss/postcss": "^4",
    "@types/node": "^20",
    "@types/react": "^19",
    "@types/react-dom": "^19",
    "eslint": "^9",
    "eslint-config-next": "16.0.10",
    "tailwindcss": "^4",
    "typescript": "^5"
  }
}

```

---

### `README.md`

<a id="READMEmd"></a>

> 📊 **Stats:** 37 lignes | 1.45 KB

```markdown
This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

```

---

### `tsconfig.json`

<a id="tsconfigjson"></a>

> 📊 **Stats:** 35 lignes | 700 B

```json
{
  "compilerOptions": {
    "target": "ES2017",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "react-jsx",
    "incremental": true,
    "plugins": [
      {
        "name": "next"
      }
    ],
    "paths": {
      "@/*": ["./*"]
    }
  },
  "include": [
    "next-env.d.ts",
    "**/*.ts",
    "**/*.tsx",
    ".next/types/**/*.ts",
    ".next/dev/types/**/*.ts",
    "**/*.mts"
  ],
  "exclude": ["node_modules"]
}

```

---

## 🎨 Styles

> 1 fichier(s)

### `app\globals.css`

<a id="app-globalscss"></a>

> 📊 **Stats:** 47 lignes | 1.37 KB

```css
@import "tailwindcss";

:root {
  --background: #F8FAFC;
  /* Changement ici : Bleu Nuit Profond au lieu de Slate 900 */
  --foreground: #0F172A; /* C'est déjà un bleu très sombre (Slate), mais on va forcer un bleu plus saturé si besoin */

  --card: #FFFFFF;
  --card-foreground: #0F172A;

  /* Primary : Bleu Nuit "Royal" */
  --primary: #172554; /* Blue 950 - Beaucoup plus bleu que noir */
  --primary-foreground: #FFFFFF;

  /* Brand : Le bleu électrique pour les boutons/accents */
  --brand: #2563EB;

  --muted: #64748B;
  --border: #E2E8F0;

  --radius: 1rem;
}

body {
  background-color: var(--background);
  color: var(--foreground);
  /* Fond subtil bleuté */
  background-image:
          radial-gradient(at 0% 0%, rgba(37, 99, 235, 0.05) 0px, transparent 50%),
          radial-gradient(at 100% 0%, rgba(30, 58, 138, 0.05) 0px, transparent 50%);
  background-attachment: fixed;
}

/* ... Le reste des utilitaires (glass-panel, premium-card) reste identique ... */
.premium-card {
  background: white;
  border: 1px solid var(--border);
  border-radius: var(--radius);
  box-shadow: 0 1px 3px rgba(0,0,0,0.05); /* Ombre plus douce */
  transition: all 0.3s ease;
}

.premium-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 30px -10px rgba(37, 99, 235, 0.15); /* Ombre bleutée au survol */
  border-color: rgba(37, 99, 235, 0.2);
}
```

---

## 📝 Documentation

> 1 fichier(s)

### `PROJECT_CONTEXT.md`

<a id="PROJECT_CONTEXTmd"></a>

> 📊 **Stats:** 13958 lignes | 493.63 KB

```markdown
# 🚀 Contexte de Projet: ugate-admin-frontend

> **Généré automatiquement le:** samedi 31 janvier 2026 à 08:57
> 
> **Type de projet:** Next.js + TypeScript
> 
> **But:** Fournir un contexte complet pour les assistants IA

---

## 📊 Vue d'ensemble du projet

Ce document contient l'intégralité du code source et de la structure de votre projet.
Il est optimisé pour être utilisé comme contexte par des assistants IA (ChatGPT, Claude, etc.).

### 🎯 Comment utiliser ce document

1. **Copier-coller** l'intégralité dans votre conversation avec l'IA
2. **Préciser** votre demande après avoir fourni le contexte
3. L'IA aura une **vision complète** de votre projet

---

## 📈 Statistiques du Projet

| Métrique | Valeur |
|----------|--------|
| **Total de fichiers analysés** | 0 |
| **Total de lignes de code** | 0 |

### 📂 Répartition par type de fichier

| Extension | Nombre |
|-----------|--------|
| .tsx | 23 |
| .ts | 18 |
| .json | 3 |
| .css | 1 |
| .js | 1 |
| .md | 1 |

---

## 📚 Table des Matières

- [📦 Configuration](#📦-configuration)
  - [next.config.ts](#nextconfigts)
  - [package-lock.json](#package-lockjson)
  - [package.json](#packagejson)
  - [README.md](#READMEmd)
  - [tsconfig.json](#tsconfigjson)
- [🎨 Styles](#🎨-styles)
  - [app\globals.css](#app-globalscss)
- [📄 Autres](#📄-autres)
  - [app\admissions\page.tsx](#app-admissions-pagetsx)
  - [app\events\page.tsx](#app-events-pagetsx)
  - [app\page.tsx](#app-pagetsx)
  - [app\products\page.tsx](#app-products-pagetsx)
  - [app\services\page.tsx](#app-services-pagetsx)
  - [app\settings\page.tsx](#app-settings-pagetsx)
  - [components\Admissions.tsx](#components-Admissionstsx)
  - [components\Branches.tsx](#components-Branchestsx)
  - [components\BranchSelector.tsx](#components-BranchSelectortsx)
  - [components\Dashboard.tsx](#components-Dashboardtsx)
  - [components\Events.tsx](#components-Eventstsx)
  - [components\Login.tsx](#components-Logintsx)
  - [components\onboarding\CreateSyndicate.tsx](#components-onboarding-CreateSyndicatetsx)
  - [components\onboarding\PendingSyndicate.tsx](#components-onboarding-PendingSyndicatetsx)
  - [components\Products.tsx](#components-Productstsx)
  - [components\Register.tsx](#components-Registertsx)
  - [components\Services.tsx](#components-Servicestsx)
  - [components\Settings.tsx](#components-Settingstsx)
  - [components\ui\Badge.tsx](#components-ui-Badgetsx)
  - [components\ui\Button.tsx](#components-ui-Buttontsx)
  - [components\ui\Card.tsx](#components-ui-Cardtsx)
  - [components\ui\Input.tsx](#components-ui-Inputtsx)
  - [generate.js](#generatejs)
  - [lib\constants\branches.ts](#lib-constants-branchests)
  - [lib\constants\mockEvents.ts](#lib-constants-mockEventsts)
  - [lib\constants.ts](#lib-constantsts)
  - [lib\contexts\AuthContext.tsx](#lib-contexts-AuthContexttsx)
  - [lib\services\admin.service.ts](#lib-services-adminservicets)
  - [lib\services\api.client.ts](#lib-services-apiclientts)
  - [lib\services\auth.service.ts](#lib-services-authservicets)
  - [lib\services\branches.service.ts](#lib-services-branchesservicets)
  - [lib\services\events.service.ts](#lib-services-eventsservicets)
  - [lib\services\products.service.ts](#lib-services-productsservicets)
  - [lib\services\services.service.ts](#lib-services-servicesservicets)
  - [lib\services\syndicates.service.ts](#lib-services-syndicatesservicets)
  - [lib\types\auth.ts](#lib-types-authts)
  - [lib\types\events.ts](#lib-types-eventsts)
  - [lib\types\superadmin.ts](#lib-types-superadmints)
  - [lib\types.ts](#lib-typests)
  - [lib\utils.ts](#lib-utilsts)
  - [next-env.d.ts](#next-envdts)

---

## 📦 Configuration

> 5 fichier(s)

### `next.config.ts`

<a id="nextconfigts"></a>

> 📊 **Stats:** 29 lignes | 590 B

```typescript
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/**',
      },
      // AJOUTE CE BLOC ICI :
      {
        protocol: 'https',
        hostname: 'media-service.pynfi.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
```

---

### `package-lock.json`

<a id="package-lockjson"></a>

> 📊 **Stats:** 6532 lignes | 233.88 KB

```json
{
  "name": "ugate-admin-frontend",
  "version": "0.1.0",
  "lockfileVersion": 3,
  "requires": true,
  "packages": {
    "": {
      "name": "ugate-admin-frontend",
      "version": "0.1.0",
      "dependencies": {
        "clsx": "^2.1.1",
        "framer-motion": "^12.29.2",
        "lucide-react": "^0.561.0",
        "next": "16.0.10",
        "react": "19.2.1",
        "react-dom": "19.2.1",
        "recharts": "^3.6.0",
        "tailwind-merge": "^3.4.0"
      },
      "devDependencies": {
        "@tailwindcss/postcss": "^4",
        "@types/node": "^20",
        "@types/react": "^19",
        "@types/react-dom": "^19",
        "eslint": "^9",
        "eslint-config-next": "16.0.10",
        "tailwindcss": "^4",
        "typescript": "^5"
      }
    },
    "node_modules/@alloc/quick-lru": {
      "version": "5.2.0",
      "resolved": "https://registry.npmjs.org/@alloc/quick-lru/-/quick-lru-5.2.0.tgz",
      "integrity": "sha512-UrcABB+4bUrFABwbluTIBErXwvbsU/V7TZWfmbgJfbkwiBuziS9gxdODUyuiecfdGQ85jglMW6juS3+z5TsKLw==",
      "dev": true,
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/@babel/code-frame": {
      "version": "7.27.1",
      "resolved": "https://registry.npmjs.org/@babel/code-frame/-/code-frame-7.27.1.tgz",
      "integrity": "sha512-cjQ7ZlQ0Mv3b47hABuTevyTuYN4i+loJKGeV9flcCgIK37cCXRh+L1bd3iBHlynerhQ7BhCkn2BPbQUL+rGqFg==",
      "dev": true,
      "dependencies": {
        "@babel/helper-validator-identifier": "^7.27.1",
        "js-tokens": "^4.0.0",
        "picocolors": "^1.1.1"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/compat-data": {
      "version": "7.28.5",
      "resolved": "https://registry.npmjs.org/@babel/compat-data/-/compat-data-7.28.5.tgz",
      "integrity": "sha512-6uFXyCayocRbqhZOB+6XcuZbkMNimwfVGFji8CTZnCzOHVGvDqzvitu1re2AU5LROliz7eQPhB8CpAMvnx9EjA==",
      "dev": true,
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/core": {
      "version": "7.28.5",
      "resolved": "https://registry.npmjs.org/@babel/core/-/core-7.28.5.tgz",
      "integrity": "sha512-e7jT4DxYvIDLk1ZHmU/m/mB19rex9sv0c2ftBtjSBv+kVM/902eh0fINUzD7UwLLNR+jU585GxUJ8/EBfAM5fw==",
      "dev": true,
      "dependencies": {
        "@babel/code-frame": "^7.27.1",
        "@babel/generator": "^7.28.5",
        "@babel/helper-compilation-targets": "^7.27.2",
        "@babel/helper-module-transforms": "^7.28.3",
        "@babel/helpers": "^7.28.4",
        "@babel/parser": "^7.28.5",
        "@babel/template": "^7.27.2",
        "@babel/traverse": "^7.28.5",
        "@babel/types": "^7.28.5",
        "@jridgewell/remapping": "^2.3.5",
        "convert-source-map": "^2.0.0",
        "debug": "^4.1.0",
        "gensync": "^1.0.0-beta.2",
        "json5": "^2.2.3",
        "semver": "^6.3.1"
      },
      "engines": {
        "node": ">=6.9.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/babel"
      }
    },
    "node_modules/@babel/generator": {
      "version": "7.28.5",
      "resolved": "https://registry.npmjs.org/@babel/generator/-/generator-7.28.5.tgz",
      "integrity": "sha512-3EwLFhZ38J4VyIP6WNtt2kUdW9dokXA9Cr4IVIFHuCpZ3H8/YFOl5JjZHisrn1fATPBmKKqXzDFvh9fUwHz6CQ==",
      "dev": true,
      "dependencies": {
        "@babel/parser": "^7.28.5",
        "@babel/types": "^7.28.5",
        "@jridgewell/gen-mapping": "^0.3.12",
        "@jridgewell/trace-mapping": "^0.3.28",
        "jsesc": "^3.0.2"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/helper-compilation-targets": {
      "version": "7.27.2",
      "resolved": "https://registry.npmjs.org/@babel/helper-compilation-targets/-/helper-compilation-targets-7.27.2.tgz",
      "integrity": "sha512-2+1thGUUWWjLTYTHZWK1n8Yga0ijBz1XAhUXcKy81rd5g6yh7hGqMp45v7cadSbEHc9G3OTv45SyneRN3ps4DQ==",
      "dev": true,
      "dependencies": {
        "@babel/compat-data": "^7.27.2",
        "@babel/helper-validator-option": "^7.27.1",
        "browserslist": "^4.24.0",
        "lru-cache": "^5.1.1",
        "semver": "^6.3.1"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/helper-globals": {
      "version": "7.28.0",
      "resolved": "https://registry.npmjs.org/@babel/helper-globals/-/helper-globals-7.28.0.tgz",
      "integrity": "sha512-+W6cISkXFa1jXsDEdYA8HeevQT/FULhxzR99pxphltZcVaugps53THCeiWA8SguxxpSp3gKPiuYfSWopkLQ4hw==",
      "dev": true,
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/helper-module-imports": {
      "version": "7.27.1",
      "resolved": "https://registry.npmjs.org/@babel/helper-module-imports/-/helper-module-imports-7.27.1.tgz",
      "integrity": "sha512-0gSFWUPNXNopqtIPQvlD5WgXYI5GY2kP2cCvoT8kczjbfcfuIljTbcWrulD1CIPIX2gt1wghbDy08yE1p+/r3w==",
      "dev": true,
      "dependencies": {
        "@babel/traverse": "^7.27.1",
        "@babel/types": "^7.27.1"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/helper-module-transforms": {
      "version": "7.28.3",
      "resolved": "https://registry.npmjs.org/@babel/helper-module-transforms/-/helper-module-transforms-7.28.3.tgz",
      "integrity": "sha512-gytXUbs8k2sXS9PnQptz5o0QnpLL51SwASIORY6XaBKF88nsOT0Zw9szLqlSGQDP/4TljBAD5y98p2U1fqkdsw==",
      "dev": true,
      "dependencies": {
        "@babel/helper-module-imports": "^7.27.1",
        "@babel/helper-validator-identifier": "^7.27.1",
        "@babel/traverse": "^7.28.3"
      },
      "engines": {
        "node": ">=6.9.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0"
      }
    },
    "node_modules/@babel/helper-string-parser": {
      "version": "7.27.1",
      "resolved": "https://registry.npmjs.org/@babel/helper-string-parser/-/helper-string-parser-7.27.1.tgz",
      "integrity": "sha512-qMlSxKbpRlAridDExk92nSobyDdpPijUq2DW6oDnUqd0iOGxmQjyqhMIihI9+zv4LPyZdRje2cavWPbCbWm3eA==",
      "dev": true,
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/helper-validator-identifier": {
      "version": "7.28.5",
      "resolved": "https://registry.npmjs.org/@babel/helper-validator-identifier/-/helper-validator-identifier-7.28.5.tgz",
      "integrity": "sha512-qSs4ifwzKJSV39ucNjsvc6WVHs6b7S03sOh2OcHF9UHfVPqWWALUsNUVzhSBiItjRZoLHx7nIarVjqKVusUZ1Q==",
      "dev": true,
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/helper-validator-option": {
      "version": "7.27.1",
      "resolved": "https://registry.npmjs.org/@babel/helper-validator-option/-/helper-validator-option-7.27.1.tgz",
      "integrity": "sha512-YvjJow9FxbhFFKDSuFnVCe2WxXk1zWc22fFePVNEaWJEu8IrZVlda6N0uHwzZrUM1il7NC9Mlp4MaJYbYd9JSg==",
      "dev": true,
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/helpers": {
      "version": "7.28.4",
      "resolved": "https://registry.npmjs.org/@babel/helpers/-/helpers-7.28.4.tgz",
      "integrity": "sha512-HFN59MmQXGHVyYadKLVumYsA9dBFun/ldYxipEjzA4196jpLZd8UjEEBLkbEkvfYreDqJhZxYAWFPtrfhNpj4w==",
      "dev": true,
      "dependencies": {
        "@babel/template": "^7.27.2",
        "@babel/types": "^7.28.4"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/parser": {
      "version": "7.28.5",
      "resolved": "https://registry.npmjs.org/@babel/parser/-/parser-7.28.5.tgz",
      "integrity": "sha512-KKBU1VGYR7ORr3At5HAtUQ+TV3SzRCXmA/8OdDZiLDBIZxVyzXuztPjfLd3BV1PRAQGCMWWSHYhL0F8d5uHBDQ==",
      "dev": true,
      "dependencies": {
        "@babel/types": "^7.28.5"
      },
      "bin": {
        "parser": "bin/babel-parser.js"
      },
      "engines": {
        "node": ">=6.0.0"
      }
    },
    "node_modules/@babel/template": {
      "version": "7.27.2",
      "resolved": "https://registry.npmjs.org/@babel/template/-/template-7.27.2.tgz",
      "integrity": "sha512-LPDZ85aEJyYSd18/DkjNh4/y1ntkE5KwUHWTiqgRxruuZL2F1yuHligVHLvcHY2vMHXttKFpJn6LwfI7cw7ODw==",
      "dev": true,
      "dependencies": {
        "@babel/code-frame": "^7.27.1",
        "@babel/parser": "^7.27.2",
        "@babel/types": "^7.27.1"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/traverse": {
      "version": "7.28.5",
      "resolved": "https://registry.npmjs.org/@babel/traverse/-/traverse-7.28.5.tgz",
      "integrity": "sha512-TCCj4t55U90khlYkVV/0TfkJkAkUg3jZFA3Neb7unZT8CPok7iiRfaX0F+WnqWqt7OxhOn0uBKXCw4lbL8W0aQ==",
      "dev": true,
      "dependencies": {
        "@babel/code-frame": "^7.27.1",
        "@babel/generator": "^7.28.5",
        "@babel/helper-globals": "^7.28.0",
        "@babel/parser": "^7.28.5",
        "@babel/template": "^7.27.2",
        "@babel/types": "^7.28.5",
        "debug": "^4.3.1"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/types": {
      "version": "7.28.5",
      "resolved": "https://registry.npmjs.org/@babel/types/-/types-7.28.5.tgz",
      "integrity": "sha512-qQ5m48eI/MFLQ5PxQj4PFaprjyCTLI37ElWMmNs0K8Lk3dVeOdNpB3ks8jc7yM5CDmVC73eMVk/trk3fgmrUpA==",
      "dev": true,
      "dependencies": {
        "@babel/helper-string-parser": "^7.27.1",
        "@babel/helper-validator-identifier": "^7.28.5"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@emnapi/core": {
      "version": "1.7.1",
      "resolved": "https://registry.npmjs.org/@emnapi/core/-/core-1.7.1.tgz",
      "integrity": "sha512-o1uhUASyo921r2XtHYOHy7gdkGLge8ghBEQHMWmyJFoXlpU58kIrhhN3w26lpQb6dspetweapMn2CSNwQ8I4wg==",
      "dev": true,
      "optional": true,
      "dependencies": {
        "@emnapi/wasi-threads": "1.1.0",
        "tslib": "^2.4.0"
      }
    },
    "node_modules/@emnapi/runtime": {
      "version": "1.7.1",
      "resolved": "https://registry.npmjs.org/@emnapi/runtime/-/runtime-1.7.1.tgz",
      "integrity": "sha512-PVtJr5CmLwYAU9PZDMITZoR5iAOShYREoR45EyyLrbntV50mdePTgUn4AmOw90Ifcj+x2kRjdzr1HP3RrNiHGA==",
      "optional": true,
      "dependencies": {
        "tslib": "^2.4.0"
      }
    },
    "node_modules/@emnapi/wasi-threads": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/@emnapi/wasi-threads/-/wasi-threads-1.1.0.tgz",
      "integrity": "sha512-WI0DdZ8xFSbgMjR1sFsKABJ/C5OnRrjT06JXbZKexJGrDuPTzZdDYfFlsgcCXCyf+suG5QU2e/y1Wo2V/OapLQ==",
      "dev": true,
      "optional": true,
      "dependencies": {
        "tslib": "^2.4.0"
      }
    },
    "node_modules/@eslint-community/eslint-utils": {
      "version": "4.9.0",
      "resolved": "https://registry.npmjs.org/@eslint-community/eslint-utils/-/eslint-utils-4.9.0.tgz",
      "integrity": "sha512-ayVFHdtZ+hsq1t2Dy24wCmGXGe4q9Gu3smhLYALJrr473ZH27MsnSL+LKUlimp4BWJqMDMLmPpx/Q9R3OAlL4g==",
      "dev": true,
      "dependencies": {
        "eslint-visitor-keys": "^3.4.3"
      },
      "engines": {
        "node": "^12.22.0 || ^14.17.0 || >=16.0.0"
      },
      "funding": {
        "url": "https://opencollective.com/eslint"
      },
      "peerDependencies": {
        "eslint": "^6.0.0 || ^7.0.0 || >=8.0.0"
      }
    },
    "node_modules/@eslint-community/eslint-utils/node_modules/eslint-visitor-keys": {
      "version": "3.4.3",
      "resolved": "https://registry.npmjs.org/eslint-visitor-keys/-/eslint-visitor-keys-3.4.3.tgz",
      "integrity": "sha512-wpc+LXeiyiisxPlEkUzU6svyS1frIO3Mgxj1fdy7Pm8Ygzguax2N3Fa/D/ag1WqbOprdI+uY6wMUl8/a2G+iag==",
      "dev": true,
      "engines": {
        "node": "^12.22.0 || ^14.17.0 || >=16.0.0"
      },
      "funding": {
        "url": "https://opencollective.com/eslint"
      }
    },
    "node_modules/@eslint-community/regexpp": {
      "version": "4.12.2",
      "resolved": "https://registry.npmjs.org/@eslint-community/regexpp/-/regexpp-4.12.2.tgz",
      "integrity": "sha512-EriSTlt5OC9/7SXkRSCAhfSxxoSUgBm33OH+IkwbdpgoqsSsUg7y3uh+IICI/Qg4BBWr3U2i39RpmycbxMq4ew==",
      "dev": true,
      "engines": {
        "node": "^12.0.0 || ^14.0.0 || >=16.0.0"
      }
    },
    "node_modules/@eslint/config-array": {
      "version": "0.21.1",
      "resolved": "https://registry.npmjs.org/@eslint/config-array/-/config-array-0.21.1.tgz",
      "integrity": "sha512-aw1gNayWpdI/jSYVgzN5pL0cfzU02GT3NBpeT/DXbx1/1x7ZKxFPd9bwrzygx/qiwIQiJ1sw/zD8qY/kRvlGHA==",
      "dev": true,
      "dependencies": {
        "@eslint/object-schema": "^2.1.7",
        "debug": "^4.3.1",
        "minimatch": "^3.1.2"
      },
      "engines": {
        "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
      }
    },
    "node_modules/@eslint/config-helpers": {
      "version": "0.4.2",
      "resolved": "https://registry.npmjs.org/@eslint/config-helpers/-/config-helpers-0.4.2.tgz",
      "integrity": "sha512-gBrxN88gOIf3R7ja5K9slwNayVcZgK6SOUORm2uBzTeIEfeVaIhOpCtTox3P6R7o2jLFwLFTLnC7kU/RGcYEgw==",
      "dev": true,
      "dependencies": {
        "@eslint/core": "^0.17.0"
      },
      "engines": {
        "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
      }
    },
    "node_modules/@eslint/core": {
      "version": "0.17.0",
      "resolved": "https://registry.npmjs.org/@eslint/core/-/core-0.17.0.tgz",
      "integrity": "sha512-yL/sLrpmtDaFEiUj1osRP4TI2MDz1AddJL+jZ7KSqvBuliN4xqYY54IfdN8qD8Toa6g1iloph1fxQNkjOxrrpQ==",
      "dev": true,
      "dependencies": {
        "@types/json-schema": "^7.0.15"
      },
      "engines": {
        "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
      }
    },
    "node_modules/@eslint/eslintrc": {
      "version": "3.3.3",
      "resolved": "https://registry.npmjs.org/@eslint/eslintrc/-/eslintrc-3.3.3.tgz",
      "integrity": "sha512-Kr+LPIUVKz2qkx1HAMH8q1q6azbqBAsXJUxBl/ODDuVPX45Z9DfwB8tPjTi6nNZ8BuM3nbJxC5zCAg5elnBUTQ==",
      "dev": true,
      "dependencies": {
        "ajv": "^6.12.4",
        "debug": "^4.3.2",
        "espree": "^10.0.1",
        "globals": "^14.0.0",
        "ignore": "^5.2.0",
        "import-fresh": "^3.2.1",
        "js-yaml": "^4.1.1",
        "minimatch": "^3.1.2",
        "strip-json-comments": "^3.1.1"
      },
      "engines": {
        "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
      },
      "funding": {
        "url": "https://opencollective.com/eslint"
      }
    },
    "node_modules/@eslint/js": {
      "version": "9.39.2",
      "resolved": "https://registry.npmjs.org/@eslint/js/-/js-9.39.2.tgz",
      "integrity": "sha512-q1mjIoW1VX4IvSocvM/vbTiveKC4k9eLrajNEuSsmjymSDEbpGddtpfOoN7YGAqBK3NG+uqo8ia4PDTt8buCYA==",
      "dev": true,
      "engines": {
        "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
      },
      "funding": {
        "url": "https://eslint.org/donate"
      }
    },
    "node_modules/@eslint/object-schema": {
      "version": "2.1.7",
      "resolved": "https://registry.npmjs.org/@eslint/object-schema/-/object-schema-2.1.7.tgz",
      "integrity": "sha512-VtAOaymWVfZcmZbp6E2mympDIHvyjXs/12LqWYjVw6qjrfF+VK+fyG33kChz3nnK+SU5/NeHOqrTEHS8sXO3OA==",
      "dev": true,
      "engines": {
        "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
      }
    },
    "node_modules/@eslint/plugin-kit": {
      "version": "0.4.1",
      "resolved": "https://registry.npmjs.org/@eslint/plugin-kit/-/plugin-kit-0.4.1.tgz",
      "integrity": "sha512-43/qtrDUokr7LJqoF2c3+RInu/t4zfrpYdoSDfYyhg52rwLV6TnOvdG4fXm7IkSB3wErkcmJS9iEhjVtOSEjjA==",
      "dev": true,
      "dependencies": {
        "@eslint/core": "^0.17.0",
        "levn": "^0.4.1"
      },
      "engines": {
        "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
      }
    },
    "node_modules/@humanfs/core": {
      "version": "0.19.1",
      "resolved": "https://registry.npmjs.org/@humanfs/core/-/core-0.19.1.tgz",
      "integrity": "sha512-5DyQ4+1JEUzejeK1JGICcideyfUbGixgS9jNgex5nqkW+cY7WZhxBigmieN5Qnw9ZosSNVC9KQKyb+GUaGyKUA==",
      "dev": true,
      "engines": {
        "node": ">=18.18.0"
      }
    },
    "node_modules/@humanfs/node": {
      "version": "0.16.7",
      "resolved": "https://registry.npmjs.org/@humanfs/node/-/node-0.16.7.tgz",
      "integrity": "sha512-/zUx+yOsIrG4Y43Eh2peDeKCxlRt/gET6aHfaKpuq267qXdYDFViVHfMaLyygZOnl0kGWxFIgsBy8QFuTLUXEQ==",
      "dev": true,
      "dependencies": {
        "@humanfs/core": "^0.19.1",
        "@humanwhocodes/retry": "^0.4.0"
      },
      "engines": {
        "node": ">=18.18.0"
      }
    },
    "node_modules/@humanwhocodes/module-importer": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/@humanwhocodes/module-importer/-/module-importer-1.0.1.tgz",
      "integrity": "sha512-bxveV4V8v5Yb4ncFTT3rPSgZBOpCkjfK0y4oVVVJwIuDVBRMDXrPyXRL988i5ap9m9bnyEEjWfm5WkBmtffLfA==",
      "dev": true,
      "engines": {
        "node": ">=12.22"
      },
      "funding": {
        "type": "github",
        "url": "https://github.com/sponsors/nzakas"
      }
    },
    "node_modules/@humanwhocodes/retry": {
      "version": "0.4.3",
      "resolved": "https://registry.npmjs.org/@humanwhocodes/retry/-/retry-0.4.3.tgz",
      "integrity": "sha512-bV0Tgo9K4hfPCek+aMAn81RppFKv2ySDQeMoSZuvTASywNTnVJCArCZE2FWqpvIatKu7VMRLWlR1EazvVhDyhQ==",
      "dev": true,
      "engines": {
        "node": ">=18.18"
      },
      "funding": {
        "type": "github",
        "url": "https://github.com/sponsors/nzakas"
      }
    },
    "node_modules/@img/colour": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/@img/colour/-/colour-1.0.0.tgz",
      "integrity": "sha512-A5P/LfWGFSl6nsckYtjw9da+19jB8hkJ6ACTGcDfEJ0aE+l2n2El7dsVM7UVHZQ9s2lmYMWlrS21YLy2IR1LUw==",
      "optional": true,
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@img/sharp-darwin-arm64": {
      "version": "0.34.5",
      "resolved": "https://registry.npmjs.org/@img/sharp-darwin-arm64/-/sharp-darwin-arm64-0.34.5.tgz",
      "integrity": "sha512-imtQ3WMJXbMY4fxb/Ndp6HBTNVtWCUI0WdobyheGf5+ad6xX8VIDO8u2xE4qc/fr08CKG/7dDseFtn6M6g/r3w==",
      "cpu": [
        "arm64"
      ],
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": "^18.17.0 || ^20.3.0 || >=21.0.0"
      },
      "funding": {
        "url": "https://opencollective.com/libvips"
      },
      "optionalDependencies": {
        "@img/sharp-libvips-darwin-arm64": "1.2.4"
      }
    },
    "node_modules/@img/sharp-darwin-x64": {
      "version": "0.34.5",
      "resolved": "https://registry.npmjs.org/@img/sharp-darwin-x64/-/sharp-darwin-x64-0.34.5.tgz",
      "integrity": "sha512-YNEFAF/4KQ/PeW0N+r+aVVsoIY0/qxxikF2SWdp+NRkmMB7y9LBZAVqQ4yhGCm/H3H270OSykqmQMKLBhBJDEw==",
      "cpu": [
        "x64"
      ],
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": "^18.17.0 || ^20.3.0 || >=21.0.0"
      },
      "funding": {
        "url": "https://opencollective.com/libvips"
      },
      "optionalDependencies": {
        "@img/sharp-libvips-darwin-x64": "1.2.4"
      }
    },
    "node_modules/@img/sharp-libvips-darwin-arm64": {
      "version": "1.2.4",
      "resolved": "https://registry.npmjs.org/@img/sharp-libvips-darwin-arm64/-/sharp-libvips-darwin-arm64-1.2.4.tgz",
      "integrity": "sha512-zqjjo7RatFfFoP0MkQ51jfuFZBnVE2pRiaydKJ1G/rHZvnsrHAOcQALIi9sA5co5xenQdTugCvtb1cuf78Vf4g==",
      "cpu": [
        "arm64"
      ],
      "optional": true,
      "os": [
        "darwin"
      ],
      "funding": {
        "url": "https://opencollective.com/libvips"
      }
    },
    "node_modules/@img/sharp-libvips-darwin-x64": {
      "version": "1.2.4",
      "resolved": "https://registry.npmjs.org/@img/sharp-libvips-darwin-x64/-/sharp-libvips-darwin-x64-1.2.4.tgz",
      "integrity": "sha512-1IOd5xfVhlGwX+zXv2N93k0yMONvUlANylbJw1eTah8K/Jtpi15KC+WSiaX/nBmbm2HxRM1gZ0nSdjSsrZbGKg==",
      "cpu": [
        "x64"
      ],
      "optional": true,
      "os": [
        "darwin"
      ],
      "funding": {
        "url": "https://opencollective.com/libvips"
      }
    },
    "node_modules/@img/sharp-libvips-linux-arm": {
      "version": "1.2.4",
      "resolved": "https://registry.npmjs.org/@img/sharp-libvips-linux-arm/-/sharp-libvips-linux-arm-1.2.4.tgz",
      "integrity": "sha512-bFI7xcKFELdiNCVov8e44Ia4u2byA+l3XtsAj+Q8tfCwO6BQ8iDojYdvoPMqsKDkuoOo+X6HZA0s0q11ANMQ8A==",
      "cpu": [
        "arm"
      ],
      "optional": true,
      "os": [
        "linux"
      ],
      "funding": {
        "url": "https://opencollective.com/libvips"
      }
    },
    "node_modules/@img/sharp-libvips-linux-arm64": {
      "version": "1.2.4",
      "resolved": "https://registry.npmjs.org/@img/sharp-libvips-linux-arm64/-/sharp-libvips-linux-arm64-1.2.4.tgz",
      "integrity": "sha512-excjX8DfsIcJ10x1Kzr4RcWe1edC9PquDRRPx3YVCvQv+U5p7Yin2s32ftzikXojb1PIFc/9Mt28/y+iRklkrw==",
      "cpu": [
        "arm64"
      ],
      "optional": true,
      "os": [
        "linux"
      ],
      "funding": {
        "url": "https://opencollective.com/libvips"
      }
    },
    "node_modules/@img/sharp-libvips-linux-ppc64": {
      "version": "1.2.4",
      "resolved": "https://registry.npmjs.org/@img/sharp-libvips-linux-ppc64/-/sharp-libvips-linux-ppc64-1.2.4.tgz",
      "integrity": "sha512-FMuvGijLDYG6lW+b/UvyilUWu5Ayu+3r2d1S8notiGCIyYU/76eig1UfMmkZ7vwgOrzKzlQbFSuQfgm7GYUPpA==",
      "cpu": [
        "ppc64"
      ],
      "optional": true,
      "os": [
        "linux"
      ],
      "funding": {
        "url": "https://opencollective.com/libvips"
      }
    },
    "node_modules/@img/sharp-libvips-linux-riscv64": {
      "version": "1.2.4",
      "resolved": "https://registry.npmjs.org/@img/sharp-libvips-linux-riscv64/-/sharp-libvips-linux-riscv64-1.2.4.tgz",
      "integrity": "sha512-oVDbcR4zUC0ce82teubSm+x6ETixtKZBh/qbREIOcI3cULzDyb18Sr/Wcyx7NRQeQzOiHTNbZFF1UwPS2scyGA==",
      "cpu": [
        "riscv64"
      ],
      "optional": true,
      "os": [
        "linux"
      ],
      "funding": {
        "url": "https://opencollective.com/libvips"
      }
    },
    "node_modules/@img/sharp-libvips-linux-s390x": {
      "version": "1.2.4",
      "resolved": "https://registry.npmjs.org/@img/sharp-libvips-linux-s390x/-/sharp-libvips-linux-s390x-1.2.4.tgz",
      "integrity": "sha512-qmp9VrzgPgMoGZyPvrQHqk02uyjA0/QrTO26Tqk6l4ZV0MPWIW6LTkqOIov+J1yEu7MbFQaDpwdwJKhbJvuRxQ==",
      "cpu": [
        "s390x"
      ],
      "optional": true,
      "os": [
        "linux"
      ],
      "funding": {
        "url": "https://opencollective.com/libvips"
      }
    },
    "node_modules/@img/sharp-libvips-linux-x64": {
      "version": "1.2.4",
      "resolved": "https://registry.npmjs.org/@img/sharp-libvips-linux-x64/-/sharp-libvips-linux-x64-1.2.4.tgz",
      "integrity": "sha512-tJxiiLsmHc9Ax1bz3oaOYBURTXGIRDODBqhveVHonrHJ9/+k89qbLl0bcJns+e4t4rvaNBxaEZsFtSfAdquPrw==",
      "cpu": [
        "x64"
      ],
      "optional": true,
      "os": [
        "linux"
      ],
      "funding": {
        "url": "https://opencollective.com/libvips"
      }
    },
    "node_modules/@img/sharp-libvips-linuxmusl-arm64": {
      "version": "1.2.4",
      "resolved": "https://registry.npmjs.org/@img/sharp-libvips-linuxmusl-arm64/-/sharp-libvips-linuxmusl-arm64-1.2.4.tgz",
      "integrity": "sha512-FVQHuwx1IIuNow9QAbYUzJ+En8KcVm9Lk5+uGUQJHaZmMECZmOlix9HnH7n1TRkXMS0pGxIJokIVB9SuqZGGXw==",
      "cpu": [
        "arm64"
      ],
      "optional": true,
      "os": [
        "linux"
      ],
      "funding": {
        "url": "https://opencollective.com/libvips"
      }
    },
    "node_modules/@img/sharp-libvips-linuxmusl-x64": {
      "version": "1.2.4",
      "resolved": "https://registry.npmjs.org/@img/sharp-libvips-linuxmusl-x64/-/sharp-libvips-linuxmusl-x64-1.2.4.tgz",
      "integrity": "sha512-+LpyBk7L44ZIXwz/VYfglaX/okxezESc6UxDSoyo2Ks6Jxc4Y7sGjpgU9s4PMgqgjj1gZCylTieNamqA1MF7Dg==",
      "cpu": [
        "x64"
      ],
      "optional": true,
      "os": [
        "linux"
      ],
      "funding": {
        "url": "https://opencollective.com/libvips"
      }
    },
    "node_modules/@img/sharp-linux-arm": {
      "version": "0.34.5",
      "resolved": "https://registry.npmjs.org/@img/sharp-linux-arm/-/sharp-linux-arm-0.34.5.tgz",
      "integrity": "sha512-9dLqsvwtg1uuXBGZKsxem9595+ujv0sJ6Vi8wcTANSFpwV/GONat5eCkzQo/1O6zRIkh0m/8+5BjrRr7jDUSZw==",
      "cpu": [
        "arm"
      ],
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": "^18.17.0 || ^20.3.0 || >=21.0.0"
      },
      "funding": {
        "url": "https://opencollective.com/libvips"
      },
      "optionalDependencies": {
        "@img/sharp-libvips-linux-arm": "1.2.4"
      }
    },
    "node_modules/@img/sharp-linux-arm64": {
      "version": "0.34.5",
      "resolved": "https://registry.npmjs.org/@img/sharp-linux-arm64/-/sharp-linux-arm64-0.34.5.tgz",
      "integrity": "sha512-bKQzaJRY/bkPOXyKx5EVup7qkaojECG6NLYswgktOZjaXecSAeCWiZwwiFf3/Y+O1HrauiE3FVsGxFg8c24rZg==",
      "cpu": [
        "arm64"
      ],
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": "^18.17.0 || ^20.3.0 || >=21.0.0"
      },
      "funding": {
        "url": "https://opencollective.com/libvips"
      },
      "optionalDependencies": {
        "@img/sharp-libvips-linux-arm64": "1.2.4"
      }
    },
    "node_modules/@img/sharp-linux-ppc64": {
      "version": "0.34.5",
      "resolved": "https://registry.npmjs.org/@img/sharp-linux-ppc64/-/sharp-linux-ppc64-0.34.5.tgz",
      "integrity": "sha512-7zznwNaqW6YtsfrGGDA6BRkISKAAE1Jo0QdpNYXNMHu2+0dTrPflTLNkpc8l7MUP5M16ZJcUvysVWWrMefZquA==",
      "cpu": [
        "ppc64"
      ],
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": "^18.17.0 || ^20.3.0 || >=21.0.0"
      },
      "funding": {
        "url": "https://opencollective.com/libvips"
      },
      "optionalDependencies": {
        "@img/sharp-libvips-linux-ppc64": "1.2.4"
      }
    },
    "node_modules/@img/sharp-linux-riscv64": {
      "version": "0.34.5",
      "resolved": "https://registry.npmjs.org/@img/sharp-linux-riscv64/-/sharp-linux-riscv64-0.34.5.tgz",
      "integrity": "sha512-51gJuLPTKa7piYPaVs8GmByo7/U7/7TZOq+cnXJIHZKavIRHAP77e3N2HEl3dgiqdD/w0yUfiJnII77PuDDFdw==",
      "cpu": [
        "riscv64"
      ],
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": "^18.17.0 || ^20.3.0 || >=21.0.0"
      },
      "funding": {
        "url": "https://opencollective.com/libvips"
      },
      "optionalDependencies": {
        "@img/sharp-libvips-linux-riscv64": "1.2.4"
      }
    },
    "node_modules/@img/sharp-linux-s390x": {
      "version": "0.34.5",
      "resolved": "https://registry.npmjs.org/@img/sharp-linux-s390x/-/sharp-linux-s390x-0.34.5.tgz",
      "integrity": "sha512-nQtCk0PdKfho3eC5MrbQoigJ2gd1CgddUMkabUj+rBevs8tZ2cULOx46E7oyX+04WGfABgIwmMC0VqieTiR4jg==",
      "cpu": [
        "s390x"
      ],
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": "^18.17.0 || ^20.3.0 || >=21.0.0"
      },
      "funding": {
        "url": "https://opencollective.com/libvips"
      },
      "optionalDependencies": {
        "@img/sharp-libvips-linux-s390x": "1.2.4"
      }
    },
    "node_modules/@img/sharp-linux-x64": {
      "version": "0.34.5",
      "resolved": "https://registry.npmjs.org/@img/sharp-linux-x64/-/sharp-linux-x64-0.34.5.tgz",
      "integrity": "sha512-MEzd8HPKxVxVenwAa+JRPwEC7QFjoPWuS5NZnBt6B3pu7EG2Ge0id1oLHZpPJdn3OQK+BQDiw9zStiHBTJQQQQ==",
      "cpu": [
        "x64"
      ],
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": "^18.17.0 || ^20.3.0 || >=21.0.0"
      },
      "funding": {
        "url": "https://opencollective.com/libvips"
      },
      "optionalDependencies": {
        "@img/sharp-libvips-linux-x64": "1.2.4"
      }
    },
    "node_modules/@img/sharp-linuxmusl-arm64": {
      "version": "0.34.5",
      "resolved": "https://registry.npmjs.org/@img/sharp-linuxmusl-arm64/-/sharp-linuxmusl-arm64-0.34.5.tgz",
      "integrity": "sha512-fprJR6GtRsMt6Kyfq44IsChVZeGN97gTD331weR1ex1c1rypDEABN6Tm2xa1wE6lYb5DdEnk03NZPqA7Id21yg==",
      "cpu": [
        "arm64"
      ],
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": "^18.17.0 || ^20.3.0 || >=21.0.0"
      },
      "funding": {
        "url": "https://opencollective.com/libvips"
      },
      "optionalDependencies": {
        "@img/sharp-libvips-linuxmusl-arm64": "1.2.4"
      }
    },
    "node_modules/@img/sharp-linuxmusl-x64": {
      "version": "0.34.5",
      "resolved": "https://registry.npmjs.org/@img/sharp-linuxmusl-x64/-/sharp-linuxmusl-x64-0.34.5.tgz",
      "integrity": "sha512-Jg8wNT1MUzIvhBFxViqrEhWDGzqymo3sV7z7ZsaWbZNDLXRJZoRGrjulp60YYtV4wfY8VIKcWidjojlLcWrd8Q==",
      "cpu": [
        "x64"
      ],
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": "^18.17.0 || ^20.3.0 || >=21.0.0"
      },
      "funding": {
        "url": "https://opencollective.com/libvips"
      },
      "optionalDependencies": {
        "@img/sharp-libvips-linuxmusl-x64": "1.2.4"
      }
    },
    "node_modules/@img/sharp-wasm32": {
      "version": "0.34.5",
      "resolved": "https://registry.npmjs.org/@img/sharp-wasm32/-/sharp-wasm32-0.34.5.tgz",
      "integrity": "sha512-OdWTEiVkY2PHwqkbBI8frFxQQFekHaSSkUIJkwzclWZe64O1X4UlUjqqqLaPbUpMOQk6FBu/HtlGXNblIs0huw==",
      "cpu": [
        "wasm32"
      ],
      "optional": true,
      "dependencies": {
        "@emnapi/runtime": "^1.7.0"
      },
      "engines": {
        "node": "^18.17.0 || ^20.3.0 || >=21.0.0"
      },
      "funding": {
        "url": "https://opencollective.com/libvips"
      }
    },
    "node_modules/@img/sharp-win32-arm64": {
      "version": "0.34.5",
      "resolved": "https://registry.npmjs.org/@img/sharp-win32-arm64/-/sharp-win32-arm64-0.34.5.tgz",
      "integrity": "sha512-WQ3AgWCWYSb2yt+IG8mnC6Jdk9Whs7O0gxphblsLvdhSpSTtmu69ZG1Gkb6NuvxsNACwiPV6cNSZNzt0KPsw7g==",
      "cpu": [
        "arm64"
      ],
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": "^18.17.0 || ^20.3.0 || >=21.0.0"
      },
      "funding": {
        "url": "https://opencollective.com/libvips"
      }
    },
    "node_modules/@img/sharp-win32-ia32": {
      "version": "0.34.5",
      "resolved": "https://registry.npmjs.org/@img/sharp-win32-ia32/-/sharp-win32-ia32-0.34.5.tgz",
      "integrity": "sha512-FV9m/7NmeCmSHDD5j4+4pNI8Cp3aW+JvLoXcTUo0IqyjSfAZJ8dIUmijx1qaJsIiU+Hosw6xM5KijAWRJCSgNg==",
      "cpu": [
        "ia32"
      ],
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": "^18.17.0 || ^20.3.0 || >=21.0.0"
      },
      "funding": {
        "url": "https://opencollective.com/libvips"
      }
    },
    "node_modules/@img/sharp-win32-x64": {
      "version": "0.34.5",
      "resolved": "https://registry.npmjs.org/@img/sharp-win32-x64/-/sharp-win32-x64-0.34.5.tgz",
      "integrity": "sha512-+29YMsqY2/9eFEiW93eqWnuLcWcufowXewwSNIT6UwZdUUCrM3oFjMWH/Z6/TMmb4hlFenmfAVbpWeup2jryCw==",
      "cpu": [
        "x64"
      ],
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": "^18.17.0 || ^20.3.0 || >=21.0.0"
      },
      "funding": {
        "url": "https://opencollective.com/libvips"
      }
    },
    "node_modules/@jridgewell/gen-mapping": {
      "version": "0.3.13",
      "resolved": "https://registry.npmjs.org/@jridgewell/gen-mapping/-/gen-mapping-0.3.13.tgz",
      "integrity": "sha512-2kkt/7niJ6MgEPxF0bYdQ6etZaA+fQvDcLKckhy1yIQOzaoKjBBjSj63/aLVjYE3qhRt5dvM+uUyfCg6UKCBbA==",
      "dev": true,
      "dependencies": {
        "@jridgewell/sourcemap-codec": "^1.5.0",
        "@jridgewell/trace-mapping": "^0.3.24"
      }
    },
    "node_modules/@jridgewell/remapping": {
      "version": "2.3.5",
      "resolved": "https://registry.npmjs.org/@jridgewell/remapping/-/remapping-2.3.5.tgz",
      "integrity": "sha512-LI9u/+laYG4Ds1TDKSJW2YPrIlcVYOwi2fUC6xB43lueCjgxV4lffOCZCtYFiH6TNOX+tQKXx97T4IKHbhyHEQ==",
      "dev": true,
      "dependencies": {
        "@jridgewell/gen-mapping": "^0.3.5",
        "@jridgewell/trace-mapping": "^0.3.24"
      }
    },
    "node_modules/@jridgewell/resolve-uri": {
      "version": "3.1.2",
      "resolved": "https://registry.npmjs.org/@jridgewell/resolve-uri/-/resolve-uri-3.1.2.tgz",
      "integrity": "sha512-bRISgCIjP20/tbWSPWMEi54QVPRZExkuD9lJL+UIxUKtwVJA8wW1Trb1jMs1RFXo1CBTNZ/5hpC9QvmKWdopKw==",
      "dev": true,
      "engines": {
        "node": ">=6.0.0"
      }
    },
    "node_modules/@jridgewell/sourcemap-codec": {
      "version": "1.5.5",
      "resolved": "https://registry.npmjs.org/@jridgewell/sourcemap-codec/-/sourcemap-codec-1.5.5.tgz",
      "integrity": "sha512-cYQ9310grqxueWbl+WuIUIaiUaDcj7WOq5fVhEljNVgRfOUhY9fy2zTvfoqWsnebh8Sl70VScFbICvJnLKB0Og==",
      "dev": true
    },
    "node_modules/@jridgewell/trace-mapping": {
      "version": "0.3.31",
      "resolved": "https://registry.npmjs.org/@jridgewell/trace-mapping/-/trace-mapping-0.3.31.tgz",
      "integrity": "sha512-zzNR+SdQSDJzc8joaeP8QQoCQr8NuYx2dIIytl1QeBEZHJ9uW6hebsrYgbz8hJwUQao3TWCMtmfV8Nu1twOLAw==",
      "dev": true,
      "dependencies": {
        "@jridgewell/resolve-uri": "^3.1.0",
        "@jridgewell/sourcemap-codec": "^1.4.14"
      }
    },
    "node_modules/@napi-rs/wasm-runtime": {
      "version": "0.2.12",
      "resolved": "https://registry.npmjs.org/@napi-rs/wasm-runtime/-/wasm-runtime-0.2.12.tgz",
      "integrity": "sha512-ZVWUcfwY4E/yPitQJl481FjFo3K22D6qF0DuFH6Y/nbnE11GY5uguDxZMGXPQ8WQ0128MXQD7TnfHyK4oWoIJQ==",
      "dev": true,
      "optional": true,
      "dependencies": {
        "@emnapi/core": "^1.4.3",
        "@emnapi/runtime": "^1.4.3",
        "@tybys/wasm-util": "^0.10.0"
      }
    },
    "node_modules/@next/env": {
      "version": "16.0.10",
      "resolved": "https://registry.npmjs.org/@next/env/-/env-16.0.10.tgz",
      "integrity": "sha512-8tuaQkyDVgeONQ1MeT9Mkk8pQmZapMKFh5B+OrFUlG3rVmYTXcXlBetBgTurKXGaIZvkoqRT9JL5K3phXcgang=="
    },
    "node_modules/@next/eslint-plugin-next": {
      "version": "16.0.10",
      "resolved": "https://registry.npmjs.org/@next/eslint-plugin-next/-/eslint-plugin-next-16.0.10.tgz",
      "integrity": "sha512-b2NlWN70bbPLmfyoLvvidPKWENBYYIe017ZGUpElvQjDytCWgxPJx7L9juxHt0xHvNVA08ZHJdOyhGzon/KJuw==",
      "dev": true,
      "dependencies": {
        "fast-glob": "3.3.1"
      }
    },
    "node_modules/@next/swc-darwin-arm64": {
      "version": "16.0.10",
      "resolved": "https://registry.npmjs.org/@next/swc-darwin-arm64/-/swc-darwin-arm64-16.0.10.tgz",
      "integrity": "sha512-4XgdKtdVsaflErz+B5XeG0T5PeXKDdruDf3CRpnhN+8UebNa5N2H58+3GDgpn/9GBurrQ1uWW768FfscwYkJRg==",
      "cpu": [
        "arm64"
      ],
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": ">= 10"
      }
    },
    "node_modules/@next/swc-darwin-x64": {
      "version": "16.0.10",
      "resolved": "https://registry.npmjs.org/@next/swc-darwin-x64/-/swc-darwin-x64-16.0.10.tgz",
      "integrity": "sha512-spbEObMvRKkQ3CkYVOME+ocPDFo5UqHb8EMTS78/0mQ+O1nqE8toHJVioZo4TvebATxgA8XMTHHrScPrn68OGw==",
      "cpu": [
        "x64"
      ],
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": ">= 10"
      }
    },
    "node_modules/@next/swc-linux-arm64-gnu": {
      "version": "16.0.10",
      "resolved": "https://registry.npmjs.org/@next/swc-linux-arm64-gnu/-/swc-linux-arm64-gnu-16.0.10.tgz",
      "integrity": "sha512-uQtWE3X0iGB8apTIskOMi2w/MKONrPOUCi5yLO+v3O8Mb5c7K4Q5KD1jvTpTF5gJKa3VH/ijKjKUq9O9UhwOYw==",
      "cpu": [
        "arm64"
      ],
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 10"
      }
    },
    "node_modules/@next/swc-linux-arm64-musl": {
      "version": "16.0.10",
      "resolved": "https://registry.npmjs.org/@next/swc-linux-arm64-musl/-/swc-linux-arm64-musl-16.0.10.tgz",
      "integrity": "sha512-llA+hiDTrYvyWI21Z0L1GiXwjQaanPVQQwru5peOgtooeJ8qx3tlqRV2P7uH2pKQaUfHxI/WVarvI5oYgGxaTw==",
      "cpu": [
        "arm64"
      ],
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 10"
      }
    },
    "node_modules/@next/swc-linux-x64-gnu": {
      "version": "16.0.10",
      "resolved": "https://registry.npmjs.org/@next/swc-linux-x64-gnu/-/swc-linux-x64-gnu-16.0.10.tgz",
      "integrity": "sha512-AK2q5H0+a9nsXbeZ3FZdMtbtu9jxW4R/NgzZ6+lrTm3d6Zb7jYrWcgjcpM1k8uuqlSy4xIyPR2YiuUr+wXsavA==",
      "cpu": [
        "x64"
      ],
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 10"
      }
    },
    "node_modules/@next/swc-linux-x64-musl": {
      "version": "16.0.10",
      "resolved": "https://registry.npmjs.org/@next/swc-linux-x64-musl/-/swc-linux-x64-musl-16.0.10.tgz",
      "integrity": "sha512-1TDG9PDKivNw5550S111gsO4RGennLVl9cipPhtkXIFVwo31YZ73nEbLjNC8qG3SgTz/QZyYyaFYMeY4BKZR/g==",
      "cpu": [
        "x64"
      ],
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 10"
      }
    },
    "node_modules/@next/swc-win32-arm64-msvc": {
      "version": "16.0.10",
      "resolved": "https://registry.npmjs.org/@next/swc-win32-arm64-msvc/-/swc-win32-arm64-msvc-16.0.10.tgz",
      "integrity": "sha512-aEZIS4Hh32xdJQbHz121pyuVZniSNoqDVx1yIr2hy+ZwJGipeqnMZBJHyMxv2tiuAXGx6/xpTcQJ6btIiBjgmg==",
      "cpu": [
        "arm64"
      ],
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": ">= 10"
      }
    },
    "node_modules/@next/swc-win32-x64-msvc": {
      "version": "16.0.10",
      "resolved": "https://registry.npmjs.org/@next/swc-win32-x64-msvc/-/swc-win32-x64-msvc-16.0.10.tgz",
      "integrity": "sha512-E+njfCoFLb01RAFEnGZn6ERoOqhK1Gl3Lfz1Kjnj0Ulfu7oJbuMyvBKNj/bw8XZnenHDASlygTjZICQW+rYW1Q==",
      "cpu": [
        "x64"
      ],
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": ">= 10"
      }
    },
    "node_modules/@nodelib/fs.scandir": {
      "version": "2.1.5",
      "resolved": "https://registry.npmjs.org/@nodelib/fs.scandir/-/fs.scandir-2.1.5.tgz",
      "integrity": "sha512-vq24Bq3ym5HEQm2NKCr3yXDwjc7vTsEThRDnkp2DK9p1uqLR+DHurm/NOTo0KG7HYHU7eppKZj3MyqYuMBf62g==",
      "dev": true,
      "dependencies": {
        "@nodelib/fs.stat": "2.0.5",
        "run-parallel": "^1.1.9"
      },
      "engines": {
        "node": ">= 8"
      }
    },
    "node_modules/@nodelib/fs.stat": {
      "version": "2.0.5",
      "resolved": "https://registry.npmjs.org/@nodelib/fs.stat/-/fs.stat-2.0.5.tgz",
      "integrity": "sha512-RkhPPp2zrqDAQA/2jNhnztcPAlv64XdhIp7a7454A5ovI7Bukxgt7MX7udwAu3zg1DcpPU0rz3VV1SeaqvY4+A==",
      "dev": true,
      "engines": {
        "node": ">= 8"
      }
    },
    "node_modules/@nodelib/fs.walk": {
      "version": "1.2.8",
      "resolved": "https://registry.npmjs.org/@nodelib/fs.walk/-/fs.walk-1.2.8.tgz",
      "integrity": "sha512-oGB+UxlgWcgQkgwo8GcEGwemoTFt3FIO9ababBmaGwXIoBKZ+GTy0pP185beGg7Llih/NSHSV2XAs1lnznocSg==",
      "dev": true,
      "dependencies": {
        "@nodelib/fs.scandir": "2.1.5",
        "fastq": "^1.6.0"
      },
      "engines": {
        "node": ">= 8"
      }
    },
    "node_modules/@nolyfill/is-core-module": {
      "version": "1.0.39",
      "resolved": "https://registry.npmjs.org/@nolyfill/is-core-module/-/is-core-module-1.0.39.tgz",
      "integrity": "sha512-nn5ozdjYQpUCZlWGuxcJY/KpxkWQs4DcbMCmKojjyrYDEAGy4Ce19NN4v5MduafTwJlbKc99UA8YhSVqq9yPZA==",
      "dev": true,
      "engines": {
        "node": ">=12.4.0"
      }
    },
    "node_modules/@reduxjs/toolkit": {
      "version": "2.11.2",
      "resolved": "https://registry.npmjs.org/@reduxjs/toolkit/-/toolkit-2.11.2.tgz",
      "integrity": "sha512-Kd6kAHTA6/nUpp8mySPqj3en3dm0tdMIgbttnQ1xFMVpufoj+ADi8pXLBsd4xzTRHQa7t/Jv8W5UnCuW4kuWMQ==",
      "dependencies": {
        "@standard-schema/spec": "^1.0.0",
        "@standard-schema/utils": "^0.3.0",
        "immer": "^11.0.0",
        "redux": "^5.0.1",
        "redux-thunk": "^3.1.0",
        "reselect": "^5.1.0"
      },
      "peerDependencies": {
        "react": "^16.9.0 || ^17.0.0 || ^18 || ^19",
        "react-redux": "^7.2.1 || ^8.1.3 || ^9.0.0"
      },
      "peerDependenciesMeta": {
        "react": {
          "optional": true
        },
        "react-redux": {
          "optional": true
        }
      }
    },
    "node_modules/@reduxjs/toolkit/node_modules/immer": {
      "version": "11.0.1",
      "resolved": "https://registry.npmjs.org/immer/-/immer-11.0.1.tgz",
      "integrity": "sha512-naDCyggtcBWANtIrjQEajhhBEuL9b0Zg4zmlWK2CzS6xCWSE39/vvf4LqnMjUAWHBhot4m9MHCM/Z+mfWhUkiA==",
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/immer"
      }
    },
    "node_modules/@rtsao/scc": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/@rtsao/scc/-/scc-1.1.0.tgz",
      "integrity": "sha512-zt6OdqaDoOnJ1ZYsCYGt9YmWzDXl4vQdKTyJev62gFhRGKdx7mcT54V9KIjg+d2wi9EXsPvAPKe7i7WjfVWB8g==",
      "dev": true
    },
    "node_modules/@standard-schema/spec": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/@standard-schema/spec/-/spec-1.0.0.tgz",
      "integrity": "sha512-m2bOd0f2RT9k8QJx1JN85cZYyH1RqFBdlwtkSlf4tBDYLCiiZnv1fIIwacK6cqwXavOydf0NPToMQgpKq+dVlA=="
    },
    "node_modules/@standard-schema/utils": {
      "version": "0.3.0",
      "resolved": "https://registry.npmjs.org/@standard-schema/utils/-/utils-0.3.0.tgz",
      "integrity": "sha512-e7Mew686owMaPJVNNLs55PUvgz371nKgwsc4vxE49zsODpJEnxgxRo2y/OKrqueavXgZNMDVj3DdHFlaSAeU8g=="
    },
    "node_modules/@swc/helpers": {
      "version": "0.5.15",
      "resolved": "https://registry.npmjs.org/@swc/helpers/-/helpers-0.5.15.tgz",
      "integrity": "sha512-JQ5TuMi45Owi4/BIMAJBoSQoOJu12oOk/gADqlcUL9JEdHB8vyjUSsxqeNXnmXHjYKMi2WcYtezGEEhqUI/E2g==",
      "dependencies": {
        "tslib": "^2.8.0"
      }
    },
    "node_modules/@tailwindcss/node": {
      "version": "4.1.18",
      "resolved": "https://registry.npmjs.org/@tailwindcss/node/-/node-4.1.18.tgz",
      "integrity": "sha512-DoR7U1P7iYhw16qJ49fgXUlry1t4CpXeErJHnQ44JgTSKMaZUdf17cfn5mHchfJ4KRBZRFA/Coo+MUF5+gOaCQ==",
      "dev": true,
      "dependencies": {
        "@jridgewell/remapping": "^2.3.4",
        "enhanced-resolve": "^5.18.3",
        "jiti": "^2.6.1",
        "lightningcss": "1.30.2",
        "magic-string": "^0.30.21",
        "source-map-js": "^1.2.1",
        "tailwindcss": "4.1.18"
      }
    },
    "node_modules/@tailwindcss/oxide": {
      "version": "4.1.18",
      "resolved": "https://registry.npmjs.org/@tailwindcss/oxide/-/oxide-4.1.18.tgz",
      "integrity": "sha512-EgCR5tTS5bUSKQgzeMClT6iCY3ToqE1y+ZB0AKldj809QXk1Y+3jB0upOYZrn9aGIzPtUsP7sX4QQ4XtjBB95A==",
      "dev": true,
      "engines": {
        "node": ">= 10"
      },
      "optionalDependencies": {
        "@tailwindcss/oxide-android-arm64": "4.1.18",
        "@tailwindcss/oxide-darwin-arm64": "4.1.18",
        "@tailwindcss/oxide-darwin-x64": "4.1.18",
        "@tailwindcss/oxide-freebsd-x64": "4.1.18",
        "@tailwindcss/oxide-linux-arm-gnueabihf": "4.1.18",
        "@tailwindcss/oxide-linux-arm64-gnu": "4.1.18",
        "@tailwindcss/oxide-linux-arm64-musl": "4.1.18",
        "@tailwindcss/oxide-linux-x64-gnu": "4.1.18",
        "@tailwindcss/oxide-linux-x64-musl": "4.1.18",
        "@tailwindcss/oxide-wasm32-wasi": "4.1.18",
        "@tailwindcss/oxide-win32-arm64-msvc": "4.1.18",
        "@tailwindcss/oxide-win32-x64-msvc": "4.1.18"
      }
    },
    "node_modules/@tailwindcss/oxide-android-arm64": {
      "version": "4.1.18",
      "resolved": "https://registry.npmjs.org/@tailwindcss/oxide-android-arm64/-/oxide-android-arm64-4.1.18.tgz",
      "integrity": "sha512-dJHz7+Ugr9U/diKJA0W6N/6/cjI+ZTAoxPf9Iz9BFRF2GzEX8IvXxFIi/dZBloVJX/MZGvRuFA9rqwdiIEZQ0Q==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "optional": true,
      "os": [
        "android"
      ],
      "engines": {
        "node": ">= 10"
      }
    },
    "node_modules/@tailwindcss/oxide-darwin-arm64": {
      "version": "4.1.18",
      "resolved": "https://registry.npmjs.org/@tailwindcss/oxide-darwin-arm64/-/oxide-darwin-arm64-4.1.18.tgz",
      "integrity": "sha512-Gc2q4Qhs660bhjyBSKgq6BYvwDz4G+BuyJ5H1xfhmDR3D8HnHCmT/BSkvSL0vQLy/nkMLY20PQ2OoYMO15Jd0A==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": ">= 10"
      }
    },
    "node_modules/@tailwindcss/oxide-darwin-x64": {
      "version": "4.1.18",
      "resolved": "https://registry.npmjs.org/@tailwindcss/oxide-darwin-x64/-/oxide-darwin-x64-4.1.18.tgz",
      "integrity": "sha512-FL5oxr2xQsFrc3X9o1fjHKBYBMD1QZNyc1Xzw/h5Qu4XnEBi3dZn96HcHm41c/euGV+GRiXFfh2hUCyKi/e+yw==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": ">= 10"
      }
    },
    "node_modules/@tailwindcss/oxide-freebsd-x64": {
      "version": "4.1.18",
      "resolved": "https://registry.npmjs.org/@tailwindcss/oxide-freebsd-x64/-/oxide-freebsd-x64-4.1.18.tgz",
      "integrity": "sha512-Fj+RHgu5bDodmV1dM9yAxlfJwkkWvLiRjbhuO2LEtwtlYlBgiAT4x/j5wQr1tC3SANAgD+0YcmWVrj8R9trVMA==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "optional": true,
      "os": [
        "freebsd"
      ],
      "engines": {
        "node": ">= 10"
      }
    },
    "node_modules/@tailwindcss/oxide-linux-arm-gnueabihf": {
      "version": "4.1.18",
      "resolved": "https://registry.npmjs.org/@tailwindcss/oxide-linux-arm-gnueabihf/-/oxide-linux-arm-gnueabihf-4.1.18.tgz",
      "integrity": "sha512-Fp+Wzk/Ws4dZn+LV2Nqx3IilnhH51YZoRaYHQsVq3RQvEl+71VGKFpkfHrLM/Li+kt5c0DJe/bHXK1eHgDmdiA==",
      "cpu": [
        "arm"
      ],
      "dev": true,
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 10"
      }
    },
    "node_modules/@tailwindcss/oxide-linux-arm64-gnu": {
      "version": "4.1.18",
      "resolved": "https://registry.npmjs.org/@tailwindcss/oxide-linux-arm64-gnu/-/oxide-linux-arm64-gnu-4.1.18.tgz",
      "integrity": "sha512-S0n3jboLysNbh55Vrt7pk9wgpyTTPD0fdQeh7wQfMqLPM/Hrxi+dVsLsPrycQjGKEQk85Kgbx+6+QnYNiHalnw==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 10"
      }
    },
    "node_modules/@tailwindcss/oxide-linux-arm64-musl": {
      "version": "4.1.18",
      "resolved": "https://registry.npmjs.org/@tailwindcss/oxide-linux-arm64-musl/-/oxide-linux-arm64-musl-4.1.18.tgz",
      "integrity": "sha512-1px92582HkPQlaaCkdRcio71p8bc8i/ap5807tPRDK/uw953cauQBT8c5tVGkOwrHMfc2Yh6UuxaH4vtTjGvHg==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 10"
      }
    },
    "node_modules/@tailwindcss/oxide-linux-x64-gnu": {
      "version": "4.1.18",
      "resolved": "https://registry.npmjs.org/@tailwindcss/oxide-linux-x64-gnu/-/oxide-linux-x64-gnu-4.1.18.tgz",
      "integrity": "sha512-v3gyT0ivkfBLoZGF9LyHmts0Isc8jHZyVcbzio6Wpzifg/+5ZJpDiRiUhDLkcr7f/r38SWNe7ucxmGW3j3Kb/g==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 10"
      }
    },
    "node_modules/@tailwindcss/oxide-linux-x64-musl": {
      "version": "4.1.18",
      "resolved": "https://registry.npmjs.org/@tailwindcss/oxide-linux-x64-musl/-/oxide-linux-x64-musl-4.1.18.tgz",
      "integrity": "sha512-bhJ2y2OQNlcRwwgOAGMY0xTFStt4/wyU6pvI6LSuZpRgKQwxTec0/3Scu91O8ir7qCR3AuepQKLU/kX99FouqQ==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 10"
      }
    },
    "node_modules/@tailwindcss/oxide-wasm32-wasi": {
      "version": "4.1.18",
      "resolved": "https://registry.npmjs.org/@tailwindcss/oxide-wasm32-wasi/-/oxide-wasm32-wasi-4.1.18.tgz",
      "integrity": "sha512-LffYTvPjODiP6PT16oNeUQJzNVyJl1cjIebq/rWWBF+3eDst5JGEFSc5cWxyRCJ0Mxl+KyIkqRxk1XPEs9x8TA==",
      "bundleDependencies": [
        "@napi-rs/wasm-runtime",
        "@emnapi/core",
        "@emnapi/runtime",
        "@tybys/wasm-util",
        "@emnapi/wasi-threads",
        "tslib"
      ],
      "cpu": [
        "wasm32"
      ],
      "dev": true,
      "optional": true,
      "dependencies": {
        "@emnapi/core": "^1.7.1",
        "@emnapi/runtime": "^1.7.1",
        "@emnapi/wasi-threads": "^1.1.0",
        "@napi-rs/wasm-runtime": "^1.1.0",
        "@tybys/wasm-util": "^0.10.1",
        "tslib": "^2.4.0"
      },
      "engines": {
        "node": ">=14.0.0"
      }
    },
    "node_modules/@tailwindcss/oxide-win32-arm64-msvc": {
      "version": "4.1.18",
      "resolved": "https://registry.npmjs.org/@tailwindcss/oxide-win32-arm64-msvc/-/oxide-win32-arm64-msvc-4.1.18.tgz",
      "integrity": "sha512-HjSA7mr9HmC8fu6bdsZvZ+dhjyGCLdotjVOgLA2vEqxEBZaQo9YTX4kwgEvPCpRh8o4uWc4J/wEoFzhEmjvPbA==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": ">= 10"
      }
    },
    "node_modules/@tailwindcss/oxide-win32-x64-msvc": {
      "version": "4.1.18",
      "resolved": "https://registry.npmjs.org/@tailwindcss/oxide-win32-x64-msvc/-/oxide-win32-x64-msvc-4.1.18.tgz",
      "integrity": "sha512-bJWbyYpUlqamC8dpR7pfjA0I7vdF6t5VpUGMWRkXVE3AXgIZjYUYAK7II1GNaxR8J1SSrSrppRar8G++JekE3Q==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": ">= 10"
      }
    },
    "node_modules/@tailwindcss/postcss": {
      "version": "4.1.18",
      "resolved": "https://registry.npmjs.org/@tailwindcss/postcss/-/postcss-4.1.18.tgz",
      "integrity": "sha512-Ce0GFnzAOuPyfV5SxjXGn0CubwGcuDB0zcdaPuCSzAa/2vII24JTkH+I6jcbXLb1ctjZMZZI6OjDaLPJQL1S0g==",
      "dev": true,
      "dependencies": {
        "@alloc/quick-lru": "^5.2.0",
        "@tailwindcss/node": "4.1.18",
        "@tailwindcss/oxide": "4.1.18",
        "postcss": "^8.4.41",
        "tailwindcss": "4.1.18"
      }
    },
    "node_modules/@tybys/wasm-util": {
      "version": "0.10.1",
      "resolved": "https://registry.npmjs.org/@tybys/wasm-util/-/wasm-util-0.10.1.tgz",
      "integrity": "sha512-9tTaPJLSiejZKx+Bmog4uSubteqTvFrVrURwkmHixBo0G4seD0zUxp98E1DzUBJxLQ3NPwXrGKDiVjwx/DpPsg==",
      "dev": true,
      "optional": true,
      "dependencies": {
        "tslib": "^2.4.0"
      }
    },
    "node_modules/@types/d3-array": {
      "version": "3.2.2",
      "resolved": "https://registry.npmjs.org/@types/d3-array/-/d3-array-3.2.2.tgz",
      "integrity": "sha512-hOLWVbm7uRza0BYXpIIW5pxfrKe0W+D5lrFiAEYR+pb6w3N2SwSMaJbXdUfSEv+dT4MfHBLtn5js0LAWaO6otw=="
    },
    "node_modules/@types/d3-color": {
      "version": "3.1.3",
      "resolved": "https://registry.npmjs.org/@types/d3-color/-/d3-color-3.1.3.tgz",
      "integrity": "sha512-iO90scth9WAbmgv7ogoq57O9YpKmFBbmoEoCHDB2xMBY0+/KVrqAaCDyCE16dUspeOvIxFFRI+0sEtqDqy2b4A=="
    },
    "node_modules/@types/d3-ease": {
      "version": "3.0.2",
      "resolved": "https://registry.npmjs.org/@types/d3-ease/-/d3-ease-3.0.2.tgz",
      "integrity": "sha512-NcV1JjO5oDzoK26oMzbILE6HW7uVXOHLQvHshBUW4UMdZGfiY6v5BeQwh9a9tCzv+CeefZQHJt5SRgK154RtiA=="
    },
    "node_modules/@types/d3-interpolate": {
      "version": "3.0.4",
      "resolved": "https://registry.npmjs.org/@types/d3-interpolate/-/d3-interpolate-3.0.4.tgz",
      "integrity": "sha512-mgLPETlrpVV1YRJIglr4Ez47g7Yxjl1lj7YKsiMCb27VJH9W8NVM6Bb9d8kkpG/uAQS5AmbA48q2IAolKKo1MA==",
      "dependencies": {
        "@types/d3-color": "*"
      }
    },
    "node_modules/@types/d3-path": {
      "version": "3.1.1",
      "resolved": "https://registry.npmjs.org/@types/d3-path/-/d3-path-3.1.1.tgz",
      "integrity": "sha512-VMZBYyQvbGmWyWVea0EHs/BwLgxc+MKi1zLDCONksozI4YJMcTt8ZEuIR4Sb1MMTE8MMW49v0IwI5+b7RmfWlg=="
    },
    "node_modules/@types/d3-scale": {
      "version": "4.0.9",
      "resolved": "https://registry.npmjs.org/@types/d3-scale/-/d3-scale-4.0.9.tgz",
      "integrity": "sha512-dLmtwB8zkAeO/juAMfnV+sItKjlsw2lKdZVVy6LRr0cBmegxSABiLEpGVmSJJ8O08i4+sGR6qQtb6WtuwJdvVw==",
      "dependencies": {
        "@types/d3-time": "*"
      }
    },
    "node_modules/@types/d3-shape": {
      "version": "3.1.7",
      "resolved": "https://registry.npmjs.org/@types/d3-shape/-/d3-shape-3.1.7.tgz",
      "integrity": "sha512-VLvUQ33C+3J+8p+Daf+nYSOsjB4GXp19/S/aGo60m9h1v6XaxjiT82lKVWJCfzhtuZ3yD7i/TPeC/fuKLLOSmg==",
      "dependencies": {
        "@types/d3-path": "*"
      }
    },
    "node_modules/@types/d3-time": {
      "version": "3.0.4",
      "resolved": "https://registry.npmjs.org/@types/d3-time/-/d3-time-3.0.4.tgz",
      "integrity": "sha512-yuzZug1nkAAaBlBBikKZTgzCeA+k1uy4ZFwWANOfKw5z5LRhV0gNA7gNkKm7HoK+HRN0wX3EkxGk0fpbWhmB7g=="
    },
    "node_modules/@types/d3-timer": {
      "version": "3.0.2",
      "resolved": "https://registry.npmjs.org/@types/d3-timer/-/d3-timer-3.0.2.tgz",
      "integrity": "sha512-Ps3T8E8dZDam6fUyNiMkekK3XUsaUEik+idO9/YjPtfj2qruF8tFBXS7XhtE4iIXBLxhmLjP3SXpLhVf21I9Lw=="
    },
    "node_modules/@types/estree": {
      "version": "1.0.8",
      "resolved": "https://registry.npmjs.org/@types/estree/-/estree-1.0.8.tgz",
      "integrity": "sha512-dWHzHa2WqEXI/O1E9OjrocMTKJl2mSrEolh1Iomrv6U+JuNwaHXsXx9bLu5gG7BUWFIN0skIQJQ/L1rIex4X6w==",
      "dev": true
    },
    "node_modules/@types/json-schema": {
      "version": "7.0.15",
      "resolved": "https://registry.npmjs.org/@types/json-schema/-/json-schema-7.0.15.tgz",
      "integrity": "sha512-5+fP8P8MFNC+AyZCDxrB2pkZFPGzqQWUzpSeuuVLvm8VMcorNYavBqoFcxK8bQz4Qsbn4oUEEem4wDLfcysGHA==",
      "dev": true
    },
    "node_modules/@types/json5": {
      "version": "0.0.29",
      "resolved": "https://registry.npmjs.org/@types/json5/-/json5-0.0.29.tgz",
      "integrity": "sha512-dRLjCWHYg4oaA77cxO64oO+7JwCwnIzkZPdrrC71jQmQtlhM556pwKo5bUzqvZndkVbeFLIIi+9TC40JNF5hNQ==",
      "dev": true
    },
    "node_modules/@types/node": {
      "version": "20.19.27",
      "resolved": "https://registry.npmjs.org/@types/node/-/node-20.19.27.tgz",
      "integrity": "sha512-N2clP5pJhB2YnZJ3PIHFk5RkygRX5WO/5f0WC08tp0wd+sv0rsJk3MqWn3CbNmT2J505a5336jaQj4ph1AdMug==",
      "dev": true,
      "dependencies": {
        "undici-types": "~6.21.0"
      }
    },
    "node_modules/@types/react": {
      "version": "19.2.7",
      "resolved": "https://registry.npmjs.org/@types/react/-/react-19.2.7.tgz",
      "integrity": "sha512-MWtvHrGZLFttgeEj28VXHxpmwYbor/ATPYbBfSFZEIRK0ecCFLl2Qo55z52Hss+UV9CRN7trSeq1zbgx7YDWWg==",
      "devOptional": true,
      "dependencies": {
        "csstype": "^3.2.2"
      }
    },
    "node_modules/@types/react-dom": {
      "version": "19.2.3",
      "resolved": "https://registry.npmjs.org/@types/react-dom/-/react-dom-19.2.3.tgz",
      "integrity": "sha512-jp2L/eY6fn+KgVVQAOqYItbF0VY/YApe5Mz2F0aykSO8gx31bYCZyvSeYxCHKvzHG5eZjc+zyaS5BrBWya2+kQ==",
      "dev": true,
      "peerDependencies": {
        "@types/react": "^19.2.0"
      }
    },
    "node_modules/@types/use-sync-external-store": {
      "version": "0.0.6",
      "resolved": "https://registry.npmjs.org/@types/use-sync-external-store/-/use-sync-external-store-0.0.6.tgz",
      "integrity": "sha512-zFDAD+tlpf2r4asuHEj0XH6pY6i0g5NeAHPn+15wk3BV6JA69eERFXC1gyGThDkVa1zCyKr5jox1+2LbV/AMLg=="
    },
    "node_modules/@typescript-eslint/eslint-plugin": {
      "version": "8.50.0",
      "resolved": "https://registry.npmjs.org/@typescript-eslint/eslint-plugin/-/eslint-plugin-8.50.0.tgz",
      "integrity": "sha512-O7QnmOXYKVtPrfYzMolrCTfkezCJS9+ljLdKW/+DCvRsc3UAz+sbH6Xcsv7p30+0OwUbeWfUDAQE0vpabZ3QLg==",
      "dev": true,
      "dependencies": {
        "@eslint-community/regexpp": "^4.10.0",
        "@typescript-eslint/scope-manager": "8.50.0",
        "@typescript-eslint/type-utils": "8.50.0",
        "@typescript-eslint/utils": "8.50.0",
        "@typescript-eslint/visitor-keys": "8.50.0",
        "ignore": "^7.0.0",
        "natural-compare": "^1.4.0",
        "ts-api-utils": "^2.1.0"
      },
      "engines": {
        "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/typescript-eslint"
      },
      "peerDependencies": {
        "@typescript-eslint/parser": "^8.50.0",
        "eslint": "^8.57.0 || ^9.0.0",
        "typescript": ">=4.8.4 <6.0.0"
      }
    },
    "node_modules/@typescript-eslint/eslint-plugin/node_modules/ignore": {
      "version": "7.0.5",
      "resolved": "https://registry.npmjs.org/ignore/-/ignore-7.0.5.tgz",
      "integrity": "sha512-Hs59xBNfUIunMFgWAbGX5cq6893IbWg4KnrjbYwX3tx0ztorVgTDA6B2sxf8ejHJ4wz8BqGUMYlnzNBer5NvGg==",
      "dev": true,
      "engines": {
        "node": ">= 4"
      }
    },
    "node_modules/@typescript-eslint/parser": {
      "version": "8.50.0",
      "resolved": "https://registry.npmjs.org/@typescript-eslint/parser/-/parser-8.50.0.tgz",
      "integrity": "sha512-6/cmF2piao+f6wSxUsJLZjck7OQsYyRtcOZS02k7XINSNlz93v6emM8WutDQSXnroG2xwYlEVHJI+cPA7CPM3Q==",
      "dev": true,
      "dependencies": {
        "@typescript-eslint/scope-manager": "8.50.0",
        "@typescript-eslint/types": "8.50.0",
        "@typescript-eslint/typescript-estree": "8.50.0",
        "@typescript-eslint/visitor-keys": "8.50.0",
        "debug": "^4.3.4"
      },
      "engines": {
        "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/typescript-eslint"
      },
      "peerDependencies": {
        "eslint": "^8.57.0 || ^9.0.0",
        "typescript": ">=4.8.4 <6.0.0"
      }
    },
    "node_modules/@typescript-eslint/project-service": {
      "version": "8.50.0",
      "resolved": "https://registry.npmjs.org/@typescript-eslint/project-service/-/project-service-8.50.0.tgz",
      "integrity": "sha512-Cg/nQcL1BcoTijEWyx4mkVC56r8dj44bFDvBdygifuS20f3OZCHmFbjF34DPSi07kwlFvqfv/xOLnJ5DquxSGQ==",
      "dev": true,
      "dependencies": {
        "@typescript-eslint/tsconfig-utils": "^8.50.0",
        "@typescript-eslint/types": "^8.50.0",
        "debug": "^4.3.4"
      },
      "engines": {
        "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/typescript-eslint"
      },
      "peerDependencies": {
        "typescript": ">=4.8.4 <6.0.0"
      }
    },
    "node_modules/@typescript-eslint/scope-manager": {
      "version": "8.50.0",
      "resolved": "https://registry.npmjs.org/@typescript-eslint/scope-manager/-/scope-manager-8.50.0.tgz",
      "integrity": "sha512-xCwfuCZjhIqy7+HKxBLrDVT5q/iq7XBVBXLn57RTIIpelLtEIZHXAF/Upa3+gaCpeV1NNS5Z9A+ID6jn50VD4A==",
      "dev": true,
      "dependencies": {
        "@typescript-eslint/types": "8.50.0",
        "@typescript-eslint/visitor-keys": "8.50.0"
      },
      "engines": {
        "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/typescript-eslint"
      }
    },
    "node_modules/@typescript-eslint/tsconfig-utils": {
      "version": "8.50.0",
      "resolved": "https://registry.npmjs.org/@typescript-eslint/tsconfig-utils/-/tsconfig-utils-8.50.0.tgz",
      "integrity": "sha512-vxd3G/ybKTSlm31MOA96gqvrRGv9RJ7LGtZCn2Vrc5htA0zCDvcMqUkifcjrWNNKXHUU3WCkYOzzVSFBd0wa2w==",
      "dev": true,
      "engines": {
        "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/typescript-eslint"
      },
      "peerDependencies": {
        "typescript": ">=4.8.4 <6.0.0"
      }
    },
    "node_modules/@typescript-eslint/type-utils": {
      "version": "8.50.0",
      "resolved": "https://registry.npmjs.org/@typescript-eslint/type-utils/-/type-utils-8.50.0.tgz",
      "integrity": "sha512-7OciHT2lKCewR0mFoBrvZJ4AXTMe/sYOe87289WAViOocEmDjjv8MvIOT2XESuKj9jp8u3SZYUSh89QA4S1kQw==",
      "dev": true,
      "dependencies": {
        "@typescript-eslint/types": "8.50.0",
        "@typescript-eslint/typescript-estree": "8.50.0",
        "@typescript-eslint/utils": "8.50.0",
        "debug": "^4.3.4",
        "ts-api-utils": "^2.1.0"
      },
      "engines": {
        "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/typescript-eslint"
      },
      "peerDependencies": {
        "eslint": "^8.57.0 || ^9.0.0",
        "typescript": ">=4.8.4 <6.0.0"
      }
    },
    "node_modules/@typescript-eslint/types": {
      "version": "8.50.0",
      "resolved": "https://registry.npmjs.org/@typescript-eslint/types/-/types-8.50.0.tgz",
      "integrity": "sha512-iX1mgmGrXdANhhITbpp2QQM2fGehBse9LbTf0sidWK6yg/NE+uhV5dfU1g6EYPlcReYmkE9QLPq/2irKAmtS9w==",
      "dev": true,
      "engines": {
        "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/typescript-eslint"
      }
    },
    "node_modules/@typescript-eslint/typescript-estree": {
      "version": "8.50.0",
      "resolved": "https://registry.npmjs.org/@typescript-eslint/typescript-estree/-/typescript-estree-8.50.0.tgz",
      "integrity": "sha512-W7SVAGBR/IX7zm1t70Yujpbk+zdPq/u4soeFSknWFdXIFuWsBGBOUu/Tn/I6KHSKvSh91OiMuaSnYp3mtPt5IQ==",
      "dev": true,
      "dependencies": {
        "@typescript-eslint/project-service": "8.50.0",
        "@typescript-eslint/tsconfig-utils": "8.50.0",
        "@typescript-eslint/types": "8.50.0",
        "@typescript-eslint/visitor-keys": "8.50.0",
        "debug": "^4.3.4",
        "minimatch": "^9.0.4",
        "semver": "^7.6.0",
        "tinyglobby": "^0.2.15",
        "ts-api-utils": "^2.1.0"
      },
      "engines": {
        "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/typescript-eslint"
      },
      "peerDependencies": {
        "typescript": ">=4.8.4 <6.0.0"
      }
    },
    "node_modules/@typescript-eslint/typescript-estree/node_modules/brace-expansion": {
      "version": "2.0.2",
      "resolved": "https://registry.npmjs.org/brace-expansion/-/brace-expansion-2.0.2.tgz",
      "integrity": "sha512-Jt0vHyM+jmUBqojB7E1NIYadt0vI0Qxjxd2TErW94wDz+E2LAm5vKMXXwg6ZZBTHPuUlDgQHKXvjGBdfcF1ZDQ==",
      "dev": true,
      "dependencies": {
        "balanced-match": "^1.0.0"
      }
    },
    "node_modules/@typescript-eslint/typescript-estree/node_modules/minimatch": {
      "version": "9.0.5",
      "resolved": "https://registry.npmjs.org/minimatch/-/minimatch-9.0.5.tgz",
      "integrity": "sha512-G6T0ZX48xgozx7587koeX9Ys2NYy6Gmv//P89sEte9V9whIapMNF4idKxnW2QtCcLiTWlb/wfCabAtAFWhhBow==",
      "dev": true,
      "dependencies": {
        "brace-expansion": "^2.0.1"
      },
      "engines": {
        "node": ">=16 || 14 >=14.17"
      },
      "funding": {
        "url": "https://github.com/sponsors/isaacs"
      }
    },
    "node_modules/@typescript-eslint/typescript-estree/node_modules/semver": {
      "version": "7.7.3",
      "resolved": "https://registry.npmjs.org/semver/-/semver-7.7.3.tgz",
      "integrity": "sha512-SdsKMrI9TdgjdweUSR9MweHA4EJ8YxHn8DFaDisvhVlUOe4BF1tLD7GAj0lIqWVl+dPb/rExr0Btby5loQm20Q==",
      "dev": true,
      "bin": {
        "semver": "bin/semver.js"
      },
      "engines": {
        "node": ">=10"
      }
    },
    "node_modules/@typescript-eslint/utils": {
      "version": "8.50.0",
      "resolved": "https://registry.npmjs.org/@typescript-eslint/utils/-/utils-8.50.0.tgz",
      "integrity": "sha512-87KgUXET09CRjGCi2Ejxy3PULXna63/bMYv72tCAlDJC3Yqwln0HiFJ3VJMst2+mEtNtZu5oFvX4qJGjKsnAgg==",
      "dev": true,
      "dependencies": {
        "@eslint-community/eslint-utils": "^4.7.0",
        "@typescript-eslint/scope-manager": "8.50.0",
        "@typescript-eslint/types": "8.50.0",
        "@typescript-eslint/typescript-estree": "8.50.0"
      },
      "engines": {
        "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/typescript-eslint"
      },
      "peerDependencies": {
        "eslint": "^8.57.0 || ^9.0.0",
        "typescript": ">=4.8.4 <6.0.0"
      }
    },
    "node_modules/@typescript-eslint/visitor-keys": {
      "version": "8.50.0",
      "resolved": "https://registry.npmjs.org/@typescript-eslint/visitor-keys/-/visitor-keys-8.50.0.tgz",
      "integrity": "sha512-Xzmnb58+Db78gT/CCj/PVCvK+zxbnsw6F+O1oheYszJbBSdEjVhQi3C/Xttzxgi/GLmpvOggRs1RFpiJ8+c34Q==",
      "dev": true,
      "dependencies": {
        "@typescript-eslint/types": "8.50.0",
        "eslint-visitor-keys": "^4.2.1"
      },
      "engines": {
        "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/typescript-eslint"
      }
    },
    "node_modules/@unrs/resolver-binding-android-arm-eabi": {
      "version": "1.11.1",
      "resolved": "https://registry.npmjs.org/@unrs/resolver-binding-android-arm-eabi/-/resolver-binding-android-arm-eabi-1.11.1.tgz",
      "integrity": "sha512-ppLRUgHVaGRWUx0R0Ut06Mjo9gBaBkg3v/8AxusGLhsIotbBLuRk51rAzqLC8gq6NyyAojEXglNjzf6R948DNw==",
      "cpu": [
        "arm"
      ],
      "dev": true,
      "optional": true,
      "os": [
        "android"
      ]
    },
    "node_modules/@unrs/resolver-binding-android-arm64": {
      "version": "1.11.1",
      "resolved": "https://registry.npmjs.org/@unrs/resolver-binding-android-arm64/-/resolver-binding-android-arm64-1.11.1.tgz",
      "integrity": "sha512-lCxkVtb4wp1v+EoN+HjIG9cIIzPkX5OtM03pQYkG+U5O/wL53LC4QbIeazgiKqluGeVEeBlZahHalCaBvU1a2g==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "optional": true,
      "os": [
        "android"
      ]
    },
    "node_modules/@unrs/resolver-binding-darwin-arm64": {
      "version": "1.11.1",
      "resolved": "https://registry.npmjs.org/@unrs/resolver-binding-darwin-arm64/-/resolver-binding-darwin-arm64-1.11.1.tgz",
      "integrity": "sha512-gPVA1UjRu1Y/IsB/dQEsp2V1pm44Of6+LWvbLc9SDk1c2KhhDRDBUkQCYVWe6f26uJb3fOK8saWMgtX8IrMk3g==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "optional": true,
      "os": [
        "darwin"
      ]
    },
    "node_modules/@unrs/resolver-binding-darwin-x64": {
      "version": "1.11.1",
      "resolved": "https://registry.npmjs.org/@unrs/resolver-binding-darwin-x64/-/resolver-binding-darwin-x64-1.11.1.tgz",
      "integrity": "sha512-cFzP7rWKd3lZaCsDze07QX1SC24lO8mPty9vdP+YVa3MGdVgPmFc59317b2ioXtgCMKGiCLxJ4HQs62oz6GfRQ==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "optional": true,
      "os": [
        "darwin"
      ]
    },
    "node_modules/@unrs/resolver-binding-freebsd-x64": {
      "version": "1.11.1",
      "resolved": "https://registry.npmjs.org/@unrs/resolver-binding-freebsd-x64/-/resolver-binding-freebsd-x64-1.11.1.tgz",
      "integrity": "sha512-fqtGgak3zX4DCB6PFpsH5+Kmt/8CIi4Bry4rb1ho6Av2QHTREM+47y282Uqiu3ZRF5IQioJQ5qWRV6jduA+iGw==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "optional": true,
      "os": [
        "freebsd"
      ]
    },
    "node_modules/@unrs/resolver-binding-linux-arm-gnueabihf": {
      "version": "1.11.1",
      "resolved": "https://registry.npmjs.org/@unrs/resolver-binding-linux-arm-gnueabihf/-/resolver-binding-linux-arm-gnueabihf-1.11.1.tgz",
      "integrity": "sha512-u92mvlcYtp9MRKmP+ZvMmtPN34+/3lMHlyMj7wXJDeXxuM0Vgzz0+PPJNsro1m3IZPYChIkn944wW8TYgGKFHw==",
      "cpu": [
        "arm"
      ],
      "dev": true,
      "optional": true,
      "os": [
        "linux"
      ]
    },
    "node_modules/@unrs/resolver-binding-linux-arm-musleabihf": {
      "version": "1.11.1",
      "resolved": "https://registry.npmjs.org/@unrs/resolver-binding-linux-arm-musleabihf/-/resolver-binding-linux-arm-musleabihf-1.11.1.tgz",
      "integrity": "sha512-cINaoY2z7LVCrfHkIcmvj7osTOtm6VVT16b5oQdS4beibX2SYBwgYLmqhBjA1t51CarSaBuX5YNsWLjsqfW5Cw==",
      "cpu": [
        "arm"
      ],
      "dev": true,
      "optional": true,
      "os": [
        "linux"
      ]
    },
    "node_modules/@unrs/resolver-binding-linux-arm64-gnu": {
      "version": "1.11.1",
      "resolved": "https://registry.npmjs.org/@unrs/resolver-binding-linux-arm64-gnu/-/resolver-binding-linux-arm64-gnu-1.11.1.tgz",
      "integrity": "sha512-34gw7PjDGB9JgePJEmhEqBhWvCiiWCuXsL9hYphDF7crW7UgI05gyBAi6MF58uGcMOiOqSJ2ybEeCvHcq0BCmQ==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "optional": true,
      "os": [
        "linux"
      ]
    },
    "node_modules/@unrs/resolver-binding-linux-arm64-musl": {
      "version": "1.11.1",
      "resolved": "https://registry.npmjs.org/@unrs/resolver-binding-linux-arm64-musl/-/resolver-binding-linux-arm64-musl-1.11.1.tgz",
      "integrity": "sha512-RyMIx6Uf53hhOtJDIamSbTskA99sPHS96wxVE/bJtePJJtpdKGXO1wY90oRdXuYOGOTuqjT8ACccMc4K6QmT3w==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "optional": true,
      "os": [
        "linux"
      ]
    },
    "node_modules/@unrs/resolver-binding-linux-ppc64-gnu": {
      "version": "1.11.1",
      "resolved": "https://registry.npmjs.org/@unrs/resolver-binding-linux-ppc64-gnu/-/resolver-binding-linux-ppc64-gnu-1.11.1.tgz",
      "integrity": "sha512-D8Vae74A4/a+mZH0FbOkFJL9DSK2R6TFPC9M+jCWYia/q2einCubX10pecpDiTmkJVUH+y8K3BZClycD8nCShA==",
      "cpu": [
        "ppc64"
      ],
      "dev": true,
      "optional": true,
      "os": [
        "linux"
      ]
    },
    "node_modules/@unrs/resolver-binding-linux-riscv64-gnu": {
      "version": "1.11.1",
      "resolved": "https://registry.npmjs.org/@unrs/resolver-binding-linux-riscv64-gnu/-/resolver-binding-linux-riscv64-gnu-1.11.1.tgz",
      "integrity": "sha512-frxL4OrzOWVVsOc96+V3aqTIQl1O2TjgExV4EKgRY09AJ9leZpEg8Ak9phadbuX0BA4k8U5qtvMSQQGGmaJqcQ==",
      "cpu": [
        "riscv64"
      ],
      "dev": true,
      "optional": true,
      "os": [
        "linux"
      ]
    },
    "node_modules/@unrs/resolver-binding-linux-riscv64-musl": {
      "version": "1.11.1",
      "resolved": "https://registry.npmjs.org/@unrs/resolver-binding-linux-riscv64-musl/-/resolver-binding-linux-riscv64-musl-1.11.1.tgz",
      "integrity": "sha512-mJ5vuDaIZ+l/acv01sHoXfpnyrNKOk/3aDoEdLO/Xtn9HuZlDD6jKxHlkN8ZhWyLJsRBxfv9GYM2utQ1SChKew==",
      "cpu": [
        "riscv64"
      ],
      "dev": true,
      "optional": true,
      "os": [
        "linux"
      ]
    },
    "node_modules/@unrs/resolver-binding-linux-s390x-gnu": {
      "version": "1.11.1",
      "resolved": "https://registry.npmjs.org/@unrs/resolver-binding-linux-s390x-gnu/-/resolver-binding-linux-s390x-gnu-1.11.1.tgz",
      "integrity": "sha512-kELo8ebBVtb9sA7rMe1Cph4QHreByhaZ2QEADd9NzIQsYNQpt9UkM9iqr2lhGr5afh885d/cB5QeTXSbZHTYPg==",
      "cpu": [
        "s390x"
      ],
      "dev": true,
      "optional": true,
      "os": [
        "linux"
      ]
    },
    "node_modules/@unrs/resolver-binding-linux-x64-gnu": {
      "version": "1.11.1",
      "resolved": "https://registry.npmjs.org/@unrs/resolver-binding-linux-x64-gnu/-/resolver-binding-linux-x64-gnu-1.11.1.tgz",
      "integrity": "sha512-C3ZAHugKgovV5YvAMsxhq0gtXuwESUKc5MhEtjBpLoHPLYM+iuwSj3lflFwK3DPm68660rZ7G8BMcwSro7hD5w==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "optional": true,
      "os": [
        "linux"
      ]
    },
    "node_modules/@unrs/resolver-binding-linux-x64-musl": {
      "version": "1.11.1",
      "resolved": "https://registry.npmjs.org/@unrs/resolver-binding-linux-x64-musl/-/resolver-binding-linux-x64-musl-1.11.1.tgz",
      "integrity": "sha512-rV0YSoyhK2nZ4vEswT/QwqzqQXw5I6CjoaYMOX0TqBlWhojUf8P94mvI7nuJTeaCkkds3QE4+zS8Ko+GdXuZtA==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "optional": true,
      "os": [
        "linux"
      ]
    },
    "node_modules/@unrs/resolver-binding-wasm32-wasi": {
      "version": "1.11.1",
      "resolved": "https://registry.npmjs.org/@unrs/resolver-binding-wasm32-wasi/-/resolver-binding-wasm32-wasi-1.11.1.tgz",
      "integrity": "sha512-5u4RkfxJm+Ng7IWgkzi3qrFOvLvQYnPBmjmZQ8+szTK/b31fQCnleNl1GgEt7nIsZRIf5PLhPwT0WM+q45x/UQ==",
      "cpu": [
        "wasm32"
      ],
      "dev": true,
      "optional": true,
      "dependencies": {
        "@napi-rs/wasm-runtime": "^0.2.11"
      },
      "engines": {
        "node": ">=14.0.0"
      }
    },
    "node_modules/@unrs/resolver-binding-win32-arm64-msvc": {
      "version": "1.11.1",
      "resolved": "https://registry.npmjs.org/@unrs/resolver-binding-win32-arm64-msvc/-/resolver-binding-win32-arm64-msvc-1.11.1.tgz",
      "integrity": "sha512-nRcz5Il4ln0kMhfL8S3hLkxI85BXs3o8EYoattsJNdsX4YUU89iOkVn7g0VHSRxFuVMdM4Q1jEpIId1Ihim/Uw==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "optional": true,
      "os": [
        "win32"
      ]
    },
    "node_modules/@unrs/resolver-binding-win32-ia32-msvc": {
      "version": "1.11.1",
      "resolved": "https://registry.npmjs.org/@unrs/resolver-binding-win32-ia32-msvc/-/resolver-binding-win32-ia32-msvc-1.11.1.tgz",
      "integrity": "sha512-DCEI6t5i1NmAZp6pFonpD5m7i6aFrpofcp4LA2i8IIq60Jyo28hamKBxNrZcyOwVOZkgsRp9O2sXWBWP8MnvIQ==",
      "cpu": [
        "ia32"
      ],
      "dev": true,
      "optional": true,
      "os": [
        "win32"
      ]
    },
    "node_modules/@unrs/resolver-binding-win32-x64-msvc": {
      "version": "1.11.1",
      "resolved": "https://registry.npmjs.org/@unrs/resolver-binding-win32-x64-msvc/-/resolver-binding-win32-x64-msvc-1.11.1.tgz",
      "integrity": "sha512-lrW200hZdbfRtztbygyaq/6jP6AKE8qQN2KvPcJ+x7wiD038YtnYtZ82IMNJ69GJibV7bwL3y9FgK+5w/pYt6g==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "optional": true,
      "os": [
        "win32"
      ]
    },
    "node_modules/acorn": {
      "version": "8.15.0",
      "resolved": "https://registry.npmjs.org/acorn/-/acorn-8.15.0.tgz",
      "integrity": "sha512-NZyJarBfL7nWwIq+FDL6Zp/yHEhePMNnnJ0y3qfieCrmNvYct8uvtiV41UvlSe6apAfk0fY1FbWx+NwfmpvtTg==",
      "dev": true,
      "bin": {
        "acorn": "bin/acorn"
      },
      "engines": {
        "node": ">=0.4.0"
      }
    },
    "node_modules/acorn-jsx": {
      "version": "5.3.2",
      "resolved": "https://registry.npmjs.org/acorn-jsx/-/acorn-jsx-5.3.2.tgz",
      "integrity": "sha512-rq9s+JNhf0IChjtDXxllJ7g41oZk5SlXtp0LHwyA5cejwn7vKmKp4pPri6YEePv2PU65sAsegbXtIinmDFDXgQ==",
      "dev": true,
      "peerDependencies": {
        "acorn": "^6.0.0 || ^7.0.0 || ^8.0.0"
      }
    },
    "node_modules/ajv": {
      "version": "6.12.6",
      "resolved": "https://registry.npmjs.org/ajv/-/ajv-6.12.6.tgz",
      "integrity": "sha512-j3fVLgvTo527anyYyJOGTYJbG+vnnQYvE0m5mmkc1TK+nxAppkCLMIL0aZ4dblVCNoGShhm+kzE4ZUykBoMg4g==",
      "dev": true,
      "dependencies": {
        "fast-deep-equal": "^3.1.1",
        "fast-json-stable-stringify": "^2.0.0",
        "json-schema-traverse": "^0.4.1",
        "uri-js": "^4.2.2"
      },
      "funding": {
        "type": "github",
        "url": "https://github.com/sponsors/epoberezkin"
      }
    },
    "node_modules/ansi-styles": {
      "version": "4.3.0",
      "resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-4.3.0.tgz",
      "integrity": "sha512-zbB9rCJAT1rbjiVDb2hqKFHNYLxgtk8NURxZ3IZwD3F6NtxbXZQCnnSi1Lkx+IDohdPlFp222wVALIheZJQSEg==",
      "dev": true,
      "dependencies": {
        "color-convert": "^2.0.1"
      },
      "engines": {
        "node": ">=8"
      },
      "funding": {
        "url": "https://github.com/chalk/ansi-styles?sponsor=1"
      }
    },
    "node_modules/argparse": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/argparse/-/argparse-2.0.1.tgz",
      "integrity": "sha512-8+9WqebbFzpX9OR+Wa6O29asIogeRMzcGtAINdpMHHyAg10f05aSFVBbcEqGf/PXw1EjAZ+q2/bEBg3DvurK3Q==",
      "dev": true
    },
    "node_modules/aria-query": {
      "version": "5.3.2",
      "resolved": "https://registry.npmjs.org/aria-query/-/aria-query-5.3.2.tgz",
      "integrity": "sha512-COROpnaoap1E2F000S62r6A60uHZnmlvomhfyT2DlTcrY1OrBKn2UhH7qn5wTC9zMvD0AY7csdPSNwKP+7WiQw==",
      "dev": true,
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/array-buffer-byte-length": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/array-buffer-byte-length/-/array-buffer-byte-length-1.0.2.tgz",
      "integrity": "sha512-LHE+8BuR7RYGDKvnrmcuSq3tDcKv9OFEXQt/HpbZhY7V6h0zlUXutnAD82GiFx9rdieCMjkvtcsPqBwgUl1Iiw==",
      "dev": true,
      "dependencies": {
        "call-bound": "^1.0.3",
        "is-array-buffer": "^3.0.5"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/array-includes": {
      "version": "3.1.9",
      "resolved": "https://registry.npmjs.org/array-includes/-/array-includes-3.1.9.tgz",
      "integrity": "sha512-FmeCCAenzH0KH381SPT5FZmiA/TmpndpcaShhfgEN9eCVjnFBqq3l1xrI42y8+PPLI6hypzou4GXw00WHmPBLQ==",
      "dev": true,
      "dependencies": {
        "call-bind": "^1.0.8",
        "call-bound": "^1.0.4",
        "define-properties": "^1.2.1",
        "es-abstract": "^1.24.0",
        "es-object-atoms": "^1.1.1",
        "get-intrinsic": "^1.3.0",
        "is-string": "^1.1.1",
        "math-intrinsics": "^1.1.0"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/array.prototype.findlast": {
      "version": "1.2.5",
      "resolved": "https://registry.npmjs.org/array.prototype.findlast/-/array.prototype.findlast-1.2.5.tgz",
      "integrity": "sha512-CVvd6FHg1Z3POpBLxO6E6zr+rSKEQ9L6rZHAaY7lLfhKsWYUBBOuMs0e9o24oopj6H+geRCX0YJ+TJLBK2eHyQ==",
      "dev": true,
      "dependencies": {
        "call-bind": "^1.0.7",
        "define-properties": "^1.2.1",
        "es-abstract": "^1.23.2",
        "es-errors": "^1.3.0",
        "es-object-atoms": "^1.0.0",
        "es-shim-unscopables": "^1.0.2"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/array.prototype.findlastindex": {
      "version": "1.2.6",
      "resolved": "https://registry.npmjs.org/array.prototype.findlastindex/-/array.prototype.findlastindex-1.2.6.tgz",
      "integrity": "sha512-F/TKATkzseUExPlfvmwQKGITM3DGTK+vkAsCZoDc5daVygbJBnjEUCbgkAvVFsgfXfX4YIqZ/27G3k3tdXrTxQ==",
      "dev": true,
      "dependencies": {
        "call-bind": "^1.0.8",
        "call-bound": "^1.0.4",
        "define-properties": "^1.2.1",
        "es-abstract": "^1.23.9",
        "es-errors": "^1.3.0",
        "es-object-atoms": "^1.1.1",
        "es-shim-unscopables": "^1.1.0"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/array.prototype.flat": {
      "version": "1.3.3",
      "resolved": "https://registry.npmjs.org/array.prototype.flat/-/array.prototype.flat-1.3.3.tgz",
      "integrity": "sha512-rwG/ja1neyLqCuGZ5YYrznA62D4mZXg0i1cIskIUKSiqF3Cje9/wXAls9B9s1Wa2fomMsIv8czB8jZcPmxCXFg==",
      "dev": true,
      "dependencies": {
        "call-bind": "^1.0.8",
        "define-properties": "^1.2.1",
        "es-abstract": "^1.23.5",
        "es-shim-unscopables": "^1.0.2"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/array.prototype.flatmap": {
      "version": "1.3.3",
      "resolved": "https://registry.npmjs.org/array.prototype.flatmap/-/array.prototype.flatmap-1.3.3.tgz",
      "integrity": "sha512-Y7Wt51eKJSyi80hFrJCePGGNo5ktJCslFuboqJsbf57CCPcm5zztluPlc4/aD8sWsKvlwatezpV4U1efk8kpjg==",
      "dev": true,
      "dependencies": {
        "call-bind": "^1.0.8",
        "define-properties": "^1.2.1",
        "es-abstract": "^1.23.5",
        "es-shim-unscopables": "^1.0.2"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/array.prototype.tosorted": {
      "version": "1.1.4",
      "resolved": "https://registry.npmjs.org/array.prototype.tosorted/-/array.prototype.tosorted-1.1.4.tgz",
      "integrity": "sha512-p6Fx8B7b7ZhL/gmUsAy0D15WhvDccw3mnGNbZpi3pmeJdxtWsj2jEaI4Y6oo3XiHfzuSgPwKc04MYt6KgvC/wA==",
      "dev": true,
      "dependencies": {
        "call-bind": "^1.0.7",
        "define-properties": "^1.2.1",
        "es-abstract": "^1.23.3",
        "es-errors": "^1.3.0",
        "es-shim-unscopables": "^1.0.2"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/arraybuffer.prototype.slice": {
      "version": "1.0.4",
      "resolved": "https://registry.npmjs.org/arraybuffer.prototype.slice/-/arraybuffer.prototype.slice-1.0.4.tgz",
      "integrity": "sha512-BNoCY6SXXPQ7gF2opIP4GBE+Xw7U+pHMYKuzjgCN3GwiaIR09UUeKfheyIry77QtrCBlC0KK0q5/TER/tYh3PQ==",
      "dev": true,
      "dependencies": {
        "array-buffer-byte-length": "^1.0.1",
        "call-bind": "^1.0.8",
        "define-properties": "^1.2.1",
        "es-abstract": "^1.23.5",
        "es-errors": "^1.3.0",
        "get-intrinsic": "^1.2.6",
        "is-array-buffer": "^3.0.4"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/ast-types-flow": {
      "version": "0.0.8",
      "resolved": "https://registry.npmjs.org/ast-types-flow/-/ast-types-flow-0.0.8.tgz",
      "integrity": "sha512-OH/2E5Fg20h2aPrbe+QL8JZQFko0YZaF+j4mnQ7BGhfavO7OpSLa8a0y9sBwomHdSbkhTS8TQNayBfnW5DwbvQ==",
      "dev": true
    },
    "node_modules/async-function": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/async-function/-/async-function-1.0.0.tgz",
      "integrity": "sha512-hsU18Ae8CDTR6Kgu9DYf0EbCr/a5iGL0rytQDobUcdpYOKokk8LEjVphnXkDkgpi0wYVsqrXuP0bZxJaTqdgoA==",
      "dev": true,
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/available-typed-arrays": {
      "version": "1.0.7",
      "resolved": "https://registry.npmjs.org/available-typed-arrays/-/available-typed-arrays-1.0.7.tgz",
      "integrity": "sha512-wvUjBtSGN7+7SjNpq/9M2Tg350UZD3q62IFZLbRAR1bSMlCo1ZaeW+BJ+D090e4hIIZLBcTDWe4Mh4jvUDajzQ==",
      "dev": true,
      "dependencies": {
        "possible-typed-array-names": "^1.0.0"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/axe-core": {
      "version": "4.11.0",
      "resolved": "https://registry.npmjs.org/axe-core/-/axe-core-4.11.0.tgz",
      "integrity": "sha512-ilYanEU8vxxBexpJd8cWM4ElSQq4QctCLKih0TSfjIfCQTeyH/6zVrmIJfLPrKTKJRbiG+cfnZbQIjAlJmF1jQ==",
      "dev": true,
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/axobject-query": {
      "version": "4.1.0",
      "resolved": "https://registry.npmjs.org/axobject-query/-/axobject-query-4.1.0.tgz",
      "integrity": "sha512-qIj0G9wZbMGNLjLmg1PT6v2mE9AH2zlnADJD/2tC6E00hgmhUOfEB6greHPAfLRSufHqROIUTkw6E+M3lH0PTQ==",
      "dev": true,
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/balanced-match": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/balanced-match/-/balanced-match-1.0.2.tgz",
      "integrity": "sha512-3oSeUO0TMV67hN1AmbXsK4yaqU7tjiHlbxRDZOpH0KW9+CeX4bRAaX0Anxt0tx2MrpRpWwQaPwIlISEJhYU5Pw==",
      "dev": true
    },
    "node_modules/baseline-browser-mapping": {
      "version": "2.9.7",
      "resolved": "https://registry.npmjs.org/baseline-browser-mapping/-/baseline-browser-mapping-2.9.7.tgz",
      "integrity": "sha512-k9xFKplee6KIio3IDbwj+uaCLpqzOwakOgmqzPezM0sFJlFKcg30vk2wOiAJtkTSfx0SSQDSe8q+mWA/fSH5Zg==",
      "dev": true,
      "bin": {
        "baseline-browser-mapping": "dist/cli.js"
      }
    },
    "node_modules/brace-expansion": {
      "version": "1.1.12",
      "resolved": "https://registry.npmjs.org/brace-expansion/-/brace-expansion-1.1.12.tgz",
      "integrity": "sha512-9T9UjW3r0UW5c1Q7GTwllptXwhvYmEzFhzMfZ9H7FQWt+uZePjZPjBP/W1ZEyZ1twGWom5/56TF4lPcqjnDHcg==",
      "dev": true,
      "dependencies": {
        "balanced-match": "^1.0.0",
        "concat-map": "0.0.1"
      }
    },
    "node_modules/braces": {
      "version": "3.0.3",
      "resolved": "https://registry.npmjs.org/braces/-/braces-3.0.3.tgz",
      "integrity": "sha512-yQbXgO/OSZVD2IsiLlro+7Hf6Q18EJrKSEsdoMzKePKXct3gvD8oLcOQdIzGupr5Fj+EDe8gO/lxc1BzfMpxvA==",
      "dev": true,
      "dependencies": {
        "fill-range": "^7.1.1"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/browserslist": {
      "version": "4.28.1",
      "resolved": "https://registry.npmjs.org/browserslist/-/browserslist-4.28.1.tgz",
      "integrity": "sha512-ZC5Bd0LgJXgwGqUknZY/vkUQ04r8NXnJZ3yYi4vDmSiZmC/pdSN0NbNRPxZpbtO4uAfDUAFffO8IZoM3Gj8IkA==",
      "dev": true,
      "funding": [
        {
          "type": "opencollective",
          "url": "https://opencollective.com/browserslist"
        },
        {
          "type": "tidelift",
          "url": "https://tidelift.com/funding/github/npm/browserslist"
        },
        {
          "type": "github",
          "url": "https://github.com/sponsors/ai"
        }
      ],
      "dependencies": {
        "baseline-browser-mapping": "^2.9.0",
        "caniuse-lite": "^1.0.30001759",
        "electron-to-chromium": "^1.5.263",
        "node-releases": "^2.0.27",
        "update-browserslist-db": "^1.2.0"
      },
      "bin": {
        "browserslist": "cli.js"
      },
      "engines": {
        "node": "^6 || ^7 || ^8 || ^9 || ^10 || ^11 || ^12 || >=13.7"
      }
    },
    "node_modules/call-bind": {
      "version": "1.0.8",
      "resolved": "https://registry.npmjs.org/call-bind/-/call-bind-1.0.8.tgz",
      "integrity": "sha512-oKlSFMcMwpUg2ednkhQ454wfWiU/ul3CkJe/PEHcTKuiX6RpbehUiFMXu13HalGZxfUwCQzZG747YXBn1im9ww==",
      "dev": true,
      "dependencies": {
        "call-bind-apply-helpers": "^1.0.0",
        "es-define-property": "^1.0.0",
        "get-intrinsic": "^1.2.4",
        "set-function-length": "^1.2.2"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/call-bind-apply-helpers": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/call-bind-apply-helpers/-/call-bind-apply-helpers-1.0.2.tgz",
      "integrity": "sha512-Sp1ablJ0ivDkSzjcaJdxEunN5/XvksFJ2sMBFfq6x0ryhQV/2b/KwFe21cMpmHtPOSij8K99/wSfoEuTObmuMQ==",
      "dev": true,
      "dependencies": {
        "es-errors": "^1.3.0",
        "function-bind": "^1.1.2"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/call-bound": {
      "version": "1.0.4",
      "resolved": "https://registry.npmjs.org/call-bound/-/call-bound-1.0.4.tgz",
      "integrity": "sha512-+ys997U96po4Kx/ABpBCqhA9EuxJaQWDQg7295H4hBphv3IZg0boBKuwYpt4YXp6MZ5AmZQnU/tyMTlRpaSejg==",
      "dev": true,
      "dependencies": {
        "call-bind-apply-helpers": "^1.0.2",
        "get-intrinsic": "^1.3.0"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/callsites": {
      "version": "3.1.0",
      "resolved": "https://registry.npmjs.org/callsites/-/callsites-3.1.0.tgz",
      "integrity": "sha512-P8BjAsXvZS+VIDUI11hHCQEv74YT67YUi5JJFNWIqL235sBmjX4+qx9Muvls5ivyNENctx46xQLQ3aTuE7ssaQ==",
      "dev": true,
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/caniuse-lite": {
      "version": "1.0.30001760",
      "resolved": "https://registry.npmjs.org/caniuse-lite/-/caniuse-lite-1.0.30001760.tgz",
      "integrity": "sha512-7AAMPcueWELt1p3mi13HR/LHH0TJLT11cnwDJEs3xA4+CK/PLKeO9Kl1oru24htkyUKtkGCvAx4ohB0Ttry8Dw==",
      "funding": [
        {
          "type": "opencollective",
          "url": "https://opencollective.com/browserslist"
        },
        {
          "type": "tidelift",
          "url": "https://tidelift.com/funding/github/npm/caniuse-lite"
        },
        {
          "type": "github",
          "url": "https://github.com/sponsors/ai"
        }
      ]
    },
    "node_modules/chalk": {
      "version": "4.1.2",
      "resolved": "https://registry.npmjs.org/chalk/-/chalk-4.1.2.tgz",
      "integrity": "sha512-oKnbhFyRIXpUuez8iBMmyEa4nbj4IOQyuhc/wy9kY7/WVPcwIO9VA668Pu8RkO7+0G76SLROeyw9CpQ061i4mA==",
      "dev": true,
      "dependencies": {
        "ansi-styles": "^4.1.0",
        "supports-color": "^7.1.0"
      },
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/chalk/chalk?sponsor=1"
      }
    },
    "node_modules/client-only": {
      "version": "0.0.1",
      "resolved": "https://registry.npmjs.org/client-only/-/client-only-0.0.1.tgz",
      "integrity": "sha512-IV3Ou0jSMzZrd3pZ48nLkT9DA7Ag1pnPzaiQhpW7c3RbcqqzvzzVu+L8gfqMp/8IM2MQtSiqaCxrrcfu8I8rMA=="
    },
    "node_modules/clsx": {
      "version": "2.1.1",
      "resolved": "https://registry.npmjs.org/clsx/-/clsx-2.1.1.tgz",
      "integrity": "sha512-eYm0QWBtUrBWZWG0d386OGAw16Z995PiOVo2B7bjWSbHedGl5e0ZWaq65kOGgUSNesEIDkB9ISbTg/JK9dhCZA==",
      "license": "MIT",
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/color-convert": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/color-convert/-/color-convert-2.0.1.tgz",
      "integrity": "sha512-RRECPsj7iu/xb5oKYcsFHSppFNnsj/52OVTRKb4zP5onXwVF3zVmmToNcOfGC+CRDpfK/U584fMg38ZHCaElKQ==",
      "dev": true,
      "dependencies": {
        "color-name": "~1.1.4"
      },
      "engines": {
        "node": ">=7.0.0"
      }
    },
    "node_modules/color-name": {
      "version": "1.1.4",
      "resolved": "https://registry.npmjs.org/color-name/-/color-name-1.1.4.tgz",
      "integrity": "sha512-dOy+3AuW3a2wNbZHIuMZpTcgjGuLU/uBL/ubcZF9OXbDo8ff4O8yVp5Bf0efS8uEoYo5q4Fx7dY9OgQGXgAsQA==",
      "dev": true
    },
    "node_modules/concat-map": {
      "version": "0.0.1",
      "resolved": "https://registry.npmjs.org/concat-map/-/concat-map-0.0.1.tgz",
      "integrity": "sha512-/Srv4dswyQNBfohGpz9o6Yb3Gz3SrUDqBH5rTuhGR7ahtlbYKnVxw2bCFMRljaA7EXHaXZ8wsHdodFvbkhKmqg==",
      "dev": true
    },
    "node_modules/convert-source-map": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/convert-source-map/-/convert-source-map-2.0.0.tgz",
      "integrity": "sha512-Kvp459HrV2FEJ1CAsi1Ku+MY3kasH19TFykTz2xWmMeq6bk2NU3XXvfJ+Q61m0xktWwt+1HSYf3JZsTms3aRJg==",
      "dev": true
    },
    "node_modules/cross-spawn": {
      "version": "7.0.6",
      "resolved": "https://registry.npmjs.org/cross-spawn/-/cross-spawn-7.0.6.tgz",
      "integrity": "sha512-uV2QOWP2nWzsy2aMp8aRibhi9dlzF5Hgh5SHaB9OiTGEyDTiJJyx0uy51QXdyWbtAHNua4XJzUKca3OzKUd3vA==",
      "dev": true,
      "dependencies": {
        "path-key": "^3.1.0",
        "shebang-command": "^2.0.0",
        "which": "^2.0.1"
      },
      "engines": {
        "node": ">= 8"
      }
    },
    "node_modules/csstype": {
      "version": "3.2.3",
      "resolved": "https://registry.npmjs.org/csstype/-/csstype-3.2.3.tgz",
      "integrity": "sha512-z1HGKcYy2xA8AGQfwrn0PAy+PB7X/GSj3UVJW9qKyn43xWa+gl5nXmU4qqLMRzWVLFC8KusUX8T/0kCiOYpAIQ==",
      "devOptional": true
    },
    "node_modules/d3-array": {
      "version": "3.2.4",
      "resolved": "https://registry.npmjs.org/d3-array/-/d3-array-3.2.4.tgz",
      "integrity": "sha512-tdQAmyA18i4J7wprpYq8ClcxZy3SC31QMeByyCFyRt7BVHdREQZ5lpzoe5mFEYZUWe+oq8HBvk9JjpibyEV4Jg==",
      "dependencies": {
        "internmap": "1 - 2"
      },
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/d3-color": {
      "version": "3.1.0",
      "resolved": "https://registry.npmjs.org/d3-color/-/d3-color-3.1.0.tgz",
      "integrity": "sha512-zg/chbXyeBtMQ1LbD/WSoW2DpC3I0mpmPdW+ynRTj/x2DAWYrIY7qeZIHidozwV24m4iavr15lNwIwLxRmOxhA==",
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/d3-ease": {
      "version": "3.0.1",
      "resolved": "https://registry.npmjs.org/d3-ease/-/d3-ease-3.0.1.tgz",
      "integrity": "sha512-wR/XK3D3XcLIZwpbvQwQ5fK+8Ykds1ip7A2Txe0yxncXSdq1L9skcG7blcedkOX+ZcgxGAmLX1FrRGbADwzi0w==",
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/d3-format": {
      "version": "3.1.0",
      "resolved": "https://registry.npmjs.org/d3-format/-/d3-format-3.1.0.tgz",
      "integrity": "sha512-YyUI6AEuY/Wpt8KWLgZHsIU86atmikuoOmCfommt0LYHiQSPjvX2AcFc38PX0CBpr2RCyZhjex+NS/LPOv6YqA==",
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/d3-interpolate": {
      "version": "3.0.1",
      "resolved": "https://registry.npmjs.org/d3-interpolate/-/d3-interpolate-3.0.1.tgz",
      "integrity": "sha512-3bYs1rOD33uo8aqJfKP3JWPAibgw8Zm2+L9vBKEHJ2Rg+viTR7o5Mmv5mZcieN+FRYaAOWX5SJATX6k1PWz72g==",
      "dependencies": {
        "d3-color": "1 - 3"
      },
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/d3-path": {
      "version": "3.1.0",
      "resolved": "https://registry.npmjs.org/d3-path/-/d3-path-3.1.0.tgz",
      "integrity": "sha512-p3KP5HCf/bvjBSSKuXid6Zqijx7wIfNW+J/maPs+iwR35at5JCbLUT0LzF1cnjbCHWhqzQTIN2Jpe8pRebIEFQ==",
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/d3-scale": {
      "version": "4.0.2",
      "resolved": "https://registry.npmjs.org/d3-scale/-/d3-scale-4.0.2.tgz",
      "integrity": "sha512-GZW464g1SH7ag3Y7hXjf8RoUuAFIqklOAq3MRl4OaWabTFJY9PN/E1YklhXLh+OQ3fM9yS2nOkCoS+WLZ6kvxQ==",
      "dependencies": {
        "d3-array": "2.10.0 - 3",
        "d3-format": "1 - 3",
        "d3-interpolate": "1.2.0 - 3",
        "d3-time": "2.1.1 - 3",
        "d3-time-format": "2 - 4"
      },
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/d3-shape": {
      "version": "3.2.0",
      "resolved": "https://registry.npmjs.org/d3-shape/-/d3-shape-3.2.0.tgz",
      "integrity": "sha512-SaLBuwGm3MOViRq2ABk3eLoxwZELpH6zhl3FbAoJ7Vm1gofKx6El1Ib5z23NUEhF9AsGl7y+dzLe5Cw2AArGTA==",
      "dependencies": {
        "d3-path": "^3.1.0"
      },
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/d3-time": {
      "version": "3.1.0",
      "resolved": "https://registry.npmjs.org/d3-time/-/d3-time-3.1.0.tgz",
      "integrity": "sha512-VqKjzBLejbSMT4IgbmVgDjpkYrNWUYJnbCGo874u7MMKIWsILRX+OpX/gTk8MqjpT1A/c6HY2dCA77ZN0lkQ2Q==",
      "dependencies": {
        "d3-array": "2 - 3"
      },
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/d3-time-format": {
      "version": "4.1.0",
      "resolved": "https://registry.npmjs.org/d3-time-format/-/d3-time-format-4.1.0.tgz",
      "integrity": "sha512-dJxPBlzC7NugB2PDLwo9Q8JiTR3M3e4/XANkreKSUxF8vvXKqm1Yfq4Q5dl8budlunRVlUUaDUgFt7eA8D6NLg==",
      "dependencies": {
        "d3-time": "1 - 3"
      },
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/d3-timer": {
      "version": "3.0.1",
      "resolved": "https://registry.npmjs.org/d3-timer/-/d3-timer-3.0.1.tgz",
      "integrity": "sha512-ndfJ/JxxMd3nw31uyKoY2naivF+r29V+Lc0svZxe1JvvIRmi8hUsrMvdOwgS1o6uBHmiz91geQ0ylPP0aj1VUA==",
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/damerau-levenshtein": {
      "version": "1.0.8",
      "resolved": "https://registry.npmjs.org/damerau-levenshtein/-/damerau-levenshtein-1.0.8.tgz",
      "integrity": "sha512-sdQSFB7+llfUcQHUQO3+B8ERRj0Oa4w9POWMI/puGtuf7gFywGmkaLCElnudfTiKZV+NvHqL0ifzdrI8Ro7ESA==",
      "dev": true
    },
    "node_modules/data-view-buffer": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/data-view-buffer/-/data-view-buffer-1.0.2.tgz",
      "integrity": "sha512-EmKO5V3OLXh1rtK2wgXRansaK1/mtVdTUEiEI0W8RkvgT05kfxaH29PliLnpLP73yYO6142Q72QNa8Wx/A5CqQ==",
      "dev": true,
      "dependencies": {
        "call-bound": "^1.0.3",
        "es-errors": "^1.3.0",
        "is-data-view": "^1.0.2"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/data-view-byte-length": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/data-view-byte-length/-/data-view-byte-length-1.0.2.tgz",
      "integrity": "sha512-tuhGbE6CfTM9+5ANGf+oQb72Ky/0+s3xKUpHvShfiz2RxMFgFPjsXuRLBVMtvMs15awe45SRb83D6wH4ew6wlQ==",
      "dev": true,
      "dependencies": {
        "call-bound": "^1.0.3",
        "es-errors": "^1.3.0",
        "is-data-view": "^1.0.2"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/inspect-js"
      }
    },
    "node_modules/data-view-byte-offset": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/data-view-byte-offset/-/data-view-byte-offset-1.0.1.tgz",
      "integrity": "sha512-BS8PfmtDGnrgYdOonGZQdLZslWIeCGFP9tpan0hi1Co2Zr2NKADsvGYA8XxuG/4UWgJ6Cjtv+YJnB6MM69QGlQ==",
      "dev": true,
      "dependencies": {
        "call-bound": "^1.0.2",
        "es-errors": "^1.3.0",
        "is-data-view": "^1.0.1"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/debug": {
      "version": "4.4.3",
      "resolved": "https://registry.npmjs.org/debug/-/debug-4.4.3.tgz",
      "integrity": "sha512-RGwwWnwQvkVfavKVt22FGLw+xYSdzARwm0ru6DhTVA3umU5hZc28V3kO4stgYryrTlLpuvgI9GiijltAjNbcqA==",
      "dev": true,
      "dependencies": {
        "ms": "^2.1.3"
      },
      "engines": {
        "node": ">=6.0"
      },
      "peerDependenciesMeta": {
        "supports-color": {
          "optional": true
        }
      }
    },
    "node_modules/decimal.js-light": {
      "version": "2.5.1",
      "resolved": "https://registry.npmjs.org/decimal.js-light/-/decimal.js-light-2.5.1.tgz",
      "integrity": "sha512-qIMFpTMZmny+MMIitAB6D7iVPEorVw6YQRWkvarTkT4tBeSLLiHzcwj6q0MmYSFCiVpiqPJTJEYIrpcPzVEIvg=="
    },
    "node_modules/deep-is": {
      "version": "0.1.4",
      "resolved": "https://registry.npmjs.org/deep-is/-/deep-is-0.1.4.tgz",
      "integrity": "sha512-oIPzksmTg4/MriiaYGO+okXDT7ztn/w3Eptv/+gSIdMdKsJo0u4CfYNFJPy+4SKMuCqGw2wxnA+URMg3t8a/bQ==",
      "dev": true
    },
    "node_modules/define-data-property": {
      "version": "1.1.4",
      "resolved": "https://registry.npmjs.org/define-data-property/-/define-data-property-1.1.4.tgz",
      "integrity": "sha512-rBMvIzlpA8v6E+SJZoo++HAYqsLrkg7MSfIinMPFhmkorw7X+dOXVJQs+QT69zGkzMyfDnIMN2Wid1+NbL3T+A==",
      "dev": true,
      "dependencies": {
        "es-define-property": "^1.0.0",
        "es-errors": "^1.3.0",
        "gopd": "^1.0.1"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/define-properties": {
      "version": "1.2.1",
      "resolved": "https://registry.npmjs.org/define-properties/-/define-properties-1.2.1.tgz",
      "integrity": "sha512-8QmQKqEASLd5nx0U1B1okLElbUuuttJ/AnYmRXbbbGDWh6uS208EjD4Xqq/I9wK7u0v6O08XhTWnt5XtEbR6Dg==",
      "dev": true,
      "dependencies": {
        "define-data-property": "^1.0.1",
        "has-property-descriptors": "^1.0.0",
        "object-keys": "^1.1.1"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/detect-libc": {
      "version": "2.1.2",
      "resolved": "https://registry.npmjs.org/detect-libc/-/detect-libc-2.1.2.tgz",
      "integrity": "sha512-Btj2BOOO83o3WyH59e8MgXsxEQVcarkUOpEYrubB0urwnN10yQ364rsiByU11nZlqWYZm05i/of7io4mzihBtQ==",
      "devOptional": true,
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/doctrine": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/doctrine/-/doctrine-2.1.0.tgz",
      "integrity": "sha512-35mSku4ZXK0vfCuHEDAwt55dg2jNajHZ1odvF+8SSr82EsZY4QmXfuWso8oEd8zRhVObSN18aM0CjSdoBX7zIw==",
      "dev": true,
      "dependencies": {
        "esutils": "^2.0.2"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/dunder-proto": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/dunder-proto/-/dunder-proto-1.0.1.tgz",
      "integrity": "sha512-KIN/nDJBQRcXw0MLVhZE9iQHmG68qAVIBg9CqmUYjmQIhgij9U5MFvrqkUL5FbtyyzZuOeOt0zdeRe4UY7ct+A==",
      "dev": true,
      "dependencies": {
        "call-bind-apply-helpers": "^1.0.1",
        "es-errors": "^1.3.0",
        "gopd": "^1.2.0"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/electron-to-chromium": {
      "version": "1.5.267",
      "resolved": "https://registry.npmjs.org/electron-to-chromium/-/electron-to-chromium-1.5.267.tgz",
      "integrity": "sha512-0Drusm6MVRXSOJpGbaSVgcQsuB4hEkMpHXaVstcPmhu5LIedxs1xNK/nIxmQIU/RPC0+1/o0AVZfBTkTNJOdUw==",
      "dev": true
    },
    "node_modules/emoji-regex": {
      "version": "9.2.2",
      "resolved": "https://registry.npmjs.org/emoji-regex/-/emoji-regex-9.2.2.tgz",
      "integrity": "sha512-L18DaJsXSUk2+42pv8mLs5jJT2hqFkFE4j21wOmgbUqsZ2hL72NsUU785g9RXgo3s0ZNgVl42TiHp3ZtOv/Vyg==",
      "dev": true
    },
    "node_modules/enhanced-resolve": {
      "version": "5.18.4",
      "resolved": "https://registry.npmjs.org/enhanced-resolve/-/enhanced-resolve-5.18.4.tgz",
      "integrity": "sha512-LgQMM4WXU3QI+SYgEc2liRgznaD5ojbmY3sb8LxyguVkIg5FxdpTkvk72te2R38/TGKxH634oLxXRGY6d7AP+Q==",
      "dev": true,
      "dependencies": {
        "graceful-fs": "^4.2.4",
        "tapable": "^2.2.0"
      },
      "engines": {
        "node": ">=10.13.0"
      }
    },
    "node_modules/es-abstract": {
      "version": "1.24.1",
      "resolved": "https://registry.npmjs.org/es-abstract/-/es-abstract-1.24.1.tgz",
      "integrity": "sha512-zHXBLhP+QehSSbsS9Pt23Gg964240DPd6QCf8WpkqEXxQ7fhdZzYsocOr5u7apWonsS5EjZDmTF+/slGMyasvw==",
      "dev": true,
      "dependencies": {
        "array-buffer-byte-length": "^1.0.2",
        "arraybuffer.prototype.slice": "^1.0.4",
        "available-typed-arrays": "^1.0.7",
        "call-bind": "^1.0.8",
        "call-bound": "^1.0.4",
        "data-view-buffer": "^1.0.2",
        "data-view-byte-length": "^1.0.2",
        "data-view-byte-offset": "^1.0.1",
        "es-define-property": "^1.0.1",
        "es-errors": "^1.3.0",
        "es-object-atoms": "^1.1.1",
        "es-set-tostringtag": "^2.1.0",
        "es-to-primitive": "^1.3.0",
        "function.prototype.name": "^1.1.8",
        "get-intrinsic": "^1.3.0",
        "get-proto": "^1.0.1",
        "get-symbol-description": "^1.1.0",
        "globalthis": "^1.0.4",
        "gopd": "^1.2.0",
        "has-property-descriptors": "^1.0.2",
        "has-proto": "^1.2.0",
        "has-symbols": "^1.1.0",
        "hasown": "^2.0.2",
        "internal-slot": "^1.1.0",
        "is-array-buffer": "^3.0.5",
        "is-callable": "^1.2.7",
        "is-data-view": "^1.0.2",
        "is-negative-zero": "^2.0.3",
        "is-regex": "^1.2.1",
        "is-set": "^2.0.3",
        "is-shared-array-buffer": "^1.0.4",
        "is-string": "^1.1.1",
        "is-typed-array": "^1.1.15",
        "is-weakref": "^1.1.1",
        "math-intrinsics": "^1.1.0",
        "object-inspect": "^1.13.4",
        "object-keys": "^1.1.1",
        "object.assign": "^4.1.7",
        "own-keys": "^1.0.1",
        "regexp.prototype.flags": "^1.5.4",
        "safe-array-concat": "^1.1.3",
        "safe-push-apply": "^1.0.0",
        "safe-regex-test": "^1.1.0",
        "set-proto": "^1.0.0",
        "stop-iteration-iterator": "^1.1.0",
        "string.prototype.trim": "^1.2.10",
        "string.prototype.trimend": "^1.0.9",
        "string.prototype.trimstart": "^1.0.8",
        "typed-array-buffer": "^1.0.3",
        "typed-array-byte-length": "^1.0.3",
        "typed-array-byte-offset": "^1.0.4",
        "typed-array-length": "^1.0.7",
        "unbox-primitive": "^1.1.0",
        "which-typed-array": "^1.1.19"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/es-define-property": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/es-define-property/-/es-define-property-1.0.1.tgz",
      "integrity": "sha512-e3nRfgfUZ4rNGL232gUgX06QNyyez04KdjFrF+LTRoOXmrOgFKDg4BCdsjW8EnT69eqdYGmRpJwiPVYNrCaW3g==",
      "dev": true,
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/es-errors": {
      "version": "1.3.0",
      "resolved": "https://registry.npmjs.org/es-errors/-/es-errors-1.3.0.tgz",
      "integrity": "sha512-Zf5H2Kxt2xjTvbJvP2ZWLEICxA6j+hAmMzIlypy4xcBg1vKVnx89Wy0GbS+kf5cwCVFFzdCFh2XSCFNULS6csw==",
      "dev": true,
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/es-iterator-helpers": {
      "version": "1.2.2",
      "resolved": "https://registry.npmjs.org/es-iterator-helpers/-/es-iterator-helpers-1.2.2.tgz",
      "integrity": "sha512-BrUQ0cPTB/IwXj23HtwHjS9n7O4h9FX94b4xc5zlTHxeLgTAdzYUDyy6KdExAl9lbN5rtfe44xpjpmj9grxs5w==",
      "dev": true,
      "dependencies": {
        "call-bind": "^1.0.8",
        "call-bound": "^1.0.4",
        "define-properties": "^1.2.1",
        "es-abstract": "^1.24.1",
        "es-errors": "^1.3.0",
        "es-set-tostringtag": "^2.1.0",
        "function-bind": "^1.1.2",
        "get-intrinsic": "^1.3.0",
        "globalthis": "^1.0.4",
        "gopd": "^1.2.0",
        "has-property-descriptors": "^1.0.2",
        "has-proto": "^1.2.0",
        "has-symbols": "^1.1.0",
        "internal-slot": "^1.1.0",
        "iterator.prototype": "^1.1.5",
        "safe-array-concat": "^1.1.3"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/es-object-atoms": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/es-object-atoms/-/es-object-atoms-1.1.1.tgz",
      "integrity": "sha512-FGgH2h8zKNim9ljj7dankFPcICIK9Cp5bm+c2gQSYePhpaG5+esrLODihIorn+Pe6FGJzWhXQotPv73jTaldXA==",
      "dev": true,
      "dependencies": {
        "es-errors": "^1.3.0"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/es-set-tostringtag": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/es-set-tostringtag/-/es-set-tostringtag-2.1.0.tgz",
      "integrity": "sha512-j6vWzfrGVfyXxge+O0x5sh6cvxAog0a/4Rdd2K36zCMV5eJ+/+tOAngRO8cODMNWbVRdVlmGZQL2YS3yR8bIUA==",
      "dev": true,
      "dependencies": {
        "es-errors": "^1.3.0",
        "get-intrinsic": "^1.2.6",
        "has-tostringtag": "^1.0.2",
        "hasown": "^2.0.2"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/es-shim-unscopables": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/es-shim-unscopables/-/es-shim-unscopables-1.1.0.tgz",
      "integrity": "sha512-d9T8ucsEhh8Bi1woXCf+TIKDIROLG5WCkxg8geBCbvk22kzwC5G2OnXVMO6FUsvQlgUUXQ2itephWDLqDzbeCw==",
      "dev": true,
      "dependencies": {
        "hasown": "^2.0.2"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/es-to-primitive": {
      "version": "1.3.0",
      "resolved": "https://registry.npmjs.org/es-to-primitive/-/es-to-primitive-1.3.0.tgz",
      "integrity": "sha512-w+5mJ3GuFL+NjVtJlvydShqE1eN3h3PbI7/5LAsYJP/2qtuMXjfL2LpHSRqo4b4eSF5K/DH1JXKUAHSB2UW50g==",
      "dev": true,
      "dependencies": {
        "is-callable": "^1.2.7",
        "is-date-object": "^1.0.5",
        "is-symbol": "^1.0.4"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/es-toolkit": {
      "version": "1.43.0",
      "resolved": "https://registry.npmjs.org/es-toolkit/-/es-toolkit-1.43.0.tgz",
      "integrity": "sha512-SKCT8AsWvYzBBuUqMk4NPwFlSdqLpJwmy6AP322ERn8W2YLIB6JBXnwMI2Qsh2gfphT3q7EKAxKb23cvFHFwKA=="
    },
    "node_modules/escalade": {
      "version": "3.2.0",
      "resolved": "https://registry.npmjs.org/escalade/-/escalade-3.2.0.tgz",
      "integrity": "sha512-WUj2qlxaQtO4g6Pq5c29GTcWGDyd8itL8zTlipgECz3JesAiiOKotd8JU6otB3PACgG6xkJUyVhboMS+bje/jA==",
      "dev": true,
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/escape-string-regexp": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/escape-string-regexp/-/escape-string-regexp-4.0.0.tgz",
      "integrity": "sha512-TtpcNJ3XAzx3Gq8sWRzJaVajRs0uVxA2YAkdb1jm2YkPz4G6egUFAyA3n5vtEIZefPk5Wa4UXbKuS5fKkJWdgA==",
      "dev": true,
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/eslint": {
      "version": "9.39.2",
      "resolved": "https://registry.npmjs.org/eslint/-/eslint-9.39.2.tgz",
      "integrity": "sha512-LEyamqS7W5HB3ujJyvi0HQK/dtVINZvd5mAAp9eT5S/ujByGjiZLCzPcHVzuXbpJDJF/cxwHlfceVUDZ2lnSTw==",
      "dev": true,
      "dependencies": {
        "@eslint-community/eslint-utils": "^4.8.0",
        "@eslint-community/regexpp": "^4.12.1",
        "@eslint/config-array": "^0.21.1",
        "@eslint/config-helpers": "^0.4.2",
        "@eslint/core": "^0.17.0",
        "@eslint/eslintrc": "^3.3.1",
        "@eslint/js": "9.39.2",
        "@eslint/plugin-kit": "^0.4.1",
        "@humanfs/node": "^0.16.6",
        "@humanwhocodes/module-importer": "^1.0.1",
        "@humanwhocodes/retry": "^0.4.2",
        "@types/estree": "^1.0.6",
        "ajv": "^6.12.4",
        "chalk": "^4.0.0",
        "cross-spawn": "^7.0.6",
        "debug": "^4.3.2",
        "escape-string-regexp": "^4.0.0",
        "eslint-scope": "^8.4.0",
        "eslint-visitor-keys": "^4.2.1",
        "espree": "^10.4.0",
        "esquery": "^1.5.0",
        "esutils": "^2.0.2",
        "fast-deep-equal": "^3.1.3",
        "file-entry-cache": "^8.0.0",
        "find-up": "^5.0.0",
        "glob-parent": "^6.0.2",
        "ignore": "^5.2.0",
        "imurmurhash": "^0.1.4",
        "is-glob": "^4.0.0",
        "json-stable-stringify-without-jsonify": "^1.0.1",
        "lodash.merge": "^4.6.2",
        "minimatch": "^3.1.2",
        "natural-compare": "^1.4.0",
        "optionator": "^0.9.3"
      },
      "bin": {
        "eslint": "bin/eslint.js"
      },
      "engines": {
        "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
      },
      "funding": {
        "url": "https://eslint.org/donate"
      },
      "peerDependencies": {
        "jiti": "*"
      },
      "peerDependenciesMeta": {
        "jiti": {
          "optional": true
        }
      }
    },
    "node_modules/eslint-config-next": {
      "version": "16.0.10",
      "resolved": "https://registry.npmjs.org/eslint-config-next/-/eslint-config-next-16.0.10.tgz",
      "integrity": "sha512-BxouZUm0I45K4yjOOIzj24nTi0H2cGo0y7xUmk+Po/PYtJXFBYVDS1BguE7t28efXjKdcN0tmiLivxQy//SsZg==",
      "dev": true,
      "dependencies": {
        "@next/eslint-plugin-next": "16.0.10",
        "eslint-import-resolver-node": "^0.3.6",
        "eslint-import-resolver-typescript": "^3.5.2",
        "eslint-plugin-import": "^2.32.0",
        "eslint-plugin-jsx-a11y": "^6.10.0",
        "eslint-plugin-react": "^7.37.0",
        "eslint-plugin-react-hooks": "^7.0.0",
        "globals": "16.4.0",
        "typescript-eslint": "^8.46.0"
      },
      "peerDependencies": {
        "eslint": ">=9.0.0",
        "typescript": ">=3.3.1"
      },
      "peerDependenciesMeta": {
        "typescript": {
          "optional": true
        }
      }
    },
    "node_modules/eslint-config-next/node_modules/globals": {
      "version": "16.4.0",
      "resolved": "https://registry.npmjs.org/globals/-/globals-16.4.0.tgz",
      "integrity": "sha512-ob/2LcVVaVGCYN+r14cnwnoDPUufjiYgSqRhiFD0Q1iI4Odora5RE8Iv1D24hAz5oMophRGkGz+yuvQmmUMnMw==",
      "dev": true,
      "engines": {
        "node": ">=18"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/eslint-import-resolver-node": {
      "version": "0.3.9",
      "resolved": "https://registry.npmjs.org/eslint-import-resolver-node/-/eslint-import-resolver-node-0.3.9.tgz",
      "integrity": "sha512-WFj2isz22JahUv+B788TlO3N6zL3nNJGU8CcZbPZvVEkBPaJdCV4vy5wyghty5ROFbCRnm132v8BScu5/1BQ8g==",
      "dev": true,
      "dependencies": {
        "debug": "^3.2.7",
        "is-core-module": "^2.13.0",
        "resolve": "^1.22.4"
      }
    },
    "node_modules/eslint-import-resolver-node/node_modules/debug": {
      "version": "3.2.7",
      "resolved": "https://registry.npmjs.org/debug/-/debug-3.2.7.tgz",
      "integrity": "sha512-CFjzYYAi4ThfiQvizrFQevTTXHtnCqWfe7x1AhgEscTz6ZbLbfoLRLPugTQyBth6f8ZERVUSyWHFD/7Wu4t1XQ==",
      "dev": true,
      "dependencies": {
        "ms": "^2.1.1"
      }
    },
    "node_modules/eslint-import-resolver-typescript": {
      "version": "3.10.1",
      "resolved": "https://registry.npmjs.org/eslint-import-resolver-typescript/-/eslint-import-resolver-typescript-3.10.1.tgz",
      "integrity": "sha512-A1rHYb06zjMGAxdLSkN2fXPBwuSaQ0iO5M/hdyS0Ajj1VBaRp0sPD3dn1FhME3c/JluGFbwSxyCfqdSbtQLAHQ==",
      "dev": true,
      "dependencies": {
        "@nolyfill/is-core-module": "1.0.39",
        "debug": "^4.4.0",
        "get-tsconfig": "^4.10.0",
        "is-bun-module": "^2.0.0",
        "stable-hash": "^0.0.5",
        "tinyglobby": "^0.2.13",
        "unrs-resolver": "^1.6.2"
      },
      "engines": {
        "node": "^14.18.0 || >=16.0.0"
      },
      "funding": {
        "url": "https://opencollective.com/eslint-import-resolver-typescript"
      },
      "peerDependencies": {
        "eslint": "*",
        "eslint-plugin-import": "*",
        "eslint-plugin-import-x": "*"
      },
      "peerDependenciesMeta": {
        "eslint-plugin-import": {
          "optional": true
        },
        "eslint-plugin-import-x": {
          "optional": true
        }
      }
    },
    "node_modules/eslint-module-utils": {
      "version": "2.12.1",
      "resolved": "https://registry.npmjs.org/eslint-module-utils/-/eslint-module-utils-2.12.1.tgz",
      "integrity": "sha512-L8jSWTze7K2mTg0vos/RuLRS5soomksDPoJLXIslC7c8Wmut3bx7CPpJijDcBZtxQ5lrbUdM+s0OlNbz0DCDNw==",
      "dev": true,
      "dependencies": {
        "debug": "^3.2.7"
      },
      "engines": {
        "node": ">=4"
      },
      "peerDependenciesMeta": {
        "eslint": {
          "optional": true
        }
      }
    },
    "node_modules/eslint-module-utils/node_modules/debug": {
      "version": "3.2.7",
      "resolved": "https://registry.npmjs.org/debug/-/debug-3.2.7.tgz",
      "integrity": "sha512-CFjzYYAi4ThfiQvizrFQevTTXHtnCqWfe7x1AhgEscTz6ZbLbfoLRLPugTQyBth6f8ZERVUSyWHFD/7Wu4t1XQ==",
      "dev": true,
      "dependencies": {
        "ms": "^2.1.1"
      }
    },
    "node_modules/eslint-plugin-import": {
      "version": "2.32.0",
      "resolved": "https://registry.npmjs.org/eslint-plugin-import/-/eslint-plugin-import-2.32.0.tgz",
      "integrity": "sha512-whOE1HFo/qJDyX4SnXzP4N6zOWn79WhnCUY/iDR0mPfQZO8wcYE4JClzI2oZrhBnnMUCBCHZhO6VQyoBU95mZA==",
      "dev": true,
      "dependencies": {
        "@rtsao/scc": "^1.1.0",
        "array-includes": "^3.1.9",
        "array.prototype.findlastindex": "^1.2.6",
        "array.prototype.flat": "^1.3.3",
        "array.prototype.flatmap": "^1.3.3",
        "debug": "^3.2.7",
        "doctrine": "^2.1.0",
        "eslint-import-resolver-node": "^0.3.9",
        "eslint-module-utils": "^2.12.1",
        "hasown": "^2.0.2",
        "is-core-module": "^2.16.1",
        "is-glob": "^4.0.3",
        "minimatch": "^3.1.2",
        "object.fromentries": "^2.0.8",
        "object.groupby": "^1.0.3",
        "object.values": "^1.2.1",
        "semver": "^6.3.1",
        "string.prototype.trimend": "^1.0.9",
        "tsconfig-paths": "^3.15.0"
      },
      "engines": {
        "node": ">=4"
      },
      "peerDependencies": {
        "eslint": "^2 || ^3 || ^4 || ^5 || ^6 || ^7.2.0 || ^8 || ^9"
      }
    },
    "node_modules/eslint-plugin-import/node_modules/debug": {
      "version": "3.2.7",
      "resolved": "https://registry.npmjs.org/debug/-/debug-3.2.7.tgz",
      "integrity": "sha512-CFjzYYAi4ThfiQvizrFQevTTXHtnCqWfe7x1AhgEscTz6ZbLbfoLRLPugTQyBth6f8ZERVUSyWHFD/7Wu4t1XQ==",
      "dev": true,
      "dependencies": {
        "ms": "^2.1.1"
      }
    },
    "node_modules/eslint-plugin-jsx-a11y": {
      "version": "6.10.2",
      "resolved": "https://registry.npmjs.org/eslint-plugin-jsx-a11y/-/eslint-plugin-jsx-a11y-6.10.2.tgz",
      "integrity": "sha512-scB3nz4WmG75pV8+3eRUQOHZlNSUhFNq37xnpgRkCCELU3XMvXAxLk1eqWWyE22Ki4Q01Fnsw9BA3cJHDPgn2Q==",
      "dev": true,
      "dependencies": {
        "aria-query": "^5.3.2",
        "array-includes": "^3.1.8",
        "array.prototype.flatmap": "^1.3.2",
        "ast-types-flow": "^0.0.8",
        "axe-core": "^4.10.0",
        "axobject-query": "^4.1.0",
        "damerau-levenshtein": "^1.0.8",
        "emoji-regex": "^9.2.2",
        "hasown": "^2.0.2",
        "jsx-ast-utils": "^3.3.5",
        "language-tags": "^1.0.9",
        "minimatch": "^3.1.2",
        "object.fromentries": "^2.0.8",
        "safe-regex-test": "^1.0.3",
        "string.prototype.includes": "^2.0.1"
      },
      "engines": {
        "node": ">=4.0"
      },
      "peerDependencies": {
        "eslint": "^3 || ^4 || ^5 || ^6 || ^7 || ^8 || ^9"
      }
    },
    "node_modules/eslint-plugin-react": {
      "version": "7.37.5",
      "resolved": "https://registry.npmjs.org/eslint-plugin-react/-/eslint-plugin-react-7.37.5.tgz",
      "integrity": "sha512-Qteup0SqU15kdocexFNAJMvCJEfa2xUKNV4CC1xsVMrIIqEy3SQ/rqyxCWNzfrd3/ldy6HMlD2e0JDVpDg2qIA==",
      "dev": true,
      "dependencies": {
        "array-includes": "^3.1.8",
        "array.prototype.findlast": "^1.2.5",
        "array.prototype.flatmap": "^1.3.3",
        "array.prototype.tosorted": "^1.1.4",
        "doctrine": "^2.1.0",
        "es-iterator-helpers": "^1.2.1",
        "estraverse": "^5.3.0",
        "hasown": "^2.0.2",
        "jsx-ast-utils": "^2.4.1 || ^3.0.0",
        "minimatch": "^3.1.2",
        "object.entries": "^1.1.9",
        "object.fromentries": "^2.0.8",
        "object.values": "^1.2.1",
        "prop-types": "^15.8.1",
        "resolve": "^2.0.0-next.5",
        "semver": "^6.3.1",
        "string.prototype.matchall": "^4.0.12",
        "string.prototype.repeat": "^1.0.0"
      },
      "engines": {
        "node": ">=4"
      },
      "peerDependencies": {
        "eslint": "^3 || ^4 || ^5 || ^6 || ^7 || ^8 || ^9.7"
      }
    },
    "node_modules/eslint-plugin-react-hooks": {
      "version": "7.0.1",
      "resolved": "https://registry.npmjs.org/eslint-plugin-react-hooks/-/eslint-plugin-react-hooks-7.0.1.tgz",
      "integrity": "sha512-O0d0m04evaNzEPoSW+59Mezf8Qt0InfgGIBJnpC0h3NH/WjUAR7BIKUfysC6todmtiZ/A0oUVS8Gce0WhBrHsA==",
      "dev": true,
      "dependencies": {
        "@babel/core": "^7.24.4",
        "@babel/parser": "^7.24.4",
        "hermes-parser": "^0.25.1",
        "zod": "^3.25.0 || ^4.0.0",
        "zod-validation-error": "^3.5.0 || ^4.0.0"
      },
      "engines": {
        "node": ">=18"
      },
      "peerDependencies": {
        "eslint": "^3.0.0 || ^4.0.0 || ^5.0.0 || ^6.0.0 || ^7.0.0 || ^8.0.0-0 || ^9.0.0"
      }
    },
    "node_modules/eslint-plugin-react/node_modules/resolve": {
      "version": "2.0.0-next.5",
      "resolved": "https://registry.npmjs.org/resolve/-/resolve-2.0.0-next.5.tgz",
      "integrity": "sha512-U7WjGVG9sH8tvjW5SmGbQuui75FiyjAX72HX15DwBBwF9dNiQZRQAg9nnPhYy+TUnE0+VcrttuvNI8oSxZcocA==",
      "dev": true,
      "dependencies": {
        "is-core-module": "^2.13.0",
        "path-parse": "^1.0.7",
        "supports-preserve-symlinks-flag": "^1.0.0"
      },
      "bin": {
        "resolve": "bin/resolve"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/eslint-scope": {
      "version": "8.4.0",
      "resolved": "https://registry.npmjs.org/eslint-scope/-/eslint-scope-8.4.0.tgz",
      "integrity": "sha512-sNXOfKCn74rt8RICKMvJS7XKV/Xk9kA7DyJr8mJik3S7Cwgy3qlkkmyS2uQB3jiJg6VNdZd/pDBJu0nvG2NlTg==",
      "dev": true,
      "dependencies": {
        "esrecurse": "^4.3.0",
        "estraverse": "^5.2.0"
      },
      "engines": {
        "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
      },
      "funding": {
        "url": "https://opencollective.com/eslint"
      }
    },
    "node_modules/eslint-visitor-keys": {
      "version": "4.2.1",
      "resolved": "https://registry.npmjs.org/eslint-visitor-keys/-/eslint-visitor-keys-4.2.1.tgz",
      "integrity": "sha512-Uhdk5sfqcee/9H/rCOJikYz67o0a2Tw2hGRPOG2Y1R2dg7brRe1uG0yaNQDHu+TO/uQPF/5eCapvYSmHUjt7JQ==",
      "dev": true,
      "engines": {
        "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
      },
      "funding": {
        "url": "https://opencollective.com/eslint"
      }
    },
    "node_modules/espree": {
      "version": "10.4.0",
      "resolved": "https://registry.npmjs.org/espree/-/espree-10.4.0.tgz",
      "integrity": "sha512-j6PAQ2uUr79PZhBjP5C5fhl8e39FmRnOjsD5lGnWrFU8i2G776tBK7+nP8KuQUTTyAZUwfQqXAgrVH5MbH9CYQ==",
      "dev": true,
      "dependencies": {
        "acorn": "^8.15.0",
        "acorn-jsx": "^5.3.2",
        "eslint-visitor-keys": "^4.2.1"
      },
      "engines": {
        "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
      },
      "funding": {
        "url": "https://opencollective.com/eslint"
      }
    },
    "node_modules/esquery": {
      "version": "1.6.0",
      "resolved": "https://registry.npmjs.org/esquery/-/esquery-1.6.0.tgz",
      "integrity": "sha512-ca9pw9fomFcKPvFLXhBKUK90ZvGibiGOvRJNbjljY7s7uq/5YO4BOzcYtJqExdx99rF6aAcnRxHmcUHcz6sQsg==",
      "dev": true,
      "dependencies": {
        "estraverse": "^5.1.0"
      },
      "engines": {
        "node": ">=0.10"
      }
    },
    "node_modules/esrecurse": {
      "version": "4.3.0",
      "resolved": "https://registry.npmjs.org/esrecurse/-/esrecurse-4.3.0.tgz",
      "integrity": "sha512-KmfKL3b6G+RXvP8N1vr3Tq1kL/oCFgn2NYXEtqP8/L3pKapUA4G8cFVaoF3SU323CD4XypR/ffioHmkti6/Tag==",
      "dev": true,
      "dependencies": {
        "estraverse": "^5.2.0"
      },
      "engines": {
        "node": ">=4.0"
      }
    },
    "node_modules/estraverse": {
      "version": "5.3.0",
      "resolved": "https://registry.npmjs.org/estraverse/-/estraverse-5.3.0.tgz",
      "integrity": "sha512-MMdARuVEQziNTeJD8DgMqmhwR11BRQ/cBP+pLtYdSTnf3MIO8fFeiINEbX36ZdNlfU/7A9f3gUw49B3oQsvwBA==",
      "dev": true,
      "engines": {
        "node": ">=4.0"
      }
    },
    "node_modules/esutils": {
      "version": "2.0.3",
      "resolved": "https://registry.npmjs.org/esutils/-/esutils-2.0.3.tgz",
      "integrity": "sha512-kVscqXk4OCp68SZ0dkgEKVi6/8ij300KBWTJq32P/dYeWTSwK41WyTxalN1eRmA5Z9UU/LX9D7FWSmV9SAYx6g==",
      "dev": true,
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/eventemitter3": {
      "version": "5.0.1",
      "resolved": "https://registry.npmjs.org/eventemitter3/-/eventemitter3-5.0.1.tgz",
      "integrity": "sha512-GWkBvjiSZK87ELrYOSESUYeVIc9mvLLf/nXalMOS5dYrgZq9o5OVkbZAVM06CVxYsCwH9BDZFPlQTlPA1j4ahA=="
    },
    "node_modules/fast-deep-equal": {
      "version": "3.1.3",
      "resolved": "https://registry.npmjs.org/fast-deep-equal/-/fast-deep-equal-3.1.3.tgz",
      "integrity": "sha512-f3qQ9oQy9j2AhBe/H9VC91wLmKBCCU/gDOnKNAYG5hswO7BLKj09Hc5HYNz9cGI++xlpDCIgDaitVs03ATR84Q==",
      "dev": true
    },
    "node_modules/fast-glob": {
      "version": "3.3.1",
      "resolved": "https://registry.npmjs.org/fast-glob/-/fast-glob-3.3.1.tgz",
      "integrity": "sha512-kNFPyjhh5cKjrUltxs+wFx+ZkbRaxxmZ+X0ZU31SOsxCEtP9VPgtq2teZw1DebupL5GmDaNQ6yKMMVcM41iqDg==",
      "dev": true,
      "dependencies": {
        "@nodelib/fs.stat": "^2.0.2",
        "@nodelib/fs.walk": "^1.2.3",
        "glob-parent": "^5.1.2",
        "merge2": "^1.3.0",
        "micromatch": "^4.0.4"
      },
      "engines": {
        "node": ">=8.6.0"
      }
    },
    "node_modules/fast-glob/node_modules/glob-parent": {
      "version": "5.1.2",
      "resolved": "https://registry.npmjs.org/glob-parent/-/glob-parent-5.1.2.tgz",
      "integrity": "sha512-AOIgSQCepiJYwP3ARnGx+5VnTu2HBYdzbGP45eLw1vr3zB3vZLeyed1sC9hnbcOc9/SrMyM5RPQrkGz4aS9Zow==",
      "dev": true,
      "dependencies": {
        "is-glob": "^4.0.1"
      },
      "engines": {
        "node": ">= 6"
      }
    },
    "node_modules/fast-json-stable-stringify": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/fast-json-stable-stringify/-/fast-json-stable-stringify-2.1.0.tgz",
      "integrity": "sha512-lhd/wF+Lk98HZoTCtlVraHtfh5XYijIjalXck7saUtuanSDyLMxnHhSXEDJqHxD7msR8D0uCmqlkwjCV8xvwHw==",
      "dev": true
    },
    "node_modules/fast-levenshtein": {
      "version": "2.0.6",
      "resolved": "https://registry.npmjs.org/fast-levenshtein/-/fast-levenshtein-2.0.6.tgz",
      "integrity": "sha512-DCXu6Ifhqcks7TZKY3Hxp3y6qphY5SJZmrWMDrKcERSOXWQdMhU9Ig/PYrzyw/ul9jOIyh0N4M0tbC5hodg8dw==",
      "dev": true
    },
    "node_modules/fastq": {
      "version": "1.19.1",
      "resolved": "https://registry.npmjs.org/fastq/-/fastq-1.19.1.tgz",
      "integrity": "sha512-GwLTyxkCXjXbxqIhTsMI2Nui8huMPtnxg7krajPJAjnEG/iiOS7i+zCtWGZR9G0NBKbXKh6X9m9UIsYX/N6vvQ==",
      "dev": true,
      "dependencies": {
        "reusify": "^1.0.4"
      }
    },
    "node_modules/file-entry-cache": {
      "version": "8.0.0",
      "resolved": "https://registry.npmjs.org/file-entry-cache/-/file-entry-cache-8.0.0.tgz",
      "integrity": "sha512-XXTUwCvisa5oacNGRP9SfNtYBNAMi+RPwBFmblZEF7N7swHYQS6/Zfk7SRwx4D5j3CH211YNRco1DEMNVfZCnQ==",
      "dev": true,
      "dependencies": {
        "flat-cache": "^4.0.0"
      },
      "engines": {
        "node": ">=16.0.0"
      }
    },
    "node_modules/fill-range": {
      "version": "7.1.1",
      "resolved": "https://registry.npmjs.org/fill-range/-/fill-range-7.1.1.tgz",
      "integrity": "sha512-YsGpe3WHLK8ZYi4tWDg2Jy3ebRz2rXowDxnld4bkQB00cc/1Zw9AWnC0i9ztDJitivtQvaI9KaLyKrc+hBW0yg==",
      "dev": true,
      "dependencies": {
        "to-regex-range": "^5.0.1"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/find-up": {
      "version": "5.0.0",
      "resolved": "https://registry.npmjs.org/find-up/-/find-up-5.0.0.tgz",
      "integrity": "sha512-78/PXT1wlLLDgTzDs7sjq9hzz0vXD+zn+7wypEe4fXQxCmdmqfGsEPQxmiCSQI3ajFV91bVSsvNtrJRiW6nGng==",
      "dev": true,
      "dependencies": {
        "locate-path": "^6.0.0",
        "path-exists": "^4.0.0"
      },
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/flat-cache": {
      "version": "4.0.1",
      "resolved": "https://registry.npmjs.org/flat-cache/-/flat-cache-4.0.1.tgz",
      "integrity": "sha512-f7ccFPK3SXFHpx15UIGyRJ/FJQctuKZ0zVuN3frBo4HnK3cay9VEW0R6yPYFHC0AgqhukPzKjq22t5DmAyqGyw==",
      "dev": true,
      "dependencies": {
        "flatted": "^3.2.9",
        "keyv": "^4.5.4"
      },
      "engines": {
        "node": ">=16"
      }
    },
    "node_modules/flatted": {
      "version": "3.3.3",
      "resolved": "https://registry.npmjs.org/flatted/-/flatted-3.3.3.tgz",
      "integrity": "sha512-GX+ysw4PBCz0PzosHDepZGANEuFCMLrnRTiEy9McGjmkCQYwRq4A/X786G/fjM/+OjsWSU1ZrY5qyARZmO/uwg==",
      "dev": true
    },
    "node_modules/for-each": {
      "version": "0.3.5",
      "resolved": "https://registry.npmjs.org/for-each/-/for-each-0.3.5.tgz",
      "integrity": "sha512-dKx12eRCVIzqCxFGplyFKJMPvLEWgmNtUrpTiJIR5u97zEhRG8ySrtboPHZXx7daLxQVrl643cTzbab2tkQjxg==",
      "dev": true,
      "dependencies": {
        "is-callable": "^1.2.7"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/framer-motion": {
      "version": "12.29.2",
      "resolved": "https://registry.npmjs.org/framer-motion/-/framer-motion-12.29.2.tgz",
      "integrity": "sha512-lSNRzBJk4wuIy0emYQ/nfZ7eWhqud2umPKw2QAQki6uKhZPKm2hRQHeQoHTG9MIvfobb+A/LbEWPJU794ZUKrg==",
      "license": "MIT",
      "dependencies": {
        "motion-dom": "^12.29.2",
        "motion-utils": "^12.29.2",
        "tslib": "^2.4.0"
      },
      "peerDependencies": {
        "@emotion/is-prop-valid": "*",
        "react": "^18.0.0 || ^19.0.0",
        "react-dom": "^18.0.0 || ^19.0.0"
      },
      "peerDependenciesMeta": {
        "@emotion/is-prop-valid": {
          "optional": true
        },
        "react": {
          "optional": true
        },
        "react-dom": {
          "optional": true
        }
      }
    },
    "node_modules/function-bind": {
      "version": "1.1.2",
      "resolved": "https://registry.npmjs.org/function-bind/-/function-bind-1.1.2.tgz",
      "integrity": "sha512-7XHNxH7qX9xG5mIwxkhumTox/MIRNcOgDrxWsMt2pAr23WHp6MrRlN7FBSFpCpr+oVO0F744iUgR82nJMfG2SA==",
      "dev": true,
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/function.prototype.name": {
      "version": "1.1.8",
      "resolved": "https://registry.npmjs.org/function.prototype.name/-/function.prototype.name-1.1.8.tgz",
      "integrity": "sha512-e5iwyodOHhbMr/yNrc7fDYG4qlbIvI5gajyzPnb5TCwyhjApznQh1BMFou9b30SevY43gCJKXycoCBjMbsuW0Q==",
      "dev": true,
      "dependencies": {
        "call-bind": "^1.0.8",
        "call-bound": "^1.0.3",
        "define-properties": "^1.2.1",
        "functions-have-names": "^1.2.3",
        "hasown": "^2.0.2",
        "is-callable": "^1.2.7"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/functions-have-names": {
      "version": "1.2.3",
      "resolved": "https://registry.npmjs.org/functions-have-names/-/functions-have-names-1.2.3.tgz",
      "integrity": "sha512-xckBUXyTIqT97tq2x2AMb+g163b5JFysYk0x4qxNFwbfQkmNZoiRHb6sPzI9/QV33WeuvVYBUIiD4NzNIyqaRQ==",
      "dev": true,
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/generator-function": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/generator-function/-/generator-function-2.0.1.tgz",
      "integrity": "sha512-SFdFmIJi+ybC0vjlHN0ZGVGHc3lgE0DxPAT0djjVg+kjOnSqclqmj0KQ7ykTOLP6YxoqOvuAODGdcHJn+43q3g==",
      "dev": true,
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/gensync": {
      "version": "1.0.0-beta.2",
      "resolved": "https://registry.npmjs.org/gensync/-/gensync-1.0.0-beta.2.tgz",
      "integrity": "sha512-3hN7NaskYvMDLQY55gnW3NQ+mesEAepTqlg+VEbj7zzqEMBVNhzcGYYeqFo/TlYz6eQiFcp1HcsCZO+nGgS8zg==",
      "dev": true,
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/get-intrinsic": {
      "version": "1.3.0",
      "resolved": "https://registry.npmjs.org/get-intrinsic/-/get-intrinsic-1.3.0.tgz",
      "integrity": "sha512-9fSjSaos/fRIVIp+xSJlE6lfwhES7LNtKaCBIamHsjr2na1BiABJPo0mOjjz8GJDURarmCPGqaiVg5mfjb98CQ==",
      "dev": true,
      "dependencies": {
        "call-bind-apply-helpers": "^1.0.2",
        "es-define-property": "^1.0.1",
        "es-errors": "^1.3.0",
        "es-object-atoms": "^1.1.1",
        "function-bind": "^1.1.2",
        "get-proto": "^1.0.1",
        "gopd": "^1.2.0",
        "has-symbols": "^1.1.0",
        "hasown": "^2.0.2",
        "math-intrinsics": "^1.1.0"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/get-proto": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/get-proto/-/get-proto-1.0.1.tgz",
      "integrity": "sha512-sTSfBjoXBp89JvIKIefqw7U2CCebsc74kiY6awiGogKtoSGbgjYE/G/+l9sF3MWFPNc9IcoOC4ODfKHfxFmp0g==",
      "dev": true,
      "dependencies": {
        "dunder-proto": "^1.0.1",
        "es-object-atoms": "^1.0.0"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/get-symbol-description": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/get-symbol-description/-/get-symbol-description-1.1.0.tgz",
      "integrity": "sha512-w9UMqWwJxHNOvoNzSJ2oPF5wvYcvP7jUvYzhp67yEhTi17ZDBBC1z9pTdGuzjD+EFIqLSYRweZjqfiPzQ06Ebg==",
      "dev": true,
      "dependencies": {
        "call-bound": "^1.0.3",
        "es-errors": "^1.3.0",
        "get-intrinsic": "^1.2.6"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/get-tsconfig": {
      "version": "4.13.0",
      "resolved": "https://registry.npmjs.org/get-tsconfig/-/get-tsconfig-4.13.0.tgz",
      "integrity": "sha512-1VKTZJCwBrvbd+Wn3AOgQP/2Av+TfTCOlE4AcRJE72W1ksZXbAx8PPBR9RzgTeSPzlPMHrbANMH3LbltH73wxQ==",
      "dev": true,
      "dependencies": {
        "resolve-pkg-maps": "^1.0.0"
      },
      "funding": {
        "url": "https://github.com/privatenumber/get-tsconfig?sponsor=1"
      }
    },
    "node_modules/glob-parent": {
      "version": "6.0.2",
      "resolved": "https://registry.npmjs.org/glob-parent/-/glob-parent-6.0.2.tgz",
      "integrity": "sha512-XxwI8EOhVQgWp6iDL+3b0r86f4d6AX6zSU55HfB4ydCEuXLXc5FcYeOu+nnGftS4TEju/11rt4KJPTMgbfmv4A==",
      "dev": true,
      "dependencies": {
        "is-glob": "^4.0.3"
      },
      "engines": {
        "node": ">=10.13.0"
      }
    },
    "node_modules/globals": {
      "version": "14.0.0",
      "resolved": "https://registry.npmjs.org/globals/-/globals-14.0.0.tgz",
      "integrity": "sha512-oahGvuMGQlPw/ivIYBjVSrWAfWLBeku5tpPE2fOPLi+WHffIWbuh2tCjhyQhTBPMf5E9jDEH4FOmTYgYwbKwtQ==",
      "dev": true,
      "engines": {
        "node": ">=18"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/globalthis": {
      "version": "1.0.4",
      "resolved": "https://registry.npmjs.org/globalthis/-/globalthis-1.0.4.tgz",
      "integrity": "sha512-DpLKbNU4WylpxJykQujfCcwYWiV/Jhm50Goo0wrVILAv5jOr9d+H+UR3PhSCD2rCCEIg0uc+G+muBTwD54JhDQ==",
      "dev": true,
      "dependencies": {
        "define-properties": "^1.2.1",
        "gopd": "^1.0.1"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/gopd": {
      "version": "1.2.0",
      "resolved": "https://registry.npmjs.org/gopd/-/gopd-1.2.0.tgz",
      "integrity": "sha512-ZUKRh6/kUFoAiTAtTYPZJ3hw9wNxx+BIBOijnlG9PnrJsCcSjs1wyyD6vJpaYtgnzDrKYRSqf3OO6Rfa93xsRg==",
      "dev": true,
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/graceful-fs": {
      "version": "4.2.11",
      "resolved": "https://registry.npmjs.org/graceful-fs/-/graceful-fs-4.2.11.tgz",
      "integrity": "sha512-RbJ5/jmFcNNCcDV5o9eTnBLJ/HszWV0P73bc+Ff4nS/rJj+YaS6IGyiOL0VoBYX+l1Wrl3k63h/KrH+nhJ0XvQ==",
      "dev": true
    },
    "node_modules/has-bigints": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/has-bigints/-/has-bigints-1.1.0.tgz",
      "integrity": "sha512-R3pbpkcIqv2Pm3dUwgjclDRVmWpTJW2DcMzcIhEXEx1oh/CEMObMm3KLmRJOdvhM7o4uQBnwr8pzRK2sJWIqfg==",
      "dev": true,
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/has-flag": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/has-flag/-/has-flag-4.0.0.tgz",
      "integrity": "sha512-EykJT/Q1KjTWctppgIAgfSO0tKVuZUjhgMr17kqTumMl6Afv3EISleU7qZUzoXDFTAHTDC4NOoG/ZxU3EvlMPQ==",
      "dev": true,
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/has-property-descriptors": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/has-property-descriptors/-/has-property-descriptors-1.0.2.tgz",
      "integrity": "sha512-55JNKuIW+vq4Ke1BjOTjM2YctQIvCT7GFzHwmfZPGo5wnrgkid0YQtnAleFSqumZm4az3n2BS+erby5ipJdgrg==",
      "dev": true,
      "dependencies": {
        "es-define-property": "^1.0.0"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/has-proto": {
      "version": "1.2.0",
      "resolved": "https://registry.npmjs.org/has-proto/-/has-proto-1.2.0.tgz",
      "integrity": "sha512-KIL7eQPfHQRC8+XluaIw7BHUwwqL19bQn4hzNgdr+1wXoU0KKj6rufu47lhY7KbJR2C6T6+PfyN0Ea7wkSS+qQ==",
      "dev": true,
      "dependencies": {
        "dunder-proto": "^1.0.0"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/has-symbols": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/has-symbols/-/has-symbols-1.1.0.tgz",
      "integrity": "sha512-1cDNdwJ2Jaohmb3sg4OmKaMBwuC48sYni5HUw2DvsC8LjGTLK9h+eb1X6RyuOHe4hT0ULCW68iomhjUoKUqlPQ==",
      "dev": true,
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/has-tostringtag": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/has-tostringtag/-/has-tostringtag-1.0.2.tgz",
      "integrity": "sha512-NqADB8VjPFLM2V0VvHUewwwsw0ZWBaIdgo+ieHtK3hasLz4qeCRjYcqfB6AQrBggRKppKF8L52/VqdVsO47Dlw==",
      "dev": true,
      "dependencies": {
        "has-symbols": "^1.0.3"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/hasown": {
      "version": "2.0.2",
      "resolved": "https://registry.npmjs.org/hasown/-/hasown-2.0.2.tgz",
      "integrity": "sha512-0hJU9SCPvmMzIBdZFqNPXWa6dqh7WdH0cII9y+CyS8rG3nL48Bclra9HmKhVVUHyPWNH5Y7xDwAB7bfgSjkUMQ==",
      "dev": true,
      "dependencies": {
        "function-bind": "^1.1.2"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/hermes-estree": {
      "version": "0.25.1",
      "resolved": "https://registry.npmjs.org/hermes-estree/-/hermes-estree-0.25.1.tgz",
      "integrity": "sha512-0wUoCcLp+5Ev5pDW2OriHC2MJCbwLwuRx+gAqMTOkGKJJiBCLjtrvy4PWUGn6MIVefecRpzoOZ/UV6iGdOr+Cw==",
      "dev": true
    },
    "node_modules/hermes-parser": {
      "version": "0.25.1",
      "resolved": "https://registry.npmjs.org/hermes-parser/-/hermes-parser-0.25.1.tgz",
      "integrity": "sha512-6pEjquH3rqaI6cYAXYPcz9MS4rY6R4ngRgrgfDshRptUZIc3lw0MCIJIGDj9++mfySOuPTHB4nrSW99BCvOPIA==",
      "dev": true,
      "dependencies": {
        "hermes-estree": "0.25.1"
      }
    },
    "node_modules/ignore": {
      "version": "5.3.2",
      "resolved": "https://registry.npmjs.org/ignore/-/ignore-5.3.2.tgz",
      "integrity": "sha512-hsBTNUqQTDwkWtcdYI2i06Y/nUBEsNEDJKjWdigLvegy8kDuJAS8uRlpkkcQpyEXL0Z/pjDy5HBmMjRCJ2gq+g==",
      "dev": true,
      "engines": {
        "node": ">= 4"
      }
    },
    "node_modules/immer": {
      "version": "10.2.0",
      "resolved": "https://registry.npmjs.org/immer/-/immer-10.2.0.tgz",
      "integrity": "sha512-d/+XTN3zfODyjr89gM3mPq1WNX2B8pYsu7eORitdwyA2sBubnTl3laYlBk4sXY5FUa5qTZGBDPJICVbvqzjlbw==",
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/immer"
      }
    },
    "node_modules/import-fresh": {
      "version": "3.3.1",
      "resolved": "https://registry.npmjs.org/import-fresh/-/import-fresh-3.3.1.tgz",
      "integrity": "sha512-TR3KfrTZTYLPB6jUjfx6MF9WcWrHL9su5TObK4ZkYgBdWKPOFoSoQIdEuTuR82pmtxH2spWG9h6etwfr1pLBqQ==",
      "dev": true,
      "dependencies": {
        "parent-module": "^1.0.0",
        "resolve-from": "^4.0.0"
      },
      "engines": {
        "node": ">=6"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/imurmurhash": {
      "version": "0.1.4",
      "resolved": "https://registry.npmjs.org/imurmurhash/-/imurmurhash-0.1.4.tgz",
      "integrity": "sha512-JmXMZ6wuvDmLiHEml9ykzqO6lwFbof0GG4IkcGaENdCRDDmMVnny7s5HsIgHCbaq0w2MyPhDqkhTUgS2LU2PHA==",
      "dev": true,
      "engines": {
        "node": ">=0.8.19"
      }
    },
    "node_modules/internal-slot": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/internal-slot/-/internal-slot-1.1.0.tgz",
      "integrity": "sha512-4gd7VpWNQNB4UKKCFFVcp1AVv+FMOgs9NKzjHKusc8jTMhd5eL1NqQqOpE0KzMds804/yHlglp3uxgluOqAPLw==",
      "dev": true,
      "dependencies": {
        "es-errors": "^1.3.0",
        "hasown": "^2.0.2",
        "side-channel": "^1.1.0"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/internmap": {
      "version": "2.0.3",
      "resolved": "https://registry.npmjs.org/internmap/-/internmap-2.0.3.tgz",
      "integrity": "sha512-5Hh7Y1wQbvY5ooGgPbDaL5iYLAPzMTUrjMulskHLH6wnv/A+1q5rgEaiuqEjB+oxGXIVZs1FF+R/KPN3ZSQYYg==",
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/is-array-buffer": {
      "version": "3.0.5",
      "resolved": "https://registry.npmjs.org/is-array-buffer/-/is-array-buffer-3.0.5.tgz",
      "integrity": "sha512-DDfANUiiG2wC1qawP66qlTugJeL5HyzMpfr8lLK+jMQirGzNod0B12cFB/9q838Ru27sBwfw78/rdoU7RERz6A==",
      "dev": true,
      "dependencies": {
        "call-bind": "^1.0.8",
        "call-bound": "^1.0.3",
        "get-intrinsic": "^1.2.6"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/is-async-function": {
      "version": "2.1.1",
      "resolved": "https://registry.npmjs.org/is-async-function/-/is-async-function-2.1.1.tgz",
      "integrity": "sha512-9dgM/cZBnNvjzaMYHVoxxfPj2QXt22Ev7SuuPrs+xav0ukGB0S6d4ydZdEiM48kLx5kDV+QBPrpVnFyefL8kkQ==",
      "dev": true,
      "dependencies": {
        "async-function": "^1.0.0",
        "call-bound": "^1.0.3",
        "get-proto": "^1.0.1",
        "has-tostringtag": "^1.0.2",
        "safe-regex-test": "^1.1.0"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/is-bigint": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/is-bigint/-/is-bigint-1.1.0.tgz",
      "integrity": "sha512-n4ZT37wG78iz03xPRKJrHTdZbe3IicyucEtdRsV5yglwc3GyUfbAfpSeD0FJ41NbUNSt5wbhqfp1fS+BgnvDFQ==",
      "dev": true,
      "dependencies": {
        "has-bigints": "^1.0.2"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/is-boolean-object": {
      "version": "1.2.2",
      "resolved": "https://registry.npmjs.org/is-boolean-object/-/is-boolean-object-1.2.2.tgz",
      "integrity": "sha512-wa56o2/ElJMYqjCjGkXri7it5FbebW5usLw/nPmCMs5DeZ7eziSYZhSmPRn0txqeW4LnAmQQU7FgqLpsEFKM4A==",
      "dev": true,
      "dependencies": {
        "call-bound": "^1.0.3",
        "has-tostringtag": "^1.0.2"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/is-bun-module": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/is-bun-module/-/is-bun-module-2.0.0.tgz",
      "integrity": "sha512-gNCGbnnnnFAUGKeZ9PdbyeGYJqewpmc2aKHUEMO5nQPWU9lOmv7jcmQIv+qHD8fXW6W7qfuCwX4rY9LNRjXrkQ==",
      "dev": true,
      "dependencies": {
        "semver": "^7.7.1"
      }
    },
    "node_modules/is-bun-module/node_modules/semver": {
      "version": "7.7.3",
      "resolved": "https://registry.npmjs.org/semver/-/semver-7.7.3.tgz",
      "integrity": "sha512-SdsKMrI9TdgjdweUSR9MweHA4EJ8YxHn8DFaDisvhVlUOe4BF1tLD7GAj0lIqWVl+dPb/rExr0Btby5loQm20Q==",
      "dev": true,
      "bin": {
        "semver": "bin/semver.js"
      },
      "engines": {
        "node": ">=10"
      }
    },
    "node_modules/is-callable": {
      "version": "1.2.7",
      "resolved": "https://registry.npmjs.org/is-callable/-/is-callable-1.2.7.tgz",
      "integrity": "sha512-1BC0BVFhS/p0qtw6enp8e+8OD0UrK0oFLztSjNzhcKA3WDuJxxAPXzPuPtKkjEY9UUoEWlX/8fgKeu2S8i9JTA==",
      "dev": true,
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/is-core-module": {
      "version": "2.16.1",
      "resolved": "https://registry.npmjs.org/is-core-module/-/is-core-module-2.16.1.tgz",
      "integrity": "sha512-UfoeMA6fIJ8wTYFEUjelnaGI67v6+N7qXJEvQuIGa99l4xsCruSYOVSQ0uPANn4dAzm8lkYPaKLrrijLq7x23w==",
      "dev": true,
      "dependencies": {
        "hasown": "^2.0.2"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/is-data-view": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/is-data-view/-/is-data-view-1.0.2.tgz",
      "integrity": "sha512-RKtWF8pGmS87i2D6gqQu/l7EYRlVdfzemCJN/P3UOs//x1QE7mfhvzHIApBTRf7axvT6DMGwSwBXYCT0nfB9xw==",
      "dev": true,
      "dependencies": {
        "call-bound": "^1.0.2",
        "get-intrinsic": "^1.2.6",
        "is-typed-array": "^1.1.13"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/is-date-object": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/is-date-object/-/is-date-object-1.1.0.tgz",
      "integrity": "sha512-PwwhEakHVKTdRNVOw+/Gyh0+MzlCl4R6qKvkhuvLtPMggI1WAHt9sOwZxQLSGpUaDnrdyDsomoRgNnCfKNSXXg==",
      "dev": true,
      "dependencies": {
        "call-bound": "^1.0.2",
        "has-tostringtag": "^1.0.2"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/is-extglob": {
      "version": "2.1.1",
      "resolved": "https://registry.npmjs.org/is-extglob/-/is-extglob-2.1.1.tgz",
      "integrity": "sha512-SbKbANkN603Vi4jEZv49LeVJMn4yGwsbzZworEoyEiutsN3nJYdbO36zfhGJ6QEDpOZIFkDtnq5JRxmvl3jsoQ==",
      "dev": true,
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/is-finalizationregistry": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/is-finalizationregistry/-/is-finalizationregistry-1.1.1.tgz",
      "integrity": "sha512-1pC6N8qWJbWoPtEjgcL2xyhQOP491EQjeUo3qTKcmV8YSDDJrOepfG8pcC7h/QgnQHYSv0mJ3Z/ZWxmatVrysg==",
      "dev": true,
      "dependencies": {
        "call-bound": "^1.0.3"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/is-generator-function": {
      "version": "1.1.2",
      "resolved": "https://registry.npmjs.org/is-generator-function/-/is-generator-function-1.1.2.tgz",
      "integrity": "sha512-upqt1SkGkODW9tsGNG5mtXTXtECizwtS2kA161M+gJPc1xdb/Ax629af6YrTwcOeQHbewrPNlE5Dx7kzvXTizA==",
      "dev": true,
      "dependencies": {
        "call-bound": "^1.0.4",
        "generator-function": "^2.0.0",
        "get-proto": "^1.0.1",
        "has-tostringtag": "^1.0.2",
        "safe-regex-test": "^1.1.0"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/is-glob": {
      "version": "4.0.3",
      "resolved": "https://registry.npmjs.org/is-glob/-/is-glob-4.0.3.tgz",
      "integrity": "sha512-xelSayHH36ZgE7ZWhli7pW34hNbNl8Ojv5KVmkJD4hBdD3th8Tfk9vYasLM+mXWOZhFkgZfxhLSnrwRr4elSSg==",
      "dev": true,
      "dependencies": {
        "is-extglob": "^2.1.1"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/is-map": {
      "version": "2.0.3",
      "resolved": "https://registry.npmjs.org/is-map/-/is-map-2.0.3.tgz",
      "integrity": "sha512-1Qed0/Hr2m+YqxnM09CjA2d/i6YZNfF6R2oRAOj36eUdS6qIV/huPJNSEpKbupewFs+ZsJlxsjjPbc0/afW6Lw==",
      "dev": true,
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/is-negative-zero": {
      "version": "2.0.3",
      "resolved": "https://registry.npmjs.org/is-negative-zero/-/is-negative-zero-2.0.3.tgz",
      "integrity": "sha512-5KoIu2Ngpyek75jXodFvnafB6DJgr3u8uuK0LEZJjrU19DrMD3EVERaR8sjz8CCGgpZvxPl9SuE1GMVPFHx1mw==",
      "dev": true,
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/is-number": {
      "version": "7.0.0",
      "resolved": "https://registry.npmjs.org/is-number/-/is-number-7.0.0.tgz",
      "integrity": "sha512-41Cifkg6e8TylSpdtTpeLVMqvSBEVzTttHvERD741+pnZ8ANv0004MRL43QKPDlK9cGvNp6NZWZUBlbGXYxxng==",
      "dev": true,
      "engines": {
        "node": ">=0.12.0"
      }
    },
    "node_modules/is-number-object": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/is-number-object/-/is-number-object-1.1.1.tgz",
      "integrity": "sha512-lZhclumE1G6VYD8VHe35wFaIif+CTy5SJIi5+3y4psDgWu4wPDoBhF8NxUOinEc7pHgiTsT6MaBb92rKhhD+Xw==",
      "dev": true,
      "dependencies": {
        "call-bound": "^1.0.3",
        "has-tostringtag": "^1.0.2"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/is-regex": {
      "version": "1.2.1",
      "resolved": "https://registry.npmjs.org/is-regex/-/is-regex-1.2.1.tgz",
      "integrity": "sha512-MjYsKHO5O7mCsmRGxWcLWheFqN9DJ/2TmngvjKXihe6efViPqc274+Fx/4fYj/r03+ESvBdTXK0V6tA3rgez1g==",
      "dev": true,
      "dependencies": {
        "call-bound": "^1.0.2",
        "gopd": "^1.2.0",
        "has-tostringtag": "^1.0.2",
        "hasown": "^2.0.2"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/is-set": {
      "version": "2.0.3",
      "resolved": "https://registry.npmjs.org/is-set/-/is-set-2.0.3.tgz",
      "integrity": "sha512-iPAjerrse27/ygGLxw+EBR9agv9Y6uLeYVJMu+QNCoouJ1/1ri0mGrcWpfCqFZuzzx3WjtwxG098X+n4OuRkPg==",
      "dev": true,
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/is-shared-array-buffer": {
      "version": "1.0.4",
      "resolved": "https://registry.npmjs.org/is-shared-array-buffer/-/is-shared-array-buffer-1.0.4.tgz",
      "integrity": "sha512-ISWac8drv4ZGfwKl5slpHG9OwPNty4jOWPRIhBpxOoD+hqITiwuipOQ2bNthAzwA3B4fIjO4Nln74N0S9byq8A==",
      "dev": true,
      "dependencies": {
        "call-bound": "^1.0.3"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/is-string": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/is-string/-/is-string-1.1.1.tgz",
      "integrity": "sha512-BtEeSsoaQjlSPBemMQIrY1MY0uM6vnS1g5fmufYOtnxLGUZM2178PKbhsk7Ffv58IX+ZtcvoGwccYsh0PglkAA==",
      "dev": true,
      "dependencies": {
        "call-bound": "^1.0.3",
        "has-tostringtag": "^1.0.2"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/is-symbol": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/is-symbol/-/is-symbol-1.1.1.tgz",
      "integrity": "sha512-9gGx6GTtCQM73BgmHQXfDmLtfjjTUDSyoxTCbp5WtoixAhfgsDirWIcVQ/IHpvI5Vgd5i/J5F7B9cN/WlVbC/w==",
      "dev": true,
      "dependencies": {
        "call-bound": "^1.0.2",
        "has-symbols": "^1.1.0",
        "safe-regex-test": "^1.1.0"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/is-typed-array": {
      "version": "1.1.15",
      "resolved": "https://registry.npmjs.org/is-typed-array/-/is-typed-array-1.1.15.tgz",
      "integrity": "sha512-p3EcsicXjit7SaskXHs1hA91QxgTw46Fv6EFKKGS5DRFLD8yKnohjF3hxoju94b/OcMZoQukzpPpBE9uLVKzgQ==",
      "dev": true,
      "dependencies": {
        "which-typed-array": "^1.1.16"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/is-weakmap": {
      "version": "2.0.2",
      "resolved": "https://registry.npmjs.org/is-weakmap/-/is-weakmap-2.0.2.tgz",
      "integrity": "sha512-K5pXYOm9wqY1RgjpL3YTkF39tni1XajUIkawTLUo9EZEVUFga5gSQJF8nNS7ZwJQ02y+1YCNYcMh+HIf1ZqE+w==",
      "dev": true,
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/is-weakref": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/is-weakref/-/is-weakref-1.1.1.tgz",
      "integrity": "sha512-6i9mGWSlqzNMEqpCp93KwRS1uUOodk2OJ6b+sq7ZPDSy2WuI5NFIxp/254TytR8ftefexkWn5xNiHUNpPOfSew==",
      "dev": true,
      "dependencies": {
        "call-bound": "^1.0.3"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/is-weakset": {
      "version": "2.0.4",
      "resolved": "https://registry.npmjs.org/is-weakset/-/is-weakset-2.0.4.tgz",
      "integrity": "sha512-mfcwb6IzQyOKTs84CQMrOwW4gQcaTOAWJ0zzJCl2WSPDrWk/OzDaImWFH3djXhb24g4eudZfLRozAvPGw4d9hQ==",
      "dev": true,
      "dependencies": {
        "call-bound": "^1.0.3",
        "get-intrinsic": "^1.2.6"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/isarray": {
      "version": "2.0.5",
      "resolved": "https://registry.npmjs.org/isarray/-/isarray-2.0.5.tgz",
      "integrity": "sha512-xHjhDr3cNBK0BzdUJSPXZntQUx/mwMS5Rw4A7lPJ90XGAO6ISP/ePDNuo0vhqOZU+UD5JoodwCAAoZQd3FeAKw==",
      "dev": true
    },
    "node_modules/isexe": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/isexe/-/isexe-2.0.0.tgz",
      "integrity": "sha512-RHxMLp9lnKHGHRng9QFhRCMbYAcVpn69smSGcq3f36xjgVVWThj4qqLbTLlq7Ssj8B+fIQ1EuCEGI2lKsyQeIw==",
      "dev": true
    },
    "node_modules/iterator.prototype": {
      "version": "1.1.5",
      "resolved": "https://registry.npmjs.org/iterator.prototype/-/iterator.prototype-1.1.5.tgz",
      "integrity": "sha512-H0dkQoCa3b2VEeKQBOxFph+JAbcrQdE7KC0UkqwpLmv2EC4P41QXP+rqo9wYodACiG5/WM5s9oDApTU8utwj9g==",
      "dev": true,
      "dependencies": {
        "define-data-property": "^1.1.4",
        "es-object-atoms": "^1.0.0",
        "get-intrinsic": "^1.2.6",
        "get-proto": "^1.0.0",
        "has-symbols": "^1.1.0",
        "set-function-name": "^2.0.2"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/jiti": {
      "version": "2.6.1",
      "resolved": "https://registry.npmjs.org/jiti/-/jiti-2.6.1.tgz",
      "integrity": "sha512-ekilCSN1jwRvIbgeg/57YFh8qQDNbwDb9xT/qu2DAHbFFZUicIl4ygVaAvzveMhMVr3LnpSKTNnwt8PoOfmKhQ==",
      "dev": true,
      "bin": {
        "jiti": "lib/jiti-cli.mjs"
      }
    },
    "node_modules/js-tokens": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/js-tokens/-/js-tokens-4.0.0.tgz",
      "integrity": "sha512-RdJUflcE3cUzKiMqQgsCu06FPu9UdIJO0beYbPhHN4k6apgJtifcoCtT9bcxOpYBtpD2kCM6Sbzg4CausW/PKQ==",
      "dev": true
    },
    "node_modules/js-yaml": {
      "version": "4.1.1",
      "resolved": "https://registry.npmjs.org/js-yaml/-/js-yaml-4.1.1.tgz",
      "integrity": "sha512-qQKT4zQxXl8lLwBtHMWwaTcGfFOZviOJet3Oy/xmGk2gZH677CJM9EvtfdSkgWcATZhj/55JZ0rmy3myCT5lsA==",
      "dev": true,
      "dependencies": {
        "argparse": "^2.0.1"
      },
      "bin": {
        "js-yaml": "bin/js-yaml.js"
      }
    },
    "node_modules/jsesc": {
      "version": "3.1.0",
      "resolved": "https://registry.npmjs.org/jsesc/-/jsesc-3.1.0.tgz",
      "integrity": "sha512-/sM3dO2FOzXjKQhJuo0Q173wf2KOo8t4I8vHy6lF9poUp7bKT0/NHE8fPX23PwfhnykfqnC2xRxOnVw5XuGIaA==",
      "dev": true,
      "bin": {
        "jsesc": "bin/jsesc"
      },
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/json-buffer": {
      "version": "3.0.1",
      "resolved": "https://registry.npmjs.org/json-buffer/-/json-buffer-3.0.1.tgz",
      "integrity": "sha512-4bV5BfR2mqfQTJm+V5tPPdf+ZpuhiIvTuAB5g8kcrXOZpTT/QwwVRWBywX1ozr6lEuPdbHxwaJlm9G6mI2sfSQ==",
      "dev": true
    },
    "node_modules/json-schema-traverse": {
      "version": "0.4.1",
      "resolved": "https://registry.npmjs.org/json-schema-traverse/-/json-schema-traverse-0.4.1.tgz",
      "integrity": "sha512-xbbCH5dCYU5T8LcEhhuh7HJ88HXuW3qsI3Y0zOZFKfZEHcpWiHU/Jxzk629Brsab/mMiHQti9wMP+845RPe3Vg==",
      "dev": true
    },
    "node_modules/json-stable-stringify-without-jsonify": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/json-stable-stringify-without-jsonify/-/json-stable-stringify-without-jsonify-1.0.1.tgz",
      "integrity": "sha512-Bdboy+l7tA3OGW6FjyFHWkP5LuByj1Tk33Ljyq0axyzdk9//JSi2u3fP1QSmd1KNwq6VOKYGlAu87CisVir6Pw==",
      "dev": true
    },
    "node_modules/json5": {
      "version": "2.2.3",
      "resolved": "https://registry.npmjs.org/json5/-/json5-2.2.3.tgz",
      "integrity": "sha512-XmOWe7eyHYH14cLdVPoyg+GOH3rYX++KpzrylJwSW98t3Nk+U8XOl8FWKOgwtzdb8lXGf6zYwDUzeHMWfxasyg==",
      "dev": true,
      "bin": {
        "json5": "lib/cli.js"
      },
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/jsx-ast-utils": {
      "version": "3.3.5",
      "resolved": "https://registry.npmjs.org/jsx-ast-utils/-/jsx-ast-utils-3.3.5.tgz",
      "integrity": "sha512-ZZow9HBI5O6EPgSJLUb8n2NKgmVWTwCvHGwFuJlMjvLFqlGG6pjirPhtdsseaLZjSibD8eegzmYpUZwoIlj2cQ==",
      "dev": true,
      "dependencies": {
        "array-includes": "^3.1.6",
        "array.prototype.flat": "^1.3.1",
        "object.assign": "^4.1.4",
        "object.values": "^1.1.6"
      },
      "engines": {
        "node": ">=4.0"
      }
    },
    "node_modules/keyv": {
      "version": "4.5.4",
      "resolved": "https://registry.npmjs.org/keyv/-/keyv-4.5.4.tgz",
      "integrity": "sha512-oxVHkHR/EJf2CNXnWxRLW6mg7JyCCUcG0DtEGmL2ctUo1PNTin1PUil+r/+4r5MpVgC/fn1kjsx7mjSujKqIpw==",
      "dev": true,
      "dependencies": {
        "json-buffer": "3.0.1"
      }
    },
    "node_modules/language-subtag-registry": {
      "version": "0.3.23",
      "resolved": "https://registry.npmjs.org/language-subtag-registry/-/language-subtag-registry-0.3.23.tgz",
      "integrity": "sha512-0K65Lea881pHotoGEa5gDlMxt3pctLi2RplBb7Ezh4rRdLEOtgi7n4EwK9lamnUCkKBqaeKRVebTq6BAxSkpXQ==",
      "dev": true
    },
    "node_modules/language-tags": {
      "version": "1.0.9",
      "resolved": "https://registry.npmjs.org/language-tags/-/language-tags-1.0.9.tgz",
      "integrity": "sha512-MbjN408fEndfiQXbFQ1vnd+1NoLDsnQW41410oQBXiyXDMYH5z505juWa4KUE1LqxRC7DgOgZDbKLxHIwm27hA==",
      "dev": true,
      "dependencies": {
        "language-subtag-registry": "^0.3.20"
      },
      "engines": {
        "node": ">=0.10"
      }
    },
    "node_modules/levn": {
      "version": "0.4.1",
      "resolved": "https://registry.npmjs.org/levn/-/levn-0.4.1.tgz",
      "integrity": "sha512-+bT2uH4E5LGE7h/n3evcS/sQlJXCpIp6ym8OWJ5eV6+67Dsql/LaaT7qJBAt2rzfoa/5QBGBhxDix1dMt2kQKQ==",
      "dev": true,
      "dependencies": {
        "prelude-ls": "^1.2.1",
        "type-check": "~0.4.0"
      },
      "engines": {
        "node": ">= 0.8.0"
      }
    },
    "node_modules/lightningcss": {
      "version": "1.30.2",
      "resolved": "https://registry.npmjs.org/lightningcss/-/lightningcss-1.30.2.tgz",
      "integrity": "sha512-utfs7Pr5uJyyvDETitgsaqSyjCb2qNRAtuqUeWIAKztsOYdcACf2KtARYXg2pSvhkt+9NfoaNY7fxjl6nuMjIQ==",
      "dev": true,
      "dependencies": {
        "detect-libc": "^2.0.3"
      },
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      },
      "optionalDependencies": {
        "lightningcss-android-arm64": "1.30.2",
        "lightningcss-darwin-arm64": "1.30.2",
        "lightningcss-darwin-x64": "1.30.2",
        "lightningcss-freebsd-x64": "1.30.2",
        "lightningcss-linux-arm-gnueabihf": "1.30.2",
        "lightningcss-linux-arm64-gnu": "1.30.2",
        "lightningcss-linux-arm64-musl": "1.30.2",
        "lightningcss-linux-x64-gnu": "1.30.2",
        "lightningcss-linux-x64-musl": "1.30.2",
        "lightningcss-win32-arm64-msvc": "1.30.2",
        "lightningcss-win32-x64-msvc": "1.30.2"
      }
    },
    "node_modules/lightningcss-android-arm64": {
      "version": "1.30.2",
      "resolved": "https://registry.npmjs.org/lightningcss-android-arm64/-/lightningcss-android-arm64-1.30.2.tgz",
      "integrity": "sha512-BH9sEdOCahSgmkVhBLeU7Hc9DWeZ1Eb6wNS6Da8igvUwAe0sqROHddIlvU06q3WyXVEOYDZ6ykBZQnjTbmo4+A==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "optional": true,
      "os": [
        "android"
      ],
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/lightningcss-darwin-arm64": {
      "version": "1.30.2",
      "resolved": "https://registry.npmjs.org/lightningcss-darwin-arm64/-/lightningcss-darwin-arm64-1.30.2.tgz",
      "integrity": "sha512-ylTcDJBN3Hp21TdhRT5zBOIi73P6/W0qwvlFEk22fkdXchtNTOU4Qc37SkzV+EKYxLouZ6M4LG9NfZ1qkhhBWA==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/lightningcss-darwin-x64": {
      "version": "1.30.2",
      "resolved": "https://registry.npmjs.org/lightningcss-darwin-x64/-/lightningcss-darwin-x64-1.30.2.tgz",
      "integrity": "sha512-oBZgKchomuDYxr7ilwLcyms6BCyLn0z8J0+ZZmfpjwg9fRVZIR5/GMXd7r9RH94iDhld3UmSjBM6nXWM2TfZTQ==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/lightningcss-freebsd-x64": {
      "version": "1.30.2",
      "resolved": "https://registry.npmjs.org/lightningcss-freebsd-x64/-/lightningcss-freebsd-x64-1.30.2.tgz",
      "integrity": "sha512-c2bH6xTrf4BDpK8MoGG4Bd6zAMZDAXS569UxCAGcA7IKbHNMlhGQ89eRmvpIUGfKWNVdbhSbkQaWhEoMGmGslA==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "optional": true,
      "os": [
        "freebsd"
      ],
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/lightningcss-linux-arm-gnueabihf": {
      "version": "1.30.2",
      "resolved": "https://registry.npmjs.org/lightningcss-linux-arm-gnueabihf/-/lightningcss-linux-arm-gnueabihf-1.30.2.tgz",
      "integrity": "sha512-eVdpxh4wYcm0PofJIZVuYuLiqBIakQ9uFZmipf6LF/HRj5Bgm0eb3qL/mr1smyXIS1twwOxNWndd8z0E374hiA==",
      "cpu": [
        "arm"
      ],
      "dev": true,
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/lightningcss-linux-arm64-gnu": {
      "version": "1.30.2",
      "resolved": "https://registry.npmjs.org/lightningcss-linux-arm64-gnu/-/lightningcss-linux-arm64-gnu-1.30.2.tgz",
      "integrity": "sha512-UK65WJAbwIJbiBFXpxrbTNArtfuznvxAJw4Q2ZGlU8kPeDIWEX1dg3rn2veBVUylA2Ezg89ktszWbaQnxD/e3A==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/lightningcss-linux-arm64-musl": {
      "version": "1.30.2",
      "resolved": "https://registry.npmjs.org/lightningcss-linux-arm64-musl/-/lightningcss-linux-arm64-musl-1.30.2.tgz",
      "integrity": "sha512-5Vh9dGeblpTxWHpOx8iauV02popZDsCYMPIgiuw97OJ5uaDsL86cnqSFs5LZkG3ghHoX5isLgWzMs+eD1YzrnA==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/lightningcss-linux-x64-gnu": {
      "version": "1.30.2",
      "resolved": "https://registry.npmjs.org/lightningcss-linux-x64-gnu/-/lightningcss-linux-x64-gnu-1.30.2.tgz",
      "integrity": "sha512-Cfd46gdmj1vQ+lR6VRTTadNHu6ALuw2pKR9lYq4FnhvgBc4zWY1EtZcAc6EffShbb1MFrIPfLDXD6Xprbnni4w==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/lightningcss-linux-x64-musl": {
      "version": "1.30.2",
      "resolved": "https://registry.npmjs.org/lightningcss-linux-x64-musl/-/lightningcss-linux-x64-musl-1.30.2.tgz",
      "integrity": "sha512-XJaLUUFXb6/QG2lGIW6aIk6jKdtjtcffUT0NKvIqhSBY3hh9Ch+1LCeH80dR9q9LBjG3ewbDjnumefsLsP6aiA==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/lightningcss-win32-arm64-msvc": {
      "version": "1.30.2",
      "resolved": "https://registry.npmjs.org/lightningcss-win32-arm64-msvc/-/lightningcss-win32-arm64-msvc-1.30.2.tgz",
      "integrity": "sha512-FZn+vaj7zLv//D/192WFFVA0RgHawIcHqLX9xuWiQt7P0PtdFEVaxgF9rjM/IRYHQXNnk61/H/gb2Ei+kUQ4xQ==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/lightningcss-win32-x64-msvc": {
      "version": "1.30.2",
      "resolved": "https://registry.npmjs.org/lightningcss-win32-x64-msvc/-/lightningcss-win32-x64-msvc-1.30.2.tgz",
      "integrity": "sha512-5g1yc73p+iAkid5phb4oVFMB45417DkRevRbt/El/gKXJk4jid+vPFF/AXbxn05Aky8PapwzZrdJShv5C0avjw==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/locate-path": {
      "version": "6.0.0",
      "resolved": "https://registry.npmjs.org/locate-path/-/locate-path-6.0.0.tgz",
      "integrity": "sha512-iPZK6eYjbxRu3uB4/WZ3EsEIMJFMqAoopl3R+zuq0UjcAm/MO6KCweDgPfP3elTztoKP3KtnVHxTn2NHBSDVUw==",
      "dev": true,
      "dependencies": {
        "p-locate": "^5.0.0"
      },
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/lodash.merge": {
      "version": "4.6.2",
      "resolved": "https://registry.npmjs.org/lodash.merge/-/lodash.merge-4.6.2.tgz",
      "integrity": "sha512-0KpjqXRVvrYyCsX1swR/XTK0va6VQkQM6MNo7PqW77ByjAhoARA8EfrP1N4+KlKj8YS0ZUCtRT/YUuhyYDujIQ==",
      "dev": true
    },
    "node_modules/loose-envify": {
      "version": "1.4.0",
      "resolved": "https://registry.npmjs.org/loose-envify/-/loose-envify-1.4.0.tgz",
      "integrity": "sha512-lyuxPGr/Wfhrlem2CL/UcnUc1zcqKAImBDzukY7Y5F/yQiNdko6+fRLevlw1HgMySw7f611UIY408EtxRSoK3Q==",
      "dev": true,
      "dependencies": {
        "js-tokens": "^3.0.0 || ^4.0.0"
      },
      "bin": {
        "loose-envify": "cli.js"
      }
    },
    "node_modules/lru-cache": {
      "version": "5.1.1",
      "resolved": "https://registry.npmjs.org/lru-cache/-/lru-cache-5.1.1.tgz",
      "integrity": "sha512-KpNARQA3Iwv+jTA0utUVVbrh+Jlrr1Fv0e56GGzAFOXN7dk/FviaDW8LHmK52DlcH4WP2n6gI8vN1aesBFgo9w==",
      "dev": true,
      "dependencies": {
        "yallist": "^3.0.2"
      }
    },
    "node_modules/lucide-react": {
      "version": "0.561.0",
      "resolved": "https://registry.npmjs.org/lucide-react/-/lucide-react-0.561.0.tgz",
      "integrity": "sha512-Y59gMY38tl4/i0qewcqohPdEbieBy7SovpBL9IFebhc2mDd8x4PZSOsiFRkpPcOq6bj1r/mjH/Rk73gSlIJP2A==",
      "peerDependencies": {
        "react": "^16.5.1 || ^17.0.0 || ^18.0.0 || ^19.0.0"
      }
    },
    "node_modules/magic-string": {
      "version": "0.30.21",
      "resolved": "https://registry.npmjs.org/magic-string/-/magic-string-0.30.21.tgz",
      "integrity": "sha512-vd2F4YUyEXKGcLHoq+TEyCjxueSeHnFxyyjNp80yg0XV4vUhnDer/lvvlqM/arB5bXQN5K2/3oinyCRyx8T2CQ==",
      "dev": true,
      "dependencies": {
        "@jridgewell/sourcemap-codec": "^1.5.5"
      }
    },
    "node_modules/math-intrinsics": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/math-intrinsics/-/math-intrinsics-1.1.0.tgz",
      "integrity": "sha512-/IXtbwEk5HTPyEwyKX6hGkYXxM9nbj64B+ilVJnC/R6B0pH5G4V3b0pVbL7DBj4tkhBAppbQUlf6F6Xl9LHu1g==",
      "dev": true,
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/merge2": {
      "version": "1.4.1",
      "resolved": "https://registry.npmjs.org/merge2/-/merge2-1.4.1.tgz",
      "integrity": "sha512-8q7VEgMJW4J8tcfVPy8g09NcQwZdbwFEqhe/WZkoIzjn/3TGDwtOCYtXGxA3O8tPzpczCCDgv+P2P5y00ZJOOg==",
      "dev": true,
      "engines": {
        "node": ">= 8"
      }
    },
    "node_modules/micromatch": {
      "version": "4.0.8",
      "resolved": "https://registry.npmjs.org/micromatch/-/micromatch-4.0.8.tgz",
      "integrity": "sha512-PXwfBhYu0hBCPw8Dn0E+WDYb7af3dSLVWKi3HGv84IdF4TyFoC0ysxFd0Goxw7nSv4T/PzEJQxsYsEiFCKo2BA==",
      "dev": true,
      "dependencies": {
        "braces": "^3.0.3",
        "picomatch": "^2.3.1"
      },
      "engines": {
        "node": ">=8.6"
      }
    },
    "node_modules/minimatch": {
      "version": "3.1.2",
      "resolved": "https://registry.npmjs.org/minimatch/-/minimatch-3.1.2.tgz",
      "integrity": "sha512-J7p63hRiAjw1NDEww1W7i37+ByIrOWO5XQQAzZ3VOcL0PNybwpfmV/N05zFAzwQ9USyEcX6t3UO+K5aqBQOIHw==",
      "dev": true,
      "dependencies": {
        "brace-expansion": "^1.1.7"
      },
      "engines": {
        "node": "*"
      }
    },
    "node_modules/minimist": {
      "version": "1.2.8",
      "resolved": "https://registry.npmjs.org/minimist/-/minimist-1.2.8.tgz",
      "integrity": "sha512-2yyAR8qBkN3YuheJanUpWC5U3bb5osDywNB8RzDVlDwDHbocAJveqqj1u8+SVD7jkWT4yvsHCpWqqWqAxb0zCA==",
      "dev": true,
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/motion-dom": {
      "version": "12.29.2",
      "resolved": "https://registry.npmjs.org/motion-dom/-/motion-dom-12.29.2.tgz",
      "integrity": "sha512-/k+NuycVV8pykxyiTCoFzIVLA95Nb1BFIVvfSu9L50/6K6qNeAYtkxXILy/LRutt7AzaYDc2myj0wkCVVYAPPA==",
      "license": "MIT",
      "dependencies": {
        "motion-utils": "^12.29.2"
      }
    },
    "node_modules/motion-utils": {
      "version": "12.29.2",
      "resolved": "https://registry.npmjs.org/motion-utils/-/motion-utils-12.29.2.tgz",
      "integrity": "sha512-G3kc34H2cX2gI63RqU+cZq+zWRRPSsNIOjpdl9TN4AQwC4sgwYPl/Q/Obf/d53nOm569T0fYK+tcoSV50BWx8A==",
      "license": "MIT"
    },
    "node_modules/ms": {
      "version": "2.1.3",
      "resolved": "https://registry.npmjs.org/ms/-/ms-2.1.3.tgz",
      "integrity": "sha512-6FlzubTLZG3J2a/NVCAleEhjzq5oxgHyaCU9yYXvcLsvoVaHJq/s5xXI6/XXP6tz7R9xAOtHnSO/tXtF3WRTlA==",
      "dev": true
    },
    "node_modules/nanoid": {
      "version": "3.3.11",
      "resolved": "https://registry.npmjs.org/nanoid/-/nanoid-3.3.11.tgz",
      "integrity": "sha512-N8SpfPUnUp1bK+PMYW8qSWdl9U+wwNWI4QKxOYDy9JAro3WMX7p2OeVRF9v+347pnakNevPmiHhNmZ2HbFA76w==",
      "funding": [
        {
          "type": "github",
          "url": "https://github.com/sponsors/ai"
        }
      ],
      "bin": {
        "nanoid": "bin/nanoid.cjs"
      },
      "engines": {
        "node": "^10 || ^12 || ^13.7 || ^14 || >=15.0.1"
      }
    },
    "node_modules/napi-postinstall": {
      "version": "0.3.4",
      "resolved": "https://registry.npmjs.org/napi-postinstall/-/napi-postinstall-0.3.4.tgz",
      "integrity": "sha512-PHI5f1O0EP5xJ9gQmFGMS6IZcrVvTjpXjz7Na41gTE7eE2hK11lg04CECCYEEjdc17EV4DO+fkGEtt7TpTaTiQ==",
      "dev": true,
      "bin": {
        "napi-postinstall": "lib/cli.js"
      },
      "engines": {
        "node": "^12.20.0 || ^14.18.0 || >=16.0.0"
      },
      "funding": {
        "url": "https://opencollective.com/napi-postinstall"
      }
    },
    "node_modules/natural-compare": {
      "version": "1.4.0",
      "resolved": "https://registry.npmjs.org/natural-compare/-/natural-compare-1.4.0.tgz",
      "integrity": "sha512-OWND8ei3VtNC9h7V60qff3SVobHr996CTwgxubgyQYEpg290h9J0buyECNNJexkFm5sOajh5G116RYA1c8ZMSw==",
      "dev": true
    },
    "node_modules/next": {
      "version": "16.0.10",
      "resolved": "https://registry.npmjs.org/next/-/next-16.0.10.tgz",
      "integrity": "sha512-RtWh5PUgI+vxlV3HdR+IfWA1UUHu0+Ram/JBO4vWB54cVPentCD0e+lxyAYEsDTqGGMg7qpjhKh6dc6aW7W/sA==",
      "dependencies": {
        "@next/env": "16.0.10",
        "@swc/helpers": "0.5.15",
        "caniuse-lite": "^1.0.30001579",
        "postcss": "8.4.31",
        "styled-jsx": "5.1.6"
      },
      "bin": {
        "next": "dist/bin/next"
      },
      "engines": {
        "node": ">=20.9.0"
      },
      "optionalDependencies": {
        "@next/swc-darwin-arm64": "16.0.10",
        "@next/swc-darwin-x64": "16.0.10",
        "@next/swc-linux-arm64-gnu": "16.0.10",
        "@next/swc-linux-arm64-musl": "16.0.10",
        "@next/swc-linux-x64-gnu": "16.0.10",
        "@next/swc-linux-x64-musl": "16.0.10",
        "@next/swc-win32-arm64-msvc": "16.0.10",
        "@next/swc-win32-x64-msvc": "16.0.10",
        "sharp": "^0.34.4"
      },
      "peerDependencies": {
        "@opentelemetry/api": "^1.1.0",
        "@playwright/test": "^1.51.1",
        "babel-plugin-react-compiler": "*",
        "react": "^18.2.0 || 19.0.0-rc-de68d2f4-20241204 || ^19.0.0",
        "react-dom": "^18.2.0 || 19.0.0-rc-de68d2f4-20241204 || ^19.0.0",
        "sass": "^1.3.0"
      },
      "peerDependenciesMeta": {
        "@opentelemetry/api": {
          "optional": true
        },
        "@playwright/test": {
          "optional": true
        },
        "babel-plugin-react-compiler": {
          "optional": true
        },
        "sass": {
          "optional": true
        }
      }
    },
    "node_modules/next/node_modules/postcss": {
      "version": "8.4.31",
      "resolved": "https://registry.npmjs.org/postcss/-/postcss-8.4.31.tgz",
      "integrity": "sha512-PS08Iboia9mts/2ygV3eLpY5ghnUcfLV/EXTOW1E2qYxJKGGBUtNjN76FYHnMs36RmARn41bC0AZmn+rR0OVpQ==",
      "funding": [
        {
          "type": "opencollective",
          "url": "https://opencollective.com/postcss/"
        },
        {
          "type": "tidelift",
          "url": "https://tidelift.com/funding/github/npm/postcss"
        },
        {
          "type": "github",
          "url": "https://github.com/sponsors/ai"
        }
      ],
      "dependencies": {
        "nanoid": "^3.3.6",
        "picocolors": "^1.0.0",
        "source-map-js": "^1.0.2"
      },
      "engines": {
        "node": "^10 || ^12 || >=14"
      }
    },
    "node_modules/node-releases": {
      "version": "2.0.27",
      "resolved": "https://registry.npmjs.org/node-releases/-/node-releases-2.0.27.tgz",
      "integrity": "sha512-nmh3lCkYZ3grZvqcCH+fjmQ7X+H0OeZgP40OierEaAptX4XofMh5kwNbWh7lBduUzCcV/8kZ+NDLCwm2iorIlA==",
      "dev": true
    },
    "node_modules/object-assign": {
      "version": "4.1.1",
      "resolved": "https://registry.npmjs.org/object-assign/-/object-assign-4.1.1.tgz",
      "integrity": "sha512-rJgTQnkUnH1sFw8yT6VSU3zD3sWmu6sZhIseY8VX+GRu3P6F7Fu+JNDoXfklElbLJSnc3FUQHVe4cU5hj+BcUg==",
      "dev": true,
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/object-inspect": {
      "version": "1.13.4",
      "resolved": "https://registry.npmjs.org/object-inspect/-/object-inspect-1.13.4.tgz",
      "integrity": "sha512-W67iLl4J2EXEGTbfeHCffrjDfitvLANg0UlX3wFUUSTx92KXRFegMHUVgSqE+wvhAbi4WqjGg9czysTV2Epbew==",
      "dev": true,
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/object-keys": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/object-keys/-/object-keys-1.1.1.tgz",
      "integrity": "sha512-NuAESUOUMrlIXOfHKzD6bpPu3tYt3xvjNdRIQ+FeT0lNb4K8WR70CaDxhuNguS2XG+GjkyMwOzsN5ZktImfhLA==",
      "dev": true,
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/object.assign": {
      "version": "4.1.7",
      "resolved": "https://registry.npmjs.org/object.assign/-/object.assign-4.1.7.tgz",
      "integrity": "sha512-nK28WOo+QIjBkDduTINE4JkF/UJJKyf2EJxvJKfblDpyg0Q+pkOHNTL0Qwy6NP6FhE/EnzV73BxxqcJaXY9anw==",
      "dev": true,
      "dependencies": {
        "call-bind": "^1.0.8",
        "call-bound": "^1.0.3",
        "define-properties": "^1.2.1",
        "es-object-atoms": "^1.0.0",
        "has-symbols": "^1.1.0",
        "object-keys": "^1.1.1"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/object.entries": {
      "version": "1.1.9",
      "resolved": "https://registry.npmjs.org/object.entries/-/object.entries-1.1.9.tgz",
      "integrity": "sha512-8u/hfXFRBD1O0hPUjioLhoWFHRmt6tKA4/vZPyckBr18l1KE9uHrFaFaUi8MDRTpi4uak2goyPTSNJLXX2k2Hw==",
      "dev": true,
      "dependencies": {
        "call-bind": "^1.0.8",
        "call-bound": "^1.0.4",
        "define-properties": "^1.2.1",
        "es-object-atoms": "^1.1.1"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/object.fromentries": {
      "version": "2.0.8",
      "resolved": "https://registry.npmjs.org/object.fromentries/-/object.fromentries-2.0.8.tgz",
      "integrity": "sha512-k6E21FzySsSK5a21KRADBd/NGneRegFO5pLHfdQLpRDETUNJueLXs3WCzyQ3tFRDYgbq3KHGXfTbi2bs8WQ6rQ==",
      "dev": true,
      "dependencies": {
        "call-bind": "^1.0.7",
        "define-properties": "^1.2.1",
        "es-abstract": "^1.23.2",
        "es-object-atoms": "^1.0.0"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/object.groupby": {
      "version": "1.0.3",
      "resolved": "https://registry.npmjs.org/object.groupby/-/object.groupby-1.0.3.tgz",
      "integrity": "sha512-+Lhy3TQTuzXI5hevh8sBGqbmurHbbIjAi0Z4S63nthVLmLxfbj4T54a4CfZrXIrt9iP4mVAPYMo/v99taj3wjQ==",
      "dev": true,
      "dependencies": {
        "call-bind": "^1.0.7",
        "define-properties": "^1.2.1",
        "es-abstract": "^1.23.2"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/object.values": {
      "version": "1.2.1",
      "resolved": "https://registry.npmjs.org/object.values/-/object.values-1.2.1.tgz",
      "integrity": "sha512-gXah6aZrcUxjWg2zR2MwouP2eHlCBzdV4pygudehaKXSGW4v2AsRQUK+lwwXhii6KFZcunEnmSUoYp5CXibxtA==",
      "dev": true,
      "dependencies": {
        "call-bind": "^1.0.8",
        "call-bound": "^1.0.3",
        "define-properties": "^1.2.1",
        "es-object-atoms": "^1.0.0"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/optionator": {
      "version": "0.9.4",
      "resolved": "https://registry.npmjs.org/optionator/-/optionator-0.9.4.tgz",
      "integrity": "sha512-6IpQ7mKUxRcZNLIObR0hz7lxsapSSIYNZJwXPGeF0mTVqGKFIXj1DQcMoT22S3ROcLyY/rz0PWaWZ9ayWmad9g==",
      "dev": true,
      "dependencies": {
        "deep-is": "^0.1.3",
        "fast-levenshtein": "^2.0.6",
        "levn": "^0.4.1",
        "prelude-ls": "^1.2.1",
        "type-check": "^0.4.0",
        "word-wrap": "^1.2.5"
      },
      "engines": {
        "node": ">= 0.8.0"
      }
    },
    "node_modules/own-keys": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/own-keys/-/own-keys-1.0.1.tgz",
      "integrity": "sha512-qFOyK5PjiWZd+QQIh+1jhdb9LpxTF0qs7Pm8o5QHYZ0M3vKqSqzsZaEB6oWlxZ+q2sJBMI/Ktgd2N5ZwQoRHfg==",
      "dev": true,
      "dependencies": {
        "get-intrinsic": "^1.2.6",
        "object-keys": "^1.1.1",
        "safe-push-apply": "^1.0.0"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/p-limit": {
      "version": "3.1.0",
      "resolved": "https://registry.npmjs.org/p-limit/-/p-limit-3.1.0.tgz",
      "integrity": "sha512-TYOanM3wGwNGsZN2cVTYPArw454xnXj5qmWF1bEoAc4+cU/ol7GVh7odevjp1FNHduHc3KZMcFduxU5Xc6uJRQ==",
      "dev": true,
      "dependencies": {
        "yocto-queue": "^0.1.0"
      },
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/p-locate": {
      "version": "5.0.0",
      "resolved": "https://registry.npmjs.org/p-locate/-/p-locate-5.0.0.tgz",
      "integrity": "sha512-LaNjtRWUBY++zB5nE/NwcaoMylSPk+S+ZHNB1TzdbMJMny6dynpAGt7X/tl/QYq3TIeE6nxHppbo2LGymrG5Pw==",
      "dev": true,
      "dependencies": {
        "p-limit": "^3.0.2"
      },
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/parent-module": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/parent-module/-/parent-module-1.0.1.tgz",
      "integrity": "sha512-GQ2EWRpQV8/o+Aw8YqtfZZPfNRWZYkbidE9k5rpl/hC3vtHHBfGm2Ifi6qWV+coDGkrUKZAxE3Lot5kcsRlh+g==",
      "dev": true,
      "dependencies": {
        "callsites": "^3.0.0"
      },
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/path-exists": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/path-exists/-/path-exists-4.0.0.tgz",
      "integrity": "sha512-ak9Qy5Q7jYb2Wwcey5Fpvg2KoAc/ZIhLSLOSBmRmygPsGwkVVt0fZa0qrtMz+m6tJTAHfZQ8FnmB4MG4LWy7/w==",
      "dev": true,
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/path-key": {
      "version": "3.1.1",
      "resolved": "https://registry.npmjs.org/path-key/-/path-key-3.1.1.tgz",
      "integrity": "sha512-ojmeN0qd+y0jszEtoY48r0Peq5dwMEkIlCOu6Q5f41lfkswXuKtYrhgoTpLnyIcHm24Uhqx+5Tqm2InSwLhE6Q==",
      "dev": true,
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/path-parse": {
      "version": "1.0.7",
      "resolved": "https://registry.npmjs.org/path-parse/-/path-parse-1.0.7.tgz",
      "integrity": "sha512-LDJzPVEEEPR+y48z93A0Ed0yXb8pAByGWo/k5YYdYgpY2/2EsOsksJrq7lOHxryrVOn1ejG6oAp8ahvOIQD8sw==",
      "dev": true
    },
    "node_modules/picocolors": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/picocolors/-/picocolors-1.1.1.tgz",
      "integrity": "sha512-xceH2snhtb5M9liqDsmEw56le376mTZkEX/jEb/RxNFyegNul7eNslCXP9FDj/Lcu0X8KEyMceP2ntpaHrDEVA=="
    },
    "node_modules/picomatch": {
      "version": "2.3.1",
      "resolved": "https://registry.npmjs.org/picomatch/-/picomatch-2.3.1.tgz",
      "integrity": "sha512-JU3teHTNjmE2VCGFzuY8EXzCDVwEqB2a8fsIvwaStHhAWJEeVd1o1QD80CU6+ZdEXXSLbSsuLwJjkCBWqRQUVA==",
      "dev": true,
      "engines": {
        "node": ">=8.6"
      },
      "funding": {
        "url": "https://github.com/sponsors/jonschlinkert"
      }
    },
    "node_modules/possible-typed-array-names": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/possible-typed-array-names/-/possible-typed-array-names-1.1.0.tgz",
      "integrity": "sha512-/+5VFTchJDoVj3bhoqi6UeymcD00DAwb1nJwamzPvHEszJ4FpF6SNNbUbOS8yI56qHzdV8eK0qEfOSiodkTdxg==",
      "dev": true,
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/postcss": {
      "version": "8.5.6",
      "resolved": "https://registry.npmjs.org/postcss/-/postcss-8.5.6.tgz",
      "integrity": "sha512-3Ybi1tAuwAP9s0r1UQ2J4n5Y0G05bJkpUIO0/bI9MhwmD70S5aTWbXGBwxHrelT+XM1k6dM0pk+SwNkpTRN7Pg==",
      "dev": true,
      "funding": [
        {
          "type": "opencollective",
          "url": "https://opencollective.com/postcss/"
        },
        {
          "type": "tidelift",
          "url": "https://tidelift.com/funding/github/npm/postcss"
        },
        {
          "type": "github",
          "url": "https://github.com/sponsors/ai"
        }
      ],
      "dependencies": {
        "nanoid": "^3.3.11",
        "picocolors": "^1.1.1",
        "source-map-js": "^1.2.1"
      },
      "engines": {
        "node": "^10 || ^12 || >=14"
      }
    },
    "node_modules/prelude-ls": {
      "version": "1.2.1",
      "resolved": "https://registry.npmjs.org/prelude-ls/-/prelude-ls-1.2.1.tgz",
      "integrity": "sha512-vkcDPrRZo1QZLbn5RLGPpg/WmIQ65qoWWhcGKf/b5eplkkarX0m9z8ppCat4mlOqUsWpyNuYgO3VRyrYHSzX5g==",
      "dev": true,
      "engines": {
        "node": ">= 0.8.0"
      }
    },
    "node_modules/prop-types": {
      "version": "15.8.1",
      "resolved": "https://registry.npmjs.org/prop-types/-/prop-types-15.8.1.tgz",
      "integrity": "sha512-oj87CgZICdulUohogVAR7AjlC0327U4el4L6eAvOqCeudMDVU0NThNaV+b9Df4dXgSP1gXMTnPdhfe/2qDH5cg==",
      "dev": true,
      "dependencies": {
        "loose-envify": "^1.4.0",
        "object-assign": "^4.1.1",
        "react-is": "^16.13.1"
      }
    },
    "node_modules/punycode": {
      "version": "2.3.1",
      "resolved": "https://registry.npmjs.org/punycode/-/punycode-2.3.1.tgz",
      "integrity": "sha512-vYt7UD1U9Wg6138shLtLOvdAu+8DsC/ilFtEVHcH+wydcSpNE20AfSOduf6MkRFahL5FY7X1oU7nKVZFtfq8Fg==",
      "dev": true,
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/queue-microtask": {
      "version": "1.2.3",
      "resolved": "https://registry.npmjs.org/queue-microtask/-/queue-microtask-1.2.3.tgz",
      "integrity": "sha512-NuaNSa6flKT5JaSYQzJok04JzTL1CA6aGhv5rfLW3PgqA+M2ChpZQnAC8h8i4ZFkBS8X5RqkDBHA7r4hej3K9A==",
      "dev": true,
      "funding": [
        {
          "type": "github",
          "url": "https://github.com/sponsors/feross"
        },
        {
          "type": "patreon",
          "url": "https://www.patreon.com/feross"
        },
        {
          "type": "consulting",
          "url": "https://feross.org/support"
        }
      ]
    },
    "node_modules/react": {
      "version": "19.2.1",
      "resolved": "https://registry.npmjs.org/react/-/react-19.2.1.tgz",
      "integrity": "sha512-DGrYcCWK7tvYMnWh79yrPHt+vdx9tY+1gPZa7nJQtO/p8bLTDaHp4dzwEhQB7pZ4Xe3ok4XKuEPrVuc+wlpkmw==",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/react-dom": {
      "version": "19.2.1",
      "resolved": "https://registry.npmjs.org/react-dom/-/react-dom-19.2.1.tgz",
      "integrity": "sha512-ibrK8llX2a4eOskq1mXKu/TGZj9qzomO+sNfO98M6d9zIPOEhlBkMkBUBLd1vgS0gQsLDBzA+8jJBVXDnfHmJg==",
      "dependencies": {
        "scheduler": "^0.27.0"
      },
      "peerDependencies": {
        "react": "^19.2.1"
      }
    },
    "node_modules/react-is": {
      "version": "16.13.1",
      "resolved": "https://registry.npmjs.org/react-is/-/react-is-16.13.1.tgz",
      "integrity": "sha512-24e6ynE2H+OKt4kqsOvNd8kBpV65zoxbA4BVsEOB3ARVWQki/DHzaUoC5KuON/BiccDaCCTZBuOcfZs70kR8bQ=="
    },
    "node_modules/react-redux": {
      "version": "9.2.0",
      "resolved": "https://registry.npmjs.org/react-redux/-/react-redux-9.2.0.tgz",
      "integrity": "sha512-ROY9fvHhwOD9ySfrF0wmvu//bKCQ6AeZZq1nJNtbDC+kk5DuSuNX/n6YWYF/SYy7bSba4D4FSz8DJeKY/S/r+g==",
      "dependencies": {
        "@types/use-sync-external-store": "^0.0.6",
        "use-sync-external-store": "^1.4.0"
      },
      "peerDependencies": {
        "@types/react": "^18.2.25 || ^19",
        "react": "^18.0 || ^19",
        "redux": "^5.0.0"
      },
      "peerDependenciesMeta": {
        "@types/react": {
          "optional": true
        },
        "redux": {
          "optional": true
        }
      }
    },
    "node_modules/recharts": {
      "version": "3.6.0",
      "resolved": "https://registry.npmjs.org/recharts/-/recharts-3.6.0.tgz",
      "integrity": "sha512-L5bjxvQRAe26RlToBAziKUB7whaGKEwD3znoM6fz3DrTowCIC/FnJYnuq1GEzB8Zv2kdTfaxQfi5GoH0tBinyg==",
      "dependencies": {
        "@reduxjs/toolkit": "1.x.x || 2.x.x",
        "clsx": "^2.1.1",
        "decimal.js-light": "^2.5.1",
        "es-toolkit": "^1.39.3",
        "eventemitter3": "^5.0.1",
        "immer": "^10.1.1",
        "react-redux": "8.x.x || 9.x.x",
        "reselect": "5.1.1",
        "tiny-invariant": "^1.3.3",
        "use-sync-external-store": "^1.2.2",
        "victory-vendor": "^37.0.2"
      },
      "engines": {
        "node": ">=18"
      },
      "peerDependencies": {
        "react": "^16.8.0 || ^17.0.0 || ^18.0.0 || ^19.0.0",
        "react-dom": "^16.0.0 || ^17.0.0 || ^18.0.0 || ^19.0.0",
        "react-is": "^16.8.0 || ^17.0.0 || ^18.0.0 || ^19.0.0"
      }
    },
    "node_modules/redux": {
      "version": "5.0.1",
      "resolved": "https://registry.npmjs.org/redux/-/redux-5.0.1.tgz",
      "integrity": "sha512-M9/ELqF6fy8FwmkpnF0S3YKOqMyoWJ4+CS5Efg2ct3oY9daQvd/Pc71FpGZsVsbl3Cpb+IIcjBDUnnyBdQbq4w=="
    },
    "node_modules/redux-thunk": {
      "version": "3.1.0",
      "resolved": "https://registry.npmjs.org/redux-thunk/-/redux-thunk-3.1.0.tgz",
      "integrity": "sha512-NW2r5T6ksUKXCabzhL9z+h206HQw/NJkcLm1GPImRQ8IzfXwRGqjVhKJGauHirT0DAuyy6hjdnMZaRoAcy0Klw==",
      "peerDependencies": {
        "redux": "^5.0.0"
      }
    },
    "node_modules/reflect.getprototypeof": {
      "version": "1.0.10",
      "resolved": "https://registry.npmjs.org/reflect.getprototypeof/-/reflect.getprototypeof-1.0.10.tgz",
      "integrity": "sha512-00o4I+DVrefhv+nX0ulyi3biSHCPDe+yLv5o/p6d/UVlirijB8E16FtfwSAi4g3tcqrQ4lRAqQSoFEZJehYEcw==",
      "dev": true,
      "dependencies": {
        "call-bind": "^1.0.8",
        "define-properties": "^1.2.1",
        "es-abstract": "^1.23.9",
        "es-errors": "^1.3.0",
        "es-object-atoms": "^1.0.0",
        "get-intrinsic": "^1.2.7",
        "get-proto": "^1.0.1",
        "which-builtin-type": "^1.2.1"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/regexp.prototype.flags": {
      "version": "1.5.4",
      "resolved": "https://registry.npmjs.org/regexp.prototype.flags/-/regexp.prototype.flags-1.5.4.tgz",
      "integrity": "sha512-dYqgNSZbDwkaJ2ceRd9ojCGjBq+mOm9LmtXnAnEGyHhN/5R7iDW2TRw3h+o/jCFxus3P2LfWIIiwowAjANm7IA==",
      "dev": true,
      "dependencies": {
        "call-bind": "^1.0.8",
        "define-properties": "^1.2.1",
        "es-errors": "^1.3.0",
        "get-proto": "^1.0.1",
        "gopd": "^1.2.0",
        "set-function-name": "^2.0.2"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/reselect": {
      "version": "5.1.1",
      "resolved": "https://registry.npmjs.org/reselect/-/reselect-5.1.1.tgz",
      "integrity": "sha512-K/BG6eIky/SBpzfHZv/dd+9JBFiS4SWV7FIujVyJRux6e45+73RaUHXLmIR1f7WOMaQ0U1km6qwklRQxpJJY0w=="
    },
    "node_modules/resolve": {
      "version": "1.22.11",
      "resolved": "https://registry.npmjs.org/resolve/-/resolve-1.22.11.tgz",
      "integrity": "sha512-RfqAvLnMl313r7c9oclB1HhUEAezcpLjz95wFH4LVuhk9JF/r22qmVP9AMmOU4vMX7Q8pN8jwNg/CSpdFnMjTQ==",
      "dev": true,
      "dependencies": {
        "is-core-module": "^2.16.1",
        "path-parse": "^1.0.7",
        "supports-preserve-symlinks-flag": "^1.0.0"
      },
      "bin": {
        "resolve": "bin/resolve"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/resolve-from": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/resolve-from/-/resolve-from-4.0.0.tgz",
      "integrity": "sha512-pb/MYmXstAkysRFx8piNI1tGFNQIFA3vkE3Gq4EuA1dF6gHp/+vgZqsCGJapvy8N3Q+4o7FwvquPJcnZ7RYy4g==",
      "dev": true,
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/resolve-pkg-maps": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/resolve-pkg-maps/-/resolve-pkg-maps-1.0.0.tgz",
      "integrity": "sha512-seS2Tj26TBVOC2NIc2rOe2y2ZO7efxITtLZcGSOnHHNOQ7CkiUBfw0Iw2ck6xkIhPwLhKNLS8BO+hEpngQlqzw==",
      "dev": true,
      "funding": {
        "url": "https://github.com/privatenumber/resolve-pkg-maps?sponsor=1"
      }
    },
    "node_modules/reusify": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/reusify/-/reusify-1.1.0.tgz",
      "integrity": "sha512-g6QUff04oZpHs0eG5p83rFLhHeV00ug/Yf9nZM6fLeUrPguBTkTQOdpAWWspMh55TZfVQDPaN3NQJfbVRAxdIw==",
      "dev": true,
      "engines": {
        "iojs": ">=1.0.0",
        "node": ">=0.10.0"
      }
    },
    "node_modules/run-parallel": {
      "version": "1.2.0",
      "resolved": "https://registry.npmjs.org/run-parallel/-/run-parallel-1.2.0.tgz",
      "integrity": "sha512-5l4VyZR86LZ/lDxZTR6jqL8AFE2S0IFLMP26AbjsLVADxHdhB/c0GUsH+y39UfCi3dzz8OlQuPmnaJOMoDHQBA==",
      "dev": true,
      "funding": [
        {
          "type": "github",
          "url": "https://github.com/sponsors/feross"
        },
        {
          "type": "patreon",
          "url": "https://www.patreon.com/feross"
        },
        {
          "type": "consulting",
          "url": "https://feross.org/support"
        }
      ],
      "dependencies": {
        "queue-microtask": "^1.2.2"
      }
    },
    "node_modules/safe-array-concat": {
      "version": "1.1.3",
      "resolved": "https://registry.npmjs.org/safe-array-concat/-/safe-array-concat-1.1.3.tgz",
      "integrity": "sha512-AURm5f0jYEOydBj7VQlVvDrjeFgthDdEF5H1dP+6mNpoXOMo1quQqJ4wvJDyRZ9+pO3kGWoOdmV08cSv2aJV6Q==",
      "dev": true,
      "dependencies": {
        "call-bind": "^1.0.8",
        "call-bound": "^1.0.2",
        "get-intrinsic": "^1.2.6",
        "has-symbols": "^1.1.0",
        "isarray": "^2.0.5"
      },
      "engines": {
        "node": ">=0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/safe-push-apply": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/safe-push-apply/-/safe-push-apply-1.0.0.tgz",
      "integrity": "sha512-iKE9w/Z7xCzUMIZqdBsp6pEQvwuEebH4vdpjcDWnyzaI6yl6O9FHvVpmGelvEHNsoY6wGblkxR6Zty/h00WiSA==",
      "dev": true,
      "dependencies": {
        "es-errors": "^1.3.0",
        "isarray": "^2.0.5"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/safe-regex-test": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/safe-regex-test/-/safe-regex-test-1.1.0.tgz",
      "integrity": "sha512-x/+Cz4YrimQxQccJf5mKEbIa1NzeCRNI5Ecl/ekmlYaampdNLPalVyIcCZNNH3MvmqBugV5TMYZXv0ljslUlaw==",
      "dev": true,
      "dependencies": {
        "call-bound": "^1.0.2",
        "es-errors": "^1.3.0",
        "is-regex": "^1.2.1"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/scheduler": {
      "version": "0.27.0",
      "resolved": "https://registry.npmjs.org/scheduler/-/scheduler-0.27.0.tgz",
      "integrity": "sha512-eNv+WrVbKu1f3vbYJT/xtiF5syA5HPIMtf9IgY/nKg0sWqzAUEvqY/xm7OcZc/qafLx/iO9FgOmeSAp4v5ti/Q=="
    },
    "node_modules/semver": {
      "version": "6.3.1",
      "resolved": "https://registry.npmjs.org/semver/-/semver-6.3.1.tgz",
      "integrity": "sha512-BR7VvDCVHO+q2xBEWskxS6DJE1qRnb7DxzUrogb71CWoSficBxYsiAGd+Kl0mmq/MprG9yArRkyrQxTO6XjMzA==",
      "dev": true,
      "bin": {
        "semver": "bin/semver.js"
      }
    },
    "node_modules/set-function-length": {
      "version": "1.2.2",
      "resolved": "https://registry.npmjs.org/set-function-length/-/set-function-length-1.2.2.tgz",
      "integrity": "sha512-pgRc4hJ4/sNjWCSS9AmnS40x3bNMDTknHgL5UaMBTMyJnU90EgWh1Rz+MC9eFu4BuN/UwZjKQuY/1v3rM7HMfg==",
      "dev": true,
      "dependencies": {
        "define-data-property": "^1.1.4",
        "es-errors": "^1.3.0",
        "function-bind": "^1.1.2",
        "get-intrinsic": "^1.2.4",
        "gopd": "^1.0.1",
        "has-property-descriptors": "^1.0.2"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/set-function-name": {
      "version": "2.0.2",
      "resolved": "https://registry.npmjs.org/set-function-name/-/set-function-name-2.0.2.tgz",
      "integrity": "sha512-7PGFlmtwsEADb0WYyvCMa1t+yke6daIG4Wirafur5kcf+MhUnPms1UeR0CKQdTZD81yESwMHbtn+TR+dMviakQ==",
      "dev": true,
      "dependencies": {
        "define-data-property": "^1.1.4",
        "es-errors": "^1.3.0",
        "functions-have-names": "^1.2.3",
        "has-property-descriptors": "^1.0.2"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/set-proto": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/set-proto/-/set-proto-1.0.0.tgz",
      "integrity": "sha512-RJRdvCo6IAnPdsvP/7m6bsQqNnn1FCBX5ZNtFL98MmFF/4xAIJTIg1YbHW5DC2W5SKZanrC6i4HsJqlajw/dZw==",
      "dev": true,
      "dependencies": {
        "dunder-proto": "^1.0.1",
        "es-errors": "^1.3.0",
        "es-object-atoms": "^1.0.0"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/sharp": {
      "version": "0.34.5",
      "resolved": "https://registry.npmjs.org/sharp/-/sharp-0.34.5.tgz",
      "integrity": "sha512-Ou9I5Ft9WNcCbXrU9cMgPBcCK8LiwLqcbywW3t4oDV37n1pzpuNLsYiAV8eODnjbtQlSDwZ2cUEeQz4E54Hltg==",
      "hasInstallScript": true,
      "optional": true,
      "dependencies": {
        "@img/colour": "^1.0.0",
        "detect-libc": "^2.1.2",
        "semver": "^7.7.3"
      },
      "engines": {
        "node": "^18.17.0 || ^20.3.0 || >=21.0.0"
      },
      "funding": {
        "url": "https://opencollective.com/libvips"
      },
      "optionalDependencies": {
        "@img/sharp-darwin-arm64": "0.34.5",
        "@img/sharp-darwin-x64": "0.34.5",
        "@img/sharp-libvips-darwin-arm64": "1.2.4",
        "@img/sharp-libvips-darwin-x64": "1.2.4",
        "@img/sharp-libvips-linux-arm": "1.2.4",
        "@img/sharp-libvips-linux-arm64": "1.2.4",
        "@img/sharp-libvips-linux-ppc64": "1.2.4",
        "@img/sharp-libvips-linux-riscv64": "1.2.4",
        "@img/sharp-libvips-linux-s390x": "1.2.4",
        "@img/sharp-libvips-linux-x64": "1.2.4",
        "@img/sharp-libvips-linuxmusl-arm64": "1.2.4",
        "@img/sharp-libvips-linuxmusl-x64": "1.2.4",
        "@img/sharp-linux-arm": "0.34.5",
        "@img/sharp-linux-arm64": "0.34.5",
        "@img/sharp-linux-ppc64": "0.34.5",
        "@img/sharp-linux-riscv64": "0.34.5",
        "@img/sharp-linux-s390x": "0.34.5",
        "@img/sharp-linux-x64": "0.34.5",
        "@img/sharp-linuxmusl-arm64": "0.34.5",
        "@img/sharp-linuxmusl-x64": "0.34.5",
        "@img/sharp-wasm32": "0.34.5",
        "@img/sharp-win32-arm64": "0.34.5",
        "@img/sharp-win32-ia32": "0.34.5",
        "@img/sharp-win32-x64": "0.34.5"
      }
    },
    "node_modules/sharp/node_modules/semver": {
      "version": "7.7.3",
      "resolved": "https://registry.npmjs.org/semver/-/semver-7.7.3.tgz",
      "integrity": "sha512-SdsKMrI9TdgjdweUSR9MweHA4EJ8YxHn8DFaDisvhVlUOe4BF1tLD7GAj0lIqWVl+dPb/rExr0Btby5loQm20Q==",
      "optional": true,
      "bin": {
        "semver": "bin/semver.js"
      },
      "engines": {
        "node": ">=10"
      }
    },
    "node_modules/shebang-command": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/shebang-command/-/shebang-command-2.0.0.tgz",
      "integrity": "sha512-kHxr2zZpYtdmrN1qDjrrX/Z1rR1kG8Dx+gkpK1G4eXmvXswmcE1hTWBWYUzlraYw1/yZp6YuDY77YtvbN0dmDA==",
      "dev": true,
      "dependencies": {
        "shebang-regex": "^3.0.0"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/shebang-regex": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/shebang-regex/-/shebang-regex-3.0.0.tgz",
      "integrity": "sha512-7++dFhtcx3353uBaq8DDR4NuxBetBzC7ZQOhmTQInHEd6bSrXdiEyzCvG07Z44UYdLShWUyXt5M/yhz8ekcb1A==",
      "dev": true,
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/side-channel": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/side-channel/-/side-channel-1.1.0.tgz",
      "integrity": "sha512-ZX99e6tRweoUXqR+VBrslhda51Nh5MTQwou5tnUDgbtyM0dBgmhEDtWGP/xbKn6hqfPRHujUNwz5fy/wbbhnpw==",
      "dev": true,
      "dependencies": {
        "es-errors": "^1.3.0",
        "object-inspect": "^1.13.3",
        "side-channel-list": "^1.0.0",
        "side-channel-map": "^1.0.1",
        "side-channel-weakmap": "^1.0.2"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/side-channel-list": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/side-channel-list/-/side-channel-list-1.0.0.tgz",
      "integrity": "sha512-FCLHtRD/gnpCiCHEiJLOwdmFP+wzCmDEkc9y7NsYxeF4u7Btsn1ZuwgwJGxImImHicJArLP4R0yX4c2KCrMrTA==",
      "dev": true,
      "dependencies": {
        "es-errors": "^1.3.0",
        "object-inspect": "^1.13.3"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/side-channel-map": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/side-channel-map/-/side-channel-map-1.0.1.tgz",
      "integrity": "sha512-VCjCNfgMsby3tTdo02nbjtM/ewra6jPHmpThenkTYh8pG9ucZ/1P8So4u4FGBek/BjpOVsDCMoLA/iuBKIFXRA==",
      "dev": true,
      "dependencies": {
        "call-bound": "^1.0.2",
        "es-errors": "^1.3.0",
        "get-intrinsic": "^1.2.5",
        "object-inspect": "^1.13.3"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/side-channel-weakmap": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/side-channel-weakmap/-/side-channel-weakmap-1.0.2.tgz",
      "integrity": "sha512-WPS/HvHQTYnHisLo9McqBHOJk2FkHO/tlpvldyrnem4aeQp4hai3gythswg6p01oSoTl58rcpiFAjF2br2Ak2A==",
      "dev": true,
      "dependencies": {
        "call-bound": "^1.0.2",
        "es-errors": "^1.3.0",
        "get-intrinsic": "^1.2.5",
        "object-inspect": "^1.13.3",
        "side-channel-map": "^1.0.1"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/source-map-js": {
      "version": "1.2.1",
      "resolved": "https://registry.npmjs.org/source-map-js/-/source-map-js-1.2.1.tgz",
      "integrity": "sha512-UXWMKhLOwVKb728IUtQPXxfYU+usdybtUrK/8uGE8CQMvrhOpwvzDBwj0QhSL7MQc7vIsISBG8VQ8+IDQxpfQA==",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/stable-hash": {
      "version": "0.0.5",
      "resolved": "https://registry.npmjs.org/stable-hash/-/stable-hash-0.0.5.tgz",
      "integrity": "sha512-+L3ccpzibovGXFK+Ap/f8LOS0ahMrHTf3xu7mMLSpEGU0EO9ucaysSylKo9eRDFNhWve/y275iPmIZ4z39a9iA==",
      "dev": true
    },
    "node_modules/stop-iteration-iterator": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/stop-iteration-iterator/-/stop-iteration-iterator-1.1.0.tgz",
      "integrity": "sha512-eLoXW/DHyl62zxY4SCaIgnRhuMr6ri4juEYARS8E6sCEqzKpOiE521Ucofdx+KnDZl5xmvGYaaKCk5FEOxJCoQ==",
      "dev": true,
      "dependencies": {
        "es-errors": "^1.3.0",
        "internal-slot": "^1.1.0"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/string.prototype.includes": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/string.prototype.includes/-/string.prototype.includes-2.0.1.tgz",
      "integrity": "sha512-o7+c9bW6zpAdJHTtujeePODAhkuicdAryFsfVKwA+wGw89wJ4GTY484WTucM9hLtDEOpOvI+aHnzqnC5lHp4Rg==",
      "dev": true,
      "dependencies": {
        "call-bind": "^1.0.7",
        "define-properties": "^1.2.1",
        "es-abstract": "^1.23.3"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/string.prototype.matchall": {
      "version": "4.0.12",
      "resolved": "https://registry.npmjs.org/string.prototype.matchall/-/string.prototype.matchall-4.0.12.tgz",
      "integrity": "sha512-6CC9uyBL+/48dYizRf7H7VAYCMCNTBeM78x/VTUe9bFEaxBepPJDa1Ow99LqI/1yF7kuy7Q3cQsYMrcjGUcskA==",
      "dev": true,
      "dependencies": {
        "call-bind": "^1.0.8",
        "call-bound": "^1.0.3",
        "define-properties": "^1.2.1",
        "es-abstract": "^1.23.6",
        "es-errors": "^1.3.0",
        "es-object-atoms": "^1.0.0",
        "get-intrinsic": "^1.2.6",
        "gopd": "^1.2.0",
        "has-symbols": "^1.1.0",
        "internal-slot": "^1.1.0",
        "regexp.prototype.flags": "^1.5.3",
        "set-function-name": "^2.0.2",
        "side-channel": "^1.1.0"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/string.prototype.repeat": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/string.prototype.repeat/-/string.prototype.repeat-1.0.0.tgz",
      "integrity": "sha512-0u/TldDbKD8bFCQ/4f5+mNRrXwZ8hg2w7ZR8wa16e8z9XpePWl3eGEcUD0OXpEH/VJH/2G3gjUtR3ZOiBe2S/w==",
      "dev": true,
      "dependencies": {
        "define-properties": "^1.1.3",
        "es-abstract": "^1.17.5"
      }
    },
    "node_modules/string.prototype.trim": {
      "version": "1.2.10",
      "resolved": "https://registry.npmjs.org/string.prototype.trim/-/string.prototype.trim-1.2.10.tgz",
      "integrity": "sha512-Rs66F0P/1kedk5lyYyH9uBzuiI/kNRmwJAR9quK6VOtIpZ2G+hMZd+HQbbv25MgCA6gEffoMZYxlTod4WcdrKA==",
      "dev": true,
      "dependencies": {
        "call-bind": "^1.0.8",
        "call-bound": "^1.0.2",
        "define-data-property": "^1.1.4",
        "define-properties": "^1.2.1",
        "es-abstract": "^1.23.5",
        "es-object-atoms": "^1.0.0",
        "has-property-descriptors": "^1.0.2"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/string.prototype.trimend": {
      "version": "1.0.9",
      "resolved": "https://registry.npmjs.org/string.prototype.trimend/-/string.prototype.trimend-1.0.9.tgz",
      "integrity": "sha512-G7Ok5C6E/j4SGfyLCloXTrngQIQU3PWtXGst3yM7Bea9FRURf1S42ZHlZZtsNque2FN2PoUhfZXYLNWwEr4dLQ==",
      "dev": true,
      "dependencies": {
        "call-bind": "^1.0.8",
        "call-bound": "^1.0.2",
        "define-properties": "^1.2.1",
        "es-object-atoms": "^1.0.0"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/string.prototype.trimstart": {
      "version": "1.0.8",
      "resolved": "https://registry.npmjs.org/string.prototype.trimstart/-/string.prototype.trimstart-1.0.8.tgz",
      "integrity": "sha512-UXSH262CSZY1tfu3G3Secr6uGLCFVPMhIqHjlgCUtCCcgihYc/xKs9djMTMUOb2j1mVSeU8EU6NWc/iQKU6Gfg==",
      "dev": true,
      "dependencies": {
        "call-bind": "^1.0.7",
        "define-properties": "^1.2.1",
        "es-object-atoms": "^1.0.0"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/strip-bom": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/strip-bom/-/strip-bom-3.0.0.tgz",
      "integrity": "sha512-vavAMRXOgBVNF6nyEEmL3DBK19iRpDcoIwW+swQ+CbGiu7lju6t+JklA1MHweoWtadgt4ISVUsXLyDq34ddcwA==",
      "dev": true,
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/strip-json-comments": {
      "version": "3.1.1",
      "resolved": "https://registry.npmjs.org/strip-json-comments/-/strip-json-comments-3.1.1.tgz",
      "integrity": "sha512-6fPc+R4ihwqP6N/aIv2f1gMH8lOVtWQHoqC4yK6oSDVVocumAsfCqjkXnqiYMhmMwS/mEHLp7Vehlt3ql6lEig==",
      "dev": true,
      "engines": {
        "node": ">=8"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/styled-jsx": {
      "version": "5.1.6",
      "resolved": "https://registry.npmjs.org/styled-jsx/-/styled-jsx-5.1.6.tgz",
      "integrity": "sha512-qSVyDTeMotdvQYoHWLNGwRFJHC+i+ZvdBRYosOFgC+Wg1vx4frN2/RG/NA7SYqqvKNLf39P2LSRA2pu6n0XYZA==",
      "dependencies": {
        "client-only": "0.0.1"
      },
      "engines": {
        "node": ">= 12.0.0"
      },
      "peerDependencies": {
        "react": ">= 16.8.0 || 17.x.x || ^18.0.0-0 || ^19.0.0-0"
      },
      "peerDependenciesMeta": {
        "@babel/core": {
          "optional": true
        },
        "babel-plugin-macros": {
          "optional": true
        }
      }
    },
    "node_modules/supports-color": {
      "version": "7.2.0",
      "resolved": "https://registry.npmjs.org/supports-color/-/supports-color-7.2.0.tgz",
      "integrity": "sha512-qpCAvRl9stuOHveKsn7HncJRvv501qIacKzQlO/+Lwxc9+0q2wLyv4Dfvt80/DPn2pqOBsJdDiogXGR9+OvwRw==",
      "dev": true,
      "dependencies": {
        "has-flag": "^4.0.0"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/supports-preserve-symlinks-flag": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/supports-preserve-symlinks-flag/-/supports-preserve-symlinks-flag-1.0.0.tgz",
      "integrity": "sha512-ot0WnXS9fgdkgIcePe6RHNk1WA8+muPa6cSjeR3V8K27q9BB1rTE3R1p7Hv0z1ZyAc8s6Vvv8DIyWf681MAt0w==",
      "dev": true,
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/tailwind-merge": {
      "version": "3.4.0",
      "resolved": "https://registry.npmjs.org/tailwind-merge/-/tailwind-merge-3.4.0.tgz",
      "integrity": "sha512-uSaO4gnW+b3Y2aWoWfFpX62vn2sR3skfhbjsEnaBI81WD1wBLlHZe5sWf0AqjksNdYTbGBEd0UasQMT3SNV15g==",
      "license": "MIT",
      "funding": {
        "type": "github",
        "url": "https://github.com/sponsors/dcastil"
      }
    },
    "node_modules/tailwindcss": {
      "version": "4.1.18",
      "resolved": "https://registry.npmjs.org/tailwindcss/-/tailwindcss-4.1.18.tgz",
      "integrity": "sha512-4+Z+0yiYyEtUVCScyfHCxOYP06L5Ne+JiHhY2IjR2KWMIWhJOYZKLSGZaP5HkZ8+bY0cxfzwDE5uOmzFXyIwxw==",
      "dev": true
    },
    "node_modules/tapable": {
      "version": "2.3.0",
      "resolved": "https://registry.npmjs.org/tapable/-/tapable-2.3.0.tgz",
      "integrity": "sha512-g9ljZiwki/LfxmQADO3dEY1CbpmXT5Hm2fJ+QaGKwSXUylMybePR7/67YW7jOrrvjEgL1Fmz5kzyAjWVWLlucg==",
      "dev": true,
      "engines": {
        "node": ">=6"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/webpack"
      }
    },
    "node_modules/tiny-invariant": {
      "version": "1.3.3",
      "resolved": "https://registry.npmjs.org/tiny-invariant/-/tiny-invariant-1.3.3.tgz",
      "integrity": "sha512-+FbBPE1o9QAYvviau/qC5SE3caw21q3xkvWKBtja5vgqOWIHHJ3ioaq1VPfn/Szqctz2bU/oYeKd9/z5BL+PVg=="
    },
    "node_modules/tinyglobby": {
      "version": "0.2.15",
      "resolved": "https://registry.npmjs.org/tinyglobby/-/tinyglobby-0.2.15.tgz",
      "integrity": "sha512-j2Zq4NyQYG5XMST4cbs02Ak8iJUdxRM0XI5QyxXuZOzKOINmWurp3smXu3y5wDcJrptwpSjgXHzIQxR0omXljQ==",
      "dev": true,
      "dependencies": {
        "fdir": "^6.5.0",
        "picomatch": "^4.0.3"
      },
      "engines": {
        "node": ">=12.0.0"
      },
      "funding": {
        "url": "https://github.com/sponsors/SuperchupuDev"
      }
    },
    "node_modules/tinyglobby/node_modules/fdir": {
      "version": "6.5.0",
      "resolved": "https://registry.npmjs.org/fdir/-/fdir-6.5.0.tgz",
      "integrity": "sha512-tIbYtZbucOs0BRGqPJkshJUYdL+SDH7dVM8gjy+ERp3WAUjLEFJE+02kanyHtwjWOnwrKYBiwAmM0p4kLJAnXg==",
      "dev": true,
      "engines": {
        "node": ">=12.0.0"
      },
      "peerDependencies": {
        "picomatch": "^3 || ^4"
      },
      "peerDependenciesMeta": {
        "picomatch": {
          "optional": true
        }
      }
    },
    "node_modules/tinyglobby/node_modules/picomatch": {
      "version": "4.0.3",
      "resolved": "https://registry.npmjs.org/picomatch/-/picomatch-4.0.3.tgz",
      "integrity": "sha512-5gTmgEY/sqK6gFXLIsQNH19lWb4ebPDLA4SdLP7dsWkIXHWlG66oPuVvXSGFPppYZz8ZDZq0dYYrbHfBCVUb1Q==",
      "dev": true,
      "engines": {
        "node": ">=12"
      },
      "funding": {
        "url": "https://github.com/sponsors/jonschlinkert"
      }
    },
    "node_modules/to-regex-range": {
      "version": "5.0.1",
      "resolved": "https://registry.npmjs.org/to-regex-range/-/to-regex-range-5.0.1.tgz",
      "integrity": "sha512-65P7iz6X5yEr1cwcgvQxbbIw7Uk3gOy5dIdtZ4rDveLqhrdJP+Li/Hx6tyK0NEb+2GCyneCMJiGqrADCSNk8sQ==",
      "dev": true,
      "dependencies": {
        "is-number": "^7.0.0"
      },
      "engines": {
        "node": ">=8.0"
      }
    },
    "node_modules/ts-api-utils": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/ts-api-utils/-/ts-api-utils-2.1.0.tgz",
      "integrity": "sha512-CUgTZL1irw8u29bzrOD/nH85jqyc74D6SshFgujOIA7osm2Rz7dYH77agkx7H4FBNxDq7Cjf+IjaX/8zwFW+ZQ==",
      "dev": true,
      "engines": {
        "node": ">=18.12"
      },
      "peerDependencies": {
        "typescript": ">=4.8.4"
      }
    },
    "node_modules/tsconfig-paths": {
      "version": "3.15.0",
      "resolved": "https://registry.npmjs.org/tsconfig-paths/-/tsconfig-paths-3.15.0.tgz",
      "integrity": "sha512-2Ac2RgzDe/cn48GvOe3M+o82pEFewD3UPbyoUHHdKasHwJKjds4fLXWf/Ux5kATBKN20oaFGu+jbElp1pos0mg==",
      "dev": true,
      "dependencies": {
        "@types/json5": "^0.0.29",
        "json5": "^1.0.2",
        "minimist": "^1.2.6",
        "strip-bom": "^3.0.0"
      }
    },
    "node_modules/tsconfig-paths/node_modules/json5": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/json5/-/json5-1.0.2.tgz",
      "integrity": "sha512-g1MWMLBiz8FKi1e4w0UyVL3w+iJceWAFBAaBnnGKOpNa5f8TLktkbre1+s6oICydWAm+HRUGTmI+//xv2hvXYA==",
      "dev": true,
      "dependencies": {
        "minimist": "^1.2.0"
      },
      "bin": {
        "json5": "lib/cli.js"
      }
    },
    "node_modules/tslib": {
      "version": "2.8.1",
      "resolved": "https://registry.npmjs.org/tslib/-/tslib-2.8.1.tgz",
      "integrity": "sha512-oJFu94HQb+KVduSUQL7wnpmqnfmLsOA/nAh6b6EH0wCEoK0/mPeXU6c3wKDV83MkOuHPRHtSXKKU99IBazS/2w=="
    },
    "node_modules/type-check": {
      "version": "0.4.0",
      "resolved": "https://registry.npmjs.org/type-check/-/type-check-0.4.0.tgz",
      "integrity": "sha512-XleUoc9uwGXqjWwXaUTZAmzMcFZ5858QA2vvx1Ur5xIcixXIP+8LnFDgRplU30us6teqdlskFfu+ae4K79Ooew==",
      "dev": true,
      "dependencies": {
        "prelude-ls": "^1.2.1"
      },
      "engines": {
        "node": ">= 0.8.0"
      }
    },
    "node_modules/typed-array-buffer": {
      "version": "1.0.3",
      "resolved": "https://registry.npmjs.org/typed-array-buffer/-/typed-array-buffer-1.0.3.tgz",
      "integrity": "sha512-nAYYwfY3qnzX30IkA6AQZjVbtK6duGontcQm1WSG1MD94YLqK0515GNApXkoxKOWMusVssAHWLh9SeaoefYFGw==",
      "dev": true,
      "dependencies": {
        "call-bound": "^1.0.3",
        "es-errors": "^1.3.0",
        "is-typed-array": "^1.1.14"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/typed-array-byte-length": {
      "version": "1.0.3",
      "resolved": "https://registry.npmjs.org/typed-array-byte-length/-/typed-array-byte-length-1.0.3.tgz",
      "integrity": "sha512-BaXgOuIxz8n8pIq3e7Atg/7s+DpiYrxn4vdot3w9KbnBhcRQq6o3xemQdIfynqSeXeDrF32x+WvfzmOjPiY9lg==",
      "dev": true,
      "dependencies": {
        "call-bind": "^1.0.8",
        "for-each": "^0.3.3",
        "gopd": "^1.2.0",
        "has-proto": "^1.2.0",
        "is-typed-array": "^1.1.14"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/typed-array-byte-offset": {
      "version": "1.0.4",
      "resolved": "https://registry.npmjs.org/typed-array-byte-offset/-/typed-array-byte-offset-1.0.4.tgz",
      "integrity": "sha512-bTlAFB/FBYMcuX81gbL4OcpH5PmlFHqlCCpAl8AlEzMz5k53oNDvN8p1PNOWLEmI2x4orp3raOFB51tv9X+MFQ==",
      "dev": true,
      "dependencies": {
        "available-typed-arrays": "^1.0.7",
        "call-bind": "^1.0.8",
        "for-each": "^0.3.3",
        "gopd": "^1.2.0",
        "has-proto": "^1.2.0",
        "is-typed-array": "^1.1.15",
        "reflect.getprototypeof": "^1.0.9"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/typed-array-length": {
      "version": "1.0.7",
      "resolved": "https://registry.npmjs.org/typed-array-length/-/typed-array-length-1.0.7.tgz",
      "integrity": "sha512-3KS2b+kL7fsuk/eJZ7EQdnEmQoaho/r6KUef7hxvltNA5DR8NAUM+8wJMbJyZ4G9/7i3v5zPBIMN5aybAh2/Jg==",
      "dev": true,
      "dependencies": {
        "call-bind": "^1.0.7",
        "for-each": "^0.3.3",
        "gopd": "^1.0.1",
        "is-typed-array": "^1.1.13",
        "possible-typed-array-names": "^1.0.0",
        "reflect.getprototypeof": "^1.0.6"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/typescript": {
      "version": "5.9.3",
      "resolved": "https://registry.npmjs.org/typescript/-/typescript-5.9.3.tgz",
      "integrity": "sha512-jl1vZzPDinLr9eUt3J/t7V6FgNEw9QjvBPdysz9KfQDD41fQrC2Y4vKQdiaUpFT4bXlb1RHhLpp8wtm6M5TgSw==",
      "dev": true,
      "bin": {
        "tsc": "bin/tsc",
        "tsserver": "bin/tsserver"
      },
      "engines": {
        "node": ">=14.17"
      }
    },
    "node_modules/typescript-eslint": {
      "version": "8.50.0",
      "resolved": "https://registry.npmjs.org/typescript-eslint/-/typescript-eslint-8.50.0.tgz",
      "integrity": "sha512-Q1/6yNUmCpH94fbgMUMg2/BSAr/6U7GBk61kZTv1/asghQOWOjTlp9K8mixS5NcJmm2creY+UFfGeW/+OcA64A==",
      "dev": true,
      "dependencies": {
        "@typescript-eslint/eslint-plugin": "8.50.0",
        "@typescript-eslint/parser": "8.50.0",
        "@typescript-eslint/typescript-estree": "8.50.0",
        "@typescript-eslint/utils": "8.50.0"
      },
      "engines": {
        "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/typescript-eslint"
      },
      "peerDependencies": {
        "eslint": "^8.57.0 || ^9.0.0",
        "typescript": ">=4.8.4 <6.0.0"
      }
    },
    "node_modules/unbox-primitive": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/unbox-primitive/-/unbox-primitive-1.1.0.tgz",
      "integrity": "sha512-nWJ91DjeOkej/TA8pXQ3myruKpKEYgqvpw9lz4OPHj/NWFNluYrjbz9j01CJ8yKQd2g4jFoOkINCTW2I5LEEyw==",
      "dev": true,
      "dependencies": {
        "call-bound": "^1.0.3",
        "has-bigints": "^1.0.2",
        "has-symbols": "^1.1.0",
        "which-boxed-primitive": "^1.1.1"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/undici-types": {
      "version": "6.21.0",
      "resolved": "https://registry.npmjs.org/undici-types/-/undici-types-6.21.0.tgz",
      "integrity": "sha512-iwDZqg0QAGrg9Rav5H4n0M64c3mkR59cJ6wQp+7C4nI0gsmExaedaYLNO44eT4AtBBwjbTiGPMlt2Md0T9H9JQ==",
      "dev": true
    },
    "node_modules/unrs-resolver": {
      "version": "1.11.1",
      "resolved": "https://registry.npmjs.org/unrs-resolver/-/unrs-resolver-1.11.1.tgz",
      "integrity": "sha512-bSjt9pjaEBnNiGgc9rUiHGKv5l4/TGzDmYw3RhnkJGtLhbnnA/5qJj7x3dNDCRx/PJxu774LlH8lCOlB4hEfKg==",
      "dev": true,
      "hasInstallScript": true,
      "dependencies": {
        "napi-postinstall": "^0.3.0"
      },
      "funding": {
        "url": "https://opencollective.com/unrs-resolver"
      },
      "optionalDependencies": {
        "@unrs/resolver-binding-android-arm-eabi": "1.11.1",
        "@unrs/resolver-binding-android-arm64": "1.11.1",
        "@unrs/resolver-binding-darwin-arm64": "1.11.1",
        "@unrs/resolver-binding-darwin-x64": "1.11.1",
        "@unrs/resolver-binding-freebsd-x64": "1.11.1",
        "@unrs/resolver-binding-linux-arm-gnueabihf": "1.11.1",
        "@unrs/resolver-binding-linux-arm-musleabihf": "1.11.1",
        "@unrs/resolver-binding-linux-arm64-gnu": "1.11.1",
        "@unrs/resolver-binding-linux-arm64-musl": "1.11.1",
        "@unrs/resolver-binding-linux-ppc64-gnu": "1.11.1",
        "@unrs/resolver-binding-linux-riscv64-gnu": "1.11.1",
        "@unrs/resolver-binding-linux-riscv64-musl": "1.11.1",
        "@unrs/resolver-binding-linux-s390x-gnu": "1.11.1",
        "@unrs/resolver-binding-linux-x64-gnu": "1.11.1",
        "@unrs/resolver-binding-linux-x64-musl": "1.11.1",
        "@unrs/resolver-binding-wasm32-wasi": "1.11.1",
        "@unrs/resolver-binding-win32-arm64-msvc": "1.11.1",
        "@unrs/resolver-binding-win32-ia32-msvc": "1.11.1",
        "@unrs/resolver-binding-win32-x64-msvc": "1.11.1"
      }
    },
    "node_modules/update-browserslist-db": {
      "version": "1.2.2",
      "resolved": "https://registry.npmjs.org/update-browserslist-db/-/update-browserslist-db-1.2.2.tgz",
      "integrity": "sha512-E85pfNzMQ9jpKkA7+TJAi4TJN+tBCuWh5rUcS/sv6cFi+1q9LYDwDI5dpUL0u/73EElyQ8d3TEaeW4sPedBqYA==",
      "dev": true,
      "funding": [
        {
          "type": "opencollective",
          "url": "https://opencollective.com/browserslist"
        },
        {
          "type": "tidelift",
          "url": "https://tidelift.com/funding/github/npm/browserslist"
        },
        {
          "type": "github",
          "url": "https://github.com/sponsors/ai"
        }
      ],
      "dependencies": {
        "escalade": "^3.2.0",
        "picocolors": "^1.1.1"
      },
      "bin": {
        "update-browserslist-db": "cli.js"
      },
      "peerDependencies": {
        "browserslist": ">= 4.21.0"
      }
    },
    "node_modules/uri-js": {
      "version": "4.4.1",
      "resolved": "https://registry.npmjs.org/uri-js/-/uri-js-4.4.1.tgz",
      "integrity": "sha512-7rKUyy33Q1yc98pQ1DAmLtwX109F7TIfWlW1Ydo8Wl1ii1SeHieeh0HHfPeL2fMXK6z0s8ecKs9frCuLJvndBg==",
      "dev": true,
      "dependencies": {
        "punycode": "^2.1.0"
      }
    },
    "node_modules/use-sync-external-store": {
      "version": "1.6.0",
      "resolved": "https://registry.npmjs.org/use-sync-external-store/-/use-sync-external-store-1.6.0.tgz",
      "integrity": "sha512-Pp6GSwGP/NrPIrxVFAIkOQeyw8lFenOHijQWkUTrDvrF4ALqylP2C/KCkeS9dpUM3KvYRQhna5vt7IL95+ZQ9w==",
      "peerDependencies": {
        "react": "^16.8.0 || ^17.0.0 || ^18.0.0 || ^19.0.0"
      }
    },
    "node_modules/victory-vendor": {
      "version": "37.3.6",
      "resolved": "https://registry.npmjs.org/victory-vendor/-/victory-vendor-37.3.6.tgz",
      "integrity": "sha512-SbPDPdDBYp+5MJHhBCAyI7wKM3d5ivekigc2Dk2s7pgbZ9wIgIBYGVw4zGHBml/qTFbexrofXW6Gu4noGxrOwQ==",
      "dependencies": {
        "@types/d3-array": "^3.0.3",
        "@types/d3-ease": "^3.0.0",
        "@types/d3-interpolate": "^3.0.1",
        "@types/d3-scale": "^4.0.2",
        "@types/d3-shape": "^3.1.0",
        "@types/d3-time": "^3.0.0",
        "@types/d3-timer": "^3.0.0",
        "d3-array": "^3.1.6",
        "d3-ease": "^3.0.1",
        "d3-interpolate": "^3.0.1",
        "d3-scale": "^4.0.2",
        "d3-shape": "^3.1.0",
        "d3-time": "^3.0.0",
        "d3-timer": "^3.0.1"
      }
    },
    "node_modules/which": {
      "version": "2.0.2",
      "resolved": "https://registry.npmjs.org/which/-/which-2.0.2.tgz",
      "integrity": "sha512-BLI3Tl1TW3Pvl70l3yq3Y64i+awpwXqsGBYWkkqMtnbXgrMD+yj7rhW0kuEDxzJaYXGjEW5ogapKNMEKNMjibA==",
      "dev": true,
      "dependencies": {
        "isexe": "^2.0.0"
      },
      "bin": {
        "node-which": "bin/node-which"
      },
      "engines": {
        "node": ">= 8"
      }
    },
    "node_modules/which-boxed-primitive": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/which-boxed-primitive/-/which-boxed-primitive-1.1.1.tgz",
      "integrity": "sha512-TbX3mj8n0odCBFVlY8AxkqcHASw3L60jIuF8jFP78az3C2YhmGvqbHBpAjTRH2/xqYunrJ9g1jSyjCjpoWzIAA==",
      "dev": true,
      "dependencies": {
        "is-bigint": "^1.1.0",
        "is-boolean-object": "^1.2.1",
        "is-number-object": "^1.1.1",
        "is-string": "^1.1.1",
        "is-symbol": "^1.1.1"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/which-builtin-type": {
      "version": "1.2.1",
      "resolved": "https://registry.npmjs.org/which-builtin-type/-/which-builtin-type-1.2.1.tgz",
      "integrity": "sha512-6iBczoX+kDQ7a3+YJBnh3T+KZRxM/iYNPXicqk66/Qfm1b93iu+yOImkg0zHbj5LNOcNv1TEADiZ0xa34B4q6Q==",
      "dev": true,
      "dependencies": {
        "call-bound": "^1.0.2",
        "function.prototype.name": "^1.1.6",
        "has-tostringtag": "^1.0.2",
        "is-async-function": "^2.0.0",
        "is-date-object": "^1.1.0",
        "is-finalizationregistry": "^1.1.0",
        "is-generator-function": "^1.0.10",
        "is-regex": "^1.2.1",
        "is-weakref": "^1.0.2",
        "isarray": "^2.0.5",
        "which-boxed-primitive": "^1.1.0",
        "which-collection": "^1.0.2",
        "which-typed-array": "^1.1.16"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/which-collection": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/which-collection/-/which-collection-1.0.2.tgz",
      "integrity": "sha512-K4jVyjnBdgvc86Y6BkaLZEN933SwYOuBFkdmBu9ZfkcAbdVbpITnDmjvZ/aQjRXQrv5EPkTnD1s39GiiqbngCw==",
      "dev": true,
      "dependencies": {
        "is-map": "^2.0.3",
        "is-set": "^2.0.3",
        "is-weakmap": "^2.0.2",
        "is-weakset": "^2.0.3"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/which-typed-array": {
      "version": "1.1.19",
      "resolved": "https://registry.npmjs.org/which-typed-array/-/which-typed-array-1.1.19.tgz",
      "integrity": "sha512-rEvr90Bck4WZt9HHFC4DJMsjvu7x+r6bImz0/BrbWb7A2djJ8hnZMrWnHo9F8ssv0OMErasDhftrfROTyqSDrw==",
      "dev": true,
      "dependencies": {
        "available-typed-arrays": "^1.0.7",
        "call-bind": "^1.0.8",
        "call-bound": "^1.0.4",
        "for-each": "^0.3.5",
        "get-proto": "^1.0.1",
        "gopd": "^1.2.0",
        "has-tostringtag": "^1.0.2"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/word-wrap": {
      "version": "1.2.5",
      "resolved": "https://registry.npmjs.org/word-wrap/-/word-wrap-1.2.5.tgz",
      "integrity": "sha512-BN22B5eaMMI9UMtjrGd5g5eCYPpCPDUy0FJXbYsaT5zYxjFOckS53SQDE3pWkVoWpHXVb3BrYcEN4Twa55B5cA==",
      "dev": true,
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/yallist": {
      "version": "3.1.1",
      "resolved": "https://registry.npmjs.org/yallist/-/yallist-3.1.1.tgz",
      "integrity": "sha512-a4UGQaWPH59mOXUYnAG2ewncQS4i4F43Tv3JoAM+s2VDAmS9NsK8GpDMLrCHPksFT7h3K6TOoUNn2pb7RoXx4g==",
      "dev": true
    },
    "node_modules/yocto-queue": {
      "version": "0.1.0",
      "resolved": "https://registry.npmjs.org/yocto-queue/-/yocto-queue-0.1.0.tgz",
      "integrity": "sha512-rVksvsnNCdJ/ohGc6xgPwyN8eheCxsiLM8mxuE/t/mOVqJewPuO1miLpTHQiRgTKCLexL4MeAFVagts7HmNZ2Q==",
      "dev": true,
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/zod": {
      "version": "4.2.0",
      "resolved": "https://registry.npmjs.org/zod/-/zod-4.2.0.tgz",
      "integrity": "sha512-Bd5fw9wlIhtqCCxotZgdTOMwGm1a0u75wARVEY9HMs1X17trvA/lMi4+MGK5EUfYkXVTbX8UDiDKW4OgzHVUZw==",
      "dev": true,
      "funding": {
        "url": "https://github.com/sponsors/colinhacks"
      }
    },
    "node_modules/zod-validation-error": {
      "version": "4.0.2",
      "resolved": "https://registry.npmjs.org/zod-validation-error/-/zod-validation-error-4.0.2.tgz",
      "integrity": "sha512-Q6/nZLe6jxuU80qb/4uJ4t5v2VEZ44lzQjPDhYJNztRQ4wyWc6VF3D3Kb/fAuPetZQnhS3hnajCf9CsWesghLQ==",
      "dev": true,
      "engines": {
        "node": ">=18.0.0"
      },
      "peerDependencies": {
        "zod": "^3.25.0 || ^4.0.0"
      }
    }
  }
}

```

---

### `package.json`

<a id="packagejson"></a>

> 📊 **Stats:** 32 lignes | 720 B

```json
{
  "name": "ugate-admin-frontend",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "eslint"
  },
  "dependencies": {
    "clsx": "^2.1.1",
    "framer-motion": "^12.29.2",
    "lucide-react": "^0.561.0",
    "next": "16.0.10",
    "react": "19.2.1",
    "react-dom": "19.2.1",
    "recharts": "^3.6.0",
    "tailwind-merge": "^3.4.0"
  },
  "devDependencies": {
    "@tailwindcss/postcss": "^4",
    "@types/node": "^20",
    "@types/react": "^19",
    "@types/react-dom": "^19",
    "eslint": "^9",
    "eslint-config-next": "16.0.10",
    "tailwindcss": "^4",
    "typescript": "^5"
  }
}

```

---

### `README.md`

<a id="READMEmd"></a>

> 📊 **Stats:** 37 lignes | 1.45 KB

```markdown
This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

```

---

### `tsconfig.json`

<a id="tsconfigjson"></a>

> 📊 **Stats:** 35 lignes | 700 B

```json
{
  "compilerOptions": {
    "target": "ES2017",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "react-jsx",
    "incremental": true,
    "plugins": [
      {
        "name": "next"
      }
    ],
    "paths": {
      "@/*": ["./*"]
    }
  },
  "include": [
    "next-env.d.ts",
    "**/*.ts",
    "**/*.tsx",
    ".next/types/**/*.ts",
    ".next/dev/types/**/*.ts",
    "**/*.mts"
  ],
  "exclude": ["node_modules"]
}

```

---

## 🎨 Styles

> 1 fichier(s)

### `app\globals.css`

<a id="app-globalscss"></a>

> 📊 **Stats:** 47 lignes | 1.37 KB

```css
@import "tailwindcss";

:root {
  --background: #F8FAFC;
  /* Changement ici : Bleu Nuit Profond au lieu de Slate 900 */
  --foreground: #0F172A; /* C'est déjà un bleu très sombre (Slate), mais on va forcer un bleu plus saturé si besoin */

  --card: #FFFFFF;
  --card-foreground: #0F172A;

  /* Primary : Bleu Nuit "Royal" */
  --primary: #172554; /* Blue 950 - Beaucoup plus bleu que noir */
  --primary-foreground: #FFFFFF;

  /* Brand : Le bleu électrique pour les boutons/accents */
  --brand: #2563EB;

  --muted: #64748B;
  --border: #E2E8F0;

  --radius: 1rem;
}

body {
  background-color: var(--background);
  color: var(--foreground);
  /* Fond subtil bleuté */
  background-image:
          radial-gradient(at 0% 0%, rgba(37, 99, 235, 0.05) 0px, transparent 50%),
          radial-gradient(at 100% 0%, rgba(30, 58, 138, 0.05) 0px, transparent 50%);
  background-attachment: fixed;
}

/* ... Le reste des utilitaires (glass-panel, premium-card) reste identique ... */
.premium-card {
  background: white;
  border: 1px solid var(--border);
  border-radius: var(--radius);
  box-shadow: 0 1px 3px rgba(0,0,0,0.05); /* Ombre plus douce */
  transition: all 0.3s ease;
}

.premium-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 30px -10px rgba(37, 99, 235, 0.15); /* Ombre bleutée au survol */
  border-color: rgba(37, 99, 235, 0.2);
}
```

---

## 📄 Autres

> 41 fichier(s)

### `app\admissions\page.tsx`

<a id="app-admissions-pagetsx"></a>

> 📊 **Stats:** 41 lignes | 1.19 KB

```tsx
'use client';

import React, { useState, useEffect } from 'react';
import { Layout } from '@/components/Layout';
import { Admissions } from '@/components/Admissions';
import { useAuth } from '@/lib/contexts/AuthContext';
import { useRouter } from 'next/navigation';

export default function AdmissionsPage() {
  const { isAuthenticated, isLoading, user } = useAuth();
  const router = useRouter();
  const [currentView, setCurrentView] = useState('admissions');

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      router.push('/');
    }
  }, [isAuthenticated, isLoading, router]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-[#1877F2] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Chargement...</p>
        </div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return null;
  }

  return (
    <Layout currentView={currentView} onChangeView={setCurrentView} userEmail={user?.email || ''}>
      <Admissions />
    </Layout>
  );
}

```

---

### `app\events\page.tsx`

<a id="app-events-pagetsx"></a>

> 📊 **Stats:** 41 lignes | 1.17 KB

```tsx
'use client';

import React, { useState, useEffect } from 'react';
import { Layout } from '@/components/Layout';
import { Events } from '@/components/Events';
import { useAuth } from '@/lib/contexts/AuthContext';
import { useRouter } from 'next/navigation';

export default function EventsPage() {
  const { isAuthenticated, isLoading, user } = useAuth();
  const router = useRouter();
  const [currentView, setCurrentView] = useState('events');

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      router.push('/');
    }
  }, [isAuthenticated, isLoading, router]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-[#1877F2] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Chargement...</p>
        </div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return null;
  }

  return (
    <Layout currentView={currentView} onChangeView={setCurrentView} userEmail={user?.email || ''}>
      <Events />
    </Layout>
  );
}

```

---

### `app\page.tsx`

<a id="app-pagetsx"></a>

> 📊 **Stats:** 90 lignes | 3.52 KB

```tsx
'use client';

import React, { useState } from 'react';
import { useAuth } from '@/lib/contexts/AuthContext';
import { Login } from '@/components/Login';
import { Register } from '@/components/Register';
import { Dashboard } from '@/components/Dashboard';
import { Events } from '@/components/Events';
import { Products } from '@/components/Products';
import { Services } from '@/components/Services';
import { Admissions } from '@/components/Admissions';
import { Settings } from '@/components/Settings';
import { Layout } from '@/components/Layout';
import { CreateSyndicate } from '@/components/onboarding/CreateSyndicate';
import { PendingSyndicate } from '@/components/onboarding/PendingSyndicate';
import { Loader2 } from 'lucide-react';
import { Branches } from '@/components/Branches';

export default function Home() {
    const { isAuthenticated, isLoading, isSyndicateLoading, user, syndicateStatus } = useAuth();
    const [authView, setAuthView] = useState<'login' | 'register'>('login');
    const [currentView, setCurrentView] = useState('dashboard');

    // --- Gestionnaires d'état ---
    const handleTriggerAction = (action: string) => {
        if (action === 'create-event') setCurrentView('events');
        else if (action === 'create-product') setCurrentView('products');
        else if (action === 'create-admission') setCurrentView('admissions');
    };

    // --- Rendu du contenu principal en fonction de la navigation ---
    const renderContent = () => {
        switch (currentView) {
            case 'dashboard':
                return <Dashboard onChangeView={setCurrentView} onTriggerAction={handleTriggerAction} />;
            case 'events':
                return <Events />;
            case 'products':
                return <Products />;
            case 'services':
                return <Services />;
            case 'admissions':
                return <Admissions />;
            case 'settings':
                return <Settings />;
            case 'branches':
                return <Branches />;
            default:
                return <Dashboard onChangeView={setCurrentView} />;
        }
    };

    // 1. Chargement
    if (isLoading || isSyndicateLoading) {
        return (
            <div className="min-h-screen bg-[#F8FAFC] flex items-center justify-center">
                <div className="text-center">
                    <Loader2 className="w-10 h-10 text-[#172554] animate-spin mx-auto mb-4" />
                    <p className="text-[#64748B] font-medium">Chargement de votre espace...</p>
                </div>
            </div>
        );
    }

    // 2. Auth
    if (!isAuthenticated) {
        return authView === 'login'
            ? <Login onSwitchToRegister={() => setAuthView('register')} />
            : <Register onSwitchToLogin={() => setAuthView('login')} />;
    }

    // 3. Onboarding Syndicat
    if (!syndicateStatus?.hasSyndicate) return <CreateSyndicate />;
    if (syndicateStatus.status === 'PENDING') return <PendingSyndicate />;
    if (syndicateStatus.status === 'REJECTED') return <div>Accès refusé. Contactez le support.</div>;

    // 4. App Principale
    return (
        <Layout
            currentView={currentView}
            onChangeView={setCurrentView}
            userEmail={user?.email || ''}
        >
            {/* On rend le contenu dynamique ici */}
            <div className="animate-in fade-in duration-300">
                {renderContent()}
            </div>
        </Layout>
    );
}
```

---

### `app\products\page.tsx`

<a id="app-products-pagetsx"></a>

> 📊 **Stats:** 41 lignes | 1.18 KB

```tsx
'use client';

import React, { useState, useEffect } from 'react';
import { Layout } from '@/components/Layout';
import { Products } from '@/components/Products';
import { useAuth } from '@/lib/contexts/AuthContext';
import { useRouter } from 'next/navigation';

export default function ProductsPage() {
  const { isAuthenticated, isLoading, user } = useAuth();
  const router = useRouter();
  const [currentView, setCurrentView] = useState('products');

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      router.push('/');
    }
  }, [isAuthenticated, isLoading, router]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-[#1877F2] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Chargement...</p>
        </div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return null;
  }

  return (
    <Layout currentView={currentView} onChangeView={setCurrentView} userEmail={user?.email || ''}>
      <Products />
    </Layout>
  );
}

```

---

### `app\services\page.tsx`

<a id="app-services-pagetsx"></a>

> 📊 **Stats:** 41 lignes | 1.18 KB

```tsx
'use client';

import React, { useState, useEffect } from 'react';
import { Layout } from '@/components/Layout';
import { Services } from '@/components/Services';
import { useAuth } from '@/lib/contexts/AuthContext';
import { useRouter } from 'next/navigation';

export default function ServicesPage() {
  const { isAuthenticated, isLoading, user } = useAuth();
  const router = useRouter();
  const [currentView, setCurrentView] = useState('services');

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      router.push('/');
    }
  }, [isAuthenticated, isLoading, router]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-[#1877F2] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Chargement...</p>
        </div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return null;
  }

  return (
    <Layout currentView={currentView} onChangeView={setCurrentView} userEmail={user?.email || ''}>
      <Services />
    </Layout>
  );
}

```

---

### `app\settings\page.tsx`

<a id="app-settings-pagetsx"></a>

> 📊 **Stats:** 41 lignes | 1.18 KB

```tsx
'use client';

import React, { useState, useEffect } from 'react';
import { Layout } from '@/components/Layout';
import { Settings } from '@/components/Settings';
import { useAuth } from '@/lib/contexts/AuthContext';
import { useRouter } from 'next/navigation';

export default function SettingsPage() {
  const { isAuthenticated, isLoading, user } = useAuth();
  const router = useRouter();
  const [currentView, setCurrentView] = useState('settings');

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      router.push('/');
    }
  }, [isAuthenticated, isLoading, router]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-[#1877F2] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Chargement...</p>
        </div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return null;
  }

  return (
    <Layout currentView={currentView} onChangeView={setCurrentView} userEmail={user?.email || ''}>
      <Settings />
    </Layout>
  );
}

```

---

### `components\Admissions.tsx`

<a id="components-Admissionstsx"></a>

> 📊 **Stats:** 314 lignes | 14.94 KB

```tsx
'use client';

import React, { useState, useEffect } from 'react';
import {
  CheckCircle, XCircle, FileText, Search, Filter, Loader2, User,
  UserPlus, Mail, MapPin, ChevronDown, X, Send, Building2
} from 'lucide-react';
import { Button } from './ui/Button';
import { Badge } from './ui/Badge';
import { Input } from './ui/Input';
import { useAuth } from '@/lib/contexts/AuthContext';
import {
  getMembershipRequests,
  processMembershipRequest,
  getSyndicateBranches,
  inviteMemberToBranch,
  MembershipRequest,
  SyndicateBranch
} from '@/lib/services/admin.service';
import { apiGet } from '@/lib/services/api.client';
import { motion, AnimatePresence } from 'framer-motion';

export const Admissions: React.FC = () => {
  const { syndicateStatus } = useAuth();

  const [requests, setRequests] = useState<MembershipRequest[]>([]);
  const [branches, setBranches] = useState<SyndicateBranch[]>([]);
  const [selectedBranchId, setSelectedBranchId] = useState<string>('all');

  const [isLoading, setIsLoading] = useState(true);
  const [isRequestsLoading, setIsRequestsLoading] = useState(false);
  const [processingId, setProcessingId] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

  // Modal
  const [isInviteModalOpen, setIsInviteModalOpen] = useState(false);
  const [isInviting, setIsInviting] = useState(false);
  const [inviteData, setInviteData] = useState({ firstName: '', lastName: '', email: '' });

  // 1. Initial Load: Branches + All Requests
  useEffect(() => {
    const init = async () => {
      if (!syndicateStatus?.syndicateId) return;
      setIsLoading(true);
      try {
        const branchesData = await getSyndicateBranches(syndicateStatus.syndicateId);
        setBranches(branchesData);

        // Load global requests initially
        const reqs = await getMembershipRequests(syndicateStatus.syndicateId);
        setRequests(reqs);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };
    init();
  }, [syndicateStatus?.syndicateId]);

  // 2. Filter requests when branch changes
  useEffect(() => {
    const fetchFiltered = async () => {
      if (!syndicateStatus?.syndicateId) return;
      setIsRequestsLoading(true);
      try {
        if (selectedBranchId === 'all') {
          const reqs = await getMembershipRequests(syndicateStatus.syndicateId);
          setRequests(reqs);
        } else {
          // Utilisation de l'endpoint spécifique branche
          // NOTE: J'utilise apiGet directement car getMembershipRequests était global.
          // Idéalement, ajoute getBranchRequests dans admin.service.ts
          const reqs = await apiGet<MembershipRequest[]>(`https://ugate.pynfi.com/admin/syndicates/${syndicateStatus.syndicateId}/branches/${selectedBranchId}/requests`);
          setRequests(reqs);
        }
      } catch (error) {
        console.error(error);
      } finally {
        setIsRequestsLoading(false);
      }
    };

    // Éviter le double fetch au montage initial (car 'all' est par défaut)
    if (!isLoading) {
      fetchFiltered();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedBranchId]);

  const handleProcess = async (id: string, approve: boolean) => {
    setProcessingId(id);
    try {
      await processMembershipRequest(id, approve, approve ? undefined : "Dossier incomplet");
      setRequests(current => current.filter(req => req.id !== id));
    } catch (error) { alert("Erreur lors du traitement."); }
    finally { setProcessingId(null); }
  };

  const handleInviteSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Si "Toutes les branches" est sélectionné, on force l'utilisateur à choisir une branche pour l'invitation
    // Mais ici, simplifions : on prend la première branche dispo si "all", ou la branche courante
    let targetBranchId = selectedBranchId;
    if (targetBranchId === 'all') {
      if (branches.length === 0) {
        alert("Veuillez créer une antenne d'abord.");
        return;
      }
      targetBranchId = branches[0].id; // Fallback sur la première
    }

    setIsInviting(true);
    try {
      await inviteMemberToBranch(syndicateStatus!.syndicateId!, targetBranchId, {
        email: inviteData.email, firstName: inviteData.firstName, lastName: inviteData.lastName
      });
      setIsInviteModalOpen(false);
      setInviteData({ firstName: '', lastName: '', email: '' });
      alert("Invitation envoyée !");
    } catch (error) { alert("Erreur invitation."); }
    finally { setIsInviting(false); }
  };

  const filteredRequests = requests.filter(req =>
      req.user?.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      req.user?.lastName?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const currentBranchName = selectedBranchId === 'all' ? 'Toutes les antennes' : branches.find(b => b.id === selectedBranchId)?.name;

  return (
      <div className="space-y-8">
        {/* Header Contextuel */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 pb-2 border-b border-slate-200/60">
          <div>
            <h1 className="text-3xl font-bold text-[#172554] tracking-tight">Membres & Adhésions</h1>
            <p className="text-slate-500 mt-2 text-lg">
              Gérez les accès pour <span className="font-semibold text-[#2563EB]">{currentBranchName}</span>
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            {/* Sélecteur de Branche */}
            <div className="relative">
              <select
                  value={selectedBranchId}
                  onChange={(e) => setSelectedBranchId(e.target.value)}
                  className="appearance-none bg-white border border-slate-200 text-slate-700 py-2.5 pl-4 pr-10 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#172554]/10 font-medium cursor-pointer shadow-sm hover:border-slate-300 transition-all"
              >
                <option value="all">Toutes les antennes</option>
                {branches.map(b => (
                    <option key={b.id} value={b.id}>{b.name}</option>
                ))}
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
            </div>

            <Button onClick={() => setIsInviteModalOpen(true)} leftIcon={UserPlus} className="bg-[#172554] text-white shadow-lg shadow-blue-900/20">
              Inviter un membre
            </Button>
          </div>
        </div>

        {/* Barre de recherche */}
        <div className="bg-white p-2 rounded-2xl shadow-sm border border-slate-100 flex items-center max-w-md">
          <div className="p-2 text-slate-400"><Search className="w-5 h-5" /></div>
          <input
              type="text"
              placeholder="Rechercher par nom, email..."
              className="w-full bg-transparent border-none focus:ring-0 text-sm text-slate-700 placeholder:text-slate-400 outline-none h-10"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* Liste */}
        {(isLoading || isRequestsLoading) ? (
            <div className="flex justify-center py-24"><Loader2 className="w-10 h-10 text-[#172554] animate-spin" /></div>
        ) : filteredRequests.length === 0 ? (
            <div className="text-center py-24 bg-white rounded-3xl border border-dashed border-slate-200">
              <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-6">
                <User className="w-10 h-10 text-slate-300" />
              </div>
              <h3 className="text-xl font-bold text-[#172554]">Aucune demande</h3>
              <p className="text-slate-500 mt-2">
                {selectedBranchId === 'all'
                    ? "Aucune demande en attente sur l'ensemble du réseau."
                    : `Aucune demande pour l'antenne ${currentBranchName}.`}
              </p>
            </div>
        ) : (
            <div className="grid gap-4">
              <AnimatePresence>
                {filteredRequests.map((request) => (
                    <motion.div
                        key={request.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, x: -10 }}
                        className="premium-card p-6 flex flex-col md:flex-row items-start md:items-center gap-6 group"
                    >
                      <div className="w-14 h-14 rounded-2xl bg-[#172554] flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-blue-900/10 flex-shrink-0">
                        {request.user?.firstName?.[0] || 'U'}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-wrap items-center gap-3 mb-1">
                          <h3 className="text-lg font-bold text-[#172554] truncate">
                            {request.user?.firstName} {request.user?.lastName}
                          </h3>
                          <Badge variant="warning" className="bg-amber-50 text-amber-700 border-amber-100">En attente</Badge>
                          {/* Afficher la branche si on est en vue "All" */}
                          {selectedBranchId === 'all' && (
                              <div className="flex items-center gap-1 text-xs text-slate-500 bg-slate-100 px-2 py-1 rounded-md">
                                <Building2 className="w-3 h-3" />
                                {branches.find(b => b.id === request.branchId)?.name || 'Antenne inconnue'}
                              </div>
                          )}
                        </div>
                        <div className="flex items-center gap-4 text-sm text-slate-500 mb-3">
                          <span className="flex items-center gap-1"><Mail className="w-3.5 h-3.5" /> {request.user?.email}</span>
                          <span className="flex items-center gap-1"><FileText className="w-3.5 h-3.5" /> {new Date(request.createdAt).toLocaleDateString('fr-FR')}</span>
                        </div>
                        {request.motivation && (
                            <div className="bg-slate-50 p-3 rounded-xl text-sm text-slate-600 italic border border-slate-100">&quot;{request.motivation}&quot;</div>
                        )}
                      </div>
                      <div className="flex items-center gap-3 w-full md:w-auto mt-4 md:mt-0">
                        <Button
                            onClick={() => handleProcess(request.id, true)}
                            className="bg-emerald-600 hover:bg-emerald-700 text-white shadow-md shadow-emerald-600/20"
                            isLoading={processingId === request.id}
                            disabled={processingId !== null}
                        >
                          <CheckCircle className="w-4 h-4 mr-2" /> Accepter
                        </Button>
                        <Button
                            variant="outline"
                            onClick={() => handleProcess(request.id, false)}
                            className="text-red-600 border-red-200 hover:bg-red-50"
                            disabled={processingId !== null}
                        >
                          <XCircle className="w-4 h-4" />
                        </Button>
                      </div>
                    </motion.div>
                ))}
              </AnimatePresence>
            </div>
        )}

        {/* Modale Invitation Simplifiée (Contexte Auto) */}
        <AnimatePresence>
          {isInviteModalOpen && (
              <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0F172A]/40 backdrop-blur-sm">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden"
                >
                  <div className="p-6 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
                    <h3 className="text-xl font-bold text-[#172554] flex items-center gap-2">
                      <UserPlus className="w-5 h-5 text-[#2563EB]" />
                      Inviter dans <span className="text-[#2563EB] underline decoration-dotted underline-offset-4">{selectedBranchId !== 'all' ? currentBranchName : '...'}</span>
                    </h3>
                    <button onClick={() => setIsInviteModalOpen(false)}><X className="w-5 h-5 text-slate-400" /></button>
                  </div>

                  <form onSubmit={handleInviteSubmit} className="p-6 space-y-5">
                    {selectedBranchId === 'all' && (
                        <div className="p-3 bg-amber-50 text-amber-800 text-sm rounded-lg border border-amber-100 flex gap-2">
                          <Building2 className="w-4 h-4 mt-0.5 flex-shrink-0" />
                          Attention: Vous êtes en vue globale. L'invitation sera envoyée pour l'antenne principale par défaut. Sélectionnez une antenne spécifique pour changer.
                        </div>
                    )}

                    <div className="grid grid-cols-2 gap-4">
                      <Input
                          label="Prénom"
                          placeholder="Jean"
                          value={inviteData.firstName}
                          onChange={(e) => setInviteData({...inviteData, firstName: e.target.value})}
                          required
                      />
                      <Input
                          label="Nom"
                          placeholder="Dupont"
                          value={inviteData.lastName}
                          onChange={(e) => setInviteData({...inviteData, lastName: e.target.value})}
                          required
                      />
                    </div>
                    <Input
                        label="Email professionnel"
                        type="email"
                        placeholder="jean.dupont@email.com"
                        icon={Mail}
                        value={inviteData.email}
                        onChange={(e) => setInviteData({...inviteData, email: e.target.value})}
                        required
                    />
                    <Button type="submit" className="w-full bg-[#172554]" isLoading={isInviting} leftIcon={Send}>
                      Envoyer l'invitation
                    </Button>
                  </form>
                </motion.div>
              </div>
          )}
        </AnimatePresence>
      </div>
  );
};
```

---

### `components\Branches.tsx`

<a id="components-Branchestsx"></a>

> 📊 **Stats:** 308 lignes | 15.10 KB

```tsx
'use client';

import React, { useState, useEffect, useRef } from 'react';
import {
    Building2, MapPin, Phone, Plus, Edit3, Image as ImageIcon,
    Upload, Loader2, Search, X, CheckCircle2
} from 'lucide-react';
import { Button } from './ui/Button';
import { Card, CardContent } from './ui/Card';
import { Input } from './ui/Input';
import { useAuth } from '@/lib/contexts/AuthContext';
import { getBranches, createBranch, updateBranch, Branch } from '@/lib/services/branches.service';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

export const Branches: React.FC = () => {
    const { syndicateStatus } = useAuth();

    const [branches, setBranches] = useState<Branch[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isActionLoading, setIsActionLoading] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');

    // Modal State
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingBranch, setEditingBranch] = useState<Branch | null>(null);

    // Form State
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [bannerFile, setBannerFile] = useState<File | null>(null);
    const [bannerPreview, setBannerPreview] = useState<string | null>(null);
    const [formData, setFormData] = useState({
        name: '',
        location: '',
        contact: ''
    });

    const fetchBranches = async () => {
        if (!syndicateStatus?.syndicateId) return;
        setIsLoading(true);
        try {
            const data = await getBranches(syndicateStatus.syndicateId);
            setBranches(data);
        } catch (error) {
            console.error(error);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchBranches();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [syndicateStatus?.syndicateId]);

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setBannerFile(file);
            const reader = new FileReader();
            reader.onloadend = () => setBannerPreview(reader.result as string);
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!syndicateStatus?.syndicateId) return;

        setIsActionLoading(true);
        try {
            if (editingBranch) {
                // Update (Note: l'API actuelle dans le prompt ne semble pas gérer l'update de l'image via PATCH simple, à vérifier)
                await updateBranch(editingBranch.id, formData);
            } else {
                // Create
                await createBranch(syndicateStatus.syndicateId, formData, bannerFile || undefined);
            }

            await fetchBranches();
            closeModal();
        } catch (error) {
            console.error(error);
            alert("Une erreur est survenue.");
        } finally {
            setIsActionLoading(false);
        }
    };

    const openModal = (branch?: Branch) => {
        if (branch) {
            setEditingBranch(branch);
            setFormData({
                name: branch.name,
                location: branch.location,
                contact: branch.contact
            });
            setBannerPreview(branch.bannerUrl || null);
        } else {
            setEditingBranch(null);
            setFormData({ name: '', location: '', contact: '' });
            setBannerPreview(null);
        }
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setEditingBranch(null);
        setBannerFile(null);
        setBannerPreview(null);
    };

    const filteredBranches = branches.filter(b =>
        b.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        b.location.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="space-y-6 animate-in fade-in duration-500">
            {/* Header */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-slate-200/60 pb-6">
                <div>
                    <h1 className="text-3xl font-bold text-[#172554] tracking-tight">Mes Antennes</h1>
                    <p className="text-slate-500 mt-2 text-lg">
                        Créez et gérez les antennes locales de votre syndicat.
                    </p>
                </div>
                <Button onClick={() => openModal()} leftIcon={Plus} className="bg-[#172554] text-white shadow-lg shadow-blue-900/20">
                    Nouvelle Antenne
                </Button>
            </div>

            {/* Stats Rapides */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="premium-card p-6 bg-gradient-to-br from-[#172554] to-[#1e3a8a] text-white">
                    <div className="flex items-center gap-4">
                        <div className="p-3 bg-white/10 rounded-xl">
                            <Building2 className="w-6 h-6" />
                        </div>
                        <div>
                            <p className="text-blue-100 text-sm font-medium">Total Antennes</p>
                            <h3 className="text-3xl font-bold">{branches.length}</h3>
                        </div>
                    </div>
                </div>
                {/* Placeholder stats */}
                <div className="premium-card p-6">
                    <div className="flex items-center gap-4">
                        <div className="p-3 bg-emerald-50 text-emerald-600 rounded-xl">
                            <CheckCircle2 className="w-6 h-6" />
                        </div>
                        <div>
                            <p className="text-slate-500 text-sm font-medium">Actives</p>
                            <h3 className="text-3xl font-bold text-slate-900">{branches.length}</h3>
                        </div>
                    </div>
                </div>
            </div>

            {/* Search */}
            <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input
                    type="text"
                    placeholder="Rechercher une antenne..."
                    className="w-full pl-10 pr-4 py-3 bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#172554]/10 focus:border-[#172554] outline-none transition-all"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
            </div>

            {/* Grid */}
            {isLoading ? (
                <div className="flex justify-center py-20"><Loader2 className="w-10 h-10 text-[#172554] animate-spin" /></div>
            ) : filteredBranches.length === 0 ? (
                <div className="text-center py-20 bg-white rounded-2xl border-2 border-dashed border-slate-200">
                    <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Building2 className="w-8 h-8 text-slate-400" />
                    </div>
                    <h3 className="text-lg font-bold text-[#172554]">Aucune antenne configurée</h3>
                    <p className="text-slate-500 mb-6">Vous devez créer au moins une antenne pour gérer vos membres.</p>
                    <Button onClick={() => openModal()}>Créer ma première antenne</Button>
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredBranches.map((branch) => (
                        <motion.div
                            key={branch.id}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="premium-card group overflow-hidden flex flex-col h-full"
                        >
                            <div className="relative h-40 bg-slate-100">
                                {branch.bannerUrl ? (
                                    <Image src={branch.bannerUrl} alt={branch.name} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                                ) : (
                                    <div className="flex items-center justify-center h-full bg-gradient-to-br from-slate-100 to-slate-200">
                                        <Building2 className="w-12 h-12 text-slate-300" />
                                    </div>
                                )}
                                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                    <Button variant="secondary" size="sm" onClick={() => openModal(branch)} leftIcon={Edit3}>
                                        Modifier
                                    </Button>
                                </div>
                            </div>

                            <div className="p-6 flex-1 flex flex-col">
                                <h3 className="text-xl font-bold text-[#172554] mb-2">{branch.name}</h3>
                                <div className="space-y-2 mb-4 flex-1">
                                    <div className="flex items-center text-slate-500 text-sm">
                                        <MapPin className="w-4 h-4 mr-2 text-[#2563EB]" />
                                        {branch.location}
                                    </div>
                                    <div className="flex items-center text-slate-500 text-sm">
                                        <Phone className="w-4 h-4 mr-2 text-[#2563EB]" />
                                        {branch.contact}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            )}

            {/* Modal */}
            <AnimatePresence>
                {isModalOpen && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0F172A]/40 backdrop-blur-sm">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            className="bg-white rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden"
                        >
                            <div className="p-6 border-b border-slate-100 flex justify-between items-center sticky top-0 bg-white z-10">
                                <h3 className="text-xl font-bold text-[#172554]">
                                    {editingBranch ? 'Modifier l\'antenne' : 'Nouvelle Antenne'}
                                </h3>
                                <button onClick={closeModal}><X className="w-5 h-5 text-slate-400 hover:text-slate-600" /></button>
                            </div>

                            <form onSubmit={handleSubmit} className="p-6 space-y-6">
                                {/* Banner Upload */}
                                <div
                                    onClick={() => !editingBranch && fileInputRef.current?.click()} // Disable upload on edit if API doesn't support it yet
                                    className={`relative w-full h-40 rounded-xl border-2 border-dashed border-slate-200 flex items-center justify-center overflow-hidden transition-all ${!editingBranch ? 'cursor-pointer hover:border-[#172554] hover:bg-slate-50' : ''}`}
                                >
                                    {bannerPreview ? (
                                        <Image src={bannerPreview} alt="Preview" fill className="object-cover" />
                                    ) : (
                                        <div className="text-center text-slate-400">
                                            <ImageIcon className="w-8 h-8 mx-auto mb-2" />
                                            <span className="text-sm">Ajouter une bannière</span>
                                        </div>
                                    )}
                                    {!editingBranch && (
                                        <input
                                            type="file"
                                            ref={fileInputRef}
                                            className="hidden"
                                            accept="image/*"
                                            onChange={handleImageChange}
                                        />
                                    )}
                                </div>

                                <Input
                                    label="Nom de l'antenne"
                                    placeholder="Ex: Antenne Régionale du Littoral"
                                    value={formData.name}
                                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                                    required
                                />

                                <div className="grid grid-cols-2 gap-4">
                                    <Input
                                        label="Ville / Localisation"
                                        placeholder="Douala"
                                        icon={MapPin}
                                        value={formData.location}
                                        onChange={(e) => setFormData({...formData, location: e.target.value})}
                                        required
                                    />
                                    <Input
                                        label="Contact (Tél/Email)"
                                        placeholder="+237..."
                                        icon={Phone}
                                        value={formData.contact}
                                        onChange={(e) => setFormData({...formData, contact: e.target.value})}
                                        required
                                    />
                                </div>

                                <div className="pt-2">
                                    <Button type="submit" className="w-full bg-[#172554]" isLoading={isActionLoading}>
                                        {editingBranch ? 'Enregistrer les modifications' : 'Créer l\'antenne'}
                                    </Button>
                                </div>
                            </form>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </div>
    );
};
```

---

### `components\BranchSelector.tsx`

<a id="components-BranchSelectortsx"></a>

> 📊 **Stats:** 91 lignes | 3.84 KB

```tsx
'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { Building2, MapPin, ChevronRight } from 'lucide-react';
import { Card, CardContent } from './ui/Card';
import { Branch } from '@/lib/types/events';
import { BRANCHES } from '@/lib/constants/branches';

interface BranchSelectorProps {
  onSelectBranch: (branch: Branch) => void;
}

export const BranchSelector: React.FC<BranchSelectorProps> = ({ onSelectBranch }) => {
  const router = useRouter();
  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl shadow-lg mb-4">
          <Building2 className="w-8 h-8 text-white" />
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Sélectionnez une Agence
        </h1>
        <p className="text-gray-600">
          Choisissez l&apos;agence régionale pour voir et gérer ses événements
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {BRANCHES.map((branch) => (
          <Card
            key={branch.id}
            className="group cursor-pointer border-2 border-gray-200 hover:border-blue-500 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
            onClick={() => {
              router.push(`/events?branch=${branch.id}`);
              onSelectBranch(branch);
            }}
          >
            <CardContent className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Building2 className="w-6 h-6 text-white" />
                </div>
                <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                {branch.name}
              </h3>
              
              {branch.description && (
                <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                  {branch.description}
                </p>
              )}
              
              <div className="space-y-2 pt-3 border-t border-gray-100">
                {branch.location && (
                  <div className="flex items-center text-sm text-gray-500">
                    <MapPin className="w-4 h-4 mr-2" />
                    {branch.location}
                  </div>
                )}
                <div className="text-sm text-gray-700">
                  <span className="font-medium">Directeur:</span> {branch.director.name}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="border-0 shadow-xl bg-gradient-to-br from-blue-50 to-purple-50">
        <CardContent className="p-6">
          <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
            <Building2 className="w-5 h-5 text-blue-600" />
            À propos des agences
          </h3>
          <p className="text-sm text-gray-700">
            Le syndicat UGATE dispose de plusieurs agences régionales à travers le pays. 
            Toutes les agences défendent les mêmes intérêts et suivent le même fonctionnement. 
            Sélectionnez une agence pour voir ses événements locaux, créer de nouveaux événements, 
            et gérer les inscriptions des membres de cette région.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

```

---

### `components\Dashboard.tsx`

<a id="components-Dashboardtsx"></a>

> 📊 **Stats:** 251 lignes | 10.52 KB

```tsx
'use client';

import React, { useState, useEffect } from 'react';
import {
  Users, Calendar, TrendingUp, DollarSign,
  ShoppingBag, FileText, Download, Loader2, RefreshCw, ArrowUpRight, Plus
} from 'lucide-react';
import { Button } from './ui/Button';
import { useAuth } from '@/lib/contexts/AuthContext';
import { getSyndicateStats, SyndicateStats } from '@/lib/services/admin.service';
import { motion } from 'framer-motion';

// --- Skeleton Design ---
const StatCardSkeleton = () => (
    <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm animate-pulse h-[140px]">
      <div className="flex justify-between items-start mb-4">
        <div className="h-10 w-10 bg-slate-100 rounded-full"></div>
        <div className="h-6 w-16 bg-slate-100 rounded-full"></div>
      </div>
      <div className="h-8 w-24 bg-slate-100 rounded mb-2"></div>
      <div className="h-4 w-32 bg-slate-100 rounded"></div>
    </div>
);

// --- Premium Stat Card ---
interface StatCardProps {
  title: string;
  value: number | string;
  icon: React.ElementType;
  trend?: string;
  trendUp?: boolean;
  colorClass: string; // ex: "text-blue-600 bg-blue-50"
  delay: number;
}

const StatCard = ({ title, value, icon: Icon, trend, trendUp = true, colorClass, delay }: StatCardProps) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay }}
        className="premium-card rounded-2xl p-6 relative overflow-hidden group"
    >
      <div className="flex justify-between items-start mb-4">
        <div className={`p-3 rounded-xl ${colorClass} bg-opacity-10 group-hover:scale-110 transition-transform duration-300`}>
          <Icon className={`w-6 h-6 ${colorClass.split(' ')[0]}`} />
        </div>
        {trend && (
            <div className={`flex items-center gap-1 text-xs font-bold px-2 py-1 rounded-full ${trendUp ? 'bg-emerald-50 text-emerald-600' : 'bg-red-50 text-red-600'}`}>
              {trendUp ? <ArrowUpRight className="w-3 h-3" /> : <ArrowUpRight className="w-3 h-3 rotate-90" />}
              {trend}
            </div>
        )}
      </div>

      <div>
        <h3 className="text-3xl font-bold text-slate-900 tracking-tight mb-1">{value}</h3>
        <p className="text-sm font-medium text-slate-500">{title}</p>
      </div>
    </motion.div>
);

// --- Action Card ---
const ActionCard = ({ title, icon: Icon, onClick, color }: any) => (
    <button
        onClick={onClick}
        className="flex items-center gap-4 p-4 bg-white border border-slate-200 rounded-xl hover:border-slate-300 hover:shadow-md transition-all text-left group"
    >
      <div className={`w-12 h-12 rounded-lg flex items-center justify-center text-white shadow-lg group-hover:scale-105 transition-transform ${color}`}>
        <Icon className="w-6 h-6" />
      </div>
      <div>
        <h4 className="font-bold text-slate-900 group-hover:text-blue-600 transition-colors">{title}</h4>
        <p className="text-xs text-slate-500">Action rapide</p>
      </div>
      <Plus className="w-5 h-5 text-slate-300 ml-auto group-hover:text-blue-500" />
    </button>
);

interface DashboardProps {
  onChangeView?: (view: string) => void;
  onTriggerAction?: (action: string) => void;
}

export const Dashboard: React.FC<DashboardProps> = ({ onChangeView, onTriggerAction }) => {
  const { syndicateStatus } = useAuth();
  const [stats, setStats] = useState<SyndicateStats | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const fetchStats = async () => {
    if (!syndicateStatus?.syndicateId) return;
    setIsLoading(true);
    try {
      const data = await getSyndicateStats(syndicateStatus.syndicateId);
      setStats(data);
    } catch (error) {
      console.error("Erreur stats:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchStats();
  }, [syndicateStatus?.syndicateId]);

  return (
      <div className="space-y-8">
        {/* Welcome Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-2">
          <div>
            <h1 className="text-3xl font-bold text-slate-900 tracking-tight">Vue d&apos;ensemble</h1>
            <p className="text-slate-500 mt-2 text-lg">
              Voici ce qui se passe dans votre syndicat aujourd&apos;hui.
            </p>
          </div>
          <div className="flex gap-3">
            <Button variant="outline" size="sm" onClick={fetchStats}>
              <RefreshCw className={`w-4 h-4 mr-2 ${isLoading ? 'animate-spin' : ''}`} />
              Actualiser
            </Button>
            <Button variant="secondary" size="sm" className="bg-[#0F172A] text-white hover:bg-[#1e293b]">
              <Download className="w-4 h-4 mr-2" />
              Exporter
            </Button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {isLoading ? (
              <>
                {[1,2,3,4].map(i => <StatCardSkeleton key={i} />)}
              </>
          ) : (
              <>
                <StatCard
                    title="Membres Actifs"
                    value={stats?.totalMembers || 0}
                    icon={Users}
                    trend="+12%"
                    colorClass="text-blue-600 bg-blue-50"
                    delay={0}
                />
                <StatCard
                    title="Demandes en attente"
                    value={stats?.pendingRequests || 0}
                    icon={FileText}
                    trend="+5"
                    colorClass="text-amber-600 bg-amber-50"
                    delay={0.1}
                />
                <StatCard
                    title="Services Actifs"
                    value={stats?.activeServices || 0}
                    icon={ShoppingBag}
                    trendUp={true}
                    colorClass="text-purple-600 bg-purple-50"
                    delay={0.2}
                />
                <StatCard
                    title="Revenus Mensuels"
                    value={`${(stats?.totalRevenue || 0).toLocaleString()} €`}
                    icon={DollarSign}
                    trend="+24%"
                    colorClass="text-emerald-600 bg-emerald-50"
                    delay={0.3}
                />
              </>
          )}
        </div>

        {/* Quick Actions & Recent Activity Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* Actions Rapides */}
          <div className="lg:col-span-2 space-y-6">
            <h3 className="text-lg font-bold text-slate-900">Actions Fréquentes</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <ActionCard
                  title="Nouvel Événement"
                  icon={Calendar}
                  color="bg-blue-600"
                  onClick={() => { onChangeView?.('events'); onTriggerAction?.('create-event'); }}
              />
              <ActionCard
                  title="Ajouter Produit"
                  icon={ShoppingBag}
                  color="bg-emerald-600"
                  onClick={() => { onChangeView?.('products'); onTriggerAction?.('create-product'); }}
              />
              <ActionCard
                  title="Valider Adhésion"
                  icon={Users}
                  color="bg-amber-500"
                  onClick={() => { onChangeView?.('admissions'); }}
              />
              <ActionCard
                  title="Publier Annonce"
                  icon={TrendingUp}
                  color="bg-purple-600"
                  onClick={() => { /* Feature future */ }}
              />
            </div>

            {/* Graph Placeholder (pour montrer le potentiel visuel) */}
            <div className="premium-card rounded-2xl p-6 mt-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-bold text-slate-900">Analyses d&apos;audience</h3>
                <select className="bg-slate-50 border-none text-sm font-medium text-slate-600 rounded-lg py-1 px-3 outline-none">
                  <option>7 derniers jours</option>
                  <option>30 derniers jours</option>
                </select>
              </div>
              <div className="h-64 bg-slate-50 rounded-xl flex items-center justify-center border border-slate-100 border-dashed">
                <p className="text-slate-400 text-sm">Graphique des visites (Placeholder)</p>
              </div>
            </div>
          </div>

          {/* Activity Feed */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 h-full">
              <h3 className="text-lg font-bold text-slate-900 mb-6">Activité Récente</h3>
              <div className="space-y-6">
                {[
                  { title: 'Nouveau membre', desc: 'Jean Dupont a rejoint', time: '2 min', icon: Users, color: 'bg-blue-100 text-blue-600' },
                  { title: 'Vente produit', desc: 'Commande #1234', time: '1h', icon: ShoppingBag, color: 'bg-emerald-100 text-emerald-600' },
                  { title: 'Événement créé', desc: 'AG 2024', time: '3h', icon: Calendar, color: 'bg-purple-100 text-purple-600' },
                  { title: 'Nouvelle demande', desc: 'Validation requise', time: '5h', icon: FileText, color: 'bg-amber-100 text-amber-600' },
                ].map((item, i) => (
                    <div key={i} className="flex gap-4">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${item.color}`}>
                        <item.icon className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-slate-900">{item.title}</p>
                        <p className="text-xs text-slate-500 mt-0.5">{item.desc}</p>
                      </div>
                      <span className="text-xs text-slate-400 ml-auto">{item.time}</span>
                    </div>
                ))}
              </div>
              <button className="w-full mt-8 py-2 text-sm font-medium text-slate-500 hover:text-[#0F172A] transition-colors border-t border-slate-100">
                Voir tout l&apos;historique
              </button>
            </div>
          </div>
        </div>
      </div>
  );
};
```

---

### `components\Events.tsx`

<a id="components-Eventstsx"></a>

> 📊 **Stats:** 600 lignes | 24.08 KB

```tsx
'use client';

import React, { useState, useEffect, useRef } from 'react';
import {
  Calendar, MapPin, Users, Plus, Image as ImageIcon,
  ChevronLeft, Search, Clock, Video, Building2,
  ChevronDown, Loader2, AlertCircle
} from 'lucide-react';
import { Button } from './ui/Button';
import { Badge } from './ui/Badge';
import { Card } from './ui/Card';
import { Input, TextArea } from './ui/Input';
import { useAuth } from '@/lib/contexts/AuthContext';
import {
  getEventsByBranch,
  createEvent,
  getEventParticipants,
  formatLocalTime,
  formatDateFr,
  EventItem,
  CreateEventDTO,
  EventParticipant
} from '@/lib/services/events.service';
import { getSyndicateBranches, SyndicateBranch } from '@/lib/services/admin.service';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

// Composant Vidéo robuste
const VideoPlayer: React.FC<{
  src: string;
  autoPlay?: boolean;
  muted?: boolean;
  loop?: boolean;
  controls?: boolean;
  className?: string;
  onError?: () => void;
  onSuccess?: () => void;
}> = ({ src, autoPlay = false, muted = true, loop = false, controls = true, className = "", onError, onSuccess }) => {
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleError = () => {
    console.error('❌ Erreur chargement vidéo:', src);
    setHasError(true);
    setIsLoading(false);
    onError?.();
  };

  const handleLoadedData = () => {
    console.log('✅ Vidéo chargée:', src);
    setIsLoading(false);
    setHasError(false);
    onSuccess?.();
  };

  useEffect(() => {
    setHasError(false);
    setIsLoading(true);
  }, [src]);

  if (hasError) {
    return null;
  }

  return (
      <video
          ref={videoRef}
          className={className}
          autoPlay={autoPlay}
          muted={muted}
          loop={loop}
          controls={controls}
          playsInline
          preload="metadata"
          onError={handleError}
          onLoadedData={handleLoadedData}
          onLoadedMetadata={handleLoadedData}
          style={{ opacity: isLoading ? 0 : 1, transition: 'opacity 0.3s ease-in-out' }}
      >
        <source src={src} type="video/mp4" />
        <source src={src} type="video/webm" />
      </video>
  );
};

// Composant Média Universel avec skeleton au lieu de spinner
const UniversalMedia: React.FC<{
  src: string;
  alt: string;
  autoPlay?: boolean;
  muted?: boolean;
  loop?: boolean;
  controls?: boolean;
  className?: string;
  showVideoIcon?: boolean;
  isCard?: boolean;
}> = ({ src, alt, autoPlay = false, muted = true, loop = false, controls = true, className = "", showVideoIcon = false, isCard = false }) => {
  const [mediaType, setMediaType] = useState<'video' | 'image'>('video');
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const handleVideoError = () => {
    console.log('⚠️ Pas une vidéo, essai en tant qu\'image:', src);
    setMediaType('image');
  };

  const handleVideoSuccess = () => {
    console.log('✅ Confirmé: Vidéo:', src);
    setIsLoading(false);
  };

  const handleImageError = () => {
    console.error('❌ Média complètement non chargeable:', src);
    setHasError(true);
    setIsLoading(false);
  };

  const handleImageLoad = () => {
    console.log('✅ Confirmé: Image:', src);
    setIsLoading(false);
  };

  if (hasError) {
    return (
        <div className={`bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center ${className}`}>
          <div className="text-center">
            <AlertCircle className="w-12 h-12 text-slate-300 mx-auto mb-2" />
            <p className="text-xs text-slate-400">Média indisponible</p>
          </div>
        </div>
    );
  }

  return (
      <div className={`relative ${className}`}>
        {/* Skeleton subtil - seulement pour les cards */}
        {isLoading && isCard && (
            <div className="absolute inset-0 bg-gradient-to-br from-slate-200 via-slate-100 to-slate-200 animate-pulse" />
        )}

        {/* Spinner pour la vue détails */}
        {isLoading && !isCard && (
            <div className="absolute inset-0 flex items-center justify-center bg-slate-900">
              <Loader2 className="w-8 h-8 text-white animate-spin" />
            </div>
        )}

        {mediaType === 'video' ? (
            <>
              <VideoPlayer
                  src={src}
                  autoPlay={autoPlay}
                  muted={muted}
                  loop={loop}
                  controls={controls}
                  className="w-full h-full object-cover"
                  onError={handleVideoError}
                  onSuccess={handleVideoSuccess}
              />
              {showVideoIcon && !isLoading && (
                  <div className="absolute top-2 right-2 bg-black/50 p-1.5 rounded-full backdrop-blur-sm z-20">
                    <Video className="w-3 h-3 text-white" />
                  </div>
              )}
            </>
        ) : (
            <Image
                src={src}
                alt={alt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                onError={handleImageError}
                onLoad={handleImageLoad}
                style={{ opacity: isLoading ? 0 : 1 }}
            />
        )}
      </div>
  );
};

export const Events: React.FC = () => {
  const { syndicateStatus, user } = useAuth();

  // Données
  const [branches, setBranches] = useState<SyndicateBranch[]>([]);
  const [selectedBranchId, setSelectedBranchId] = useState<string>('');
  const [events, setEvents] = useState<EventItem[]>([]);
  const [participants, setParticipants] = useState<EventParticipant[]>([]);

  // États UI
  const [view, setView] = useState<'list' | 'create' | 'details'>('list');
  const [isLoading, setIsLoading] = useState(true);
  const [isEventsLoading, setIsEventsLoading] = useState(false);
  const [isActionLoading, setIsActionLoading] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState<EventItem | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  // États Médias (Création)
  const [mediaType, setMediaType] = useState<'image' | 'video' | null>(null);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [videoFile, setVideoFile] = useState<File | null>(null);
  const [mediaPreview, setMediaPreview] = useState<string | null>(null);
  const mediaInputRef = useRef<HTMLInputElement>(null);

  const [formData, setFormData] = useState({
    title: '',
    description: '',
    date: '',
    startTime: '',
    endTime: '',
    location: ''
  });

  // 1. Charger les branches au montage
  useEffect(() => {
    let isMounted = true;
    const init = async () => {
      if (!syndicateStatus?.syndicateId) return;
      try {
        const branchesData = await getSyndicateBranches(syndicateStatus.syndicateId);
        if (isMounted) {
          setBranches(branchesData || []);
          if (branchesData && branchesData.length > 0) {
            setSelectedBranchId(branchesData[0].id);
          }
        }
      } catch (error) {
        console.error("Erreur chargement branches:", error);
      } finally {
        if (isMounted) setIsLoading(false);
      }
    };
    init();
    return () => { isMounted = false; };
  }, [syndicateStatus?.syndicateId]);

  // 2. Charger les événements quand la branche change
  useEffect(() => {
    if (!selectedBranchId) return;
    let isMounted = true;

    const fetchEvents = async () => {
      setIsEventsLoading(true);
      try {
        const data = await getEventsByBranch(selectedBranchId);
        if (isMounted) setEvents(data || []);
      } catch (error) {
        console.error("Erreur chargement événements:", error);
        if (isMounted) setEvents([]);
      } finally {
        if (isMounted) setIsEventsLoading(false);
      }
    };
    fetchEvents();
    return () => { isMounted = false; };
  }, [selectedBranchId]);

  // --- Handlers ---

  const handleMediaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (file.type.startsWith('video/')) {
      setMediaType('video');
      setVideoFile(file);
      setImageFile(null);
    } else {
      setMediaType('image');
      setImageFile(file);
      setVideoFile(null);
    }
    setMediaPreview(URL.createObjectURL(file));
  };

  const handleCreateSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedBranchId || !user) return;

    setIsActionLoading(true);
    try {
      const payload: CreateEventDTO = {
        creatorId: user.id,
        branchId: selectedBranchId,
        title: formData.title,
        description: formData.description,
        eventDate: formData.date,
        location: formData.location,
        startTime: formData.startTime,
        endTime: formData.endTime
      };

      await createEvent(payload, imageFile || undefined, videoFile || undefined);

      // Rafraichir la liste
      const updatedEvents = await getEventsByBranch(selectedBranchId);
      setEvents(updatedEvents || []);

      setView('list');
      resetForm();
    } catch (error) {
      alert("Erreur lors de la création.");
    } finally {
      setIsActionLoading(false);
    }
  };

  const handleViewDetails = async (event: EventItem) => {
    setSelectedEvent(event);
    setView('details');
    try {
      const parts = await getEventParticipants(event.id);
      setParticipants(parts || []);
    } catch (error) {
      setParticipants([]);
    }
  };

  const resetForm = () => {
    setFormData({ title: '', description: '', date: '', startTime: '', endTime: '', location: '' });
    setImageFile(null);
    setVideoFile(null);
    setMediaPreview(null);
    setMediaType(null);
  };

  const currentBranchName = branches.find(b => b.id === selectedBranchId)?.name || '...';
  const filteredEvents = events.filter(e => e.title.toLowerCase().includes(searchQuery.toLowerCase()));

  if (isLoading) {
    return <div className="flex justify-center py-20"><Loader2 className="w-10 h-10 text-[#172554] animate-spin" /></div>;
  }

  // --- VUE CRÉATION ---
  if (view === 'create') {
    return (
        <div className="max-w-4xl mx-auto animate-in fade-in">
          <div className="flex items-center gap-4 mb-6">
            <Button variant="ghost" size="sm" onClick={() => setView('list')}>
              <ChevronLeft className="w-4 h-4 mr-1" /> Retour
            </Button>
            <h1 className="text-2xl font-bold text-[#172554]">Nouvel Événement</h1>
          </div>

          <Card className="border-0 shadow-xl overflow-hidden bg-white">
            <form onSubmit={handleCreateSubmit}>
              <div className="grid grid-cols-1 lg:grid-cols-3">
                {/* Upload Zone */}
                <div className="bg-slate-50 p-8 flex flex-col items-center justify-center border-r border-slate-100 min-h-[350px]">
                  <div
                      onClick={() => mediaInputRef.current?.click()}
                      className="relative w-full aspect-[3/4] rounded-2xl border-2 border-dashed border-slate-300 hover:border-[#2563EB] cursor-pointer flex items-center justify-center overflow-hidden"
                  >
                    {mediaPreview ? (
                        mediaType === 'video' ? (
                            <video src={mediaPreview} className="w-full h-full object-cover" autoPlay muted loop />
                        ) : (
                            <Image src={mediaPreview} alt="Preview" fill className="object-cover" />
                        )
                    ) : (
                        <div className="text-center text-slate-400">
                          <div className="flex justify-center gap-2 mb-2">
                            <ImageIcon className="w-6 h-6" /><Video className="w-6 h-6" />
                          </div>
                          <span className="text-sm">Ajouter média</span>
                        </div>
                    )}
                  </div>
                  <input type="file" ref={mediaInputRef} className="hidden" accept="image/*,video/*" onChange={handleMediaChange} />
                  {mediaPreview && (
                      <button type="button" onClick={resetForm} className="mt-4 text-xs text-red-500 font-bold hover:underline">
                        Supprimer
                      </button>
                  )}
                </div>

                {/* Fields */}
                <div className="lg:col-span-2 p-8 space-y-5">
                  <div className="p-3 bg-blue-50 rounded-xl text-sm text-blue-800 border border-blue-100 flex items-center gap-2">
                    <Building2 className="w-4 h-4" /> Agence : <b>{currentBranchName}</b>
                  </div>
                  <Input label="Titre *" value={formData.title} onChange={(e) => setFormData({...formData, title: e.target.value})} required />
                  <div className="grid grid-cols-2 gap-4">
                    <Input type="date" label="Date *" value={formData.date} onChange={(e) => setFormData({...formData, date: e.target.value})} required />
                    <Input label="Lieu *" value={formData.location} onChange={(e) => setFormData({...formData, location: e.target.value})} required />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <Input type="time" label="Début *" value={formData.startTime} onChange={(e) => setFormData({...formData, startTime: e.target.value})} required />
                    <Input type="time" label="Fin *" value={formData.endTime} onChange={(e) => setFormData({...formData, endTime: e.target.value})} required />
                  </div>
                  <TextArea label="Description *" value={formData.description} onChange={(e) => setFormData({...formData, description: e.target.value})} required className="min-h-[100px]" />
                  <div className="pt-4 flex justify-end gap-3">
                    <Button type="button" variant="ghost" onClick={() => setView('list')}>Annuler</Button>
                    <Button type="submit" isLoading={isActionLoading} className="bg-[#172554] text-white">Publier</Button>
                  </div>
                </div>
              </div>
            </form>
          </Card>
        </div>
    );
  }

  // --- VUE DÉTAILS (Split View : Média Gauche / Info Droite) ---
  if (view === 'details' && selectedEvent) {
    const mediaUrl = selectedEvent.imageUrls?.[0];

    return (
        <div className="max-w-6xl mx-auto animate-in fade-in h-[calc(100vh-140px)] flex flex-col">
          <div className="mb-4">
            <Button variant="ghost" onClick={() => setView('list')}>
              <ChevronLeft className="w-4 h-4 mr-1" /> Retour
            </Button>
          </div>

          <div className="bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden flex-1 flex flex-col lg:flex-row">

            {/* GAUCHE : Média (50%) */}
            <div className="lg:w-1/2 bg-black relative flex items-center justify-center h-64 lg:h-auto">
              {mediaUrl ? (
                  <UniversalMedia
                      src={mediaUrl}
                      alt={selectedEvent.title}
                      controls={true}
                      autoPlay={false}
                      className="w-full h-full absolute inset-0"
                      showVideoIcon={false}
                      isCard={false}
                  />
              ) : (
                  <div className="flex items-center justify-center w-full h-full">
                    <ImageIcon className="w-16 h-16 text-slate-600" />
                  </div>
              )}
            </div>

            {/* DROITE : Infos (50%) */}
            <div className="lg:w-1/2 flex flex-col h-full overflow-y-auto custom-scrollbar p-8">
              <div className="mb-6">
                <Badge variant="success" className="mb-3">Actif</Badge>
                <h1 className="text-3xl font-bold text-[#172554] mb-4">{selectedEvent.title}</h1>

                <div className="flex flex-col gap-3 text-sm text-slate-600 bg-slate-50 p-4 rounded-xl border border-slate-100">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-[#2563EB]" />
                    {formatDateFr(selectedEvent.date)}
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-[#2563EB]" />
                    {formatLocalTime(selectedEvent.startTime)} - {formatLocalTime(selectedEvent.endTime)}
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-[#2563EB]" />
                    {selectedEvent.location}
                  </div>
                </div>
              </div>

              <div className="prose prose-slate max-w-none flex-1">
                <h3 className="text-lg font-bold text-[#172554] mb-2">Description</h3>
                <p className="text-slate-600 whitespace-pre-wrap">{selectedEvent.description}</p>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-100">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-bold text-[#172554] flex items-center gap-2">
                    <Users className="w-5 h-5" /> Participants
                  </h3>
                  <Badge variant="info">{selectedEvent.participantCount} inscrits</Badge>
                </div>

                <div className="flex gap-2 justify-end">
                  <Button
                      variant="outline"
                      className="text-red-600 border-red-200 hover:bg-red-50 w-full"
                      onClick={() => alert("Annulation non disponible via API")}
                  >
                    Annuler l&apos;événement
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
    );
  }

  // --- VUE LISTE (Défaut) ---
  return (
      <div className="space-y-8 animate-in fade-in">
        <div className="flex flex-col lg:flex-row justify-between items-end gap-6 pb-2 border-b border-slate-200/60">
          <div>
            <h1 className="text-3xl font-bold text-[#172554]">Événements</h1>
            <p className="text-slate-500 mt-1">Gérez les activités du réseau.</p>
          </div>
          <div className="flex gap-3">
            <div className="relative">
              <select
                  value={selectedBranchId}
                  onChange={(e) => setSelectedBranchId(e.target.value)}
                  className="appearance-none bg-white border border-slate-200 py-2.5 pl-4 pr-10 rounded-xl shadow-sm min-w-[200px] cursor-pointer"
              >
                {branches.map(b => <option key={b.id} value={b.id}>{b.name}</option>)}
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
            </div>
            <Button onClick={() => setView('create')} leftIcon={Plus} className="bg-[#172554] text-white">Créer</Button>
          </div>
        </div>

        <div className="bg-white p-2 rounded-2xl shadow-sm border border-slate-100 max-w-md flex items-center">
          <Search className="w-5 h-5 text-slate-400 ml-2" />
          <input
              type="text"
              placeholder="Rechercher..."
              className="w-full bg-transparent border-none focus:ring-0 text-sm h-10 ml-2 outline-none"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        {isEventsLoading ? (
            <div className="flex justify-center py-20"><Loader2 className="w-10 h-10 text-[#172554] animate-spin" /></div>
        ) : filteredEvents.length === 0 ? (
            <div className="text-center py-20 bg-white rounded-3xl border border-dashed border-slate-200">
              <Calendar className="w-10 h-10 text-slate-300 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-[#172554]">Aucun événement</h3>
              <p className="text-slate-500">Aucune activité pour cette antenne.</p>
            </div>
        ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredEvents.map(event => {
                const mediaUrl = event.imageUrls?.[0];

                return (
                    <motion.div
                        key={event.id}
                        initial={{ opacity: 0, scale: 0.98 }}
                        animate={{ opacity: 1, scale: 1 }}
                        whileHover={{ y: -5 }}
                        className="group bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl transition-all overflow-hidden flex flex-col h-full cursor-pointer"
                        onClick={() => handleViewDetails(event)}
                    >
                      {/* Partie Média (Haut) avec Autoplay */}
                      <div className="h-48 relative bg-slate-100 overflow-hidden">
                        {mediaUrl ? (
                            <UniversalMedia
                                src={mediaUrl}
                                alt={event.title}
                                autoPlay={true}
                                muted={true}
                                loop={true}
                                controls={false}
                                className="h-full w-full"
                                showVideoIcon={true}
                                isCard={true}
                            />
                        ) : (
                            <div className="flex items-center justify-center w-full h-full">
                              <ImageIcon className="w-12 h-12 text-slate-300" />
                            </div>
                        )}
                      </div>

                      {/* Partie Info (Bas) */}
                      <div className="p-5 flex-1 flex flex-col">
                        <div className="flex items-center gap-2 mb-2">
                          <Badge className="bg-blue-50 text-blue-700 border-0 text-[10px] uppercase font-bold px-2">
                            {formatDateFr(event.date).split(' ')[1]}
                          </Badge>
                          <h3 className="font-bold text-lg text-[#172554] line-clamp-1 group-hover:text-[#2563EB] transition-colors">
                            {event.title}
                          </h3>
                        </div>

                        <div className="flex items-center gap-4 text-xs text-slate-500 mb-3">
                          <span className="flex items-center gap-1"><Clock className="w-3 h-3"/> {formatLocalTime(event.startTime)}</span>
                          <span className="flex items-center gap-1 truncate"><MapPin className="w-3 h-3"/> {event.location}</span>
                        </div>

                        <p className="text-sm text-slate-600 line-clamp-2 mb-4 flex-1">
                          {event.description}
                        </p>

                        <div className="pt-3 border-t border-slate-100 flex justify-between items-center text-sm">
                    <span className="font-medium text-slate-700 flex items-center gap-1">
                      <Users className="w-4 h-4 text-[#2563EB]" /> {event.participantCount}
                    </span>
                          <span className="text-[#2563EB] font-medium group-hover:underline">Détails</span>
                        </div>
                      </div>
                    </motion.div>
                );
              })}
            </div>
        )}
      </div>
  );
};
```

---

### `components\Login.tsx`

<a id="components-Logintsx"></a>

> 📊 **Stats:** 131 lignes | 5.15 KB

```tsx
'use client';

import React, { useState } from 'react';
import { Mail, Lock, Eye, EyeOff, AlertCircle } from 'lucide-react';
import { Button } from './ui/Button';
import { Input } from './ui/Input';
import { useAuth } from '@/lib/contexts/AuthContext';
import { AuthLayout } from './auth/AuthLayout';

interface LoginProps {
  onSwitchToRegister: () => void;
}

export const Login: React.FC<LoginProps> = ({ onSwitchToRegister }) => {
  const { login, error: authError, isLoading: authLoading } = useAuth();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [localError, setLocalError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLocalError('');

    if (!email || !password) {
      setLocalError('Veuillez remplir tous les champs');
      return;
    }

    try {
      await login({ identifier: email, password });
    } catch (err) {
      console.error('Erreur login:', err);
    }
  };

  return (
      <AuthLayout
          title="Bon retour !"
          subtitle="Entrez vos identifiants pour accéder à votre espace."
      >
        <form onSubmit={handleSubmit} className="space-y-6">
          {(localError || authError) && (
              <div className="flex items-center gap-3 p-4 bg-red-50/50 border border-red-100 rounded-xl text-red-600 text-sm animate-in fade-in slide-in-from-top-2">
                <AlertCircle className="w-5 h-5 flex-shrink-0" />
                <span className="font-medium">{localError || authError}</span>
              </div>
          )}

          <div className="space-y-4">
            <Input
                label="Email professionnel"
                type="email"
                icon={Mail}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="nom@exemple.com"
                autoComplete="email"
            />

            <div className="space-y-1.5">
              <label className="text-sm font-medium text-gray-700 ml-1">Mot de passe</label>
              <div className="relative group">
                <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#1877F2] transition-colors">
                  <Lock className="w-5 h-5" />
                </div>
                <input
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="flex h-11 w-full rounded-xl border border-gray-200 bg-white px-4 pl-10 pr-12 py-2 text-sm transition-all duration-200 placeholder:text-gray-400 focus:border-[#1877F2] focus:ring-4 focus:ring-[#1877F2]/5 focus:outline-none"
                />
                <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 p-1 rounded-md transition-colors"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <label className="flex items-center gap-2 cursor-pointer group">
              <input
                  type="checkbox"
                  className="w-4 h-4 rounded border-gray-300 text-[#1877F2] focus:ring-[#1877F2] cursor-pointer"
              />
              <span className="text-sm text-gray-500 group-hover:text-gray-700 transition-colors">Se souvenir de moi</span>
            </label>
            <button type="button" className="text-sm font-semibold text-[#1877F2] hover:text-blue-700 hover:underline transition-all">
              Mot de passe oublié ?
            </button>
          </div>

          <Button
              type="submit"
              variant="primary"
              size="lg"
              className="w-full bg-[#1877F2] hover:bg-blue-700 text-white shadow-lg shadow-blue-500/30"
              isLoading={authLoading}
          >
            Se connecter
          </Button>

          <div className="relative my-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-100"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-white text-gray-400 font-medium">Ou</span>
            </div>
          </div>

          <p className="text-center text-sm text-gray-500">
            Pas encore de compte ?{' '}
            <button
                type="button"
                onClick={onSwitchToRegister}
                className="font-bold text-[#1877F2] hover:text-blue-700 hover:underline transition-all"
            >
              Créer un compte
            </button>
          </p>
        </form>
      </AuthLayout>
  );
};
```

---

### `components\onboarding\CreateSyndicate.tsx`

<a id="components-onboarding-CreateSyndicatetsx"></a>

> 📊 **Stats:** 184 lignes | 8.75 KB

```tsx
'use client';

import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Upload, Building2, FileText, Check, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { createSyndicate } from '@/lib/services/syndicates.service';
import { useAuth } from '@/lib/contexts/AuthContext';
import Image from 'next/image';

export const CreateSyndicate = () => {
    const { refreshSyndicateStatus } = useAuth();
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    // États pour les fichiers
    const [logoPreview, setLogoPreview] = useState<string | null>(null);
    const [logoFile, setLogoFile] = useState<File | null>(null);
    const [docFile, setDocFile] = useState<File | null>(null);

    const logoInputRef = useRef<HTMLInputElement>(null);
    const docInputRef = useRef<HTMLInputElement>(null);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setError(null);
        setIsLoading(true);

        const formData = new FormData(e.currentTarget);

        // Validation basique
        if (!logoFile || !docFile) {
            setError("Le logo et le document de statuts sont obligatoires.");
            setIsLoading(false);
            return;
        }

        // Ajout explicite des fichiers (bien que le formulaire les contienne déjà si les inputs ont des 'name')
        // On s'assure qu'ils sont bien attachés
        formData.set('logo', logoFile);
        formData.set('document', docFile);

        try {
            await createSyndicate(formData);
            // Rafraichir le contexte pour passer automatiquement à l'écran "En attente"
            await refreshSyndicateStatus();
        } catch (err) {
            setError("Une erreur est survenue lors de la création. Vérifiez les champs.");
        } finally {
            setIsLoading(false);
        }
    };

    const handleLogoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setLogoFile(file);
            const reader = new FileReader();
            reader.onloadend = () => setLogoPreview(reader.result as string);
            reader.readAsDataURL(file);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-[#FAFAFA] p-4">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="w-full max-w-2xl"
            >
                <div className="text-center mb-10">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-white border border-gray-200 rounded-2xl shadow-sm mb-6">
                        <Building2 className="w-8 h-8 text-[#1877F2]" />
                    </div>
                    <h1 className="text-3xl font-bold text-gray-900 tracking-tight">Créez votre Syndicat</h1>
                    <p className="text-gray-500 mt-2 text-lg">Initialisez votre structure sur UGate pour commencer.</p>
                </div>

                <form onSubmit={handleSubmit} className="bg-white border border-gray-200 rounded-2xl shadow-xl shadow-gray-200/50 p-8 space-y-8">

                    {/* Section Logo */}
                    <div className="flex flex-col items-center justify-center space-y-4">
                        <div
                            onClick={() => logoInputRef.current?.click()}
                            className="relative w-32 h-32 rounded-full border-2 border-dashed border-gray-300 hover:border-[#1877F2] hover:bg-blue-50 transition-all cursor-pointer flex items-center justify-center overflow-hidden group"
                        >
                            {logoPreview ? (
                                <Image src={logoPreview} alt="Logo" fill className="object-cover" />
                            ) : (
                                <div className="text-center text-gray-400 group-hover:text-[#1877F2]">
                                    <Upload className="w-8 h-8 mx-auto mb-1" />
                                    <span className="text-xs font-medium">Logo</span>
                                </div>
                            )}
                            <input
                                type="file"
                                name="logo" // Important pour le FormData
                                accept="image/*"
                                ref={logoInputRef}
                                className="hidden"
                                onChange={handleLogoChange}
                            />
                        </div>
                        <p className="text-sm text-gray-500">Cliquez pour ajouter le logo officiel</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <Input
                            label="Nom du Syndicat"
                            name="name"
                            placeholder="ex: UGATE Centre"
                            required
                        />
                        <Input
                            label="Domaine d'activité"
                            name="domain"
                            placeholder="ex: Transport"
                            required
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700 ml-1">Description</label>
                        <textarea
                            name="description"
                            required
                            className="w-full min-h-[100px] rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm placeholder:text-gray-400 focus:border-[#1877F2] focus:ring-4 focus:ring-[#1877F2]/5 focus:outline-none transition-all resize-none"
                            placeholder="Décrivez brièvement la mission de votre syndicat..."
                        />
                    </div>

                    {/* Upload Document */}
                    <div className="p-4 bg-gray-50 rounded-xl border border-gray-200">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className="p-2 bg-white rounded-lg border border-gray-200">
                                    <FileText className="w-6 h-6 text-gray-600" />
                                </div>
                                <div>
                                    <p className="text-sm font-medium text-gray-900">Statuts / Document officiel</p>
                                    <p className="text-xs text-gray-500">PDF uniquement (Max 5MB)</p>
                                </div>
                            </div>
                            <Button
                                type="button"
                                variant="outline"
                                size="sm"
                                onClick={() => docInputRef.current?.click()}
                            >
                                {docFile ? <span className="text-green-600 flex items-center"><Check className="w-4 h-4 mr-1"/> Attaché</span> : 'Parcourir'}
                            </Button>
                            <input
                                type="file"
                                name="document" // Important pour le FormData
                                accept=".pdf"
                                ref={docInputRef}
                                className="hidden"
                                onChange={(e) => setDocFile(e.target.files?.[0] || null)}
                            />
                        </div>
                        {docFile && <p className="mt-2 text-xs text-center text-green-600 font-medium">{docFile.name}</p>}
                    </div>

                    {error && (
                        <div className="p-3 rounded-lg bg-red-50 text-red-600 text-sm flex items-center gap-2">
                            <AlertCircle className="w-4 h-4" />
                            {error}
                        </div>
                    )}

                    <Button
                        type="submit"
                        size="lg"
                        className="w-full"
                        isLoading={isLoading}
                    >
                        Soumettre la demande
                    </Button>
                </form>
            </motion.div>
        </div>
    );
};
```

---

### `components\onboarding\PendingSyndicate.tsx`

<a id="components-onboarding-PendingSyndicatetsx"></a>

> 📊 **Stats:** 60 lignes | 2.86 KB

```tsx
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Clock, CheckCircle2, FileText, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { useAuth } from '@/lib/contexts/AuthContext';

export const PendingSyndicate = () => {
    const { refreshSyndicateStatus, user } = useAuth();

    return (
        <div className="min-h-screen flex items-center justify-center bg-[#FAFAFA] p-4">
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="w-full max-w-lg bg-white border border-gray-200 rounded-2xl shadow-xl shadow-gray-200/50 p-8 text-center"
            >
                <div className="w-20 h-20 bg-amber-50 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Clock className="w-10 h-10 text-amber-500 animate-pulse" />
                </div>

                <h1 className="text-2xl font-bold text-gray-900 mb-2">Demande en cours d'examen</h1>
                <p className="text-gray-500 mb-8">
                    Merci {user?.firstName}. Votre demande de création de syndicat a bien été reçue et est actuellement examinée par nos super-administrateurs.
                </p>

                <div className="space-y-4 mb-8 text-left">
                    <div className="flex gap-4 p-4 bg-gray-50 rounded-xl border border-gray-100">
                        <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <div>
                            <h3 className="text-sm font-semibold text-gray-900">Documents soumis</h3>
                            <p className="text-xs text-gray-500">Vos statuts et logo ont été reçus.</p>
                        </div>
                    </div>
                    <div className="flex gap-4 p-4 bg-blue-50 rounded-xl border border-blue-100">
                        <FileText className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                        <div>
                            <h3 className="text-sm font-semibold text-gray-900">Validation manuelle</h3>
                            <p className="text-xs text-gray-500">Notre équipe vérifie la conformité légale (délai moyen: 24h).</p>
                        </div>
                    </div>
                </div>

                <Button
                    variant="outline"
                    onClick={() => refreshSyndicateStatus()}
                    className="w-full"
                    leftIcon={ArrowRight}
                >
                    Actualiser le statut
                </Button>

                <p className="text-xs text-gray-400 mt-4">
                    Vous recevrez également un email de notification.
                </p>
            </motion.div>
        </div>
    );
};
```

---

### `components\Products.tsx`

<a id="components-Productstsx"></a>

> 📊 **Stats:** 492 lignes | 21.07 KB

```tsx
'use client';

import React, { useState, useEffect, useRef } from 'react';
import {
  Plus, Search, Filter, AlertCircle, CheckCircle2, Edit3, Trash2,
  ShoppingBag, Package, TrendingUp, DollarSign, X, Save,
  Loader2, ImageIcon, Upload, RefreshCw
} from 'lucide-react';
import { Button } from './ui/Button';
import { Badge } from './ui/Badge';
import { Card, CardContent, CardHeader, CardTitle } from './ui/Card';
import { Input } from './ui/Input';
import { useAuth } from '@/lib/contexts/AuthContext';
import {
  getProductsBySyndicate,
  createProduct,
  deleteProduct,
  updateProductStock,
  updateProduct,
  CreateProductDTO
} from '@/lib/services/products.service';
import { ProductResponse } from '@/lib/services/admin.service';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

export const Products: React.FC = () => {
  const { syndicateStatus } = useAuth();

  // Data States
  const [products, setProducts] = useState<ProductResponse[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isActionLoading, setIsActionLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  // UI States
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [isStockModalOpen, setIsStockModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<ProductResponse | null>(null);

  // Forms States
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [stockAdjustment, setStockAdjustment] = useState('');

  const [formData, setFormData] = useState<Partial<CreateProductDTO>>({
    name: '',
    description: '',
    price: 0,
    sku: '',
    category: '',
    stock: 0,
    isActive: true
  });

  // --- Fetch Data ---
  const fetchProducts = async () => {
    if (!syndicateStatus?.syndicateId) return;
    setIsLoading(true);
    try {
      const data = await getProductsBySyndicate(syndicateStatus.syndicateId);
      setProducts(data);
    } catch (error) {
      console.error("Erreur chargement produits:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [syndicateStatus?.syndicateId]);

  // --- Handlers ---

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImageFile(file);
      const reader = new FileReader();
      reader.onloadend = () => setImagePreview(reader.result as string);
      reader.readAsDataURL(file);
    }
  };

  const handleCreate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!syndicateStatus?.syndicateId || !imageFile) return;

    setIsActionLoading(true);
    try {
      await createProduct({
        ...formData,
        syndicatId: syndicateStatus.syndicateId,
        price: Number(formData.price),
        stock: Number(formData.stock)
      } as CreateProductDTO, imageFile);

      await fetchProducts();
      setIsCreateModalOpen(false);
      resetForm();
    } catch (error) {
      console.error("Erreur création:", error);
      alert("Erreur lors de la création du produit");
    } finally {
      setIsActionLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Êtes-vous sûr de vouloir supprimer ce produit ?")) return;

    // Optimistic UI update
    setProducts(current => current.filter(p => p.id !== id));

    try {
      await deleteProduct(id);
    } catch (error) {
      console.error("Erreur suppression:", error);
      fetchProducts(); // Revert on error
    }
  };

  const handleStockUpdate = async () => {
    if (!selectedProduct) return;
    setIsActionLoading(true);
    try {
      const newStock = selectedProduct.stock + parseInt(stockAdjustment);
      await updateProductStock(selectedProduct.id, newStock);

      // Update local state
      setProducts(current => current.map(p =>
          p.id === selectedProduct.id ? { ...p, stock: newStock } : p
      ));

      setIsStockModalOpen(false);
      setStockAdjustment('');
    } catch (error) {
      console.error("Erreur stock:", error);
    } finally {
      setIsActionLoading(false);
    }
  };

  const resetForm = () => {
    setFormData({
      name: '',
      description: '',
      price: 0,
      sku: '',
      category: '',
      stock: 0,
      isActive: true
    });
    setImageFile(null);
    setImagePreview(null);
  };

  const filteredProducts = products.filter(p =>
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.sku.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 tracking-tight">Catalogue Produits</h1>
            <p className="text-gray-500 mt-1 flex items-center gap-2">
              <ShoppingBag className="w-4 h-4" />
              {products.length} produits • {products.filter(p => p.stock > 0).length} en stock
            </p>
          </div>
          <div className="flex gap-3">
            <Button variant="outline" onClick={fetchProducts} leftIcon={RefreshCw} disabled={isLoading}>
              Actualiser
            </Button>
            <Button onClick={() => setIsCreateModalOpen(true)} leftIcon={Plus} className="bg-[#1877F2] text-white">
              Ajouter un Produit
            </Button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card className="border-0 shadow-sm bg-gradient-to-br from-blue-500 to-blue-600 text-white">
            <CardContent className="p-6">
              <div className="flex justify-between items-center mb-2">
                <span className="text-blue-100">Valeur du Stock</span>
                <DollarSign className="w-5 h-5 opacity-80" />
              </div>
              <div className="text-2xl font-bold">
                {products.reduce((acc, p) => acc + (p.price * p.stock), 0).toLocaleString()} €
              </div>
            </CardContent>
          </Card>
          <Card className="border-0 shadow-sm">
            <CardContent className="p-6">
              <div className="flex justify-between items-center mb-2">
                <span className="text-gray-500">Produits en rupture</span>
                <AlertCircle className="w-5 h-5 text-red-500" />
              </div>
              <div className="text-2xl font-bold text-gray-900">
                {products.filter(p => p.stock <= 0).length}
              </div>
            </CardContent>
          </Card>
          <Card className="border-0 shadow-sm">
            <CardContent className="p-6">
              <div className="flex justify-between items-center mb-2">
                <span className="text-gray-500">Catégories</span>
                <Filter className="w-5 h-5 text-gray-400" />
              </div>
              <div className="text-2xl font-bold text-gray-900">
                {new Set(products.map(p => p.category)).size}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Search Bar */}
        <Card className="border-0 shadow-sm">
          <CardContent className="p-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                  type="text"
                  placeholder="Rechercher par nom ou référence (SKU)..."
                  className="w-full pl-10 pr-4 py-3 bg-gray-50 border-none rounded-xl focus:ring-2 focus:ring-[#1877F2]/20 outline-none transition-all"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </CardContent>
        </Card>

        {/* Products Grid */}
        {isLoading ? (
            <div className="flex justify-center py-20">
              <Loader2 className="w-10 h-10 text-[#1877F2] animate-spin" />
            </div>
        ) : filteredProducts.length === 0 ? (
            <div className="text-center py-20 bg-white rounded-2xl border border-dashed border-gray-300">
              <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <Package className="w-8 h-8 text-gray-400" />
              </div>
              <h3 className="text-lg font-medium text-gray-900">Aucun produit trouvé</h3>
              <p className="text-gray-500 mb-6">Commencez par ajouter votre premier produit.</p>
              <Button onClick={() => setIsCreateModalOpen(true)}>Ajouter un produit</Button>
            </div>
        ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              <AnimatePresence>
                {filteredProducts.map((product) => (
                    <motion.div
                        key={product.id}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        layout
                    >
                      <div className="group bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col h-full">
                        {/* Image */}
                        <div className="relative aspect-square bg-gray-100 overflow-hidden">
                          {product.image?.url ? (
                              <Image
                                  src={product.image.url}
                                  alt={product.name}
                                  fill
                                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                              />
                          ) : (
                              <div className="flex items-center justify-center h-full text-gray-400">
                                <ImageIcon className="w-12 h-12" />
                              </div>
                          )}

                          {/* Status Badge */}
                          <div className="absolute top-3 left-3">
                            <Badge variant={product.stock > 0 ? "success" : "error"} className="shadow-sm">
                              {product.stock > 0 ? `${product.stock} en stock` : 'Rupture'}
                            </Badge>
                          </div>

                          {/* Actions Overlay */}
                          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                            <Button
                                size="sm"
                                variant="secondary"
                                onClick={() => { setSelectedProduct(product); setIsStockModalOpen(true); }}
                            >
                              <Package className="w-4 h-4" />
                            </Button>
                            <Button
                                size="sm"
                                variant="danger"
                                onClick={() => handleDelete(product.id)}
                            >
                              <Trash2 className="w-4 h-4" />
                            </Button>
                          </div>
                        </div>

                        {/* Content */}
                        <div className="p-5 flex-1 flex flex-col">
                          <div className="mb-2">
                            <p className="text-xs font-mono text-gray-400 mb-1">{product.sku}</p>
                            <h3 className="font-bold text-gray-900 line-clamp-1">{product.name}</h3>
                          </div>

                          <p className="text-sm text-gray-500 line-clamp-2 mb-4 flex-1">
                            {product.description}
                          </p>

                          <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                            <Badge variant="outline">{product.category}</Badge>
                            <span className="text-xl font-bold text-[#1877F2]">
                        {product.price.toLocaleString()} €
                      </span>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                ))}
              </AnimatePresence>
            </div>
        )}

        {/* MODALE CRÉATION */}
        <AnimatePresence>
          {isCreateModalOpen && (
              <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl overflow-hidden max-h-[90vh] overflow-y-auto"
                >
                  <div className="p-6 border-b border-gray-100 flex justify-between items-center sticky top-0 bg-white z-10">
                    <h3 className="text-xl font-bold text-gray-900">Nouveau Produit</h3>
                    <button onClick={() => setIsCreateModalOpen(false)}><X className="w-5 h-5 text-gray-500" /></button>
                  </div>

                  <form onSubmit={handleCreate} className="p-6 space-y-6">
                    <div className="flex gap-6">
                      {/* Image Upload */}
                      <div
                          onClick={() => fileInputRef.current?.click()}
                          className="w-32 h-32 flex-shrink-0 rounded-xl border-2 border-dashed border-gray-300 hover:border-[#1877F2] hover:bg-blue-50 cursor-pointer flex items-center justify-center overflow-hidden transition-all group"
                      >
                        {imagePreview ? (
                            <Image src={imagePreview} alt="Preview" width={128} height={128} className="w-full h-full object-cover" />
                        ) : (
                            <div className="text-center text-gray-400 group-hover:text-[#1877F2]">
                              <Upload className="w-6 h-6 mx-auto mb-1" />
                              <span className="text-xs">Photo</span>
                            </div>
                        )}
                        <input
                            type="file"
                            ref={fileInputRef}
                            className="hidden"
                            accept="image/*"
                            onChange={handleImageChange}
                        />
                      </div>

                      <div className="flex-1 space-y-4">
                        <Input
                            label="Nom du produit"
                            placeholder="Ex: T-Shirt Syndicat"
                            value={formData.name}
                            onChange={(e) => setFormData({...formData, name: e.target.value})}
                            required
                        />
                        <div className="grid grid-cols-2 gap-4">
                          <Input
                              label="Référence (SKU)"
                              placeholder="TSH-001"
                              value={formData.sku}
                              onChange={(e) => setFormData({...formData, sku: e.target.value})}
                              required
                          />
                          <Input
                              label="Catégorie"
                              placeholder="Vêtements"
                              value={formData.category}
                              onChange={(e) => setFormData({...formData, category: e.target.value})}
                              required
                          />
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <Input
                          label="Prix (€)"
                          type="number"
                          min="0"
                          step="0.01"
                          value={formData.price}
                          onChange={(e) => setFormData({...formData, price: parseFloat(e.target.value)})}
                          required
                      />
                      <Input
                          label="Stock initial"
                          type="number"
                          min="0"
                          value={formData.stock}
                          onChange={(e) => setFormData({...formData, stock: parseInt(e.target.value)})}
                          required
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-sm font-medium text-gray-700 ml-1">Description</label>
                      <textarea
                          className="w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#1877F2]/20 focus:border-[#1877F2] outline-none min-h-[100px]"
                          placeholder="Description détaillée du produit..."
                          value={formData.description}
                          onChange={(e) => setFormData({...formData, description: e.target.value})}
                          required
                      />
                    </div>

                    <div className="pt-4 flex justify-end gap-3">
                      <Button type="button" variant="ghost" onClick={() => setIsCreateModalOpen(false)}>
                        Annuler
                      </Button>
                      <Button type="submit" isLoading={isActionLoading}>
                        Créer le produit
                      </Button>
                    </div>
                  </form>
                </motion.div>
              </div>
          )}
        </AnimatePresence>

        {/* MODALE STOCK */}
        <AnimatePresence>
          {isStockModalOpen && selectedProduct && (
              <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="bg-white rounded-2xl shadow-2xl w-full max-w-sm overflow-hidden"
                >
                  <div className="p-6 text-center">
                    <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Package className="w-6 h-6 text-[#1877F2]" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-1">Ajuster le stock</h3>
                    <p className="text-gray-500 text-sm mb-6">{selectedProduct.name}</p>

                    <div className="bg-gray-50 rounded-xl p-4 mb-6">
                      <span className="text-sm text-gray-500 block mb-1">Stock actuel</span>
                      <span className="text-3xl font-bold text-gray-900">{selectedProduct.stock}</span>
                    </div>

                    <div className="flex items-center gap-2 mb-6">
                      <Button
                          variant="outline"
                          onClick={() => setStockAdjustment(curr => String(Number(curr) - 1))}
                      >-</Button>
                      <Input
                          type="number"
                          className="text-center font-bold text-lg"
                          placeholder="+/-"
                          value={stockAdjustment}
                          onChange={(e) => setStockAdjustment(e.target.value)}
                      />
                      <Button
                          variant="outline"
                          onClick={() => setStockAdjustment(curr => String(Number(curr) + 1))}
                      >+</Button>
                    </div>

                    <div className="flex gap-2">
                      <Button variant="ghost" className="flex-1" onClick={() => setIsStockModalOpen(false)}>Annuler</Button>
                      <Button className="flex-1" onClick={handleStockUpdate} isLoading={isActionLoading}>Valider</Button>
                    </div>
                  </div>
                </motion.div>
              </div>
          )}
        </AnimatePresence>
      </div>
  );
};
```

---

### `components\Register.tsx`

<a id="components-Registertsx"></a>

> 📊 **Stats:** 219 lignes | 7.44 KB

```tsx
'use client';

import React, { useState } from 'react';
import { Mail, Lock, Eye, EyeOff, AlertCircle, User, Phone, CheckCircle2 } from 'lucide-react';
import { Button } from './ui/Button';
import { Input } from './ui/Input';
import { useAuth } from '@/lib/contexts/AuthContext';
import { AuthLayout } from './auth/AuthLayout';

interface RegisterProps {
  onSwitchToLogin: () => void;
}

export const Register: React.FC<RegisterProps> = ({ onSwitchToLogin }) => {
  const { register, error: authError, isLoading: authLoading } = useAuth();

  const [formData, setFormData] = useState({
    username: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [success, setSuccess] = useState(false);
  const [localError, setLocalError] = useState('');
  const [acceptTerms, setAcceptTerms] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLocalError('');

    if (formData.password !== formData.confirmPassword) {
      setLocalError('Les mots de passe ne correspondent pas');
      return;
    }

    if (!acceptTerms) {
      setLocalError('Vous devez accepter les conditions d\'utilisation');
      return;
    }

    try {
      await register({
        username: formData.username,
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        phone: formData.phone,
        password: formData.password,
        service: 'LETS_GO',
        roles: ['ADMIN']
      });
      setSuccess(true);
      setTimeout(onSwitchToLogin, 3000);
    } catch (err) {
      console.error('Erreur inscription:', err);
    }
  };

  if (success) {
    return (
        <AuthLayout title="Inscription réussie !" subtitle="Bienvenue chez UGate.">
          <div className="text-center py-10">
            <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="w-10 h-10 text-green-500 animate-bounce" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Compte créé avec succès</h3>
            <p className="text-gray-500">Vous allez être redirigé vers la page de connexion...</p>
          </div>
        </AuthLayout>
    );
  }

  return (
      <AuthLayout
          title="Créer un compte"
          subtitle="Rejoignez la plateforme de référence pour les syndicats."
      >
        <form onSubmit={handleSubmit} className="space-y-5">
          {(localError || authError) && (
              <div className="flex items-center gap-3 p-4 bg-red-50/50 border border-red-100 rounded-xl text-red-600 text-sm">
                <AlertCircle className="w-5 h-5 flex-shrink-0" />
                <span className="font-medium">{localError || authError}</span>
              </div>
          )}

          <div className="grid grid-cols-2 gap-4">
            <Input
                label="Prénom"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="Jean"
                required
            />
            <Input
                label="Nom"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Dupont"
                required
            />
          </div>

          <Input
              label="Nom d'utilisateur"
              name="username"
              icon={User}
              value={formData.username}
              onChange={handleChange}
              placeholder="j.dupont"
              required
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input
                label="Email"
                name="email"
                type="email"
                icon={Mail}
                value={formData.email}
                onChange={handleChange}
                placeholder="pro@email.com"
                required
            />
            <Input
                label="Téléphone"
                name="phone"
                type="tel"
                icon={Phone}
                value={formData.phone}
                onChange={handleChange}
                placeholder="+237..."
                required
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="relative group">
              <Input
                  label="Mot de passe"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  icon={Lock}
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="••••••"
                  required
              />
            </div>
            <div className="relative group">
              <Input
                  label="Confirmation"
                  name="confirmPassword"
                  type={showPassword ? "text" : "password"}
                  icon={Lock}
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="••••••"
                  required
              />
            </div>
          </div>

          <div className="flex justify-end">
            <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="text-xs text-gray-500 hover:text-[#1877F2]"
            >
              {showPassword ? "Masquer les mots de passe" : "Afficher les mots de passe"}
            </button>
          </div>

          <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl border border-gray-200/50">
            <input
                type="checkbox"
                id="terms"
                checked={acceptTerms}
                onChange={(e) => setAcceptTerms(e.target.checked)}
                className="mt-1 w-4 h-4 rounded border-gray-300 text-[#1877F2] focus:ring-[#1877F2] cursor-pointer"
            />
            <label htmlFor="terms" className="text-xs text-gray-600 cursor-pointer leading-relaxed">
              J&apos;accepte les <a href="#" className="text-[#1877F2] font-semibold hover:underline">conditions d&apos;utilisation</a> et la <a href="#" className="text-[#1877F2] font-semibold hover:underline">politique de confidentialité</a> de UGate.
            </label>
          </div>

          <Button
              type="submit"
              variant="primary"
              size="lg"
              className="w-full bg-[#1877F2] hover:bg-blue-700 text-white shadow-lg shadow-blue-500/30"
              isLoading={authLoading}
          >
            Créer mon compte
          </Button>

          <p className="text-center text-sm text-gray-500 pt-2">
            Déjà inscrit ?{' '}
            <button
                type="button"
                onClick={onSwitchToLogin}
                className="font-bold text-[#1877F2] hover:text-blue-700 hover:underline transition-all"
            >
              Se connecter
            </button>
          </p>
        </form>
      </AuthLayout>
  );
};
```

---

### `components\Services.tsx`

<a id="components-Servicestsx"></a>

> 📊 **Stats:** 361 lignes | 14.81 KB

```tsx
'use client';

import React, { useState, useEffect } from 'react';
import {
  Plus, CheckCircle, Edit3, Trash2, Zap,
  Search, X, Save, Loader2, Briefcase,
  MoreVertical, Check, AlertCircle
} from 'lucide-react';
import { Button } from './ui/Button';
import { Badge } from './ui/Badge';
import { Card, CardContent, CardHeader, CardTitle } from './ui/Card';
import { Input, TextArea } from './ui/Input';
import {
  getActiveServices,
  createService,
  deleteService,
  updateService,
  ServiceResponse
} from '@/lib/services/services.service';
import { motion, AnimatePresence } from 'framer-motion';

export const Services: React.FC = () => {
  // Data States
  const [services, setServices] = useState<ServiceResponse[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isActionLoading, setIsActionLoading] = useState(false);

  // UI States
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [editingService, setEditingService] = useState<ServiceResponse | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  // Form State
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    price: '',
    features: [''], // Commence avec une feature vide
    isActive: true
  });

  // --- Fetch Data ---
  const fetchServices = async () => {
    setIsLoading(true);
    try {
      const data = await getActiveServices();
      setServices(data);
    } catch (error) {
      console.error("Erreur chargement services:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchServices();
  }, []);

  // --- Handlers ---

  const handleFeatureChange = (index: number, value: string) => {
    const newFeatures = [...formData.features];
    newFeatures[index] = value;
    setFormData({ ...formData, features: newFeatures });
  };

  const addFeatureField = () => {
    setFormData({ ...formData, features: [...formData.features, ''] });
  };

  const removeFeatureField = (index: number) => {
    const newFeatures = formData.features.filter((_, i) => i !== index);
    setFormData({ ...formData, features: newFeatures });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsActionLoading(true);

    // Nettoyer les features vides
    const cleanFeatures = formData.features.filter(f => f.trim() !== '');

    try {
      const payload = {
        title: formData.title,
        description: formData.description,
        price: parseFloat(formData.price),
        features: cleanFeatures,
        isActive: formData.isActive
      };

      if (editingService) {
        await updateService(editingService.id, payload);
      } else {
        await createService(payload);
      }

      await fetchServices();
      closeModal();
    } catch (error) {
      console.error("Erreur sauvegarde:", error);
      alert("Une erreur est survenue lors de la sauvegarde.");
    } finally {
      setIsActionLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Voulez-vous vraiment supprimer ce service ?")) return;

    // UI Optimiste
    setServices(current => current.filter(s => s.id !== id));

    try {
      await deleteService(id);
    } catch (error) {
      console.error("Erreur suppression:", error);
      fetchServices(); // Revert
    }
  };

  const openEditModal = (service: ServiceResponse) => {
    setEditingService(service);
    setFormData({
      title: service.title,
      description: service.description,
      price: service.price.toString(),
      features: service.features.length > 0 ? service.features : [''],
      isActive: service.isActive
    });
    setIsCreateModalOpen(true);
  };

  const closeModal = () => {
    setIsCreateModalOpen(false);
    setEditingService(null);
    setFormData({
      title: '',
      description: '',
      price: '',
      features: [''],
      isActive: true
    });
  };

  const filteredServices = services.filter(s =>
      s.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 tracking-tight">Offres de Services</h1>
            <p className="text-gray-500 mt-1 flex items-center gap-2">
              <Briefcase className="w-4 h-4" />
              {services.length} service{services.length > 1 ? 's' : ''} disponible{services.length > 1 ? 's' : ''}
            </p>
          </div>
          <Button onClick={() => setIsCreateModalOpen(true)} leftIcon={Plus} className="bg-[#1877F2] text-white shadow-lg shadow-blue-500/20">
            Créer un Service
          </Button>
        </div>

        {/* Search */}
        <Card className="border-0 shadow-sm">
          <CardContent className="p-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                  type="text"
                  placeholder="Rechercher un service..."
                  className="w-full pl-10 pr-4 py-3 bg-gray-50 border-none rounded-xl focus:ring-2 focus:ring-[#1877F2]/20 outline-none transition-all"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </CardContent>
        </Card>

        {/* Grid */}
        {isLoading ? (
            <div className="flex justify-center py-20">
              <Loader2 className="w-10 h-10 text-[#1877F2] animate-spin" />
            </div>
        ) : filteredServices.length === 0 ? (
            <div className="text-center py-20 bg-white rounded-2xl border border-dashed border-gray-300">
              <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-lg font-medium text-gray-900">Aucun service</h3>
              <p className="text-gray-500 mb-6">Créez votre première offre de service pour vos membres.</p>
              <Button onClick={() => setIsCreateModalOpen(true)}>Créer un service</Button>
            </div>
        ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <AnimatePresence>
                {filteredServices.map((service) => (
                    <motion.div
                        key={service.id}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        layout
                    >
                      <Card className="h-full border-0 shadow-sm hover:shadow-xl transition-all duration-300 group overflow-hidden flex flex-col">
                        {/* Decorative Header */}
                        <div className="h-2 bg-gradient-to-r from-blue-500 to-purple-600"></div>

                        <CardContent className="p-6 flex-1 flex flex-col">
                          <div className="flex justify-between items-start mb-4">
                            <div className="p-3 bg-blue-50 rounded-xl text-[#1877F2]">
                              <Zap className="w-6 h-6" />
                            </div>
                            <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                              <button
                                  onClick={() => openEditModal(service)}
                                  className="p-2 text-gray-400 hover:text-[#1877F2] hover:bg-blue-50 rounded-lg transition-colors"
                              >
                                <Edit3 className="w-4 h-4" />
                              </button>
                              <button
                                  onClick={() => handleDelete(service.id)}
                                  className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                              >
                                <Trash2 className="w-4 h-4" />
                              </button>
                            </div>
                          </div>

                          <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                          <p className="text-gray-500 text-sm mb-6 line-clamp-3 flex-1">
                            {service.description}
                          </p>

                          <div className="space-y-3 mb-6">
                            {service.features.slice(0, 3).map((feature, idx) => (
                                <div key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                                  <span>{feature}</span>
                                </div>
                            ))}
                            {service.features.length > 3 && (
                                <p className="text-xs text-gray-400 pl-6">
                                  +{service.features.length - 3} autres avantages
                                </p>
                            )}
                          </div>

                          <div className="pt-6 mt-auto border-t border-gray-100 flex items-center justify-between">
                            <div>
                              <p className="text-xs text-gray-400 uppercase tracking-wider font-semibold">Tarif</p>
                              <p className="text-2xl font-bold text-[#1877F2]">
                                {service.price.toLocaleString()} <span className="text-sm font-normal text-gray-500">FCFA</span>
                              </p>
                            </div>
                            <Badge variant={service.isActive ? 'success' : 'default'}>
                              {service.isActive ? 'Actif' : 'Inactif'}
                            </Badge>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                ))}
              </AnimatePresence>
            </div>
        )}

        {/* MODALE CRÉATION / ÉDITION */}
        <AnimatePresence>
          {isCreateModalOpen && (
              <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="bg-white rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden max-h-[90vh] overflow-y-auto"
                >
                  <div className="p-6 border-b border-gray-100 flex justify-between items-center sticky top-0 bg-white z-10">
                    <h3 className="text-xl font-bold text-gray-900">
                      {editingService ? 'Modifier le service' : 'Nouveau Service'}
                    </h3>
                    <button onClick={closeModal}><X className="w-5 h-5 text-gray-500" /></button>
                  </div>

                  <form onSubmit={handleSubmit} className="p-6 space-y-5">
                    <Input
                        label="Nom du service *"
                        placeholder="Ex: Assistance Juridique"
                        value={formData.title}
                        onChange={(e) => setFormData({...formData, title: e.target.value})}
                        required
                    />

                    <Input
                        label="Prix (FCFA) *"
                        type="number"
                        placeholder="Ex: 15000"
                        value={formData.price}
                        onChange={(e) => setFormData({...formData, price: e.target.value})}
                        required
                    />

                    <TextArea
                        label="Description complète *"
                        placeholder="Détaillez ce que comprend ce service..."
                        value={formData.description}
                        onChange={(e) => setFormData({...formData, description: e.target.value})}
                        required
                        className="min-h-[120px]"
                    />

                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <label className="text-sm font-medium text-gray-700">Caractéristiques clés</label>
                        <button
                            type="button"
                            onClick={addFeatureField}
                            className="text-xs text-[#1877F2] font-semibold hover:underline"
                        >
                          + Ajouter
                        </button>
                      </div>
                      <div className="space-y-2">
                        {formData.features.map((feature, idx) => (
                            <div key={idx} className="flex gap-2">
                              <Input
                                  placeholder={`Avantage ${idx + 1}`}
                                  value={feature}
                                  onChange={(e) => handleFeatureChange(idx, e.target.value)}
                              />
                              {formData.features.length > 1 && (
                                  <button
                                      type="button"
                                      onClick={() => removeFeatureField(idx)}
                                      className="p-2 text-gray-400 hover:text-red-500 transition-colors"
                                  >
                                    <X className="w-4 h-4" />
                                  </button>
                              )}
                            </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-4 flex justify-end gap-3 border-t border-gray-100 mt-6">
                      <Button type="button" variant="ghost" onClick={closeModal}>
                        Annuler
                      </Button>
                      <Button type="submit" isLoading={isActionLoading}>
                        {editingService ? 'Mettre à jour' : 'Publier le service'}
                      </Button>
                    </div>
                  </form>
                </motion.div>
              </div>
          )}
        </AnimatePresence>
      </div>
  );
};
```

---

### `components\Settings.tsx`

<a id="components-Settingstsx"></a>

> 📊 **Stats:** 519 lignes | 25.14 KB

```tsx
'use client';

import React, { useState } from 'react';
import { 
  User, Mail, Lock, Bell, Globe, Shield, Database, 
  Palette, Monitor, Smartphone, Save, Eye, EyeOff,
  Building2, Users, Calendar, Package, FileText,
  CheckCircle2, AlertCircle, Info, ChevronRight
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/Card';
import { Button } from './ui/Button';
import { Input } from './ui/Input';
import { Badge } from './ui/Badge';

export const Settings: React.FC = () => {
  const [activeTab, setActiveTab] = useState('profile');
  const [showPassword, setShowPassword] = useState(false);
  const [saveStatus, setSaveStatus] = useState<'idle' | 'saving' | 'saved'>('idle');

  const [profileData, setProfileData] = useState({
    firstName: 'Admin',
    lastName: 'Principal',
    email: 'admin@ugate.cm',
    phone: '+237 6 70 00 00 00',
    role: 'Super Administrateur',
    branch: 'Siège National - Yaoundé',
  });

  const [securityData, setSecurityData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
    twoFactorEnabled: true,
  });

  const [notificationSettings, setNotificationSettings] = useState({
    emailNotifications: true,
    pushNotifications: true,
    smsNotifications: false,
    newEvents: true,
    newMembers: true,
    productUpdates: true,
    systemAlerts: true,
  });

  const [appearanceSettings, setAppearanceSettings] = useState({
    theme: 'light',
    language: 'fr',
    dateFormat: 'DD/MM/YYYY',
    timeFormat: '24h',
  });

  const handleSave = () => {
    setSaveStatus('saving');
    setTimeout(() => {
      setSaveStatus('saved');
      setTimeout(() => setSaveStatus('idle'), 2000);
    }, 1000);
  };

  const tabs = [
    { id: 'profile', label: 'Profil', icon: User },
    { id: 'security', label: 'Sécurité', icon: Shield },
    { id: 'notifications', label: 'Notifications', icon: Bell },
    { id: 'appearance', label: 'Apparence', icon: Palette },
    { id: 'organization', label: 'Organisation', icon: Building2 },
    { id: 'data', label: 'Données', icon: Database },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Paramètres</h1>
        <p className="text-gray-500 mt-1">Gérez vos préférences et configurations</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Sidebar Navigation */}
        <div className="lg:col-span-1">
          <Card className="border-0 shadow-lg sticky top-24">
            <CardContent className="p-4">
              <nav className="space-y-1">
                {tabs.map((tab) => {
                  const Icon = tab.icon;
                  const isActive = activeTab === tab.id;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                        isActive
                          ? 'bg-[#1877F2] text-white shadow-md'
                          : 'text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                      <span className="font-medium">{tab.label}</span>
                      {isActive && <ChevronRight className="w-4 h-4 ml-auto" />}
                    </button>
                  );
                })}
              </nav>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <div className="lg:col-span-3 space-y-6">
          {/* Profile Tab */}
          {activeTab === 'profile' && (
            <div className="space-y-6 animate-in fade-in duration-300">
              <Card className="border-0 shadow-lg">
                <CardHeader className="border-b border-gray-100">
                  <CardTitle className="flex items-center gap-2">
                    <User className="w-5 h-5 text-[#1877F2]" />
                    Informations Personnelles
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center gap-6 mb-6">
                    <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#1877F2] to-purple-600 flex items-center justify-center text-white text-3xl font-bold shadow-lg">
                      {profileData.firstName[0]}{profileData.lastName[0]}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">
                        {profileData.firstName} {profileData.lastName}
                      </h3>
                      <p className="text-gray-500">{profileData.email}</p>
                      <Badge variant="info" className="mt-2">{profileData.role}</Badge>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Input
                      label="Prénom"
                      value={profileData.firstName}
                      onChange={(e) => setProfileData({ ...profileData, firstName: e.target.value })}
                    />
                    <Input
                      label="Nom"
                      value={profileData.lastName}
                      onChange={(e) => setProfileData({ ...profileData, lastName: e.target.value })}
                    />
                    <Input
                      label="Email"
                      type="email"
                      value={profileData.email}
                      onChange={(e) => setProfileData({ ...profileData, email: e.target.value })}
                    />
                    <Input
                      label="Téléphone"
                      value={profileData.phone}
                      onChange={(e) => setProfileData({ ...profileData, phone: e.target.value })}
                    />
                  </div>

                  <Input
                    label="Agence"
                    value={profileData.branch}
                    disabled
                  />
                </CardContent>
              </Card>

              <div className="flex justify-end">
                <Button 
                  variant="primary" 
                  leftIcon={Save}
                  onClick={handleSave}
                  disabled={saveStatus === 'saving'}
                >
                  {saveStatus === 'saving' ? 'Enregistrement...' : saveStatus === 'saved' ? 'Enregistré !' : 'Enregistrer'}
                </Button>
              </div>
            </div>
          )}

          {/* Security Tab */}
          {activeTab === 'security' && (
            <div className="space-y-6 animate-in fade-in duration-300">
              <Card className="border-0 shadow-lg">
                <CardHeader className="border-b border-gray-100">
                  <CardTitle className="flex items-center gap-2">
                    <Lock className="w-5 h-5 text-[#1877F2]" />
                    Changer le Mot de Passe
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6 space-y-4">
                  <div className="relative">
                    <Input
                      label="Mot de passe actuel"
                      type={showPassword ? 'text' : 'password'}
                      value={securityData.currentPassword}
                      onChange={(e) => setSecurityData({ ...securityData, currentPassword: e.target.value })}
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-9 text-gray-400 hover:text-gray-600"
                    >
                      {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </button>
                  </div>
                  <Input
                    label="Nouveau mot de passe"
                    type="password"
                    value={securityData.newPassword}
                    onChange={(e) => setSecurityData({ ...securityData, newPassword: e.target.value })}
                  />
                  <Input
                    label="Confirmer le mot de passe"
                    type="password"
                    value={securityData.confirmPassword}
                    onChange={(e) => setSecurityData({ ...securityData, confirmPassword: e.target.value })}
                  />
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardHeader className="border-b border-gray-100">
                  <CardTitle className="flex items-center gap-2">
                    <Shield className="w-5 h-5 text-[#1877F2]" />
                    Authentification à Deux Facteurs
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-semibold text-gray-900">Activer 2FA</h4>
                      <p className="text-sm text-gray-500">Ajoutez une couche de sécurité supplémentaire</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={securityData.twoFactorEnabled}
                        onChange={(e) => setSecurityData({ ...securityData, twoFactorEnabled: e.target.checked })}
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#1877F2]"></div>
                    </label>
                  </div>
                </CardContent>
              </Card>

              <div className="flex justify-end">
                <Button variant="primary" leftIcon={Save} onClick={handleSave}>
                  Enregistrer
                </Button>
              </div>
            </div>
          )}

          {/* Notifications Tab */}
          {activeTab === 'notifications' && (
            <div className="space-y-6 animate-in fade-in duration-300">
              <Card className="border-0 shadow-lg">
                <CardHeader className="border-b border-gray-100">
                  <CardTitle className="flex items-center gap-2">
                    <Bell className="w-5 h-5 text-[#1877F2]" />
                    Canaux de Notification
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6 space-y-4">
                  {[
                    { key: 'emailNotifications', label: 'Notifications par Email', icon: Mail },
                    { key: 'pushNotifications', label: 'Notifications Push', icon: Monitor },
                    { key: 'smsNotifications', label: 'Notifications SMS', icon: Smartphone },
                  ].map((item) => {
                    const Icon = item.icon;
                    return (
                      <div key={item.key} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                        <div className="flex items-center gap-3">
                          <Icon className="w-5 h-5 text-gray-600" />
                          <span className="font-medium text-gray-900">{item.label}</span>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input
                            type="checkbox"
                            checked={notificationSettings[item.key as keyof typeof notificationSettings] as boolean}
                            onChange={(e) => setNotificationSettings({ ...notificationSettings, [item.key]: e.target.checked })}
                            className="sr-only peer"
                          />
                          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#1877F2]"></div>
                        </label>
                      </div>
                    );
                  })}
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardHeader className="border-b border-gray-100">
                  <CardTitle className="flex items-center gap-2">
                    <AlertCircle className="w-5 h-5 text-[#1877F2]" />
                    Types de Notifications
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6 space-y-4">
                  {[
                    { key: 'newEvents', label: 'Nouveaux événements', icon: Calendar },
                    { key: 'newMembers', label: 'Nouveaux membres', icon: Users },
                    { key: 'productUpdates', label: 'Mises à jour produits', icon: Package },
                    { key: 'systemAlerts', label: 'Alertes système', icon: AlertCircle },
                  ].map((item) => {
                    const Icon = item.icon;
                    return (
                      <div key={item.key} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                        <div className="flex items-center gap-3">
                          <Icon className="w-5 h-5 text-gray-600" />
                          <span className="font-medium text-gray-900">{item.label}</span>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input
                            type="checkbox"
                            checked={notificationSettings[item.key as keyof typeof notificationSettings] as boolean}
                            onChange={(e) => setNotificationSettings({ ...notificationSettings, [item.key]: e.target.checked })}
                            className="sr-only peer"
                          />
                          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#1877F2]"></div>
                        </label>
                      </div>
                    );
                  })}
                </CardContent>
              </Card>

              <div className="flex justify-end">
                <Button variant="primary" leftIcon={Save} onClick={handleSave}>
                  Enregistrer
                </Button>
              </div>
            </div>
          )}

          {/* Appearance Tab */}
          {activeTab === 'appearance' && (
            <div className="space-y-6 animate-in fade-in duration-300">
              <Card className="border-0 shadow-lg">
                <CardHeader className="border-b border-gray-100">
                  <CardTitle className="flex items-center gap-2">
                    <Palette className="w-5 h-5 text-[#1877F2]" />
                    Thème et Affichage
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6 space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">Thème</label>
                    <div className="grid grid-cols-2 gap-4">
                      {[
                        { value: 'light', label: 'Clair', icon: '☀️' },
                        { value: 'dark', label: 'Sombre', icon: '🌙' },
                      ].map((theme) => (
                        <button
                          key={theme.value}
                          onClick={() => setAppearanceSettings({ ...appearanceSettings, theme: theme.value })}
                          className={`p-4 rounded-lg border-2 transition-all ${
                            appearanceSettings.theme === theme.value
                              ? 'border-[#1877F2] bg-blue-50'
                              : 'border-gray-200 hover:border-gray-300'
                          }`}
                        >
                          <div className="text-3xl mb-2">{theme.icon}</div>
                          <div className="font-medium">{theme.label}</div>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">Langue</label>
                    <select
                      value={appearanceSettings.language}
                      onChange={(e) => setAppearanceSettings({ ...appearanceSettings, language: e.target.value })}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:border-[#1877F2] focus:ring-4 focus:ring-blue-500/10 outline-none"
                    >
                      <option value="fr">Français</option>
                      <option value="en">English</option>
                    </select>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-3">Format de date</label>
                      <select
                        value={appearanceSettings.dateFormat}
                        onChange={(e) => setAppearanceSettings({ ...appearanceSettings, dateFormat: e.target.value })}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:border-[#1877F2] focus:ring-4 focus:ring-blue-500/10 outline-none"
                      >
                        <option value="DD/MM/YYYY">DD/MM/YYYY</option>
                        <option value="MM/DD/YYYY">MM/DD/YYYY</option>
                        <option value="YYYY-MM-DD">YYYY-MM-DD</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-3">Format d&apos;heure</label>
                      <select
                        value={appearanceSettings.timeFormat}
                        onChange={(e) => setAppearanceSettings({ ...appearanceSettings, timeFormat: e.target.value })}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:border-[#1877F2] focus:ring-4 focus:ring-blue-500/10 outline-none"
                      >
                        <option value="24h">24 heures</option>
                        <option value="12h">12 heures (AM/PM)</option>
                      </select>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="flex justify-end">
                <Button variant="primary" leftIcon={Save} onClick={handleSave}>
                  Enregistrer
                </Button>
              </div>
            </div>
          )}

          {/* Organization Tab */}
          {activeTab === 'organization' && (
            <div className="space-y-6 animate-in fade-in duration-300">
              <Card className="border-0 shadow-lg">
                <CardHeader className="border-b border-gray-100">
                  <CardTitle className="flex items-center gap-2">
                    <Building2 className="w-5 h-5 text-[#1877F2]" />
                    Informations de l&apos;Organisation
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6 space-y-4">
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <div className="flex items-start gap-3">
                      <Info className="w-5 h-5 text-blue-600 mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-blue-900">Paramètres réservés</h4>
                        <p className="text-sm text-blue-700 mt-1">
                          Ces paramètres sont réservés aux super-administrateurs du siège national.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3 opacity-50 pointer-events-none">
                    <Input label="Nom de l'organisation" value="Union Générale des Agents Techniques et Économiques" disabled />
                    <Input label="Sigle" value="UGATE" disabled />
                    <Input label="Siège social" value="Yaoundé, Cameroun" disabled />
                    <Input label="Email officiel" value="contact@ugate.cm" disabled />
                    <Input label="Téléphone" value="+237 6 70 00 00 00" disabled />
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {/* Data Tab */}
          {activeTab === 'data' && (
            <div className="space-y-6 animate-in fade-in duration-300">
              <Card className="border-0 shadow-lg">
                <CardHeader className="border-b border-gray-100">
                  <CardTitle className="flex items-center gap-2">
                    <Database className="w-5 h-5 text-[#1877F2]" />
                    Gestion des Données
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6 space-y-4">
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-semibold text-gray-900">Exporter mes données</h4>
                        <p className="text-sm text-gray-500">Téléchargez toutes vos données personnelles</p>
                      </div>
                      <Button variant="outline" size="sm" leftIcon={FileText}>
                        Exporter
                      </Button>
                    </div>
                  </div>

                  <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-semibold text-red-900">Supprimer mon compte</h4>
                        <p className="text-sm text-red-700">Cette action est irréversible</p>
                      </div>
                      <Button variant="outline" size="sm" className="text-red-600 border-red-300 hover:bg-red-100">
                        Supprimer
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardHeader className="border-b border-gray-100">
                  <CardTitle className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#1877F2]" />
                    Confidentialité
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div>
                        <h4 className="font-medium text-gray-900">Profil public</h4>
                        <p className="text-sm text-gray-500">Permettre aux autres membres de voir votre profil</p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" defaultChecked className="sr-only peer" />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#1877F2]"></div>
                      </label>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

```

---

### `components\ui\Badge.tsx`

<a id="components-ui-Badgetsx"></a>

> 📊 **Stats:** 29 lignes | 959 B

```tsx
import React from 'react';

type Variant = 'default' | 'success' | 'warning' | 'error' | 'outline' | 'info';

interface BadgeProps {
  children: React.ReactNode;
  variant?: Variant;
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({ children, variant = 'default', className = '' }) => {
  const baseStyles = "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border transition-colors";
  
  const variants = {
    default: "bg-gray-100 text-gray-800 border-gray-200",
    success: "bg-emerald-50 text-emerald-700 border-emerald-200",
    warning: "bg-amber-50 text-amber-700 border-amber-200",
    error: "bg-red-50 text-red-700 border-red-200",
    info: "bg-blue-50 text-[#1877F2] border-blue-200",
    outline: "bg-transparent border-gray-300 text-gray-600"
  };

  return (
    <span className={`${baseStyles} ${variants[variant]} ${className}`}>
      {children}
    </span>
  );
};

```

---

### `components\ui\Button.tsx`

<a id="components-ui-Buttontsx"></a>

> 📊 **Stats:** 58 lignes | 2.26 KB

```tsx
import React from 'react';
import { Loader2 } from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline' | 'destructive';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
  leftIcon?: React.ElementType;
}

export const Button: React.FC<ButtonProps> = ({
                                                children,
                                                variant = 'primary',
                                                size = 'md',
                                                isLoading = false,
                                                leftIcon: LeftIcon,
                                                className,
                                                disabled,
                                                ...props
                                              }) => {
  const variants = {
    primary: "bg-primary text-white hover:bg-primary/90 shadow-lg shadow-primary/20",
    secondary: "bg-white text-foreground border border-gray-200 hover:bg-gray-50 shadow-sm",
    ghost: "bg-transparent text-foreground hover:bg-gray-100",
    outline: "bg-transparent border border-border text-foreground hover:bg-gray-50",
    destructive: "bg-destructive text-white hover:bg-destructive/90 shadow-sm",
  };

  const sizes = {
    sm: "h-9 px-3 text-xs",
    md: "h-11 px-6 text-sm",
    lg: "h-14 px-8 text-base",
  };

  return (
      <motion.button
          whileTap={{ scale: 0.98 }}
          className={cn(
              "inline-flex items-center justify-center font-semibold rounded-[var(--radius)] transition-all duration-200",
              "disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-primary/20",
              variants[variant],
              sizes[size],
              className
          )}
          disabled={disabled || isLoading}
          {...props}
      >
        {isLoading ? (
            <Loader2 className="w-4 h-4 animate-spin mr-2" />
        ) : LeftIcon ? (
            <LeftIcon className="w-4 h-4 mr-2" />
        ) : null}
        {children}
      </motion.button>
  );
};
```

---

### `components\ui\Card.tsx`

<a id="components-ui-Cardtsx"></a>

> 📊 **Stats:** 43 lignes | 1.26 KB

```tsx
import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export const Card: React.FC<CardProps> = ({ children, className = '', onClick }) => {
  return (
    <div 
      onClick={onClick}
      className={`bg-white rounded-xl border border-gray-200 shadow-sm transition-all duration-200 ${onClick ? 'cursor-pointer hover:-translate-y-1 hover:shadow-md hover:border-gray-300' : ''} ${className}`}
    >
      {children}
    </div>
  );
};

export const CardHeader: React.FC<CardProps> = ({ children, className = '' }) => (
  <div className={`p-6 pb-4 border-b border-gray-100 ${className}`}>
    {children}
  </div>
);

export const CardTitle: React.FC<CardProps> = ({ children, className = '' }) => (
  <h3 className={`text-lg font-semibold text-gray-900 ${className}`}>
    {children}
  </h3>
);

export const CardContent: React.FC<CardProps> = ({ children, className = '' }) => (
  <div className={`p-6 ${className}`}>
    {children}
  </div>
);

export const CardFooter: React.FC<CardProps> = ({ children, className = '' }) => (
  <div className={`p-4 px-6 border-t border-gray-100 bg-gray-50/50 rounded-b-xl flex items-center ${className}`}>
    {children}
  </div>
);

```

---

### `components\ui\Input.tsx`

<a id="components-ui-Inputtsx"></a>

> 📊 **Stats:** 71 lignes | 2.79 KB

```tsx
import React from 'react';
import { cn } from '@/lib/utils';

// --- Composant Input ---

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    error?: string;
    icon?: React.ElementType;
}

export const Input: React.FC<InputProps> = ({ label, error, icon: Icon, className, ...props }) => {
    return (
        <div className="w-full space-y-1.5">
            {label && (
                <label className="text-sm font-medium text-gray-700 ml-1">
                    {label}
                </label>
            )}
            <div className="relative group">
                {Icon && (
                    <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#1877F2] transition-colors">
                        <Icon className="w-5 h-5" />
                    </div>
                )}
                <input
                    className={cn(
                        "flex h-11 w-full rounded-xl border border-gray-200 bg-white px-4 py-2 text-sm transition-all duration-200",
                        "placeholder:text-gray-400 focus:border-[#1877F2] focus:ring-4 focus:ring-[#1877F2]/5 focus:outline-none",
                        "disabled:cursor-not-allowed disabled:opacity-50",
                        Icon && "pl-10",
                        error && "border-red-500 focus:border-red-500 focus:ring-red-500/5",
                        className
                    )}
                    {...props}
                />
            </div>
            {error && <p className="text-xs text-red-500 ml-1">{error}</p>}
        </div>
    );
};

// --- Composant TextArea ---

interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    label?: string;
    error?: string;
}

export const TextArea: React.FC<TextAreaProps> = ({ label, error, className, ...props }) => {
    return (
        <div className="w-full space-y-1.5">
            {label && (
                <label className="text-sm font-medium text-gray-700 ml-1">
                    {label}
                </label>
            )}
            <textarea
                className={cn(
                    "flex min-h-[80px] w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm transition-all duration-200",
                    "placeholder:text-gray-400 focus:border-[#1877F2] focus:ring-4 focus:ring-[#1877F2]/5 focus:outline-none",
                    "disabled:cursor-not-allowed disabled:opacity-50 resize-y",
                    error && "border-red-500 focus:border-red-500 focus:ring-red-500/5",
                    className
                )}
                {...props}
            />
            {error && <p className="text-xs text-red-500 ml-1">{error}</p>}
        </div>
    );
};
```

---

### `generate.js`

<a id="generatejs"></a>

> 📊 **Stats:** 468 lignes | 15.13 KB

```javascript
#!/usr/bin/env node

/**
 * 🚀 Générateur de Contexte de Projet pour IA
 *
 * Ce script analyse votre projet Next.js et génère un document markdown complet
 * contenant toute la structure et le code source, optimisé pour être donné aux IA.
 *
 * Usage: node generate-project-context.js
 */

const fs = require('fs');
const path = require('path');

// ============================================================================
// CONFIGURATION
// ============================================================================

const CONFIG = {
    // Fichiers et dossiers à ignorer
    IGNORED_PATHS: [
        'node_modules',
        '.next',
        '.git',
        '.idea',
        'dist',
        'build',
        'coverage',
        '.cache',
        'out',
        '.turbo',
        '.vercel'
    ],

    // Extensions de fichiers à inclure
    INCLUDED_EXTENSIONS: [
        // Code source
        '.js', '.jsx', '.ts', '.tsx',
        // Styles
        '.css', '.scss', '.sass', '.less',
        // Config
        '.json', '.config.js', '.config.ts',
        // Documentation
        '.md', '.mdx',
        // Autres
        '.env.example', '.env.local.example'
    ],

    // Fichiers importants à toujours inclure
    PRIORITY_FILES: [
        'package.json',
        'package-lock.json',
        'tsconfig.json',
        'next.config.js',
        'next.config.ts',
        'tailwind.config.js',
        'tailwind.config.ts',
        'postcss.config.js',
        'eslint.config.js',
        '.eslintrc.json',
        'README.md',
        '.env.example',
        'middleware.js',
        'middleware.ts'
    ],

    // Taille maximale d'un fichier (en octets) - 500KB
    MAX_FILE_SIZE: 500 * 1024,

    // Nom du fichier de sortie
    OUTPUT_FILE: 'PROJECT_CONTEXT.md'
};

// ============================================================================
// UTILITAIRES
// ============================================================================

class ContextGenerator {
    constructor() {
        this.projectRoot = process.cwd();
        this.stats = {
            totalFiles: 0,
            totalLines: 0,
            filesByType: {},
            skippedFiles: []
        };
    }

    /**
     * Vérifie si un chemin doit être ignoré
     */
    shouldIgnore(filePath) {
        const relativePath = path.relative(this.projectRoot, filePath);
        return CONFIG.IGNORED_PATHS.some(ignored =>
            relativePath.includes(ignored) || relativePath.startsWith(ignored)
        );
    }

    /**
     * Vérifie si un fichier doit être inclus
     */
    shouldInclude(filePath) {
        const ext = path.extname(filePath);
        const basename = path.basename(filePath);

        // Toujours inclure les fichiers prioritaires
        if (CONFIG.PRIORITY_FILES.includes(basename)) {
            return true;
        }

        // Inclure selon l'extension
        return CONFIG.INCLUDED_EXTENSIONS.includes(ext);
    }

    /**
     * Récupère tous les fichiers du projet récursivement
     */
    getAllFiles(dirPath, arrayOfFiles = []) {
        const files = fs.readdirSync(dirPath);

        files.forEach(file => {
            const fullPath = path.join(dirPath, file);

            if (this.shouldIgnore(fullPath)) {
                return;
            }

            if (fs.statSync(fullPath).isDirectory()) {
                arrayOfFiles = this.getAllFiles(fullPath, arrayOfFiles);
            } else if (this.shouldInclude(fullPath)) {
                arrayOfFiles.push(fullPath);
            }
        });

        return arrayOfFiles;
    }

    /**
     * Lit le contenu d'un fichier avec gestion d'erreur
     */
    readFileContent(filePath) {
        try {
            const stats = fs.statSync(filePath);

            if (stats.size > CONFIG.MAX_FILE_SIZE) {
                this.stats.skippedFiles.push({
                    path: filePath,
                    reason: 'Trop volumineux',
                    size: this.formatFileSize(stats.size)
                });
                return null;
            }

            const content = fs.readFileSync(filePath, 'utf8');
            const lines = content.split('\n').length;
            this.stats.totalLines += lines;

            return content;
        } catch (error) {
            this.stats.skippedFiles.push({
                path: filePath,
                reason: `Erreur: ${error.message}`
            });
            return null;
        }
    }

    /**
     * Détermine le langage pour le bloc de code markdown
     */
    getLanguage(filePath) {
        const ext = path.extname(filePath);
        const languageMap = {
            '.js': 'javascript',
            '.jsx': 'jsx',
            '.ts': 'typescript',
            '.tsx': 'tsx',
            '.json': 'json',
            '.css': 'css',
            '.scss': 'scss',
            '.sass': 'sass',
            '.md': 'markdown',
            '.mdx': 'mdx',
            '.html': 'html',
            '.env.example': 'bash',
            '.config.js': 'javascript',
            '.config.ts': 'typescript'
        };

        return languageMap[ext] || 'text';
    }

    /**
     * Formate la taille d'un fichier
     */
    formatFileSize(bytes) {
        if (bytes < 1024) return bytes + ' B';
        if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(2) + ' KB';
        return (bytes / (1024 * 1024)).toFixed(2) + ' MB';
    }

    /**
     * Génère la table des matières
     */
    generateTableOfContents(filesByCategory) {
        let toc = '## 📚 Table des Matières\n\n';

        Object.keys(filesByCategory).forEach(category => {
            const files = filesByCategory[category];
            toc += `- [${category}](#${category.toLowerCase().replace(/\s+/g, '-')})\n`;
            files.forEach(file => {
                const relativePath = path.relative(this.projectRoot, file);
                const anchor = relativePath.replace(/[\/\\]/g, '-').replace(/\./g, '');
                toc += `  - [${relativePath}](#${anchor})\n`;
            });
        });

        return toc + '\n---\n\n';
    }

    /**
     * Catégorise les fichiers
     */
    categorizeFiles(files) {
        const categories = {
            '📦 Configuration': [],
            '🎯 Pages & Routes': [],
            '🧩 Composants': [],
            '⚙️ Services & API': [],
            '🎨 Styles': [],
            '📘 Types & Constantes': [],
            '🔧 Utilitaires': [],
            '📝 Documentation': [],
            '🔐 Environnement': [],
            '📄 Autres': []
        };

        files.forEach(file => {
            const relativePath = path.relative(this.projectRoot, file);
            const basename = path.basename(file);
            const ext = path.extname(file);

            // Catégorisation
            if (CONFIG.PRIORITY_FILES.includes(basename)) {
                categories['📦 Configuration'].push(file);
            } else if (relativePath.includes('/app/') || relativePath.includes('/pages/')) {
                categories['🎯 Pages & Routes'].push(file);
            } else if (relativePath.includes('/components/')) {
                categories['🧩 Composants'].push(file);
            } else if (relativePath.includes('/lib/services/') || relativePath.includes('/api/')) {
                categories['⚙️ Services & API'].push(file);
            } else if (['.css', '.scss', '.sass'].includes(ext)) {
                categories['🎨 Styles'].push(file);
            } else if (relativePath.includes('/lib/types/') || relativePath.includes('/lib/constants/')) {
                categories['📘 Types & Constantes'].push(file);
            } else if (relativePath.includes('/lib/') || relativePath.includes('/utils/')) {
                categories['🔧 Utilitaires'].push(file);
            } else if (ext === '.md' || ext === '.mdx') {
                categories['📝 Documentation'].push(file);
            } else if (basename.includes('.env')) {
                categories['🔐 Environnement'].push(file);
            } else {
                categories['📄 Autres'].push(file);
            }

            // Stats par type
            this.stats.filesByType[ext] = (this.stats.filesByType[ext] || 0) + 1;
        });

        // Supprimer les catégories vides
        Object.keys(categories).forEach(key => {
            if (categories[key].length === 0) {
                delete categories[key];
            }
        });

        return categories;
    }

    /**
     * Génère le contenu markdown pour un fichier
     */
    generateFileSection(filePath) {
        const relativePath = path.relative(this.projectRoot, filePath);
        const content = this.readFileContent(filePath);

        if (!content) {
            return '';
        }

        const language = this.getLanguage(filePath);
        const anchor = relativePath.replace(/[\/\\]/g, '-').replace(/\./g, '');
        const lines = content.split('\n').length;

        let section = `### \`${relativePath}\`\n\n`;
        section += `<a id="${anchor}"></a>\n\n`;
        section += `> 📊 **Stats:** ${lines} lignes | ${this.formatFileSize(content.length)}\n\n`;
        section += `\`\`\`${language}\n${content}\n\`\`\`\n\n`;
        section += `---\n\n`;

        this.stats.totalFiles++;

        return section;
    }

    /**
     * Génère le header du document
     */
    generateHeader() {
        const projectName = path.basename(this.projectRoot);
        const date = new Date().toLocaleString('fr-FR', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });

        return `# 🚀 Contexte de Projet: ${projectName}

> **Généré automatiquement le:** ${date}
> 
> **Type de projet:** Next.js + TypeScript
> 
> **But:** Fournir un contexte complet pour les assistants IA

---

## 📊 Vue d'ensemble du projet

Ce document contient l'intégralité du code source et de la structure de votre projet.
Il est optimisé pour être utilisé comme contexte par des assistants IA (ChatGPT, Claude, etc.).

### 🎯 Comment utiliser ce document

1. **Copier-coller** l'intégralité dans votre conversation avec l'IA
2. **Préciser** votre demande après avoir fourni le contexte
3. L'IA aura une **vision complète** de votre projet

---

`;
    }

    /**
     * Génère les statistiques finales
     */
    generateStats() {
        let stats = `## 📈 Statistiques du Projet\n\n`;
        stats += `| Métrique | Valeur |\n`;
        stats += `|----------|--------|\n`;
        stats += `| **Total de fichiers analysés** | ${this.stats.totalFiles} |\n`;
        stats += `| **Total de lignes de code** | ${this.stats.totalLines.toLocaleString('fr-FR')} |\n`;

        stats += `\n### 📂 Répartition par type de fichier\n\n`;
        stats += `| Extension | Nombre |\n`;
        stats += `|-----------|--------|\n`;

        Object.entries(this.stats.filesByType)
            .sort((a, b) => b[1] - a[1])
            .forEach(([ext, count]) => {
                stats += `| ${ext || 'sans extension'} | ${count} |\n`;
            });

        if (this.stats.skippedFiles.length > 0) {
            stats += `\n### ⚠️ Fichiers ignorés (${this.stats.skippedFiles.length})\n\n`;
            stats += `| Fichier | Raison |\n`;
            stats += `|---------|--------|\n`;

            this.stats.skippedFiles.forEach(({ path: filePath, reason, size }) => {
                const relativePath = path.relative(this.projectRoot, filePath);
                stats += `| \`${relativePath}\` | ${reason}${size ? ` (${size})` : ''} |\n`;
            });
        }

        return stats + '\n---\n\n';
    }

    /**
     * Génère le contexte complet
     */
    async generate() {
        console.log('🔍 Analyse du projet en cours...\n');

        // Récupérer tous les fichiers
        const allFiles = this.getAllFiles(this.projectRoot);
        console.log(`📁 ${allFiles.length} fichiers trouvés\n`);

        // Catégoriser les fichiers
        const filesByCategory = this.categorizeFiles(allFiles);

        // Générer le document
        let markdown = '';
        markdown += this.generateHeader();
        markdown += this.generateStats();
        markdown += this.generateTableOfContents(filesByCategory);

        // Générer le contenu pour chaque catégorie
        Object.entries(filesByCategory).forEach(([category, files]) => {
            console.log(`📝 Traitement: ${category} (${files.length} fichiers)`);

            markdown += `## ${category}\n\n`;
            markdown += `> ${files.length} fichier(s)\n\n`;

            files.forEach(file => {
                markdown += this.generateFileSection(file);
            });
        });

        // Footer
        markdown += `\n---\n\n`;
        markdown += `## ✅ Fin du Contexte\n\n`;
        markdown += `> Ce document a été généré automatiquement.\n`;
        markdown += `> Pour toute question ou modification, référez-vous au projet source.\n\n`;
        markdown += `**Bonne utilisation avec votre IA ! 🤖**\n`;

        // Écrire le fichier
        const outputPath = path.join(this.projectRoot, CONFIG.OUTPUT_FILE);
        fs.writeFileSync(outputPath, markdown, 'utf8');

        console.log(`\n✅ Contexte généré avec succès !\n`);
        console.log(`📄 Fichier: ${CONFIG.OUTPUT_FILE}`);
        console.log(`📊 Statistiques:`);
        console.log(`   - ${this.stats.totalFiles} fichiers inclus`);
        console.log(`   - ${this.stats.totalLines.toLocaleString('fr-FR')} lignes de code`);
        console.log(`   - ${this.formatFileSize(markdown.length)} de texte généré`);

        if (this.stats.skippedFiles.length > 0) {
            console.log(`   - ${this.stats.skippedFiles.length} fichiers ignorés`);
        }

        console.log(`\n🚀 Vous pouvez maintenant partager ${CONFIG.OUTPUT_FILE} avec votre IA !\n`);

        return outputPath;
    }
}

// ============================================================================
// EXÉCUTION
// ============================================================================

if (require.main === module) {
    console.log(`
╔════════════════════════════════════════════════════════════════╗
║                                                                ║
║   🤖 GÉNÉRATEUR DE CONTEXTE DE PROJET POUR IA                  ║
║                                                                ║
║   Analyse votre projet Next.js et génère un document          ║
║   markdown complet pour vos assistants IA                     ║
║                                                                ║
╚════════════════════════════════════════════════════════════════╝
  `);

    const generator = new ContextGenerator();

    generator.generate()
        .then(() => {
            process.exit(0);
        })
        .catch(error => {
            console.error('\n❌ Erreur lors de la génération:', error.message);
            console.error(error.stack);
            process.exit(1);
        });
}

module.exports = ContextGenerator;
```

---

### `lib\constants\branches.ts`

<a id="lib-constants-branchests"></a>

> 📊 **Stats:** 98 lignes | 2.62 KB

```typescript
/**
 * Constantes pour les Branches du Syndicat
 * 
 * Liste des agences régionales du syndicat UGATE
 * Chaque branche est une succursale géographique du même syndicat national
 */

import { Branch } from '@/lib/types/events';

/**
 * Liste des branches (agences régionales) du syndicat
 * Toutes les branches défendent les mêmes intérêts et ont le même fonctionnement
 * Elles se différencient uniquement par leur localisation et leur responsable
 */
export const BRANCHES: Branch[] = [
  {
    id: '11c24c4-bc4c-9876-5432-10fcdcb40b7e',
    name: 'Agence de Yaoundé',
    description: 'Branche régionale du Centre',
    location: 'Yaoundé',
    director: {
      name: 'Dr. Marie Kouam',
      email: 'marie.kouam@ugate.cm',
      phone: '+237 6 70 00 00 01'
    }
  },
  {
    id: '22d35e5-cd5d-8765-4321-20ecdcb50c8f',
    name: 'Agence de Douala',
    description: 'Branche régionale du Littoral',
    location: 'Douala',
    director: {
      name: 'Prof. Jean Mbarga',
      email: 'jean.mbarga@ugate.cm',
      phone: '+237 6 70 00 00 02'
    }
  },
  {
    id: '33e46f6-de6e-7654-3210-30fcdcb60d9g',
    name: 'Agence de Bafoussam',
    description: 'Branche régionale de l\'Ouest',
    location: 'Bafoussam',
    director: {
      name: 'M. Paul Nkeng',
      email: 'paul.nkeng@ugate.cm',
      phone: '+237 6 70 00 00 03'
    }
  },
  {
    id: '44f57g7-ef7f-6543-2109-40gcdcb70e0h',
    name: 'Agence de Garoua',
    description: 'Branche régionale du Nord',
    location: 'Garoua',
    director: {
      name: 'Mme. Fatima Alim',
      email: 'fatima.alim@ugate.cm',
      phone: '+237 6 70 00 00 04'
    }
  },
  {
    id: '55g68h8-fg8g-5432-1098-50hcdcb80f1i',
    name: 'Agence de Limbé',
    description: 'Branche régionale du Sud-Ouest',
    location: 'Limbé',
    director: {
      name: 'M. Thomas Ekani',
      email: 'thomas.ekani@ugate.cm',
      phone: '+237 6 70 00 00 05'
    }
  },
  {
    id: '66h79i9-gh9h-4321-0987-60icdcb90g2j',
    name: 'Agence de Maroua',
    description: 'Branche régionale de l\'Extrême-Nord',
    location: 'Maroua',
    director: {
      name: 'M. Ibrahim Hamadou',
      email: 'ibrahim.hamadou@ugate.cm',
      phone: '+237 6 70 00 00 06'
    }
  }
];

/**
 * Récupérer une branche par son ID
 */
export function getBranchById(branchId: string): Branch | undefined {
  return BRANCHES.find(branch => branch.id === branchId);
}

/**
 * Récupérer le nom d'une branche par son ID
 */
export function getBranchName(branchId: string): string {
  const branch = getBranchById(branchId);
  return branch?.name || 'Branche inconnue';
}

```

---

### `lib\constants\mockEvents.ts`

<a id="lib-constants-mockEventsts"></a>

> 📊 **Stats:** 187 lignes | 6.75 KB

```typescript
/**
 * Événements fictifs pour le développement et les tests
 * Ces données permettent de tester l'interface avant la création de vrais événements via l'API
 */

import { EventItem } from '@/lib/types/events';

/**
 * Événements fictifs par branche
 */
export const MOCK_EVENTS: Record<string, EventItem[]> = {
  // Agence de Yaoundé
  '11c24c4-bc4c-9876-5432-10fcdcb40b7e': [
    {
      id: 'evt-yaounde-1',
      creatorId: 'user-1',
      branchId: '11c24c4-bc4c-9876-5432-10fcdcb40b7e',
      title: 'Assemblée Générale Annuelle 2026',
      description: 'Réunion annuelle de tous les membres pour discuter des orientations stratégiques et élire le nouveau bureau.',
      location: 'Hôtel Hilton Yaoundé',
      date: '2026-02-15',
      startTime: '09:00',
      endTime: '17:00',
      createdAt: '2026-01-10T10:00:00.000Z',
      updatedAt: '2026-01-10T10:00:00.000Z',
      participantCount: 156,
      status: 'active',
      images: ['https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80']
    },
    {
      id: 'evt-yaounde-2',
      creatorId: 'user-1',
      branchId: '11c24c4-bc4c-9876-5432-10fcdcb40b7e',
      title: 'Formation sur les Droits des Travailleurs',
      description: 'Session de formation intensive sur les droits fondamentaux des travailleurs et les procédures de réclamation.',
      location: 'Siège UGATE Yaoundé',
      date: '2026-01-25',
      startTime: '14:00',
      endTime: '18:00',
      createdAt: '2026-01-08T14:30:00.000Z',
      updatedAt: '2026-01-08T14:30:00.000Z',
      participantCount: 45,
      status: 'active',
      images: ['https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&q=80']
    },
    {
      id: 'evt-yaounde-3',
      creatorId: 'user-1',
      branchId: '11c24c4-bc4c-9876-5432-10fcdcb40b7e',
      title: 'Journée Portes Ouvertes',
      description: 'Découvrez les activités du syndicat et rencontrez nos représentants. Inscription gratuite.',
      location: 'Place de la Réunification',
      date: '2026-03-10',
      startTime: '10:00',
      endTime: '16:00',
      createdAt: '2026-01-05T09:00:00.000Z',
      updatedAt: '2026-01-05T09:00:00.000Z',
      participantCount: 89,
      status: 'draft',
      images: ['https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&q=80']
    }
  ],
  
  // Agence de Douala
  '22d35e5-cd5d-8765-4321-20ecdcb50c8f': [
    {
      id: 'evt-douala-1',
      creatorId: 'user-2',
      branchId: '22d35e5-cd5d-8765-4321-20ecdcb50c8f',
      title: 'Conférence sur la Sécurité au Travail',
      description: 'Conférence animée par des experts en santé et sécurité au travail. Thèmes: prévention des accidents, équipements de protection.',
      location: 'Centre de Conférences Bonanjo',
      date: '2026-02-20',
      startTime: '08:30',
      endTime: '13:00',
      createdAt: '2026-01-12T11:00:00.000Z',
      updatedAt: '2026-01-12T11:00:00.000Z',
      participantCount: 120,
      status: 'active',
      images: ['https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800&q=80']
    },
    {
      id: 'evt-douala-2',
      creatorId: 'user-2',
      branchId: '22d35e5-cd5d-8765-4321-20ecdcb50c8f',
      title: 'Marche de Solidarité',
      description: 'Marche pacifique pour soutenir les droits des travailleurs et sensibiliser le public.',
      location: 'Boulevard de la Liberté',
      date: '2026-01-30',
      startTime: '07:00',
      endTime: '12:00',
      createdAt: '2026-01-09T08:00:00.000Z',
      updatedAt: '2026-01-09T08:00:00.000Z',
      participantCount: 234,
      status: 'active',
      images: ['https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=800&q=80']
    }
  ],
  
  // Agence de Bafoussam
  '33e46f6-de6e-7654-3210-30fcdcb60d9g': [
    {
      id: 'evt-bafoussam-1',
      creatorId: 'user-3',
      branchId: '33e46f6-de6e-7654-3210-30fcdcb60d9g',
      title: 'Atelier de Négociation Collective',
      description: 'Formation pratique sur les techniques de négociation collective et la représentation syndicale.',
      location: 'Salle Municipale de Bafoussam',
      date: '2026-02-05',
      startTime: '09:00',
      endTime: '15:00',
      createdAt: '2026-01-11T10:00:00.000Z',
      updatedAt: '2026-01-11T10:00:00.000Z',
      participantCount: 67,
      status: 'active',
      images: ['https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80']
    }
  ],
  
  // Agence de Garoua
  '44f57g7-ef7f-6543-2109-40gcdcb70e0h': [
    {
      id: 'evt-garoua-1',
      creatorId: 'user-4',
      branchId: '44f57g7-ef7f-6543-2109-40gcdcb70e0h',
      title: 'Séminaire sur la Protection Sociale',
      description: 'Discussion sur les systèmes de protection sociale et les avantages pour les travailleurs.',
      location: 'Hôtel Le Ribadou',
      date: '2026-02-28',
      startTime: '10:00',
      endTime: '16:00',
      createdAt: '2026-01-10T15:00:00.000Z',
      updatedAt: '2026-01-10T15:00:00.000Z',
      participantCount: 52,
      status: 'active',
      images: ['https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=800&q=80']
    }
  ],
  
  // Agence de Limbé
  '55g68h8-fg8g-5432-1098-50hcdcb80f1i': [
    {
      id: 'evt-limbe-1',
      creatorId: 'user-5',
      branchId: '55g68h8-fg8g-5432-1098-50hcdcb80f1i',
      title: 'Journée de Sensibilisation Environnementale',
      description: 'Sensibilisation sur les conditions de travail respectueuses de l\'environnement et le développement durable.',
      location: 'Plage de Limbé',
      date: '2026-03-15',
      startTime: '08:00',
      endTime: '14:00',
      createdAt: '2026-01-12T09:00:00.000Z',
      updatedAt: '2026-01-12T09:00:00.000Z',
      participantCount: 78,
      status: 'draft',
      images: ['https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&q=80']
    }
  ],
  
  // Agence de Maroua
  '66h79i9-gh9h-4321-0987-60icdcb90g2j': [
    {
      id: 'evt-maroua-1',
      creatorId: 'user-6',
      branchId: '66h79i9-gh9h-4321-0987-60icdcb90g2j',
      title: 'Forum sur l\'Emploi des Jeunes',
      description: 'Rencontre entre jeunes travailleurs et employeurs pour discuter des opportunités d\'emploi et de formation.',
      location: 'Centre Culturel de Maroua',
      date: '2026-02-12',
      startTime: '09:00',
      endTime: '17:00',
      createdAt: '2026-01-08T12:00:00.000Z',
      updatedAt: '2026-01-08T12:00:00.000Z',
      participantCount: 95,
      status: 'active',
      images: ['https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&q=80']
    }
  ]
};

/**
 * Récupérer les événements fictifs d'une branche
 */
export function getMockEventsByBranch(branchId: string): EventItem[] {
  return MOCK_EVENTS[branchId] || [];
}

```

---

### `lib\constants.ts`

<a id="lib-constantsts"></a>

> 📊 **Stats:** 190 lignes | 6.42 KB

```typescript
import { Event, Product, Service, Admission } from './types';

export const MOCK_EVENTS: Event[] = [
  {
    id: '1',
    title: 'Assemblée Générale Annuelle 2024',
    description: 'La réunion annuelle obligatoire pour tous les membres afin de discuter de l\'orientation stratégique.',
    date: '2024-06-15T09:00:00',
    location: 'Centre de Conférences Grand Hôtel',
    imageUrl: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=450&fit=crop',
    status: 'active',
    attendees: 142
  },
  {
    id: '2',
    title: 'Atelier: Négociation Moderne',
    description: 'Apprenez les tactiques clés pour une négociation collective réussie à l\'ère numérique.',
    date: '2024-07-02T14:00:00',
    location: 'Siège Social, Salle B',
    imageUrl: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=450&fit=crop',
    status: 'active',
    attendees: 45
  },
  {
    id: '3',
    title: 'Soirée Networking d\'Été',
    description: 'Une soirée décontractée pour se connecter avec des pairs de différents secteurs.',
    date: '2024-08-10T18:00:00',
    location: 'Rooftop Lounge',
    imageUrl: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&h=450&fit=crop',
    status: 'pending',
    attendees: 0
  },
  {
    id: '4',
    title: 'Formation Leadership',
    description: 'Développez vos compétences en leadership et gestion d\'équipe.',
    date: '2024-09-20T10:00:00',
    location: 'Campus Formation',
    imageUrl: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&h=450&fit=crop',
    status: 'active',
    attendees: 67
  }
];

export const MOCK_PRODUCTS: Product[] = [
  {
    id: '1',
    title: 'Manuel Officiel du Syndicat',
    price: 25.00,
    image: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=400&fit=crop',
    status: 'in_stock',
    sku: 'BK-2024-001',
    category: 'Livres'
  },
  {
    id: '2',
    title: 'Sweat à Capuche Bleu Marine',
    price: 45.00,
    image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&h=400&fit=crop',
    status: 'in_stock',
    sku: 'AP-HOOD-NV',
    category: 'Vêtements'
  },
  {
    id: '3',
    title: 'Pack Protection Juridique',
    price: 150.00,
    image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=400&h=400&fit=crop',
    status: 'out_of_stock',
    sku: 'SV-LEG-PK',
    category: 'Services'
  },
  {
    id: '4',
    title: 'Pin Membre Premium',
    price: 12.50,
    image: 'https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=400&h=400&fit=crop',
    status: 'in_stock',
    sku: 'AC-PIN-01',
    category: 'Accessoires'
  },
  {
    id: '5',
    title: 'T-Shirt Officiel',
    price: 22.00,
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop',
    status: 'in_stock',
    sku: 'AP-TSH-01',
    category: 'Vêtements'
  },
  {
    id: '6',
    title: 'Sac à Dos Professionnel',
    price: 65.00,
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop',
    status: 'in_stock',
    sku: 'AC-BAG-01',
    category: 'Accessoires'
  }
];

export const MOCK_SERVICES: Service[] = [
  {
    id: '1',
    title: 'Consultation Juridique',
    description: 'Accès direct à nos avocats spécialisés en droit du travail pour les griefs personnels.',
    price: '120 € / heure',
    images: ['https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=600&h=400&fit=crop'],
    features: ['Confidentiel', 'Conseil Expert', 'Révision Documents']
  },
  {
    id: '2',
    title: 'Coaching de Carrière',
    description: 'Sessions individuelles pour vous aider à naviguer votre parcours professionnel et négociations salariales.',
    price: 'À partir de 80 €',
    images: ['https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=400&fit=crop'],
    features: ['Audit CV', 'Préparation Entretien', 'Stratégie']
  },
  {
    id: '3',
    title: 'Formation Continue',
    description: 'Programmes de formation professionnelle pour développer vos compétences et progresser dans votre carrière.',
    price: '250 € / session',
    images: ['https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&h=400&fit=crop'],
    features: ['Certifié', 'Flexible', 'Support 24/7']
  }
];

export const MOCK_ADMISSIONS: Admission[] = [
  {
    id: '1',
    fullName: 'Sarah Jenkins',
    email: 'sarah.j@example.com',
    phone: '+33 1 23 45 67 89',
    company: 'TechFlow Solutions',
    position: 'Développeuse Senior',
    submittedAt: '2024-05-20',
    status: 'pending',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop',
    motivation: 'Je souhaite défendre de meilleures politiques de télétravail dans notre secteur.'
  },
  {
    id: '2',
    fullName: 'Michael Chen',
    email: 'm.chen@example.com',
    phone: '+33 1 98 76 54 32',
    company: 'Logistique Globale',
    position: 'Responsable Opérations',
    submittedAt: '2024-05-19',
    status: 'pending',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop',
    motivation: 'Je recherche un soutien juridique concernant les négociations contractuelles.'
  },
  {
    id: '3',
    fullName: 'Emily Rodriguez',
    email: 'emily.r@example.com',
    phone: '+33 1 45 67 89 01',
    company: 'Santé Municipale',
    position: 'Infirmière Praticienne',
    submittedAt: '2024-05-18',
    status: 'accepted',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop',
    motivation: 'Pour rejoindre le comité de négociation collective.'
  },
  {
    id: '4',
    fullName: 'Thomas Dubois',
    email: 'thomas.d@example.com',
    phone: '+33 1 34 56 78 90',
    company: 'Industries Modernes',
    position: 'Ingénieur Qualité',
    submittedAt: '2024-05-17',
    status: 'pending',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop',
    motivation: 'Améliorer les conditions de travail et la sécurité dans notre industrie.'
  }
];

export const CHART_DATA = [
  { name: 'Lun', active: 400, new: 240 },
  { name: 'Mar', active: 300, new: 139 },
  { name: 'Mer', active: 200, new: 980 },
  { name: 'Jeu', active: 278, new: 390 },
  { name: 'Ven', active: 189, new: 480 },
  { name: 'Sam', active: 239, new: 380 },
  { name: 'Dim', active: 349, new: 430 },
];

```

---

### `lib\contexts\AuthContext.tsx`

<a id="lib-contexts-AuthContexttsx"></a>

> 📊 **Stats:** 268 lignes | 7.27 KB

```tsx
/**
 * Contexte d'Authentification & Statut Syndicat
 *
 * Ce fichier gère :
 * 1. L'état d'authentification utilisateur (JWT)
 * 2. L'état du syndicat de l'utilisateur (Créé ? En attente ? Validé ?)
 */

'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode, useCallback } from 'react';
import {
  login as apiLogin,
  register as apiRegister,
  logout as apiLogout,
  getUserInfo,
  isAuthenticated as checkAuth,
  refreshAccessToken
} from '@/lib/services/auth.service';
import { apiGet } from '@/lib/services/api.client';
import { LoginCredentials, RegisterCredentials, UserInfo } from '@/lib/types/auth';

// --- Types ---

/**
 * Statut du syndicat de l'utilisateur courant.
 * Crucial pour diriger l'utilisateur vers le bon flux (Onboarding vs Dashboard).
 */
export interface UserSyndicateStatus {
  hasSyndicate: boolean;
  syndicateId?: string;
  // Mappe les booléens isApproved/isActive vers un état lisible
  status?: 'PENDING' | 'APPROVED' | 'REJECTED' | 'DEACTIVATED';
  syndicateName?: string;
}

/**
 * Interface de la réponse API pour un Syndicat (basé sur Swagger)
 */
interface SyndicateApiResponse {
  id: string;
  name: string;
  isApproved: boolean;
  isActive: boolean;
  // autres champs ignorés pour le contexte auth
}

/**
 * Interface du Contexte
 */
interface AuthContextType {
  // Auth de base
  isAuthenticated: boolean;
  isLoading: boolean;
  user: UserInfo | null;
  error: string | null;

  // Actions Auth
  login: (credentials: LoginCredentials) => Promise<void>;
  register: (credentials: RegisterCredentials) => Promise<void>;
  logout: () => void;
  checkAuthentication: () => void;

  // Gestion Syndicat
  syndicateStatus: UserSyndicateStatus | null;
  refreshSyndicateStatus: () => Promise<void>;
  isSyndicateLoading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// --- Provider ---

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  // États Auth
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState<UserInfo | null>(null);
  const [error, setError] = useState<string | null>(null);

  // États Syndicat
  const [syndicateStatus, setSyndicateStatus] = useState<UserSyndicateStatus | null>(null);
  const [isSyndicateLoading, setIsSyndicateLoading] = useState(false);

  /**
   * Vérifie et met à jour le statut du syndicat de l'utilisateur
   * Appelle l'endpoint /syndicates/mine
   */
  const refreshSyndicateStatus = useCallback(async () => {
    // Ne rien faire si pas connecté
    if (!checkAuth()) {
      setSyndicateStatus(null);
      return;
    }

    setIsSyndicateLoading(true);
    try {
      // Appel à l'API UGate
      const syndicates = await apiGet<SyndicateApiResponse[]>('https://ugate.pynfi.com/syndicates/mine');

      if (syndicates && syndicates.length > 0) {
        const mySyndicate = syndicates[0]; // On prend le premier (hypothèse: 1 user = 1 syndicat)

        // Logique de détermination du statut
        let computedStatus: UserSyndicateStatus['status'] = 'PENDING';

        if (mySyndicate.isApproved && mySyndicate.isActive) {
          computedStatus = 'APPROVED';
        } else if (mySyndicate.isApproved && !mySyndicate.isActive) {
          computedStatus = 'DEACTIVATED';
        } else if (!mySyndicate.isApproved) {
          computedStatus = 'PENDING';
        }

        setSyndicateStatus({
          hasSyndicate: true,
          syndicateId: mySyndicate.id,
          status: computedStatus,
          syndicateName: mySyndicate.name
        });

        console.log('🏢 Statut Syndicat:', computedStatus);
      } else {
        // Pas de syndicat trouvé
        setSyndicateStatus({ hasSyndicate: false });
        console.log('🏢 Aucun syndicat associé à ce compte');
      }
    } catch (err) {
      console.error("❌ Erreur récupération syndicat:", err);
      // En cas d'erreur API (ex: 404 ou 500), on assume pas de syndicat pour ne pas bloquer
      setSyndicateStatus({ hasSyndicate: false });
    } finally {
      setIsSyndicateLoading(false);
    }
  }, []);

  /**
   * Vérifier l'authentification au chargement
   */
  const checkAuthentication = useCallback(() => {
    const authenticated = checkAuth();
    setIsAuthenticated(authenticated);

    if (authenticated) {
      const userInfo = getUserInfo();
      setUser(userInfo);
      // Si authentifié, on lance la vérification du syndicat
      refreshSyndicateStatus();
    } else {
      setUser(null);
      setSyndicateStatus(null);
    }

    setIsLoading(false);
  }, [refreshSyndicateStatus]);

  /**
   * Connexion
   */
  const login = async (credentials: LoginCredentials): Promise<void> => {
    try {
      setIsLoading(true);
      setError(null);

      const response = await apiLogin(credentials);

      setIsAuthenticated(true);
      setUser(response.user);

      // Après login succès, vérifier immédiatement le statut syndicat
      await refreshSyndicateStatus();

    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Erreur de connexion';
      setError(errorMessage);
      setIsAuthenticated(false);
      setUser(null);
      setSyndicateStatus(null);
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  /**
   * Inscription
   */
  const register = async (credentials: RegisterCredentials): Promise<void> => {
    try {
      setIsLoading(true);
      setError(null);
      await apiRegister(credentials);
      // Note: Pas de login automatique, l'utilisateur doit se connecter
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Erreur d\'inscription';
      setError(errorMessage);
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  /**
   * Déconnexion
   */
  const logout = () => {
    apiLogout();
    setIsAuthenticated(false);
    setUser(null);
    setSyndicateStatus(null);
    setError(null);
  };

  /**
   * Effet initial
   */
  useEffect(() => {
    checkAuthentication();
  }, [checkAuthentication]);

  /**
   * Rafraîchissement automatique du token (toutes les 10 min)
   */
  useEffect(() => {
    if (!isAuthenticated) return;

    const refreshInterval = setInterval(async () => {
      try {
        await refreshAccessToken();
      } catch (error) {
        console.error('❌ Échec du rafraîchissement auto:', error);
        logout();
      }
    }, 10 * 60 * 1000);

    return () => clearInterval(refreshInterval);
  }, [isAuthenticated]);

  const value: AuthContextType = {
    isAuthenticated,
    isLoading,
    user,
    error,
    login,
    register,
    logout,
    checkAuthentication,
    syndicateStatus,
    refreshSyndicateStatus,
    isSyndicateLoading
  };

  return (
      <AuthContext.Provider value={value}>
        {children}
      </AuthContext.Provider>
  );
};

// --- Hook ---

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth doit être utilisé à l\'intérieur d\'un AuthProvider');
  }
  return context;
};
```

---

### `lib\services\admin.service.ts`

<a id="lib-services-adminservicets"></a>

> 📊 **Stats:** 160 lignes | 4.25 KB

```typescript
/**
 * Service d'Administration du Syndicat
 *
 * Ce service centralise toutes les opérations qu'un administrateur de syndicat
 * peut effectuer : gestion des membres, statistiques, produits, etc.
 */

import { apiGet, apiPost } from './api.client';

const API_URL = 'https://ugate.pynfi.com';

// --- Interfaces (Types) ---

/**
 * Statistiques globales du syndicat pour le tableau de bord
 */
export interface SyndicateStats {
    totalMembers: number;
    totalBranches: number;
    pendingRequests: number;
    activeServices: number;
    totalPublications: number;

    // Champs optionnels pour la compatibilité UI si l'API ne les renvoie pas encore
    activeMembers?: number;
    totalRevenue?: number;
    activeSyndicats?: number;
    pendingSyndicats?: number;
}

/**
 * Structure d'une demande d'adhésion
 */
export interface MembershipRequest {
    id: string;
    userId: string;
    syndicatId: string;
    branchId: string;
    status: 'PENDING' | 'APPROVED' | 'REJECTED';
    motivation: string;
    rejectionReason?: string;
    createdAt: string;
    updatedAt: string;

    // Informations enrichies de l'utilisateur (jointure backend ou frontend)
    user?: {
        firstName: string;
        lastName: string;
        email: string;
        phone?: string;
        profilePicture?: string;
    };
}

/**
 * Structure d'une branche (Agence)
 */
export interface SyndicateBranch {
    id: string;
    syndicatId: string;
    name: string;
    location: string;
    contact: string;
    bannerUrl?: string;
    createdAt: string;
    updatedAt: string;
}

/**
 * Données requises pour inviter un membre manuellement
 */
export interface InviteMemberRequest {
    email: string;
    firstName: string;
    lastName: string;
}

/**
 * Structure d'un produit
 */
export interface ProductResponse {
    id: string;
    syndicatId: string;
    name: string;
    description: string;
    price: number;
    sku: string;
    category: string;
    stock: number;
    image?: {
        url: string;
        type: string;
    };
    isActive: boolean;
}

// --- Fonctions API ---

/**
 * Récupérer les statistiques globales du syndicat
 * @param syndicateId - UUID du syndicat
 */
export async function getSyndicateStats(syndicateId: string): Promise<SyndicateStats> {
    return apiGet<SyndicateStats>(`${API_URL}/admin/syndicates/${syndicateId}/stats`);
}

/**
 * Récupérer les demandes d'adhésion en attente
 * @param syndicateId - UUID du syndicat
 */
export async function getMembershipRequests(syndicateId: string): Promise<MembershipRequest[]> {
    return apiGet<MembershipRequest[]>(`${API_URL}/admin/syndicates/${syndicateId}/requests`);
}

/**
 * Traiter une demande d'adhésion (Accepter ou Refuser)
 * @param requestId - UUID de la demande
 * @param approve - true pour accepter, false pour refuser
 * @param rejectionReason - Raison du refus (obligatoire si refusé)
 */
export async function processMembershipRequest(
    requestId: string,
    approve: boolean,
    rejectionReason?: string
): Promise<void> {
    return apiPost(`${API_URL}/admin/syndicates/requests/${requestId}/process`, {
        approve,
        rejectionReason
    });
}

/**
 * Récupérer la liste des branches d'un syndicat
 * @param syndicateId - UUID du syndicat
 */
export async function getSyndicateBranches(syndicateId: string): Promise<SyndicateBranch[]> {
    return apiGet<SyndicateBranch[]>(`${API_URL}/syndicates/${syndicateId}/branches`);
}

/**
 * Inviter manuellement un membre dans une branche spécifique
 * @param syndicateId - UUID du syndicat
 * @param branchId - UUID de la branche cible
 * @param data - Informations du membre à inviter
 */
export async function inviteMemberToBranch(
    syndicateId: string,
    branchId: string,
    data: InviteMemberRequest
): Promise<void> {
    return apiPost(`${API_URL}/admin/syndicates/${syndicateId}/branches/${branchId}/members/add`, data);
}

/**
 * Récupérer tous les produits associés à un syndicat
 * @param syndicateId - UUID du syndicat
 */
export async function getSyndicateProducts(syndicateId: string): Promise<ProductResponse[]> {
    return apiGet<ProductResponse[]>(`${API_URL}/products/syndicates/${syndicateId}`);
}
```

---

### `lib\services\api.client.ts`

<a id="lib-services-apiclientts"></a>

> 📊 **Stats:** 151 lignes | 4.61 KB

```typescript
/**
 * Client API avec Intercepteur
 *
 * Ce fichier crée un client HTTP qui ajoute automatiquement
 * le token d'authentification à toutes les requêtes
 */

import { getAccessToken, isTokenExpired, refreshAccessToken, logout } from './auth.service';

/**
 * 🔧 FONCTION : Créer les headers avec le token
 */
async function getAuthHeaders(customHeaders: HeadersInit = {}): Promise<HeadersInit> {
  const headers: HeadersInit = {
    'Content-Type': 'application/json',
    ...customHeaders,
  };

  // Pour le multipart (fichiers), on laisse le navigateur gérer le Content-Type
  // On supprime donc 'Content-Type' s'il a été défini à undefined explicitement par l'appelant
  // ou si c'est un FormData (détecté via l'usage, mais ici on gère via l'appelant qui peut passer un header vide pour l'écraser)

  // Note : fetch gère automatiquement le boundary pour FormData si on ne met PAS de Content-Type.
  // L'appelant doit passer { 'Content-Type': undefined } ou similaire s'il veut l'annuler,
  // mais notre implémentation par défaut met application/json.
  // Dans les fonctions ci-dessous, nous gérerons le cas FormData spécifiquement.

  if (isTokenExpired()) {
    try {
      await refreshAccessToken();
    } catch (refreshError) {
      console.error('❌ Impossible de rafraîchir le token');
      logout();
      if (typeof window !== 'undefined') window.location.href = '/';
      throw new Error('Session expirée');
    }
  }

  const token = getAccessToken();
  if (token) {
    (headers as Record<string, string>)['Authorization'] = `Bearer ${token}`;
  }

  return headers;
}

/**
 * Helper pour gérer la réponse
 */
async function handleResponse<T>(response: Response): Promise<T> {
  if (!response.ok) {
    if (response.status === 401) {
      logout();
      if (typeof window !== 'undefined') window.location.href = '/';
      throw new Error('Non autorisé');
    }
    const errorText = await response.text();
    throw new Error(`Erreur HTTP: ${response.status} - ${errorText}`);
  }

  // Si la réponse est vide (ex: 204 No Content), on retourne null
  if (response.status === 204) {
    return null as T;
  }

  try {
    return await response.json() as T;
  } catch {
    // Si ce n'est pas du JSON valide mais que c'est OK (ex: string simple)
    return null as T;
  }
}

/**
 * 🌐 FONCTION : GET Request
 */
export async function apiGet<T>(url: string, options: RequestInit = {}): Promise<T> {
  const headers = await getAuthHeaders(options.headers);
  const response = await fetch(url, { ...options, method: 'GET', headers });
  return handleResponse<T>(response);
}

/**
 * 📤 FONCTION : POST Request
 */
export async function apiPost<T>(url: string, body?: unknown, options: RequestInit = {}): Promise<T> {
  const headers = await getAuthHeaders(options.headers);

  // Si le body est un FormData, on supprime le Content-Type JSON par défaut
  if (body instanceof FormData) {
    delete (headers as Record<string, string>)['Content-Type'];
  }

  const response = await fetch(url, {
    ...options,
    method: 'POST',
    headers,
    body: body instanceof FormData ? body : (body ? JSON.stringify(body) : undefined),
  });

  return handleResponse<T>(response);
}

/**
 * ✏️ FONCTION : PUT Request
 */
export async function apiPut<T>(url: string, body?: unknown, options: RequestInit = {}): Promise<T> {
  const headers = await getAuthHeaders(options.headers);

  if (body instanceof FormData) {
    delete (headers as Record<string, string>)['Content-Type'];
  }

  const response = await fetch(url, {
    ...options,
    method: 'PUT',
    headers,
    body: body instanceof FormData ? body : (body ? JSON.stringify(body) : undefined),
  });

  return handleResponse<T>(response);
}

/**
 * 🛠️ FONCTION : PATCH Request (Celle qui manquait)
 */
export async function apiPatch<T>(url: string, body?: unknown, options: RequestInit = {}): Promise<T> {
  const headers = await getAuthHeaders(options.headers);

  if (body instanceof FormData) {
    delete (headers as Record<string, string>)['Content-Type'];
  }

  const response = await fetch(url, {
    ...options,
    method: 'PATCH',
    headers,
    body: body instanceof FormData ? body : (body ? JSON.stringify(body) : undefined),
  });

  return handleResponse<T>(response);
}

/**
 * 🗑️ FONCTION : DELETE Request
 */
export async function apiDelete<T>(url: string, options: RequestInit = {}): Promise<T> {
  const headers = await getAuthHeaders(options.headers);
  const response = await fetch(url, { ...options, method: 'DELETE', headers });
  return handleResponse<T>(response);
}
```

---

### `lib\services\auth.service.ts`

<a id="lib-services-authservicets"></a>

> 📊 **Stats:** 303 lignes | 9.07 KB

```typescript
/**
 * Service d'Authentification
 * 
 * Ce service gère toutes les opérations liées à l'authentification :
 * - Connexion (login)
 * - Déconnexion (logout)
 * - Gestion des tokens (stockage, récupération, validation)
 * - Rafraîchissement automatique des tokens
 */

import { LoginCredentials, RegisterCredentials, LoginResponse, RefreshTokenResponse, UserInfo, DecodedToken } from '@/lib/types/auth';

// URL de base de l'API d'authentification
const AUTH_API_URL = 'https://auth-service.pynfi.com/api/auth';

// Clés pour le stockage local
const STORAGE_KEYS = {
  ACCESS_TOKEN: 'ugate_access_token',
  REFRESH_TOKEN: 'ugate_refresh_token',
  USER_INFO: 'ugate_user_info',
  TOKEN_EXPIRY: 'ugate_token_expiry',
};

/**
 *  FONCTION 1 : Connexion
 * 
 * Appelle l'API de login et sauvegarde les tokens
 * 
 * @param credentials - Email et mot de passe
 * @returns Réponse de l'API avec tokens et infos utilisateur
 */
export async function login(credentials: LoginCredentials): Promise<LoginResponse> {
  try {
    console.log('🔄 Tentative de connexion pour:', credentials.identifier);
    console.log('🌐 URL API:', `${AUTH_API_URL}/login`);
    
    const response = await fetch(`${AUTH_API_URL}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentials),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error(`❌ HTTP ${response.status}:`, errorText);
      throw new Error(`Échec de la connexion (${response.status}): ${errorText || response.statusText}`);
    }

    const data: LoginResponse = await response.json();
    
    console.log('✅ Connexion réussie !');
    
    // Sauvegarder les données d'authentification
    saveAuthData(data);
    
    return data;
  } catch (error) {
    // Identifier le type d'erreur
    if (error instanceof TypeError && error.message === 'Failed to fetch') {
      console.error('❌ Erreur réseau: Impossible de joindre le serveur d\'authentification');
      console.error('   Vérifiez:');
      console.error('   1. Votre connexion internet');
      console.error('   2. Que l\'API est accessible:', AUTH_API_URL);
      console.error('   3. Les paramètres CORS du serveur');
      throw new Error('Impossible de joindre le serveur. Vérifiez votre connexion internet.');
    }
    
    console.error('❌ Erreur lors de la connexion:', error);
    throw error;
  }
}

/**
 *  FONCTION 12 : Inscription
 * 
 * Appelle l'API de register (sans connexion automatique)
 * 
 * @param credentials - Données d'inscription
 * @returns Réponse de l'API avec tokens et infos utilisateur
 */
export async function register(credentials: RegisterCredentials): Promise<LoginResponse> {
  try {
    console.log('📝 Tentative d\'inscription pour:', credentials.email);
    
    const response = await fetch(`${AUTH_API_URL}/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentials),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.message || 'Échec de l\'inscription');
    }

    const data: LoginResponse = await response.json();
    
    console.log('✅ Inscription réussie ! Veuillez vous connecter.');
    
    // NE PAS sauvegarder les tokens - l'utilisateur doit se connecter
    
    return data;
  } catch (error) {
    console.error(' Erreur lors de l\'inscription:', error);
    throw error;
  }
}

/**
 *  FONCTION 2 : Sauvegarder les données d'authentification
 * 
 * Stocke les tokens et les infos utilisateur dans localStorage
 * 
 * @param data - Données de connexion (tokens + user)
 */
export function saveAuthData(data: LoginResponse): void {
  console.log(' Sauvegarde des données d\'authentification...');
  
  // Calculer la date d'expiration du token (par défaut 15 minutes)
  const expiryTime = Date.now() + (15 * 60 * 1000);
  
  // Sauvegarder dans localStorage
  localStorage.setItem(STORAGE_KEYS.ACCESS_TOKEN, data.accessToken);
  localStorage.setItem(STORAGE_KEYS.REFRESH_TOKEN, data.refreshToken);
  localStorage.setItem(STORAGE_KEYS.USER_INFO, JSON.stringify(data.user));
  localStorage.setItem(STORAGE_KEYS.TOKEN_EXPIRY, expiryTime.toString());
  
  console.log(' Données sauvegardées avec succès');
  console.log(' Token expire dans: 15 minutes');
}

/**
 * 🔑 FONCTION 3 : Récupérer le token d'accès
 * 
 * @returns Le token d'accès ou null s'il n'existe pas
 */
export function getAccessToken(): string | null {
  if (typeof window === 'undefined') return null;
  return localStorage.getItem(STORAGE_KEYS.ACCESS_TOKEN);
}

/**
 * 🔄 FONCTION 4 : Récupérer le refresh token
 * 
 * @returns Le refresh token ou null s'il n'existe pas
 */
export function getRefreshToken(): string | null {
  if (typeof window === 'undefined') return null;
  return localStorage.getItem(STORAGE_KEYS.REFRESH_TOKEN);
}

/**
 * 👤 FONCTION 5 : Récupérer les informations utilisateur
 * 
 * @returns Les infos utilisateur ou null
 */
export function getUserInfo(): UserInfo | null {
  if (typeof window === 'undefined') return null;
  
  const userInfoStr = localStorage.getItem(STORAGE_KEYS.USER_INFO);
  if (!userInfoStr) return null;
  
  try {
    return JSON.parse(userInfoStr) as UserInfo;
  } catch {
    return null;
  }
}

/**
 * ⏰ FONCTION 6 : Vérifier si le token est expiré
 * 
 * @returns true si le token est expiré ou sur le point d'expirer
 */
export function isTokenExpired(): boolean {
  if (typeof window === 'undefined') return true;
  
  const expiryStr = localStorage.getItem(STORAGE_KEYS.TOKEN_EXPIRY);
  if (!expiryStr) return true;
  
  const expiryTime = parseInt(expiryStr, 10);
  const now = Date.now();
  
  // Considérer le token comme expiré 30 secondes avant l'expiration réelle
  const buffer = 30 * 1000;
  
  return now >= (expiryTime - buffer);
}

/**
 * 🔄 FONCTION 7 : Rafraîchir le token d'accès
 * 
 * Utilise le refresh token pour obtenir un nouveau access token
 * 
 * @returns Nouveaux tokens
 */
export async function refreshAccessToken(): Promise<RefreshTokenResponse> {
  const refreshToken = getRefreshToken();
  
  if (!refreshToken) {
    throw new Error('Aucun refresh token disponible');
  }

  try {
    console.log('🔄 Rafraîchissement du token...');
    
    const response = await fetch(`${AUTH_API_URL}/refresh`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ refreshToken }),
    });

    if (!response.ok) {
      throw new Error('Échec du rafraîchissement du token');
    }

    const data: RefreshTokenResponse = await response.json();
    
    console.log(' Token rafraîchi avec succès !');
    
    // Mettre à jour les tokens (par défaut 15 minutes)
    const expiryTime = Date.now() + (15 * 60 * 1000);
    localStorage.setItem(STORAGE_KEYS.ACCESS_TOKEN, data.accessToken);
    localStorage.setItem(STORAGE_KEYS.REFRESH_TOKEN, data.refreshToken);
    localStorage.setItem(STORAGE_KEYS.USER_INFO, JSON.stringify(data.user));
    localStorage.setItem(STORAGE_KEYS.TOKEN_EXPIRY, expiryTime.toString());
    
    return data;
  } catch (error) {
    console.error('❌ Erreur lors du rafraîchissement:', error);
    throw error;
  }
}

/**
 * 🚪 FONCTION 8 : Déconnexion
 * 
 * Supprime tous les tokens et les infos utilisateur
 */
export function logout(): void {
  console.log('🚪 Déconnexion en cours...');
  
  if (typeof window === 'undefined') return;
  
  // Supprimer toutes les données d'authentification
  localStorage.removeItem(STORAGE_KEYS.ACCESS_TOKEN);
  localStorage.removeItem(STORAGE_KEYS.REFRESH_TOKEN);
  localStorage.removeItem(STORAGE_KEYS.USER_INFO);
  localStorage.removeItem(STORAGE_KEYS.TOKEN_EXPIRY);
  
  console.log('✅ Déconnexion réussie');
}

/**
 * ✅ FONCTION 9 : Vérifier si l'utilisateur est authentifié
 * 
 * @returns true si l'utilisateur a un token valide
 */
export function isAuthenticated(): boolean {
  const token = getAccessToken();
  return !!token && !isTokenExpired();
}

/**
 * 🔓 FONCTION 10 : Décoder un token JWT
 * 
 * @param token - Le token JWT à décoder
 * @returns Le payload décodé du token
 */
export function decodeToken(token: string): DecodedToken | null {
  try {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(
      atob(base64)
        .split('')
        .map((c) => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2))
        .join('')
    );
    
    return JSON.parse(jsonPayload) as DecodedToken;
  } catch {
    return null;
  }
}

/**
 * 🎭 FONCTION 11 : Vérifier le rôle de l'utilisateur
 * 
 * @param requiredRole - Le rôle requis
 * @returns true si l'utilisateur a le rôle requis
 */
export function hasRole(requiredRole: string): boolean {
  const user = getUserInfo();
  return user?.roles?.includes(requiredRole) ?? false;
}

```

---

### `lib\services\branches.service.ts`

<a id="lib-services-branchesservicets"></a>

> 📊 **Stats:** 69 lignes | 1.94 KB

```typescript
import { apiGet, apiPatch } from './api.client';
import { getAccessToken } from './auth.service';

const API_URL = 'https://ugate.pynfi.com';

export interface Branch {
    id: string;
    syndicatId: string;
    name: string;
    location: string;
    contact: string;
    bannerUrl?: string;
    createdAt: string;
    updatedAt: string;
}

export interface CreateBranchDTO {
    name: string;
    location: string;
    contact: string;
}

/**
 * Récupérer toutes les branches d'un syndicat
 * CORRECTION : L'argument s'appelle bien syndicateId (avec e) pour correspondre à l'URL
 */
export async function getBranches(syndicateId: string): Promise<Branch[]> {
    // Le nom de la variable ici doit être identique à celui dans ${...}
    return apiGet<Branch[]>(`${API_URL}/syndicates/${syndicateId}/branches`);
}

/**
 * Créer une nouvelle branche (Antenne)
 */
export async function createBranch(syndicateId: string, data: CreateBranchDTO, bannerFile?: File): Promise<Branch> {
    const formData = new FormData();
    formData.append('name', data.name);
    formData.append('location', data.location);
    formData.append('contact', data.contact);

    if (bannerFile) {
        formData.append('banner', bannerFile);
    }

    const token = getAccessToken();

    // Utilisation de syndicateId (avec e)
    const response = await fetch(`${API_URL}/syndicates/${syndicateId}/branches`, {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${token}`,
        },
        body: formData
    });

    if (!response.ok) {
        const error = await response.text();
        throw new Error(`Erreur création branche: ${error}`);
    }

    return await response.json();
}

/**
 * Mettre à jour une branche
 */
export async function updateBranch(branchId: string, data: Partial<CreateBranchDTO>): Promise<Branch> {
    return apiPatch<Branch>(`${API_URL}/branches/${branchId}`, data);
}
```

---

### `lib\services\events.service.ts`

<a id="lib-services-eventsservicets"></a>

> 📊 **Stats:** 129 lignes | 3.72 KB

```typescript
import { apiGet, apiPost, apiDelete } from './api.client';
import { getAccessToken } from './auth.service';

const API_URL = 'https://ugate.pynfi.com';

// --- Types basés sur la spécification API (Swagger) ---

export interface LocalTime {
  hour: number;
  minute: number;
  second: number;
  nano: number;
}

export interface EventItem {
  id: string;
  creatorId: string;
  branchId: string;
  title: string;
  description: string;
  location: string;
  date: string;         // Format "YYYY-MM-DD"
  startTime: LocalTime;
  endTime: LocalTime;
  createdAt: string;
  updatedAt: string;
  participantCount: number;
  imageUrls: string[]; // Le backend renvoie TOUS les médias (images et vidéos) dans ce tableau
  videos?: string[]; // On peut garder ce type optionnel si le backend l'ajoute plus tard
}

export interface CreateEventDTO {
  creatorId: string;
  branchId: string;
  title: string;
  description: string;
  eventDate: string; // "YYYY-MM-DD"
  location: string;
  startTime: string; // "HH:mm"
  endTime: string;   // "HH:mm"
}

export interface EventParticipant {
  userId: string;
  fullName: string;
}

// --- Helpers pour le formatage ---

export function formatLocalTime(time: LocalTime | null | undefined): string {
  if (!time) return '';
  const h = time.hour?.toString().padStart(2, '0') || '00';
  const m = time.minute?.toString().padStart(2, '0') || '00';
  return `${h}:${m}`;
}

export function formatDateFr(dateStr: string): string {
  if (!dateStr) return '';
  return new Date(dateStr).toLocaleDateString('fr-FR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });
}

// --- Fonctions API ---

export async function getEventsByBranch(branchId: string): Promise<EventItem[]> {
  return apiGet<EventItem[]>(`${API_URL}/events/branch/${branchId}`);
}

/**
 * Créer un événement avec image OU vidéo
 * CORRECTION : Tous les fichiers sont envoyés dans le champ 'images'
 */
export async function createEvent(
    data: CreateEventDTO,
    imageFile?: File,
    videoFile?: File
): Promise<void> {
  const formData = new FormData();

  formData.append('creatorId', data.creatorId);
  formData.append('branchId', data.branchId);
  formData.append('title', data.title);
  formData.append('description', data.description);
  formData.append('eventDate', data.eventDate);
  formData.append('location', data.location);
  formData.append('startTime', data.startTime);
  formData.append('endTime', data.endTime);

  // LOGIQUE CORRIGÉE : On attache le média (image OU vidéo) au champ 'images'
  if (imageFile) {
    formData.append('images', imageFile);
  } else if (videoFile) {
    // On envoie bien la vidéo dans le champ 'images' comme demandé
    formData.append('images', videoFile);
  }

  const token = getAccessToken();

  const response = await fetch(`${API_URL}/events`, {
    method: 'POST',
    headers: { 'Authorization': `Bearer ${token}` },
    body: formData
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Erreur lors de la création: ${errorText}`);
  }
}

export async function getEventParticipants(eventId: string): Promise<EventParticipant[]> {
  return apiGet<EventParticipant[]>(`${API_URL}/events/${eventId}/participants`);
}

export async function joinEvent(eventId: string): Promise<void> {
  return apiPost<void>(`${API_URL}/events/${eventId}/join`);
}

export async function leaveEvent(eventId: string): Promise<void> {
  return apiDelete<void>(`${API_URL}/events/${eventId}/leave`);
}

export async function deleteEvent(eventId: string): Promise<void> {
  console.warn("La suppression d'événement n'est pas disponible dans l'API actuelle.");
  return Promise.resolve();
}
```

---

### `lib\services\products.service.ts`

<a id="lib-services-productsservicets"></a>

> 📊 **Stats:** 85 lignes | 2.92 KB

```typescript
import { apiGet, apiPost, apiPatch, apiDelete } from './api.client';
import { ProductResponse } from './admin.service'; // On réutilise le type défini précédemment

const API_URL = 'https://ugate.pynfi.com';

export interface CreateProductDTO {
    syndicatId: string;
    name: string;
    description: string;
    price: number;
    sku: string;
    category: string;
    stock: number;
    isActive: boolean;
}

/**
 * Créer un produit avec image
 * Note: L'API semble attendre un DTO en query/part et l'image en body.
 * Nous utilisons FormData pour tout envoyer proprement.
 */
export async function createProduct(data: CreateProductDTO, imageFile: File): Promise<ProductResponse> {
    const formData = new FormData();

    // Construction de l'objet DTO pour l'envoyer comme demandé par l'API (souvent sous forme de blob ou string JSON)
    // Si l'API attend "dto" en query param, il faudra adapter l'URL.
    // Ici, on assume une approche standard Multipart où on envoie les champs.

    // Approche robuste : On envoie les champs individuellement ET on prépare le terrain si l'API change
    formData.append('image', imageFile);

    // Astuce : Certains backends Java attendent un champ 'dto' contenant le JSON
    const dto = JSON.stringify(data);

    // On construit l'URL avec le paramètre dto si c'est ce que Swagger demande spécifiquement
    // (parameters: [{name: "dto", in: "query"...}])
    const url = `${API_URL}/products?dto=${encodeURIComponent(dto)}`;

    // Note: On n'utilise pas apiPost ici car on doit gérer le FormData spécifiquement sans le header JSON par défaut
    const token = localStorage.getItem('ugate_access_token');

    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${token}`,
            // Pas de Content-Type, le navigateur le mettra avec le boundary
        },
        body: formData
    });

    if (!response.ok) {
        const error = await response.text();
        throw new Error(`Erreur création produit: ${error}`);
    }

    return await response.json();
}

/**
 * Mettre à jour un produit
 */
export async function updateProduct(id: string, data: Partial<CreateProductDTO>): Promise<ProductResponse> {
    return apiPatch(`${API_URL}/products/${id}`, data);
}

/**
 * Mettre à jour le stock
 */
export async function updateProductStock(id: string, quantity: number): Promise<ProductResponse> {
    return apiPatch(`${API_URL}/products/${id}/stock`, quantity); // Envoie l'entier directement
}

/**
 * Supprimer un produit
 */
export async function deleteProduct(id: string): Promise<void> {
    return apiDelete(`${API_URL}/products/${id}`);
}

/**
 * Récupérer les produits d'un syndicat
 */
export async function getProductsBySyndicate(syndicateId: string): Promise<ProductResponse[]> {
    return apiGet<ProductResponse[]>(`${API_URL}/products/syndicates/${syndicateId}`);
}
```

---

### `lib\services\services.service.ts`

<a id="lib-services-servicesservicets"></a>

> 📊 **Stats:** 57 lignes | 1.60 KB

```typescript
import { apiGet, apiPost, apiPatch, apiDelete } from './api.client';

const API_URL = 'https://ugate.pynfi.com';

export interface ServiceRequest {
    title: string;
    description: string;
    price: number;
    features: string[];
    isActive: boolean;
}

export interface ServiceResponse {
    id: string;
    title: string;
    description: string;
    price: number;
    features: string[];
    isActive: boolean;
    // Note: Pas d'image dans la réponse API actuelle
}

/**
 * Créer un nouveau service
 */
export async function createService(data: ServiceRequest): Promise<ServiceResponse> {
    return apiPost<ServiceResponse>(`${API_URL}/service-offerings`, data);
}

/**
 * Récupérer les services actifs (Marketplace)
 * TODO: Demander au backend un endpoint /syndicates/{id}/services pour voir aussi les services inactifs/brouillons
 */
export async function getActiveServices(): Promise<ServiceResponse[]> {
    return apiGet<ServiceResponse[]>(`${API_URL}/service-offerings/active`);
}

/**
 * Mettre à jour un service
 */
export async function updateService(id: string, data: Partial<ServiceRequest>): Promise<ServiceResponse> {
    return apiPatch<ServiceResponse>(`${API_URL}/service-offerings/${id}`, data);
}

/**
 * Supprimer un service
 */
export async function deleteService(id: string): Promise<void> {
    return apiDelete(`${API_URL}/service-offerings/${id}`);
}

/**
 * Récupérer un service par son ID
 */
export async function getServiceById(id: string): Promise<ServiceResponse> {
    return apiGet<ServiceResponse>(`${API_URL}/service-offerings/${id}`);
}
```

---

### `lib\services\syndicates.service.ts`

<a id="lib-services-syndicatesservicets"></a>

> 📊 **Stats:** 29 lignes | 945 B

```typescript
import { getAccessToken } from './auth.service';

const API_URL = 'https://ugate.pynfi.com';

export async function createSyndicate(formData: FormData) {
    const token = getAccessToken();

    try {
        const response = await fetch(`${API_URL}/syndicates`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${token}`,
                // Note: Ne pas mettre 'Content-Type': 'multipart/form-data' manuellement
                // le navigateur le fait automatiquement avec le bon boundary pour FormData
            },
            body: formData,
        });

        if (!response.ok) {
            const errorText = await response.text();
            throw new Error(`Erreur ${response.status}: ${errorText}`);
        }

        return await response.json();
    } catch (error) {
        console.error('Erreur création syndicat:', error);
        throw error;
    }
}
```

---

### `lib\types\auth.ts`

<a id="lib-types-authts"></a>

> 📊 **Stats:** 81 lignes | 1.49 KB

```typescript
/**
 * Types pour l'Authentification
 * 
 * Ce fichier définit tous les types TypeScript utilisés pour l'authentification
 * Basé sur l'API: https://auth-service.pynfi.com/swagger-ui/index.html
 */

/**
 * Réponse de l'API lors de la connexion
 */
export interface LoginResponse {
  accessToken: string;
  refreshToken: string;
  user: UserInfo;
}

/**
 * Informations sur l'utilisateur connecté
 */
export interface UserInfo {
  id: string;
  username: string;
  email: string;
  phone: string;
  firstName: string;
  lastName: string;
  service: string;
  roles: string[];
  permissions: string[];
}

/**
 * Identifiants de connexion
 */
export interface LoginCredentials {
  identifier: string;
  password: string;
}

/**
 * Données d'inscription
 */
export interface RegisterCredentials {
  username: string;
  password: string;
  email: string;
  phone: string;
  firstName: string;
  lastName: string;
  service: string;
  roles: string[];
}

/**
 * Réponse lors du rafraîchissement du token
 */
export interface RefreshTokenResponse {
  accessToken: string;
  refreshToken: string;
  user: UserInfo;
}

/**
 * Structure d'un token JWT décodé
 */
export interface DecodedToken {
  sub: string;
  email: string;
  roles: string[];
  exp: number;
  iat: number;
}


export interface UserSyndicateStatus {
  hasSyndicate: boolean;
  syndicateId?: string;
  status?: 'PENDING' | 'APPROVED' | 'REJECTED' | 'DEACTIVATED';
  syndicateName?: string;
}

```

---

### `lib\types\events.ts`

<a id="lib-types-eventsts"></a>

> 📊 **Stats:** 76 lignes | 1.51 KB

```typescript
/**
 * Types pour les Événements
 * 
 * Basé sur l'API: https://ugate.pynfi.com/webjars/swagger-ui/index.html
 */

/**
 * Branche du syndicat
 */
export interface Branch {
  id: string;
  name: string;
  description?: string;
  location?: string;
  director: {
    name: string;
    email?: string;
    phone?: string;
  };
}

/**
 * Événement du syndicat
 */
export interface EventItem {
  id: string;
  creatorId: string;
  branchId: string;
  title: string;
  description: string;
  location: string;
  date: string; // Format: "2025-01-12"
  startTime: string; // Format: "11:00"
  endTime: string; // Format: "12:00"
  createdAt: string; // Format ISO: "2025-01-12T12:59:07.0092"
  updatedAt: string; // Format ISO: "2025-01-12T12:59:07.0092"
  participantCount: number;
  status?: 'active' | 'draft';
  images?: string[];
  videos?: string[];
  files?: string[];
}

/**
 * Données pour créer un événement
 */
export interface CreateEventRequest {
  creatorId: string;
  branchId: string;
  title: string;
  description: string;
  eventDate: string; // Format: "2026-01-15"
  location: string;
  startTime: string; // Format: "12:00"
  endTime: string; // Format: "15:00"
  images?: string[];
  videos?: string[];
  files?: string[];
}

/**
 * Participant à un événement
 */
export interface EventParticipant {
  userId: string;
  fullName: string;
}

/**
 * Réponse de création d'événement
 */
export interface CreateEventResponse {
  id: string;
  message: string;
}

```

---

### `lib\types\superadmin.ts`

<a id="lib-types-superadmints"></a>

> 📊 **Stats:** 154 lignes | 3.18 KB

```typescript
export interface Syndicat {
  id: string;
  isApproved: boolean;
  isActive: boolean;
  name: string;
  description: string;
  domain: string;
  type: string;
  creationDate: string;
  lastUpdate: string;
  charteUrl?: string;
  statusUrl?: string;
  listMembersUrl?: string;
  certificatEngagementUrl?: string;
  organizationId: string;
  memberCount?: number;
  subscriptionPlan?: string;
  subscriptionExpiry?: string;
}

export interface SyndicatMember {
  id: string;
  userId: string;
  userName?: string;
  syndicatId: string;
  branchId?: string;
  role: 'ADMIN' | 'MEMBER' | 'MODERATOR';
  joinDate: string;
  isActive: boolean;
  isApproved: boolean;
  user?: User;
}

export interface Branch {
  id: string;
  name: string;
  location: string;
  contact: string;
  creationDate: string;
  lastUpdate: string;
  agencyId: string;
  syndicatId: string;
}

export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  phone?: string;
  profilePicture?: string;
  createdAt: string;
  lastLogin?: string;
  isActive: boolean;
  isEmailVerified: boolean;
  complianceDetails?: ComplianceDetails;
}

export interface ComplianceDetails {
  userId: string;
  idCardNumber?: string;
  idCardUrl?: string;
  proofOfAddressUrl?: string;
  isVerified: boolean;
  verifiedAt?: string;
  verifiedBy?: string;
  rejectionReason?: string;
}

export interface Publication {
  id: string;
  content: string;
  authorId: string;
  author?: User;
  creationDate: string;
  lastUpdate: string;
  status: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED' | 'FLAGGED';
  likeCount: number;
  branchId: string;
  flaggedReason?: string;
  flaggedBy?: string;
  flaggedAt?: string;
}

export interface Event {
  id: string;
  title: string;
  description: string;
  lieu: string;
  startDate: string;
  endDate: string;
  branchId: string;
  status?: 'UPCOMING' | 'ONGOING' | 'COMPLETED' | 'CANCELLED' | 'FLAGGED';
  flaggedReason?: string;
  flaggedBy?: string;
  flaggedAt?: string;
}

export interface Payment {
  id: string;
  syndicatId: string;
  amount: number;
  currency: string;
  status: 'PENDING' | 'COMPLETED' | 'FAILED' | 'REFUNDED';
  paymentDate: string;
  paymentMethod: string;
  description: string;
}

export interface ActivityLog {
  id: string;
  userId: string;
  action: string;
  entityType: string;
  entityId: string;
  timestamp: string;
  ipAddress?: string;
  userAgent?: string;
  details?: Record<string, unknown>;
}

export interface SubscriptionPlan {
  id: string;
  name: string;
  description: string;
  price: number;
  currency: string;
  duration: number;
  features: string[];
  isActive: boolean;
}

export interface BailConfig {
  id: string;
  syndicatType: string;
  expiryDays: number;
  warningDays: number;
  autoDeactivate: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface DashboardStats {
  totalSyndicats: number;
  activeSyndicats: number;
  pendingApproval: number;
  totalMembers: number;
  activeMembers: number;
  totalRevenue: number;
  monthlyRevenue: number;
  flaggedContent: number;
  recentActivity: number;
}

```

---

### `lib\types.ts`

<a id="lib-typests"></a>

> 📊 **Stats:** 64 lignes | 1.18 KB

```typescript
import React from 'react';

export type Status = 'active' | 'inactive' | 'pending' | 'archived';
export type AdmissionStatus = 'pending' | 'accepted' | 'rejected';
export type StockStatus = 'in_stock' | 'out_of_stock';

export interface User {
  id: string;
  name: string;
  email: string;
  avatar: string;
  role: 'admin' | 'editor';
}

export interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  location: string;
  imageUrl: string;
  status: Status;
  attendees: number;
}

export interface Product {
  id: string;
  title: string;
  price: number;
  image: string;
  status: StockStatus;
  sku: string;
  category: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  price: string;
  images: string[];
  features: string[];
}

export interface Admission {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  company: string;
  position: string;
  submittedAt: string;
  status: AdmissionStatus;
  avatar: string;
  motivation: string;
}

export interface NavItem {
  id: string;
  label: string;
  icon: React.ElementType;
  count?: number;
}

```

---

### `lib\utils.ts`

<a id="lib-utilsts"></a>

> 📊 **Stats:** 7 lignes | 192 B

```typescript
// lib/utils.ts
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}
```

---

### `next-env.d.ts`

<a id="next-envdts"></a>

> 📊 **Stats:** 7 lignes | 257 B

```typescript
/// <reference types="next" />
/// <reference types="next/image-types/global" />
import "./.next/dev/types/routes.d.ts";

// NOTE: This file should not be edited
// see https://nextjs.org/docs/app/api-reference/config/typescript for more information.

```

---


---

## ✅ Fin du Contexte

> Ce document a été généré automatiquement.
> Pour toute question ou modification, référez-vous au projet source.

**Bonne utilisation avec votre IA ! 🤖**

```

---

## 📄 Autres

> 42 fichier(s)

### `app\admissions\page.tsx`

<a id="app-admissions-pagetsx"></a>

> 📊 **Stats:** 41 lignes | 1.19 KB

```tsx
'use client';

import React, { useState, useEffect } from 'react';
import { Layout } from '@/components/Layout';
import { Admissions } from '@/components/Admissions';
import { useAuth } from '@/lib/contexts/AuthContext';
import { useRouter } from 'next/navigation';

export default function AdmissionsPage() {
  const { isAuthenticated, isLoading, user } = useAuth();
  const router = useRouter();
  const [currentView, setCurrentView] = useState('admissions');

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      router.push('/');
    }
  }, [isAuthenticated, isLoading, router]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-[#1877F2] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Chargement...</p>
        </div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return null;
  }

  return (
    <Layout currentView={currentView} onChangeView={setCurrentView} userEmail={user?.email || ''}>
      <Admissions />
    </Layout>
  );
}

```

---

### `app\events\page.tsx`

<a id="app-events-pagetsx"></a>

> 📊 **Stats:** 41 lignes | 1.17 KB

```tsx
'use client';

import React, { useState, useEffect } from 'react';
import { Layout } from '@/components/Layout';
import { Events } from '@/components/Events';
import { useAuth } from '@/lib/contexts/AuthContext';
import { useRouter } from 'next/navigation';

export default function EventsPage() {
  const { isAuthenticated, isLoading, user } = useAuth();
  const router = useRouter();
  const [currentView, setCurrentView] = useState('events');

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      router.push('/');
    }
  }, [isAuthenticated, isLoading, router]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-[#1877F2] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Chargement...</p>
        </div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return null;
  }

  return (
    <Layout currentView={currentView} onChangeView={setCurrentView} userEmail={user?.email || ''}>
      <Events />
    </Layout>
  );
}

```

---

### `app\page.tsx`

<a id="app-pagetsx"></a>

> 📊 **Stats:** 91 lignes | 3.52 KB

```tsx
'use client';

import React, { useState } from 'react';
import { useAuth } from '@/lib/contexts/AuthContext';
import { Login } from '@/components/Login';
import { Register } from '@/components/Register';
import { Dashboard } from '@/components/Dashboard';
import { Events } from '@/components/Events';
import { Products } from '@/components/Products';
import { Services } from '@/components/Services';
import { Admissions } from '@/components/Admissions';
import { Settings } from '@/components/Settings';
import { Layout } from '@/components/Layout';
import { CreateSyndicate } from '@/components/onboarding/CreateSyndicate';
import { PendingSyndicate } from '@/components/onboarding/PendingSyndicate';
import { Loader2 } from 'lucide-react';
import { Branches } from '@/components/Branches';


export default function Home() {
    const { isAuthenticated, isLoading, isSyndicateLoading, user, syndicateStatus } = useAuth();
    const [authView, setAuthView] = useState<'login' | 'register'>('login');
    const [currentView, setCurrentView] = useState('dashboard');

    // --- Gestionnaires d'état ---
    const handleTriggerAction = (action: string) => {
        if (action === 'create-event') setCurrentView('events');
        else if (action === 'create-product') setCurrentView('products');
        else if (action === 'create-admission') setCurrentView('admissions');
    };

    // --- Rendu du contenu principal en fonction de la navigation ---
    const renderContent = () => {
        switch (currentView) {
            case 'dashboard':
                return <Dashboard onChangeView={setCurrentView} onTriggerAction={handleTriggerAction} />;
            case 'events':
                return <Events />;
            case 'products':
                return <Products />;
            case 'services':
                return <Services />;
            case 'admissions':
                return <Admissions />;
            case 'settings':
                return <Settings />;
            case 'branches':
                return <Branches />;
            default:
                return <Dashboard onChangeView={setCurrentView} />;
        }
    };

    // 1. Chargement
    if (isLoading || isSyndicateLoading) {
        return (
            <div className="min-h-screen bg-[#F8FAFC] flex items-center justify-center">
                <div className="text-center">
                    <Loader2 className="w-10 h-10 text-[#172554] animate-spin mx-auto mb-4" />
                    <p className="text-[#64748B] font-medium">Chargement de votre espace...</p>
                </div>
            </div>
        );
    }

    // 2. Auth
    if (!isAuthenticated) {
        return authView === 'login'
            ? <Login onSwitchToRegister={() => setAuthView('register')} />
            : <Register onSwitchToLogin={() => setAuthView('login')} />;
    }

    // 3. Onboarding Syndicat
    if (!syndicateStatus?.hasSyndicate) return <CreateSyndicate />;
    if (syndicateStatus.status === 'PENDING') return <PendingSyndicate />;
    if (syndicateStatus.status === 'REJECTED') return <div>Accès refusé. Contactez le support.</div>;

    // 4. App Principale
    return (
        <Layout
            currentView={currentView}
            onChangeView={setCurrentView}
            userEmail={user?.email || ''}
        >
            {/* On rend le contenu dynamique ici */}
            <div className="animate-in fade-in duration-300">
                {renderContent()}
            </div>
        </Layout>
    );
}
```

---

### `app\products\page.tsx`

<a id="app-products-pagetsx"></a>

> 📊 **Stats:** 41 lignes | 1.18 KB

```tsx
'use client';

import React, { useState, useEffect } from 'react';
import { Layout } from '@/components/Layout';
import { Products } from '@/components/Products';
import { useAuth } from '@/lib/contexts/AuthContext';
import { useRouter } from 'next/navigation';

export default function ProductsPage() {
  const { isAuthenticated, isLoading, user } = useAuth();
  const router = useRouter();
  const [currentView, setCurrentView] = useState('products');

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      router.push('/');
    }
  }, [isAuthenticated, isLoading, router]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-[#1877F2] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Chargement...</p>
        </div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return null;
  }

  return (
    <Layout currentView={currentView} onChangeView={setCurrentView} userEmail={user?.email || ''}>
      <Products />
    </Layout>
  );
}

```

---

### `app\services\page.tsx`

<a id="app-services-pagetsx"></a>

> 📊 **Stats:** 41 lignes | 1.18 KB

```tsx
'use client';

import React, { useState, useEffect } from 'react';
import { Layout } from '@/components/Layout';
import { Services } from '@/components/Services';
import { useAuth } from '@/lib/contexts/AuthContext';
import { useRouter } from 'next/navigation';

export default function ServicesPage() {
  const { isAuthenticated, isLoading, user } = useAuth();
  const router = useRouter();
  const [currentView, setCurrentView] = useState('services');

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      router.push('/');
    }
  }, [isAuthenticated, isLoading, router]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-[#1877F2] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Chargement...</p>
        </div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return null;
  }

  return (
    <Layout currentView={currentView} onChangeView={setCurrentView} userEmail={user?.email || ''}>
      <Services />
    </Layout>
  );
}

```

---

### `app\settings\page.tsx`

<a id="app-settings-pagetsx"></a>

> 📊 **Stats:** 41 lignes | 1.18 KB

```tsx
'use client';

import React, { useState, useEffect } from 'react';
import { Layout } from '@/components/Layout';
import { Settings } from '@/components/Settings';
import { useAuth } from '@/lib/contexts/AuthContext';
import { useRouter } from 'next/navigation';

export default function SettingsPage() {
  const { isAuthenticated, isLoading, user } = useAuth();
  const router = useRouter();
  const [currentView, setCurrentView] = useState('settings');

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      router.push('/');
    }
  }, [isAuthenticated, isLoading, router]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-[#1877F2] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Chargement...</p>
        </div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return null;
  }

  return (
    <Layout currentView={currentView} onChangeView={setCurrentView} userEmail={user?.email || ''}>
      <Settings />
    </Layout>
  );
}

```

---

### `components\Admissions.tsx`

<a id="components-Admissionstsx"></a>

> 📊 **Stats:** 382 lignes | 17.48 KB

```tsx
'use client';

import React, { useState, useEffect } from 'react';
import {
  CheckCircle, XCircle, FileText, Search, Loader2, User,
  UserPlus, Mail, ChevronDown, X, Send, Building2, Users, Shield
} from 'lucide-react';
import { Button } from './ui/Button';
import { Badge } from './ui/Badge';
import { Input } from './ui/Input';
import { useAuth } from '@/lib/contexts/AuthContext';
import {
  getMembershipRequests,
  getSyndicateMembers, // Nouvelle fonction
  processMembershipRequest,
  getSyndicateBranches,
  inviteMemberToBranch,
  MembershipRequest,
  SyndicateBranch,
  MemberResponse // Nouveau type
} from '@/lib/services/admin.service';
import { apiGet } from '@/lib/services/api.client';
import { motion, AnimatePresence } from 'framer-motion';

export const Admissions: React.FC = () => {
  const { syndicateStatus } = useAuth();

  // Données
  const [activeTab, setActiveTab] = useState<'members' | 'requests'>('requests');
  const [requests, setRequests] = useState<MembershipRequest[]>([]);
  const [members, setMembers] = useState<MemberResponse[]>([]);
  const [branches, setBranches] = useState<SyndicateBranch[]>([]);

  // Filtres
  const [selectedBranchId, setSelectedBranchId] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState('');

  // États de chargement
  const [isLoading, setIsLoading] = useState(true);
  const [processingId, setProcessingId] = useState<string | null>(null);

  // Modal
  const [isInviteModalOpen, setIsInviteModalOpen] = useState(false);
  const [isInviting, setIsInviting] = useState(false);
  const [inviteData, setInviteData] = useState({ firstName: '', lastName: '', email: '' });

  // 1. Chargement Initial
  useEffect(() => {
    const init = async () => {
      if (!syndicateStatus?.syndicateId) return;
      setIsLoading(true);
      try {
        // Charger les branches
        const branchesData = await getSyndicateBranches(syndicateStatus.syndicateId);
        setBranches(branchesData);

        // Charger les données initiales (Demandes et Membres)
        const [reqsData, membersData] = await Promise.all([
          getMembershipRequests(syndicateStatus.syndicateId),
          getSyndicateMembers(syndicateStatus.syndicateId)
        ]);

        setRequests(reqsData);
        setMembers(membersData);

      } catch (error) {
        console.error("Erreur chargement:", error);
      } finally {
        setIsLoading(false);
      }
    };
    init();
  }, [syndicateStatus?.syndicateId]);

  // 2. Traitement d'une demande
  const handleProcess = async (id: string, approve: boolean) => {
    setProcessingId(id);
    try {
      await processMembershipRequest(id, approve, approve ? undefined : "Dossier incomplet");

      // Mise à jour optimiste
      setRequests(current => current.filter(req => req.id !== id));

      // Si approuvé, on recharge les membres pour voir le nouveau
      if (approve && syndicateStatus?.syndicateId) {
        const updatedMembers = await getSyndicateMembers(syndicateStatus.syndicateId);
        setMembers(updatedMembers);
      }
    } catch (error) {
      alert("Erreur lors du traitement.");
    } finally {
      setProcessingId(null);
    }
  };

  // 3. Invitation manuelle
  const handleInviteSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    let targetBranchId = selectedBranchId;

    // Fallback sur la première branche si "Toutes" est sélectionné
    if (targetBranchId === 'all') {
      if (branches.length === 0) {
        alert("Veuillez créer une antenne d'abord.");
        return;
      }
      targetBranchId = branches[0].id;
    }

    setIsInviting(true);
    try {
      await inviteMemberToBranch(syndicateStatus!.syndicateId!, targetBranchId, {
        email: inviteData.email, firstName: inviteData.firstName, lastName: inviteData.lastName
      });
      setIsInviteModalOpen(false);
      setInviteData({ firstName: '', lastName: '', email: '' });
      alert("Invitation envoyée !");
    } catch (error) {
      alert("Erreur lors de l'invitation.");
    } finally {
      setIsInviting(false);
    }
  };

  // 4. Logique de Filtrage (Client-side pour les membres car l'API renvoie tout)
  const getFilteredMembers = () => {
    return members.filter(m => {
      const matchesBranch = selectedBranchId === 'all' || m.branchId === selectedBranchId;
      const matchesSearch =
          m.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
          m.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
          m.firstName.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesBranch && matchesSearch;
    });
  };

  const getFilteredRequests = () => {
    return requests.filter(req => {
      // Note: L'API requests filtre déjà par branche si on utilisait l'endpoint spécifique,
      // mais ici on filtre la liste globale pour simplifier la UX sans recharger
      const matchesBranch = selectedBranchId === 'all' || req.branchId === selectedBranchId;
      const matchesSearch =
          req.user?.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
          req.user?.lastName?.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesBranch && matchesSearch;
    });
  };

  const currentBranchName = selectedBranchId === 'all' ? 'Toutes les antennes' : branches.find(b => b.id === selectedBranchId)?.name;

  if (isLoading) {
    return <div className="flex justify-center py-24"><Loader2 className="w-10 h-10 text-[#172554] animate-spin" /></div>;
  }

  return (
      <div className="space-y-6">

        {/* En-tête et Contrôles */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 pb-4 border-b border-slate-200/60">
          <div>
            <h1 className="text-3xl font-bold text-[#172554] tracking-tight">Membres & Adhésions</h1>
            <p className="text-slate-500 mt-1 text-lg">
              Gestion de <span className="font-semibold text-[#2563EB]">{currentBranchName}</span>
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            {/* Sélecteur de Branche */}
            <div className="relative">
              <select
                  value={selectedBranchId}
                  onChange={(e) => setSelectedBranchId(e.target.value)}
                  className="appearance-none bg-white border border-slate-200 text-slate-700 py-2.5 pl-4 pr-10 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#172554]/10 font-medium cursor-pointer shadow-sm hover:border-slate-300 transition-all"
              >
                <option value="all">Toutes les antennes</option>
                {branches.map(b => (
                    <option key={b.id} value={b.id}>{b.name}</option>
                ))}
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
            </div>

            <Button onClick={() => setIsInviteModalOpen(true)} leftIcon={UserPlus} className="bg-[#172554] text-white">
              Inviter un membre
            </Button>
          </div>
        </div>

        {/* Barre d'onglets et Recherche */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          {/* Onglets */}
          <div className="flex p-1 bg-slate-100 rounded-xl">
            <button
                onClick={() => setActiveTab('requests')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    activeTab === 'requests' ? 'bg-white text-[#172554] shadow-sm' : 'text-slate-500 hover:text-slate-700'
                }`}
            >
              Demandes <Badge className="ml-2 bg-amber-100 text-amber-700 border-0">{getFilteredRequests().length}</Badge>
            </button>
            <button
                onClick={() => setActiveTab('members')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    activeTab === 'members' ? 'bg-white text-[#172554] shadow-sm' : 'text-slate-500 hover:text-slate-700'
                }`}
            >
              Membres Actifs <Badge className="ml-2 bg-blue-100 text-blue-700 border-0">{getFilteredMembers().length}</Badge>
            </button>
          </div>

          {/* Recherche */}
          <div className="relative w-full sm:w-72">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
                type="text"
                placeholder="Rechercher..."
                className="w-full pl-9 pr-4 py-2 bg-white border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-[#172554]/10 outline-none"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {/* CONTENU : Liste des DEMANDES */}
        {activeTab === 'requests' && (
            <div className="space-y-4">
              {getFilteredRequests().length === 0 ? (
                  <EmptyState message="Aucune demande en attente." />
              ) : (
                  getFilteredRequests().map((request) => (
                      <motion.div
                          key={request.id}
                          initial={{ opacity: 0, y: 5 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="premium-card p-5 flex flex-col md:flex-row items-center gap-5"
                      >
                        {/* Avatar Initiale */}
                        <div className="w-12 h-12 rounded-full bg-amber-50 text-amber-600 flex items-center justify-center font-bold text-lg border border-amber-100">
                          {request.user?.firstName?.[0] || 'U'}
                        </div>

                        <div className="flex-1 text-center md:text-left">
                          <h3 className="font-bold text-[#172554]">
                            {request.user?.firstName} {request.user?.lastName}
                          </h3>
                          <div className="text-sm text-slate-500 flex flex-col md:flex-row gap-2 md:gap-4 items-center md:items-start mt-1">
                            <span className="flex items-center gap-1"><Mail className="w-3 h-3" /> {request.user?.email}</span>
                            <span className="flex items-center gap-1"><FileText className="w-3 h-3" /> {new Date(request.createdAt).toLocaleDateString()}</span>
                          </div>
                          {request.motivation && (
                              <p className="text-xs text-slate-500 mt-2 bg-slate-50 p-2 rounded-lg inline-block border border-slate-100">
                                "{request.motivation}"
                              </p>
                          )}
                        </div>

                        <div className="flex gap-3">
                          <Button
                              onClick={() => handleProcess(request.id, true)}
                              className="bg-emerald-600 hover:bg-emerald-700 text-white"
                              isLoading={processingId === request.id}
                              disabled={processingId !== null}
                              size="sm"
                          >
                            <CheckCircle className="w-4 h-4 mr-2" /> Accepter
                          </Button>
                          <Button
                              variant="outline"
                              onClick={() => handleProcess(request.id, false)}
                              className="text-red-600 border-red-200 hover:bg-red-50"
                              disabled={processingId !== null}
                              size="sm"
                          >
                            Refuser
                          </Button>
                        </div>
                      </motion.div>
                  ))
              )}
            </div>
        )}

        {/* CONTENU : Liste des MEMBRES */}
        {activeTab === 'members' && (
            <div className="space-y-4">
              {getFilteredMembers().length === 0 ? (
                  <EmptyState message="Aucun membre actif trouvé." />
              ) : (
                  <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden">
                    <table className="w-full text-left text-sm">
                      <thead className="bg-slate-50 text-slate-500 border-b border-slate-200">
                      <tr>
                        <th className="px-6 py-4 font-medium">Membre</th>
                        <th className="px-6 py-4 font-medium">Rôle</th>
                        <th className="px-6 py-4 font-medium">Date d'adhésion</th>
                        <th className="px-6 py-4 font-medium">Antenne</th>
                      </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100">
                      {getFilteredMembers().map((member) => (
                          <tr key={member.userId} className="hover:bg-slate-50/50 transition-colors">
                            <td className="px-6 py-4">
                              <div className="flex items-center gap-3">
                                <div className="w-9 h-9 rounded-full bg-[#172554] text-white flex items-center justify-center font-bold text-sm">
                                  {member.firstName[0]}{member.lastName[0]}
                                </div>
                                <div>
                                  <p className="font-semibold text-[#172554]">{member.firstName} {member.lastName}</p>
                                  <p className="text-xs text-slate-500">{member.email}</p>
                                </div>
                              </div>
                            </td>
                            <td className="px-6 py-4">
                              <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                                {member.role}
                              </Badge>
                            </td>
                            <td className="px-6 py-4 text-slate-600">
                              {new Date(member.joinedAt).toLocaleDateString()}
                            </td>
                            <td className="px-6 py-4 text-slate-600">
                              <div className="flex items-center gap-2">
                                <Building2 className="w-3 h-3 text-slate-400" />
                                {branches.find(b => b.id === member.branchId)?.name || 'N/A'}
                              </div>
                            </td>
                          </tr>
                      ))}
                      </tbody>
                    </table>
                  </div>
              )}
            </div>
        )}

        {/* Modal Invitation */}
        <AnimatePresence>
          {isInviteModalOpen && (
              <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0F172A]/40 backdrop-blur-sm">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden"
                >
                  <div className="p-6 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
                    <h3 className="text-xl font-bold text-[#172554]">Inviter un membre</h3>
                    <button onClick={() => setIsInviteModalOpen(false)}><X className="w-5 h-5 text-slate-400" /></button>
                  </div>
                  <form onSubmit={handleInviteSubmit} className="p-6 space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <Input label="Prénom" value={inviteData.firstName} onChange={(e) => setInviteData({...inviteData, firstName: e.target.value})} required />
                      <Input label="Nom" value={inviteData.lastName} onChange={(e) => setInviteData({...inviteData, lastName: e.target.value})} required />
                    </div>
                    <Input label="Email" type="email" icon={Mail} value={inviteData.email} onChange={(e) => setInviteData({...inviteData, email: e.target.value})} required />

                    {selectedBranchId === 'all' && (
                        <p className="text-xs text-amber-600 bg-amber-50 p-2 rounded border border-amber-100">
                          L'invitation sera liée à l'antenne principale par défaut.
                        </p>
                    )}

                    <Button type="submit" className="w-full bg-[#172554]" isLoading={isInviting}>Envoyer</Button>
                  </form>
                </motion.div>
              </div>
          )}
        </AnimatePresence>

      </div>
  );
};

// Composant Empty State réutilisable
const EmptyState = ({ message }: { message: string }) => (
    <div className="text-center py-16 bg-white rounded-2xl border border-dashed border-slate-200">
      <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-4">
        <Users className="w-8 h-8 text-slate-300" />
      </div>
      <p className="text-slate-500 font-medium">{message}</p>
    </div>
);
```

---

### `components\Branches.tsx`

<a id="components-Branchestsx"></a>

> 📊 **Stats:** 308 lignes | 15.10 KB

```tsx
'use client';

import React, { useState, useEffect, useRef } from 'react';
import {
    Building2, MapPin, Phone, Plus, Edit3, Image as ImageIcon,
    Upload, Loader2, Search, X, CheckCircle2
} from 'lucide-react';
import { Button } from './ui/Button';
import { Card, CardContent } from './ui/Card';
import { Input } from './ui/Input';
import { useAuth } from '@/lib/contexts/AuthContext';
import { getBranches, createBranch, updateBranch, Branch } from '@/lib/services/branches.service';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

export const Branches: React.FC = () => {
    const { syndicateStatus } = useAuth();

    const [branches, setBranches] = useState<Branch[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isActionLoading, setIsActionLoading] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');

    // Modal State
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingBranch, setEditingBranch] = useState<Branch | null>(null);

    // Form State
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [bannerFile, setBannerFile] = useState<File | null>(null);
    const [bannerPreview, setBannerPreview] = useState<string | null>(null);
    const [formData, setFormData] = useState({
        name: '',
        location: '',
        contact: ''
    });

    const fetchBranches = async () => {
        if (!syndicateStatus?.syndicateId) return;
        setIsLoading(true);
        try {
            const data = await getBranches(syndicateStatus.syndicateId);
            setBranches(data);
        } catch (error) {
            console.error(error);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchBranches();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [syndicateStatus?.syndicateId]);

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setBannerFile(file);
            const reader = new FileReader();
            reader.onloadend = () => setBannerPreview(reader.result as string);
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!syndicateStatus?.syndicateId) return;

        setIsActionLoading(true);
        try {
            if (editingBranch) {
                // Update (Note: l'API actuelle dans le prompt ne semble pas gérer l'update de l'image via PATCH simple, à vérifier)
                await updateBranch(editingBranch.id, formData);
            } else {
                // Create
                await createBranch(syndicateStatus.syndicateId, formData, bannerFile || undefined);
            }

            await fetchBranches();
            closeModal();
        } catch (error) {
            console.error(error);
            alert("Une erreur est survenue.");
        } finally {
            setIsActionLoading(false);
        }
    };

    const openModal = (branch?: Branch) => {
        if (branch) {
            setEditingBranch(branch);
            setFormData({
                name: branch.name,
                location: branch.location,
                contact: branch.contact
            });
            setBannerPreview(branch.bannerUrl || null);
        } else {
            setEditingBranch(null);
            setFormData({ name: '', location: '', contact: '' });
            setBannerPreview(null);
        }
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setEditingBranch(null);
        setBannerFile(null);
        setBannerPreview(null);
    };

    const filteredBranches = branches.filter(b =>
        b.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        b.location.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="space-y-6 animate-in fade-in duration-500">
            {/* Header */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-slate-200/60 pb-6">
                <div>
                    <h1 className="text-3xl font-bold text-[#172554] tracking-tight">Mes Antennes</h1>
                    <p className="text-slate-500 mt-2 text-lg">
                        Créez et gérez les antennes locales de votre syndicat.
                    </p>
                </div>
                <Button onClick={() => openModal()} leftIcon={Plus} className="bg-[#172554] text-white shadow-lg shadow-blue-900/20">
                    Nouvelle Antenne
                </Button>
            </div>

            {/* Stats Rapides */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="premium-card p-6 bg-gradient-to-br from-[#172554] to-[#1e3a8a] text-white">
                    <div className="flex items-center gap-4">
                        <div className="p-3 bg-white/10 rounded-xl">
                            <Building2 className="w-6 h-6" />
                        </div>
                        <div>
                            <p className="text-blue-100 text-sm font-medium">Total Antennes</p>
                            <h3 className="text-3xl font-bold">{branches.length}</h3>
                        </div>
                    </div>
                </div>
                {/* Placeholder stats */}
                <div className="premium-card p-6">
                    <div className="flex items-center gap-4">
                        <div className="p-3 bg-emerald-50 text-emerald-600 rounded-xl">
                            <CheckCircle2 className="w-6 h-6" />
                        </div>
                        <div>
                            <p className="text-slate-500 text-sm font-medium">Actives</p>
                            <h3 className="text-3xl font-bold text-slate-900">{branches.length}</h3>
                        </div>
                    </div>
                </div>
            </div>

            {/* Search */}
            <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input
                    type="text"
                    placeholder="Rechercher une antenne..."
                    className="w-full pl-10 pr-4 py-3 bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#172554]/10 focus:border-[#172554] outline-none transition-all"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
            </div>

            {/* Grid */}
            {isLoading ? (
                <div className="flex justify-center py-20"><Loader2 className="w-10 h-10 text-[#172554] animate-spin" /></div>
            ) : filteredBranches.length === 0 ? (
                <div className="text-center py-20 bg-white rounded-2xl border-2 border-dashed border-slate-200">
                    <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Building2 className="w-8 h-8 text-slate-400" />
                    </div>
                    <h3 className="text-lg font-bold text-[#172554]">Aucune antenne configurée</h3>
                    <p className="text-slate-500 mb-6">Vous devez créer au moins une antenne pour gérer vos membres.</p>
                    <Button onClick={() => openModal()}>Créer ma première antenne</Button>
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredBranches.map((branch) => (
                        <motion.div
                            key={branch.id}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="premium-card group overflow-hidden flex flex-col h-full"
                        >
                            <div className="relative h-40 bg-slate-100">
                                {branch.bannerUrl ? (
                                    <Image src={branch.bannerUrl} alt={branch.name} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                                ) : (
                                    <div className="flex items-center justify-center h-full bg-gradient-to-br from-slate-100 to-slate-200">
                                        <Building2 className="w-12 h-12 text-slate-300" />
                                    </div>
                                )}
                                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                    <Button variant="secondary" size="sm" onClick={() => openModal(branch)} leftIcon={Edit3}>
                                        Modifier
                                    </Button>
                                </div>
                            </div>

                            <div className="p-6 flex-1 flex flex-col">
                                <h3 className="text-xl font-bold text-[#172554] mb-2">{branch.name}</h3>
                                <div className="space-y-2 mb-4 flex-1">
                                    <div className="flex items-center text-slate-500 text-sm">
                                        <MapPin className="w-4 h-4 mr-2 text-[#2563EB]" />
                                        {branch.location}
                                    </div>
                                    <div className="flex items-center text-slate-500 text-sm">
                                        <Phone className="w-4 h-4 mr-2 text-[#2563EB]" />
                                        {branch.contact}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            )}

            {/* Modal */}
            <AnimatePresence>
                {isModalOpen && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0F172A]/40 backdrop-blur-sm">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            className="bg-white rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden"
                        >
                            <div className="p-6 border-b border-slate-100 flex justify-between items-center sticky top-0 bg-white z-10">
                                <h3 className="text-xl font-bold text-[#172554]">
                                    {editingBranch ? 'Modifier l\'antenne' : 'Nouvelle Antenne'}
                                </h3>
                                <button onClick={closeModal}><X className="w-5 h-5 text-slate-400 hover:text-slate-600" /></button>
                            </div>

                            <form onSubmit={handleSubmit} className="p-6 space-y-6">
                                {/* Banner Upload */}
                                <div
                                    onClick={() => !editingBranch && fileInputRef.current?.click()} // Disable upload on edit if API doesn't support it yet
                                    className={`relative w-full h-40 rounded-xl border-2 border-dashed border-slate-200 flex items-center justify-center overflow-hidden transition-all ${!editingBranch ? 'cursor-pointer hover:border-[#172554] hover:bg-slate-50' : ''}`}
                                >
                                    {bannerPreview ? (
                                        <Image src={bannerPreview} alt="Preview" fill className="object-cover" />
                                    ) : (
                                        <div className="text-center text-slate-400">
                                            <ImageIcon className="w-8 h-8 mx-auto mb-2" />
                                            <span className="text-sm">Ajouter une bannière</span>
                                        </div>
                                    )}
                                    {!editingBranch && (
                                        <input
                                            type="file"
                                            ref={fileInputRef}
                                            className="hidden"
                                            accept="image/*"
                                            onChange={handleImageChange}
                                        />
                                    )}
                                </div>

                                <Input
                                    label="Nom de l'antenne"
                                    placeholder="Ex: Antenne Régionale du Littoral"
                                    value={formData.name}
                                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                                    required
                                />

                                <div className="grid grid-cols-2 gap-4">
                                    <Input
                                        label="Ville / Localisation"
                                        placeholder="Douala"
                                        icon={MapPin}
                                        value={formData.location}
                                        onChange={(e) => setFormData({...formData, location: e.target.value})}
                                        required
                                    />
                                    <Input
                                        label="Contact (Tél/Email)"
                                        placeholder="+237..."
                                        icon={Phone}
                                        value={formData.contact}
                                        onChange={(e) => setFormData({...formData, contact: e.target.value})}
                                        required
                                    />
                                </div>

                                <div className="pt-2">
                                    <Button type="submit" className="w-full bg-[#172554]" isLoading={isActionLoading}>
                                        {editingBranch ? 'Enregistrer les modifications' : 'Créer l\'antenne'}
                                    </Button>
                                </div>
                            </form>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </div>
    );
};
```

---

### `components\BranchSelector.tsx`

<a id="components-BranchSelectortsx"></a>

> 📊 **Stats:** 91 lignes | 3.84 KB

```tsx
'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { Building2, MapPin, ChevronRight } from 'lucide-react';
import { Card, CardContent } from './ui/Card';
import { Branch } from '@/lib/types/events';
import { BRANCHES } from '@/lib/constants/branches';

interface BranchSelectorProps {
  onSelectBranch: (branch: Branch) => void;
}

export const BranchSelector: React.FC<BranchSelectorProps> = ({ onSelectBranch }) => {
  const router = useRouter();
  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl shadow-lg mb-4">
          <Building2 className="w-8 h-8 text-white" />
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Sélectionnez une Agence
        </h1>
        <p className="text-gray-600">
          Choisissez l&apos;agence régionale pour voir et gérer ses événements
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {BRANCHES.map((branch) => (
          <Card
            key={branch.id}
            className="group cursor-pointer border-2 border-gray-200 hover:border-blue-500 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
            onClick={() => {
              router.push(`/events?branch=${branch.id}`);
              onSelectBranch(branch);
            }}
          >
            <CardContent className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Building2 className="w-6 h-6 text-white" />
                </div>
                <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                {branch.name}
              </h3>
              
              {branch.description && (
                <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                  {branch.description}
                </p>
              )}
              
              <div className="space-y-2 pt-3 border-t border-gray-100">
                {branch.location && (
                  <div className="flex items-center text-sm text-gray-500">
                    <MapPin className="w-4 h-4 mr-2" />
                    {branch.location}
                  </div>
                )}
                <div className="text-sm text-gray-700">
                  <span className="font-medium">Directeur:</span> {branch.director.name}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="border-0 shadow-xl bg-gradient-to-br from-blue-50 to-purple-50">
        <CardContent className="p-6">
          <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
            <Building2 className="w-5 h-5 text-blue-600" />
            À propos des agences
          </h3>
          <p className="text-sm text-gray-700">
            Le syndicat UGATE dispose de plusieurs agences régionales à travers le pays. 
            Toutes les agences défendent les mêmes intérêts et suivent le même fonctionnement. 
            Sélectionnez une agence pour voir ses événements locaux, créer de nouveaux événements, 
            et gérer les inscriptions des membres de cette région.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

```

---

### `components\Dashboard.tsx`

<a id="components-Dashboardtsx"></a>

> 📊 **Stats:** 251 lignes | 10.52 KB

```tsx
'use client';

import React, { useState, useEffect } from 'react';
import {
  Users, Calendar, TrendingUp, DollarSign,
  ShoppingBag, FileText, Download, Loader2, RefreshCw, ArrowUpRight, Plus
} from 'lucide-react';
import { Button } from './ui/Button';
import { useAuth } from '@/lib/contexts/AuthContext';
import { getSyndicateStats, SyndicateStats } from '@/lib/services/admin.service';
import { motion } from 'framer-motion';

// --- Skeleton Design ---
const StatCardSkeleton = () => (
    <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm animate-pulse h-[140px]">
      <div className="flex justify-between items-start mb-4">
        <div className="h-10 w-10 bg-slate-100 rounded-full"></div>
        <div className="h-6 w-16 bg-slate-100 rounded-full"></div>
      </div>
      <div className="h-8 w-24 bg-slate-100 rounded mb-2"></div>
      <div className="h-4 w-32 bg-slate-100 rounded"></div>
    </div>
);

// --- Premium Stat Card ---
interface StatCardProps {
  title: string;
  value: number | string;
  icon: React.ElementType;
  trend?: string;
  trendUp?: boolean;
  colorClass: string; // ex: "text-blue-600 bg-blue-50"
  delay: number;
}

const StatCard = ({ title, value, icon: Icon, trend, trendUp = true, colorClass, delay }: StatCardProps) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay }}
        className="premium-card rounded-2xl p-6 relative overflow-hidden group"
    >
      <div className="flex justify-between items-start mb-4">
        <div className={`p-3 rounded-xl ${colorClass} bg-opacity-10 group-hover:scale-110 transition-transform duration-300`}>
          <Icon className={`w-6 h-6 ${colorClass.split(' ')[0]}`} />
        </div>
        {trend && (
            <div className={`flex items-center gap-1 text-xs font-bold px-2 py-1 rounded-full ${trendUp ? 'bg-emerald-50 text-emerald-600' : 'bg-red-50 text-red-600'}`}>
              {trendUp ? <ArrowUpRight className="w-3 h-3" /> : <ArrowUpRight className="w-3 h-3 rotate-90" />}
              {trend}
            </div>
        )}
      </div>

      <div>
        <h3 className="text-3xl font-bold text-slate-900 tracking-tight mb-1">{value}</h3>
        <p className="text-sm font-medium text-slate-500">{title}</p>
      </div>
    </motion.div>
);

// --- Action Card ---
const ActionCard = ({ title, icon: Icon, onClick, color }: any) => (
    <button
        onClick={onClick}
        className="flex items-center gap-4 p-4 bg-white border border-slate-200 rounded-xl hover:border-slate-300 hover:shadow-md transition-all text-left group"
    >
      <div className={`w-12 h-12 rounded-lg flex items-center justify-center text-white shadow-lg group-hover:scale-105 transition-transform ${color}`}>
        <Icon className="w-6 h-6" />
      </div>
      <div>
        <h4 className="font-bold text-slate-900 group-hover:text-blue-600 transition-colors">{title}</h4>
        <p className="text-xs text-slate-500">Action rapide</p>
      </div>
      <Plus className="w-5 h-5 text-slate-300 ml-auto group-hover:text-blue-500" />
    </button>
);

interface DashboardProps {
  onChangeView?: (view: string) => void;
  onTriggerAction?: (action: string) => void;
}

export const Dashboard: React.FC<DashboardProps> = ({ onChangeView, onTriggerAction }) => {
  const { syndicateStatus } = useAuth();
  const [stats, setStats] = useState<SyndicateStats | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const fetchStats = async () => {
    if (!syndicateStatus?.syndicateId) return;
    setIsLoading(true);
    try {
      const data = await getSyndicateStats(syndicateStatus.syndicateId);
      setStats(data);
    } catch (error) {
      console.error("Erreur stats:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchStats();
  }, [syndicateStatus?.syndicateId]);

  return (
      <div className="space-y-8">
        {/* Welcome Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-2">
          <div>
            <h1 className="text-3xl font-bold text-slate-900 tracking-tight">Vue d&apos;ensemble</h1>
            <p className="text-slate-500 mt-2 text-lg">
              Voici ce qui se passe dans votre syndicat aujourd&apos;hui.
            </p>
          </div>
          <div className="flex gap-3">
            <Button variant="outline" size="sm" onClick={fetchStats}>
              <RefreshCw className={`w-4 h-4 mr-2 ${isLoading ? 'animate-spin' : ''}`} />
              Actualiser
            </Button>
            <Button variant="secondary" size="sm" className="bg-[#0F172A] text-white hover:bg-[#1e293b]">
              <Download className="w-4 h-4 mr-2" />
              Exporter
            </Button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {isLoading ? (
              <>
                {[1,2,3,4].map(i => <StatCardSkeleton key={i} />)}
              </>
          ) : (
              <>
                <StatCard
                    title="Membres Actifs"
                    value={stats?.totalMembers || 0}
                    icon={Users}
                    trend="+12%"
                    colorClass="text-blue-600 bg-blue-50"
                    delay={0}
                />
                <StatCard
                    title="Demandes en attente"
                    value={stats?.pendingRequests || 0}
                    icon={FileText}
                    trend="+5"
                    colorClass="text-amber-600 bg-amber-50"
                    delay={0.1}
                />
                <StatCard
                    title="Services Actifs"
                    value={stats?.activeServices || 0}
                    icon={ShoppingBag}
                    trendUp={true}
                    colorClass="text-purple-600 bg-purple-50"
                    delay={0.2}
                />
                <StatCard
                    title="Revenus Mensuels"
                    value={`${(stats?.totalRevenue || 0).toLocaleString()} €`}
                    icon={DollarSign}
                    trend="+24%"
                    colorClass="text-emerald-600 bg-emerald-50"
                    delay={0.3}
                />
              </>
          )}
        </div>

        {/* Quick Actions & Recent Activity Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* Actions Rapides */}
          <div className="lg:col-span-2 space-y-6">
            <h3 className="text-lg font-bold text-slate-900">Actions Fréquentes</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <ActionCard
                  title="Nouvel Événement"
                  icon={Calendar}
                  color="bg-blue-600"
                  onClick={() => { onChangeView?.('events'); onTriggerAction?.('create-event'); }}
              />
              <ActionCard
                  title="Ajouter Produit"
                  icon={ShoppingBag}
                  color="bg-emerald-600"
                  onClick={() => { onChangeView?.('products'); onTriggerAction?.('create-product'); }}
              />
              <ActionCard
                  title="Valider Adhésion"
                  icon={Users}
                  color="bg-amber-500"
                  onClick={() => { onChangeView?.('admissions'); }}
              />
              <ActionCard
                  title="Publier Annonce"
                  icon={TrendingUp}
                  color="bg-purple-600"
                  onClick={() => { /* Feature future */ }}
              />
            </div>

            {/* Graph Placeholder (pour montrer le potentiel visuel) */}
            <div className="premium-card rounded-2xl p-6 mt-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-bold text-slate-900">Analyses d&apos;audience</h3>
                <select className="bg-slate-50 border-none text-sm font-medium text-slate-600 rounded-lg py-1 px-3 outline-none">
                  <option>7 derniers jours</option>
                  <option>30 derniers jours</option>
                </select>
              </div>
              <div className="h-64 bg-slate-50 rounded-xl flex items-center justify-center border border-slate-100 border-dashed">
                <p className="text-slate-400 text-sm">Graphique des visites (Placeholder)</p>
              </div>
            </div>
          </div>

          {/* Activity Feed */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 h-full">
              <h3 className="text-lg font-bold text-slate-900 mb-6">Activité Récente</h3>
              <div className="space-y-6">
                {[
                  { title: 'Nouveau membre', desc: 'Jean Dupont a rejoint', time: '2 min', icon: Users, color: 'bg-blue-100 text-blue-600' },
                  { title: 'Vente produit', desc: 'Commande #1234', time: '1h', icon: ShoppingBag, color: 'bg-emerald-100 text-emerald-600' },
                  { title: 'Événement créé', desc: 'AG 2024', time: '3h', icon: Calendar, color: 'bg-purple-100 text-purple-600' },
                  { title: 'Nouvelle demande', desc: 'Validation requise', time: '5h', icon: FileText, color: 'bg-amber-100 text-amber-600' },
                ].map((item, i) => (
                    <div key={i} className="flex gap-4">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${item.color}`}>
                        <item.icon className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-slate-900">{item.title}</p>
                        <p className="text-xs text-slate-500 mt-0.5">{item.desc}</p>
                      </div>
                      <span className="text-xs text-slate-400 ml-auto">{item.time}</span>
                    </div>
                ))}
              </div>
              <button className="w-full mt-8 py-2 text-sm font-medium text-slate-500 hover:text-[#0F172A] transition-colors border-t border-slate-100">
                Voir tout l&apos;historique
              </button>
            </div>
          </div>
        </div>
      </div>
  );
};
```

---

### `components\Events.tsx`

<a id="components-Eventstsx"></a>

> 📊 **Stats:** 600 lignes | 24.08 KB

```tsx
'use client';

import React, { useState, useEffect, useRef } from 'react';
import {
  Calendar, MapPin, Users, Plus, Image as ImageIcon,
  ChevronLeft, Search, Clock, Video, Building2,
  ChevronDown, Loader2, AlertCircle
} from 'lucide-react';
import { Button } from './ui/Button';
import { Badge } from './ui/Badge';
import { Card } from './ui/Card';
import { Input, TextArea } from './ui/Input';
import { useAuth } from '@/lib/contexts/AuthContext';
import {
  getEventsByBranch,
  createEvent,
  getEventParticipants,
  formatLocalTime,
  formatDateFr,
  EventItem,
  CreateEventDTO,
  EventParticipant
} from '@/lib/services/events.service';
import { getSyndicateBranches, SyndicateBranch } from '@/lib/services/admin.service';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

// Composant Vidéo robuste
const VideoPlayer: React.FC<{
  src: string;
  autoPlay?: boolean;
  muted?: boolean;
  loop?: boolean;
  controls?: boolean;
  className?: string;
  onError?: () => void;
  onSuccess?: () => void;
}> = ({ src, autoPlay = false, muted = true, loop = false, controls = true, className = "", onError, onSuccess }) => {
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleError = () => {
    console.error('❌ Erreur chargement vidéo:', src);
    setHasError(true);
    setIsLoading(false);
    onError?.();
  };

  const handleLoadedData = () => {
    console.log('✅ Vidéo chargée:', src);
    setIsLoading(false);
    setHasError(false);
    onSuccess?.();
  };

  useEffect(() => {
    setHasError(false);
    setIsLoading(true);
  }, [src]);

  if (hasError) {
    return null;
  }

  return (
      <video
          ref={videoRef}
          className={className}
          autoPlay={autoPlay}
          muted={muted}
          loop={loop}
          controls={controls}
          playsInline
          preload="metadata"
          onError={handleError}
          onLoadedData={handleLoadedData}
          onLoadedMetadata={handleLoadedData}
          style={{ opacity: isLoading ? 0 : 1, transition: 'opacity 0.3s ease-in-out' }}
      >
        <source src={src} type="video/mp4" />
        <source src={src} type="video/webm" />
      </video>
  );
};

// Composant Média Universel avec skeleton au lieu de spinner
const UniversalMedia: React.FC<{
  src: string;
  alt: string;
  autoPlay?: boolean;
  muted?: boolean;
  loop?: boolean;
  controls?: boolean;
  className?: string;
  showVideoIcon?: boolean;
  isCard?: boolean;
}> = ({ src, alt, autoPlay = false, muted = true, loop = false, controls = true, className = "", showVideoIcon = false, isCard = false }) => {
  const [mediaType, setMediaType] = useState<'video' | 'image'>('video');
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const handleVideoError = () => {
    console.log('⚠️ Pas une vidéo, essai en tant qu\'image:', src);
    setMediaType('image');
  };

  const handleVideoSuccess = () => {
    console.log('✅ Confirmé: Vidéo:', src);
    setIsLoading(false);
  };

  const handleImageError = () => {
    console.error('❌ Média complètement non chargeable:', src);
    setHasError(true);
    setIsLoading(false);
  };

  const handleImageLoad = () => {
    console.log('✅ Confirmé: Image:', src);
    setIsLoading(false);
  };

  if (hasError) {
    return (
        <div className={`bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center ${className}`}>
          <div className="text-center">
            <AlertCircle className="w-12 h-12 text-slate-300 mx-auto mb-2" />
            <p className="text-xs text-slate-400">Média indisponible</p>
          </div>
        </div>
    );
  }

  return (
      <div className={`relative ${className}`}>
        {/* Skeleton subtil - seulement pour les cards */}
        {isLoading && isCard && (
            <div className="absolute inset-0 bg-gradient-to-br from-slate-200 via-slate-100 to-slate-200 animate-pulse" />
        )}

        {/* Spinner pour la vue détails */}
        {isLoading && !isCard && (
            <div className="absolute inset-0 flex items-center justify-center bg-slate-900">
              <Loader2 className="w-8 h-8 text-white animate-spin" />
            </div>
        )}

        {mediaType === 'video' ? (
            <>
              <VideoPlayer
                  src={src}
                  autoPlay={autoPlay}
                  muted={muted}
                  loop={loop}
                  controls={controls}
                  className="w-full h-full object-cover"
                  onError={handleVideoError}
                  onSuccess={handleVideoSuccess}
              />
              {showVideoIcon && !isLoading && (
                  <div className="absolute top-2 right-2 bg-black/50 p-1.5 rounded-full backdrop-blur-sm z-20">
                    <Video className="w-3 h-3 text-white" />
                  </div>
              )}
            </>
        ) : (
            <Image
                src={src}
                alt={alt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                onError={handleImageError}
                onLoad={handleImageLoad}
                style={{ opacity: isLoading ? 0 : 1 }}
            />
        )}
      </div>
  );
};

export const Events: React.FC = () => {
  const { syndicateStatus, user } = useAuth();

  // Données
  const [branches, setBranches] = useState<SyndicateBranch[]>([]);
  const [selectedBranchId, setSelectedBranchId] = useState<string>('');
  const [events, setEvents] = useState<EventItem[]>([]);
  const [participants, setParticipants] = useState<EventParticipant[]>([]);

  // États UI
  const [view, setView] = useState<'list' | 'create' | 'details'>('list');
  const [isLoading, setIsLoading] = useState(true);
  const [isEventsLoading, setIsEventsLoading] = useState(false);
  const [isActionLoading, setIsActionLoading] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState<EventItem | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  // États Médias (Création)
  const [mediaType, setMediaType] = useState<'image' | 'video' | null>(null);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [videoFile, setVideoFile] = useState<File | null>(null);
  const [mediaPreview, setMediaPreview] = useState<string | null>(null);
  const mediaInputRef = useRef<HTMLInputElement>(null);

  const [formData, setFormData] = useState({
    title: '',
    description: '',
    date: '',
    startTime: '',
    endTime: '',
    location: ''
  });

  // 1. Charger les branches au montage
  useEffect(() => {
    let isMounted = true;
    const init = async () => {
      if (!syndicateStatus?.syndicateId) return;
      try {
        const branchesData = await getSyndicateBranches(syndicateStatus.syndicateId);
        if (isMounted) {
          setBranches(branchesData || []);
          if (branchesData && branchesData.length > 0) {
            setSelectedBranchId(branchesData[0].id);
          }
        }
      } catch (error) {
        console.error("Erreur chargement branches:", error);
      } finally {
        if (isMounted) setIsLoading(false);
      }
    };
    init();
    return () => { isMounted = false; };
  }, [syndicateStatus?.syndicateId]);

  // 2. Charger les événements quand la branche change
  useEffect(() => {
    if (!selectedBranchId) return;
    let isMounted = true;

    const fetchEvents = async () => {
      setIsEventsLoading(true);
      try {
        const data = await getEventsByBranch(selectedBranchId);
        if (isMounted) setEvents(data || []);
      } catch (error) {
        console.error("Erreur chargement événements:", error);
        if (isMounted) setEvents([]);
      } finally {
        if (isMounted) setIsEventsLoading(false);
      }
    };
    fetchEvents();
    return () => { isMounted = false; };
  }, [selectedBranchId]);

  // --- Handlers ---

  const handleMediaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (file.type.startsWith('video/')) {
      setMediaType('video');
      setVideoFile(file);
      setImageFile(null);
    } else {
      setMediaType('image');
      setImageFile(file);
      setVideoFile(null);
    }
    setMediaPreview(URL.createObjectURL(file));
  };

  const handleCreateSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedBranchId || !user) return;

    setIsActionLoading(true);
    try {
      const payload: CreateEventDTO = {
        creatorId: user.id,
        branchId: selectedBranchId,
        title: formData.title,
        description: formData.description,
        eventDate: formData.date,
        location: formData.location,
        startTime: formData.startTime,
        endTime: formData.endTime
      };

      await createEvent(payload, imageFile || undefined, videoFile || undefined);

      // Rafraichir la liste
      const updatedEvents = await getEventsByBranch(selectedBranchId);
      setEvents(updatedEvents || []);

      setView('list');
      resetForm();
    } catch (error) {
      alert("Erreur lors de la création.");
    } finally {
      setIsActionLoading(false);
    }
  };

  const handleViewDetails = async (event: EventItem) => {
    setSelectedEvent(event);
    setView('details');
    try {
      const parts = await getEventParticipants(event.id);
      setParticipants(parts || []);
    } catch (error) {
      setParticipants([]);
    }
  };

  const resetForm = () => {
    setFormData({ title: '', description: '', date: '', startTime: '', endTime: '', location: '' });
    setImageFile(null);
    setVideoFile(null);
    setMediaPreview(null);
    setMediaType(null);
  };

  const currentBranchName = branches.find(b => b.id === selectedBranchId)?.name || '...';
  const filteredEvents = events.filter(e => e.title.toLowerCase().includes(searchQuery.toLowerCase()));

  if (isLoading) {
    return <div className="flex justify-center py-20"><Loader2 className="w-10 h-10 text-[#172554] animate-spin" /></div>;
  }

  // --- VUE CRÉATION ---
  if (view === 'create') {
    return (
        <div className="max-w-4xl mx-auto animate-in fade-in">
          <div className="flex items-center gap-4 mb-6">
            <Button variant="ghost" size="sm" onClick={() => setView('list')}>
              <ChevronLeft className="w-4 h-4 mr-1" /> Retour
            </Button>
            <h1 className="text-2xl font-bold text-[#172554]">Nouvel Événement</h1>
          </div>

          <Card className="border-0 shadow-xl overflow-hidden bg-white">
            <form onSubmit={handleCreateSubmit}>
              <div className="grid grid-cols-1 lg:grid-cols-3">
                {/* Upload Zone */}
                <div className="bg-slate-50 p-8 flex flex-col items-center justify-center border-r border-slate-100 min-h-[350px]">
                  <div
                      onClick={() => mediaInputRef.current?.click()}
                      className="relative w-full aspect-[3/4] rounded-2xl border-2 border-dashed border-slate-300 hover:border-[#2563EB] cursor-pointer flex items-center justify-center overflow-hidden"
                  >
                    {mediaPreview ? (
                        mediaType === 'video' ? (
                            <video src={mediaPreview} className="w-full h-full object-cover" autoPlay muted loop />
                        ) : (
                            <Image src={mediaPreview} alt="Preview" fill className="object-cover" />
                        )
                    ) : (
                        <div className="text-center text-slate-400">
                          <div className="flex justify-center gap-2 mb-2">
                            <ImageIcon className="w-6 h-6" /><Video className="w-6 h-6" />
                          </div>
                          <span className="text-sm">Ajouter média</span>
                        </div>
                    )}
                  </div>
                  <input type="file" ref={mediaInputRef} className="hidden" accept="image/*,video/*" onChange={handleMediaChange} />
                  {mediaPreview && (
                      <button type="button" onClick={resetForm} className="mt-4 text-xs text-red-500 font-bold hover:underline">
                        Supprimer
                      </button>
                  )}
                </div>

                {/* Fields */}
                <div className="lg:col-span-2 p-8 space-y-5">
                  <div className="p-3 bg-blue-50 rounded-xl text-sm text-blue-800 border border-blue-100 flex items-center gap-2">
                    <Building2 className="w-4 h-4" /> Agence : <b>{currentBranchName}</b>
                  </div>
                  <Input label="Titre *" value={formData.title} onChange={(e) => setFormData({...formData, title: e.target.value})} required />
                  <div className="grid grid-cols-2 gap-4">
                    <Input type="date" label="Date *" value={formData.date} onChange={(e) => setFormData({...formData, date: e.target.value})} required />
                    <Input label="Lieu *" value={formData.location} onChange={(e) => setFormData({...formData, location: e.target.value})} required />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <Input type="time" label="Début *" value={formData.startTime} onChange={(e) => setFormData({...formData, startTime: e.target.value})} required />
                    <Input type="time" label="Fin *" value={formData.endTime} onChange={(e) => setFormData({...formData, endTime: e.target.value})} required />
                  </div>
                  <TextArea label="Description *" value={formData.description} onChange={(e) => setFormData({...formData, description: e.target.value})} required className="min-h-[100px]" />
                  <div className="pt-4 flex justify-end gap-3">
                    <Button type="button" variant="ghost" onClick={() => setView('list')}>Annuler</Button>
                    <Button type="submit" isLoading={isActionLoading} className="bg-[#172554] text-white">Publier</Button>
                  </div>
                </div>
              </div>
            </form>
          </Card>
        </div>
    );
  }

  // --- VUE DÉTAILS (Split View : Média Gauche / Info Droite) ---
  if (view === 'details' && selectedEvent) {
    const mediaUrl = selectedEvent.imageUrls?.[0];

    return (
        <div className="max-w-6xl mx-auto animate-in fade-in h-[calc(100vh-140px)] flex flex-col">
          <div className="mb-4">
            <Button variant="ghost" onClick={() => setView('list')}>
              <ChevronLeft className="w-4 h-4 mr-1" /> Retour
            </Button>
          </div>

          <div className="bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden flex-1 flex flex-col lg:flex-row">

            {/* GAUCHE : Média (50%) */}
            <div className="lg:w-1/2 bg-black relative flex items-center justify-center h-64 lg:h-auto">
              {mediaUrl ? (
                  <UniversalMedia
                      src={mediaUrl}
                      alt={selectedEvent.title}
                      controls={true}
                      autoPlay={false}
                      className="w-full h-full absolute inset-0"
                      showVideoIcon={false}
                      isCard={false}
                  />
              ) : (
                  <div className="flex items-center justify-center w-full h-full">
                    <ImageIcon className="w-16 h-16 text-slate-600" />
                  </div>
              )}
            </div>

            {/* DROITE : Infos (50%) */}
            <div className="lg:w-1/2 flex flex-col h-full overflow-y-auto custom-scrollbar p-8">
              <div className="mb-6">
                <Badge variant="success" className="mb-3">Actif</Badge>
                <h1 className="text-3xl font-bold text-[#172554] mb-4">{selectedEvent.title}</h1>

                <div className="flex flex-col gap-3 text-sm text-slate-600 bg-slate-50 p-4 rounded-xl border border-slate-100">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-[#2563EB]" />
                    {formatDateFr(selectedEvent.date)}
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-[#2563EB]" />
                    {formatLocalTime(selectedEvent.startTime)} - {formatLocalTime(selectedEvent.endTime)}
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-[#2563EB]" />
                    {selectedEvent.location}
                  </div>
                </div>
              </div>

              <div className="prose prose-slate max-w-none flex-1">
                <h3 className="text-lg font-bold text-[#172554] mb-2">Description</h3>
                <p className="text-slate-600 whitespace-pre-wrap">{selectedEvent.description}</p>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-100">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-bold text-[#172554] flex items-center gap-2">
                    <Users className="w-5 h-5" /> Participants
                  </h3>
                  <Badge variant="info">{selectedEvent.participantCount} inscrits</Badge>
                </div>

                <div className="flex gap-2 justify-end">
                  <Button
                      variant="outline"
                      className="text-red-600 border-red-200 hover:bg-red-50 w-full"
                      onClick={() => alert("Annulation non disponible via API")}
                  >
                    Annuler l&apos;événement
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
    );
  }

  // --- VUE LISTE (Défaut) ---
  return (
      <div className="space-y-8 animate-in fade-in">
        <div className="flex flex-col lg:flex-row justify-between items-end gap-6 pb-2 border-b border-slate-200/60">
          <div>
            <h1 className="text-3xl font-bold text-[#172554]">Événements</h1>
            <p className="text-slate-500 mt-1">Gérez les activités du réseau.</p>
          </div>
          <div className="flex gap-3">
            <div className="relative">
              <select
                  value={selectedBranchId}
                  onChange={(e) => setSelectedBranchId(e.target.value)}
                  className="appearance-none bg-white border border-slate-200 py-2.5 pl-4 pr-10 rounded-xl shadow-sm min-w-[200px] cursor-pointer"
              >
                {branches.map(b => <option key={b.id} value={b.id}>{b.name}</option>)}
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
            </div>
            <Button onClick={() => setView('create')} leftIcon={Plus} className="bg-[#172554] text-white">Créer</Button>
          </div>
        </div>

        <div className="bg-white p-2 rounded-2xl shadow-sm border border-slate-100 max-w-md flex items-center">
          <Search className="w-5 h-5 text-slate-400 ml-2" />
          <input
              type="text"
              placeholder="Rechercher..."
              className="w-full bg-transparent border-none focus:ring-0 text-sm h-10 ml-2 outline-none"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        {isEventsLoading ? (
            <div className="flex justify-center py-20"><Loader2 className="w-10 h-10 text-[#172554] animate-spin" /></div>
        ) : filteredEvents.length === 0 ? (
            <div className="text-center py-20 bg-white rounded-3xl border border-dashed border-slate-200">
              <Calendar className="w-10 h-10 text-slate-300 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-[#172554]">Aucun événement</h3>
              <p className="text-slate-500">Aucune activité pour cette antenne.</p>
            </div>
        ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredEvents.map(event => {
                const mediaUrl = event.imageUrls?.[0];

                return (
                    <motion.div
                        key={event.id}
                        initial={{ opacity: 0, scale: 0.98 }}
                        animate={{ opacity: 1, scale: 1 }}
                        whileHover={{ y: -5 }}
                        className="group bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl transition-all overflow-hidden flex flex-col h-full cursor-pointer"
                        onClick={() => handleViewDetails(event)}
                    >
                      {/* Partie Média (Haut) avec Autoplay */}
                      <div className="h-48 relative bg-slate-100 overflow-hidden">
                        {mediaUrl ? (
                            <UniversalMedia
                                src={mediaUrl}
                                alt={event.title}
                                autoPlay={true}
                                muted={true}
                                loop={true}
                                controls={false}
                                className="h-full w-full"
                                showVideoIcon={true}
                                isCard={true}
                            />
                        ) : (
                            <div className="flex items-center justify-center w-full h-full">
                              <ImageIcon className="w-12 h-12 text-slate-300" />
                            </div>
                        )}
                      </div>

                      {/* Partie Info (Bas) */}
                      <div className="p-5 flex-1 flex flex-col">
                        <div className="flex items-center gap-2 mb-2">
                          <Badge className="bg-blue-50 text-blue-700 border-0 text-[10px] uppercase font-bold px-2">
                            {formatDateFr(event.date).split(' ')[1]}
                          </Badge>
                          <h3 className="font-bold text-lg text-[#172554] line-clamp-1 group-hover:text-[#2563EB] transition-colors">
                            {event.title}
                          </h3>
                        </div>

                        <div className="flex items-center gap-4 text-xs text-slate-500 mb-3">
                          <span className="flex items-center gap-1"><Clock className="w-3 h-3"/> {formatLocalTime(event.startTime)}</span>
                          <span className="flex items-center gap-1 truncate"><MapPin className="w-3 h-3"/> {event.location}</span>
                        </div>

                        <p className="text-sm text-slate-600 line-clamp-2 mb-4 flex-1">
                          {event.description}
                        </p>

                        <div className="pt-3 border-t border-slate-100 flex justify-between items-center text-sm">
                    <span className="font-medium text-slate-700 flex items-center gap-1">
                      <Users className="w-4 h-4 text-[#2563EB]" /> {event.participantCount}
                    </span>
                          <span className="text-[#2563EB] font-medium group-hover:underline">Détails</span>
                        </div>
                      </div>
                    </motion.div>
                );
              })}
            </div>
        )}
      </div>
  );
};
```

---

### `components\Login.tsx`

<a id="components-Logintsx"></a>

> 📊 **Stats:** 131 lignes | 5.15 KB

```tsx
'use client';

import React, { useState } from 'react';
import { Mail, Lock, Eye, EyeOff, AlertCircle } from 'lucide-react';
import { Button } from './ui/Button';
import { Input } from './ui/Input';
import { useAuth } from '@/lib/contexts/AuthContext';
import { AuthLayout } from './auth/AuthLayout';

interface LoginProps {
  onSwitchToRegister: () => void;
}

export const Login: React.FC<LoginProps> = ({ onSwitchToRegister }) => {
  const { login, error: authError, isLoading: authLoading } = useAuth();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [localError, setLocalError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLocalError('');

    if (!email || !password) {
      setLocalError('Veuillez remplir tous les champs');
      return;
    }

    try {
      await login({ identifier: email, password });
    } catch (err) {
      console.error('Erreur login:', err);
    }
  };

  return (
      <AuthLayout
          title="Bon retour !"
          subtitle="Entrez vos identifiants pour accéder à votre espace."
      >
        <form onSubmit={handleSubmit} className="space-y-6">
          {(localError || authError) && (
              <div className="flex items-center gap-3 p-4 bg-red-50/50 border border-red-100 rounded-xl text-red-600 text-sm animate-in fade-in slide-in-from-top-2">
                <AlertCircle className="w-5 h-5 flex-shrink-0" />
                <span className="font-medium">{localError || authError}</span>
              </div>
          )}

          <div className="space-y-4">
            <Input
                label="Email professionnel"
                type="email"
                icon={Mail}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="nom@exemple.com"
                autoComplete="email"
            />

            <div className="space-y-1.5">
              <label className="text-sm font-medium text-gray-700 ml-1">Mot de passe</label>
              <div className="relative group">
                <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#1877F2] transition-colors">
                  <Lock className="w-5 h-5" />
                </div>
                <input
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="flex h-11 w-full rounded-xl border border-gray-200 bg-white px-4 pl-10 pr-12 py-2 text-sm transition-all duration-200 placeholder:text-gray-400 focus:border-[#1877F2] focus:ring-4 focus:ring-[#1877F2]/5 focus:outline-none"
                />
                <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 p-1 rounded-md transition-colors"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <label className="flex items-center gap-2 cursor-pointer group">
              <input
                  type="checkbox"
                  className="w-4 h-4 rounded border-gray-300 text-[#1877F2] focus:ring-[#1877F2] cursor-pointer"
              />
              <span className="text-sm text-gray-500 group-hover:text-gray-700 transition-colors">Se souvenir de moi</span>
            </label>
            <button type="button" className="text-sm font-semibold text-[#1877F2] hover:text-blue-700 hover:underline transition-all">
              Mot de passe oublié ?
            </button>
          </div>

          <Button
              type="submit"
              variant="primary"
              size="lg"
              className="w-full bg-[#1877F2] hover:bg-blue-700 text-white shadow-lg shadow-blue-500/30"
              isLoading={authLoading}
          >
            Se connecter
          </Button>

          <div className="relative my-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-100"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-white text-gray-400 font-medium">Ou</span>
            </div>
          </div>

          <p className="text-center text-sm text-gray-500">
            Pas encore de compte ?{' '}
            <button
                type="button"
                onClick={onSwitchToRegister}
                className="font-bold text-[#1877F2] hover:text-blue-700 hover:underline transition-all"
            >
              Créer un compte
            </button>
          </p>
        </form>
      </AuthLayout>
  );
};
```

---

### `components\onboarding\CreateSyndicate.tsx`

<a id="components-onboarding-CreateSyndicatetsx"></a>

> 📊 **Stats:** 184 lignes | 8.75 KB

```tsx
'use client';

import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Upload, Building2, FileText, Check, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { createSyndicate } from '@/lib/services/syndicates.service';
import { useAuth } from '@/lib/contexts/AuthContext';
import Image from 'next/image';

export const CreateSyndicate = () => {
    const { refreshSyndicateStatus } = useAuth();
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    // États pour les fichiers
    const [logoPreview, setLogoPreview] = useState<string | null>(null);
    const [logoFile, setLogoFile] = useState<File | null>(null);
    const [docFile, setDocFile] = useState<File | null>(null);

    const logoInputRef = useRef<HTMLInputElement>(null);
    const docInputRef = useRef<HTMLInputElement>(null);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setError(null);
        setIsLoading(true);

        const formData = new FormData(e.currentTarget);

        // Validation basique
        if (!logoFile || !docFile) {
            setError("Le logo et le document de statuts sont obligatoires.");
            setIsLoading(false);
            return;
        }

        // Ajout explicite des fichiers (bien que le formulaire les contienne déjà si les inputs ont des 'name')
        // On s'assure qu'ils sont bien attachés
        formData.set('logo', logoFile);
        formData.set('document', docFile);

        try {
            await createSyndicate(formData);
            // Rafraichir le contexte pour passer automatiquement à l'écran "En attente"
            await refreshSyndicateStatus();
        } catch (err) {
            setError("Une erreur est survenue lors de la création. Vérifiez les champs.");
        } finally {
            setIsLoading(false);
        }
    };

    const handleLogoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setLogoFile(file);
            const reader = new FileReader();
            reader.onloadend = () => setLogoPreview(reader.result as string);
            reader.readAsDataURL(file);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-[#FAFAFA] p-4">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="w-full max-w-2xl"
            >
                <div className="text-center mb-10">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-white border border-gray-200 rounded-2xl shadow-sm mb-6">
                        <Building2 className="w-8 h-8 text-[#1877F2]" />
                    </div>
                    <h1 className="text-3xl font-bold text-gray-900 tracking-tight">Créez votre Syndicat</h1>
                    <p className="text-gray-500 mt-2 text-lg">Initialisez votre structure sur UGate pour commencer.</p>
                </div>

                <form onSubmit={handleSubmit} className="bg-white border border-gray-200 rounded-2xl shadow-xl shadow-gray-200/50 p-8 space-y-8">

                    {/* Section Logo */}
                    <div className="flex flex-col items-center justify-center space-y-4">
                        <div
                            onClick={() => logoInputRef.current?.click()}
                            className="relative w-32 h-32 rounded-full border-2 border-dashed border-gray-300 hover:border-[#1877F2] hover:bg-blue-50 transition-all cursor-pointer flex items-center justify-center overflow-hidden group"
                        >
                            {logoPreview ? (
                                <Image src={logoPreview} alt="Logo" fill className="object-cover" />
                            ) : (
                                <div className="text-center text-gray-400 group-hover:text-[#1877F2]">
                                    <Upload className="w-8 h-8 mx-auto mb-1" />
                                    <span className="text-xs font-medium">Logo</span>
                                </div>
                            )}
                            <input
                                type="file"
                                name="logo" // Important pour le FormData
                                accept="image/*"
                                ref={logoInputRef}
                                className="hidden"
                                onChange={handleLogoChange}
                            />
                        </div>
                        <p className="text-sm text-gray-500">Cliquez pour ajouter le logo officiel</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <Input
                            label="Nom du Syndicat"
                            name="name"
                            placeholder="ex: UGATE Centre"
                            required
                        />
                        <Input
                            label="Domaine d'activité"
                            name="domain"
                            placeholder="ex: Transport"
                            required
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700 ml-1">Description</label>
                        <textarea
                            name="description"
                            required
                            className="w-full min-h-[100px] rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm placeholder:text-gray-400 focus:border-[#1877F2] focus:ring-4 focus:ring-[#1877F2]/5 focus:outline-none transition-all resize-none"
                            placeholder="Décrivez brièvement la mission de votre syndicat..."
                        />
                    </div>

                    {/* Upload Document */}
                    <div className="p-4 bg-gray-50 rounded-xl border border-gray-200">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className="p-2 bg-white rounded-lg border border-gray-200">
                                    <FileText className="w-6 h-6 text-gray-600" />
                                </div>
                                <div>
                                    <p className="text-sm font-medium text-gray-900">Statuts / Document officiel</p>
                                    <p className="text-xs text-gray-500">PDF uniquement (Max 5MB)</p>
                                </div>
                            </div>
                            <Button
                                type="button"
                                variant="outline"
                                size="sm"
                                onClick={() => docInputRef.current?.click()}
                            >
                                {docFile ? <span className="text-green-600 flex items-center"><Check className="w-4 h-4 mr-1"/> Attaché</span> : 'Parcourir'}
                            </Button>
                            <input
                                type="file"
                                name="document" // Important pour le FormData
                                accept=".pdf"
                                ref={docInputRef}
                                className="hidden"
                                onChange={(e) => setDocFile(e.target.files?.[0] || null)}
                            />
                        </div>
                        {docFile && <p className="mt-2 text-xs text-center text-green-600 font-medium">{docFile.name}</p>}
                    </div>

                    {error && (
                        <div className="p-3 rounded-lg bg-red-50 text-red-600 text-sm flex items-center gap-2">
                            <AlertCircle className="w-4 h-4" />
                            {error}
                        </div>
                    )}

                    <Button
                        type="submit"
                        size="lg"
                        className="w-full"
                        isLoading={isLoading}
                    >
                        Soumettre la demande
                    </Button>
                </form>
            </motion.div>
        </div>
    );
};
```

---

### `components\onboarding\PendingSyndicate.tsx`

<a id="components-onboarding-PendingSyndicatetsx"></a>

> 📊 **Stats:** 60 lignes | 2.86 KB

```tsx
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Clock, CheckCircle2, FileText, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { useAuth } from '@/lib/contexts/AuthContext';

export const PendingSyndicate = () => {
    const { refreshSyndicateStatus, user } = useAuth();

    return (
        <div className="min-h-screen flex items-center justify-center bg-[#FAFAFA] p-4">
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="w-full max-w-lg bg-white border border-gray-200 rounded-2xl shadow-xl shadow-gray-200/50 p-8 text-center"
            >
                <div className="w-20 h-20 bg-amber-50 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Clock className="w-10 h-10 text-amber-500 animate-pulse" />
                </div>

                <h1 className="text-2xl font-bold text-gray-900 mb-2">Demande en cours d'examen</h1>
                <p className="text-gray-500 mb-8">
                    Merci {user?.firstName}. Votre demande de création de syndicat a bien été reçue et est actuellement examinée par nos super-administrateurs.
                </p>

                <div className="space-y-4 mb-8 text-left">
                    <div className="flex gap-4 p-4 bg-gray-50 rounded-xl border border-gray-100">
                        <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <div>
                            <h3 className="text-sm font-semibold text-gray-900">Documents soumis</h3>
                            <p className="text-xs text-gray-500">Vos statuts et logo ont été reçus.</p>
                        </div>
                    </div>
                    <div className="flex gap-4 p-4 bg-blue-50 rounded-xl border border-blue-100">
                        <FileText className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                        <div>
                            <h3 className="text-sm font-semibold text-gray-900">Validation manuelle</h3>
                            <p className="text-xs text-gray-500">Notre équipe vérifie la conformité légale (délai moyen: 24h).</p>
                        </div>
                    </div>
                </div>

                <Button
                    variant="outline"
                    onClick={() => refreshSyndicateStatus()}
                    className="w-full"
                    leftIcon={ArrowRight}
                >
                    Actualiser le statut
                </Button>

                <p className="text-xs text-gray-400 mt-4">
                    Vous recevrez également un email de notification.
                </p>
            </motion.div>
        </div>
    );
};
```

---

### `components\Products.tsx`

<a id="components-Productstsx"></a>

> 📊 **Stats:** 492 lignes | 21.07 KB

```tsx
'use client';

import React, { useState, useEffect, useRef } from 'react';
import {
  Plus, Search, Filter, AlertCircle, CheckCircle2, Edit3, Trash2,
  ShoppingBag, Package, TrendingUp, DollarSign, X, Save,
  Loader2, ImageIcon, Upload, RefreshCw
} from 'lucide-react';
import { Button } from './ui/Button';
import { Badge } from './ui/Badge';
import { Card, CardContent, CardHeader, CardTitle } from './ui/Card';
import { Input } from './ui/Input';
import { useAuth } from '@/lib/contexts/AuthContext';
import {
  getProductsBySyndicate,
  createProduct,
  deleteProduct,
  updateProductStock,
  updateProduct,
  CreateProductDTO
} from '@/lib/services/products.service';
import { ProductResponse } from '@/lib/services/admin.service';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

export const Products: React.FC = () => {
  const { syndicateStatus } = useAuth();

  // Data States
  const [products, setProducts] = useState<ProductResponse[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isActionLoading, setIsActionLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  // UI States
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [isStockModalOpen, setIsStockModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<ProductResponse | null>(null);

  // Forms States
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [stockAdjustment, setStockAdjustment] = useState('');

  const [formData, setFormData] = useState<Partial<CreateProductDTO>>({
    name: '',
    description: '',
    price: 0,
    sku: '',
    category: '',
    stock: 0,
    isActive: true
  });

  // --- Fetch Data ---
  const fetchProducts = async () => {
    if (!syndicateStatus?.syndicateId) return;
    setIsLoading(true);
    try {
      const data = await getProductsBySyndicate(syndicateStatus.syndicateId);
      setProducts(data);
    } catch (error) {
      console.error("Erreur chargement produits:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [syndicateStatus?.syndicateId]);

  // --- Handlers ---

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImageFile(file);
      const reader = new FileReader();
      reader.onloadend = () => setImagePreview(reader.result as string);
      reader.readAsDataURL(file);
    }
  };

  const handleCreate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!syndicateStatus?.syndicateId || !imageFile) return;

    setIsActionLoading(true);
    try {
      await createProduct({
        ...formData,
        syndicatId: syndicateStatus.syndicateId,
        price: Number(formData.price),
        stock: Number(formData.stock)
      } as CreateProductDTO, imageFile);

      await fetchProducts();
      setIsCreateModalOpen(false);
      resetForm();
    } catch (error) {
      console.error("Erreur création:", error);
      alert("Erreur lors de la création du produit");
    } finally {
      setIsActionLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Êtes-vous sûr de vouloir supprimer ce produit ?")) return;

    // Optimistic UI update
    setProducts(current => current.filter(p => p.id !== id));

    try {
      await deleteProduct(id);
    } catch (error) {
      console.error("Erreur suppression:", error);
      fetchProducts(); // Revert on error
    }
  };

  const handleStockUpdate = async () => {
    if (!selectedProduct) return;
    setIsActionLoading(true);
    try {
      const newStock = selectedProduct.stock + parseInt(stockAdjustment);
      await updateProductStock(selectedProduct.id, newStock);

      // Update local state
      setProducts(current => current.map(p =>
          p.id === selectedProduct.id ? { ...p, stock: newStock } : p
      ));

      setIsStockModalOpen(false);
      setStockAdjustment('');
    } catch (error) {
      console.error("Erreur stock:", error);
    } finally {
      setIsActionLoading(false);
    }
  };

  const resetForm = () => {
    setFormData({
      name: '',
      description: '',
      price: 0,
      sku: '',
      category: '',
      stock: 0,
      isActive: true
    });
    setImageFile(null);
    setImagePreview(null);
  };

  const filteredProducts = products.filter(p =>
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.sku.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 tracking-tight">Catalogue Produits</h1>
            <p className="text-gray-500 mt-1 flex items-center gap-2">
              <ShoppingBag className="w-4 h-4" />
              {products.length} produits • {products.filter(p => p.stock > 0).length} en stock
            </p>
          </div>
          <div className="flex gap-3">
            <Button variant="outline" onClick={fetchProducts} leftIcon={RefreshCw} disabled={isLoading}>
              Actualiser
            </Button>
            <Button onClick={() => setIsCreateModalOpen(true)} leftIcon={Plus} className="bg-[#1877F2] text-white">
              Ajouter un Produit
            </Button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card className="border-0 shadow-sm bg-gradient-to-br from-blue-500 to-blue-600 text-white">
            <CardContent className="p-6">
              <div className="flex justify-between items-center mb-2">
                <span className="text-blue-100">Valeur du Stock</span>
                <DollarSign className="w-5 h-5 opacity-80" />
              </div>
              <div className="text-2xl font-bold">
                {products.reduce((acc, p) => acc + (p.price * p.stock), 0).toLocaleString()} €
              </div>
            </CardContent>
          </Card>
          <Card className="border-0 shadow-sm">
            <CardContent className="p-6">
              <div className="flex justify-between items-center mb-2">
                <span className="text-gray-500">Produits en rupture</span>
                <AlertCircle className="w-5 h-5 text-red-500" />
              </div>
              <div className="text-2xl font-bold text-gray-900">
                {products.filter(p => p.stock <= 0).length}
              </div>
            </CardContent>
          </Card>
          <Card className="border-0 shadow-sm">
            <CardContent className="p-6">
              <div className="flex justify-between items-center mb-2">
                <span className="text-gray-500">Catégories</span>
                <Filter className="w-5 h-5 text-gray-400" />
              </div>
              <div className="text-2xl font-bold text-gray-900">
                {new Set(products.map(p => p.category)).size}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Search Bar */}
        <Card className="border-0 shadow-sm">
          <CardContent className="p-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                  type="text"
                  placeholder="Rechercher par nom ou référence (SKU)..."
                  className="w-full pl-10 pr-4 py-3 bg-gray-50 border-none rounded-xl focus:ring-2 focus:ring-[#1877F2]/20 outline-none transition-all"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </CardContent>
        </Card>

        {/* Products Grid */}
        {isLoading ? (
            <div className="flex justify-center py-20">
              <Loader2 className="w-10 h-10 text-[#1877F2] animate-spin" />
            </div>
        ) : filteredProducts.length === 0 ? (
            <div className="text-center py-20 bg-white rounded-2xl border border-dashed border-gray-300">
              <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <Package className="w-8 h-8 text-gray-400" />
              </div>
              <h3 className="text-lg font-medium text-gray-900">Aucun produit trouvé</h3>
              <p className="text-gray-500 mb-6">Commencez par ajouter votre premier produit.</p>
              <Button onClick={() => setIsCreateModalOpen(true)}>Ajouter un produit</Button>
            </div>
        ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              <AnimatePresence>
                {filteredProducts.map((product) => (
                    <motion.div
                        key={product.id}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        layout
                    >
                      <div className="group bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col h-full">
                        {/* Image */}
                        <div className="relative aspect-square bg-gray-100 overflow-hidden">
                          {product.image?.url ? (
                              <Image
                                  src={product.image.url}
                                  alt={product.name}
                                  fill
                                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                              />
                          ) : (
                              <div className="flex items-center justify-center h-full text-gray-400">
                                <ImageIcon className="w-12 h-12" />
                              </div>
                          )}

                          {/* Status Badge */}
                          <div className="absolute top-3 left-3">
                            <Badge variant={product.stock > 0 ? "success" : "error"} className="shadow-sm">
                              {product.stock > 0 ? `${product.stock} en stock` : 'Rupture'}
                            </Badge>
                          </div>

                          {/* Actions Overlay */}
                          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                            <Button
                                size="sm"
                                variant="secondary"
                                onClick={() => { setSelectedProduct(product); setIsStockModalOpen(true); }}
                            >
                              <Package className="w-4 h-4" />
                            </Button>
                            <Button
                                size="sm"
                                variant="danger"
                                onClick={() => handleDelete(product.id)}
                            >
                              <Trash2 className="w-4 h-4" />
                            </Button>
                          </div>
                        </div>

                        {/* Content */}
                        <div className="p-5 flex-1 flex flex-col">
                          <div className="mb-2">
                            <p className="text-xs font-mono text-gray-400 mb-1">{product.sku}</p>
                            <h3 className="font-bold text-gray-900 line-clamp-1">{product.name}</h3>
                          </div>

                          <p className="text-sm text-gray-500 line-clamp-2 mb-4 flex-1">
                            {product.description}
                          </p>

                          <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                            <Badge variant="outline">{product.category}</Badge>
                            <span className="text-xl font-bold text-[#1877F2]">
                        {product.price.toLocaleString()} €
                      </span>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                ))}
              </AnimatePresence>
            </div>
        )}

        {/* MODALE CRÉATION */}
        <AnimatePresence>
          {isCreateModalOpen && (
              <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl overflow-hidden max-h-[90vh] overflow-y-auto"
                >
                  <div className="p-6 border-b border-gray-100 flex justify-between items-center sticky top-0 bg-white z-10">
                    <h3 className="text-xl font-bold text-gray-900">Nouveau Produit</h3>
                    <button onClick={() => setIsCreateModalOpen(false)}><X className="w-5 h-5 text-gray-500" /></button>
                  </div>

                  <form onSubmit={handleCreate} className="p-6 space-y-6">
                    <div className="flex gap-6">
                      {/* Image Upload */}
                      <div
                          onClick={() => fileInputRef.current?.click()}
                          className="w-32 h-32 flex-shrink-0 rounded-xl border-2 border-dashed border-gray-300 hover:border-[#1877F2] hover:bg-blue-50 cursor-pointer flex items-center justify-center overflow-hidden transition-all group"
                      >
                        {imagePreview ? (
                            <Image src={imagePreview} alt="Preview" width={128} height={128} className="w-full h-full object-cover" />
                        ) : (
                            <div className="text-center text-gray-400 group-hover:text-[#1877F2]">
                              <Upload className="w-6 h-6 mx-auto mb-1" />
                              <span className="text-xs">Photo</span>
                            </div>
                        )}
                        <input
                            type="file"
                            ref={fileInputRef}
                            className="hidden"
                            accept="image/*"
                            onChange={handleImageChange}
                        />
                      </div>

                      <div className="flex-1 space-y-4">
                        <Input
                            label="Nom du produit"
                            placeholder="Ex: T-Shirt Syndicat"
                            value={formData.name}
                            onChange={(e) => setFormData({...formData, name: e.target.value})}
                            required
                        />
                        <div className="grid grid-cols-2 gap-4">
                          <Input
                              label="Référence (SKU)"
                              placeholder="TSH-001"
                              value={formData.sku}
                              onChange={(e) => setFormData({...formData, sku: e.target.value})}
                              required
                          />
                          <Input
                              label="Catégorie"
                              placeholder="Vêtements"
                              value={formData.category}
                              onChange={(e) => setFormData({...formData, category: e.target.value})}
                              required
                          />
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <Input
                          label="Prix (€)"
                          type="number"
                          min="0"
                          step="0.01"
                          value={formData.price}
                          onChange={(e) => setFormData({...formData, price: parseFloat(e.target.value)})}
                          required
                      />
                      <Input
                          label="Stock initial"
                          type="number"
                          min="0"
                          value={formData.stock}
                          onChange={(e) => setFormData({...formData, stock: parseInt(e.target.value)})}
                          required
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-sm font-medium text-gray-700 ml-1">Description</label>
                      <textarea
                          className="w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#1877F2]/20 focus:border-[#1877F2] outline-none min-h-[100px]"
                          placeholder="Description détaillée du produit..."
                          value={formData.description}
                          onChange={(e) => setFormData({...formData, description: e.target.value})}
                          required
                      />
                    </div>

                    <div className="pt-4 flex justify-end gap-3">
                      <Button type="button" variant="ghost" onClick={() => setIsCreateModalOpen(false)}>
                        Annuler
                      </Button>
                      <Button type="submit" isLoading={isActionLoading}>
                        Créer le produit
                      </Button>
                    </div>
                  </form>
                </motion.div>
              </div>
          )}
        </AnimatePresence>

        {/* MODALE STOCK */}
        <AnimatePresence>
          {isStockModalOpen && selectedProduct && (
              <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="bg-white rounded-2xl shadow-2xl w-full max-w-sm overflow-hidden"
                >
                  <div className="p-6 text-center">
                    <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Package className="w-6 h-6 text-[#1877F2]" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-1">Ajuster le stock</h3>
                    <p className="text-gray-500 text-sm mb-6">{selectedProduct.name}</p>

                    <div className="bg-gray-50 rounded-xl p-4 mb-6">
                      <span className="text-sm text-gray-500 block mb-1">Stock actuel</span>
                      <span className="text-3xl font-bold text-gray-900">{selectedProduct.stock}</span>
                    </div>

                    <div className="flex items-center gap-2 mb-6">
                      <Button
                          variant="outline"
                          onClick={() => setStockAdjustment(curr => String(Number(curr) - 1))}
                      >-</Button>
                      <Input
                          type="number"
                          className="text-center font-bold text-lg"
                          placeholder="+/-"
                          value={stockAdjustment}
                          onChange={(e) => setStockAdjustment(e.target.value)}
                      />
                      <Button
                          variant="outline"
                          onClick={() => setStockAdjustment(curr => String(Number(curr) + 1))}
                      >+</Button>
                    </div>

                    <div className="flex gap-2">
                      <Button variant="ghost" className="flex-1" onClick={() => setIsStockModalOpen(false)}>Annuler</Button>
                      <Button className="flex-1" onClick={handleStockUpdate} isLoading={isActionLoading}>Valider</Button>
                    </div>
                  </div>
                </motion.div>
              </div>
          )}
        </AnimatePresence>
      </div>
  );
};
```

---

### `components\Register.tsx`

<a id="components-Registertsx"></a>

> 📊 **Stats:** 219 lignes | 7.44 KB

```tsx
'use client';

import React, { useState } from 'react';
import { Mail, Lock, Eye, EyeOff, AlertCircle, User, Phone, CheckCircle2 } from 'lucide-react';
import { Button } from './ui/Button';
import { Input } from './ui/Input';
import { useAuth } from '@/lib/contexts/AuthContext';
import { AuthLayout } from './auth/AuthLayout';

interface RegisterProps {
  onSwitchToLogin: () => void;
}

export const Register: React.FC<RegisterProps> = ({ onSwitchToLogin }) => {
  const { register, error: authError, isLoading: authLoading } = useAuth();

  const [formData, setFormData] = useState({
    username: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [success, setSuccess] = useState(false);
  const [localError, setLocalError] = useState('');
  const [acceptTerms, setAcceptTerms] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLocalError('');

    if (formData.password !== formData.confirmPassword) {
      setLocalError('Les mots de passe ne correspondent pas');
      return;
    }

    if (!acceptTerms) {
      setLocalError('Vous devez accepter les conditions d\'utilisation');
      return;
    }

    try {
      await register({
        username: formData.username,
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        phone: formData.phone,
        password: formData.password,
        service: 'LETS_GO',
        roles: ['ADMIN']
      });
      setSuccess(true);
      setTimeout(onSwitchToLogin, 3000);
    } catch (err) {
      console.error('Erreur inscription:', err);
    }
  };

  if (success) {
    return (
        <AuthLayout title="Inscription réussie !" subtitle="Bienvenue chez UGate.">
          <div className="text-center py-10">
            <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="w-10 h-10 text-green-500 animate-bounce" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Compte créé avec succès</h3>
            <p className="text-gray-500">Vous allez être redirigé vers la page de connexion...</p>
          </div>
        </AuthLayout>
    );
  }

  return (
      <AuthLayout
          title="Créer un compte"
          subtitle="Rejoignez la plateforme de référence pour les syndicats."
      >
        <form onSubmit={handleSubmit} className="space-y-5">
          {(localError || authError) && (
              <div className="flex items-center gap-3 p-4 bg-red-50/50 border border-red-100 rounded-xl text-red-600 text-sm">
                <AlertCircle className="w-5 h-5 flex-shrink-0" />
                <span className="font-medium">{localError || authError}</span>
              </div>
          )}

          <div className="grid grid-cols-2 gap-4">
            <Input
                label="Prénom"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="Jean"
                required
            />
            <Input
                label="Nom"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Dupont"
                required
            />
          </div>

          <Input
              label="Nom d'utilisateur"
              name="username"
              icon={User}
              value={formData.username}
              onChange={handleChange}
              placeholder="j.dupont"
              required
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input
                label="Email"
                name="email"
                type="email"
                icon={Mail}
                value={formData.email}
                onChange={handleChange}
                placeholder="pro@email.com"
                required
            />
            <Input
                label="Téléphone"
                name="phone"
                type="tel"
                icon={Phone}
                value={formData.phone}
                onChange={handleChange}
                placeholder="+237..."
                required
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="relative group">
              <Input
                  label="Mot de passe"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  icon={Lock}
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="••••••"
                  required
              />
            </div>
            <div className="relative group">
              <Input
                  label="Confirmation"
                  name="confirmPassword"
                  type={showPassword ? "text" : "password"}
                  icon={Lock}
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="••••••"
                  required
              />
            </div>
          </div>

          <div className="flex justify-end">
            <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="text-xs text-gray-500 hover:text-[#1877F2]"
            >
              {showPassword ? "Masquer les mots de passe" : "Afficher les mots de passe"}
            </button>
          </div>

          <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl border border-gray-200/50">
            <input
                type="checkbox"
                id="terms"
                checked={acceptTerms}
                onChange={(e) => setAcceptTerms(e.target.checked)}
                className="mt-1 w-4 h-4 rounded border-gray-300 text-[#1877F2] focus:ring-[#1877F2] cursor-pointer"
            />
            <label htmlFor="terms" className="text-xs text-gray-600 cursor-pointer leading-relaxed">
              J&apos;accepte les <a href="#" className="text-[#1877F2] font-semibold hover:underline">conditions d&apos;utilisation</a> et la <a href="#" className="text-[#1877F2] font-semibold hover:underline">politique de confidentialité</a> de UGate.
            </label>
          </div>

          <Button
              type="submit"
              variant="primary"
              size="lg"
              className="w-full bg-[#1877F2] hover:bg-blue-700 text-white shadow-lg shadow-blue-500/30"
              isLoading={authLoading}
          >
            Créer mon compte
          </Button>

          <p className="text-center text-sm text-gray-500 pt-2">
            Déjà inscrit ?{' '}
            <button
                type="button"
                onClick={onSwitchToLogin}
                className="font-bold text-[#1877F2] hover:text-blue-700 hover:underline transition-all"
            >
              Se connecter
            </button>
          </p>
        </form>
      </AuthLayout>
  );
};
```

---

### `components\Services.tsx`

<a id="components-Servicestsx"></a>

> 📊 **Stats:** 361 lignes | 14.81 KB

```tsx
'use client';

import React, { useState, useEffect } from 'react';
import {
  Plus, CheckCircle, Edit3, Trash2, Zap,
  Search, X, Save, Loader2, Briefcase,
  MoreVertical, Check, AlertCircle
} from 'lucide-react';
import { Button } from './ui/Button';
import { Badge } from './ui/Badge';
import { Card, CardContent, CardHeader, CardTitle } from './ui/Card';
import { Input, TextArea } from './ui/Input';
import {
  getActiveServices,
  createService,
  deleteService,
  updateService,
  ServiceResponse
} from '@/lib/services/services.service';
import { motion, AnimatePresence } from 'framer-motion';

export const Services: React.FC = () => {
  // Data States
  const [services, setServices] = useState<ServiceResponse[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isActionLoading, setIsActionLoading] = useState(false);

  // UI States
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [editingService, setEditingService] = useState<ServiceResponse | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  // Form State
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    price: '',
    features: [''], // Commence avec une feature vide
    isActive: true
  });

  // --- Fetch Data ---
  const fetchServices = async () => {
    setIsLoading(true);
    try {
      const data = await getActiveServices();
      setServices(data);
    } catch (error) {
      console.error("Erreur chargement services:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchServices();
  }, []);

  // --- Handlers ---

  const handleFeatureChange = (index: number, value: string) => {
    const newFeatures = [...formData.features];
    newFeatures[index] = value;
    setFormData({ ...formData, features: newFeatures });
  };

  const addFeatureField = () => {
    setFormData({ ...formData, features: [...formData.features, ''] });
  };

  const removeFeatureField = (index: number) => {
    const newFeatures = formData.features.filter((_, i) => i !== index);
    setFormData({ ...formData, features: newFeatures });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsActionLoading(true);

    // Nettoyer les features vides
    const cleanFeatures = formData.features.filter(f => f.trim() !== '');

    try {
      const payload = {
        title: formData.title,
        description: formData.description,
        price: parseFloat(formData.price),
        features: cleanFeatures,
        isActive: formData.isActive
      };

      if (editingService) {
        await updateService(editingService.id, payload);
      } else {
        await createService(payload);
      }

      await fetchServices();
      closeModal();
    } catch (error) {
      console.error("Erreur sauvegarde:", error);
      alert("Une erreur est survenue lors de la sauvegarde.");
    } finally {
      setIsActionLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Voulez-vous vraiment supprimer ce service ?")) return;

    // UI Optimiste
    setServices(current => current.filter(s => s.id !== id));

    try {
      await deleteService(id);
    } catch (error) {
      console.error("Erreur suppression:", error);
      fetchServices(); // Revert
    }
  };

  const openEditModal = (service: ServiceResponse) => {
    setEditingService(service);
    setFormData({
      title: service.title,
      description: service.description,
      price: service.price.toString(),
      features: service.features.length > 0 ? service.features : [''],
      isActive: service.isActive
    });
    setIsCreateModalOpen(true);
  };

  const closeModal = () => {
    setIsCreateModalOpen(false);
    setEditingService(null);
    setFormData({
      title: '',
      description: '',
      price: '',
      features: [''],
      isActive: true
    });
  };

  const filteredServices = services.filter(s =>
      s.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 tracking-tight">Offres de Services</h1>
            <p className="text-gray-500 mt-1 flex items-center gap-2">
              <Briefcase className="w-4 h-4" />
              {services.length} service{services.length > 1 ? 's' : ''} disponible{services.length > 1 ? 's' : ''}
            </p>
          </div>
          <Button onClick={() => setIsCreateModalOpen(true)} leftIcon={Plus} className="bg-[#1877F2] text-white shadow-lg shadow-blue-500/20">
            Créer un Service
          </Button>
        </div>

        {/* Search */}
        <Card className="border-0 shadow-sm">
          <CardContent className="p-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                  type="text"
                  placeholder="Rechercher un service..."
                  className="w-full pl-10 pr-4 py-3 bg-gray-50 border-none rounded-xl focus:ring-2 focus:ring-[#1877F2]/20 outline-none transition-all"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </CardContent>
        </Card>

        {/* Grid */}
        {isLoading ? (
            <div className="flex justify-center py-20">
              <Loader2 className="w-10 h-10 text-[#1877F2] animate-spin" />
            </div>
        ) : filteredServices.length === 0 ? (
            <div className="text-center py-20 bg-white rounded-2xl border border-dashed border-gray-300">
              <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-lg font-medium text-gray-900">Aucun service</h3>
              <p className="text-gray-500 mb-6">Créez votre première offre de service pour vos membres.</p>
              <Button onClick={() => setIsCreateModalOpen(true)}>Créer un service</Button>
            </div>
        ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <AnimatePresence>
                {filteredServices.map((service) => (
                    <motion.div
                        key={service.id}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        layout
                    >
                      <Card className="h-full border-0 shadow-sm hover:shadow-xl transition-all duration-300 group overflow-hidden flex flex-col">
                        {/* Decorative Header */}
                        <div className="h-2 bg-gradient-to-r from-blue-500 to-purple-600"></div>

                        <CardContent className="p-6 flex-1 flex flex-col">
                          <div className="flex justify-between items-start mb-4">
                            <div className="p-3 bg-blue-50 rounded-xl text-[#1877F2]">
                              <Zap className="w-6 h-6" />
                            </div>
                            <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                              <button
                                  onClick={() => openEditModal(service)}
                                  className="p-2 text-gray-400 hover:text-[#1877F2] hover:bg-blue-50 rounded-lg transition-colors"
                              >
                                <Edit3 className="w-4 h-4" />
                              </button>
                              <button
                                  onClick={() => handleDelete(service.id)}
                                  className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                              >
                                <Trash2 className="w-4 h-4" />
                              </button>
                            </div>
                          </div>

                          <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                          <p className="text-gray-500 text-sm mb-6 line-clamp-3 flex-1">
                            {service.description}
                          </p>

                          <div className="space-y-3 mb-6">
                            {service.features.slice(0, 3).map((feature, idx) => (
                                <div key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                                  <span>{feature}</span>
                                </div>
                            ))}
                            {service.features.length > 3 && (
                                <p className="text-xs text-gray-400 pl-6">
                                  +{service.features.length - 3} autres avantages
                                </p>
                            )}
                          </div>

                          <div className="pt-6 mt-auto border-t border-gray-100 flex items-center justify-between">
                            <div>
                              <p className="text-xs text-gray-400 uppercase tracking-wider font-semibold">Tarif</p>
                              <p className="text-2xl font-bold text-[#1877F2]">
                                {service.price.toLocaleString()} <span className="text-sm font-normal text-gray-500">FCFA</span>
                              </p>
                            </div>
                            <Badge variant={service.isActive ? 'success' : 'default'}>
                              {service.isActive ? 'Actif' : 'Inactif'}
                            </Badge>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                ))}
              </AnimatePresence>
            </div>
        )}

        {/* MODALE CRÉATION / ÉDITION */}
        <AnimatePresence>
          {isCreateModalOpen && (
              <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="bg-white rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden max-h-[90vh] overflow-y-auto"
                >
                  <div className="p-6 border-b border-gray-100 flex justify-between items-center sticky top-0 bg-white z-10">
                    <h3 className="text-xl font-bold text-gray-900">
                      {editingService ? 'Modifier le service' : 'Nouveau Service'}
                    </h3>
                    <button onClick={closeModal}><X className="w-5 h-5 text-gray-500" /></button>
                  </div>

                  <form onSubmit={handleSubmit} className="p-6 space-y-5">
                    <Input
                        label="Nom du service *"
                        placeholder="Ex: Assistance Juridique"
                        value={formData.title}
                        onChange={(e) => setFormData({...formData, title: e.target.value})}
                        required
                    />

                    <Input
                        label="Prix (FCFA) *"
                        type="number"
                        placeholder="Ex: 15000"
                        value={formData.price}
                        onChange={(e) => setFormData({...formData, price: e.target.value})}
                        required
                    />

                    <TextArea
                        label="Description complète *"
                        placeholder="Détaillez ce que comprend ce service..."
                        value={formData.description}
                        onChange={(e) => setFormData({...formData, description: e.target.value})}
                        required
                        className="min-h-[120px]"
                    />

                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <label className="text-sm font-medium text-gray-700">Caractéristiques clés</label>
                        <button
                            type="button"
                            onClick={addFeatureField}
                            className="text-xs text-[#1877F2] font-semibold hover:underline"
                        >
                          + Ajouter
                        </button>
                      </div>
                      <div className="space-y-2">
                        {formData.features.map((feature, idx) => (
                            <div key={idx} className="flex gap-2">
                              <Input
                                  placeholder={`Avantage ${idx + 1}`}
                                  value={feature}
                                  onChange={(e) => handleFeatureChange(idx, e.target.value)}
                              />
                              {formData.features.length > 1 && (
                                  <button
                                      type="button"
                                      onClick={() => removeFeatureField(idx)}
                                      className="p-2 text-gray-400 hover:text-red-500 transition-colors"
                                  >
                                    <X className="w-4 h-4" />
                                  </button>
                              )}
                            </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-4 flex justify-end gap-3 border-t border-gray-100 mt-6">
                      <Button type="button" variant="ghost" onClick={closeModal}>
                        Annuler
                      </Button>
                      <Button type="submit" isLoading={isActionLoading}>
                        {editingService ? 'Mettre à jour' : 'Publier le service'}
                      </Button>
                    </div>
                  </form>
                </motion.div>
              </div>
          )}
        </AnimatePresence>
      </div>
  );
};
```

---

### `components\Settings.tsx`

<a id="components-Settingstsx"></a>

> 📊 **Stats:** 519 lignes | 25.14 KB

```tsx
'use client';

import React, { useState } from 'react';
import { 
  User, Mail, Lock, Bell, Globe, Shield, Database, 
  Palette, Monitor, Smartphone, Save, Eye, EyeOff,
  Building2, Users, Calendar, Package, FileText,
  CheckCircle2, AlertCircle, Info, ChevronRight
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/Card';
import { Button } from './ui/Button';
import { Input } from './ui/Input';
import { Badge } from './ui/Badge';

export const Settings: React.FC = () => {
  const [activeTab, setActiveTab] = useState('profile');
  const [showPassword, setShowPassword] = useState(false);
  const [saveStatus, setSaveStatus] = useState<'idle' | 'saving' | 'saved'>('idle');

  const [profileData, setProfileData] = useState({
    firstName: 'Admin',
    lastName: 'Principal',
    email: 'admin@ugate.cm',
    phone: '+237 6 70 00 00 00',
    role: 'Super Administrateur',
    branch: 'Siège National - Yaoundé',
  });

  const [securityData, setSecurityData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
    twoFactorEnabled: true,
  });

  const [notificationSettings, setNotificationSettings] = useState({
    emailNotifications: true,
    pushNotifications: true,
    smsNotifications: false,
    newEvents: true,
    newMembers: true,
    productUpdates: true,
    systemAlerts: true,
  });

  const [appearanceSettings, setAppearanceSettings] = useState({
    theme: 'light',
    language: 'fr',
    dateFormat: 'DD/MM/YYYY',
    timeFormat: '24h',
  });

  const handleSave = () => {
    setSaveStatus('saving');
    setTimeout(() => {
      setSaveStatus('saved');
      setTimeout(() => setSaveStatus('idle'), 2000);
    }, 1000);
  };

  const tabs = [
    { id: 'profile', label: 'Profil', icon: User },
    { id: 'security', label: 'Sécurité', icon: Shield },
    { id: 'notifications', label: 'Notifications', icon: Bell },
    { id: 'appearance', label: 'Apparence', icon: Palette },
    { id: 'organization', label: 'Organisation', icon: Building2 },
    { id: 'data', label: 'Données', icon: Database },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Paramètres</h1>
        <p className="text-gray-500 mt-1">Gérez vos préférences et configurations</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Sidebar Navigation */}
        <div className="lg:col-span-1">
          <Card className="border-0 shadow-lg sticky top-24">
            <CardContent className="p-4">
              <nav className="space-y-1">
                {tabs.map((tab) => {
                  const Icon = tab.icon;
                  const isActive = activeTab === tab.id;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                        isActive
                          ? 'bg-[#1877F2] text-white shadow-md'
                          : 'text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                      <span className="font-medium">{tab.label}</span>
                      {isActive && <ChevronRight className="w-4 h-4 ml-auto" />}
                    </button>
                  );
                })}
              </nav>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <div className="lg:col-span-3 space-y-6">
          {/* Profile Tab */}
          {activeTab === 'profile' && (
            <div className="space-y-6 animate-in fade-in duration-300">
              <Card className="border-0 shadow-lg">
                <CardHeader className="border-b border-gray-100">
                  <CardTitle className="flex items-center gap-2">
                    <User className="w-5 h-5 text-[#1877F2]" />
                    Informations Personnelles
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center gap-6 mb-6">
                    <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#1877F2] to-purple-600 flex items-center justify-center text-white text-3xl font-bold shadow-lg">
                      {profileData.firstName[0]}{profileData.lastName[0]}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">
                        {profileData.firstName} {profileData.lastName}
                      </h3>
                      <p className="text-gray-500">{profileData.email}</p>
                      <Badge variant="info" className="mt-2">{profileData.role}</Badge>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Input
                      label="Prénom"
                      value={profileData.firstName}
                      onChange={(e) => setProfileData({ ...profileData, firstName: e.target.value })}
                    />
                    <Input
                      label="Nom"
                      value={profileData.lastName}
                      onChange={(e) => setProfileData({ ...profileData, lastName: e.target.value })}
                    />
                    <Input
                      label="Email"
                      type="email"
                      value={profileData.email}
                      onChange={(e) => setProfileData({ ...profileData, email: e.target.value })}
                    />
                    <Input
                      label="Téléphone"
                      value={profileData.phone}
                      onChange={(e) => setProfileData({ ...profileData, phone: e.target.value })}
                    />
                  </div>

                  <Input
                    label="Agence"
                    value={profileData.branch}
                    disabled
                  />
                </CardContent>
              </Card>

              <div className="flex justify-end">
                <Button 
                  variant="primary" 
                  leftIcon={Save}
                  onClick={handleSave}
                  disabled={saveStatus === 'saving'}
                >
                  {saveStatus === 'saving' ? 'Enregistrement...' : saveStatus === 'saved' ? 'Enregistré !' : 'Enregistrer'}
                </Button>
              </div>
            </div>
          )}

          {/* Security Tab */}
          {activeTab === 'security' && (
            <div className="space-y-6 animate-in fade-in duration-300">
              <Card className="border-0 shadow-lg">
                <CardHeader className="border-b border-gray-100">
                  <CardTitle className="flex items-center gap-2">
                    <Lock className="w-5 h-5 text-[#1877F2]" />
                    Changer le Mot de Passe
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6 space-y-4">
                  <div className="relative">
                    <Input
                      label="Mot de passe actuel"
                      type={showPassword ? 'text' : 'password'}
                      value={securityData.currentPassword}
                      onChange={(e) => setSecurityData({ ...securityData, currentPassword: e.target.value })}
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-9 text-gray-400 hover:text-gray-600"
                    >
                      {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </button>
                  </div>
                  <Input
                    label="Nouveau mot de passe"
                    type="password"
                    value={securityData.newPassword}
                    onChange={(e) => setSecurityData({ ...securityData, newPassword: e.target.value })}
                  />
                  <Input
                    label="Confirmer le mot de passe"
                    type="password"
                    value={securityData.confirmPassword}
                    onChange={(e) => setSecurityData({ ...securityData, confirmPassword: e.target.value })}
                  />
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardHeader className="border-b border-gray-100">
                  <CardTitle className="flex items-center gap-2">
                    <Shield className="w-5 h-5 text-[#1877F2]" />
                    Authentification à Deux Facteurs
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-semibold text-gray-900">Activer 2FA</h4>
                      <p className="text-sm text-gray-500">Ajoutez une couche de sécurité supplémentaire</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={securityData.twoFactorEnabled}
                        onChange={(e) => setSecurityData({ ...securityData, twoFactorEnabled: e.target.checked })}
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#1877F2]"></div>
                    </label>
                  </div>
                </CardContent>
              </Card>

              <div className="flex justify-end">
                <Button variant="primary" leftIcon={Save} onClick={handleSave}>
                  Enregistrer
                </Button>
              </div>
            </div>
          )}

          {/* Notifications Tab */}
          {activeTab === 'notifications' && (
            <div className="space-y-6 animate-in fade-in duration-300">
              <Card className="border-0 shadow-lg">
                <CardHeader className="border-b border-gray-100">
                  <CardTitle className="flex items-center gap-2">
                    <Bell className="w-5 h-5 text-[#1877F2]" />
                    Canaux de Notification
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6 space-y-4">
                  {[
                    { key: 'emailNotifications', label: 'Notifications par Email', icon: Mail },
                    { key: 'pushNotifications', label: 'Notifications Push', icon: Monitor },
                    { key: 'smsNotifications', label: 'Notifications SMS', icon: Smartphone },
                  ].map((item) => {
                    const Icon = item.icon;
                    return (
                      <div key={item.key} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                        <div className="flex items-center gap-3">
                          <Icon className="w-5 h-5 text-gray-600" />
                          <span className="font-medium text-gray-900">{item.label}</span>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input
                            type="checkbox"
                            checked={notificationSettings[item.key as keyof typeof notificationSettings] as boolean}
                            onChange={(e) => setNotificationSettings({ ...notificationSettings, [item.key]: e.target.checked })}
                            className="sr-only peer"
                          />
                          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#1877F2]"></div>
                        </label>
                      </div>
                    );
                  })}
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardHeader className="border-b border-gray-100">
                  <CardTitle className="flex items-center gap-2">
                    <AlertCircle className="w-5 h-5 text-[#1877F2]" />
                    Types de Notifications
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6 space-y-4">
                  {[
                    { key: 'newEvents', label: 'Nouveaux événements', icon: Calendar },
                    { key: 'newMembers', label: 'Nouveaux membres', icon: Users },
                    { key: 'productUpdates', label: 'Mises à jour produits', icon: Package },
                    { key: 'systemAlerts', label: 'Alertes système', icon: AlertCircle },
                  ].map((item) => {
                    const Icon = item.icon;
                    return (
                      <div key={item.key} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                        <div className="flex items-center gap-3">
                          <Icon className="w-5 h-5 text-gray-600" />
                          <span className="font-medium text-gray-900">{item.label}</span>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input
                            type="checkbox"
                            checked={notificationSettings[item.key as keyof typeof notificationSettings] as boolean}
                            onChange={(e) => setNotificationSettings({ ...notificationSettings, [item.key]: e.target.checked })}
                            className="sr-only peer"
                          />
                          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#1877F2]"></div>
                        </label>
                      </div>
                    );
                  })}
                </CardContent>
              </Card>

              <div className="flex justify-end">
                <Button variant="primary" leftIcon={Save} onClick={handleSave}>
                  Enregistrer
                </Button>
              </div>
            </div>
          )}

          {/* Appearance Tab */}
          {activeTab === 'appearance' && (
            <div className="space-y-6 animate-in fade-in duration-300">
              <Card className="border-0 shadow-lg">
                <CardHeader className="border-b border-gray-100">
                  <CardTitle className="flex items-center gap-2">
                    <Palette className="w-5 h-5 text-[#1877F2]" />
                    Thème et Affichage
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6 space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">Thème</label>
                    <div className="grid grid-cols-2 gap-4">
                      {[
                        { value: 'light', label: 'Clair', icon: '☀️' },
                        { value: 'dark', label: 'Sombre', icon: '🌙' },
                      ].map((theme) => (
                        <button
                          key={theme.value}
                          onClick={() => setAppearanceSettings({ ...appearanceSettings, theme: theme.value })}
                          className={`p-4 rounded-lg border-2 transition-all ${
                            appearanceSettings.theme === theme.value
                              ? 'border-[#1877F2] bg-blue-50'
                              : 'border-gray-200 hover:border-gray-300'
                          }`}
                        >
                          <div className="text-3xl mb-2">{theme.icon}</div>
                          <div className="font-medium">{theme.label}</div>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">Langue</label>
                    <select
                      value={appearanceSettings.language}
                      onChange={(e) => setAppearanceSettings({ ...appearanceSettings, language: e.target.value })}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:border-[#1877F2] focus:ring-4 focus:ring-blue-500/10 outline-none"
                    >
                      <option value="fr">Français</option>
                      <option value="en">English</option>
                    </select>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-3">Format de date</label>
                      <select
                        value={appearanceSettings.dateFormat}
                        onChange={(e) => setAppearanceSettings({ ...appearanceSettings, dateFormat: e.target.value })}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:border-[#1877F2] focus:ring-4 focus:ring-blue-500/10 outline-none"
                      >
                        <option value="DD/MM/YYYY">DD/MM/YYYY</option>
                        <option value="MM/DD/YYYY">MM/DD/YYYY</option>
                        <option value="YYYY-MM-DD">YYYY-MM-DD</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-3">Format d&apos;heure</label>
                      <select
                        value={appearanceSettings.timeFormat}
                        onChange={(e) => setAppearanceSettings({ ...appearanceSettings, timeFormat: e.target.value })}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:border-[#1877F2] focus:ring-4 focus:ring-blue-500/10 outline-none"
                      >
                        <option value="24h">24 heures</option>
                        <option value="12h">12 heures (AM/PM)</option>
                      </select>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="flex justify-end">
                <Button variant="primary" leftIcon={Save} onClick={handleSave}>
                  Enregistrer
                </Button>
              </div>
            </div>
          )}

          {/* Organization Tab */}
          {activeTab === 'organization' && (
            <div className="space-y-6 animate-in fade-in duration-300">
              <Card className="border-0 shadow-lg">
                <CardHeader className="border-b border-gray-100">
                  <CardTitle className="flex items-center gap-2">
                    <Building2 className="w-5 h-5 text-[#1877F2]" />
                    Informations de l&apos;Organisation
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6 space-y-4">
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <div className="flex items-start gap-3">
                      <Info className="w-5 h-5 text-blue-600 mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-blue-900">Paramètres réservés</h4>
                        <p className="text-sm text-blue-700 mt-1">
                          Ces paramètres sont réservés aux super-administrateurs du siège national.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3 opacity-50 pointer-events-none">
                    <Input label="Nom de l'organisation" value="Union Générale des Agents Techniques et Économiques" disabled />
                    <Input label="Sigle" value="UGATE" disabled />
                    <Input label="Siège social" value="Yaoundé, Cameroun" disabled />
                    <Input label="Email officiel" value="contact@ugate.cm" disabled />
                    <Input label="Téléphone" value="+237 6 70 00 00 00" disabled />
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {/* Data Tab */}
          {activeTab === 'data' && (
            <div className="space-y-6 animate-in fade-in duration-300">
              <Card className="border-0 shadow-lg">
                <CardHeader className="border-b border-gray-100">
                  <CardTitle className="flex items-center gap-2">
                    <Database className="w-5 h-5 text-[#1877F2]" />
                    Gestion des Données
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6 space-y-4">
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-semibold text-gray-900">Exporter mes données</h4>
                        <p className="text-sm text-gray-500">Téléchargez toutes vos données personnelles</p>
                      </div>
                      <Button variant="outline" size="sm" leftIcon={FileText}>
                        Exporter
                      </Button>
                    </div>
                  </div>

                  <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-semibold text-red-900">Supprimer mon compte</h4>
                        <p className="text-sm text-red-700">Cette action est irréversible</p>
                      </div>
                      <Button variant="outline" size="sm" className="text-red-600 border-red-300 hover:bg-red-100">
                        Supprimer
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardHeader className="border-b border-gray-100">
                  <CardTitle className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#1877F2]" />
                    Confidentialité
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div>
                        <h4 className="font-medium text-gray-900">Profil public</h4>
                        <p className="text-sm text-gray-500">Permettre aux autres membres de voir votre profil</p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" defaultChecked className="sr-only peer" />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#1877F2]"></div>
                      </label>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

```

---

### `components\ui\Badge.tsx`

<a id="components-ui-Badgetsx"></a>

> 📊 **Stats:** 29 lignes | 959 B

```tsx
import React from 'react';

type Variant = 'default' | 'success' | 'warning' | 'error' | 'outline' | 'info';

interface BadgeProps {
  children: React.ReactNode;
  variant?: Variant;
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({ children, variant = 'default', className = '' }) => {
  const baseStyles = "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border transition-colors";
  
  const variants = {
    default: "bg-gray-100 text-gray-800 border-gray-200",
    success: "bg-emerald-50 text-emerald-700 border-emerald-200",
    warning: "bg-amber-50 text-amber-700 border-amber-200",
    error: "bg-red-50 text-red-700 border-red-200",
    info: "bg-blue-50 text-[#1877F2] border-blue-200",
    outline: "bg-transparent border-gray-300 text-gray-600"
  };

  return (
    <span className={`${baseStyles} ${variants[variant]} ${className}`}>
      {children}
    </span>
  );
};

```

---

### `components\ui\Button.tsx`

<a id="components-ui-Buttontsx"></a>

> 📊 **Stats:** 58 lignes | 2.26 KB

```tsx
import React from 'react';
import { Loader2 } from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline' | 'destructive';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
  leftIcon?: React.ElementType;
}

export const Button: React.FC<ButtonProps> = ({
                                                children,
                                                variant = 'primary',
                                                size = 'md',
                                                isLoading = false,
                                                leftIcon: LeftIcon,
                                                className,
                                                disabled,
                                                ...props
                                              }) => {
  const variants = {
    primary: "bg-primary text-white hover:bg-primary/90 shadow-lg shadow-primary/20",
    secondary: "bg-white text-foreground border border-gray-200 hover:bg-gray-50 shadow-sm",
    ghost: "bg-transparent text-foreground hover:bg-gray-100",
    outline: "bg-transparent border border-border text-foreground hover:bg-gray-50",
    destructive: "bg-destructive text-white hover:bg-destructive/90 shadow-sm",
  };

  const sizes = {
    sm: "h-9 px-3 text-xs",
    md: "h-11 px-6 text-sm",
    lg: "h-14 px-8 text-base",
  };

  return (
      <motion.button
          whileTap={{ scale: 0.98 }}
          className={cn(
              "inline-flex items-center justify-center font-semibold rounded-[var(--radius)] transition-all duration-200",
              "disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-primary/20",
              variants[variant],
              sizes[size],
              className
          )}
          disabled={disabled || isLoading}
          {...props}
      >
        {isLoading ? (
            <Loader2 className="w-4 h-4 animate-spin mr-2" />
        ) : LeftIcon ? (
            <LeftIcon className="w-4 h-4 mr-2" />
        ) : null}
        {children}
      </motion.button>
  );
};
```

---

### `components\ui\Card.tsx`

<a id="components-ui-Cardtsx"></a>

> 📊 **Stats:** 43 lignes | 1.26 KB

```tsx
import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export const Card: React.FC<CardProps> = ({ children, className = '', onClick }) => {
  return (
    <div 
      onClick={onClick}
      className={`bg-white rounded-xl border border-gray-200 shadow-sm transition-all duration-200 ${onClick ? 'cursor-pointer hover:-translate-y-1 hover:shadow-md hover:border-gray-300' : ''} ${className}`}
    >
      {children}
    </div>
  );
};

export const CardHeader: React.FC<CardProps> = ({ children, className = '' }) => (
  <div className={`p-6 pb-4 border-b border-gray-100 ${className}`}>
    {children}
  </div>
);

export const CardTitle: React.FC<CardProps> = ({ children, className = '' }) => (
  <h3 className={`text-lg font-semibold text-gray-900 ${className}`}>
    {children}
  </h3>
);

export const CardContent: React.FC<CardProps> = ({ children, className = '' }) => (
  <div className={`p-6 ${className}`}>
    {children}
  </div>
);

export const CardFooter: React.FC<CardProps> = ({ children, className = '' }) => (
  <div className={`p-4 px-6 border-t border-gray-100 bg-gray-50/50 rounded-b-xl flex items-center ${className}`}>
    {children}
  </div>
);

```

---

### `components\ui\Input.tsx`

<a id="components-ui-Inputtsx"></a>

> 📊 **Stats:** 71 lignes | 2.79 KB

```tsx
import React from 'react';
import { cn } from '@/lib/utils';

// --- Composant Input ---

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    error?: string;
    icon?: React.ElementType;
}

export const Input: React.FC<InputProps> = ({ label, error, icon: Icon, className, ...props }) => {
    return (
        <div className="w-full space-y-1.5">
            {label && (
                <label className="text-sm font-medium text-gray-700 ml-1">
                    {label}
                </label>
            )}
            <div className="relative group">
                {Icon && (
                    <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#1877F2] transition-colors">
                        <Icon className="w-5 h-5" />
                    </div>
                )}
                <input
                    className={cn(
                        "flex h-11 w-full rounded-xl border border-gray-200 bg-white px-4 py-2 text-sm transition-all duration-200",
                        "placeholder:text-gray-400 focus:border-[#1877F2] focus:ring-4 focus:ring-[#1877F2]/5 focus:outline-none",
                        "disabled:cursor-not-allowed disabled:opacity-50",
                        Icon && "pl-10",
                        error && "border-red-500 focus:border-red-500 focus:ring-red-500/5",
                        className
                    )}
                    {...props}
                />
            </div>
            {error && <p className="text-xs text-red-500 ml-1">{error}</p>}
        </div>
    );
};

// --- Composant TextArea ---

interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    label?: string;
    error?: string;
}

export const TextArea: React.FC<TextAreaProps> = ({ label, error, className, ...props }) => {
    return (
        <div className="w-full space-y-1.5">
            {label && (
                <label className="text-sm font-medium text-gray-700 ml-1">
                    {label}
                </label>
            )}
            <textarea
                className={cn(
                    "flex min-h-[80px] w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm transition-all duration-200",
                    "placeholder:text-gray-400 focus:border-[#1877F2] focus:ring-4 focus:ring-[#1877F2]/5 focus:outline-none",
                    "disabled:cursor-not-allowed disabled:opacity-50 resize-y",
                    error && "border-red-500 focus:border-red-500 focus:ring-red-500/5",
                    className
                )}
                {...props}
            />
            {error && <p className="text-xs text-red-500 ml-1">{error}</p>}
        </div>
    );
};
```

---

### `generate.js`

<a id="generatejs"></a>

> 📊 **Stats:** 468 lignes | 15.13 KB

```javascript
#!/usr/bin/env node

/**
 * 🚀 Générateur de Contexte de Projet pour IA
 *
 * Ce script analyse votre projet Next.js et génère un document markdown complet
 * contenant toute la structure et le code source, optimisé pour être donné aux IA.
 *
 * Usage: node generate-project-context.js
 */

const fs = require('fs');
const path = require('path');

// ============================================================================
// CONFIGURATION
// ============================================================================

const CONFIG = {
    // Fichiers et dossiers à ignorer
    IGNORED_PATHS: [
        'node_modules',
        '.next',
        '.git',
        '.idea',
        'dist',
        'build',
        'coverage',
        '.cache',
        'out',
        '.turbo',
        '.vercel'
    ],

    // Extensions de fichiers à inclure
    INCLUDED_EXTENSIONS: [
        // Code source
        '.js', '.jsx', '.ts', '.tsx',
        // Styles
        '.css', '.scss', '.sass', '.less',
        // Config
        '.json', '.config.js', '.config.ts',
        // Documentation
        '.md', '.mdx',
        // Autres
        '.env.example', '.env.local.example'
    ],

    // Fichiers importants à toujours inclure
    PRIORITY_FILES: [
        'package.json',
        'package-lock.json',
        'tsconfig.json',
        'next.config.js',
        'next.config.ts',
        'tailwind.config.js',
        'tailwind.config.ts',
        'postcss.config.js',
        'eslint.config.js',
        '.eslintrc.json',
        'README.md',
        '.env.example',
        'middleware.js',
        'middleware.ts'
    ],

    // Taille maximale d'un fichier (en octets) - 500KB
    MAX_FILE_SIZE: 500 * 1024,

    // Nom du fichier de sortie
    OUTPUT_FILE: 'PROJECT_CONTEXT.md'
};

// ============================================================================
// UTILITAIRES
// ============================================================================

class ContextGenerator {
    constructor() {
        this.projectRoot = process.cwd();
        this.stats = {
            totalFiles: 0,
            totalLines: 0,
            filesByType: {},
            skippedFiles: []
        };
    }

    /**
     * Vérifie si un chemin doit être ignoré
     */
    shouldIgnore(filePath) {
        const relativePath = path.relative(this.projectRoot, filePath);
        return CONFIG.IGNORED_PATHS.some(ignored =>
            relativePath.includes(ignored) || relativePath.startsWith(ignored)
        );
    }

    /**
     * Vérifie si un fichier doit être inclus
     */
    shouldInclude(filePath) {
        const ext = path.extname(filePath);
        const basename = path.basename(filePath);

        // Toujours inclure les fichiers prioritaires
        if (CONFIG.PRIORITY_FILES.includes(basename)) {
            return true;
        }

        // Inclure selon l'extension
        return CONFIG.INCLUDED_EXTENSIONS.includes(ext);
    }

    /**
     * Récupère tous les fichiers du projet récursivement
     */
    getAllFiles(dirPath, arrayOfFiles = []) {
        const files = fs.readdirSync(dirPath);

        files.forEach(file => {
            const fullPath = path.join(dirPath, file);

            if (this.shouldIgnore(fullPath)) {
                return;
            }

            if (fs.statSync(fullPath).isDirectory()) {
                arrayOfFiles = this.getAllFiles(fullPath, arrayOfFiles);
            } else if (this.shouldInclude(fullPath)) {
                arrayOfFiles.push(fullPath);
            }
        });

        return arrayOfFiles;
    }

    /**
     * Lit le contenu d'un fichier avec gestion d'erreur
     */
    readFileContent(filePath) {
        try {
            const stats = fs.statSync(filePath);

            if (stats.size > CONFIG.MAX_FILE_SIZE) {
                this.stats.skippedFiles.push({
                    path: filePath,
                    reason: 'Trop volumineux',
                    size: this.formatFileSize(stats.size)
                });
                return null;
            }

            const content = fs.readFileSync(filePath, 'utf8');
            const lines = content.split('\n').length;
            this.stats.totalLines += lines;

            return content;
        } catch (error) {
            this.stats.skippedFiles.push({
                path: filePath,
                reason: `Erreur: ${error.message}`
            });
            return null;
        }
    }

    /**
     * Détermine le langage pour le bloc de code markdown
     */
    getLanguage(filePath) {
        const ext = path.extname(filePath);
        const languageMap = {
            '.js': 'javascript',
            '.jsx': 'jsx',
            '.ts': 'typescript',
            '.tsx': 'tsx',
            '.json': 'json',
            '.css': 'css',
            '.scss': 'scss',
            '.sass': 'sass',
            '.md': 'markdown',
            '.mdx': 'mdx',
            '.html': 'html',
            '.env.example': 'bash',
            '.config.js': 'javascript',
            '.config.ts': 'typescript'
        };

        return languageMap[ext] || 'text';
    }

    /**
     * Formate la taille d'un fichier
     */
    formatFileSize(bytes) {
        if (bytes < 1024) return bytes + ' B';
        if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(2) + ' KB';
        return (bytes / (1024 * 1024)).toFixed(2) + ' MB';
    }

    /**
     * Génère la table des matières
     */
    generateTableOfContents(filesByCategory) {
        let toc = '## 📚 Table des Matières\n\n';

        Object.keys(filesByCategory).forEach(category => {
            const files = filesByCategory[category];
            toc += `- [${category}](#${category.toLowerCase().replace(/\s+/g, '-')})\n`;
            files.forEach(file => {
                const relativePath = path.relative(this.projectRoot, file);
                const anchor = relativePath.replace(/[\/\\]/g, '-').replace(/\./g, '');
                toc += `  - [${relativePath}](#${anchor})\n`;
            });
        });

        return toc + '\n---\n\n';
    }

    /**
     * Catégorise les fichiers
     */
    categorizeFiles(files) {
        const categories = {
            '📦 Configuration': [],
            '🎯 Pages & Routes': [],
            '🧩 Composants': [],
            '⚙️ Services & API': [],
            '🎨 Styles': [],
            '📘 Types & Constantes': [],
            '🔧 Utilitaires': [],
            '📝 Documentation': [],
            '🔐 Environnement': [],
            '📄 Autres': []
        };

        files.forEach(file => {
            const relativePath = path.relative(this.projectRoot, file);
            const basename = path.basename(file);
            const ext = path.extname(file);

            // Catégorisation
            if (CONFIG.PRIORITY_FILES.includes(basename)) {
                categories['📦 Configuration'].push(file);
            } else if (relativePath.includes('/app/') || relativePath.includes('/pages/')) {
                categories['🎯 Pages & Routes'].push(file);
            } else if (relativePath.includes('/components/')) {
                categories['🧩 Composants'].push(file);
            } else if (relativePath.includes('/lib/services/') || relativePath.includes('/api/')) {
                categories['⚙️ Services & API'].push(file);
            } else if (['.css', '.scss', '.sass'].includes(ext)) {
                categories['🎨 Styles'].push(file);
            } else if (relativePath.includes('/lib/types/') || relativePath.includes('/lib/constants/')) {
                categories['📘 Types & Constantes'].push(file);
            } else if (relativePath.includes('/lib/') || relativePath.includes('/utils/')) {
                categories['🔧 Utilitaires'].push(file);
            } else if (ext === '.md' || ext === '.mdx') {
                categories['📝 Documentation'].push(file);
            } else if (basename.includes('.env')) {
                categories['🔐 Environnement'].push(file);
            } else {
                categories['📄 Autres'].push(file);
            }

            // Stats par type
            this.stats.filesByType[ext] = (this.stats.filesByType[ext] || 0) + 1;
        });

        // Supprimer les catégories vides
        Object.keys(categories).forEach(key => {
            if (categories[key].length === 0) {
                delete categories[key];
            }
        });

        return categories;
    }

    /**
     * Génère le contenu markdown pour un fichier
     */
    generateFileSection(filePath) {
        const relativePath = path.relative(this.projectRoot, filePath);
        const content = this.readFileContent(filePath);

        if (!content) {
            return '';
        }

        const language = this.getLanguage(filePath);
        const anchor = relativePath.replace(/[\/\\]/g, '-').replace(/\./g, '');
        const lines = content.split('\n').length;

        let section = `### \`${relativePath}\`\n\n`;
        section += `<a id="${anchor}"></a>\n\n`;
        section += `> 📊 **Stats:** ${lines} lignes | ${this.formatFileSize(content.length)}\n\n`;
        section += `\`\`\`${language}\n${content}\n\`\`\`\n\n`;
        section += `---\n\n`;

        this.stats.totalFiles++;

        return section;
    }

    /**
     * Génère le header du document
     */
    generateHeader() {
        const projectName = path.basename(this.projectRoot);
        const date = new Date().toLocaleString('fr-FR', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });

        return `# 🚀 Contexte de Projet: ${projectName}

> **Généré automatiquement le:** ${date}
> 
> **Type de projet:** Next.js + TypeScript
> 
> **But:** Fournir un contexte complet pour les assistants IA

---

## 📊 Vue d'ensemble du projet

Ce document contient l'intégralité du code source et de la structure de votre projet.
Il est optimisé pour être utilisé comme contexte par des assistants IA (ChatGPT, Claude, etc.).

### 🎯 Comment utiliser ce document

1. **Copier-coller** l'intégralité dans votre conversation avec l'IA
2. **Préciser** votre demande après avoir fourni le contexte
3. L'IA aura une **vision complète** de votre projet

---

`;
    }

    /**
     * Génère les statistiques finales
     */
    generateStats() {
        let stats = `## 📈 Statistiques du Projet\n\n`;
        stats += `| Métrique | Valeur |\n`;
        stats += `|----------|--------|\n`;
        stats += `| **Total de fichiers analysés** | ${this.stats.totalFiles} |\n`;
        stats += `| **Total de lignes de code** | ${this.stats.totalLines.toLocaleString('fr-FR')} |\n`;

        stats += `\n### 📂 Répartition par type de fichier\n\n`;
        stats += `| Extension | Nombre |\n`;
        stats += `|-----------|--------|\n`;

        Object.entries(this.stats.filesByType)
            .sort((a, b) => b[1] - a[1])
            .forEach(([ext, count]) => {
                stats += `| ${ext || 'sans extension'} | ${count} |\n`;
            });

        if (this.stats.skippedFiles.length > 0) {
            stats += `\n### ⚠️ Fichiers ignorés (${this.stats.skippedFiles.length})\n\n`;
            stats += `| Fichier | Raison |\n`;
            stats += `|---------|--------|\n`;

            this.stats.skippedFiles.forEach(({ path: filePath, reason, size }) => {
                const relativePath = path.relative(this.projectRoot, filePath);
                stats += `| \`${relativePath}\` | ${reason}${size ? ` (${size})` : ''} |\n`;
            });
        }

        return stats + '\n---\n\n';
    }

    /**
     * Génère le contexte complet
     */
    async generate() {
        console.log('🔍 Analyse du projet en cours...\n');

        // Récupérer tous les fichiers
        const allFiles = this.getAllFiles(this.projectRoot);
        console.log(`📁 ${allFiles.length} fichiers trouvés\n`);

        // Catégoriser les fichiers
        const filesByCategory = this.categorizeFiles(allFiles);

        // Générer le document
        let markdown = '';
        markdown += this.generateHeader();
        markdown += this.generateStats();
        markdown += this.generateTableOfContents(filesByCategory);

        // Générer le contenu pour chaque catégorie
        Object.entries(filesByCategory).forEach(([category, files]) => {
            console.log(`📝 Traitement: ${category} (${files.length} fichiers)`);

            markdown += `## ${category}\n\n`;
            markdown += `> ${files.length} fichier(s)\n\n`;

            files.forEach(file => {
                markdown += this.generateFileSection(file);
            });
        });

        // Footer
        markdown += `\n---\n\n`;
        markdown += `## ✅ Fin du Contexte\n\n`;
        markdown += `> Ce document a été généré automatiquement.\n`;
        markdown += `> Pour toute question ou modification, référez-vous au projet source.\n\n`;
        markdown += `**Bonne utilisation avec votre IA ! 🤖**\n`;

        // Écrire le fichier
        const outputPath = path.join(this.projectRoot, CONFIG.OUTPUT_FILE);
        fs.writeFileSync(outputPath, markdown, 'utf8');

        console.log(`\n✅ Contexte généré avec succès !\n`);
        console.log(`📄 Fichier: ${CONFIG.OUTPUT_FILE}`);
        console.log(`📊 Statistiques:`);
        console.log(`   - ${this.stats.totalFiles} fichiers inclus`);
        console.log(`   - ${this.stats.totalLines.toLocaleString('fr-FR')} lignes de code`);
        console.log(`   - ${this.formatFileSize(markdown.length)} de texte généré`);

        if (this.stats.skippedFiles.length > 0) {
            console.log(`   - ${this.stats.skippedFiles.length} fichiers ignorés`);
        }

        console.log(`\n🚀 Vous pouvez maintenant partager ${CONFIG.OUTPUT_FILE} avec votre IA !\n`);

        return outputPath;
    }
}

// ============================================================================
// EXÉCUTION
// ============================================================================

if (require.main === module) {
    console.log(`
╔════════════════════════════════════════════════════════════════╗
║                                                                ║
║   🤖 GÉNÉRATEUR DE CONTEXTE DE PROJET POUR IA                  ║
║                                                                ║
║   Analyse votre projet Next.js et génère un document          ║
║   markdown complet pour vos assistants IA                     ║
║                                                                ║
╚════════════════════════════════════════════════════════════════╝
  `);

    const generator = new ContextGenerator();

    generator.generate()
        .then(() => {
            process.exit(0);
        })
        .catch(error => {
            console.error('\n❌ Erreur lors de la génération:', error.message);
            console.error(error.stack);
            process.exit(1);
        });
}

module.exports = ContextGenerator;
```

---

### `lib\constants\branches.ts`

<a id="lib-constants-branchests"></a>

> 📊 **Stats:** 98 lignes | 2.62 KB

```typescript
/**
 * Constantes pour les Branches du Syndicat
 * 
 * Liste des agences régionales du syndicat UGATE
 * Chaque branche est une succursale géographique du même syndicat national
 */

import { Branch } from '@/lib/types/events';

/**
 * Liste des branches (agences régionales) du syndicat
 * Toutes les branches défendent les mêmes intérêts et ont le même fonctionnement
 * Elles se différencient uniquement par leur localisation et leur responsable
 */
export const BRANCHES: Branch[] = [
  {
    id: '11c24c4-bc4c-9876-5432-10fcdcb40b7e',
    name: 'Agence de Yaoundé',
    description: 'Branche régionale du Centre',
    location: 'Yaoundé',
    director: {
      name: 'Dr. Marie Kouam',
      email: 'marie.kouam@ugate.cm',
      phone: '+237 6 70 00 00 01'
    }
  },
  {
    id: '22d35e5-cd5d-8765-4321-20ecdcb50c8f',
    name: 'Agence de Douala',
    description: 'Branche régionale du Littoral',
    location: 'Douala',
    director: {
      name: 'Prof. Jean Mbarga',
      email: 'jean.mbarga@ugate.cm',
      phone: '+237 6 70 00 00 02'
    }
  },
  {
    id: '33e46f6-de6e-7654-3210-30fcdcb60d9g',
    name: 'Agence de Bafoussam',
    description: 'Branche régionale de l\'Ouest',
    location: 'Bafoussam',
    director: {
      name: 'M. Paul Nkeng',
      email: 'paul.nkeng@ugate.cm',
      phone: '+237 6 70 00 00 03'
    }
  },
  {
    id: '44f57g7-ef7f-6543-2109-40gcdcb70e0h',
    name: 'Agence de Garoua',
    description: 'Branche régionale du Nord',
    location: 'Garoua',
    director: {
      name: 'Mme. Fatima Alim',
      email: 'fatima.alim@ugate.cm',
      phone: '+237 6 70 00 00 04'
    }
  },
  {
    id: '55g68h8-fg8g-5432-1098-50hcdcb80f1i',
    name: 'Agence de Limbé',
    description: 'Branche régionale du Sud-Ouest',
    location: 'Limbé',
    director: {
      name: 'M. Thomas Ekani',
      email: 'thomas.ekani@ugate.cm',
      phone: '+237 6 70 00 00 05'
    }
  },
  {
    id: '66h79i9-gh9h-4321-0987-60icdcb90g2j',
    name: 'Agence de Maroua',
    description: 'Branche régionale de l\'Extrême-Nord',
    location: 'Maroua',
    director: {
      name: 'M. Ibrahim Hamadou',
      email: 'ibrahim.hamadou@ugate.cm',
      phone: '+237 6 70 00 00 06'
    }
  }
];

/**
 * Récupérer une branche par son ID
 */
export function getBranchById(branchId: string): Branch | undefined {
  return BRANCHES.find(branch => branch.id === branchId);
}

/**
 * Récupérer le nom d'une branche par son ID
 */
export function getBranchName(branchId: string): string {
  const branch = getBranchById(branchId);
  return branch?.name || 'Branche inconnue';
}

```

---

### `lib\constants\mockEvents.ts`

<a id="lib-constants-mockEventsts"></a>

> 📊 **Stats:** 187 lignes | 6.75 KB

```typescript
/**
 * Événements fictifs pour le développement et les tests
 * Ces données permettent de tester l'interface avant la création de vrais événements via l'API
 */

import { EventItem } from '@/lib/types/events';

/**
 * Événements fictifs par branche
 */
export const MOCK_EVENTS: Record<string, EventItem[]> = {
  // Agence de Yaoundé
  '11c24c4-bc4c-9876-5432-10fcdcb40b7e': [
    {
      id: 'evt-yaounde-1',
      creatorId: 'user-1',
      branchId: '11c24c4-bc4c-9876-5432-10fcdcb40b7e',
      title: 'Assemblée Générale Annuelle 2026',
      description: 'Réunion annuelle de tous les membres pour discuter des orientations stratégiques et élire le nouveau bureau.',
      location: 'Hôtel Hilton Yaoundé',
      date: '2026-02-15',
      startTime: '09:00',
      endTime: '17:00',
      createdAt: '2026-01-10T10:00:00.000Z',
      updatedAt: '2026-01-10T10:00:00.000Z',
      participantCount: 156,
      status: 'active',
      images: ['https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80']
    },
    {
      id: 'evt-yaounde-2',
      creatorId: 'user-1',
      branchId: '11c24c4-bc4c-9876-5432-10fcdcb40b7e',
      title: 'Formation sur les Droits des Travailleurs',
      description: 'Session de formation intensive sur les droits fondamentaux des travailleurs et les procédures de réclamation.',
      location: 'Siège UGATE Yaoundé',
      date: '2026-01-25',
      startTime: '14:00',
      endTime: '18:00',
      createdAt: '2026-01-08T14:30:00.000Z',
      updatedAt: '2026-01-08T14:30:00.000Z',
      participantCount: 45,
      status: 'active',
      images: ['https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&q=80']
    },
    {
      id: 'evt-yaounde-3',
      creatorId: 'user-1',
      branchId: '11c24c4-bc4c-9876-5432-10fcdcb40b7e',
      title: 'Journée Portes Ouvertes',
      description: 'Découvrez les activités du syndicat et rencontrez nos représentants. Inscription gratuite.',
      location: 'Place de la Réunification',
      date: '2026-03-10',
      startTime: '10:00',
      endTime: '16:00',
      createdAt: '2026-01-05T09:00:00.000Z',
      updatedAt: '2026-01-05T09:00:00.000Z',
      participantCount: 89,
      status: 'draft',
      images: ['https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&q=80']
    }
  ],
  
  // Agence de Douala
  '22d35e5-cd5d-8765-4321-20ecdcb50c8f': [
    {
      id: 'evt-douala-1',
      creatorId: 'user-2',
      branchId: '22d35e5-cd5d-8765-4321-20ecdcb50c8f',
      title: 'Conférence sur la Sécurité au Travail',
      description: 'Conférence animée par des experts en santé et sécurité au travail. Thèmes: prévention des accidents, équipements de protection.',
      location: 'Centre de Conférences Bonanjo',
      date: '2026-02-20',
      startTime: '08:30',
      endTime: '13:00',
      createdAt: '2026-01-12T11:00:00.000Z',
      updatedAt: '2026-01-12T11:00:00.000Z',
      participantCount: 120,
      status: 'active',
      images: ['https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800&q=80']
    },
    {
      id: 'evt-douala-2',
      creatorId: 'user-2',
      branchId: '22d35e5-cd5d-8765-4321-20ecdcb50c8f',
      title: 'Marche de Solidarité',
      description: 'Marche pacifique pour soutenir les droits des travailleurs et sensibiliser le public.',
      location: 'Boulevard de la Liberté',
      date: '2026-01-30',
      startTime: '07:00',
      endTime: '12:00',
      createdAt: '2026-01-09T08:00:00.000Z',
      updatedAt: '2026-01-09T08:00:00.000Z',
      participantCount: 234,
      status: 'active',
      images: ['https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=800&q=80']
    }
  ],
  
  // Agence de Bafoussam
  '33e46f6-de6e-7654-3210-30fcdcb60d9g': [
    {
      id: 'evt-bafoussam-1',
      creatorId: 'user-3',
      branchId: '33e46f6-de6e-7654-3210-30fcdcb60d9g',
      title: 'Atelier de Négociation Collective',
      description: 'Formation pratique sur les techniques de négociation collective et la représentation syndicale.',
      location: 'Salle Municipale de Bafoussam',
      date: '2026-02-05',
      startTime: '09:00',
      endTime: '15:00',
      createdAt: '2026-01-11T10:00:00.000Z',
      updatedAt: '2026-01-11T10:00:00.000Z',
      participantCount: 67,
      status: 'active',
      images: ['https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80']
    }
  ],
  
  // Agence de Garoua
  '44f57g7-ef7f-6543-2109-40gcdcb70e0h': [
    {
      id: 'evt-garoua-1',
      creatorId: 'user-4',
      branchId: '44f57g7-ef7f-6543-2109-40gcdcb70e0h',
      title: 'Séminaire sur la Protection Sociale',
      description: 'Discussion sur les systèmes de protection sociale et les avantages pour les travailleurs.',
      location: 'Hôtel Le Ribadou',
      date: '2026-02-28',
      startTime: '10:00',
      endTime: '16:00',
      createdAt: '2026-01-10T15:00:00.000Z',
      updatedAt: '2026-01-10T15:00:00.000Z',
      participantCount: 52,
      status: 'active',
      images: ['https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=800&q=80']
    }
  ],
  
  // Agence de Limbé
  '55g68h8-fg8g-5432-1098-50hcdcb80f1i': [
    {
      id: 'evt-limbe-1',
      creatorId: 'user-5',
      branchId: '55g68h8-fg8g-5432-1098-50hcdcb80f1i',
      title: 'Journée de Sensibilisation Environnementale',
      description: 'Sensibilisation sur les conditions de travail respectueuses de l\'environnement et le développement durable.',
      location: 'Plage de Limbé',
      date: '2026-03-15',
      startTime: '08:00',
      endTime: '14:00',
      createdAt: '2026-01-12T09:00:00.000Z',
      updatedAt: '2026-01-12T09:00:00.000Z',
      participantCount: 78,
      status: 'draft',
      images: ['https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&q=80']
    }
  ],
  
  // Agence de Maroua
  '66h79i9-gh9h-4321-0987-60icdcb90g2j': [
    {
      id: 'evt-maroua-1',
      creatorId: 'user-6',
      branchId: '66h79i9-gh9h-4321-0987-60icdcb90g2j',
      title: 'Forum sur l\'Emploi des Jeunes',
      description: 'Rencontre entre jeunes travailleurs et employeurs pour discuter des opportunités d\'emploi et de formation.',
      location: 'Centre Culturel de Maroua',
      date: '2026-02-12',
      startTime: '09:00',
      endTime: '17:00',
      createdAt: '2026-01-08T12:00:00.000Z',
      updatedAt: '2026-01-08T12:00:00.000Z',
      participantCount: 95,
      status: 'active',
      images: ['https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&q=80']
    }
  ]
};

/**
 * Récupérer les événements fictifs d'une branche
 */
export function getMockEventsByBranch(branchId: string): EventItem[] {
  return MOCK_EVENTS[branchId] || [];
}

```

---

### `lib\constants.ts`

<a id="lib-constantsts"></a>

> 📊 **Stats:** 190 lignes | 6.42 KB

```typescript
import { Event, Product, Service, Admission } from './types';

export const MOCK_EVENTS: Event[] = [
  {
    id: '1',
    title: 'Assemblée Générale Annuelle 2024',
    description: 'La réunion annuelle obligatoire pour tous les membres afin de discuter de l\'orientation stratégique.',
    date: '2024-06-15T09:00:00',
    location: 'Centre de Conférences Grand Hôtel',
    imageUrl: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=450&fit=crop',
    status: 'active',
    attendees: 142
  },
  {
    id: '2',
    title: 'Atelier: Négociation Moderne',
    description: 'Apprenez les tactiques clés pour une négociation collective réussie à l\'ère numérique.',
    date: '2024-07-02T14:00:00',
    location: 'Siège Social, Salle B',
    imageUrl: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=450&fit=crop',
    status: 'active',
    attendees: 45
  },
  {
    id: '3',
    title: 'Soirée Networking d\'Été',
    description: 'Une soirée décontractée pour se connecter avec des pairs de différents secteurs.',
    date: '2024-08-10T18:00:00',
    location: 'Rooftop Lounge',
    imageUrl: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&h=450&fit=crop',
    status: 'pending',
    attendees: 0
  },
  {
    id: '4',
    title: 'Formation Leadership',
    description: 'Développez vos compétences en leadership et gestion d\'équipe.',
    date: '2024-09-20T10:00:00',
    location: 'Campus Formation',
    imageUrl: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&h=450&fit=crop',
    status: 'active',
    attendees: 67
  }
];

export const MOCK_PRODUCTS: Product[] = [
  {
    id: '1',
    title: 'Manuel Officiel du Syndicat',
    price: 25.00,
    image: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=400&fit=crop',
    status: 'in_stock',
    sku: 'BK-2024-001',
    category: 'Livres'
  },
  {
    id: '2',
    title: 'Sweat à Capuche Bleu Marine',
    price: 45.00,
    image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&h=400&fit=crop',
    status: 'in_stock',
    sku: 'AP-HOOD-NV',
    category: 'Vêtements'
  },
  {
    id: '3',
    title: 'Pack Protection Juridique',
    price: 150.00,
    image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=400&h=400&fit=crop',
    status: 'out_of_stock',
    sku: 'SV-LEG-PK',
    category: 'Services'
  },
  {
    id: '4',
    title: 'Pin Membre Premium',
    price: 12.50,
    image: 'https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=400&h=400&fit=crop',
    status: 'in_stock',
    sku: 'AC-PIN-01',
    category: 'Accessoires'
  },
  {
    id: '5',
    title: 'T-Shirt Officiel',
    price: 22.00,
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop',
    status: 'in_stock',
    sku: 'AP-TSH-01',
    category: 'Vêtements'
  },
  {
    id: '6',
    title: 'Sac à Dos Professionnel',
    price: 65.00,
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop',
    status: 'in_stock',
    sku: 'AC-BAG-01',
    category: 'Accessoires'
  }
];

export const MOCK_SERVICES: Service[] = [
  {
    id: '1',
    title: 'Consultation Juridique',
    description: 'Accès direct à nos avocats spécialisés en droit du travail pour les griefs personnels.',
    price: '120 € / heure',
    images: ['https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=600&h=400&fit=crop'],
    features: ['Confidentiel', 'Conseil Expert', 'Révision Documents']
  },
  {
    id: '2',
    title: 'Coaching de Carrière',
    description: 'Sessions individuelles pour vous aider à naviguer votre parcours professionnel et négociations salariales.',
    price: 'À partir de 80 €',
    images: ['https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=400&fit=crop'],
    features: ['Audit CV', 'Préparation Entretien', 'Stratégie']
  },
  {
    id: '3',
    title: 'Formation Continue',
    description: 'Programmes de formation professionnelle pour développer vos compétences et progresser dans votre carrière.',
    price: '250 € / session',
    images: ['https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&h=400&fit=crop'],
    features: ['Certifié', 'Flexible', 'Support 24/7']
  }
];

export const MOCK_ADMISSIONS: Admission[] = [
  {
    id: '1',
    fullName: 'Sarah Jenkins',
    email: 'sarah.j@example.com',
    phone: '+33 1 23 45 67 89',
    company: 'TechFlow Solutions',
    position: 'Développeuse Senior',
    submittedAt: '2024-05-20',
    status: 'pending',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop',
    motivation: 'Je souhaite défendre de meilleures politiques de télétravail dans notre secteur.'
  },
  {
    id: '2',
    fullName: 'Michael Chen',
    email: 'm.chen@example.com',
    phone: '+33 1 98 76 54 32',
    company: 'Logistique Globale',
    position: 'Responsable Opérations',
    submittedAt: '2024-05-19',
    status: 'pending',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop',
    motivation: 'Je recherche un soutien juridique concernant les négociations contractuelles.'
  },
  {
    id: '3',
    fullName: 'Emily Rodriguez',
    email: 'emily.r@example.com',
    phone: '+33 1 45 67 89 01',
    company: 'Santé Municipale',
    position: 'Infirmière Praticienne',
    submittedAt: '2024-05-18',
    status: 'accepted',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop',
    motivation: 'Pour rejoindre le comité de négociation collective.'
  },
  {
    id: '4',
    fullName: 'Thomas Dubois',
    email: 'thomas.d@example.com',
    phone: '+33 1 34 56 78 90',
    company: 'Industries Modernes',
    position: 'Ingénieur Qualité',
    submittedAt: '2024-05-17',
    status: 'pending',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop',
    motivation: 'Améliorer les conditions de travail et la sécurité dans notre industrie.'
  }
];

export const CHART_DATA = [
  { name: 'Lun', active: 400, new: 240 },
  { name: 'Mar', active: 300, new: 139 },
  { name: 'Mer', active: 200, new: 980 },
  { name: 'Jeu', active: 278, new: 390 },
  { name: 'Ven', active: 189, new: 480 },
  { name: 'Sam', active: 239, new: 380 },
  { name: 'Dim', active: 349, new: 430 },
];

```

---

### `lib\contexts\AuthContext.tsx`

<a id="lib-contexts-AuthContexttsx"></a>

> 📊 **Stats:** 268 lignes | 7.27 KB

```tsx
/**
 * Contexte d'Authentification & Statut Syndicat
 *
 * Ce fichier gère :
 * 1. L'état d'authentification utilisateur (JWT)
 * 2. L'état du syndicat de l'utilisateur (Créé ? En attente ? Validé ?)
 */

'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode, useCallback } from 'react';
import {
  login as apiLogin,
  register as apiRegister,
  logout as apiLogout,
  getUserInfo,
  isAuthenticated as checkAuth,
  refreshAccessToken
} from '@/lib/services/auth.service';
import { apiGet } from '@/lib/services/api.client';
import { LoginCredentials, RegisterCredentials, UserInfo } from '@/lib/types/auth';

// --- Types ---

/**
 * Statut du syndicat de l'utilisateur courant.
 * Crucial pour diriger l'utilisateur vers le bon flux (Onboarding vs Dashboard).
 */
export interface UserSyndicateStatus {
  hasSyndicate: boolean;
  syndicateId?: string;
  // Mappe les booléens isApproved/isActive vers un état lisible
  status?: 'PENDING' | 'APPROVED' | 'REJECTED' | 'DEACTIVATED';
  syndicateName?: string;
}

/**
 * Interface de la réponse API pour un Syndicat (basé sur Swagger)
 */
interface SyndicateApiResponse {
  id: string;
  name: string;
  isApproved: boolean;
  isActive: boolean;
  // autres champs ignorés pour le contexte auth
}

/**
 * Interface du Contexte
 */
interface AuthContextType {
  // Auth de base
  isAuthenticated: boolean;
  isLoading: boolean;
  user: UserInfo | null;
  error: string | null;

  // Actions Auth
  login: (credentials: LoginCredentials) => Promise<void>;
  register: (credentials: RegisterCredentials) => Promise<void>;
  logout: () => void;
  checkAuthentication: () => void;

  // Gestion Syndicat
  syndicateStatus: UserSyndicateStatus | null;
  refreshSyndicateStatus: () => Promise<void>;
  isSyndicateLoading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// --- Provider ---

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  // États Auth
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState<UserInfo | null>(null);
  const [error, setError] = useState<string | null>(null);

  // États Syndicat
  const [syndicateStatus, setSyndicateStatus] = useState<UserSyndicateStatus | null>(null);
  const [isSyndicateLoading, setIsSyndicateLoading] = useState(false);

  /**
   * Vérifie et met à jour le statut du syndicat de l'utilisateur
   * Appelle l'endpoint /syndicates/mine
   */
  const refreshSyndicateStatus = useCallback(async () => {
    // Ne rien faire si pas connecté
    if (!checkAuth()) {
      setSyndicateStatus(null);
      return;
    }

    setIsSyndicateLoading(true);
    try {
      // Appel à l'API UGate
      const syndicates = await apiGet<SyndicateApiResponse[]>('https://ugate.pynfi.com/syndicates/mine');

      if (syndicates && syndicates.length > 0) {
        const mySyndicate = syndicates[0]; // On prend le premier (hypothèse: 1 user = 1 syndicat)

        // Logique de détermination du statut
        let computedStatus: UserSyndicateStatus['status'] = 'PENDING';

        if (mySyndicate.isApproved && mySyndicate.isActive) {
          computedStatus = 'APPROVED';
        } else if (mySyndicate.isApproved && !mySyndicate.isActive) {
          computedStatus = 'DEACTIVATED';
        } else if (!mySyndicate.isApproved) {
          computedStatus = 'PENDING';
        }

        setSyndicateStatus({
          hasSyndicate: true,
          syndicateId: mySyndicate.id,
          status: computedStatus,
          syndicateName: mySyndicate.name
        });

        console.log('🏢 Statut Syndicat:', computedStatus);
      } else {
        // Pas de syndicat trouvé
        setSyndicateStatus({ hasSyndicate: false });
        console.log('🏢 Aucun syndicat associé à ce compte');
      }
    } catch (err) {
      console.error("❌ Erreur récupération syndicat:", err);
      // En cas d'erreur API (ex: 404 ou 500), on assume pas de syndicat pour ne pas bloquer
      setSyndicateStatus({ hasSyndicate: false });
    } finally {
      setIsSyndicateLoading(false);
    }
  }, []);

  /**
   * Vérifier l'authentification au chargement
   */
  const checkAuthentication = useCallback(() => {
    const authenticated = checkAuth();
    setIsAuthenticated(authenticated);

    if (authenticated) {
      const userInfo = getUserInfo();
      setUser(userInfo);
      // Si authentifié, on lance la vérification du syndicat
      refreshSyndicateStatus();
    } else {
      setUser(null);
      setSyndicateStatus(null);
    }

    setIsLoading(false);
  }, [refreshSyndicateStatus]);

  /**
   * Connexion
   */
  const login = async (credentials: LoginCredentials): Promise<void> => {
    try {
      setIsLoading(true);
      setError(null);

      const response = await apiLogin(credentials);

      setIsAuthenticated(true);
      setUser(response.user);

      // Après login succès, vérifier immédiatement le statut syndicat
      await refreshSyndicateStatus();

    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Erreur de connexion';
      setError(errorMessage);
      setIsAuthenticated(false);
      setUser(null);
      setSyndicateStatus(null);
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  /**
   * Inscription
   */
  const register = async (credentials: RegisterCredentials): Promise<void> => {
    try {
      setIsLoading(true);
      setError(null);
      await apiRegister(credentials);
      // Note: Pas de login automatique, l'utilisateur doit se connecter
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Erreur d\'inscription';
      setError(errorMessage);
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  /**
   * Déconnexion
   */
  const logout = () => {
    apiLogout();
    setIsAuthenticated(false);
    setUser(null);
    setSyndicateStatus(null);
    setError(null);
  };

  /**
   * Effet initial
   */
  useEffect(() => {
    checkAuthentication();
  }, [checkAuthentication]);

  /**
   * Rafraîchissement automatique du token (toutes les 10 min)
   */
  useEffect(() => {
    if (!isAuthenticated) return;

    const refreshInterval = setInterval(async () => {
      try {
        await refreshAccessToken();
      } catch (error) {
        console.error('❌ Échec du rafraîchissement auto:', error);
        logout();
      }
    }, 10 * 60 * 1000);

    return () => clearInterval(refreshInterval);
  }, [isAuthenticated]);

  const value: AuthContextType = {
    isAuthenticated,
    isLoading,
    user,
    error,
    login,
    register,
    logout,
    checkAuthentication,
    syndicateStatus,
    refreshSyndicateStatus,
    isSyndicateLoading
  };

  return (
      <AuthContext.Provider value={value}>
        {children}
      </AuthContext.Provider>
  );
};

// --- Hook ---

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth doit être utilisé à l\'intérieur d\'un AuthProvider');
  }
  return context;
};
```

---

### `lib\services\admin.service.ts`

<a id="lib-services-adminservicets"></a>

> 📊 **Stats:** 179 lignes | 4.97 KB

```typescript
/**
 * Service d'Administration du Syndicat
 *
 * Ce service centralise toutes les opérations qu'un administrateur de syndicat
 * peut effectuer : gestion des membres, statistiques, produits, etc.
 */

import {apiGet, apiPatch, apiPost} from './api.client';

const API_URL = 'https://ugate.pynfi.com';

// --- Interfaces (Types) ---

/**
 * Statistiques globales du syndicat pour le tableau de bord
 */
export interface SyndicateStats {
    totalMembers: number;
    totalBranches: number;
    pendingRequests: number;
    activeServices: number;
    totalPublications: number;

    // Champs optionnels pour la compatibilité UI si l'API ne les renvoie pas encore
    activeMembers?: number;
    totalRevenue?: number;
    activeSyndicats?: number;
    pendingSyndicats?: number;
}

/**
 * Structure d'une demande d'adhésion
 */
export interface MembershipRequest {
    id: string;
    userId: string;
    syndicatId: string;
    branchId: string;
    status: 'PENDING' | 'APPROVED' | 'REJECTED';
    motivation: string;
    rejectionReason?: string;
    createdAt: string;
    updatedAt: string;

    // Informations enrichies de l'utilisateur (jointure backend ou frontend)
    user?: {
        firstName: string;
        lastName: string;
        email: string;
        phone?: string;
        profilePicture?: string;
    };
}

/**
 * Structure d'une branche (Agence)
 */
export interface SyndicateBranch {
    id: string;
    syndicatId: string;
    name: string;
    location: string;
    contact: string;
    bannerUrl?: string;
    createdAt: string;
    updatedAt: string;
}

/**
 * Données requises pour inviter un membre manuellement
 */
export interface InviteMemberRequest {
    email: string;
    firstName: string;
    lastName: string;
}

/**
 * Structure d'un produit
 */
export interface ProductResponse {
    id: string;
    syndicatId: string;
    name: string;
    description: string;
    price: number;
    sku: string;
    category: string;
    stock: number;
    image?: {
        url: string;
        type: string;
    };
    isActive: boolean;
}

// --- Fonctions API ---

/**
 * Récupérer les statistiques globales du syndicat
 * @param syndicateId - UUID du syndicat
 */
export async function getSyndicateStats(syndicateId: string): Promise<SyndicateStats> {
    return apiGet<SyndicateStats>(`${API_URL}/admin/syndicates/${syndicateId}/stats`);
}

/**
 * Récupérer les demandes d'adhésion en attente
 * @param syndicateId - UUID du syndicat
 */
export async function getMembershipRequests(syndicateId: string): Promise<MembershipRequest[]> {
    return apiGet<MembershipRequest[]>(`${API_URL}/admin/syndicates/${syndicateId}/requests`);
}

/**
 * Traiter une demande d'adhésion (Accepter ou Refuser)
 * @param requestId - UUID de la demande
 * @param approve - true pour accepter, false pour refuser
 * @param rejectionReason - Raison du refus (obligatoire si refusé)
 */
export async function processMembershipRequest(
    requestId: string,
    approve: boolean,
    rejectionReason?: string
): Promise<void> {
    return apiPost(`${API_URL}/admin/syndicates/requests/${requestId}/process`, {
        approve,
        rejectionReason
    });
}

export interface MemberResponse {
    userId: string;
    firstName: string;
    lastName: string;
    email: string;
    profileImageUrl?: string;
    role: 'CUSTOMER' | 'DRIVER' | 'FLEET_MANAGER' | 'ADMIN' | 'PASSENGER' | 'PRESIDENT' | 'MODERATOR' | 'CLIENT';
    branchId: string;
    joinedAt: string;
}

export async function getSyndicateMembers(syndicateId: string): Promise<MemberResponse[]> {
    return apiGet<MemberResponse[]>(`${API_URL}/admin/syndicates/${syndicateId}/members`);
}

export async function updateMemberRole(syndicateId: string, userId: string, newRole: string): Promise<void> {
    return apiPatch(`${API_URL}/admin/syndicates/${syndicateId}/members/${userId}/role`, { newRole });
}

/**
 * Récupérer la liste des branches d'un syndicat
 * @param syndicateId - UUID du syndicat
 */
export async function getSyndicateBranches(syndicateId: string): Promise<SyndicateBranch[]> {
    return apiGet<SyndicateBranch[]>(`${API_URL}/syndicates/${syndicateId}/branches`);
}

/**
 * Inviter manuellement un membre dans une branche spécifique
 * @param syndicateId - UUID du syndicat
 * @param branchId - UUID de la branche cible
 * @param data - Informations du membre à inviter
 */
export async function inviteMemberToBranch(
    syndicateId: string,
    branchId: string,
    data: InviteMemberRequest
): Promise<void> {
    return apiPost(`${API_URL}/admin/syndicates/${syndicateId}/branches/${branchId}/members/add`, data);
}

/**
 * Récupérer tous les produits associés à un syndicat
 * @param syndicateId - UUID du syndicat
 */
export async function getSyndicateProducts(syndicateId: string): Promise<ProductResponse[]> {
    return apiGet<ProductResponse[]>(`${API_URL}/products/syndicates/${syndicateId}`);
}
```

---

### `lib\services\api.client.ts`

<a id="lib-services-apiclientts"></a>

> 📊 **Stats:** 151 lignes | 4.61 KB

```typescript
/**
 * Client API avec Intercepteur
 *
 * Ce fichier crée un client HTTP qui ajoute automatiquement
 * le token d'authentification à toutes les requêtes
 */

import { getAccessToken, isTokenExpired, refreshAccessToken, logout } from './auth.service';

/**
 * 🔧 FONCTION : Créer les headers avec le token
 */
async function getAuthHeaders(customHeaders: HeadersInit = {}): Promise<HeadersInit> {
  const headers: HeadersInit = {
    'Content-Type': 'application/json',
    ...customHeaders,
  };

  // Pour le multipart (fichiers), on laisse le navigateur gérer le Content-Type
  // On supprime donc 'Content-Type' s'il a été défini à undefined explicitement par l'appelant
  // ou si c'est un FormData (détecté via l'usage, mais ici on gère via l'appelant qui peut passer un header vide pour l'écraser)

  // Note : fetch gère automatiquement le boundary pour FormData si on ne met PAS de Content-Type.
  // L'appelant doit passer { 'Content-Type': undefined } ou similaire s'il veut l'annuler,
  // mais notre implémentation par défaut met application/json.
  // Dans les fonctions ci-dessous, nous gérerons le cas FormData spécifiquement.

  if (isTokenExpired()) {
    try {
      await refreshAccessToken();
    } catch (refreshError) {
      console.error('❌ Impossible de rafraîchir le token');
      logout();
      if (typeof window !== 'undefined') window.location.href = '/';
      throw new Error('Session expirée');
    }
  }

  const token = getAccessToken();
  if (token) {
    (headers as Record<string, string>)['Authorization'] = `Bearer ${token}`;
  }

  return headers;
}

/**
 * Helper pour gérer la réponse
 */
async function handleResponse<T>(response: Response): Promise<T> {
  if (!response.ok) {
    if (response.status === 401) {
      logout();
      if (typeof window !== 'undefined') window.location.href = '/';
      throw new Error('Non autorisé');
    }
    const errorText = await response.text();
    throw new Error(`Erreur HTTP: ${response.status} - ${errorText}`);
  }

  // Si la réponse est vide (ex: 204 No Content), on retourne null
  if (response.status === 204) {
    return null as T;
  }

  try {
    return await response.json() as T;
  } catch {
    // Si ce n'est pas du JSON valide mais que c'est OK (ex: string simple)
    return null as T;
  }
}

/**
 * 🌐 FONCTION : GET Request
 */
export async function apiGet<T>(url: string, options: RequestInit = {}): Promise<T> {
  const headers = await getAuthHeaders(options.headers);
  const response = await fetch(url, { ...options, method: 'GET', headers });
  return handleResponse<T>(response);
}

/**
 * 📤 FONCTION : POST Request
 */
export async function apiPost<T>(url: string, body?: unknown, options: RequestInit = {}): Promise<T> {
  const headers = await getAuthHeaders(options.headers);

  // Si le body est un FormData, on supprime le Content-Type JSON par défaut
  if (body instanceof FormData) {
    delete (headers as Record<string, string>)['Content-Type'];
  }

  const response = await fetch(url, {
    ...options,
    method: 'POST',
    headers,
    body: body instanceof FormData ? body : (body ? JSON.stringify(body) : undefined),
  });

  return handleResponse<T>(response);
}

/**
 * ✏️ FONCTION : PUT Request
 */
export async function apiPut<T>(url: string, body?: unknown, options: RequestInit = {}): Promise<T> {
  const headers = await getAuthHeaders(options.headers);

  if (body instanceof FormData) {
    delete (headers as Record<string, string>)['Content-Type'];
  }

  const response = await fetch(url, {
    ...options,
    method: 'PUT',
    headers,
    body: body instanceof FormData ? body : (body ? JSON.stringify(body) : undefined),
  });

  return handleResponse<T>(response);
}

/**
 * 🛠️ FONCTION : PATCH Request (Celle qui manquait)
 */
export async function apiPatch<T>(url: string, body?: unknown, options: RequestInit = {}): Promise<T> {
  const headers = await getAuthHeaders(options.headers);

  if (body instanceof FormData) {
    delete (headers as Record<string, string>)['Content-Type'];
  }

  const response = await fetch(url, {
    ...options,
    method: 'PATCH',
    headers,
    body: body instanceof FormData ? body : (body ? JSON.stringify(body) : undefined),
  });

  return handleResponse<T>(response);
}

/**
 * 🗑️ FONCTION : DELETE Request
 */
export async function apiDelete<T>(url: string, options: RequestInit = {}): Promise<T> {
  const headers = await getAuthHeaders(options.headers);
  const response = await fetch(url, { ...options, method: 'DELETE', headers });
  return handleResponse<T>(response);
}
```

---

### `lib\services\auth.service.ts`

<a id="lib-services-authservicets"></a>

> 📊 **Stats:** 303 lignes | 9.07 KB

```typescript
/**
 * Service d'Authentification
 * 
 * Ce service gère toutes les opérations liées à l'authentification :
 * - Connexion (login)
 * - Déconnexion (logout)
 * - Gestion des tokens (stockage, récupération, validation)
 * - Rafraîchissement automatique des tokens
 */

import { LoginCredentials, RegisterCredentials, LoginResponse, RefreshTokenResponse, UserInfo, DecodedToken } from '@/lib/types/auth';

// URL de base de l'API d'authentification
const AUTH_API_URL = 'https://auth-service.pynfi.com/api/auth';

// Clés pour le stockage local
const STORAGE_KEYS = {
  ACCESS_TOKEN: 'ugate_access_token',
  REFRESH_TOKEN: 'ugate_refresh_token',
  USER_INFO: 'ugate_user_info',
  TOKEN_EXPIRY: 'ugate_token_expiry',
};

/**
 *  FONCTION 1 : Connexion
 * 
 * Appelle l'API de login et sauvegarde les tokens
 * 
 * @param credentials - Email et mot de passe
 * @returns Réponse de l'API avec tokens et infos utilisateur
 */
export async function login(credentials: LoginCredentials): Promise<LoginResponse> {
  try {
    console.log('🔄 Tentative de connexion pour:', credentials.identifier);
    console.log('🌐 URL API:', `${AUTH_API_URL}/login`);
    
    const response = await fetch(`${AUTH_API_URL}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentials),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error(`❌ HTTP ${response.status}:`, errorText);
      throw new Error(`Échec de la connexion (${response.status}): ${errorText || response.statusText}`);
    }

    const data: LoginResponse = await response.json();
    
    console.log('✅ Connexion réussie !');
    
    // Sauvegarder les données d'authentification
    saveAuthData(data);
    
    return data;
  } catch (error) {
    // Identifier le type d'erreur
    if (error instanceof TypeError && error.message === 'Failed to fetch') {
      console.error('❌ Erreur réseau: Impossible de joindre le serveur d\'authentification');
      console.error('   Vérifiez:');
      console.error('   1. Votre connexion internet');
      console.error('   2. Que l\'API est accessible:', AUTH_API_URL);
      console.error('   3. Les paramètres CORS du serveur');
      throw new Error('Impossible de joindre le serveur. Vérifiez votre connexion internet.');
    }
    
    console.error('❌ Erreur lors de la connexion:', error);
    throw error;
  }
}

/**
 *  FONCTION 12 : Inscription
 * 
 * Appelle l'API de register (sans connexion automatique)
 * 
 * @param credentials - Données d'inscription
 * @returns Réponse de l'API avec tokens et infos utilisateur
 */
export async function register(credentials: RegisterCredentials): Promise<LoginResponse> {
  try {
    console.log('📝 Tentative d\'inscription pour:', credentials.email);
    
    const response = await fetch(`${AUTH_API_URL}/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentials),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.message || 'Échec de l\'inscription');
    }

    const data: LoginResponse = await response.json();
    
    console.log('✅ Inscription réussie ! Veuillez vous connecter.');
    
    // NE PAS sauvegarder les tokens - l'utilisateur doit se connecter
    
    return data;
  } catch (error) {
    console.error(' Erreur lors de l\'inscription:', error);
    throw error;
  }
}

/**
 *  FONCTION 2 : Sauvegarder les données d'authentification
 * 
 * Stocke les tokens et les infos utilisateur dans localStorage
 * 
 * @param data - Données de connexion (tokens + user)
 */
export function saveAuthData(data: LoginResponse): void {
  console.log(' Sauvegarde des données d\'authentification...');
  
  // Calculer la date d'expiration du token (par défaut 15 minutes)
  const expiryTime = Date.now() + (15 * 60 * 1000);
  
  // Sauvegarder dans localStorage
  localStorage.setItem(STORAGE_KEYS.ACCESS_TOKEN, data.accessToken);
  localStorage.setItem(STORAGE_KEYS.REFRESH_TOKEN, data.refreshToken);
  localStorage.setItem(STORAGE_KEYS.USER_INFO, JSON.stringify(data.user));
  localStorage.setItem(STORAGE_KEYS.TOKEN_EXPIRY, expiryTime.toString());
  
  console.log(' Données sauvegardées avec succès');
  console.log(' Token expire dans: 15 minutes');
}

/**
 * 🔑 FONCTION 3 : Récupérer le token d'accès
 * 
 * @returns Le token d'accès ou null s'il n'existe pas
 */
export function getAccessToken(): string | null {
  if (typeof window === 'undefined') return null;
  return localStorage.getItem(STORAGE_KEYS.ACCESS_TOKEN);
}

/**
 * 🔄 FONCTION 4 : Récupérer le refresh token
 * 
 * @returns Le refresh token ou null s'il n'existe pas
 */
export function getRefreshToken(): string | null {
  if (typeof window === 'undefined') return null;
  return localStorage.getItem(STORAGE_KEYS.REFRESH_TOKEN);
}

/**
 * 👤 FONCTION 5 : Récupérer les informations utilisateur
 * 
 * @returns Les infos utilisateur ou null
 */
export function getUserInfo(): UserInfo | null {
  if (typeof window === 'undefined') return null;
  
  const userInfoStr = localStorage.getItem(STORAGE_KEYS.USER_INFO);
  if (!userInfoStr) return null;
  
  try {
    return JSON.parse(userInfoStr) as UserInfo;
  } catch {
    return null;
  }
}

/**
 * ⏰ FONCTION 6 : Vérifier si le token est expiré
 * 
 * @returns true si le token est expiré ou sur le point d'expirer
 */
export function isTokenExpired(): boolean {
  if (typeof window === 'undefined') return true;
  
  const expiryStr = localStorage.getItem(STORAGE_KEYS.TOKEN_EXPIRY);
  if (!expiryStr) return true;
  
  const expiryTime = parseInt(expiryStr, 10);
  const now = Date.now();
  
  // Considérer le token comme expiré 30 secondes avant l'expiration réelle
  const buffer = 30 * 1000;
  
  return now >= (expiryTime - buffer);
}

/**
 * 🔄 FONCTION 7 : Rafraîchir le token d'accès
 * 
 * Utilise le refresh token pour obtenir un nouveau access token
 * 
 * @returns Nouveaux tokens
 */
export async function refreshAccessToken(): Promise<RefreshTokenResponse> {
  const refreshToken = getRefreshToken();
  
  if (!refreshToken) {
    throw new Error('Aucun refresh token disponible');
  }

  try {
    console.log('🔄 Rafraîchissement du token...');
    
    const response = await fetch(`${AUTH_API_URL}/refresh`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ refreshToken }),
    });

    if (!response.ok) {
      throw new Error('Échec du rafraîchissement du token');
    }

    const data: RefreshTokenResponse = await response.json();
    
    console.log(' Token rafraîchi avec succès !');
    
    // Mettre à jour les tokens (par défaut 15 minutes)
    const expiryTime = Date.now() + (15 * 60 * 1000);
    localStorage.setItem(STORAGE_KEYS.ACCESS_TOKEN, data.accessToken);
    localStorage.setItem(STORAGE_KEYS.REFRESH_TOKEN, data.refreshToken);
    localStorage.setItem(STORAGE_KEYS.USER_INFO, JSON.stringify(data.user));
    localStorage.setItem(STORAGE_KEYS.TOKEN_EXPIRY, expiryTime.toString());
    
    return data;
  } catch (error) {
    console.error('❌ Erreur lors du rafraîchissement:', error);
    throw error;
  }
}

/**
 * 🚪 FONCTION 8 : Déconnexion
 * 
 * Supprime tous les tokens et les infos utilisateur
 */
export function logout(): void {
  console.log('🚪 Déconnexion en cours...');
  
  if (typeof window === 'undefined') return;
  
  // Supprimer toutes les données d'authentification
  localStorage.removeItem(STORAGE_KEYS.ACCESS_TOKEN);
  localStorage.removeItem(STORAGE_KEYS.REFRESH_TOKEN);
  localStorage.removeItem(STORAGE_KEYS.USER_INFO);
  localStorage.removeItem(STORAGE_KEYS.TOKEN_EXPIRY);
  
  console.log('✅ Déconnexion réussie');
}

/**
 * ✅ FONCTION 9 : Vérifier si l'utilisateur est authentifié
 * 
 * @returns true si l'utilisateur a un token valide
 */
export function isAuthenticated(): boolean {
  const token = getAccessToken();
  return !!token && !isTokenExpired();
}

/**
 * 🔓 FONCTION 10 : Décoder un token JWT
 * 
 * @param token - Le token JWT à décoder
 * @returns Le payload décodé du token
 */
export function decodeToken(token: string): DecodedToken | null {
  try {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(
      atob(base64)
        .split('')
        .map((c) => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2))
        .join('')
    );
    
    return JSON.parse(jsonPayload) as DecodedToken;
  } catch {
    return null;
  }
}

/**
 * 🎭 FONCTION 11 : Vérifier le rôle de l'utilisateur
 * 
 * @param requiredRole - Le rôle requis
 * @returns true si l'utilisateur a le rôle requis
 */
export function hasRole(requiredRole: string): boolean {
  const user = getUserInfo();
  return user?.roles?.includes(requiredRole) ?? false;
}

```

---

### `lib\services\branches.service.ts`

<a id="lib-services-branchesservicets"></a>

> 📊 **Stats:** 69 lignes | 1.94 KB

```typescript
import { apiGet, apiPatch } from './api.client';
import { getAccessToken } from './auth.service';

const API_URL = 'https://ugate.pynfi.com';

export interface Branch {
    id: string;
    syndicatId: string;
    name: string;
    location: string;
    contact: string;
    bannerUrl?: string;
    createdAt: string;
    updatedAt: string;
}

export interface CreateBranchDTO {
    name: string;
    location: string;
    contact: string;
}

/**
 * Récupérer toutes les branches d'un syndicat
 * CORRECTION : L'argument s'appelle bien syndicateId (avec e) pour correspondre à l'URL
 */
export async function getBranches(syndicateId: string): Promise<Branch[]> {
    // Le nom de la variable ici doit être identique à celui dans ${...}
    return apiGet<Branch[]>(`${API_URL}/syndicates/${syndicateId}/branches`);
}

/**
 * Créer une nouvelle branche (Antenne)
 */
export async function createBranch(syndicateId: string, data: CreateBranchDTO, bannerFile?: File): Promise<Branch> {
    const formData = new FormData();
    formData.append('name', data.name);
    formData.append('location', data.location);
    formData.append('contact', data.contact);

    if (bannerFile) {
        formData.append('banner', bannerFile);
    }

    const token = getAccessToken();

    // Utilisation de syndicateId (avec e)
    const response = await fetch(`${API_URL}/syndicates/${syndicateId}/branches`, {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${token}`,
        },
        body: formData
    });

    if (!response.ok) {
        const error = await response.text();
        throw new Error(`Erreur création branche: ${error}`);
    }

    return await response.json();
}

/**
 * Mettre à jour une branche
 */
export async function updateBranch(branchId: string, data: Partial<CreateBranchDTO>): Promise<Branch> {
    return apiPatch<Branch>(`${API_URL}/branches/${branchId}`, data);
}
```

---

### `lib\services\events.service.ts`

<a id="lib-services-eventsservicets"></a>

> 📊 **Stats:** 129 lignes | 3.72 KB

```typescript
import { apiGet, apiPost, apiDelete } from './api.client';
import { getAccessToken } from './auth.service';

const API_URL = 'https://ugate.pynfi.com';

// --- Types basés sur la spécification API (Swagger) ---

export interface LocalTime {
  hour: number;
  minute: number;
  second: number;
  nano: number;
}

export interface EventItem {
  id: string;
  creatorId: string;
  branchId: string;
  title: string;
  description: string;
  location: string;
  date: string;         // Format "YYYY-MM-DD"
  startTime: LocalTime;
  endTime: LocalTime;
  createdAt: string;
  updatedAt: string;
  participantCount: number;
  imageUrls: string[]; // Le backend renvoie TOUS les médias (images et vidéos) dans ce tableau
  videos?: string[]; // On peut garder ce type optionnel si le backend l'ajoute plus tard
}

export interface CreateEventDTO {
  creatorId: string;
  branchId: string;
  title: string;
  description: string;
  eventDate: string; // "YYYY-MM-DD"
  location: string;
  startTime: string; // "HH:mm"
  endTime: string;   // "HH:mm"
}

export interface EventParticipant {
  userId: string;
  fullName: string;
}

// --- Helpers pour le formatage ---

export function formatLocalTime(time: LocalTime | null | undefined): string {
  if (!time) return '';
  const h = time.hour?.toString().padStart(2, '0') || '00';
  const m = time.minute?.toString().padStart(2, '0') || '00';
  return `${h}:${m}`;
}

export function formatDateFr(dateStr: string): string {
  if (!dateStr) return '';
  return new Date(dateStr).toLocaleDateString('fr-FR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });
}

// --- Fonctions API ---

export async function getEventsByBranch(branchId: string): Promise<EventItem[]> {
  return apiGet<EventItem[]>(`${API_URL}/events/branch/${branchId}`);
}

/**
 * Créer un événement avec image OU vidéo
 * CORRECTION : Tous les fichiers sont envoyés dans le champ 'images'
 */
export async function createEvent(
    data: CreateEventDTO,
    imageFile?: File,
    videoFile?: File
): Promise<void> {
  const formData = new FormData();

  formData.append('creatorId', data.creatorId);
  formData.append('branchId', data.branchId);
  formData.append('title', data.title);
  formData.append('description', data.description);
  formData.append('eventDate', data.eventDate);
  formData.append('location', data.location);
  formData.append('startTime', data.startTime);
  formData.append('endTime', data.endTime);

  // LOGIQUE CORRIGÉE : On attache le média (image OU vidéo) au champ 'images'
  if (imageFile) {
    formData.append('images', imageFile);
  } else if (videoFile) {
    // On envoie bien la vidéo dans le champ 'images' comme demandé
    formData.append('images', videoFile);
  }

  const token = getAccessToken();

  const response = await fetch(`${API_URL}/events`, {
    method: 'POST',
    headers: { 'Authorization': `Bearer ${token}` },
    body: formData
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Erreur lors de la création: ${errorText}`);
  }
}

export async function getEventParticipants(eventId: string): Promise<EventParticipant[]> {
  return apiGet<EventParticipant[]>(`${API_URL}/events/${eventId}/participants`);
}

export async function joinEvent(eventId: string): Promise<void> {
  return apiPost<void>(`${API_URL}/events/${eventId}/join`);
}

export async function leaveEvent(eventId: string): Promise<void> {
  return apiDelete<void>(`${API_URL}/events/${eventId}/leave`);
}

export async function deleteEvent(eventId: string): Promise<void> {
  console.warn("La suppression d'événement n'est pas disponible dans l'API actuelle.");
  return Promise.resolve();
}
```

---

### `lib\services\products.service.ts`

<a id="lib-services-productsservicets"></a>

> 📊 **Stats:** 85 lignes | 2.92 KB

```typescript
import { apiGet, apiPost, apiPatch, apiDelete } from './api.client';
import { ProductResponse } from './admin.service'; // On réutilise le type défini précédemment

const API_URL = 'https://ugate.pynfi.com';

export interface CreateProductDTO {
    syndicatId: string;
    name: string;
    description: string;
    price: number;
    sku: string;
    category: string;
    stock: number;
    isActive: boolean;
}

/**
 * Créer un produit avec image
 * Note: L'API semble attendre un DTO en query/part et l'image en body.
 * Nous utilisons FormData pour tout envoyer proprement.
 */
export async function createProduct(data: CreateProductDTO, imageFile: File): Promise<ProductResponse> {
    const formData = new FormData();

    // Construction de l'objet DTO pour l'envoyer comme demandé par l'API (souvent sous forme de blob ou string JSON)
    // Si l'API attend "dto" en query param, il faudra adapter l'URL.
    // Ici, on assume une approche standard Multipart où on envoie les champs.

    // Approche robuste : On envoie les champs individuellement ET on prépare le terrain si l'API change
    formData.append('image', imageFile);

    // Astuce : Certains backends Java attendent un champ 'dto' contenant le JSON
    const dto = JSON.stringify(data);

    // On construit l'URL avec le paramètre dto si c'est ce que Swagger demande spécifiquement
    // (parameters: [{name: "dto", in: "query"...}])
    const url = `${API_URL}/products?dto=${encodeURIComponent(dto)}`;

    // Note: On n'utilise pas apiPost ici car on doit gérer le FormData spécifiquement sans le header JSON par défaut
    const token = localStorage.getItem('ugate_access_token');

    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${token}`,
            // Pas de Content-Type, le navigateur le mettra avec le boundary
        },
        body: formData
    });

    if (!response.ok) {
        const error = await response.text();
        throw new Error(`Erreur création produit: ${error}`);
    }

    return await response.json();
}

/**
 * Mettre à jour un produit
 */
export async function updateProduct(id: string, data: Partial<CreateProductDTO>): Promise<ProductResponse> {
    return apiPatch(`${API_URL}/products/${id}`, data);
}

/**
 * Mettre à jour le stock
 */
export async function updateProductStock(id: string, quantity: number): Promise<ProductResponse> {
    return apiPatch(`${API_URL}/products/${id}/stock`, quantity); // Envoie l'entier directement
}

/**
 * Supprimer un produit
 */
export async function deleteProduct(id: string): Promise<void> {
    return apiDelete(`${API_URL}/products/${id}`);
}

/**
 * Récupérer les produits d'un syndicat
 */
export async function getProductsBySyndicate(syndicateId: string): Promise<ProductResponse[]> {
    return apiGet<ProductResponse[]>(`${API_URL}/products/syndicates/${syndicateId}`);
}
```

---

### `lib\services\services.service.ts`

<a id="lib-services-servicesservicets"></a>

> 📊 **Stats:** 57 lignes | 1.60 KB

```typescript
import { apiGet, apiPost, apiPatch, apiDelete } from './api.client';

const API_URL = 'https://ugate.pynfi.com';

export interface ServiceRequest {
    title: string;
    description: string;
    price: number;
    features: string[];
    isActive: boolean;
}

export interface ServiceResponse {
    id: string;
    title: string;
    description: string;
    price: number;
    features: string[];
    isActive: boolean;
    // Note: Pas d'image dans la réponse API actuelle
}

/**
 * Créer un nouveau service
 */
export async function createService(data: ServiceRequest): Promise<ServiceResponse> {
    return apiPost<ServiceResponse>(`${API_URL}/service-offerings`, data);
}

/**
 * Récupérer les services actifs (Marketplace)
 * TODO: Demander au backend un endpoint /syndicates/{id}/services pour voir aussi les services inactifs/brouillons
 */
export async function getActiveServices(): Promise<ServiceResponse[]> {
    return apiGet<ServiceResponse[]>(`${API_URL}/service-offerings/active`);
}

/**
 * Mettre à jour un service
 */
export async function updateService(id: string, data: Partial<ServiceRequest>): Promise<ServiceResponse> {
    return apiPatch<ServiceResponse>(`${API_URL}/service-offerings/${id}`, data);
}

/**
 * Supprimer un service
 */
export async function deleteService(id: string): Promise<void> {
    return apiDelete(`${API_URL}/service-offerings/${id}`);
}

/**
 * Récupérer un service par son ID
 */
export async function getServiceById(id: string): Promise<ServiceResponse> {
    return apiGet<ServiceResponse>(`${API_URL}/service-offerings/${id}`);
}
```

---

### `lib\services\syndicates.service.ts`

<a id="lib-services-syndicatesservicets"></a>

> 📊 **Stats:** 29 lignes | 945 B

```typescript
import { getAccessToken } from './auth.service';

const API_URL = 'https://ugate.pynfi.com';

export async function createSyndicate(formData: FormData) {
    const token = getAccessToken();

    try {
        const response = await fetch(`${API_URL}/syndicates`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${token}`,
                // Note: Ne pas mettre 'Content-Type': 'multipart/form-data' manuellement
                // le navigateur le fait automatiquement avec le bon boundary pour FormData
            },
            body: formData,
        });

        if (!response.ok) {
            const errorText = await response.text();
            throw new Error(`Erreur ${response.status}: ${errorText}`);
        }

        return await response.json();
    } catch (error) {
        console.error('Erreur création syndicat:', error);
        throw error;
    }
}
```

---

### `lib\types\auth.ts`

<a id="lib-types-authts"></a>

> 📊 **Stats:** 81 lignes | 1.49 KB

```typescript
/**
 * Types pour l'Authentification
 * 
 * Ce fichier définit tous les types TypeScript utilisés pour l'authentification
 * Basé sur l'API: https://auth-service.pynfi.com/swagger-ui/index.html
 */

/**
 * Réponse de l'API lors de la connexion
 */
export interface LoginResponse {
  accessToken: string;
  refreshToken: string;
  user: UserInfo;
}

/**
 * Informations sur l'utilisateur connecté
 */
export interface UserInfo {
  id: string;
  username: string;
  email: string;
  phone: string;
  firstName: string;
  lastName: string;
  service: string;
  roles: string[];
  permissions: string[];
}

/**
 * Identifiants de connexion
 */
export interface LoginCredentials {
  identifier: string;
  password: string;
}

/**
 * Données d'inscription
 */
export interface RegisterCredentials {
  username: string;
  password: string;
  email: string;
  phone: string;
  firstName: string;
  lastName: string;
  service: string;
  roles: string[];
}

/**
 * Réponse lors du rafraîchissement du token
 */
export interface RefreshTokenResponse {
  accessToken: string;
  refreshToken: string;
  user: UserInfo;
}

/**
 * Structure d'un token JWT décodé
 */
export interface DecodedToken {
  sub: string;
  email: string;
  roles: string[];
  exp: number;
  iat: number;
}


export interface UserSyndicateStatus {
  hasSyndicate: boolean;
  syndicateId?: string;
  status?: 'PENDING' | 'APPROVED' | 'REJECTED' | 'DEACTIVATED';
  syndicateName?: string;
}

```

---

### `lib\types\events.ts`

<a id="lib-types-eventsts"></a>

> 📊 **Stats:** 76 lignes | 1.51 KB

```typescript
/**
 * Types pour les Événements
 * 
 * Basé sur l'API: https://ugate.pynfi.com/webjars/swagger-ui/index.html
 */

/**
 * Branche du syndicat
 */
export interface Branch {
  id: string;
  name: string;
  description?: string;
  location?: string;
  director: {
    name: string;
    email?: string;
    phone?: string;
  };
}

/**
 * Événement du syndicat
 */
export interface EventItem {
  id: string;
  creatorId: string;
  branchId: string;
  title: string;
  description: string;
  location: string;
  date: string; // Format: "2025-01-12"
  startTime: string; // Format: "11:00"
  endTime: string; // Format: "12:00"
  createdAt: string; // Format ISO: "2025-01-12T12:59:07.0092"
  updatedAt: string; // Format ISO: "2025-01-12T12:59:07.0092"
  participantCount: number;
  status?: 'active' | 'draft';
  images?: string[];
  videos?: string[];
  files?: string[];
}

/**
 * Données pour créer un événement
 */
export interface CreateEventRequest {
  creatorId: string;
  branchId: string;
  title: string;
  description: string;
  eventDate: string; // Format: "2026-01-15"
  location: string;
  startTime: string; // Format: "12:00"
  endTime: string; // Format: "15:00"
  images?: string[];
  videos?: string[];
  files?: string[];
}

/**
 * Participant à un événement
 */
export interface EventParticipant {
  userId: string;
  fullName: string;
}

/**
 * Réponse de création d'événement
 */
export interface CreateEventResponse {
  id: string;
  message: string;
}

```

---

### `lib\types\superadmin.ts`

<a id="lib-types-superadmints"></a>

> 📊 **Stats:** 154 lignes | 3.18 KB

```typescript
export interface Syndicat {
  id: string;
  isApproved: boolean;
  isActive: boolean;
  name: string;
  description: string;
  domain: string;
  type: string;
  creationDate: string;
  lastUpdate: string;
  charteUrl?: string;
  statusUrl?: string;
  listMembersUrl?: string;
  certificatEngagementUrl?: string;
  organizationId: string;
  memberCount?: number;
  subscriptionPlan?: string;
  subscriptionExpiry?: string;
}

export interface SyndicatMember {
  id: string;
  userId: string;
  userName?: string;
  syndicatId: string;
  branchId?: string;
  role: 'ADMIN' | 'MEMBER' | 'MODERATOR';
  joinDate: string;
  isActive: boolean;
  isApproved: boolean;
  user?: User;
}

export interface Branch {
  id: string;
  name: string;
  location: string;
  contact: string;
  creationDate: string;
  lastUpdate: string;
  agencyId: string;
  syndicatId: string;
}

export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  phone?: string;
  profilePicture?: string;
  createdAt: string;
  lastLogin?: string;
  isActive: boolean;
  isEmailVerified: boolean;
  complianceDetails?: ComplianceDetails;
}

export interface ComplianceDetails {
  userId: string;
  idCardNumber?: string;
  idCardUrl?: string;
  proofOfAddressUrl?: string;
  isVerified: boolean;
  verifiedAt?: string;
  verifiedBy?: string;
  rejectionReason?: string;
}

export interface Publication {
  id: string;
  content: string;
  authorId: string;
  author?: User;
  creationDate: string;
  lastUpdate: string;
  status: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED' | 'FLAGGED';
  likeCount: number;
  branchId: string;
  flaggedReason?: string;
  flaggedBy?: string;
  flaggedAt?: string;
}

export interface Event {
  id: string;
  title: string;
  description: string;
  lieu: string;
  startDate: string;
  endDate: string;
  branchId: string;
  status?: 'UPCOMING' | 'ONGOING' | 'COMPLETED' | 'CANCELLED' | 'FLAGGED';
  flaggedReason?: string;
  flaggedBy?: string;
  flaggedAt?: string;
}

export interface Payment {
  id: string;
  syndicatId: string;
  amount: number;
  currency: string;
  status: 'PENDING' | 'COMPLETED' | 'FAILED' | 'REFUNDED';
  paymentDate: string;
  paymentMethod: string;
  description: string;
}

export interface ActivityLog {
  id: string;
  userId: string;
  action: string;
  entityType: string;
  entityId: string;
  timestamp: string;
  ipAddress?: string;
  userAgent?: string;
  details?: Record<string, unknown>;
}

export interface SubscriptionPlan {
  id: string;
  name: string;
  description: string;
  price: number;
  currency: string;
  duration: number;
  features: string[];
  isActive: boolean;
}

export interface BailConfig {
  id: string;
  syndicatType: string;
  expiryDays: number;
  warningDays: number;
  autoDeactivate: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface DashboardStats {
  totalSyndicats: number;
  activeSyndicats: number;
  pendingApproval: number;
  totalMembers: number;
  activeMembers: number;
  totalRevenue: number;
  monthlyRevenue: number;
  flaggedContent: number;
  recentActivity: number;
}

```

---

### `lib\types.ts`

<a id="lib-typests"></a>

> 📊 **Stats:** 64 lignes | 1.18 KB

```typescript
import React from 'react';

export type Status = 'active' | 'inactive' | 'pending' | 'archived';
export type AdmissionStatus = 'pending' | 'accepted' | 'rejected';
export type StockStatus = 'in_stock' | 'out_of_stock';

export interface User {
  id: string;
  name: string;
  email: string;
  avatar: string;
  role: 'admin' | 'editor';
}

export interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  location: string;
  imageUrl: string;
  status: Status;
  attendees: number;
}

export interface Product {
  id: string;
  title: string;
  price: number;
  image: string;
  status: StockStatus;
  sku: string;
  category: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  price: string;
  images: string[];
  features: string[];
}

export interface Admission {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  company: string;
  position: string;
  submittedAt: string;
  status: AdmissionStatus;
  avatar: string;
  motivation: string;
}

export interface NavItem {
  id: string;
  label: string;
  icon: React.ElementType;
  count?: number;
}

```

---

### `lib\utils.ts`

<a id="lib-utilsts"></a>

> 📊 **Stats:** 7 lignes | 192 B

```typescript
// lib/utils.ts
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}
```

---

### `next-env.d.ts`

<a id="next-envdts"></a>

> 📊 **Stats:** 7 lignes | 257 B

```typescript
/// <reference types="next" />
/// <reference types="next/image-types/global" />
import "./.next/dev/types/routes.d.ts";

// NOTE: This file should not be edited
// see https://nextjs.org/docs/app/api-reference/config/typescript for more information.

```

---


---

## ✅ Fin du Contexte

> Ce document a été généré automatiquement.
> Pour toute question ou modification, référez-vous au projet source.

**Bonne utilisation avec votre IA ! 🤖**
