import React, { ReactElement } from "react";

type SvgProps = {
  width?: number,
  height?: number,
  style?: object,
  className?: string,
  children: ReactElement | ReactElement[]
}

type IconProps = Omit<SvgProps, "children"> & {
  fill?: string,
  stroke?: string,
  strokeWidth?: number
}

function Svg(props: SvgProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      style={{ ...(props.style ?? {}), height: props.height ?? 512, width: props.width ?? 512 }}
      className={props.className ?? ""}
    >
      {props.children}
    </svg>
  );
}

export function Tinker(props: IconProps) {
  return (
    <Svg {...props}>
      <path
        fill={props.fill ?? "#000000"}
        stroke={props.stroke ?? ""}
        strokeWidth={props.strokeWidth ?? "0"}
        d="M409.28 19.313c-20.507.34-40.836 8.245-56.53 23.937-20.558 20.558-27.823 49.56-22.188 76.156l1.032 4.938-3.594 3.594-43.406 43.406a38.984 38.984 0 019.72 10.625c7.166 11.59 6.305 28.69-6.22 41.218l-11.97 11.968 30.438 30.47 79.563-79.563 3.563-3.594 4.968 1.06c26.44 5.525 55.136-1.98 75.75-22.593 23.596-23.595 29.518-57.696 18.688-87.093l-49.22 49.25c-13.71 13.708-36.3 15.01-50.093 1.22-13.79-13.793-13.07-36.618.814-50.5l49.22-49.25c-8.545-3.15-17.475-4.93-26.44-5.22a83.367 83.367 0 00-4.093-.032zM72.157 21.53c-13.533.162-25.857 6.134-34.937 15.69-18.163 19.108-23.575 51.08 4.56 79.218l86.126 86.124c30.25 2.733 53.004 26.662 53.906 57.532L182 266c.883 5.654 4.31 10.126 8.844 12.47 5.734 2.963 12.387 3.145 19.625-4.095l64.405-64.406c7.718-7.72 6.896-12.716 3.53-18.157-3.364-5.442-11.272-10.063-18.81-10.063h-.19l-.186-.03c-30.125-1.298-53.427-23.487-56.5-53l-86.595-86.595C100.84 26.84 85.69 21.37 72.155 21.53zm191.188 227.314l-14.03 14.03 136.5 136.532 3.31 3.313-.655 4.655-4.595 31.813 77.188 49.375L489 460.625l-49.375-77.22-31.78 4.595-4.658.688-3.312-3.313-136.53-136.53zm-27.72 26.812l-11.936 11.938c-12.238 12.24-29.134 13.86-41.438 7.5a35.246 35.246 0 01-11.656-9.72l-41.78 41.782-3.595 3.594-4.97-1.063c-26.596-5.632-55.6 1.632-76.156 22.188-23.598 23.596-29.52 57.697-18.688 87.094l49.25-49.25c13.883-13.877 36.71-14.605 50.5-.814 13.792 13.792 12.494 36.384-1.22 50.094l-49.25 49.25c29.398 10.83 63.498 4.906 87.095-18.688 20.613-20.615 28.114-49.342 22.595-75.78l-1.03-4.938 3.56-3.563 79.19-79.186-30.47-30.438z"
      ></path>
    </Svg>
  )
}

