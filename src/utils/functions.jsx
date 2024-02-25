import React from "react";
    
// Adding line breaks to paragraphs
export const renderDescription = (text) => {
    return text.split('\n').map((line, index) => (
        <React.Fragment key={index}>
        {line}<br />
        </React.Fragment>
    ));
};

   