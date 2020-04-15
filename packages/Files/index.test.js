import { AttachmentIcon } from '@welcome-ui/icons.attachment'
import { CameraIcon } from '@welcome-ui/icons.camera'
import { CsvIcon } from '@welcome-ui/icons.csv'
import { DocIcon } from '@welcome-ui/icons.doc'
import { DocxIcon } from '@welcome-ui/icons.docx'
import { MusicIcon } from '@welcome-ui/icons.music'
import { PdfIcon } from '@welcome-ui/icons.pdf'
import { VideoIcon } from '@welcome-ui/icons.video'
import { XlsIcon } from '@welcome-ui/icons.xls'
import { XlsxIcon } from '@welcome-ui/icons.xlsx'
import { ZipIcon } from '@welcome-ui/icons.zip'

import { getFileIcon, getFileName, getFileSize } from './index'

const file = {
  name: 'my-file.png',
  type: 'image/png',
  size: 4567
}

describe('getFileName', () => {
  it('should get name from simple string', () => {
    const fileName = getFileName('https://cdn.welcometothejungle.com/images/my-file.png')
    expect(fileName).toEqual('my-file.png')
  })
  it('should get name from simple string with dot', () => {
    const fileName = getFileName('https://cdn.welcometothejungle.com/images/my.file.png')
    expect(fileName).toEqual('my.file.png')
  })
  it('should get name from simple string with query string', () => {
    const fileName = getFileName(
      'https://cdn.welcometothejungle.com/images/my-file.png?expiry=20070603'
    )
    expect(fileName).toEqual('my-file.png')
  })
  it('should get name from file object', () => {
    const fileName = getFileName(file)
    expect(fileName).toEqual('my-file.png')
  })
})

describe('getFileSize', () => {
  it('should get size from simple string', () => {
    const fileSize = getFileSize('https://cdn.welcometothejungle.com/images/my-file.png')
    expect(fileSize).toEqual(null)
  })
  it('should get size from file object', () => {
    const fileSize = getFileSize(file)
    expect(fileSize).toEqual('4 KB')
  })
})

describe('getFileIcon', () => {
  it('should get default icon from simple string', () => {
    const fileIcon = getFileIcon('https://cdn.welcometothejungle.com/images/my-file.txt')
    expect(fileIcon).toEqual(AttachmentIcon)
  })
  it('should get icon from simple string', () => {
    const fileIcon = getFileIcon('https://cdn.welcometothejungle.com/images/my-file.png')
    expect(fileIcon).toEqual(CameraIcon)
  })
  it('should get icon from simple string with dot', () => {
    const fileIcon = getFileIcon('https://cdn.welcometothejungle.com/images/my.file.jpg')
    expect(fileIcon).toEqual(CameraIcon)
  })
  it('should get icon from simple string with query string', () => {
    const fileIcon = getFileIcon(
      'https://cdn.welcometothejungle.com/images/my-file.webp?expiry=20070603'
    )
    expect(fileIcon).toEqual(CameraIcon)
  })
  it('should get icon from file object', () => {
    const fileIcon = getFileIcon(file)
    expect(fileIcon).toEqual(CameraIcon)
  })
  it('should get music icon from simple string', () => {
    const fileIcon = getFileIcon('https://cdn.welcometothejungle.com/images/my-file.mp3')
    expect(fileIcon).toEqual(MusicIcon)
  })
  it('should get video icon from simple string', () => {
    const fileIcon = getFileIcon('https://cdn.welcometothejungle.com/images/my-file.mp4')
    expect(fileIcon).toEqual(VideoIcon)
  })
  it('should get pdf icon from simple string', () => {
    const fileIcon = getFileIcon('https://cdn.welcometothejungle.com/images/my-file.pdf')
    expect(fileIcon).toEqual(PdfIcon)
  })
  it('should get doc icon from simple string', () => {
    const fileIcon = getFileIcon('https://cdn.welcometothejungle.com/images/my-file.doc')
    expect(fileIcon).toEqual(DocIcon)
  })
  it('should get docx icon from simple string', () => {
    const fileIcon = getFileIcon('https://cdn.welcometothejungle.com/images/my-file.docx')
    expect(fileIcon).toEqual(DocxIcon)
  })
  it('should get xls icon from simple string', () => {
    const fileIcon = getFileIcon('https://cdn.welcometothejungle.com/images/my-file.xls')
    expect(fileIcon).toEqual(XlsIcon)
  })
  it('should get xlsx icon from simple string', () => {
    const fileIcon = getFileIcon('https://cdn.welcometothejungle.com/images/my-file.xlsx')
    expect(fileIcon).toEqual(XlsxIcon)
  })
  it('should get zip icon from simple string', () => {
    const fileIcon = getFileIcon('https://cdn.welcometothejungle.com/images/my-file.zip')
    expect(fileIcon).toEqual(ZipIcon)
  })
  it('should get csv icon from simple string', () => {
    const fileIcon = getFileIcon('https://cdn.welcometothejungle.com/images/my-file.csv')
    expect(fileIcon).toEqual(CsvIcon)
  })
})