function Processor(props: IconProps) {
  return (
    <Svg {...props}>
      <path
        fill={props.fill ?? "#000000"}
        stroke={props.stroke ?? ""}
        strokeWidth={props.strokeWidth ?? "0"}
        d="M228.844 32.22v114.218h17.687V32.218h-17.686zm-108.25.624c-15.507 0-28.094 12.586-28.094 28.093S105.087 89 120.594 89c12.655 0 23.34-8.372 26.844-19.875h44.937v77.313h17.688v-95H147.03c-3.888-10.837-14.262-18.593-26.436-18.593zm193.25 0c-15.507 0-28.063 12.586-28.063 28.093 0 12.124 7.677 22.45 18.44 26.376v59.124h17.655V87.844c11.596-3.452 20.063-14.193 20.063-26.906 0-15.508-12.587-28.094-28.094-28.094zM266.124 92.5v53.938h17.657V92.5h-17.655zm188.532 4.03c-15.507 0-28.094 12.588-28.094 28.095 0 13.083 8.948 24.074 21.063 27.188v27.468h-92.938v17.657h110.624v-46.342c10.223-4.192 17.407-14.233 17.407-25.97 0-15.507-12.557-28.094-28.064-28.094zM30.187 123.657v17.688H96.75v55.594h62.814V179.28h-45.126v-55.624h-84.25zm147.032 40.47v159.718h159.81v-159.72H177.22zm17.56 15.655h17.657v78.595l32.407 32.406h75.28v17.658H237.5l-2.594-2.594-10.75-10.75c-1.033 7.385-7.36 13.062-15.03 13.062-8.392 0-15.19-6.796-15.19-15.187 0-7.682 5.696-13.98 13.095-15l-9.655-9.658-2.594-2.593V179.78zm54.94.157h17.686v55.313h52.53l.002 17.688H249.72v-73zM53.124 217.375v89.969c-11.49 3.512-19.844 14.198-19.844 26.844 0 15.505 12.557 28.093 28.064 28.093s28.093-12.587 28.093-28.092c0-12.195-7.79-22.564-18.656-26.438v-72.72h88.782v-17.655H53.124zm301.563 0v17.656h53.968v-17.655h-53.97zm99.968 21.97c-10.898 0-20.342 6.21-25 15.28h-74.97l.002 17.688H427c2.325 13.168 13.824 23.187 27.656 23.187 15.507 0 28.063-12.588 28.063-28.094 0-15.507-12.557-28.062-28.064-28.062zm-349.062 15.28v17.688h53.97v-17.688h-53.97zm17.156 36.47v84.217c-11.498 3.513-19.875 14.2-19.875 26.844 0 15.506 12.587 28.094 28.094 28.094 15.506 0 28.06-12.588 28.06-28.094 0-12.194-7.766-22.564-18.624-26.437v-66.94h19.156v-17.686h-36.81zm231.938 0v17.686h45.156v95.283c-11.323 3.624-19.53 14.26-19.53 26.78-.002 15.506 12.585 28.063 28.092 28.063 15.507 0 28.063-12.557 28.063-28.062 0-12.32-7.935-22.778-18.97-26.563V291.095h-62.814zM192.375 341.53v54.033h17.688V341.53h-17.688zm36.47 0v86.564c-11.013 3.794-18.94 14.233-18.94 26.53 0 15.506 12.588 28.095 28.095 28.095s28.063-12.59 28.063-28.095c0-12.53-8.203-23.14-19.532-26.75V341.53h-17.686zm37.28 0v54.033h17.688l-.032-54.032h-17.655zm38.094 0v140.064h17.655V341.53H304.22z"
      ></path>
    </Svg>
  );
}

function Erlenmeyer(props: IconProps) {
  return (
    <Svg {...props}>
      <path
        fill={props.fill ?? "#000000"}
        stroke={props.stroke ?? ""}
        strokeWidth={props.strokeWidth ?? "0"}
        d="M196.27 22.814c-8.29 0-14.194 5.093-17.91 10.163-3.713 5.07-6.032 10.492-6.032 16.814 0 6.323 2.16 11.873 5.668 17.433 3.51 5.56 9.108 11.85 18.275 11.85h-.202l6.63.142v122.002C150.973 267.087 50.5 395.497 50.5 395.497l-.402.513-.325.562c-5.1 8.808-10.02 21.052-10.02 35.635 0 35.53 29.48 64.827 64.827 64.828h299.6c35.253 0 64.828-28.916 64.828-64.828 0-16.296-7.106-28.625-11.197-35.652l-.334-.576-151.412-191.287V79.21c2.597-.066 3.062-.134 6.336-.136h.088c9.168 0 14.767-6.292 18.276-11.85 1.137-1.804 2.07-3.617 2.896-5.445l1.4-1.397h-.814c1.352-3.372 2.186-6.84 2.186-10.592 0-6.32-2.317-11.744-6.032-16.813-3.714-5.07-9.62-10.163-17.912-10.163h-116.22zm0 18.688h116.222c-.094 0 1.3.423 2.836 2.52 1.536 2.096 2.42 5.492 2.42 5.77 0 .276-1.043 4.696-2.785 7.456-1.736 2.75-3.422 3.132-2.475 3.135-6.836 0-12.118.197-14.302.285v-.207h-96.948v.03l-4.865-.105h-.102c.972 0-.727-.377-2.47-3.137-1.74-2.76-2.784-7.18-2.784-7.457 0-.276.883-3.672 2.42-5.77 1.536-2.095 2.93-2.518 2.835-2.518zm25.115 37.646h65.996v75.07h-.044v52.497l.045.058v4.422L441.948 406.47c3.908 6.738 8.373 15.1 8.373 25.737 0 25.66-21.09 46.14-46.138 46.14h-299.6c-24.953-.002-46.14-21.018-46.14-46.14 0-3.557.43-6.963 1.146-10.184l.055.084a51.42 51.42 0 013.084-9.513l-.174.242a61.093 61.093 0 013.17-6.465c.668-.854 102.782-131.362 153.668-196.155l1.995-2.54v-1.155c.023-.03.07-.088.092-.118v-52.185h-.092v-75.07zm18.78 75.07v58.618l-1.99 2.537C204.078 258.886 82.596 415.245 81.714 416.38c-2.38 4.202-4.48 9.69-4.48 15.817 0 15.208 12.87 27.98 27.898 27.98h298.995c15.124 0 27.898-12.386 27.898-27.98 0-6.278-2.624-11.274-5.203-15.736L268.646 213.13v-58.913h-28.48zm-4.048 119.73c21.015 0 38.25 17.236 38.25 38.25 0 21.017-17.235 38.253-38.25 38.253s-38.252-17.236-38.252-38.25c0-21.016 17.237-38.253 38.252-38.253zm0 18.69c-10.913 0-19.562 8.648-19.562 19.56 0 10.915 8.65 19.564 19.562 19.564 10.914 0 19.563-8.647 19.563-19.563 0-10.914-8.65-19.563-19.563-19.563zm-60.293 54.817c21.015 0 38.252 17.237 38.252 38.252 0 21.016-17.237 38.252-38.252 38.252-21.015 0-38.252-17.238-38.252-38.253s17.237-38.252 38.252-38.252zm96.623 10.71c24.664 0 44.858 20.197 44.858 44.86 0 24.665-20.195 44.858-44.858 44.858-24.663 0-44.86-20.194-44.86-44.858 0-24.663 20.197-44.86 44.86-44.86zm-96.623 7.98c-10.913 0-19.562 8.65-19.562 19.562 0 10.914 8.65 19.563 19.562 19.563 10.914 0 19.563-8.648 19.563-19.563 0-10.913-8.65-19.562-19.563-19.562zm96.623 10.71c-14.562 0-26.17 11.608-26.17 26.17 0 14.563 11.608 26.17 26.17 26.17 14.564 0 26.17-11.605 26.17-26.17 0-14.562-11.607-26.17-26.17-26.17z"
      ></path>
    </Svg>
  );
}

