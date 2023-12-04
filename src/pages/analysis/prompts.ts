export const prompts: { [key: number]: string } = {
  0: `In the provided passage, pinpoint which of its sentences that could benefit from 
    supporting evidence from external sources. For each identified sentence, 
    specify a source that could be utilized to strengthen the argument or information 
    presented, and explain why. Structure your response in the format of a valid JSON object, 
    where the sentences identified are used as keys, and the supporting source is the value. 
    For example, a properly structured response could be:
    
    {"Apples are delicious.": "This sentence is subjective, so it can benefit from additional evidence. According to fruits.com, 70% of people like apples.", "Vegetables are disgusting": "This is an opinion, so it would benefit from some evidence. According to vegetables.com, most people dislike the taste of vegetables."}

    Ensure that your response can be parsed with JSON.parse(). Respond with ONLY the valid JSON object. Here is the provided passage: `,
};
