One-line: the demo surface for the whole product story — the AI window with myDevices connected.

```jsx
<ChatPanel assistant="Claude" assistantIcon="../../assets/ai/claude.png" height={620}>
  <ChatMessage>Turn May's numbers into the monthly management review deck.</ChatMessage>
  <ChatMessage role="assistant" …>…</ChatMessage>
</ChatPanel>
```

The composer is deliberately inert — this is a proof surface, not a chat product. Never brand the panel as a myDevices UI; it belongs to the assistant.
