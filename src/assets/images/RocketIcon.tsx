type Props = {
  fill?: string
  className?: string
}

const RocketIcon = (props: Props) => {
  const { fill = '#131D47', className = '' } = props

  return (
    <svg
      width='78'
      height='78'
      viewBox='0 0 78 78'
      fill={fill}
      xmlns='http://www.w3.org/2000/svg'
      className={className}
    >
      <path d='M9.62543 77.8298C8.66399 77.5389 7.66245 77.3403 6.74739 76.9428C-0.0702515 73.9809 -1.98543 65.8342 2.21721 59.8023C6.57426 53.5488 15.5821 53.3097 20.4856 59.2717C20.8127 59.6694 21.1069 59.7632 21.5773 59.6767C26.8805 58.7019 32.0802 62.9735 32.1616 68.3597C32.2067 71.347 34.1117 73.2579 37.0866 73.2563C38.7326 73.2553 40.3966 73.3354 42.0204 73.1288C44.2922 72.8395 45.8595 71.0101 45.8475 68.7154C45.8249 64.3971 49.026 60.3381 53.6079 59.6664C54.5441 59.529 55.5216 59.6442 56.478 59.6868C56.8658 59.704 57.1557 59.7425 57.4675 59.3736C60.6847 55.571 64.7946 54.106 69.5825 55.4027C74.3794 56.702 77.0102 60.1487 77.8651 64.9944C77.8863 65.1147 77.954 65.2267 78 65.3425V68.236C77.9526 68.3498 77.884 68.4594 77.861 68.578C76.9775 73.1094 74.311 76.0438 69.9261 77.4341C69.4277 77.592 68.9132 77.699 68.4062 77.8298H9.62543ZM18.8174 65.7643C18.4535 64.9794 18.1288 64.2407 17.7726 63.5174C16.1727 60.2694 12.3735 58.7503 9.02264 60.0102C5.87424 61.1938 3.94807 65.0237 4.8194 68.3678C5.59328 71.3385 8.12305 73.2508 11.3508 73.2583C16.959 73.2716 22.5672 73.2624 28.1752 73.2605C28.3414 73.2605 28.5074 73.2388 28.7696 73.2203C27.893 71.6335 27.7034 69.9787 27.5319 68.2753C27.1952 64.9296 23.8906 63.2217 20.8819 64.7145C20.2069 65.0496 19.538 65.3975 18.8174 65.7643ZM49.4199 73.2282C49.4179 73.2276 49.465 73.2547 49.5125 73.2547C55.3741 73.2555 61.237 73.3287 67.0971 73.2274C71.1313 73.1576 73.8745 69.7112 73.3115 65.6959C72.8467 62.379 70.6241 60.1127 67.3518 59.6186C64.4902 59.1863 61.4738 60.9198 60.1484 63.7579C59.8414 64.4152 59.533 65.072 59.2132 65.7549C58.3317 65.3152 57.5361 64.8671 56.701 64.5116C54.0786 63.3952 51.1019 64.9857 50.5742 67.7878C50.4344 68.53 50.4957 69.3129 50.3313 70.0472C50.0908 71.121 49.7301 72.1677 49.4199 73.2282Z' />
      <path d='M18.48 54.9988C18.48 50.691 18.3306 46.4998 18.5278 42.3246C18.6816 39.0649 20.3154 36.4009 22.8936 34.373C23.2675 34.0789 23.3778 33.8378 23.2626 33.3623C22.6289 30.7465 22.1862 28.1038 22.2645 25.3949C22.5369 15.961 26.4755 8.42035 34.0241 2.79261C35.4162 1.75486 37.0004 0.970218 38.5224 0.11597C38.7736 -0.0250209 39.2224 -0.0408901 39.4789 0.0872837C48.2821 4.48136 53.6399 11.5098 55.4135 21.1945C56.1595 25.2683 55.7959 29.3263 54.7806 33.3253C54.6528 33.8288 54.7771 34.0837 55.1669 34.3988C58.0824 36.7569 59.5799 39.8097 59.5744 43.5798C59.5695 47.0814 59.5734 50.5832 59.5734 54.085V54.9728H45.764C45.764 56.1914 45.8653 57.3502 45.729 58.4803C45.635 59.2591 45.3088 60.0529 44.9193 60.7462C43.0706 64.037 41.165 67.2957 39.2777 70.5648C39.2179 70.6685 39.1363 70.7595 39.0114 70.9287C38.8332 70.6453 38.6841 70.4243 38.5506 70.1939C36.9514 67.432 35.4039 64.6386 33.7411 61.9154C32.4322 59.7711 31.6638 57.5815 32.5278 54.9988H18.48ZM46.2776 50.394C46.2994 50.324 46.3088 50.3002 46.3143 50.2756C47.5921 44.4984 48.8202 38.7095 50.1643 32.9479C51.0662 29.0816 51.5632 25.2228 50.7484 21.286C49.304 14.3062 45.5298 8.96595 39.4295 5.28229C39.2283 5.16083 38.8391 5.15412 38.6322 5.26725C30.2918 9.82224 25.3249 20.4731 27.2232 29.7922C28.0308 33.7564 28.9371 37.7005 29.8032 41.6527C30.4407 44.5627 31.086 47.4708 31.7309 50.394H46.2776ZM24.5314 39.1624C23.7775 40.1936 23.2345 41.1373 23.1869 42.2085C23.0732 44.7634 23.0712 47.3233 23.0291 49.8814C23.0262 50.0486 23.0661 50.2164 23.0838 50.3654H27.0059C26.1864 46.6552 25.3806 43.007 24.5314 39.1624ZM54.9919 50.379C54.9919 47.8978 55.0391 45.4893 54.9736 43.0841C54.9358 41.7039 54.4868 40.4172 53.4912 39.2118C52.6542 42.999 51.8443 46.6636 51.023 50.379H54.9919ZM39.0187 61.8102C39.7538 60.5198 40.4373 59.3991 41.0397 58.2364C41.542 57.2665 41.2598 56.1945 40.4284 55.517C39.5916 54.8353 38.4829 54.8235 37.6364 55.4871C36.7966 56.1455 36.4786 57.2428 36.9693 58.1973C37.577 59.3799 38.278 60.5147 39.0187 61.8102Z' />
      <path d='M39.0303 18.2881C42.8362 18.2903 45.8693 21.3348 45.8669 25.1505C45.8645 28.9507 42.8108 31.9932 39.0019 31.9907C35.2049 31.9882 32.1612 28.9314 32.1641 25.1229C32.1667 21.3202 35.215 18.2858 39.0303 18.2881ZM39.0517 22.8565C37.8563 22.8292 36.7486 23.9111 36.7356 25.119C36.7229 26.2922 37.7477 27.3597 38.9404 27.4158C40.1291 27.4717 41.2517 26.4114 41.2946 25.192C41.3365 24.0009 40.2644 22.8844 39.0517 22.8565Z' />
    </svg>
  )
}
export default RocketIcon
