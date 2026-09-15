import type { CompanyVisual } from "./company-details";

/** Original editorial illustrations, rather than representations of company logos. */
export default function CompanyArtwork({ visual }: { visual: CompanyVisual }) {
  return (
    <svg viewBox="0 0 400 180" fill="none" aria-hidden="true" focusable="false">
      <g stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        {visual === "software" && <>
          <path d="M42 134 200 169 357 134 200 99Z" opacity=".18" />
          <path d="m42 109 158 35 157-35-157-35Z" opacity=".35" />
          <path d="m42 84 158 35 157-35L200 49Z" />
          <path d="M42 84v25m315-25v25M200 119v25" opacity=".5" />
          <rect x="153" y="15" width="94" height="69" rx="8" fill="#f0f1f1" />
          <path d="m178 37-12 11 12 11m44-22 12 11-12 11m-17-25-10 29" strokeWidth="2" />
          <circle cx="200" cy="119" r="3" fill="currentColor" />
        </>}
        {visual === "safari" && <>
          <circle cx="269" cy="57" r="30" opacity=".3" />
          <path d="M20 126 92 51l66 70 51-48 77 72 42-38 52 35" />
          <path d="m65 79 27-28 25 27-15-4-10 8-12-9Z" fill="currentColor" opacity=".08" />
          <path d="M20 150c60-34 103-32 160-5s110 24 200-8M20 165c67-28 110-19 153 0m62 0c61-15 92-12 145-1" opacity=".35" />
          <path d="M291 133V87m-23 12c-2-18 46-18 45 0Z" fill="#f0f1f1" />
          <path d="m291 115-13-15m13 6 13-7" />
        </>}
        {visual === "network" && <>
          <path d="M65 45h96q39 0 39 39v14q0 39 39 39h96M65 137h59q39 0 39-39V84q0-39 39-39h133" opacity=".45" />
          <path d="M65 91h270" strokeDasharray="3 7" opacity=".3" />
          <rect x="38" y="21" width="54" height="48" rx="9" fill="#f0f1f1" />
          <rect x="308" y="112" width="54" height="48" rx="9" fill="#f0f1f1" />
          <path d="m53 50 9-9 9 9m-9-9v17m260 67h26m-26 9h18m-18 9h22" />
          <circle cx="65" cy="137" r="8" fill="#f0f1f1" /><circle cx="335" cy="45" r="8" fill="currentColor" />
          <circle cx="200" cy="91" r="22" fill="#f0f1f1" /><path d="m190 91 7 7 13-14" strokeWidth="2" />
        </>}
        {visual === "civic" && <>
          <path d="m90 62 110-42 110 42Z" /><path d="M102 72h196M85 154h230M95 142h210" />
          {[120, 168, 216, 264].map((x) => <path key={x} d={`M${x} 82v49m12-49v49`} />)}
          <path d="M48 87v38h28m248 0h28V87" opacity=".4" />
          <circle cx="48" cy="77" r="5" /><circle cx="352" cy="77" r="5" />
          <path d="M200 42v8m-4-4h8" />
        </>}
        {visual === "research" && <>
          <path d="M200 155V80m0 39-39-33m39 15 38-34" />
          <path d="M200 99c-45 0-69-25-69-61 44 0 69 21 69 61Zm0-22c0-39 23-61 67-61 0 40-24 61-67 61Z" fill="currentColor" fillOpacity=".05" />
          <ellipse cx="200" cy="147" rx="95" ry="24" opacity=".35" />
          <ellipse cx="200" cy="147" rx="137" ry="32" strokeDasharray="3 7" opacity=".2" />
          <path d="M75 70h24m-12-12v24m223 28h16m-8-8v16" opacity=".5" />
        </>}
      </g>
    </svg>
  );
}