function Clockwork(props: IconProps) {
  return (
    <Svg {...props}>
      <path
        fill={props.fill ?? "#000000"}
        stroke={props.stroke ?? ""}
        strokeWidth={props.strokeWidth ?? "0"}
        d="M137.71 18.326L17.866 138.166l29.582 29.582c23.04-53.698 66.14-96.802 119.84-119.842l-29.58-29.58zm238.286.04L346.44 47.92c53.693 23.048 96.79 66.155 119.822 119.857l29.576-29.575-119.842-119.84zm-133.27 37.04C137.405 62.64 54.448 150.126 54.448 257.31c0 111.93 90.466 202.397 202.398 202.397 32.75 0 63.66-7.757 91.007-21.52l-22.26-15.78c-21.173 8.84-44.394 13.734-68.745 13.734-98.652 0-178.827-80.172-178.827-178.824 0-90.942 68.133-166.178 156.065-177.382l8.637-24.528zm29.432.076l8.555 24.604c87.397 11.69 154.96 86.67 154.96 177.23 0 48.234-19.17 92.043-50.29 124.23l8.633 24.686c40.12-36.963 65.23-89.96 65.23-148.923 0-106.782-82.332-194.023-187.088-201.828zm-14.75 14.49l-32.3 91.706h18.925v45.068a51.903 51.903 0 0126.28-.26v-44.808h18.98L257.408 69.97zm71.82 44.42l-17.197 29.79a124.427 124.427 0 00-10.596-4.5l14.144 40.683h-26.576v35.057c12.702 9.562 20.95 24.756 20.95 41.793 0 8.697-2.16 16.91-5.956 24.142l40.705 54.186 19.466-14.662 4.924 14.08 20.603 11.897a159.744 159.744 0 009.526-16.08l-29.35-16.945a124.838 124.838 0 0012.86-45.348h33.862c.253-3.69.392-7.412.392-11.168 0-2.52-.066-5.026-.18-7.52h-33.82c-.98-16.423-5.11-31.993-11.796-46.112l29.45-17.002a159.986 159.986 0 00-9.208-16.266l-29.48 17.02a126.089 126.089 0 00-33.73-33.922l17.153-29.71a159.353 159.353 0 00-16.144-9.41zm-145.38.313a159.591 159.591 0 00-16.104 9.483l17.62 30.523a126.205 126.205 0 00-32.67 33.737l-30.645-17.695a159.369 159.369 0 00-9.167 16.29l30.73 17.74c-6.385 13.828-10.33 29.016-11.285 45.015H96.895a163.084 163.084 0 00-.182 7.52c0 3.755.14 7.477.392 11.167h35.477a124.845 124.845 0 0012.324 44.264l-30.613 17.674a159.794 159.794 0 009.492 16.1l30.592-17.663a126.143 126.143 0 0032.418 32.236l-17.527 30.353a159.69 159.69 0 0016.216 9.292l17.473-30.265a124.857 124.857 0 0044.147 12.052v34.62c3.224.193 6.472.303 9.746.303 3 0 5.98-.09 8.94-.252v-34.497a125.559 125.559 0 0019.325-2.756l10.682-8.047-47.52-63.257c-24.326-4.454-42.908-25.862-42.908-51.428 0-16.593 7.833-31.43 19.976-41.026v-35.825h-26.63l14.196-40.31a125.085 125.085 0 00-11.51 5.056l-17.554-30.405zm73.814 108.906c-18.67 0-33.605 14.935-33.605 33.605 0 18.67 14.936 33.603 33.605 33.603 18.67 0 33.604-14.934 33.604-33.603 0-18.67-14.934-33.604-33.604-33.604zm34.363 72.927c-5.978 5.234-13.142 9.14-21.03 11.233l50.952 67.828-14.578 10.984 79.74 56.525-32.137-91.902-13.975 10.525-48.973-65.193zm174.223 50.33c-14.203 33.102-36.037 62.167-63.27 84.998l9.7 27.733 83.15-83.15-29.58-29.58zM47.46 346.9l-29.585 29.586 119.84 119.84 29.603-29.603C113.616 443.69 70.508 400.593 47.46 346.9zm323.343 107.553a226.818 226.818 0 01-24.395 12.254l29.58 29.58 22.33-22.33-27.515-19.504z"
      ></path>
    </Svg>
  );
}

