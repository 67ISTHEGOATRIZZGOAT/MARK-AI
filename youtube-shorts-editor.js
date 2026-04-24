// youtube-shorts-editor.js

function generateViralEditSuggestions(playerName, sport) {
    const suggestions = [];

    if (sport.toLowerCase() === 'soccer') {
        // Solo Player Edits
        suggestions.push(
            `${playerName}'s signature moves and skills compilation in slow motion.`
        );
        suggestions.push(
            `Solo dribbling showcase: Watch ${playerName} take on entire defenses.`
        );
        suggestions.push(
            `Highlight reel of ${playerName}'s top 10 goals with slow-motion effects.`
        );
        suggestions.push(
            `A compilation of ${playerName}'s best assists with commentary.`
        );
        suggestions.push(
            `A "day in the life" edit featuring ${playerName}'s training routine.`
        );
        suggestions.push(
            `Funny moments and bloopers featuring ${playerName} during matches.`
        );
        suggestions.push(
            `Behind-the-scenes footage of ${playerName}'s matches with fan reactions.`
        );
        
        // Reverse Edits
        suggestions.push(
            `${playerName}'s best goals played in reverse - mind-bending visual effect.`
        );
        suggestions.push(
            `Reverse slow-motion: Watch ${playerName}'s skills and tricks backwards.`
        );
        suggestions.push(
            `${playerName}'s match highlights reversed for a unique viral twist.`
        );
        suggestions.push(
            `Backwards replay compilation: ${playerName}'s assists in reverse motion.`
        );
    } else if (sport.toLowerCase() === 'cricket') {
        suggestions.push(
            `Top 10 sixes hit by ${playerName} in high-stakes matches.`
        );
        suggestions.push(
            `A bright edit showing ${playerName}'s wicket celebrations.`
        );
        suggestions.push(
            `Slow-mo highlights of ${playerName}'s best bowling spells.`
        );
        suggestions.push(
            `A fun edit featuring ${playerName}'s interactions with fans and teammates.`
        );
        suggestions.push(
            `An emotional tribute edit focusing on ${playerName}'s career milestones.`
        );
    } else {
        suggestions.push('Sport not recognized. Please enter either soccer or cricket.');
    }

    return suggestions;
}

// Example usage:
console.log(generateViralEditSuggestions('Ronaldo', 'soccer')); // Generates suggestions for soccer
console.log(generateViralEditSuggestions('Kohli', 'cricket')); // Generates suggestions for cricket