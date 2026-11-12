# quetschen.py — gleiche Regel, gleiche Zahl
SCORE={"·":0,"❄":0.4,"≈":0.65,"✿":1,"✕":0,"▲":0.85}
def f(x): return min(x,40)
def quetschen(layers):
    v81=[sum(SCORE.get(c,0) for c in l)/81 for l in layers]
    v9=[sum(v81[j*9+i] for j in range(9))/9 for i in range(9)]
    v3=[sum(v9[0:3])/3,sum(v9[3:6])/3,sum(v9[6:9])/3]
    core=sum(v3)/3
    return {"v81":v81,"v9":v9,"v3":v3,"core":f(core*40)/40,"core_roh":core}
if __name__=="__main__":
    print("alle ✿:", quetschen([["✿"]*81 for _ in range(9)])["core"])  # 1.0
    print("alle ·:", quetschen([["·"]*81 for _ in range(9)])["core"])  # 0.0