function InkSwirl(props: IconProps) {
  return (
    <Svg {...props}>
      <path
        fill={props.fill ?? "#000000"}
        stroke={props.stroke ?? ""}
        strokeWidth={props.strokeWidth ?? "0"}
        d="M262.97 19.438a221.3 221.3 0 00-10.595.375c37.426 5.91 74.12 23.423 102.188 49.624-55.762-26.124-129.46-27.253-186.875-3.5 10.37-9.73 21.777-17.51 33.875-23.343C48.768 80.06-6.44 197.116 56.72 343.938c-16.45-26.78-29.106-55.588-35.626-84.688-5.23 74.055 32.02 134.952 102.47 197.406.06.063.124.126.186.188 12.107 12.125 24.238 22.045 32.875 27.03 64.588 37.292 121.345-63.365 57.78-100.062-11.465-6.62-33.518-14.218-56.56-18.875-76.657-36.295-93.91-155.886-20.282-240.687-6.654 16.82-11.594 34.836-14.844 53.375 76.21-134.99 312.3-129.124 324.124 72.063-10.722-61.622-53.708-113.837-121.03-135.344 56.69 23.942 96.28 79.752 96.28 145.25 0 94.252-72.826 148.403-154.594 165.625 42.582 2.34 94.684-13.826 125.438-36.314-23.357 39.58-72.146 67.082-123.25 81.594 72.736-2.804 136.515-41.146 175.406-97.375-10.316 11.652-22.718 22.04-36.78 30.97 46.54-55.267 70.795-137.97 61.31-210.25 8.428 16.284 13.583 33.51 15.782 51.374C485.26 97.63 372.46 18.3 262.97 19.437z"
      ></path>
    </Svg>
  );
}

function Padlock(props: IconProps) {
  return (
    <Svg {...props}>
      <path
        fill={props.fill ?? "#000000"}
        stroke={props.stroke ?? ""}
        strokeWidth={props.strokeWidth ?? "0"}
        d="M254.28 17.313c-81.048 0-146.624 65.484-146.624 146.406V236h49.594v-69.094c0-53.658 43.47-97.187 97.03-97.187 53.563 0 97.032 44.744 97.032 97.186V236h49.594v-72.28c0-78.856-65.717-146.407-146.625-146.407zM85.157 254.688c-14.61 22.827-22.844 49.148-22.844 76.78 0 88.358 84.97 161.5 191.97 161.5 106.998 0 191.968-73.142 191.968-161.5 0-27.635-8.26-53.95-22.875-76.78H85.155zM254 278.625c22.34 0 40.875 17.94 40.875 40.28 0 16.756-10.6 31.23-25.125 37.376l32.72 98.126h-96.376l32.125-98.125c-14.526-6.145-24.532-20.62-24.532-37.374 0-22.338 17.972-40.28 40.312-40.28z"
      ></path>
    </Svg>
  );
}

