import React, { useState } from "react";

const FeedbackSystem = () => {
  const [codeReviewAspects, setCodeReviewAspects] = useState([
    { name: "Readability", upVote: 0, downVote: 0 },
    { name: "Performance", upVote: 0, downVote: 0 },
    { name: "Security", upVote: 0, downVote: 0 },
    { name: "Documentation", upVote: 0, downVote: 0 },
    { name: "Testing", upVote: 0, downVote: 0 },
  ]);
  

  const addUpvote = (index) => {
    setCodeReviewAspects((prevAspects) =>
      prevAspects.map((aspect, i) =>
        i === index ? { ...aspect, upVote: aspect.upVote + 1 } : aspect
      )
    );
  };

  const addDownvote = (index) => {
    setCodeReviewAspects((prevAspects) =>
      prevAspects.map((aspect, i) =>
        i === index ? { ...aspect, downVote: aspect.downVote + 1 } : aspect
      )
    );
  };

  return (
    <div className="my-0 mx-auto text-center w-mx-1200">
      <div className="flex wrap justify-content-center mt-30 gap-30">
        {codeReviewAspects.map((aspect, index) => (
          <div key={index} className="pa-10 w-300 card">
            <h2>{aspect.name}</h2>
            <div className="flex my-30 mx-0 justify-content-around">
              <button
                className="py-10 px-15"
                data-testid={`upvote-btn-${index}`}
                onClick={() => addUpvote(index)}
              >
                👍 Upvote
              </button>
              <button
                className="py-10 px-15 danger"
                data-testid={`downvote-btn-${index}`}
                onClick={() => addDownvote(index)} 
              >
                👎 Downvote
              </button>
            </div>
            <p className="my-10 mx-0" data-testid={`upvote-count-${index}`}>
              Upvotes: <strong>{aspect.upVote}</strong>
            </p>
            <p className="my-10 mx-0" data-testid={`downvote-count-${index}`}>
              Downvotes: <strong>{aspect.downVote}</strong>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeedbackSystem;