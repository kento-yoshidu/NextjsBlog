---
title: "【TS】文字列の配列を数値の配列に変換する"
date: "2022-03-02"
update: "2022-03-10"
languages: ["TypeScript"]
tags: ["配列", "型変換"]
icon: "🧸"
---

# 文字列の配列を数値の配列に変換する

`["0", "1", "2"]`のように、文字列が格納されている配列について、各要素を数値に変換する方法を考えます。

`Array.prototype.map()`を使用することで配列の各要素を取り出し、数値に変換し返すことができます。

```typescript
["0", "1", "2"].map(Number)
//=> [0, 1, 2]

["1.2", "0.2", "3.0"].map(Number)
//=> [ 1.2, 0.2, 3 ]
```

## もちろん他の型への変換も

この要領で他の型への変換を行うこともできます。

```typescript
// 数値型から文字列型への変換
console.log([0, 1, 2].map(String))
//=> [ '0', '1', '2' ]

// 数値型から真偽値型への変換
console.log([1, 2, 3].map(Boolean))
//=> [ false, true, true ]

// 数値型からBigInt型への変換
console.log([0, 1, 2].map(BigInt))
//=> [ 0n, 1n, 2n ]
```

## 参考

https://stackoverflow.com/questions/48343478/what-does-mapnumber-do-here
