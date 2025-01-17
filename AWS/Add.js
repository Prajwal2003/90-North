exports.handler = async (event) => {
    const { number1, number2 } = event;
    if (typeof number1 !== "number" || typeof number2 !== "number") {
        return {
            statusCode: 400,
            body: JSON.stringify({ error: "Invalid input. Please provide two numbers." }),
        };
    }

    const result = number1 + number2;
    return {
        statusCode: 200,
        body: JSON.stringify({ result }),
    };
};
