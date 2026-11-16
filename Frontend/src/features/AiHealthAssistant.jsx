import { useState } from "react";
import FeaturePage from "../components/FeaturePage";
import { TextAreaField } from "../components/Inputs";
import Button from "../components/common/Button";
import { sendHealthMessage } from "../services/aiService";
import "../styles/features.css";

function AiHealthAssistant() {
  const [message, setMessage] = useState("");
  const [conversation, setConversation] = useState([]);
  const [isSending, setIsSending] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    const text = message.trim();

    if (!text || isSending) return;
    if (text.length > 2000) {
      setError("Your message must not exceed 2,000 characters.");
      return;
    }

    setError("");
    setMessage("");
    setConversation((current) => [
      ...current,
      { id: crypto.randomUUID(), role: "user", text },
    ]);
    setIsSending(true);

    try {
      const reply = await sendHealthMessage(text);
      setConversation((current) => [
        ...current,
        { id: crypto.randomUUID(), role: "assistant", text: reply },
      ]);
    } catch (requestError) {
      setError(requestError.message);
    } finally {
      setIsSending(false);
    }
  }

  return (
    <FeaturePage
      title="Ask Jali Mama"
      description="Get general maternal and child health information. This assistant does not diagnose or replace a healthcare professional."
    >
      <section className="feature-panel ai-chat-panel">
        {/* <p className="health-safety-notice">
          If you or a child may need urgent medical attention, contact a
          healthcare provider or emergency service now. Do not wait for an AI
          response.
        </p> */}

        <div className="ai-conversation" aria-live="polite">
          {conversation.length === 0 ? (
            <p className="ai-conversation-empty">
              {/* Ask a general health education question to begin. */}
            </p>
          ) : (
            conversation.map((entry) => (
              <article
                className={`ai-message ai-message-${entry.role}`}
                key={entry.id}
              >
                <h2>{entry.role === "user" ? "You" : "Jali Mama"}</h2>
                <p>{entry.text}</p>
              </article>
            ))
          )}
          {isSending && <p role="status">Jali Mama is preparing a response…</p>}
        </div>

        <form className="feature-form" onSubmit={handleSubmit}>
          <TextAreaField
            id="health-question"
            label="Your question"
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            maxLength={2000}
            rows={4}
            hint={`${message.length}/2,000 characters. Avoid sharing names or other identifying health information.`}
            required
          />
          {error && (
            <p className="feature-error" role="alert">
              {error}
            </p>
          )}
          <Button type="submit" disabled={isSending || !message.trim()}>
            {isSending ? "Sending…" : "Send question"}
          </Button>
        </form>

      
      </section>
    </FeaturePage>
  );
}

export default AiHealthAssistant;