export function coreScan(){
    return {
        id: "CORE4",
        level: 4,
        ready: true,

        respo360: {
            id: "RESPO4",
            active: true,
            pulse: Date.now()
        },

        quad: {
            q1: { raw: 0 },
            q2: { struct: 0 },
            q3: { vector: 0 },
            q4: { fusion: 0 }
        },

        stamp: Date.now()
    };
}
