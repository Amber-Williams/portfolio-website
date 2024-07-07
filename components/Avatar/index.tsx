'use client'

import { Core } from '@mb3r/component-library'

const Avatar = () => (
  <Core.Avatar
    alt="Amber Williams' avatar"
    src="https://avatars.githubusercontent.com/u/27780374"
    sx={{
      filter: 'drop-shadow(-5px 5px 3px rgba(0,0,0,.3))',
    }}
  />
)

export default Avatar
