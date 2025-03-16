// Use `require` to import `formidable` in this case
const formidable = require("formidable"); // CommonJS import style
import openai from "@/lib/openai_config";

export const config = {
  api: {
    bodyParser: false, // Disable default body parser to handle the form data manually
  },
};

const handleSubmit = async (req, res) => {
  const form = new formidable.IncomingForm(); // Create a new IncomingForm instance

  // Parse the form data asynchronously
  form.parse(req, async (err, fields, files) => {
    if (err) {
      console.error("Error parsing form data:", err);
      return res.status(500).json({ message: "Error parsing form data" });
    }

    console.log("Form data:", fields);

    const symptoms = fields.symptoms; // Get the 'symptoms' field from the form
    const prompt = `You are a health professional & your role is to provide a diagnosis and scoring of severity and estimated wait time in terms of minutes given the info. Keep response short. This patient has been experiencing the following ${symptoms}. Respond in a JSON format with the keys, diagnosis, severity and estimatedWaitTime`;

    try {
      // OpenAI API call using v4.x syntax
      const response = await openai.chat.completions.create({
        model: "gpt-4", // Specify the model
        messages: [
          {
            role: "user", // Specify the user role
            content: prompt, // Pass the prompt to the model
          },
        ],
      });

      // Log the OpenAI response
      console.log("OpenAI Response:", response);

      const data = JSON.parse(response.choices[0].message.content);
      const diagnosis = data.diagnosis;
      const severity = data.severity;
      const estimatedWaitTime = data.estimatedWaitTime;

      const patientInfo = {
        diagnosis,
        severity,
        estimatedWaitTime,
      };

      console.log("OpenAI Response:", response.choices[0].message.content);

      // Send the OpenAI response back to the client
      res.status(200).json({
        message: "Form submitted successfully",
        data: fields,
        response: patientInfo, // Extract the content from the response
      });
    } catch (error) {
      console.error("Error with OpenAI API:", error);
      res.status(500).json({ message: "Error processing OpenAI request" });
    }
  });
};

export default handleSubmit;