function Achievement(props: IconProps) {
  return (
    <Svg {...props}>
      <path
        fill={props.fill ?? "#000000"}
        stroke={props.stroke ?? ""}
        strokeWidth={props.strokeWidth ?? "0"}
        d="M305.975 298.814l22.704 2.383V486l-62.712-66.965V312.499l18.214 8.895zm-99.95 0l-22.716 2.383V486l62.711-66.965V312.499l-18.213 8.895zm171.98-115.78l7.347 25.574-22.055 14.87-1.847 26.571-25.81 6.425-10.803 24.314-26.46-2.795-18.475 19.087L256 285.403l-23.902 11.677-18.475-19.15-26.46 2.795-10.803-24.313-25.81-6.363-1.847-26.534-22.118-14.92 7.348-25.573-15.594-21.544 15.644-21.52-7.398-25.523 22.068-14.87L150.5 73.03l25.86-6.362 10.803-24.313 26.46 2.794L232.098 26 256 37.677 279.902 26l18.475 19.149 26.46-2.794 10.803 24.313 25.81 6.425 1.847 26.534 22.055 14.87-7.347 25.574 15.656 21.407zm-49.214-21.556a72.242 72.242 0 10-72.242 72.242 72.355 72.355 0 0072.242-72.242zm-72.242-52.283a52.282 52.282 0 1052.282 52.283 52.395 52.395 0 00-52.282-52.245z"
      ></path>
    </Svg>
  );
}

function TrophyCup(props: IconProps) {
  return (
    <Svg {...props}>
      <path
        fill={props.fill ?? "#000000"}
        stroke={props.stroke ?? ""}
        strokeWidth={props.strokeWidth ?? "0"}
        d="M98.398 21.146a17.092 17.092 0 00-4.636.521c-20.49 5.262-33.163 20.63-36.116 38.649-2.952 18.019 2.168 38.346 12.676 58.193 20.695 39.086 63.262 77.08 117.852 85.85-5.61-6.72-11.05-14.246-16.274-22.375-39.008-12.57-70.021-42.344-85.67-71.899-9.206-17.387-12.846-34.491-10.82-46.857C77.437 50.862 83.482 42.89 98.238 39.1c.065-.017.068-.034.092-.053-.065-.143.105-.08 0 0a.68.68 0 00.176.217c.527.493 1.689 2.24 2.207 5.14 1.036 5.804-.413 15.593-8.135 25.68l14.293 10.942c10.418-13.61 13.65-28.086 11.56-39.785-1.044-5.85-3.396-11.165-7.628-15.124-3.174-2.969-7.747-4.868-12.405-4.972zm315.204 0c-4.658.104-9.23 2.003-12.405 4.972-4.232 3.96-6.584 9.274-7.629 15.124-2.089 11.699 1.143 26.174 11.56 39.785l14.294-10.942c-7.722-10.087-9.171-19.876-8.135-25.68.518-2.9 1.68-4.647 2.207-5.14a.695.695 0 00.176-.217c-.105-.08.065-.143 0 0 .024.019.027.036.092.053 14.756 3.79 20.801 11.76 22.828 24.127 2.026 12.366-1.614 29.47-10.82 46.857-15.649 29.555-46.662 59.33-85.67 71.899-5.223 8.129-10.665 15.655-16.274 22.375 54.59-8.77 97.157-46.764 117.852-85.85 10.508-19.847 15.628-40.174 12.676-58.193-2.953-18.02-15.626-33.387-36.116-38.649a17.092 17.092 0 00-4.636-.521zm-276.166 7.713c2.146 36.533 16.76 83.07 36.537 120.824 10.707 20.442 22.876 38.334 34.761 50.685C220.62 212.72 232 218.858 240 218.858h32c8 0 19.38-6.138 31.266-18.49 11.885-12.351 24.054-30.243 34.761-50.685 19.777-37.755 34.39-84.29 36.537-120.824H137.436zm95.564 208v16h46v-16h-46zm6.445 34c-2.458 25.967-12.796 57.873-24.437 76h81.984c-11.64-18.127-21.979-50.033-24.437-76h-33.11zm-38.445 94v14h110v-14H201zm-32 32v94h174v-94H169zm23 23h128v48H192v-48z"
      ></path>
    </Svg>
  );
}

