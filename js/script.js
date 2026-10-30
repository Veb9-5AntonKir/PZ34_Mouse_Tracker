"use strict";

const area = document.querySelector("#track-area");
const dot = document.querySelector("#pointer-dot");
const xText = document.querySelector("#coord-x");
const yText = document.querySelector("#coord-y");
const status = document.querySelector("#track-status");

if (area && dot && xText && yText && status) {
    area.addEventListener('mouseover', () => {
        area.classList.add('is-inside');
        status.textContent = 'Курсор внутри площадки';
    });
    area.addEventListener('mousemove', (event) => {
        const x = Math.round(event.offsetX);
        const y = Math.round(event.offsetY);

        xText.textContent = x;
        yText.textContent = y;

        dot.style.left = "${x}px";
        dot.style.top = "${y}px";
    });
    area.addEventListener('mouseout', () => {
        area.classList.remove('is-inside');
        
        xText.textContent = '0';
        yText.textContent = '0';
        status.textContent = 'Курсор покинул площадку';
    });
}
