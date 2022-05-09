import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  async showDefaultRoute() {
    return `
      <html style="margin: 0; padding: 0;">
      <body style="margin: 0; padding: 0;
        background-color: #0C1114;
        width: 100%;
        height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
      ">

        <svg
          width="166"
          height="166"
          style="width: 300px; height: 300px;"
          viewBox="0 0 166 166"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M135.338 94.6043C126.241 82.8201 113.596 77.2089 108.106 75.21C109.463 70.6191 110.383 67.1711 110.383 67.1711L82.9619 51.3181V74.316C103.134 74.316 121.51 82.0022 135.338 94.6043Z" fill="#FEFEFE"/>
          <path d="M82.9619 51.3181L55.5408 67.1711C55.5408 67.1711 56.4624 70.6191 57.8181 75.21C52.3297 77.2089 39.6843 82.8201 30.5872 94.6043C44.4136 82.0022 62.7912 74.316 82.9619 74.316V51.3181Z" fill="#8AACD6"/>
          <path d="M82.9619 88.0786V114.73C82.9636 114.729 96.6102 102.858 100.568 95.993C101.025 95.2028 101.506 94.212 102 93.0776C103.797 93.2212 106.859 93.6033 111.154 94.6045C102.647 90.4251 93.0793 88.0786 82.9619 88.0786Z" fill="#8AACD6"/>
          <path d="M54.7712 94.6045C59.0665 93.6033 62.1288 93.2212 63.9255 93.0776C64.42 94.212 64.9007 95.2028 65.3572 95.993C69.3153 102.858 82.9619 114.73 82.9619 114.73V88.0786C72.8462 88.0786 63.2787 90.4251 54.7712 94.6045Z" fill="#FEFEFE"/>
          <path d="M85.2117 108.471C89.1992 107.585 92.0056 103.933 91.9364 99.9059C91.8171 96.8886 90.4044 94.0925 87.8297 92.4429C85.3829 90.8711 82.2773 90.7258 79.649 91.9137C77.2921 92.9772 75.5249 95.1334 74.8039 97.5871C74.0707 100.082 74.6067 102.832 76.0731 104.955C78.0875 107.87 81.7672 109.237 85.2117 108.471Z" fill="#0C1114"/>
          <path d="M91.5766 99.9061C91.6094 101.836 90.9886 103.62 89.8803 105.056C89.8318 104.722 89.8163 104.383 89.7177 104.058C89.7108 104.032 89.697 104.013 89.6814 104.001C90.1517 102.913 90.4734 101.713 90.8054 100.575C90.8175 100.568 90.8313 100.558 90.8434 100.546C91.1114 100.231 91.3172 99.875 91.5541 99.5396C91.5627 99.6623 91.5714 99.7834 91.5766 99.9061Z" fill="#FEFEFE"/>
          <path d="M90.591 100.413C90.591 100.416 90.5875 100.418 90.5875 100.423C90.2469 101.582 89.927 102.818 89.4428 103.923C89.4394 103.928 89.4394 103.933 89.4394 103.94C88.663 104.397 87.8503 104.748 86.9459 104.812C86.652 104.393 86.313 104.011 86.0052 103.603C85.7182 103.221 85.4381 102.837 85.1165 102.483C85.343 101.948 85.6317 101.443 85.8392 100.899C86.0485 100.342 86.1453 99.747 86.3442 99.185C87.3108 98.9498 88.2099 98.5245 89.1419 98.1855C89.6728 98.853 90.3247 99.5879 90.591 100.413Z" fill="#FEFEFE"/>
          <path d="M89.979 94.9796C89.6833 94.9087 89.3461 94.9173 89.0729 94.9277C88.7305 94.6216 88.383 94.3225 88.0285 94.0303C87.4561 93.5599 86.7817 93.221 86.2301 92.7247C86.225 92.7213 86.2198 92.7178 86.2146 92.7144C86.1299 92.4152 85.9656 92.1558 85.7979 91.8982C86.3183 92.0659 86.825 92.2838 87.3091 92.5501C88.4054 93.1536 89.2977 93.9922 89.979 94.9796Z" fill="#FEFEFE"/>
          <path d="M88.8427 95.1354C89.154 96.0691 89.1177 96.9977 89.0208 97.9643C88.1078 98.2998 87.2277 98.7096 86.2818 98.9413C86.2749 98.9361 86.2697 98.9309 86.2645 98.9275C85.2703 98.2185 84.4749 97.2502 83.3336 96.7591C83.3077 96.7487 83.2852 96.747 83.261 96.7504C83.2679 95.7285 83.325 94.7083 83.3077 93.6846C83.3129 93.6846 83.3163 93.6846 83.3198 93.6829C83.8039 93.5221 84.2916 93.3907 84.7948 93.3007C85.2322 93.2229 85.6732 93.1365 86.0553 92.9065C86.6086 93.401 87.2744 93.7434 87.8502 94.2086C88.1891 94.4835 88.5176 94.7705 88.8427 95.0593C88.8341 95.0818 88.8341 95.1077 88.8427 95.1354Z" fill="#FEFEFE"/>
          <path d="M86.7107 104.917C86.709 104.926 86.7055 104.933 86.7055 104.943C86.6969 105.4 86.3165 105.827 86.0484 106.171C85.7631 106.539 85.4484 106.864 85.0507 107.115C85.0127 107.124 84.9798 107.158 84.966 107.2C83.7867 107.39 82.6022 107.469 81.4281 107.21C81.416 107.163 81.3832 107.125 81.3399 107.115C80.944 106.864 80.6275 106.539 80.3422 106.171C80.0742 105.827 79.6938 105.4 79.6851 104.943C79.6851 104.933 79.6817 104.924 79.6799 104.917C79.9376 104.552 80.2315 104.215 80.503 103.861C80.8073 103.466 81.0944 103.062 81.4264 102.692C82.0039 102.693 82.578 102.752 83.1556 102.794C83.7694 102.839 84.3331 102.754 84.9383 102.692C84.9452 102.69 84.9522 102.687 84.9591 102.685C85.2928 103.057 85.5868 103.461 85.8876 103.861C86.1574 104.219 86.4531 104.552 86.7107 104.917Z" fill="#FEFEFE"/>
          <path d="M85.1165 107.43C85.445 107.639 85.822 107.717 86.2007 107.798C84.2899 108.542 82.1717 108.49 80.2834 107.779C80.631 107.703 80.9751 107.622 81.2777 107.426C81.2898 107.433 81.3002 107.44 81.314 107.442C82.5746 107.732 83.849 107.639 85.1165 107.43Z" fill="#FEFEFE"/>
          <path d="M80.5515 100.899C80.7366 101.448 81.0495 101.95 81.2743 102.483C80.9544 102.837 80.6709 103.219 80.3855 103.603C80.0795 104.011 79.7388 104.393 79.4449 104.812C78.5405 104.748 77.7296 104.397 76.9532 103.94C76.9514 103.933 76.9514 103.928 76.948 103.923C76.4638 102.818 76.1439 101.582 75.805 100.423C75.8033 100.418 75.7998 100.416 75.7998 100.413C76.0661 99.5879 76.718 98.853 77.2488 98.1855C78.1826 98.5245 79.08 98.9498 80.0484 99.185C80.2455 99.747 80.3631 100.333 80.5515 100.899Z" fill="#FEFEFE"/>
          <path d="M80.5791 91.9172C80.4183 92.1697 80.2592 92.4222 80.1762 92.7144C80.1711 92.7178 80.1659 92.7213 80.1624 92.7248C79.6091 93.2193 78.9399 93.5651 78.3624 94.0303C78.0061 94.3208 77.6603 94.6217 77.3197 94.9277C77.0707 94.9173 76.7698 94.9121 76.4966 94.9623C77.2332 93.9715 78.1791 93.1294 79.2563 92.5155C79.6817 92.2717 80.1261 92.0729 80.5791 91.9172Z" fill="#FEFEFE"/>
          <path d="M76.7093 104.001C76.6937 104.013 76.6799 104.032 76.6729 104.058C76.583 104.354 76.5623 104.661 76.5225 104.966C75.3795 103.423 74.7882 101.495 74.8504 99.5603C75.0821 99.8888 75.2844 100.24 75.549 100.546C75.5611 100.558 75.5732 100.568 75.5853 100.575C75.919 101.713 76.2389 102.913 76.7093 104.001Z" fill="#FEFEFE"/>
          <path d="M83.0553 93.6777C83.0744 94.7117 83.0138 95.744 83.0086 96.7781V96.7798C81.8933 97.2761 81.1066 98.2288 80.1261 98.9274C80.1209 98.9309 80.1157 98.9361 80.1106 98.9413C79.163 98.7096 78.2828 98.2997 77.3698 97.9643C77.273 96.9977 77.2367 96.0691 77.5479 95.1354C77.5566 95.1077 77.5566 95.0818 77.5479 95.0593C77.8747 94.7705 78.205 94.4852 78.5422 94.2085C79.1146 93.7382 79.782 93.401 80.3354 92.9082C80.6708 93.1088 81.0512 93.1952 81.4368 93.2713C81.9884 93.3785 82.521 93.5013 83.0553 93.6777Z" fill="#FEFEFE"/>
          <path d="M81.0874 107.248C80.7174 107.461 80.2903 107.514 79.8753 107.613C79.3133 107.367 78.7738 107.063 78.2706 106.7C77.6896 106.281 77.1743 105.789 76.7334 105.242C76.7956 104.895 76.806 104.54 76.8977 104.198C77.6758 104.647 78.4937 104.986 79.3963 105.061C79.4102 105.073 79.4274 105.081 79.4465 105.087C79.5122 105.519 79.82 105.903 80.0776 106.238C80.3733 106.624 80.6915 106.971 81.0874 107.248Z" fill="#8AACD6"/>
          <path d="M89.4947 104.198C89.5915 104.564 89.5967 104.945 89.6711 105.317C88.8601 106.287 87.8157 107.08 86.5949 107.634C86.1557 107.519 85.6975 107.475 85.3049 107.248C85.6992 106.971 86.0173 106.624 86.313 106.238C86.5724 105.903 86.8802 105.519 86.9442 105.087C86.9632 105.081 86.9805 105.073 86.9943 105.061C87.8969 104.986 88.7148 104.647 89.4947 104.198Z" fill="#8AACD6"/>
          <path d="M90.2228 95.3567C90.9266 96.5014 91.3624 97.8173 91.518 99.1712C91.2551 99.505 91.0476 99.8767 90.79 100.214C90.4839 99.3856 89.839 98.6628 89.3012 97.9833C89.296 97.966 89.2874 97.9504 89.2753 97.9383C89.3686 96.9959 89.398 96.0846 89.1196 95.1751C89.4758 95.1595 89.9548 95.1492 90.2228 95.3567Z" fill="#8AACD6"/>
          <path d="M85.4294 91.7877C85.611 92.0799 85.8237 92.3583 85.9378 92.6834C85.5729 92.9065 85.1458 92.9808 84.7274 93.0586C84.2259 93.1503 83.7383 93.2817 83.2524 93.4408C83.2282 93.4477 83.2092 93.4632 83.1953 93.4788C83.1815 93.4632 83.1625 93.4477 83.1383 93.4408C82.7043 93.2972 82.2668 93.1693 81.8172 93.0863C81.3503 92.9998 80.8627 92.9324 80.4529 92.6834C80.567 92.3618 80.7745 92.0868 80.9561 91.7981C82.4138 91.3779 83.9648 91.3865 85.4294 91.7877Z" fill="#8AACD6"/>
          <path d="M77.1155 97.9383C77.1034 97.9504 77.0948 97.966 77.0896 97.9832C76.5518 98.6628 75.9086 99.3856 75.6008 100.214C75.3431 99.8767 75.1356 99.5049 74.8728 99.1712C74.9869 97.7757 75.4867 96.4477 76.2579 95.2996C76.5345 95.1526 76.953 95.163 77.2712 95.1751C76.9928 96.0846 77.0222 96.9959 77.1155 97.9383Z" fill="#8AACD6"/>
          <path d="M86.1003 99.1176C85.9014 99.6814 85.7838 100.266 85.5936 100.831C85.4086 101.39 85.0887 101.9 84.8622 102.443C84.8622 102.445 84.8605 102.446 84.8605 102.448C84.3607 102.502 83.8835 102.573 83.3751 102.555C82.7578 102.534 82.1457 102.453 81.5301 102.443C81.3018 101.898 81.0062 101.385 80.7969 100.831C80.5842 100.274 80.4891 99.6796 80.2903 99.1176C81.2655 98.4121 82.0592 97.4594 83.1832 96.9752C83.1901 96.9735 83.1901 96.97 83.1953 96.9666C83.2005 96.97 83.2022 96.9735 83.2074 96.9752C84.3313 97.4594 85.125 98.4121 86.1003 99.1176Z" fill="#8AACD6"/>
          <path d="M76.6731 104.058C76.68 104.032 76.6938 104.013 76.7094 104.001C76.2391 102.913 75.9192 101.713 75.5854 100.575C75.5733 100.568 75.5612 100.558 75.5491 100.546C75.2846 100.24 75.0823 99.8887 74.8505 99.5601C74.7883 101.495 75.3797 103.423 76.5226 104.965C76.5624 104.661 76.5832 104.353 76.6731 104.058ZM77.0898 97.9831C77.095 97.9658 77.1036 97.9503 77.1158 97.9382C77.0224 96.9958 76.993 96.0845 77.2714 95.1749C76.9532 95.1628 76.5348 95.1525 76.2581 95.2994C75.4869 96.4476 74.9871 97.7756 74.873 99.1711C75.1359 99.5048 75.3434 99.8766 75.601 100.214C75.9088 99.3855 76.552 98.6627 77.0898 97.9831ZM80.1764 92.7143C80.2594 92.4221 80.4185 92.1697 80.5793 91.9172C80.1262 92.0728 79.6818 92.2717 79.2565 92.5155C78.1792 93.1293 77.2333 93.9715 76.4967 94.9623C76.7699 94.9121 77.0708 94.9173 77.3198 94.9277C77.6604 94.6216 78.0063 94.3207 78.3625 94.0302C78.94 93.5651 79.6092 93.2193 80.1625 92.7247C80.166 92.7213 80.1712 92.7178 80.1764 92.7143ZM79.8755 107.613C80.2905 107.514 80.7176 107.461 81.0877 107.248C80.6917 106.971 80.3735 106.624 80.0778 106.238C79.8202 105.903 79.5124 105.519 79.4467 105.087C79.4277 105.081 79.4104 105.073 79.3965 105.061C78.4939 104.986 77.676 104.647 76.8979 104.198C76.8062 104.54 76.7959 104.895 76.7336 105.242C77.1745 105.789 77.6898 106.281 78.2708 106.7C78.774 107.063 79.3135 107.367 79.8755 107.613ZM81.2744 102.482C81.0496 101.95 80.7366 101.448 80.5516 100.898C80.3631 100.333 80.2455 99.7469 80.0484 99.1849C79.0801 98.9497 78.1827 98.5243 77.2489 98.1854C76.718 98.8529 76.0661 99.5878 75.7999 100.413C75.7999 100.416 75.8033 100.418 75.805 100.423C76.144 101.582 76.4639 102.818 76.948 103.923C76.9515 103.928 76.9515 103.933 76.9532 103.94C77.7296 104.397 78.5406 104.748 79.4449 104.812C79.7389 104.393 80.0795 104.011 80.3856 103.603C80.6709 103.219 80.9545 102.837 81.2744 102.482ZM83.0088 96.7779C83.0139 95.7438 83.0745 94.7115 83.0554 93.6775C82.5211 93.5011 81.9885 93.3783 81.4369 93.2711C81.0513 93.1951 80.6709 93.1086 80.3355 92.908C79.7821 93.4008 79.1147 93.738 78.5423 94.2083C78.2051 94.485 77.8749 94.7703 77.548 95.0591C77.5567 95.0816 77.5567 95.1075 77.548 95.1352C77.2368 96.0689 77.2731 96.9975 77.3699 97.9641C78.2829 98.2996 79.1631 98.7094 80.1107 98.9411C80.1159 98.9359 80.121 98.9307 80.1262 98.9272C81.1067 98.2287 81.8934 97.2759 83.0088 96.7796V96.7779ZM85.938 92.6832C85.8238 92.3581 85.6112 92.0797 85.4296 91.7875C83.965 91.3863 82.4139 91.3777 80.9562 91.7979C80.7747 92.0867 80.5672 92.3616 80.453 92.6832C80.8629 92.9322 81.3505 92.9997 81.8174 93.0861C82.2669 93.1691 82.7044 93.2971 83.1384 93.4406C83.1627 93.4475 83.1817 93.4631 83.1955 93.4786C83.2093 93.4631 83.2284 93.4475 83.2526 93.4406C83.7385 93.2815 84.2261 93.1501 84.7275 93.0585C85.146 92.9806 85.5731 92.9063 85.938 92.6832ZM85.5939 100.831C85.7841 100.266 85.9017 99.6812 86.1005 99.1174C85.1253 98.4119 84.3316 97.4592 83.2076 96.975C83.2024 96.9733 83.2007 96.9698 83.1955 96.9664C83.1903 96.9698 83.1903 96.9733 83.1834 96.975C82.0594 97.4592 81.2658 98.4119 80.2905 99.1174C80.4894 99.6794 80.5845 100.274 80.7972 100.831C81.0064 101.384 81.3021 101.898 81.5303 102.443C82.1459 102.453 82.758 102.534 83.3753 102.555C83.8837 102.572 84.361 102.501 84.8607 102.448C84.8607 102.446 84.8624 102.444 84.8624 102.443C85.0889 101.9 85.4088 101.39 85.5939 100.831ZM86.2008 107.798C85.8221 107.717 85.4452 107.639 85.1166 107.43C83.8491 107.639 82.5747 107.732 81.3142 107.442C81.3003 107.44 81.29 107.433 81.2779 107.426C80.9753 107.621 80.6312 107.703 80.2836 107.779C82.1718 108.49 84.2901 108.541 86.2008 107.798ZM86.7057 104.943C86.7057 104.933 86.7092 104.926 86.7109 104.917C86.4533 104.552 86.1576 104.218 85.8878 103.861C85.5869 103.461 85.293 103.056 84.9593 102.685C84.9523 102.686 84.9454 102.69 84.9385 102.692C84.3333 102.754 83.7696 102.839 83.1557 102.794C82.5782 102.752 82.0041 102.693 81.4266 102.692C81.0946 103.062 80.8075 103.466 80.5032 103.861C80.2317 104.215 79.9378 104.552 79.6801 104.917C79.6818 104.924 79.6853 104.933 79.6853 104.943C79.6939 105.4 80.0744 105.827 80.3424 106.171C80.6277 106.539 80.9441 106.864 81.3401 107.115C81.3833 107.125 81.4162 107.163 81.4283 107.21C82.6024 107.469 83.7869 107.39 84.9662 107.2C84.98 107.158 85.0129 107.123 85.0509 107.115C85.4486 106.864 85.7633 106.539 86.0486 106.171C86.3167 105.827 86.6971 105.4 86.7057 104.943ZM89.0211 97.9641C89.1179 96.9975 89.1542 96.0689 88.843 95.1352C88.8343 95.1075 88.8343 95.0816 88.843 95.0591C88.5179 94.7703 88.1893 94.4833 87.8504 94.2083C87.2746 93.7432 86.6089 93.4008 86.0556 92.9063C85.6734 93.1363 85.2325 93.2227 84.795 93.3005C84.2918 93.3905 83.8042 93.5219 83.32 93.6827C83.3165 93.6844 83.3131 93.6844 83.3079 93.6844C83.3252 94.7081 83.2681 95.7283 83.2612 96.7502C83.2854 96.7468 83.3079 96.7485 83.3338 96.7589C84.4751 97.2499 85.2705 98.2183 86.2648 98.9272C86.27 98.9307 86.2752 98.9359 86.2821 98.9411C87.2279 98.7094 88.1081 98.2996 89.0211 97.9641ZM89.0729 94.9277C89.3462 94.9173 89.6833 94.9087 89.979 94.9796C89.2977 93.9922 88.4055 93.1536 87.3092 92.5501C86.825 92.2838 86.3184 92.0659 85.7979 91.8982C85.9656 92.1558 86.1299 92.4152 86.2146 92.7143C86.2198 92.7178 86.225 92.7213 86.2302 92.7247C86.7818 93.221 87.4562 93.5599 88.0285 94.0302C88.383 94.3225 88.7306 94.6216 89.0729 94.9277ZM89.6712 105.317C89.5969 104.945 89.5917 104.564 89.4949 104.198C88.715 104.647 87.8971 104.986 86.9945 105.061C86.9807 105.073 86.9634 105.081 86.9443 105.087C86.8804 105.519 86.5726 105.903 86.3132 106.238C86.0175 106.624 85.6993 106.971 85.3051 107.248C85.6976 107.475 86.1558 107.519 86.5951 107.634C87.8158 107.08 88.8603 106.287 89.6712 105.317ZM90.5877 100.423C90.5877 100.418 90.5912 100.416 90.5912 100.413C90.3249 99.5878 89.673 98.8529 89.1421 98.1854C88.2101 98.5243 87.3109 98.9497 86.3443 99.1849C86.1455 99.7469 86.0486 100.342 85.8394 100.898C85.6319 101.443 85.3431 101.948 85.1166 102.482C85.4382 102.837 85.7184 103.221 86.0054 103.603C86.3132 104.011 86.6521 104.393 86.9461 104.812C87.8504 104.748 88.6631 104.397 89.4395 103.94C89.4395 103.933 89.4395 103.928 89.443 103.923C89.9272 102.818 90.2471 101.582 90.5877 100.423ZM91.518 99.1711C91.3624 97.8171 90.9266 96.5012 90.2228 95.3565C89.9548 95.149 89.4758 95.1594 89.1196 95.1749C89.398 96.0845 89.3686 96.9958 89.2753 97.9382C89.2874 97.9503 89.296 97.9658 89.3012 97.9831C89.839 98.6627 90.4839 99.3855 90.79 100.214C91.0477 99.8766 91.2552 99.5048 91.518 99.1711ZM89.8805 105.055C90.9889 103.62 91.6096 101.836 91.5768 99.9059C91.5716 99.7832 91.5629 99.6621 91.5543 99.5394C91.3174 99.8748 91.1116 100.231 90.8436 100.546C90.8315 100.558 90.8177 100.568 90.8056 100.575C90.4736 101.713 90.1519 102.913 89.6816 104.001C89.6972 104.013 89.711 104.032 89.7179 104.058C89.8165 104.383 89.8321 104.722 89.8805 105.055ZM91.9364 99.9059C92.0056 103.933 89.1992 107.585 85.2117 108.471C81.7672 109.237 78.0875 107.87 76.0731 104.955C74.6067 102.832 74.0707 100.082 74.8039 97.5871C75.5249 95.1334 77.2921 92.9772 79.649 91.9137C82.2773 90.7258 85.3829 90.8711 87.8297 92.4429C90.4044 94.0925 91.8171 96.8886 91.9364 99.9059Z" fill="#0C1114"/>
          <path d="M65.839 87.16C68.2616 86.6689 69.4219 84.6026 68.6991 82.1766L64.6303 83.0014L64.9191 84.4279L66.8592 84.0354C66.778 84.6683 66.2972 85.1853 65.4932 85.3478C64.3675 85.5761 63.5531 84.9156 63.3369 83.8504C63.1138 82.7437 63.6741 81.8463 64.7185 81.6336C65.341 81.5074 65.9289 81.6716 66.2903 82.059L68.4501 81.6198C67.7255 80.1655 66.1001 79.4704 64.3208 79.8318C62.1109 80.2797 60.8988 82.0953 61.338 84.255C61.7789 86.4251 63.6084 87.613 65.839 87.16Z" fill="#FEFEFE"/>
          <path d="M70.3512 86.1823L75.3485 85.5874L75.1496 83.9067L72.1859 84.2594L72.0562 83.1614L74.6309 82.8536L74.4355 81.2057L71.859 81.5118L71.7363 80.4725L74.5859 80.1336L74.3888 78.4736L69.5022 79.0564L70.3512 86.1823Z" fill="#FEFEFE"/>
          <path d="M76.3281 85.5187L81.3254 85.2697L81.2303 83.3555L78.3011 83.5008L78.04 78.2476L75.9719 78.3513L76.3281 85.5187Z" fill="#FEFEFE"/>
          <path d="M81.3674 85.2291L83.56 85.2879L83.9767 84.285L86.427 84.3507L86.7884 85.3761L88.9913 85.4366L86.3993 78.1862L84.3502 78.1309L81.3674 85.2291ZM84.4488 82.7789L85.3082 80.5776L86.0483 82.8238L84.4488 82.7789Z" fill="#FEFEFE"/>
          <path d="M89.4954 85.498L92.5197 85.8473C94.8212 86.1136 96.5123 84.8755 96.7613 82.7261C97.0103 80.5889 95.6477 78.986 93.3462 78.7179L90.3219 78.3687L89.4954 85.498ZM91.7658 83.8916L92.1652 80.4506L93.0713 80.5543C94.1606 80.6805 94.7849 81.4345 94.6638 82.4841C94.5428 83.5319 93.7612 84.1233 92.6718 83.9971L91.7658 83.8916Z" fill="#FEFEFE"/>
          <path d="M96.4456 86.3001L98.5949 86.7428L99.1811 85.828L101.581 86.3226L101.758 87.3964L103.916 87.8408L102.636 80.2497L100.627 79.8347L96.4456 86.3001ZM99.9091 84.4291L101.142 82.4112L101.476 84.7525L99.9091 84.4291Z" fill="#FEFEFE"/>
        </svg>

        <ul style="padding: 0; display: flex; list-style-type: none;">
          <li style="margin: 0 10px;"><a href="/docs" style="color: #fff; font-size: 1.5rem;">Docs</a></li>
          <li style="margin: 0 10px;"><a href="https://github.com/KevBeltrao/gelada-backend" style="color: #fff; font-size: 1.5rem;">Repo</a></li>
        </ul>
      </body>
      </html>
    `;
  }
}