function Cog(props: IconProps) {
  return (
    <Svg {...props}>
      <path
        fill={props.fill ?? "#000000"}
        stroke={props.stroke ?? ""}
        strokeWidth={props.strokeWidth ?? "0"}
        d="M234.875 18.78c-26.087 2.367-51.557 8.56-74.875 18.782 15.37 32.763 14.222 66.706-6.72 82.407-20.835 15.617-54.055 7.965-81.124-15.69-16.246 19.452-29.336 41.36-38.875 65.626 33.83 12.333 56.635 37.665 52.94 63.5-3.698 25.835-32.697 43.74-68.626 46.094 2.338 25.796 8.91 50.778 18.937 73.875 17.81-8.182 35.793-11.09 51.095-8.938 13.032 1.87 23.927 7.015 31.156 16.657 15.817 21.097 7.603 54.713-16.78 81.97 19.516 16.35 42.216 29.444 66.594 39.03 12.33-33.828 37.655-56.634 63.5-52.938 25.844 3.697 43.74 32.696 46.094 68.625 26.087-2.365 51.557-8.555 74.875-18.78-15.766-32.997-14.26-67.588 6.843-83.406 9.64-7.23 22.568-9.022 35.594-7.125 15.112 2.16 31.19 10.25 45.563 22.78 16.088-19.345 29.4-41.51 38.875-65.594-33.83-12.332-56.635-37.653-52.938-63.5 3.697-25.846 32.665-43.772 68.594-46.125-2.36-25.944-8.774-50.663-18.906-73.874-32.612 15.117-66.66 13.145-82.282-7.687-15.696-20.944-7.252-53.86 16.688-81-19.52-16.352-42.248-29.447-66.625-39.032-12.332 33.828-37.657 56.66-63.5 52.968-25.846-3.693-43.744-32.696-46.095-68.625zm21.656 95.126c79.626 0 144.376 64.752 144.376 144.375 0 79.626-64.75 144.376-144.375 144.376-79.624 0-144.374-64.75-144.374-144.375 0-79.624 64.75-144.374 144.375-144.374zm0 18.688c-69.524 0-125.686 56.162-125.686 125.687 0 69.526 56.162 125.69 125.687 125.69 69.526 0 125.69-56.164 125.69-125.69 0-69.522-56.164-125.686-125.69-125.686zm.033 15.125c61.094 0 110.625 49.53 110.625 110.624 0 61.095-49.53 110.625-110.625 110.625s-110.625-49.53-110.625-110.626c0-61.095 49.53-110.625 110.625-110.625z"
      ></path>
    </Svg>
  );
}

function Upgrade(props: IconProps) {
  return (
    <Svg {...props}>
      <path
        fill={props.fill ?? "#000000"}
        stroke={props.stroke ?? ""}
        strokeWidth={props.strokeWidth ?? "0"}
        d="M256 29.816l-231 154v106.368l231-154 231 154V183.816zm0 128.043L105 259.783v90.283l151-101.925 151 101.925v-90.283zm0 112l-87 58.725v67.6l87-58 87 58v-67.6zm0 89.957l-87 58v64.368l87-58 87 58v-64.368z"
      ></path>
    </Svg>
  );
}

function DrippingTube(props: IconProps) {
  return (
    <Svg {...props}>
      <path
        fill={props.fill ?? "#000000"}
        stroke={props.stroke ?? ""}
        strokeWidth={props.strokeWidth ?? "0"}
        d="M276.95 18.752c-17.61.005-29.2 5.172-33.776 13.1-5.232 9.06-2.762 24.25 9.775 42.494 12.536 18.243 34.302 38.05 61.864 53.963 27.562 15.91 55.6 24.856 77.666 26.592 22.068 1.736 36.456-3.72 41.688-12.78 5.23-9.06 2.762-24.25-9.775-42.493-12.538-18.244-34.303-38.05-61.866-53.964-27.562-15.913-55.598-24.858-77.666-26.594-2.757-.217-5.395-.32-7.91-.32zm9.818 21.453c16.105.134 40.723 8.224 65.804 22.705 38.22 22.067 63.046 50.616 55.453 63.768-7.593 13.152-44.732 5.925-82.95-16.14-38.22-22.068-63.047-50.618-55.454-63.77 2.61-4.52 8.71-6.633 17.148-6.563zm-50.784 42.352L79.594 392.385c-10.137 17.762-10.692 36.284-4.504 51.6 6.224 15.41 18.583 27.613 33.222 35.6 14.64 7.99 31.752 11.89 48.39 9.743 16.64-2.145 32.87-10.827 43.554-27.033l.01-.018L388.914 173.33c-6.485-.61-13.232-1.71-20.172-3.29l-32.846 50.308c-.272-.25-.55-.5-.878-.77-3.27-2.697-8.986-5.776-16.44-8.377-14.908-5.2-36.63-8.684-60.63-8.684-23.997 0-45.72 3.484-60.628 8.685-2.427.848-4.65 1.748-6.683 2.667l57.967-114.84c-4.098-4.665-7.81-9.377-11.055-14.097-.542-.788-1.047-1.582-1.566-2.373zM415.03 184.553l-8.794 33.5c-7.48 28.495-19.135 51.737-29.22 71.646-10.085 19.908-19.258 36.267-19.14 53.5.217 31.9 26.61 57.75 58.634 57.505l-.008.002c32.01-.217 58.057-26.384 57.836-58.29-.076-11.126-4-21.653-9.54-32.974-.62-1.593-1.43-3.186-2.41-4.797-2.39-4.645-4.986-9.447-7.656-14.505-10.25-19.42-22.206-42.452-30.453-72.21l-9.25-33.377zm-232.85 46.07c3.385 2.44 8.59 5.096 15.14 7.38 14.908 5.202 36.63 8.685 60.63 8.685 23.998 0 45.72-3.483 60.628-8.684 2.914-1.017 5.552-2.107 7.893-3.22l-16.365 25.068c-15.16 3.556-32.977 5.53-52.156 5.53-25.762 0-49.088-3.553-66.788-9.728-6.642-2.317-12.488-4.99-17.47-8.215l8.488-16.817zm233.242 19.498c.32.83.65 1.62.973 2.437-1.073 34.75-13.116 59.906-8.944 75.015 4.384 15.93 20.963 25.358 36.974 20.852 4.253-1.17 8.036-3.197 11.226-5.83.126 21.712-17.307 39.275-39.275 39.424h-.007c-21.97.167-39.654-17.217-39.8-38.944v-.002c-.067-9.577 7.017-24.98 17.12-44.927 6.888-13.598 14.798-29.615 21.735-48.024zm-191.04 29.74c9.492 0 17.186 7.697 17.186 17.19 0 9.49-7.694 17.184-17.185 17.184-9.49 0-17.186-7.694-17.186-17.185 0-9.493 7.695-17.19 17.186-17.19zm-54.35 13.44c12.148 0 21.997 9.85 21.997 22s-9.85 21.997-22 21.997c-12.147 0-21.997-9.848-21.997-21.996 0-12.15 9.85-22 21.998-22zm22.007 57.81c13.287 0 24.058 10.775 24.058 24.064 0 13.287-10.77 24.058-24.06 24.058-13.286 0-24.06-10.77-24.06-24.058 0-13.29 10.774-24.063 24.06-24.063z"
      ></path>
    </Svg>
  );
}

