// JS - gleiche Regel, gleiche Zahl
const SCORE = {"·":0.0, "❄":0.4, "≈":0.65, "✿":1.0, "✕":0.0, "▲":0.85};
const f = x => Math.min(x, 40);
function quetschen(layers){
  const v81 = layers.map(l => l.reduce((s,c)=>s+(SCORE[c]||0),0)/81);
  const v9 = Array.from({length:9},(_,i)=> v81.slice(i*9,i*9+9).reduce((a,b)=>a+b,0)/9);
  const v3 = Array.from({length:3},(_,i)=> v9.slice(i*3,i*3+3).reduce((a,b)=>a+b,0)/3);
  const v1 = v3.reduce((a,b)=>a+b,0)/3;
  return {v81, v9, v3, v1};
}
