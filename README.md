## 📦 Install

```bash
npm install @oceanbase/icons-svg
```

## 📢 Requirement

Directory tree should be like below:

```bash
├── package.json
├── scripts
│   ├── generate.ts
├── src
├── svg
│   ├── filled
│   ├── outlined
│   ├── twotone
│   └── colored
```

## 🔨 Usage

`scripts/generate.ts`:

```ts
import { resolve } from 'path';
import { appendFileSync } from 'fs';
import { reactIconsGeneratorFromSVGDir } from '@oceanbase/icons-svg';

export async function generateIcons() {
  await reactIconsGeneratorFromSVGDir({
    entry: resolve(__dirname, '../svg'),
    output: resolve(__dirname, '../src'),
    typescript: true,
  });
}
generateIcons();
```

`package.json`:

```json
{
  "scripts": {
    "build": "npm run generate && ${YOUR_BUILD_COMMAND}",
    "generate": "rm -rf src && ts-node scripts/generate.ts"
  }
}
```
