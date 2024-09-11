export const SupabaseIcon = ({
  className,
  ogColor,
}: {
  className?: string
  ogColor?: boolean
}) => (
  <svg className={className ?? ''} viewBox='0 0 128 128'>
    <defs>
      <linearGradient
        id='a'
        x1='53.974'
        x2='94.163'
        y1='54.974'
        y2='71.829'
        gradientTransform='translate(29.387 60.096) scale(1.1436)'
        gradientUnits='userSpaceOnUse'
      >
        <stop
          offset='0'
          stop-color={ogColor ? 'hsl(153,61%,36%)' : 'hsl(246,100%,45%)'}
        ></stop>
        <stop
          offset='1'
          stop-color={ogColor ? 'hsl(153,60%,53%)' : 'hsl(246,100%,62%)'}
        ></stop>
      </linearGradient>
      <linearGradient
        id='b'
        x1='36.156'
        x2='54.484'
        y1='30.578'
        y2='65.081'
        gradientTransform='translate(29.387 60.096) scale(1.1436)'
        gradientUnits='userSpaceOnUse'
      >
        <stop offset='0'></stop>
        <stop offset='1' stop-opacity='0'></stop>
      </linearGradient>
    </defs>
    <path
      fill='url(#a)'
      d='M102.24 186.21c-3.267 4.117-9.904 1.862-9.977-3.397l-1.156-76.906h51.715c9.365 0 14.587 10.817 8.763 18.149z'
      transform='translate(-27.722 -60.338)'
    ></path>
    <path
      fill='url(#b)'
      fill-opacity='.2'
      d='M102.24 186.21c-3.267 4.117-9.904 1.862-9.977-3.397l-1.156-76.906h51.715c9.365 0 14.587 10.817 8.763 18.149z'
      transform='translate(-27.722 -60.338)'
    ></path>
    <path
      className={ogColor ? 'fill-[hsl(153,60%,53%)]' : 'fill-accent'}
      d='M53.484 2.128c3.267-4.117 9.905-1.862 9.977 3.396l.508 76.907H12.902c-9.365 0-14.587-10.817-8.764-18.149z'
    ></path>
  </svg>
)
