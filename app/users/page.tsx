import { Pagination } from "@/app/components/button/pagination"
import { Breadcrumb } from "@/app/components/layout/breadcrumb"
import type { TableHeader } from "@/app/interfaces/tableHeader"
import { USERS_LINK } from "@/app/lib/constant"
import { getUsers } from "@/app/lib/getUsers"
import type { User } from "@/app/lib/schema"
import {
  ArrowTopRightOnSquareIcon,
  BuildingOffice2Icon,
  ClockIcon,
  EnvelopeIcon,
  IdentificationIcon,
  PhoneIcon,
  PhotoIcon,
  TagIcon,
  UserIcon,
} from "@heroicons/react/24/solid"
import Link from "next/link"
import type React from "react"
import { Suspense } from "react"

export const dynamic = "force-dynamic"

const indexList: TableHeader[] = [
  {
    name: "ID",
    icon: TagIcon,
    color: "text-warning",
  },
  {
    name: "登録日時",
    icon: ClockIcon,
    color: "text-primary",
  },
  {
    name: "氏名",
    icon: UserIcon,
    color: "text-error",
  },
  {
    name: "所属会社",
    icon: BuildingOffice2Icon,
    color: "text-success",
  },
  {
    name: "社員番号",
    icon: IdentificationIcon,
    color: "text-secondary",
  },
  {
    name: "電話番号",
    icon: PhoneIcon,
    color: "text-warning",
  },
  {
    name: "メールアドレス",
    icon: EnvelopeIcon,
    color: "text-info",
  },
  {
    name: "障がい者手帳画像",
    icon: PhotoIcon,
    color: "text-accent",
  },
] as const

export default function Users(): React.JSX.Element {
  return (
    <>
      <Breadcrumb crumbs={[USERS_LINK]} />
      <h1 className="flex font-semibold items-center mx-auto text-2xl">
        <USERS_LINK.icon className={`mr-2 size-8 ${USERS_LINK.color}`} />
        {USERS_LINK.name}
      </h1>
      <section className="max-h-96 max-w-full overflow-x-auto">
        <table className="table table-xs table-pin-rows table-pin-cols table-zebra text-center">
          <thead>
            <TableIndex />
          </thead>
          <tbody>
            <Suspense fallback={<Skeleton />}>
              <Tbody />
            </Suspense>
          </tbody>
          <tfoot>
            <TableIndex />
          </tfoot>
        </table>
      </section>
      <Pagination />
    </>
  )
}

function TableIndex(): React.JSX.Element {
  return (
    <tr>
      <Checkbox />
      {indexList.map((index) => (
        <td key={index.name}>
          <index.icon className={`inline mb-0.5 mr-1 size-4 ${index.color}`} />
          {index.name}
        </td>
      ))}
      <Checkbox />
    </tr>
  )
}

function Checkbox(): React.JSX.Element {
  return (
    <th>
      <label>
        <input type="checkbox" className="checkbox" />
      </label>
    </th>
  )
}

function Skeleton(): React.JSX.Element {
  return (
    <tr>
      <Checkbox />
      {indexList.map((index) => (
        <td key={index.name}>
          <p className="skeleton h-4 w-full text-transparent" />
        </td>
      ))}
      <Checkbox />
    </tr>
  )
}

async function Tbody(): Promise<React.JSX.Element> {
  const userData: { getUsers: User[] } = await getUsers()

  return (
    <>
      {userData ? (
        userData.getUsers.map((user: User) => (
          <tr key={user.id} className="hover">
            <Checkbox />
            <td>{user.id}</td>
            <td>{new Date(user.createdAt).toLocaleString("ja-JP")}</td>
            <td>{user.name}</td>
            <td>{user.company}</td>
            <td>{user.employeeId}</td>
            <td>
              <Link
                href={`tel:${user.telephone}`}
                className="link link-primary"
              >
                {user.telephone}
              </Link>
            </td>
            <td>
              <Link href={`mailto:${user.email}`} className="link link-primary">
                {user.email}
              </Link>
            </td>
            <td>
              <Link href={`/users/${user.image}`} className="link link-primary">
                {user.image}
                <ArrowTopRightOnSquareIcon className="inline size-4 ml-1" />
              </Link>
            </td>
            <Checkbox />
          </tr>
        ))
      ) : (
        <tr>
          <th colSpan={9}>対応待ちデータなし</th>
        </tr>
      )}
    </>
  )
}
