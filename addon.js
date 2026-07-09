const { addonBuilder, serveHTTP } = require("stremio-addon-sdk");

const manifest = {
    id: "com.doblexradio.live",
    version: "1.0.0",
    name: "Doble X RADIO",
    description: "Rock en inglés 24/7 desde Bogotá, Colombia",
    resources: ["stream"],
    types: ["tv"],
    idPrefixes: ["doblexradio"],
    catalogs: []
};

const builder = new addonBuilder(manifest);

builder.defineStreamHandler(() => {
    return Promise.resolve({
        streams: [
            {
                title: "🎸 Doble X RADIO - En Vivo",
                url: "https://stream.intervalohost.com:8046/stream"
            }
        ]
    });
});

serveHTTP(builder.getInterface(), { port: process.env.PORT || 7000 });
