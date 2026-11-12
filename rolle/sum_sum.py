# PYTHON - nichts verborgen, alle Zeilen offen
SCORE = {"·":0.0, "❄":0.4, "≈":0.65, "✿":1.0, "✕":0.0, "▲":0.85}
def f(x): return min(x, 40)
def quetschen(layers):
    v81 = [sum(SCORE.get(c,0) for c in layer)/81 for layer in layers]
    v9 = [sum(v81[i*9:(i+1)*9])/9 for i in range(9)]
    v3 = [sum(v9[i*3:(i+1)*3])/3 for i in range(3)]
    v1 = sum(v3)/3
    return {"v81":v81, "v9":v9, "v3":v3, "v1":v1}
