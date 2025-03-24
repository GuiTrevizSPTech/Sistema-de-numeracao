let selectedBase = '';

        function showInput(radio) {
            selectedBase = radio.value; // Guarda a base escolhida
            document.getElementById("input-container").style.display = "block"; // Exibe o input
        }

        function convert() {
            let inputValue = document.getElementById("number-input").value.trim();

            if (!inputValue) {
                alert("Digite um número!");
                return;
            }

            let scrollPosition = window.scrollY;

            // Converte para decimal
            let decimalValue = parseInt(inputValue, selectedBase);
            if (isNaN(decimalValue)) {
                alert("Número inválido para essa base!");
                return;
            }

            // Converte para outras bases
            document.getElementById("result").innerHTML = `
                <p>Binário: <strong>${decimalValue.toString(2)}</strong></p>
                <p>Octal: <strong>${decimalValue.toString(8)}</strong></p>
                <p>Decimal: <strong>${decimalValue.toString(10)}</strong></p>
                <p>Hexadecimal: <strong>${decimalValue.toString(16).toUpperCase()}</strong></p>
            `;

            window.scrollTo(0, scrollPosition);
        }