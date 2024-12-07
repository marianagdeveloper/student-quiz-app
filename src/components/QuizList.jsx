import React from "react";
import {useNavigate} from "react-router-dom";
import {quizzes} from "../data";

export const QuizList = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-row flex-wrap justify-center gap-4 my-10">
      {quizzes.map((quiz, index) => {
        return (
          <>
            <div
              className={`flex flex-col justify-between basis-[20%] bg-slate-500 rounded-2xl  overflow-hidden bg-gradient-to-r ${quiz.gradient} transition-all hover:scale-105`}
            >
              {/* Card Image and Title */}
              <div className="px-5 py-3 flex flex-col justify-center items-center ">
                <img src={quiz.image} alt={quiz.title} className="w-36" />
                <h1 className="text-base text-center font-semibold text-stone-100 bg-stone-600 rounded-2xl bg-opacity-60 mt-1 py-1.5 px-6">
                  {quiz.course}
                </h1>
              </div>
              {/* Card Description */}
              <div className=" text-stone-100 bg-stone-800 bg-opacity-60 p-3 px-5">
                <div>
                  <h1 className="text-sm font-semibold mb-4">{quiz.title}</h1>
                </div>
                <div className="flex justify-between text-xs">
                  <div>
                    <p>{quiz.questions.length} pregunta(s)</p>
                    {!quiz.isMinutes && <p>{quiz.timerMinutes} minutos</p>}
                  </div>
                  <button
                    onClick={() => navigate(`/quiz/${quiz.id}`)}
                    className="border px-5 py-1.5 rounded-lg transition-all font-bold hover:bg-yellow-500 hover:text-gray-900"
                  >
                    Ir a Examen
                  </button>
                </div>
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
};
