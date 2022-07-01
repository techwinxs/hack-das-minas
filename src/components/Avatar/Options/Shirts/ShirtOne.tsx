import { IOption } from "../typings";

const ShirtOne = ({ color }: IOption) => {
  return (
    <svg
      width="111"
      height="109"
      viewBox="0 0 111 109"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M109.515 44.8754C108.302 45.274 106.86 45.7401 105.245 46.2265L104.739 46.3853L104.644 46.4123C102.898 46.9561 100.955 47.5304 98.9015 48.1013C95.1859 49.1484 91.102 50.1888 87.116 50.9995V57.2486L87.0147 106.701C87.0147 106.908 86.9324 107.106 86.786 107.252C86.6395 107.397 86.441 107.479 86.2344 107.478H23.0677C22.6375 107.478 22.2877 107.131 22.284 106.701L22.2029 55.6171V51.3271C21.5713 51.2292 20.9126 51.1211 20.2336 50.9894C16.9098 50.3813 13.1029 49.4254 10.0324 47.9492C8.37448 47.1574 6.6739 46.4582 4.93849 45.8549C4.83715 45.8144 4.73919 45.7806 4.64123 45.7469C2.91513 45.1456 1.32414 44.6862 0 44.3417C3.1786 35.8597 10.1337 18.7338 16.4402 13.113C22.9055 7.34351 33.2791 3.85752 39.7477 1.98616L40.0011 1.91185C41.9164 1.35787 43.4702 0.952525 44.4464 0.675537C44.7133 2.38813 49.1755 3.74605 54.6477 3.74605C60.1199 3.74605 64.5854 2.39489 64.8557 0.675537H64.9097C65.8758 0.952525 67.4161 1.35112 69.3179 1.90171L69.5476 1.96927C76.0028 3.83725 86.3932 7.32662 92.8754 13.1163C99.3103 18.879 106.427 36.5826 109.515 44.8754Z"
        fill={color ? color : '#4DBEC4'}
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M22.2968 106.694C22.3061 107.494 22.9562 108.138 23.7561 108.14H86.9228C87.7229 108.14 88.3731 107.494 88.3787 106.694L88.4936 57.2048V51.5063C91.9221 50.7935 95.7324 49.8545 99.7859 48.7094C101.813 48.1486 103.741 47.5778 105.528 47.0204H105.576L105.63 47.0035L106.133 46.8448C107.508 46.4192 108.91 45.9733 110.416 45.4767C110.588 45.4213 110.73 45.2997 110.811 45.1389C110.891 44.9742 110.901 44.784 110.838 44.612C102.593 22.4665 96.766 15.0587 94.0266 12.6098C89.0509 8.16781 81.3324 4.47577 70.4488 1.32419L70.2056 1.25325C69.074 0.928972 68.0708 0.651985 67.2364 0.425665L65.7974 0.0270732C65.7371 0.00946266 65.6745 0.000367122 65.6117 4.99555e-05H65.5576C65.2218 -0.00400449 64.9341 0.239173 64.882 0.570915C64.7165 1.61469 61.0042 3.07056 55.3395 3.07056C49.6747 3.07056 45.9692 1.61469 45.807 0.574293C45.7696 0.383051 45.6547 0.215807 45.4897 0.112176C45.3246 0.00854524 45.1241 -0.0222542 44.9355 0.0270732L43.6418 0.385131C42.7804 0.618206 41.7029 0.912083 40.4835 1.26676L40.2369 1.3377C29.3431 4.50279 21.6348 8.17457 16.6659 12.6098C10.3627 18.2373 3.54612 34.7586 0.0432407 44.1053C-0.0242109 44.2846 -0.0123266 44.4842 0.0759345 44.6543C0.164196 44.8244 0.32053 44.949 0.506013 44.9971C2.08011 45.4058 3.62381 45.8753 5.09658 46.3854C5.1844 46.4158 5.27223 46.4462 5.39046 46.4935C7.10238 47.0903 8.78033 47.7804 10.4168 48.5607C13.0954 49.8376 16.5848 50.8712 20.7835 51.6414C21.2936 51.736 21.7868 51.8204 22.2023 51.888V55.5868C22.2006 55.6104 22.2006 55.6341 22.2023 55.6577L22.2968 106.694ZM23.5569 55.5867C23.5585 55.5642 23.5585 55.5416 23.5569 55.5191L23.5704 51.3272C23.5744 50.9914 23.3313 50.7036 22.9995 50.6516C22.8827 50.6317 22.7512 50.6098 22.6081 50.5859C22.168 50.5125 21.6181 50.4209 21.0471 50.3138C16.9598 49.5639 13.5853 48.564 11.0181 47.3412C9.34578 46.5432 7.63056 45.8384 5.88032 45.23C5.78296 45.1932 5.69585 45.1625 5.6126 45.1332C5.58898 45.1249 5.56567 45.1167 5.54253 45.1084C4.27581 44.6659 2.92465 44.2538 1.57349 43.8823C4.52578 36.0962 11.4336 19.0851 17.5746 13.6129C22.3239 9.3804 30.0762 5.6816 40.6389 2.6246L40.8754 2.55366C42.0813 2.20574 43.1487 1.91524 44.0067 1.68216L44.7633 1.47611C45.7497 2.99617 49.1985 4.41488 55.3497 4.41488C61.5008 4.41488 64.9665 2.98941 65.9495 1.46598L66.8818 1.7227C67.0701 1.77418 67.267 1.8274 67.4724 1.88289C68.1699 2.07136 68.964 2.28595 69.8409 2.5469L70.0604 2.61446C80.6096 5.66471 88.372 9.36689 93.1281 13.6129C99.3434 19.1628 106.353 36.5083 109.325 44.416C108.075 44.8247 106.893 45.1996 105.728 45.5611L105.245 45.7131L105.133 45.7435C103.35 46.3008 101.441 46.8683 99.4144 47.4324C95.1616 48.6282 91.2128 49.5977 87.6762 50.3172C87.3565 50.3823 87.1291 50.6666 87.1357 50.9927V57.2419L87.0344 106.694C87.0344 106.722 87.0232 106.748 87.0035 106.767C86.9838 106.786 86.9571 106.797 86.9296 106.796H23.7629C23.7351 106.797 23.7081 106.786 23.6879 106.767C23.6676 106.748 23.6557 106.722 23.6548 106.694L23.5569 55.5867Z"
        fill="#3B206C"
      />
      <path
        d="M24.659 51.817C24.2859 51.817 23.9834 51.5145 23.9834 51.1414V39.1836C23.9834 38.8105 24.2859 38.5081 24.659 38.5081C25.0321 38.5081 25.3346 38.8105 25.3346 39.1836V51.1414C25.3346 51.5145 25.0321 51.817 24.659 51.817Z"
        fill="#3B206C"
      />
      <path
        d="M86.1365 50.1551C85.7634 50.1551 85.4609 49.8527 85.4609 49.4796V37.8326C85.4609 37.4594 85.7634 37.157 86.1365 37.157C86.5096 37.157 86.8121 37.4594 86.8121 37.8326V49.4796C86.8121 49.8527 86.5096 50.1551 86.1365 50.1551Z"
        fill="#3B206C"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M24.6287 51.7782H24.6591C25.0323 51.7782 25.3347 51.4758 25.3347 51.1026V46.8431C25.3388 46.5073 25.0956 46.2196 24.7639 46.1675C24.647 46.1476 24.5155 46.1257 24.3725 46.1019C23.9323 46.0285 23.3825 45.9368 22.8114 45.8297C18.7242 45.0799 15.3496 44.08 12.7824 42.8572C11.1101 42.0592 9.3949 41.3544 7.64466 40.746C7.54736 40.7092 7.46029 40.6785 7.37709 40.6492C7.35342 40.6409 7.33006 40.6326 7.30687 40.6244C5.8037 40.1008 4.22284 39.6245 2.61159 39.2057C2.27966 39.1189 1.93538 39.2947 1.81102 39.6144C1.74777 39.7812 1.68697 39.9455 1.62861 40.1032C1.6184 40.1307 1.60827 40.1581 1.59822 40.1853C0.618625 42.8065 0.0376259 44.4989 0.0376259 44.5157C-0.0291001 44.7072 -0.00628591 44.9186 0.0997699 45.0914C0.205826 45.2642 0.383906 45.3803 0.584846 45.4075C2.71661 45.7924 4.81421 46.347 6.85761 47.0661L6.94205 47.0965L7.08393 47.1505C7.3474 47.2417 7.61426 47.3397 7.88787 47.4444C8.90799 47.8227 9.90109 48.2416 10.8402 48.6942C12.8568 49.667 15.4881 50.4372 18.6566 51.0182C19.3829 51.1533 20.1395 51.2749 20.9198 51.383L21.0853 51.41L21.3319 51.4404L21.9028 51.5148H21.9703L22.1223 51.535C23.5174 51.7073 24.4936 51.7782 24.6287 51.7782ZM7.32714 45.7859C5.44986 45.1349 3.53152 44.6091 1.58471 44.2118C1.84143 43.4821 2.28394 42.2458 2.87169 40.6211C4.24312 40.9926 5.58752 41.4081 6.87788 41.854C6.9657 41.8844 7.05353 41.9148 7.17176 41.9621C8.88368 42.5589 10.5616 43.249 12.1981 44.0294C14.8767 45.3062 18.3661 46.3398 22.5648 47.11C23.0749 47.2046 23.5681 47.289 23.9836 47.3566V50.3258C23.5681 50.2886 22.9837 50.2312 22.2676 50.1434H22.1527H22.0717L21.5076 50.0724L21.2508 50.0386L21.1427 50.0218H21.0887C20.3456 49.9339 19.6092 49.8123 18.8998 49.684C15.8462 49.1232 13.333 48.3801 11.4245 47.4681C10.4652 46.9985 9.43495 46.5628 8.38442 46.1743C8.10406 46.0662 7.82369 45.9649 7.58386 45.8805L7.40145 45.8129L7.32714 45.7859Z"
        fill="#3B206C"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M85.6942 51.11C85.8174 51.2154 85.9745 51.2729 86.1367 51.2721C86.1706 51.2734 86.2045 51.2712 86.238 51.2653C87.0656 51.1404 87.9641 50.9951 88.9944 50.8026H89.0281L89.1531 50.7789C89.349 50.7418 89.545 50.7046 89.724 50.6641C92.5749 50.1101 95.811 49.3264 99.3476 48.3333C100.925 47.8874 102.378 47.4585 103.651 47.0632L103.891 46.9889L104.114 46.918C107.009 46.0218 109.202 45.2611 110.002 44.9835C110.213 44.9106 110.327 44.871 110.333 44.871C110.679 44.7454 110.861 44.365 110.741 44.0164C110.738 43.9961 110.15 42.2768 109.16 39.6251C109.035 39.2855 108.664 39.1052 108.319 39.2164C106.82 39.696 105.424 40.1419 104.053 40.5675L103.57 40.7195L103.459 40.7499C101.675 41.3073 99.7665 41.8748 97.7397 42.4389C93.487 43.6347 89.5382 44.6041 86.0015 45.3236C85.6819 45.3888 85.4545 45.6731 85.4611 45.9992V50.5999C85.4612 50.7957 85.5462 50.9817 85.6942 51.11ZM86.8121 46.5458V46.5431L86.8087 46.5465C86.8099 46.5463 86.811 46.546 86.8121 46.5458ZM86.8121 46.5458V49.8095C87.4066 49.715 88.0417 49.6035 88.7308 49.4718H88.7814H88.8287H88.8794C88.9245 49.4629 88.9696 49.4542 89.0147 49.4456C89.1586 49.4179 89.302 49.3903 89.4435 49.3569C92.2776 48.8063 95.4764 48.0328 98.9793 47.0498C100.543 46.6073 101.986 46.1817 103.262 45.7831L103.702 45.648C106.269 44.8542 108.275 44.1718 109.241 43.8374C109.018 43.2024 108.633 42.1181 108.117 40.723C106.843 41.1385 105.641 41.5236 104.455 41.8884L103.952 42.0471L103.898 42.064H103.85C102.063 42.6214 100.135 43.1922 98.1078 43.753C94.0354 44.8943 90.2398 45.8331 86.8121 46.5458Z"
        fill="#3B206C"
      />
    </svg>
  );
};

export default ShirtOne;
