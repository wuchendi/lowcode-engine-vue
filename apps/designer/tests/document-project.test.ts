import { describe, expect, it, vi } from 'vitest'
import { documentProject } from '../src/utils/document-project'

function fakeProject() {
  const pages = {
    home: { fileName: '/', dataSource: { list: [{ id: 'info' }] } },
    about: { fileName: '/about', dataSource: { list: [] } },
  }
  const current = {
    id: 'about',
    exportSchema: vi.fn(() => structuredClone(pages.about)),
    importSchema: vi.fn(),
  }
  const project = {
    currentDocument: current,
    exportSchema: vi.fn(() => ({
      componentsTree: [pages.home, pages.about],
    })),
    importSchema: vi.fn(),
    simulatorHost: { renderer: { rerender: vi.fn() } },
  }
  return { project, current }
}

describe('documentProject', () => {
  it('exports the current page as the only root', () => {
    const { project } = fakeProject()
    const schema = documentProject(project as never).exportSchema(1 as never)
    expect(schema.componentsTree).toEqual([
      { fileName: '/about', dataSource: { list: [] } },
    ])
  })

  it('imports into the current page, not the project', () => {
    const { project, current } = fakeProject()
    const scoped = documentProject(project as never)
    const schema = scoped.exportSchema(1 as never)
    schema.componentsTree[0].dataSource = { list: [{ id: 'user' }] } as never
    scoped.importSchema(schema)
    expect(project.importSchema).not.toHaveBeenCalled()
    expect(project.simulatorHost.renderer.rerender).toHaveBeenCalled()
    expect(current.importSchema).toHaveBeenCalledWith({
      fileName: '/about',
      dataSource: { list: [{ id: 'user' }] },
    })
  })
})
