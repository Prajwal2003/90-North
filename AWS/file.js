const AWS = require("aws-sdk");
const s3 = new AWS.S3();

exports.handler = async (event) => {
    const bucketName = "your-s3-bucket-name";
    const fileName = event.fileName || "uploaded_file.pdf";
    const fileContent = event.fileContent; // Base64-encoded string

    if (!fileContent) {
        return {
            statusCode: 400,
            body: JSON.stringify({ error: "File content is missing." }),
        };
    }

    const buffer = Buffer.from(fileContent, "base64");

    const params = {
        Bucket: bucketName,
        Key: fileName,
        Body: buffer,
        ContentType: "application/pdf",
    };

    try {
        await s3.putObject(params).promise();
        return {
            statusCode: 200,
            body: JSON.stringify({ message: "File uploaded successfully!", fileName }),
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ error: error.message }),
        };
    }
};
