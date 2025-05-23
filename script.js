// script.js
document.addEventListener("DOMContentLoaded", function() {
    // Optimize loading of images
    const images = document.querySelectorAll("img[data-src]");
    images.forEach(img => {
        img.src = img.getAttribute("data-src");
        img.onload = () => img.removeAttribute("data-src");
    });
    // Increase font size and add a web effect
    const textElements = document.querySelectorAll("p, h1, h2, h3, h4, h5, h6");
    textElements.forEach(element => {
        element.style.transition = "transform 0.3s ease, font-size 0.3s ease";
        element.addEventListener("mouseover", () => {
            element.style.transform = "scale(1.1)";
            element.style.fontSize = "larger";
        });
        element.addEventListener("mouseout", () => {
            element.style.transform = "scale(1)";
            element.style.fontSize = "";
        });
    });
    // Smooth scrolling for anchor links
    // Add an entrance effect for elements on experiencia profissional.html
    if (window.location.pathname.includes("experiencia profissional.html")) {
        const elements = document.querySelectorAll(".animate-on-load");
        elements.forEach((element, index) => {
            element.style.opacity = "0";
            element.style.transform = "translateY(30px)";
            element.style.transition = "opacity 0.6s ease-out, transform 0.6s ease-out";
            setTimeout(() => {
                element.style.opacity = "1";
                element.style.transform = "translateY(0)";
            }, index * 200); // Staggered effect for a more professional look
        });
    }
        });
    }
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener("click", function(e) {
            e.preventDefault();
            const targetId = this.getAttribute("href");
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: "smooth" });
            }
        });
    });
});
/* Melhorias para reorganização em aparelhos Android */

// Detecta se está em um dispositivo Android
function isAndroid() {
    return /Android/i.test(navigator.userAgent);
}

if (isAndroid()) {
    // Ajusta o zoom inicial para melhor visualização
    let viewport = document.querySelector('meta[name="viewport"]');
    if (!viewport) {
        viewport = document.createElement('meta');
        viewport.name = "viewport";
        document.head.appendChild(viewport);
    }
    viewport.content = "width=device-width, initial-scale=1, maximum-scale=1";

    // Garante que imagens e vídeos não ultrapassem a largura da tela
    const responsiveElements = document.querySelectorAll("img, video");
    responsiveElements.forEach(el => {
        el.style.maxWidth = "100%";
        el.style.height = "auto";
        el.style.boxSizing = "border-box";
    });

    // Ajusta fontes para melhor leitura em telas pequenas
    const allText = document.querySelectorAll("body, p, h1, h2, h3, h4, h5, h6, li, a");
    allText.forEach(el => {
        el.style.wordBreak = "break-word";
        el.style.fontSize = "1.05em";
    });

    // Adiciona um pequeno padding nas laterais para evitar cortes
    document.body.style.paddingLeft = "8px";
    document.body.style.paddingRight = "8px";
}
/* Chat widget no lado direito do rodapé */
document.addEventListener("DOMContentLoaded", function() {
    // Cria o container do chat
    const chatContainer = document.createElement("div");
    chatContainer.id = "chat-widget";
    chatContainer.style.position = "fixed";
    chatContainer.style.right = "24px";
    chatContainer.style.bottom = "0";
    chatContainer.style.width = "320px";
    chatContainer.style.maxWidth = "90vw";
    chatContainer.style.background = "#fff";
    chatContainer.style.border = "1px solid #ccc";
    chatContainer.style.borderRadius = "12px 12px 0 0";
    chatContainer.style.boxShadow = "0 0 12px rgba(0,0,0,0.15)";
    chatContainer.style.zIndex = "9999";
    chatContainer.style.display = "flex";
    chatContainer.style.flexDirection = "column";
    chatContainer.style.fontFamily = "Arial, sans-serif";

    // Cabeçalho do chat
    const chatHeader = document.createElement("div");
    chatHeader.textContent = "Chat";
    chatHeader.style.background = "#1976d2";
    chatHeader.style.color = "#fff";
    chatHeader.style.padding = "12px";
    chatHeader.style.fontWeight = "bold";
    chatHeader.style.borderRadius = "12px 12px 0 0";
    chatHeader.style.textAlign = "center";
    chatContainer.appendChild(chatHeader);

    // Área de mensagens
    const chatMessages = document.createElement("div");
    chatMessages.id = "chat-messages";
    chatMessages.style.flex = "1";
    chatMessages.style.padding = "12px";
    chatMessages.style.overflowY = "auto";
    chatMessages.style.height = "180px";
    chatContainer.appendChild(chatMessages);

    // Área de input
    const chatForm = document.createElement("form");
    chatForm.style.display = "flex";
    chatForm.style.borderTop = "1px solid #eee";
    chatForm.style.padding = "8px";

    const chatInput = document.createElement("input");
    chatInput.type = "text";
    chatInput.placeholder = "Digite sua mensagem...";
    chatInput.required = true;
    chatInput.style.flex = "1";
    chatInput.style.padding = "8px";
    chatInput.style.border = "1px solid #ccc";
    chatInput.style.borderRadius = "4px";
    chatInput.style.marginRight = "8px";

    const chatButton = document.createElement("button");
    chatButton.type = "submit";
    chatButton.textContent = "Enviar";
    chatButton.style.background = "#1976d2";
    chatButton.style.color = "#fff";
    chatButton.style.border = "none";
    chatButton.style.borderRadius = "4px";
    chatButton.style.padding = "8px 16px";
    chatButton.style.cursor = "pointer";

    chatForm.appendChild(chatInput);
    chatForm.appendChild(chatButton);
    chatContainer.appendChild(chatForm);

    document.body.appendChild(chatContainer);

    // Lógica de envio de mensagens
    chatForm.addEventListener("submit", function(e) {
        e.preventDefault();
        const msg = chatInput.value.trim();
        if (msg) {
            const msgDiv = document.createElement("div");
            msgDiv.textContent = msg;
            msgDiv.style.background = "#e3f2fd";
            msgDiv.style.margin = "4px 0";
            msgDiv.style.padding = "6px 10px";
            msgDiv.style.borderRadius = "8px";
            msgDiv.style.alignSelf = "flex-end";
            msgDiv.style.maxWidth = "80%";
            msgDiv.style.wordBreak = "break-word";
            chatMessages.appendChild(msgDiv);
            chatMessages.scrollTop = chatMessages.scrollHeight;
            chatInput.value = "";
        }
    });
});
