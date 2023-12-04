export const prompts: { [key: number]: string } = {
  0: `In the provided passage, pinpoint which of its sentences that could benefit from 
    supporting evidence from external sources. For each identified sentence, 
    specify a source that could be utilized to strengthen the argument or information 
    presented, and explain why. Structure your response in the format of a valid JSON object, 
    where the sentences identified are used as keys, and the supporting source is the value. 
    For example, a properly structured response could be:
    
    {"apples are delicious.": "This sentence is subjective, so it can benefit from additional evidence. According to fruits.com, 70% of people like apples.", "vegetables are disgusting": "This is an opinion, so it would benefit from some evidence. According to vegetables.com, most people dislike the taste of vegetables."}

    Ensure that your response is a valid JSON object that can be parsed with JSON.parse(). Remove any trailing or leading whitespace. Respond with ONLY the valid JSON object. Here is the provided passage: `,
  1: `In the provided passage, pinpoint which of its sentences require further elaboration. For each identified sentence, 
    rewrite it so that it is adequately elaborated. Structure your response in the format of a valid JSON object, 
    where the sentences identified are used as keys, and the elaborated version of the sentence is the value. 
    For example, a properly structured response could be:
    
    {"apples are delicious.": "The sweetness and crunchiness of apples makes them taste delicious.", "vegetables are disgusting": "The bitter taste of vegetables makes them disgusting to many people."}

    Ensure that your response is a valid JSON object that can be parsed with JSON.parse(). Remove any trailing or leading whitespace. Respond with ONLY the valid JSON object. Here is the provided passage: `,
  2: `In the provided passage, pinpoint which of its sentences are grammatically incorrect or use incorrect punctuation. For each identified sentence, 
    rewrite it so that it is grammatically correct and uses correct punctuation. Structure your response in the format of a valid JSON object, 
    where the sentences identified are used as keys, and the grammatically correct version of the sentence is the value. 
    For example, a properly structured response could be:
    
    {"apples is delicious.": "Apples are delicious.", "Their so nice.": "They're so nice."}

    Ensure that your response is a valid JSON object that can be parsed with JSON.parse(). Remove any trailing or leading whitespace. Respond with ONLY the valid JSON object. Here is the provided passage: `,
};
