import {Graphviz} from "@hpcc-js/wasm/graphviz";

function loadGraph(graph) {
    Graphviz.load().then(graphviz => {
        const svg = graphviz.dot(graph);
        document.querySelector("#image-container").innerHTML = svg;
    });
}

function attachHandlers() {
    inputField = document.querySelector("input[name='source']");
    inputField.addEventListener("change", (e) => {
        e.target.files[0].text().then((dot) => loadGraph(dot));
    });
}

window.onload = () => {
    attachHandlers();
};
