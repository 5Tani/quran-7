import React from 'react';
import { Link } from 'react-router-dom';
import ButtonWithIcon from '../Buttons/ButtonWithIcon';
import Mode from './Mode';
import SearchBar from './SearchBar';

const logo = (
  <svg
    viewBox='0 0 501 501'
    xmlns='http://www.w3.org/2000/svg'
    className='w-10 h-10'
  >
    <path
      d='M436.5 150h-372V50h196.07a13.621 13.621 0 0113.533-.738l1.467.738H421.5c8.284 0 15 6.716 15 15z'
      fill='#ffb52d'
    />
    <path d='M94.5 150h-50V50h50z' fill='#f29500' />
    <path
      d='M436.5 90v325.28a245.696 245.696 0 01-43 39.625V182c0-5.523-4.477-10-10-10h-319V96.494A246.154 246.154 0 0180.062 80H426.5c5.523 0 10 4.477 10 10z'
      fill='#fff5f5'
    />
    <path d='M94.5 110v15h342v15h-342v30h-50V80h50v15h342v15z' fill='#badfe4' />
    <path d='M94.5 95v15h-50V95zm-50 45h50v-15h-50z' fill='#70bdc8' />
    <path
      d='M408.5 174v269.261C365.845 479.285 310.713 501 250.51 501c-91.976 0-172.114-50.683-214.01-125.643V159h357c8.284 0 15 6.716 15 15z'
      fill='#ffb52d'
    />
    <path
      d='M44.5 159h50v285.924a246.305 246.305 0 01-50-56.246z'
      fill='#f29500'
    />
    <path
      d='M34.5 140.275a245.523 245.523 0 0130-43.746v318.942a245.523 245.523 0 01-30-43.746z'
      fill='#ffc14f'
    />
    <path
      d='M49.5 180c-8.284 0-15-6.716-15-15V45c0-8.284 6.716-15 15-15 8.284 0 15 6.716 15 15v120c0 8.284-6.716 15-15 15z'
      fill='#ffd993'
    />
    <path
      d='M134.5 250l30-30h160l30 30v227.895C322.931 492.717 287.683 501 250.5 501c-41.967 0-81.47-10.552-116-29.147z'
      fill='#ffc14f'
    />
    <path
      d='M164.5 262.826a28.053 28.053 0 0112.848-9.978A28.035 28.035 0 01187.326 240a28.053 28.053 0 019.978 12.848 28.035 28.035 0 0112.848 9.978 28.053 28.053 0 01-12.848 9.978 28.035 28.035 0 01-9.978 12.848 28.053 28.053 0 01-9.978-12.848 28.053 28.053 0 01-12.848-9.978zm152.803 200.022A28.04 28.04 0 00307.325 450a28.053 28.053 0 00-9.978 12.848 28.036 28.036 0 00-12.848 9.978 28.053 28.053 0 0012.848 9.978 28.016 28.016 0 008.686 11.875c1.209-.28 2.415-.569 3.617-.867a28.012 28.012 0 007.652-11.008 28.035 28.035 0 0012.848-9.978 28.028 28.028 0 00-12.847-9.978zm-125.651 0A28.04 28.04 0 00181.674 450a28.053 28.053 0 00-9.978 12.848 28.041 28.041 0 00-12.848 9.978 28.053 28.053 0 0012.848 9.978 27.882 27.882 0 003.459 6.393 241.645 241.645 0 0010.425 3.11 27.957 27.957 0 006.071-9.503 28.03 28.03 0 0012.848-9.978 28.039 28.039 0 00-12.847-9.978zm105.696-190.045a28.035 28.035 0 009.978 12.848 28.053 28.053 0 009.978-12.848 28.03 28.03 0 0012.848-9.978 28.053 28.053 0 00-12.848-9.978 28.035 28.035 0 00-9.978-12.848 28.053 28.053 0 00-9.978 12.848 28.035 28.035 0 00-12.848 9.978 28.04 28.04 0 0012.848 9.978z'
      fill='#ffd993'
    />
    <path
      d='M360.303 245.196a7.5 7.5 0 012.197 5.304v224.216a243.865 243.865 0 01-15 7.047V253.606L321.893 228H168.106L142.5 253.606v222.619a244.592 244.592 0 01-15-8.084V250.5c0-1.989.79-3.896 2.197-5.304l30-30a7.5 7.5 0 015.302-2.196H325c1.989 0 3.897.79 5.304 2.197zm-27.045 114.103l-19.189-19.189a8.769 8.769 0 01-2.569-6.201V306.77a8.77 8.77 0 00-8.77-8.77h-27.138a8.767 8.767 0 01-6.201-2.569l-19.189-19.189a8.77 8.77 0 00-12.403 0l-19.189 19.189a8.769 8.769 0 01-6.201 2.569H185.27a8.77 8.77 0 00-8.77 8.77v27.138a8.767 8.767 0 01-2.569 6.201l-19.189 19.189a8.77 8.77 0 000 12.403l19.189 19.189a8.769 8.769 0 012.569 6.201v27.138a8.77 8.77 0 008.77 8.77h27.138c2.326 0 4.557.924 6.201 2.569l19.189 19.189a8.77 8.77 0 0012.403 0l19.189-19.189a8.769 8.769 0 016.201-2.569h27.138a8.77 8.77 0 008.77-8.77v-27.138c0-2.326.924-4.557 2.569-6.201l19.189-19.189a8.768 8.768 0 00.001-12.402z'
      fill='#ffd993'
    />
    <path
      d='M267.501 388.013c-4.59 12.012-12.671 22.299-23.001 29.62-10.331-7.321-18.411-17.608-23.001-29.62-12.012-4.59-22.299-12.671-29.62-23.001 7.321-10.331 17.608-18.411 29.62-23.001 4.59-12.012 12.671-22.299 23.001-29.62 10.331 7.321 18.411 17.608 23.001 29.62 12.012 4.59 22.299 12.671 29.62 23.001-7.321 10.33-17.608 18.41-29.62 23.001z'
      fill='#ffcd71'
    />
    <path
      d='M234.822 270.762l7.934-7.934a2 2 0 000-2.828l-7.934-7.934a2 2 0 00-2.828 0L224.06 260a2 2 0 000 2.828l7.934 7.934a2 2 0 002.828 0zm30.44 0l7.934-7.934a2 2 0 000-2.828l-7.934-7.934a2 2 0 00-2.828 0L254.5 260a2 2 0 000 2.828l7.934 7.934a2 2 0 002.828 0zm-30.44 210l7.934-7.934a2 2 0 000-2.828l-7.934-7.934a2 2 0 00-2.828 0L224.06 470a2 2 0 000 2.828l7.934 7.934a2 2 0 002.828 0zm30.44 0l7.934-7.934a2 2 0 000-2.828l-7.934-7.934a2 2 0 00-2.828 0L254.5 470a2 2 0 000 2.828l7.934 7.934a2 2 0 002.828 0zm-9.824-104.813a30.744 30.744 0 01-10.938 14.085 30.738 30.738 0 01-10.938-14.085 30.744 30.744 0 01-14.085-10.938 30.738 30.738 0 0114.085-10.938 30.744 30.744 0 0110.938-14.085 30.738 30.738 0 0110.938 14.085 30.744 30.744 0 0114.085 10.938 30.738 30.738 0 01-14.085 10.938z'
      fill='#ffe7c0'
    />
    <path
      d='M323.5 31.5v255.716c0 3.834-2.754 7.265-6.561 7.727a7.502 7.502 0 01-8.439-7.443V31.89c0-8.289-6.714-16.072-14.968-16.821-9.784-.887-18.032 6.827-18.032 16.43V50h-15V32.138c0-16.571 12.547-30.8 29.071-32.046C308.032-1.3 323.5 13.328 323.5 31.5z'
      fill='#bc3f2a'
    />
    <path
      d='M177.978 264.24l7.934 7.934a2 2 0 002.828 0l7.934-7.934a2 2 0 000-2.828l-7.934-7.934a2 2 0 00-2.828 0l-7.934 7.934a2 2 0 000 2.828zm120 0l7.934 7.934a2 2 0 002.828 0l7.934-7.934a2 2 0 000-2.828l-7.934-7.934a2 2 0 00-2.828 0l-7.934 7.934a2 2 0 000 2.828zm0 210l7.934 7.934a2 2 0 002.828 0l7.934-7.934a2 2 0 000-2.828l-7.934-7.934a2 2 0 00-2.828 0l-7.934 7.934a2 2 0 000 2.828zm-125.652 0l7.934 7.934a2 2 0 002.828 0l7.934-7.934a2 2 0 000-2.828l-7.934-7.934a2 2 0 00-2.828 0l-7.934 7.934a2 2 0 000 2.828z'
      fill='#ffa90b'
    />
    <path
      d='M323.5 184v166.125c0 3.834-2.754 7.265-6.561 7.727a7.502 7.502 0 01-8.439-7.443V184.285c0-3.834 2.754-7.265 6.561-7.727A7.502 7.502 0 01323.5 184z'
      fill='#d1462a'
    />
    <path
      d='M352.368 454.601c-10.462 7.079-60.705 7.079-71.166 0-8.637-18.067-6.372-41.315 6.793-56.665l24.183-28.197c-6.145-1.952-10.598-7.703-10.598-14.494 0-8.397 6.807-15.205 15.205-15.205 8.397 0 15.205 6.807 15.205 15.205 0 6.792-4.453 12.542-10.598 14.494l24.183 28.197c13.165 15.35 15.43 38.597 6.793 56.665z'
      fill='#ea552d'
    />
    <path
      d='M331.99 292.705c0 8.397-6.807 15.205-15.205 15.205-8.397 0-15.205-6.807-15.205-15.205 0-8.397 6.807-15.205 15.205-15.205 8.397 0 15.205 6.807 15.205 15.205zm13.585 105.231l-11.125-12.972c.033 1.656.05 3.336.05 5.036 0 27.614-4.477 50-10 50s-10-22.386-10-50c0-.497.002-.992.005-1.485l-8.079 9.42c-13.165 15.35-15.43 38.598-6.793 56.665 4.162 2.816 14.622 4.512 26.368 5.087 11.746-.575 22.206-2.271 26.368-5.087 8.636-18.067 6.371-41.314-6.794-56.664z'
      fill='#f76937'
    />
  </svg>
);

const setting = (
  <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24'>
    <path
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={2}
      d='M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z'
    />
    <path
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={2}
      d='M15 12a3 3 0 11-6 0 3 3 0 016 0z'
    />
  </svg>
);

const Navbar = () => {
  return (
    <div className='bg-gray-50 dark:bg-gray-900 border-b border-transparent dark:border-gray-800 transition-colors duration-500'>
      <div className='container px-5 sm:px-0 mx-auto'>
        <nav className='flex py-4 justify-between items-center'>
          <Link
            to='/'
            className='focus:outline-none hover:text-gray-600 text-lg font-semibold text-gray-500 dark:text-gray-300 dark:hover:text-gray-100 transition-colors duration-500'
          >
            <div className='flex justify-center items-center'>
              {logo}
              <h3 className='ml-3 text-lg'>Al Quran</h3>
            </div>
          </Link>
          <div className='justify-end'>
            <div className='flex items-center'>
              <SearchBar />
              <Mode />
              <ButtonWithIcon
                name='Settings'
                icon={setting}
                onClick={() => alert('Settings')}
              />
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;