function CursedStar(props: IconProps) {
  return (
    <Svg {...props}>
      <path
        fill={props.fill ?? "#000000"}
        stroke={props.stroke ?? ""}
        strokeWidth={props.strokeWidth ?? "0"}
        d="M259.125 16.938L216.22 128.094 97.343 164.25l106.53-4.22-36.436 94.407L270.156 106.25l50.22 64.406-61.25-153.72zm50.406 63.687l36.376 102.28-102.344-6.75 172.063 53.876-46.5 67.126 128.47-104.28-116.94-7.69-71.124-104.56zm-123.467 98.97L20.97 190.437l87.936 71.375-.375 127.125 27.75-104.907 82.345 66.845L109.345 207.5l76.718-27.906zm71.156 18.968c-22.404 0-44.817 25.943-67.22 77.875 43.462 77.53 88.133 86.365 134.438 0-22.403-51.93-44.816-77.875-67.22-77.875zm.405 15.687c11.05 8.62 19 30.54 19 56.438 0 25.896-7.95 47.818-19 56.437-11.05-8.62-19-30.54-19-56.438 0-25.896 7.95-47.818 19-56.437zm82.53 10.594l5.19 180.22-78.595-22.064 140.47 87.438-30.408-111.313 73.563-103.47-82.875 69.376-27.344-100.186zM152.94 309.03l-43.594 159.595 98.906-61.53 120.656 39.436-90.5-58.217 87.094-54.188-171.22 56.53-1.343-81.624z"
      ></path>
    </Svg>
  );
}

function PlanetCore(props: IconProps) {
  return (
    <Svg {...props}>
      <path
        fill={props.fill ?? "#000000"}
        stroke={props.stroke ?? ""}
        strokeWidth={props.strokeWidth ?? "0"}
        d="M256 16A240 240 0 0 0 16 256a240 240 0 0 0 240 240 240 240 0 0 0 240-240A240 240 0 0 0 256 16zm-9 14.73v86.342c-35.304 2.47-124.423 31.35-127.033 129.928H37.605C39.993 81.83 189.513 34.292 247 30.73zm18 .874c.596.158 1.148.33 1.62.52 78.82 31.677 84.33 217.118 77.042 268.052l-36.498-22.813c3.486-34.36-.902-132.647-42.164-156.877V31.604zM41.258 265h85.996c19.485 15.47 77.33 34.583 166.902 25.46l37.7 23.563C163.39 333.03 61.252 291.425 41.26 265z"
      ></path>
    </Svg>
  );
}

