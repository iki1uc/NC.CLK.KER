export const P4 = {
    run(core){
        return {
            id: "P4:P4",
            phase: "FUSION",
            quad: {
                q4: (Math.random() + Math.random() + Math.random()) / 3
            },
            ready: true,
            core
        };
    }
};
