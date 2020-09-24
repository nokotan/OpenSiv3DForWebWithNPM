const { Service, project } = require("wasm-studio-utils");

(async function build() {
    const data = await Service.compileFiles([
        project.getFile("src/main.cpp"),
        ], "cpp", "wasm", "-Wall -std=c++17 -O2 -include-pch /include/OpenSiv3D/Siv3D.O2.pch -I/include/OpenSiv3D -I/include/OpenSiv3D/ThirdParty -s MAIN_MODULE=1 -s FORCE_FILESYSTEM=1 -s ALLOW_MEMORY_GROWTH=1 -s FULL_ES3=1 -s USE_GLFW=3");
    const outWasm = project.newFile("out/main.wasm", "wasm", true);
    outWasm.setData(data["a.wasm"]);
    const outJS = project.newFile("out/main.js", "javascript", true);
    outJS.setData(data["wasm_bindgen.js"]);
})();
