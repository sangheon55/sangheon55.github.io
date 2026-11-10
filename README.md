# sangheon55.github.io

Astro로 만든 개인 소개 + 논문 리뷰 사이트. `main`에 push하면 GitHub Actions로 자동 배포됩니다.

## 로컬 실행

```sh
npm install
npm run dev      # http://localhost:4321
```

## 글 쓰기

- **논문 리뷰**: `src/content/papers/<slug>.md`
- **소개/링크**: `src/consts.ts`

논문 리뷰 frontmatter 예시:

```yaml
---
title: '리뷰 제목'
description: '한 줄 설명'
date: 2026-11-10
paper:
  title: '논문 제목'
  authors: 'Author et al.'
  venue: 'NeurIPS'
  year: 2017
  url: 'https://arxiv.org/abs/...'
tags: ['NLP']
draft: false
---
```

수식은 `$...$`(인라인), `$$...$$`(블록)으로 작성합니다 (KaTeX).
이미지는 `public/`에 넣고 `/images/foo.png` 처럼 참조하세요.
