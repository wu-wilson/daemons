export const introduction = `\
Hi there! We're Wilson Wu and Wyatt Madden, the guys that built this website. \
We're both students at Emory, and we made this as our final project for \
CS 485, Human-AI Interaction. \n
`;

export const appDescription = `\
We use OpenAI's GPT-3.5 Turbo, a language learning model, to generate suggestions for \
improved writing. In this webapp, there are 3 "daemons" or persona's that the model can take, \
each emphasizing a distinct way to improve a provided text: \n
`;

export const researcherDescription = `\
This daemon attempts to identify sentences that could benefit from \
supporting evidence from external sources. In this daemon's feedback, it will typically \
provide a source or example to showcase the credibility and context behing the narrative \
presented. As such, this daemon is best used in contexts where factual evidence is key.\n
`;

export const elaboratorDescription = `\
This daemon attempts to identify sentences that require further \
elaboration. Then, it will rewrite the sentence so it is adequately explained. \
As such, this daemon is best used in contexts where clarity is paramount.\n
`;

export const grammaristDescription = `\
The Grammarist: This daemon attempts to identify sentences that grammatically incorrect \
or use incorrect punctuation. Once it finds them, it will rewrite the sentence to \
correct or improve its grammar. As such, this daemon is best used in contexts where \
a text must be professional and scholarly.\n
`;

export const limitations = `\
Since this webapp uses GPT-3.5 Turbo, the suggestions of our daemons are highly susceptible \
to poor prompting. We are still fine-tuning our prompts, you may notice some occassional hiccups. \
As of right now, we are aware of the following limitations:\n
1) Complex punctuation may cause Daemon's Workshop to crash\n
2) Passages have been limited to 1000 characters to avoid excessively long response times\n
3) Sporadic trailing and leading whitespace can cause unexpected behaviors like crashes or no results\n
If you encounter any other issues with Daemon's workshop, feel free to shoot us email! In the meantime, \
we'll keep trying to iron these things out.
`;