function Disintegration(props: IconProps) {
  return (
    <Svg {...props}>
      <path
        fill={props.fill ?? "#000000"}
        stroke={props.stroke ?? ""}
        strokeWidth={props.strokeWidth ?? "0"}
        d="M19.844 20.625v129.5l73.375 66.25c36.57 38.36 55.757 94.852 27.624 145.625l.72-.844-4.626 7.97 8.093 4.687 122.407 70.656 8.094 4.655 3.97-6.875c27.733-26.382 63.19-7.125 102.28 16.53l41.126 37.126h92.22V408.78l-44.063-43.967c-22.454-28.274-35.613-54.52-32.032-84.5 17.85-59.055-4.958-140.538-25.78-160.47-7.902-7.752-16.606-14.816-27.03-20.406-21.165-12.22-46.998-15.218-70.376-14.468-16.582.53-33.126 4.057-48.844 10.093-36.71 8.396-67.358-7.433-101.406-35.282l-39.22-39.155h-86.53zm280 83.313c2.78-.026 5.55.05 8.312.218-.036.097-.09.183-.125.28-6.752 18.694 38.538 37.97 49.126 14.97 55.007 34.127 69.07 117.013 36.063 174.188-.71 1.227-1.45 2.403-2.22 3.53l-6.313 6.845c7.46 4.334 12.742 11.783 12.157 21.31-.003.043.002.084 0 .126 5.824.896 11.176 5.245 10.78 11.656-.795 12.97-13.8 14.244-20.655 8.875-15.525 11.663-43.697 1.44-43.595-19.343-1.955.698-3.88 1.38-5.875 2.094l-27.125-27.594-13.344 13.094 21.564 21.937c-10.82 4.87-21.477 11.133-30.875 20.53l-.876.876-.625 1.064-6.658 11.5-14.812-8.563 10.313-17.874-16.188-9.344-10.313 17.875-13.656-7.875 10.313-17.875-16.19-9.343-10.31 17.875-13.94-8.064 10.314-17.875-16.188-9.342-10.312 17.875-15.25-8.782 6.656-11.5c5.53-12.61 4.07-28.693 2.938-39.31l30.25 7.81 4.687-18.092-38.03-9.813c-.616-3.4-1.223-6.765-1.782-10.063-2.202-12.97-3.66-24.87-2-36.156l5.218-16.687c.482-.96.98-1.922 1.532-2.876 9.726-16.845 23.427-31.258 39.375-42.438 1.944 19.517 29.105 28.628 44.188 17.063 7.884 12.587 33.59 13.47 34.97-8.97.8-13.03-14.17-20.428-25.376-16.875-.847-5.087-3.442-9.416-7.064-12.78 8.94-2.295 18.048-3.697 27.125-4.064 1.272-.05 2.545-.08 3.814-.093zm6.22 57.343c-6.418-.064-12.71 3.813-13.283 13.157-.918 14.96 26.277 19.934 27.5 0 .49-7.946-6.946-13.082-14.217-13.156zm-81.783 4.782c-9.155.277-18.194 4.64-25.124 14.938-19.17 28.49 33.978 72.874 60.688 38.28 7.888 4.022 19.703 1.605 20.5-11.374.534-8.688-8.413-14.002-16.25-13.03-5.094-15.572-22.663-29.33-39.813-28.814zm115.25 66.094c-9.155.276-18.194 4.607-25.124 14.906-19.576 29.093 36.255 74.772 62.344 36 14.376-21.366-11.905-51.67-37.22-50.906zm-56.5 8.875l-49.342 34.69 43.968 25.405 5.375-60.094zM164 324.97l15.25 8.78-11.156 19.313 16.187 9.343 11.157-19.312 13.938 8.062-11.156 19.313 16.186 9.342 11.156-19.312 13.657 7.875-11.157 19.313 16.187 9.343 11.156-19.31 14.813 8.56-21.564 37.314-106.22-61.313L164 324.97zm182.53 37.06c9.127-.25 17.758 10.78 12.19 19.19-3.474 5.245-8.023 6.81-12.22 6.155 2.446 6.643 2.232 14.06-2.156 20.688-21.842 32.983-63.58-2.503-47.188-27.25 10.818-16.336 26.53-15.88 37.625-8.25.216-1.442.723-2.856 1.626-4.22 2.904-4.384 6.554-6.213 10.125-6.312zm46.908.72c10.303.104 20.848 7.365 20.156 18.625-1.735 28.246-40.24 21.197-38.938 0 .813-13.24 9.69-18.717 18.78-18.625zm44.875 33.156c6.555.066 13.284 4.68 12.843 11.844-1.102 17.97-25.61 13.486-24.78 0 .516-8.42 6.153-11.902 11.937-11.844zm-59.407 15.875c6.555.067 13.285 4.682 12.844 11.845-1.103 17.97-25.642 13.486-24.813 0 .517-8.42 6.185-11.902 11.97-11.844z"
      ></path>
    </Svg>
  );
}

const Icons = {
  Tinker, Processor, Erlenmeyer, Clockwork, InkSwirl, Padlock, Achievement,
  TrophyCup, Cog, Upgrade, DrippingTube, CursedStar, PlanetCore, Disintegration
};

export default Icons;
