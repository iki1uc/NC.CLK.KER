export const QI = {
    scan(obj){
        return {
            id: obj.id || "CORE4",
            level: obj.level || 0,
            ready: !!obj.ready,
            time: Date.now(),
            keys: Object.keys(obj)
        };
    }
};
