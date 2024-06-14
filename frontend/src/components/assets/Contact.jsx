export default function Contact({ isHover,isActive }) {
  return (
    <div>
      <svg
        width="35"
        height="35"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M9 8C7.67392 8 6.40215 8.52678 5.46447 9.46447C4.52678 10.4021 4 11.6739 4 13V27C4 28.3261 4.52678 29.5979 5.46447 30.5355C6.40215 31.4732 7.67392 32 9 32H31C32.3261 32 33.5979 31.4732 34.5355 30.5355C35.4732 29.5979 36 28.3261 36 27V13C36 11.6739 35.4732 10.4021 34.5355 9.46447C33.5979 8.52678 32.3261 8 31 8H9ZM24 17C24 16.7348 24.1054 16.4804 24.2929 16.2929C24.4804 16.1054 24.7348 16 25 16H31C31.2652 16 31.5196 16.1054 31.7071 16.2929C31.8946 16.4804 32 16.7348 32 17C32 17.2652 31.8946 17.5196 31.7071 17.7071C31.5196 17.8946 31.2652 18 31 18H25C24.7348 18 24.4804 17.8946 24.2929 17.7071C24.1054 17.5196 24 17.2652 24 17ZM25 22H31C31.2652 22 31.5196 22.1054 31.7071 22.2929C31.8946 22.4804 32 22.7348 32 23C32 23.2652 31.8946 23.5196 31.7071 23.7071C31.5196 23.8946 31.2652 24 31 24H25C24.7348 24 24.4804 23.8946 24.2929 23.7071C24.1054 23.5196 24 23.2652 24 23C24 22.7348 24.1054 22.4804 24.2929 22.2929C24.4804 22.1054 24.7348 22 25 22ZM8 21.5C8 21.1022 8.15804 20.7206 8.43934 20.4393C8.72064 20.158 9.10218 20 9.5 20H15.5C15.6971 19.9997 15.8922 20.0384 16.0743 20.1136C16.2564 20.1889 16.4219 20.2994 16.5612 20.4388C16.7006 20.5781 16.8111 20.7436 16.8864 20.9257C16.9616 21.1078 17.0003 21.3029 17 21.5V23C17 23 17 23.046 16.992 23.13C16.9033 23.8459 16.5493 24.5024 16 24.97C15.35 25.534 14.274 26 12.5 26C8 26 8 23 8 23V21.5ZM12.5 18C11.837 18 11.2011 17.7366 10.7322 17.2678C10.2634 16.7989 10 16.163 10 15.5C10 14.837 10.2634 14.2011 10.7322 13.7322C11.2011 13.2634 11.837 13 12.5 13C13.163 13 13.7989 13.2634 14.2678 13.7322C14.7366 14.2011 15 14.837 15 15.5C15 16.163 14.7366 16.7989 14.2678 17.2678C13.7989 17.7366 13.163 18 12.5 18ZM21 16C21 16.5304 20.7893 17.0391 20.4142 17.4142C20.0391 17.7893 19.5304 18 19 18C18.4696 18 17.9609 17.7893 17.5858 17.4142C17.2107 17.0391 17 16.5304 17 16C17 15.4696 17.2107 14.9609 17.5858 14.5858C17.9609 14.2107 18.4696 14 19 14C19.5304 14 20.0391 14.2107 20.4142 14.5858C20.7893 14.9609 21 15.4696 21 16ZM18.87 23.954C18.9371 23.6851 18.9793 23.4106 18.996 23.134L19 23.078V21.5C19 20.964 18.88 20.454 18.664 20H20C20.5304 20 21.0391 20.2107 21.4142 20.5858C21.7893 20.9609 22 21.4696 22 22C22 22.7957 21.6839 23.5587 21.1213 24.1213C20.5587 24.6839 19.7956 25 19 25H18.476C18.672 24.616 18.796 24.254 18.87 23.954Z"
          fill={isActive ? "white" : "#4E4D4D"}
        />
      </svg>
    </div>
  );
}
