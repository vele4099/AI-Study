// ===============================================
// AI CONTROLLER — Takes user text and returns JSON
// ===============================================

export const parseText = async (req, res) => {
  const { text } = req.body;

  // Placeholder: this is where AI will go later
  // For now, we simulate parsing
  const fakeParsed = {
    original: text,
    wordCount: text.split(" ").length,
    summary: "This is where AI will summarize your text.",
    keyPoints: ["Point A", "Point B", "Point C"]
  };

  res.json({ success: true, parsed: fakeParsed });
};
