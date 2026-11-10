---
title: 'Attention Is All You Need 리뷰'
description: 'RNN 없이 어텐션만으로 시퀀스를 모델링한 Transformer 논문 정리'
date: 2026-11-10
paper:
  title: 'Attention Is All You Need'
  authors: 'Vaswani et al.'
  venue: 'NeurIPS'
  year: 2017
  url: 'https://arxiv.org/abs/1706.03762'
tags: ['NLP', 'Transformer']
---

> 예시 글입니다. `src/content/papers/` 에 새 `.md` 파일을 추가해서 논문 리뷰를 작성하세요.

## 한 줄 요약

순환 구조 없이 **self-attention**만으로 인코더-디코더를 구성해 병렬화와 성능을 모두 잡았다.

## 핵심 아이디어

Scaled dot-product attention은 다음과 같이 정의된다.

$$
\mathrm{Attention}(Q, K, V) = \mathrm{softmax}\left(\frac{QK^\top}{\sqrt{d_k}}\right)V
$$

여기서 $d_k$ 는 key의 차원이며, $\sqrt{d_k}$ 로 나누는 이유는 내적 값이 커져 softmax가 포화되는 것을 막기 위함이다.

## 장점과 한계

| 장점 | 한계 |
| --- | --- |
| 병렬 학습 가능 | 시퀀스 길이에 대해 $O(n^2)$ 메모리 |
| 장거리 의존성 포착 | 위치 정보를 별도로 주입해야 함 |

## 코드 스케치

```python
def attention(q, k, v):
    scores = q @ k.transpose(-2, -1) / k.size(-1) ** 0.5
    return scores.softmax(-1) @ v
```

## 생각

리뷰어로서의 의견, 후속 연구 아이디어 등을 자유롭게 적는다.
