---
title: "文字列の配列を数値の配列に変換する"
date: "2022-03-02"
update: "2022-03-10"
languages: ["TypeScript"]
tags: ["配列", "型変換"]
icon: "👗"
---

# 文字列の配列を数値の配列に変換する

```typescript
["1", "2", "3"].map(Number)
//=> [1, 2, 3]

["1.2", "0.2", "3.0"].map(Number)
//=> [ 1.2, 0.2, 3 ]
```
