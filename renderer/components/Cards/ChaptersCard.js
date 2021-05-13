import React from "react";
import Link from "next/link";
import { useSelector } from "react-redux";

import ChapterNameIcon from "../Chapters/ChapterNameIcon";

const ChaptersCard = props => {
  const isDarkTheme = useSelector(({ theme }) => theme.dark);
  return (
    <Link href={`/${props.id}`}>
      <a className="block p-5 rounded-md bg-white hover:bg-indigo-50 dark:border-transparent border border-gray-50 dark:bg-gray-900 transition-colors duration-500">
        <div className="flex justify-between items-center font-signika">
          <div className="flex items-center">
            <div className="number-icon">
              <img className="icon" src="/images/star.svg" alt="" />
              <p className="number text-purple-700 dark:text-purple-300 transition-colors duration-500">
                {props.id}
              </p>
            </div>
            <div className="ml-3">
              <h5 className="text-lg font-semibold text-gray-700 dark:text-gray-400 transition-colors duration-500">
                {props.name}
              </h5>
              <span className="text-indigo-400">{props.translated_en}</span>
            </div>
          </div>
          <ChapterNameIcon
            id={props.id}
            color={isDarkTheme ? "#818CF8" : "#6D28D9"}
          />
        </div>
      </a>
    </Link>
  );
};

export default ChaptersCard;
